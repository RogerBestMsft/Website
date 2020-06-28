import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./ContactPage.module.css";


export const ContactPage = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main">
        <Row as="section" className={styles.form}>
          <Col></Col>
          <Col>
            <Form>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Password</Form.Label>
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
              <Button variant="primary" block type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
