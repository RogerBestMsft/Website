import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./ContactPage.module.css";
import { useForm } from "react-hook-form";
import crowdImage from "../assets/crowd.png";

export const ContactPage = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactFail, setContactFail] = useState(false);
  const { register, handleSubmit } = useForm();
  const contact = async (data) => {
    //TODO: debug this because sometimes it  hangs and the  fetch does go through
    const response = await fetch(`forms/contact`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    result.contacted ? setContactSuccess(true) : setContactFail(true);
  };

  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main">
        <Row as="section" className={`${styles.form} backgroundSecondary`}>
          {/* 
           * Sets the div bg and adds blue color filter
           * Inner image sets height
           * Actual filter color TBD
           */}
          <Col sm={0} md={6} lg={6} className={styles.colImageWrapper} style={{
            'backgroundImage': `url(${crowdImage})`
          }}>
            <Image className={styles.colImage} src={crowdImage}/>
          </Col>
          <Col sm={12} md={6} lg={6} className={` p-5`}>
            <h2 className={styles.colFormHeader}>Contact Us</h2>
            <Form onSubmit={handleSubmit(contact)}>
              <Form.Group controlId="firstName">
                <Form.Control
                  name="FirstName"
                  ref={register({ required: true, minLength: 1 })}
                  type="text"
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Control
                  name="LastName"
                  ref={register({ required: true, minLength: 1 })}
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  name="Email"
                  ref={register({ required: true, minLength: 1 })}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  name="Details"
                  ref={register({ required: true, minLength: 1 })}
                  as="textarea"
                  rows="6"
                  placeholder="Message"
                />
              </Form.Group>
              <Button variant="primary" block type="submit">
                Send Message
              </Button>
              {contactSuccess && (
                <span>You have been added to our mailing list</span>
              )}
              {contactFail && (
                <span>
                  Sorry something went wrong we were unable to add you to our
                  mailing list
                </span>
              )}
            </Form>
            <Button variant="primary" className={styles.chatButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 7 8 C 4.253906 8 2 10.253906 2 13 L 2 37 C 2 39.746094 4.253906 42 7 42 L 11.09375 42 C 11.230469 43.203125 11.214844 44.316406 10.90625 45.25 C 10.527344 46.398438 9.820313 47.363281 8.5 48.15625 C 8.128906 48.390625 7.957031 48.839844 8.070313 49.261719 C 8.183594 49.683594 8.5625 49.984375 9 50 C 13.242188 50 18.105469 47.785156 20.5625 42 L 43 42 C 45.746094 42 48 39.746094 48 37 L 48 13 C 48 10.253906 45.746094 8 43 8 Z M 7 10 L 43 10 C 44.65625 10 46 11.34375 46 13 L 46 37 C 46 38.65625 44.65625 40 43 40 L 20 40 C 19.582031 40 19.207031 40.261719 19.0625 40.65625 C 17.507813 44.898438 14.730469 46.917969 11.84375 47.65625 C 12.234375 47.097656 12.605469 46.507813 12.8125 45.875 C 13.332031 44.296875 13.289063 42.570313 12.96875 40.8125 C 12.878906 40.347656 12.476563 40.007813 12 40 L 7 40 C 5.34375 40 4 38.65625 4 37 L 4 13 C 4 11.34375 5.34375 10 7 10 Z M 15 22 C 13.355469 22 12 23.355469 12 25 C 12 26.644531 13.355469 28 15 28 C 16.644531 28 18 26.644531 18 25 C 18 23.355469 16.644531 22 15 22 Z M 25 22 C 23.355469 22 22 23.355469 22 25 C 22 26.644531 23.355469 28 25 28 C 26.644531 28 28 26.644531 28 25 C 28 23.355469 26.644531 22 25 22 Z M 35 22 C 33.355469 22 32 23.355469 32 25 C 32 26.644531 33.355469 28 35 28 C 36.644531 28 38 26.644531 38 25 C 38 23.355469 36.644531 22 35 22 Z M 15 24 C 15.5625 24 16 24.4375 16 25 C 16 25.5625 15.5625 26 15 26 C 14.4375 26 14 25.5625 14 25 C 14 24.4375 14.4375 24 15 24 Z M 25 24 C 25.5625 24 26 24.4375 26 25 C 26 25.5625 25.5625 26 25 26 C 24.4375 26 24 25.5625 24 25 C 24 24.4375 24.4375 24 25 24 Z M 35 24 C 35.5625 24 36 24.4375 36 25 C 36 25.5625 35.5625 26 35 26 C 34.4375 26 34 25.5625 34 25 C 34 24.4375 34.4375 24 35 24 Z"></path>
              </svg>
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
