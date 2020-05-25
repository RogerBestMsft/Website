import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h1>
        Visit the map visualization <Link to="/map">here</Link>
      </h1>
    </div>
  );
};
