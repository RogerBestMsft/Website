import React, { useEffect, useState, useRef } from "react";

import { polygon, pointGrid, bbox } from "@turf/turf";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Nav from "react-bootstrap/Nav";
import Toast from "react-bootstrap/Toast";
import Image from "react-bootstrap/Image";

import logo from "../assets/coraLogo.svg";
import pushpin from "../assets/Pinscropped.svg";
import pushpinInvert from "../assets/Pin Invertcropped.svg";

export const MapVisualization = () => {
  const MicrosoftRef = useRef();
  const mapRef = useRef();

  const [location, setLocation] = useState(" ");
  const [show, setShow] = useState(true);

  const changeLocation = (location) => {
    console.log("change location was called", location);
    if (location !== "" || location !== null || location !== undefined) {
      setLocation(location);
    }
  };

  return (
    <div className="App">
      <div className="grid-container">
        <AppBar></AppBar>
        <Info></Info>
        <LocationFilter
          MicrosoftRef={MicrosoftRef}
          mapRef={mapRef}
          changeLocation={changeLocation}
        ></LocationFilter>

        <TopBar location={location}></TopBar>
        <BingMaps
          MicrosoftRef={MicrosoftRef}
          mapRef={mapRef}
          setShow={setShow}
        ></BingMaps>
        <Button
          className="contactCora"
          href="sms://+14253828851;?&body=Hi%20CORA"
          variant="secondary"
        >
          Contact CORAbot
        </Button>
        {/* <AlertAnon show={show} setShow={setShow}></AlertAnon> */}
      </div>
    </div>
  );
};
const AlertAnon = ({ show, setShow }) => {
  return (
    <Toast show={show} onClose={() => setShow(false)} delay={4000} autohide>
      <Toast.Header closeButton>
        <Toast.Title>Attention</Toast.Title>
      </Toast.Header>
      <Toast.body>
        {" "}
        Locations have been anonymized and are approximate. Read more in our
        <Link style={{ color: "white" }} to="/privacy">
          {" "}
          Privacy Promise!
        </Link>{" "}
        Learn more in our{" "}
        <Link style={{ color: "white" }} to="/faq">
          FAQ's
        </Link>
      </Toast.body>
    </Toast>
  );
};

