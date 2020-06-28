import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import landingGIF from "../assets/CORA-Entr.gif";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <>
      <Image className={styles.fullImage} src={landingGIF} />
      <Link to="/home" className={styles.homeLink}></Link>
    </>
  );
};
