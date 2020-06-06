import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { AppBar } from "../components/AppBar";

import jorge from "../assets/old-man-portrait 2.png";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={`${styles.pageContainer}`}>
      <div className={styles.landing}>
        <AppBar></AppBar>
        <Row className={styles.hero}>
          <Col className={`${styles.meetCora} pr-0 d-flex flex-column justify-content-center align-text`}>
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

          <Col className="pl-0">
            <Image className={styles.welcomePicture} src={jorge} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
