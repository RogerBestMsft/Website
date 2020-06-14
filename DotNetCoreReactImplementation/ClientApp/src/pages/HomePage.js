import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";

import jorge from "../assets/old-man-portrait 2.png";
import mapImage from "../assets/map-screenshot.png"
import crowdImage from "../assets/crowd.png"

import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <main className={`${styles.pageContainer}`}>
        <AppBar></AppBar>
        <Row className={styles.hero}>
          <Col
            className={`${styles.meetCora} p-0 d-flex flex-column justify-content-center align-text`}
          >
            <Container className="  text-light">
              <h1>Meet, CORAbot.</h1>
              <p>
                A community operations resource agent working to address the
                biggest challenges in the world, including how to connect those
                with needs to resources.
              </p>
              <p>
                <Button as={Link} to="/map" variant="primary">
                  Learn more
                </Button>
              </p>
            </Container>
          </Col>

          <Col className="p-0 h-100 w-100">
            <Image className={styles.colImage} src={jorge} />
          </Col>
        </Row>
        <Row className={styles.hero}>
          <Col
            className={`${styles.colText} p-0 d-flex flex-column justify-content-center align-text`}
          >
            <Container className="">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </Container>
          </Col>

          <Col className="p-0 h-100">
            <Image className={styles.colImage} src={mapImage} />
          </Col>
        </Row>
        <Row className={styles.hero}>
          

          <Col className="p-0 h-100">
            <Image className={styles.colImage} src={crowdImage} />
          </Col>
          <Col
            className={`${styles.colText} p-0 d-flex flex-column justify-content-center align-text`}
          >
            <Container className="  ">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </Container>
          </Col>
        </Row>
        <Footer></Footer>
    </main>
  );
};
