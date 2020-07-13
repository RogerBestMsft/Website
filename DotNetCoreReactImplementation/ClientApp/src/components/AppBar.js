import React from "react";

import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

import styles from "./AppBar.module.css";
import logo from "../assets/coraLogo.svg";
// newer logo
// for some reason the font is times new roman/serif not the original font
import logo2 from "../assets/Logo.svg"; 

export const AppBar = () => {
  return (
    <Navbar
      variant="light"
      bg="light"
      sticky="top"
      className={`${styles.AppBar} justify-content-between`}
      as="header"
    >
      <Navbar.Brand as={NavLink} to="/home" className="ml-3 ">
        <Image src={logo} className={styles.logo} alt="CORAbot logo" />
      </Navbar.Brand>
      <Nav className={styles.navb}>
        <NavDropdown title="About" className={styles.navLink}>
          <NavDropdown.Item as={NavLink} to="/about" activeClassName="active">
            Our Team
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/learn" activeClassName="active">
            Technology
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={NavLink} className={styles.navLink} to="/map" activeClassName="active">
          Map
        </Nav.Link>
        <Nav.Link as={NavLink} className={styles.navLink} to="/needs" activeClassName="active">
          Case Studies
        </Nav.Link>
        <Button as={NavLink} className={styles.navLink} to="/contact" variant="primary">
          Contact
        </Button>
      </Nav>
    </Navbar>
  );
};
