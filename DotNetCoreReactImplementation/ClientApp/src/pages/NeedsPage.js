import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";

import jorge from "../assets/old-man-portrait 2.png";
import styles from "./NeedsPage.module.css";

export const NeedsPage = () => {
  return (
    <main className={`${styles.pageContainer}`}>
      <AppBar></AppBar>
      <Row className={styles.hero}>
        <Col
          className={`${styles.meetCora} p-0 d-flex flex-column justify-content-center align-text`}
        >
          <Container className="  text-light">
            <h1>Have a need, Meet a need</h1>
            <p>
              ​Meet Jorge. <br /> Jorge currently does not have access to food
              or prescription medicine. Due to the COVID-19 pandemic, he cannot
              leave the house because he is immunocompromised.​ <br /> More
              importantly, he is not the only one going through this situation…​{" "}
              <br />
              Jorge is just one of the millions of men, women and children who
              are struggling to get food, medicine, and basic services.
            </p>
          </Container>
        </Col>

        <Col className="p-0 h-100 w-100">
          <Image className={styles.colImage} src={jorge} />
        </Col>
      </Row>
      <Container>
        <h2>COVID Needs</h2>
        <Row>
          <h3 className="text-primary">Medical Supplies</h3>
          <p>
            Medical Supplies Common needed medical supplies are N-95 masks and
            face shields, eye protection, gloves, cotton swabs, hand sanitizer,
            respiration tubes, ventilators, wipes/soaps, and more.
          </p>
          <p>
            The specific medical supplies needed change depending on the area
            and levels of accessibility. For instance, rural areas and makeshift
            hospitals have shown a strong need for disinfectant supplies,
            differing from urban areas.
          </p>
        </Row>
        <Row>
          <h3 className="text-primary">Medical Supplies</h3>
          <p>
            Medical Supplies Common needed medical supplies are N-95 masks and
            face shields, eye protection, gloves, cotton swabs, hand sanitizer,
            respiration tubes, ventilators, wipes/soaps, and more.
          </p>
          <p>
            The specific medical supplies needed change depending on the area
            and levels of accessibility. For instance, rural areas and makeshift
            hospitals have shown a strong need for disinfectant supplies,
            differing from urban areas.
          </p>
        </Row>
        <Row>
          <h3 className="text-primary">Medical Supplies</h3>
          <p>
            Medical Supplies Common needed medical supplies are N-95 masks and
            face shields, eye protection, gloves, cotton swabs, hand sanitizer,
            respiration tubes, ventilators, wipes/soaps, and more.
          </p>
          <p>
            The specific medical supplies needed change depending on the area
            and levels of accessibility. For instance, rural areas and makeshift
            hospitals have shown a strong need for disinfectant supplies,
            differing from urban areas.
          </p>
        </Row>
        <Row>
          <h3 className="text-primary">Medical Supplies</h3>
          <p>
            Medical Supplies Common needed medical supplies are N-95 masks and
            face shields, eye protection, gloves, cotton swabs, hand sanitizer,
            respiration tubes, ventilators, wipes/soaps, and more.
          </p>
          <p>
            The specific medical supplies needed change depending on the area
            and levels of accessibility. For instance, rural areas and makeshift
            hospitals have shown a strong need for disinfectant supplies,
            differing from urban areas.
          </p>
        </Row>
      </Container>
      <Footer></Footer>
    </main>
  );
};
