import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import crowdImage from "../assets/crowd.png";
import mapImage from "../assets/map-screenshot.png";
import jorge from "../assets/old-man-portrait 2.png";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main">
        <Row className={styles.hero}
          style={{
            'background': '#0A1624',
            'color': 'white',
            'justifyContent': 'center',
            'padding': '5em 20%'
          }}
        >
          <h1>What is CORAbot?</h1>
          CORAbot, a Community Operations Resource Agent (CORA), is an SMS-bot designed to address one of the biggest
          challenges communities face - how to connect those with needs to available resources. With a customizable
          modular framework, CORAbot can accelerate any nonprofit or community organization’s long or short-term goals.
        </Row>
        <Row className={styles.hero}>
          <Col
            className={`${styles.meetCora} p-0 d-flex flex-column justify-content-center align-text`}
          >
            <Container className="  text-light">
              <h1>
                Learn how CORAbot can be customized for any cause.
              </h1>
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
          <Col className="p-0 h-100">
            <Image className={styles.colImage} src={mapImage} />
          </Col>
          <Col
            className={`${styles.colText} p-0 d-flex flex-column justify-content-center align-text`}
          >
            <Container className="">
              <h1>CORAbot’s map integration depicts currents needs and available resources</h1>
              <p>
                <Button as={Link} to="/map" variant="primary">
                  Learn more
                </Button>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