export const AppBar = () => {
  return (
    <div className="AppBar w-100">
      <Navbar variant="light" className="justify-content-between h-100">
        <Navbar.Brand as={Link} to="/home" className="ml-3 h-100">
          <Image src={logo} className="h-100" alt="CORAbot logo" />
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link as={Link} to="/home">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/home">
            Team
          </Nav.Link>
          <Nav.Link as={Link} to="/home">
            Resource
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export const TopBar = ({ location }) => {
  return (
    <Card className="TopBar bgPrimary ml-lg-3">
      <div className="h6 mx-3 text-light">
        COVID-19: RESOURCE AND NEEDS TRACKER
      </div>
    </Card>
  );
};

export const BingMaps = ({ MicrosoftRef, mapRef, setShow }) => {
  const resourcesRef = useRef({});
  const needsRef = useRef({});
  const infoBoxRef = useRef();
  const bingMapsApiKey = useRef("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBingMapsAPIKey = async () => {
      const fetchKey = await fetch(`data/bingmapsapikey`);
      const result = await fetchKey.json();

      bingMapsApiKey.current = result.key;
    };

    const loadBingApi = () => {
      const callbackName = "bingAPIReady";
      let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}`;

      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.async = true;
        script.defer = true;
        window[callbackName] = () => {
          MicrosoftRef.current = window.Microsoft;
          resolve();
        };
        script.onerror = (error) => {
          reject(error);
        };
        document.body.appendChild(script);
      });
    };

    const loadMap = (key) => {
      if (MicrosoftRef.current !== undefined) {
        mapRef.current = new MicrosoftRef.current.Maps.Map("#map", {
          credentials: key,
          enableCORS: true,
          showScalebar: false,
          showTermsLink: false,
        });
      }
    };

    const loadBingMapsModules = () => {
      if (MicrosoftRef.current !== undefined) {
        return new Promise((resolve) => {
          MicrosoftRef.current.Maps.loadModule(
            [
              "Microsoft.Maps.Search",
              "Microsoft.Maps.Clustering",
              "Microsoft.Maps.SpatialDataService",
            ],
            resolve
          );
        });
      }
    };

    const getData = async () => {
      const group = (resourceList, type) => {
        const result = {};
        for (const resource of resourceList) {
          if (!result[resource.location]) {
            result[resource.location] = [];
          }
          resource.type = type ? "resources" : "needs";
          result[resource.location].push(resource);
        }

        return result;
      };
      const combine = (resources, needs) => {
        // Unique set of key in  both resources and needs
        console.count("combine");
        delete resources.null;
        delete needs.null;
        const uniqueKeys = [
          ...new Set([...Object.keys(resources), ...Object.keys(needs)]),
        ];
        let result = {};
        for (const key of uniqueKeys) {
          result[key] = [...(resources[key] ?? []), ...(needs[key] ?? [])];
          console.log("keys", result);
        }

        return result;
      };

      try {
        const fetchResources = await fetch(`data/resources`);
        const tempResources = await fetchResources.json();
        const fetchNeeds = await fetch(`data/needs`);
        const tempNeeds = await fetchNeeds.json();

        const resources = group(tempResources, true);
        const needs = group(tempNeeds, false);

        resourcesRef.current = combine(resources, needs);
      } catch (e) {}
    };

    const plotPushpins = (resources, pinsList) => {
      let requestOptions = {
        lod: 0,
        entityType: "Postcode1",
        getAllPolygons: false,
      };
      let polygonOptions = {
        strokeColor: "blue",
        visible: true,
      };
      for (const location in resources) {
        MicrosoftRef.current.Maps.SpatialDataService.GeoDataAPIManager.getBoundary(
          location,
          requestOptions,
          bingMapsApiKey.current,
          function (data) {
            const p = data.results[0].Polygons[0];
            const rings = p.getRings();
            const parsedRings = [];
            for (const ring of rings) {
              const parsedRing = [];
              for (const coords of ring) {
                const parsedCoords = [coords.latitude, coords.longitude];
                parsedRing.push(parsedCoords);
              }
              parsedRings.push(parsedRing);
            }
            const poly = polygon(parsedRings);
            let distance = 0.5;

            let grid = pointGrid(bbox(poly), distance, { mask: poly });
            let a = grid.features;
            for (let i = a.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [a[i], a[j]] = [a[j], a[i]];
            }

            for (const resource of resources[location]) {
              let point;
              if (grid.features.length > 0) {
                point = grid.features.pop();
              } else {
                grid = pointGrid(bbox(poly), distance, { mask: poly });
                a = grid.features;
                for (let i = a.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [a[i], a[j]] = [a[j], a[i]];
                }
                point = grid.features.pop();
              }

              if (point !== undefined) {
                const locationResource = new MicrosoftRef.current.Maps.Location(
                  point.geometry.coordinates[0],
                  point.geometry.coordinates[1]
                );
                //Create custom Pushpin
                const pushpinResource = new MicrosoftRef.current.Maps.Pushpin(
                  locationResource,
                  {
                    icon: resource.type === "needs" ? pushpin : pushpinInvert,
                    // iconSize: { width: 25, height: 25 },
                    anchor: new MicrosoftRef.current.Maps.Point(50, 50),
                  }
                );
                pushpinResource.metadata = {
                  title: resource.name,

                  category: resource.category,
                  quantity: resource.quantity,
                  description: resource.instructions ?? " ",
                };
                MicrosoftRef.current.Maps.Events.addHandler(
                  pushpinResource,
                  "click",
                  pushpinClicked
                );
                //Add the apushpin to the map
                pinsList.push(pushpinResource);
                console.count("pushpin added");
              }
            }
            mapRef.current.entities.push(data.results[0].Polygons[0]);
          },
          polygonOptions,
          function errCallback(callbackState, networkStatus, statusMessage) {
            console.log(callbackState);
            console.log(networkStatus);
            console.log(statusMessage);
          }
        );
      }
      return pinsList;
    };

    const pushpinClicked = (event) => {
      let pushpin = event.target;
      if (pushpin.metadata) {
        const { title, category, quantity, description } = pushpin.metadata;

        //TODO: try inject the htmal via js
        infoBoxRef.current.setOptions({
          location: pushpin.getLocation(),
          title: `${category} : ${title}  | ${quantity}`,
          description: `${description}`,
          showCloseButton: true,

          visible: true,
        });
      }
    };

    const customizeClusteredPin = (cluster) => {
      if (MicrosoftRef.current !== undefined) {
        MicrosoftRef.current.Maps.Events.addHandler(
          cluster,
          "click",
          clusteredClicked
        );
      }
    };

    const clusteredClicked = (e) => {
      if (e.target.containedPushpins) {
        var locs = [];
        for (var i = 0, len = e.target.containedPushpins.length; i < len; i++) {
          //Get the location of each pushpin.
          locs.push(e.target.containedPushpins[i].getLocation());
        }

        //Create a bounding box for the pushpins.
        var bounds = MicrosoftRef.current.Maps.LocationRect.fromLocations(locs);

        //Zoom into the bounding box of the cluster.
        //Add a padding to compensate for the pixel area of the pushpins.
        mapRef.current.setView({ bounds: bounds, padding: 100 });
      }
    };

    const addPushpins = () => {
      if (MicrosoftRef.current !== undefined && mapRef.current !== undefined) {
        let center = mapRef.current.getCenter();
        infoBoxRef.current = new MicrosoftRef.current.Maps.Infobox(center, {
          visible: false,
          showCloseButton: true,
        });

        infoBoxRef.current.setMap(mapRef.current);

        let pinsList = [];
        plotPushpins(resourcesRef.current, pinsList);
        var clusterLayer = new MicrosoftRef.current.Maps.ClusterLayer(
          pinsList,
          { clusteredPinCallback: customizeClusteredPin }
        );
        mapRef.current.layers.insert(clusterLayer);
      }
    };

    const loop = async () => {
      setLoading(true);
      await fetchBingMapsAPIKey();
      await loadBingApi();
      await loadBingMapsModules();
      await getData();
      loadMap(bingMapsApiKey.current);
      addPushpins();
      setLoading(false);
      setShow(true);
    };

    loop();
  }, [MicrosoftRef, mapRef]);

  return (
    <div className="map h-100 w-100 d-flex">
      {loading ? <Loader /> : null}
      <div id="map"></div>
    </div>
  );
};

export const Info = () => {
  const [resourcesTotal, setResourcesTotal] = useState(0);
  const [needsTotal, setNeedsTotal] = useState(0);

  useEffect(() => {
    const fetchTotals = async () => {
      const response = await fetch(`data/totals`);
      if (!response.ok) throw new Error(response.status);
      let totals = await response.json();
      setResourcesTotal(totals.resources);
      setNeedsTotal(totals.needs);
    };
    fetchTotals();
  }, []);
  return (
    <Card className="info ml-lg-3 " text="light">
      <div className="clearfix m-sm-3 m-lg-3">
        <div className="float-left font-weight-bold">Total Donations</div>
        <div className="float-right font-weight-bold">
          {" " + resourcesTotal}
        </div>
      </div>
      <div className="clearfix m-sm-3 m-lg-3">
        <div className="float-left font-weight-bold">Total Requests</div>
        <div className="float-right font-weight-bold">{" " + needsTotal}</div>
      </div>
    </Card>
  );
};

export const LocationFilter = ({ MicrosoftRef, mapRef, changeLocation }) => {
  //TODO: show location in sidebar

  const [location, setLocation] = useState("");
  const locateUser = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let loc = new MicrosoftRef.current.Maps.Location(
        position.coords.latitude,
        position.coords.longitude
      );

      //Center the map on the user's location.
      mapRef.current.setView({ center: loc, zoom: 15 });
    });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleLocationClick = (event) => {
    event.target.focus();
    if (MicrosoftRef.current !== undefined) {
      let locationText = event.target.innerText;
      setLocation(locationText);
      let searchManager = new MicrosoftRef.current.Maps.Search.SearchManager(
        mapRef.current
      );

      let searchRequest = {
        where: locationText,
        callback: (r) => {
          //Add the first result to the map and zoom into it.
          if (r && r.results && r.results.length > 0) {
            /* let pin = new MicrosoftRef.current.Maps.Pushpin(
              r.results[0].location
            );
            mapRef.current.entities.push(pin);
 */
            mapRef.current.setView({ bounds: r.results[0].bestView });
          }
        },
        errorCallback: (e) => {
          //If there is an error, alert the user about it.
          console.log("No results found.");
        },
      };

      //Make the geocode request.
      searchManager.geocode(searchRequest);
    }
  };
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      const response = await fetch(`data/locations`);
      if (!response.ok) throw new Error(response.status);
      let results = await response.json();
      //TODO: try to do this filtering on the server using "Distinct"
      const unique = [
        ...new Map(results.map((item) => [item["location"], item])).values(),
      ];
      setLocations(unique);
      setLoading(false);
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    const unique = locations.filter((user) => {
      if (user.location !== null) {
        return user["location"].toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    setSearchResults(unique);
  }, [search, locations]);

  return loading ? (
    <div className="locations w-100 bgPrimary ml-lg-3">
      <Loader />
    </div>
  ) : (
    <Card className="locations  bgPrimary  ml-lg-3">
      <div className=" border-bottom-1 mx-3 filter">
        <div className="h5 font-weight-bold">Browse</div>
        <InputGroup className="">
          <FormControl
            placeholder="Filter to a Location"
            aria-label="filter locations"
            aria-describedby="basic-addon2"
            onChange={handleSearch}
          />
          <InputGroup.Append>
            <Button variant="outline-light" onClick={locateUser}>
              Locate!
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <div>{location}</div>
      </div>
      <div className="w-100 places">
        <div className="mx-3">
          {searchResults.map((item, index) => (
            <Button
              block
              value={index}
              key={index}
              className="   my-2"
              variant="outline-light"
              onClick={handleLocationClick}
            >
              {item.location}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const Loader = () => {
  return (
    <div className="h-100 w-100 d-flex align-content-center justify-content-center">
      <Spinner
        className=""
        style={{ alignSelf: "center" }}
        animation="border"
        variant="primary"
      />
    </div>
  );
};
