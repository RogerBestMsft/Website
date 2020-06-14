import React from "react";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { FaqPage } from "./pages/FaqPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { MapVisualization } from "./pages/MapVisualization";
import { LearnMorePage } from "./pages/LearnMorePage";
import { PartnersPage } from "./pages/PartnersPage";
import { NeedsPage } from "./pages/NeedsPage";
import { ErrorPage } from "./pages/ErrorPage";

import { Switch, Route } from "react-router-dom";

import "./App.css";

/*
.########..########...#######........##.########..######..########....########..#######..########...#######...######.
.##.....##.##.....##.##.....##.......##.##.......##....##....##..........##....##.....##.##.....##.##.....##.##....##
.##.....##.##.....##.##.....##.......##.##.......##..........##..........##....##.....##.##.....##.##.....##.##......
.########..########..##.....##.......##.######...##..........##..........##....##.....##.##.....##.##.....##..######.
.##........##...##...##.....##.##....##.##.......##..........##..........##....##.....##.##.....##.##.....##.......##
.##........##....##..##.....##.##....##.##.......##....##....##..........##....##.....##.##.....##.##.....##.##....##
.##........##.....##..#######...######..########..######.....##..........##.....#######..########...#######...######.
*/

//TODO: change split screens of text and picture from col to div and floats
//TODO: change the column layout of memberys and advisors in  about page
//TODO: fix map grid
//TODO: add tests
//TODO: build mobile view of pages

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/partners">
        <PartnersPage />
      </Route>
      <Route exact path="/needs">
        <NeedsPage />
      </Route>
      <Route exact path="/learn">
        <LearnMorePage />
      </Route>
      <Route exact path="/privacy">
        <PrivacyPage />
      </Route>
      <Route exact path="/faq">
        <FaqPage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
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
