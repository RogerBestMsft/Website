import React from "react";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import logo from "../assets/coraLogo.svg";

export const AppBar = () => {
  return (
    <div className="AppBar w-100">
      <Navbar
        variant="light"
        sticky="top"
        className="justify-content-between h-100"
      >
        <Navbar.Brand as={Link} to="/" className="ml-3 h-100">
          <Image src={logo} className="h-100" alt="CORAbot logo" />
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
            Needs
          </Nav.Link>
          <Button as={Link} to="/contact" variant="primary">Contact</Button>
        </Nav>
      </Navbar>
    </div>
  );
};