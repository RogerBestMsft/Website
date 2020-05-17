import React, { useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";

import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

export const MapVisualization = () => {
  const MicrosoftRef = useRef();
  const mapRef = useRef();

  const [location, setLocation] = useState("");

  const changeLocation = (location) => {
    console.log("change location was called", location);
    if (location !== "" || location !== null || location !== undefined) {
      setLocation(location);
    }
  };

  return (
    <div className="App">
      <div className="grid-container">
        <div className="AppBar">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
              COVID-19: Resource and Needs Tracker
            </Navbar.Brand>
          </Navbar>
        </div>
        <div className="main">
          <div id="sidebar" className="sidebar d-flex flex-column">
            <div className="info mt-3">
              <Info></Info>
            </div>
            <div className="locations h-100 mt-3 d-flex ">
              <LocationFilter
                MicrosoftRef={MicrosoftRef}
                mapRef={mapRef}
                changeLocation={changeLocation}
              ></LocationFilter>
            </div>
          </div>

          <div className="content d-flex">
            <TopBar location={location}></TopBar>
            <BingMaps MicrosoftRef={MicrosoftRef} mapRef={mapRef}></BingMaps>
            <Button
              id="contactCora"
              href="sms://+14253828851;?&body=Hi%20CORA"
              variant="secondary"
            >
              Contact CORAbot
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopBar = ({ location }) => {
  return (
    <div className="TopBar bg-secondary">
      <h3>{location}</h3>
    </div>
  );
};

export const BingMaps = ({ MicrosoftRef, mapRef }) => {
  const resourcesRef = useRef([]);
  const needsRef = useRef([]);
  const infoBoxRef = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBingMapsAPIKey = async () => {
      const fetchKey = await fetch(`data/bingmapsapikey`);
      const result = await fetchKey.json();

      return result.key;
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
              "Microsoft.Maps.SpatialMath",
              "Microsoft.Maps.GeoJson",
              "Microsoft.Maps.Search",
              "Microsoft.Maps.Clustering",
            ],
            resolve
          );
        });
      }
    };

    const getData = async () => {
      try {
        const fetchResources = await fetch(`data/resources`);
        const tempResources = await fetchResources.json();
        const fetchNeeds = await fetch(`data/needs`);
        const tempNeeds = await fetchNeeds.json();

        resourcesRef.current = tempResources;
        needsRef.current = tempNeeds;
      } catch (e) {}
    };

    const plotPushpins = (resources, type, pinsList) => {
      for (const resource of resources) {
        let locationResource = new MicrosoftRef.current.Maps.Location(
          resource.locationCoordinates.position.latitude,
          resource.locationCoordinates.position.longitude
        );
        //Create custom Pushpin
        let pushpinResource = new MicrosoftRef.current.Maps.Pushpin(
          locationResource,
          {
            color: type ? "green" : "red",
          }
        );
        pushpinResource.metadata = {
          title: resource.name,
          category: resource.category,
          quantity: resource.quantity,
          description: resource.description,
        };
        MicrosoftRef.current.Maps.Events.addHandler(
          pushpinResource,
          "click",
          pushpinClicked
        );
        //Add the pushpin to the map
        pinsList.push(pushpinResource);
      }

      return pinsList;
    };

    const pushpinClicked = (event) => {
      let pushpin = event.target;
      if (pushpin.metadata) {
        const { title, category, quantity, description } = pushpin.metadata;
        const component = (
          <InfoBoxTemplate
            title={title}
            category={category}
            quantity={quantity}
            description={description}
          />
        );
        let infoBoxHtml = renderToString(component);
        infoBoxRef.current.setOptions({
          location: pushpin.getLocation(),
          htmlContent: infoBoxHtml,

          visible: true,
        });
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

        // eslint-disable-next-line no-unused-vars
        let resourceType = true;
        let pinsList = [];
        plotPushpins(resourcesRef.current, resourceType, pinsList);
        plotPushpins(needsRef.current, !resourceType, pinsList);

        var clusterLayer = new MicrosoftRef.current.Maps.ClusterLayer(pinsList);
        mapRef.current.layers.insert(clusterLayer);
      }
    };

    const loop = async () => {
      setLoading(true);
      const key = await fetchBingMapsAPIKey();
      await loadBingApi();
      await loadBingMapsModules();
      await getData();
      loadMap(key);
      addPushpins();
      setLoading(false);
    };

    loop();
  }, [MicrosoftRef, mapRef]);

  return (
    <>
      {loading ? <Loader /> : null}
      <div id="map" className="map"></div>
    </>
  );
};

export const Info = () => {
  //TODO: make request here and not use props
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
    <div className="mx-2 px-1 border-bottom">
      <div className="d-flex align-items-center justify-content-between">
        <div className="h3 font-weight-bold text-dark">Total Donations</div>
        <div className="h3 text-success">{resourcesTotal}</div>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="h3 font-weight-bold text-dark">Total Requests</div>
        <div className="h3 text-danger">{needsTotal}</div>
      </div>
    </div>
  );
};

export const LocationFilter = ({ MicrosoftRef, mapRef, changeLocation }) => {
  //TODO: make request here and not use props

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
    if (MicrosoftRef.current !== undefined) {
      let locationText = event.target.innerText;
      changeLocation(locationText);
      let searchManager = new MicrosoftRef.current.Maps.Search.SearchManager(
        mapRef.current
      );

      let searchRequest = {
        where: locationText,
        callback: (r) => {
          //Add the first result to the map and zoom into it.
          if (r && r.results && r.results.length > 0) {
            let pin = new MicrosoftRef.current.Maps.Pushpin(
              r.results[0].location
            );
            mapRef.current.entities.push(pin);

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
        return user["location"].toLowerCase().includes(search);
      }
      return false;
    });

    setSearchResults(unique);
  }, [search, locations]);

  return loading ? (
    <Loader />
  ) : (
    <div className="d-flex flex-column  ">
      <div className="d-flex flex-column px-1 mx-2 ">
        <div className="h5 font-weight-bold">Browse</div>
        <InputGroup className="">
          <FormControl
            placeholder="Filter to a Location"
            aria-label="filter locations"
            aria-describedby="basic-addon2"
            onChange={handleSearch}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={locateUser}>
              Locate!
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      {/* TODO: try changing this to radio buttons with button class applied */}
      <ToggleButtonGroup
        id="scrollLocations"
        type="radio"
        name="locations"
        className="d-flex px-1 mx-2 flex-column"
      >
        {searchResults.map((item, index) => (
          <ToggleButton
            value={index}
            key={index}
            className="   my-2"
            variant="outline-primary"
            onClick={handleLocationClick}
          >
            {item.location}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};
//TODO: make a this work for both needs and resources
export const InfoBoxTemplate = ({ title, category, quantity, description }) => {
  return (
    <Card>
      <Card.Header>{category}</Card.Header>
      <Card.Body>
        <Card.Title className="">
          <span>{title}</span>
          <span>{quantity}</span>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
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
