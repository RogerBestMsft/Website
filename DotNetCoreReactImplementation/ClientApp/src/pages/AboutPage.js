import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";

import styles from "./AboutPage.module.css";

const placeholder1 =
  "https://s3.amazonaws.com/uifaces/faces/twitter/cdavis565/128.jpg";

  const placeholder2 ="https://s3.amazonaws.com/uifaces/faces/twitter/brenmurrell/128.jpg"

const leaders = [
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
];
const members = [ { name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
{ name: "member", image: placeholder2, profile: "/leader" },
]

export const AboutPage = () => {
  return (
    <main className={`${styles.pageContainer}`}>
        <AppBar></AppBar>
        <Row className={styles}>
          <Container className="  ">
            <h1>Meet, CORAbot.</h1>
            <p>
              A community operations resource agent working to address the
              biggest challenges in the world, including how to connect those
              with needs to resources.
            </p>

            <Button as={Link} to="/map" variant="primary">
              Learn more
            </Button>
          </Container>
        </Row>
        <div>
          <Row className={`${styles.titleBarRight}  h2`}>
            <span className={styles.title}>Leadership</span>
          </Row>
          <Row className="justify-content-center">
            {leaders.map((leader, index) => (
              <Col className={styles.profile} xs={12} md={4} lg={2}>
                <Profile
                  key={index}
                  name={leader.name}
                  image={leader.image}
                  profile={leader.profile}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Row className={`${styles.titleBarLeft}  h2`}>
            <span className={styles.title}>Core Team</span>
          </Row>
          <Row className="justify-content-center">
            {members.map((member, index) => (
              <Col xs={12} md={4} lg={2}>
                <Profile
                  key={index}
                  name={member.name}
                  image={member.image}
                  profile={member.profile}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Row className={`${styles.titleBarRight}  h2`}>
            <span className={styles.title}>Advisors</span>
          </Row>
          <Row className="justify-content-center">
            {leaders.map((leader, index) => (
              <Col  xs={12} md={4} lg={2}>
                <Profile
                  key={index}
                  name={leader.name}
                  image={leader.image}
                  profile={leader.profile}
                />
              </Col>
            ))}
          </Row>
        </div>

        <Footer></Footer>
    </main>
  );
};
