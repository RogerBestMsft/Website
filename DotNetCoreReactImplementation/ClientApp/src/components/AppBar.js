import React from "react";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import styles from "./AppBar.module.css";
import logo from "../assets/coraLogo.svg";

export const AppBar = () => {
  return (
    <Navbar
      variant="light"
      bg="light"
      sticky="top"
      className="AppBar justify-content-between"
      as="header"
    >
      <Navbar.Brand as={Link} to="/" className="ml-3 ">
        <Image src={logo} className={styles.logo} alt="CORAbot logo" />
      </Navbar.Brand>
      <Nav className="">
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/partners">
          Partner Program
        </Nav.Link>
        <Nav.Link as={Link} to="/map">
          Resources
        </Nav.Link>
        <Nav.Link as={Link} to="/needs">
          Satisfying Needs
        </Nav.Link>
        <Button as={Link} to="/contact" variant="primary">
          Contact
        </Button>
      </Nav>
    </Navbar>
  );
};
