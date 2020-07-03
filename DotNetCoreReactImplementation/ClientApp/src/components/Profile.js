import React from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";

export const Profile = ({ image, name }) => {
  return (
    // TODO: try using accordion and cards to wrap this component
    <div className="text-center m-auto">
      <Figure>
        <Figure.Image roundedCircle src={image} />
        <Figure.Caption>{name}</Figure.Caption>
      </Figure>
    </div>
  );
};
