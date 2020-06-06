import React from "react";

import { Home } from "./pages/Home";
import { Faq } from "./pages/Faq";
import { Privacy } from "./pages/Privacy";
import { MapVisualization } from "./pages/MapVisualization";
import { ErrorPage } from "./pages/ErrorPage";

import { Switch, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      <Route exact path="/faq">
        <Faq />
      </Route>
      <Route path="/map">
        <MapVisualization />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
};
