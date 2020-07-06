import React from "react";
import Figure from "react-bootstrap/Figure";

export const Profile = ({ image, name }) => {
  return (
    <div className="text-center m-auto">
      <Figure>
        <Figure.Image roundedCircle src={image} />
        <Figure.Caption>{name}</Figure.Caption>
      </Figure>
    </div>
  );
};
