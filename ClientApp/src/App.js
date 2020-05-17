import React from "react";
import { Home } from "./components/Home";
import { MapVisualization } from "./components/MapVisualization";
import { Switch, Route } from "react-router-dom";

import "./custom.css";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/map">
        <MapVisualization />
      </Route>
      <Route path="*">
        <div>
          <h1>Error 404: Page Not Found!</h1>
        </div>
      </Route>
    </Switch>
  );
};
