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
    console.log(data);

    const response = await fetch(`forms/subscribe`, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data.email),
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
                <Link>About CORAbot</Link>
              </li>
              <li>
                <Link>Affiliates</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
              <li>
                <Link>CORA</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Help & FAQs</h4>
            <ul>
              <li>
                <Link></Link>
              </li>
              <li>
                <Link>Affiliates</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
              <li>
                <Link>CORA</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Something Else Here</h4>
            <ul>
              <li>
                <Link>Something</Link>
              </li>
              <li>
                <Link>Something</Link>
              </li>
              <li>
                <Link>Something</Link>
              </li>
              <li>
                <Link>Something</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(subscribe)}>
              <Form.Group as={Row} controlId="">
                <Form.Label as={Col}>Sign up for CORAbot Emails</Form.Label>
                <Col>
                  <InputGroup className="mb-2 mr-sm-2">
                    <Form.Control
                      ref={register({ required: true, minLength: 1 })}
                      name="email"
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
                <Form.Label as={Col}>Choose Region:</Form.Label>
                <Col>
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
