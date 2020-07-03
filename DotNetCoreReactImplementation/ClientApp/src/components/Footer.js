import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [region, setRegion] = useState("United States");
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);
  const [subscribedFail, setSubscribedFail] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const subscribe = async (data) => {
    //TODO: debug this because sometimes it  hangs and the  fetch does go through
    const response = await fetch(`forms/subscribe`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    result.subscribed ? setSubscribedSuccess(true) : setSubscribedFail(true);
  };

  return (
    <footer className={styles.footer}>
      <Container className="text-light p-3">
        <Row>
          <Col>
            <h4>About CORAbot</h4>
            <ul>
              <li>
                <Link to="/">About CORAbot</Link>
              </li>
              <li>
                <Link to="/">Affiliates</Link>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
              <li>
                <Link to="/">CORA</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Help & FAQs</h4>
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/">Affiliates</Link>
              </li>
              <li>
                <Link to="/">Sitemap</Link>
              </li>
              <li>
                <Link to="/">CORA</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Something Else Here</h4>
            <ul>
              <li>
                <Link to="/">Something</Link>
              </li>
              <li>
                <Link to="/">Something</Link>
              </li>
              <li>
                <Link to="/">Something</Link>
              </li>
              <li>
                <Link to="/">Something</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(subscribe)}>
              <Form.Group as={Row} controlId="">
                <Col>
                  <Form.Label>Sign up for CORAbot Emails</Form.Label>

                  <InputGroup className="mb-2 mr-sm-2">
                    <Form.Control
                      ref={register({ required: true, minLength: 1 })}
                      name="Email"
                      type="email"
                      placeholder="Email address"
                    />
                    <InputGroup.Append>
                      <Button type="submit">{">"}</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  {errors.email && <span>This field is required</span>}
                  {subscribedSuccess && (
                    <span>You have been added to our mailing list</span>
                  )}
                  {subscribedFail && (
                    <span>
                      Sorry something went wrong we were unable to add you to
                      our mailing list
                    </span>
                  )}
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group as={Row} controlId="">
                <Col>
                  <Form.Label>Choose Region:</Form.Label>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      {region}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setRegion("United States")}>
                        United States
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setRegion("Italy")}>
                        Italy
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setRegion("Spain")}>
                        Spain
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          Copyright © 2020 CORAbot USA, All rights reserved.{" "}
          <Link to="/privacy">Terms of Use | Privacy Policy</Link>
        </Row>
      </Container>
    </footer>
  );
};
