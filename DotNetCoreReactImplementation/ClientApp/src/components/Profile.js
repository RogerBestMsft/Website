import React from "react";

import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";


export const Profile = ({ image, name, profile }) => {
  return (
    <Figure className="text-center m-auto d-block">
      <Figure.Image roundedCircle src={image} />
      <Figure.Caption>{name}</Figure.Caption>
      <Button as={Link} to={profile}>
        Profile
      </Button>
    </Figure>
  );
};

