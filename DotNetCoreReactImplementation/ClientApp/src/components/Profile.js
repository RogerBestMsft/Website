import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Figure from "react-bootstrap/Figure";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

export const Profile = ({ image, name, profile }) => {
  const [open, setOpen] = useState(false);
  return (
    // TODO: try using accordion and cards to wrap this component
    <>
      <Figure
        onClick={() => setOpen(!open)}
        className="text-center m-auto d-block"
      >
        <Figure.Image roundedCircle src={image} />
        <Figure.Caption>{name}</Figure.Caption>
        <Button as={Link} to={profile}>
          Profile
        </Button>
      </Figure>
      <Collapse in={open} className={styles.info}>
        <Jumbotron className={styles.info}>Test</Jumbotron>
      </Collapse>
    </>
  );
};
