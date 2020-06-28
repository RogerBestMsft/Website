import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import styles from "./AboutPage.module.css";

const placeholder1 =
  "https://s3.amazonaws.com/uifaces/faces/twitter/cdavis565/128.jpg";

const placeholder2 =
  "https://s3.amazonaws.com/uifaces/faces/twitter/brenmurrell/128.jpg";

const leaders = [
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
  { name: "leader", image: placeholder1, profile: "/leader" },
];
const members = [
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
  { name: "member", image: placeholder2, profile: "/leader" },
];

export const AboutPage = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main">
        <Row
          as="section"
          className={` backgroundPrimary justify-content-center p-5 text-light`}
        >
          <Container>
            <h2>What is Project CORA?</h2>
            <p>
              Project CORA (Community Operations Resource Agent) can help with
              CORAbot, an emergency response SMS interactive chatbot.
              Individuals can interact with CORAbot by reaching out for any
              critical needs they need fulfilled, or to share the resources they
              can contribute in the event of a local emergency. CORA is designed
              to address the biggest challenges in the world, including how to
              connect those with needs to resources. Built with the
              under-represented in mind, those who may not have access to the
              internet can seek help using text during times of crisis. ​
            </p>
            <p>
              With around 5 billion mobile device users globally, CORA can help
              -- by accelerating the reach of non-profits with its natural
              language SMS text bot, fluent in more than 60 languages. It
              interacts with vetted organizations to track and match supplies
              they have available to help those in need, orchestrating
              fulfillment in a manner that preserves the privacy of everyone
              involved. ​
            </p>
            <Button as={Link} to="/map" variant="light">
              Learn more
            </Button>
            <h2>Meet The People Behind CORAbot</h2>
            <p>
              Project CORA’s team consists of Microsoft experts who serve as
              volunteers alongside students from Boston University. During the
              Microsoft Hack for COVID-19, The team originally created Project
              CORA to help with the COVID-19 relief effort, but quickly realized
              that the technology produced here can apply to any community need,
              not just COVID-19 specific. The Project CORA team is currently
              partnered with another team and produced a bot, modeled off of
              CORAbot, to help with their effort in finding community volunteers
              during the pandemic. With the widespread scalability of CORAbot,
              the Project CORA team hopes to extend more variations of CORAbot
              specific to other areas, such as human trafficking, where Project
              TIRA another Microsoft Hack for Good project, fits in. With the
              possibilities of how this technology can be applied, the Project
              CORA team hopes to create a Resource Connecter for Non-Profits,
              where technology created will be generalized and open sourced.
            </p>
          </Container>
        </Row>

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

        <Row className={`${styles.titleBarRight}  h2`}>
          <span className={styles.title}>Advisors</span>
        </Row>
        <Row className="justify-content-center">
          {leaders.map((leader, index) => (
            <Col xs={12} md={4} lg={2}>
              <Profile
                key={index}
                name={leader.name}
                image={leader.image}
                profile={leader.profile}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
