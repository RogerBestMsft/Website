import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";

import styles from "./PartnersPage.module.css";

export const PartnersPage = () => {
  return (
    <main className={`${styles.pageContainer}`}>
        <AppBar></AppBar>
        <Row className={styles.content}>
          <Container className="  ">
            <h1>Partner Program</h1>
            <p>
              The CORA Partners Program connects with non-profits and
              non-governmental organizations (NGOs) to support their efforts in
              helping those in need. By adjusting CORAbot to adapt to specific
              community causes, these nonprofits and NGOs are able to increase
              their efficiency and accuracy in matching resource to need. The
              Project CORA team understands and agrees that privacy is a
              critical component in creating any resource. This is why all of
              CORAbot’s responses are securely stored and rendered in a
              privacy-preserving data visualization showing a view with either
              needs, or resources. Microsoft's matching algorithms match
              individuals to the best possible extent. CORAbot is open sourced
              with the intention that the community will expand upon it. The
              Project CORA team is actively looking to find more organizations
              to partner with and are passionate to serve any cause that will
              benefit those in need.
            </p>
          </Container>
        </Row>
        <Row className={`${styles.form} text-light backgroundPrimary `}>
          <Container>
            <Form>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Check type="email" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
              <Button variant="secondary"  type="submit">
                Send Message
              </Button>
            </Form>
          </Container>
        </Row>
        <Footer></Footer>
    </main>
  );
};
