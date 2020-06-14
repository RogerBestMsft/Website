import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
export const PrivacyPage = () => {
  return (
    <div>
      <AppBar></AppBar>
      <h1>Privacy Promise goes</h1>
      <h1>
        Visit the map visualization <Link to="/map">here</Link>
      </h1>
    </div>
  );
};
