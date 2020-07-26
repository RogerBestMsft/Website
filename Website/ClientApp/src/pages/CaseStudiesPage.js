import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { PageHeading } from "../components/PageHeading";

import styles from "./CaseStudiesPage.module.css";

import Symbol from "../assets/Symbol.svg";

export const CaseStudiesPage = () => {
  return(
    <>
      <AppBar></AppBar>
      <PageHeading
        title={'How has CORAbot helped the community?'}
        subtitle={'CORAbot can be repurposed to fit with any organization’s specific requirements.'}
      />
      <Container fluid as="main" className={styles.container}
        style={{
          'backgroundImage': `url(${Symbol})`
        }}
        >
        <Row className={styles.section}>
          <h3>COVID-19 Relief Efforts</h3>
          <p>
            CORAbot is partnered with an international nonprofit organization who helps provide humanitarian 
            assistance and relief during times of crises. By using CORAbot’s design, we created a bot specific 
            to their cause and helped assist their direct volunteer efforts during the COVID-19 pandemic.
          </p>
          <p>
            This organization identified the following problems:
          </p>
          <ol>
            <li>Vulnerable individuals requiring critical resources, do not know how and where to get help</li>
            <li>Traditional supply chain methods to connect individuals (and orgs) with critical resources 
              have failed to perform with necessary speed</li>
            <li>Medical and assisted living facilities are running out of critical supplies, without ability 
              to restock</li>
            <li>Individuals and organizations with critical supplies are unsure about how best to share them</li>
          </ol>
          <p>
            While internet-connected communities are able to offer help many of those in need, underserved 
            populations without internet access or social media continue to struggle for items like food, 
            prescription medications, and PPE. This results in dire situations for those most vulnerable in our 
            communities.
          </p>
          <h4>How does CORAbot help?</h4>
          <p>
            CORAbot connects volunteers already serving this international organization to those in need by 
            scaling the organization’s Emergency Food Assistance Program. This bot understands 60 languages, 
            communicates via SMS, and has a persona to engage clients in need, as well as a persona to engage 
            and activate volunteers nearby, based on those needs.
          </p>
        </Row>
        <Row className={styles.section}>
          <h3>Human Trafficking</h3>
          <p>
            CORAbot works with a national nonprofit that combats the rise of sex trafficking and offers aid 
            survivors. When a victim of exploitation has been identified, or when social services organizations 
            are reaching out to potential victims, it is difficult to know exactly what resources are going to 
            be available to help these individuals escape their circumstances.
          </p>
          <h4>How does CORAbot help?</h4>
          <p>
            CORAbot connects survivors with resources in their lcoal area. This virtual agent gathers accurate, 
            real-time availability of human trafficking survivor services in a manner that is highly sensitive 
            to the needs of the humans who provide those critical services. The resulting visibility will be 
            rendered to advocates in ways that are highly accessible and intuitive.
          </p>
        </Row>
        <div className={styles.blurb}>
          The widespread scalability of CORAbot will be housed in a Resource Connector for Non-Profits where 
          technology created will be generalized and open sourced, ensuring easy access to all.
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}