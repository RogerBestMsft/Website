import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
export const Footer = () => {
  const [region, setRegion] = useState("United States");
  return (
    <footer className={`${styles.footer}  h-25 w-100`}>
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
            <Form>
              <Form.Group as={Row} controlId="">
                <Form.Label as={Col}>Sign up for CORAbot Emails</Form.Label>
                <Col>
                  <Form.Control type="email" placeholder="Email address" />
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
        <Row>
          Copyright © 2020 CORAbot USA, All rights reserved.{" "}
          <Link to="/privacy">Terms of Use | Privacy Policy</Link>
        </Row>
      </Container>
    </footer>
  );
};
