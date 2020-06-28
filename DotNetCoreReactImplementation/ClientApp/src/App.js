import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ErrorPage } from "./pages/ErrorPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { LearnMorePage } from "./pages/LearnMorePage";
import { MapVisualization } from "./pages/MapVisualization";
import { NeedsPage } from "./pages/NeedsPage";
import { PartnersPage } from "./pages/PartnersPage";
import { PrivacyPage } from "./pages/PrivacyPage";




/*
.########..########...#######........##.########..######..########....########..#######..########...#######...######.
.##.....##.##.....##.##.....##.......##.##.......##....##....##..........##....##.....##.##.....##.##.....##.##....##
.##.....##.##.....##.##.....##.......##.##.......##..........##..........##....##.....##.##.....##.##.....##.##......
.########..########..##.....##.......##.######...##..........##..........##....##.....##.##.....##.##.....##..######.
.##........##...##...##.....##.##....##.##.......##..........##..........##....##.....##.##.....##.##.....##.......##
.##........##....##..##.....##.##....##.##.......##....##....##..........##....##.....##.##.....##.##.....##.##....##
.##........##.....##..#######...######..########..######.....##..........##.....#######..########...#######...######.
*/

//TODO: change the column layout of members and advisors in  about page
//TODO: fix map grid
//TODO: add tests
//TODO: use semantic html and address accessability
//TODO: build mobile view of pages

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
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
