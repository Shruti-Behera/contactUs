import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <Container fluid className="footer-container">
        <Row>
          <Col md={3}>
            <div className="">
              <p>Press Coffee Into Code</p>
            </div>
            <Row>
              <Col md={3} className="Footer-icon-menu">
                <RiFacebookFill />
              </Col>
              <Col md={3} className="Footer-icon-menu">
                <FaTwitter />
              </Col>
              <Col md={3} className="Footer-icon-menu">
                <FaInstagram />
              </Col>
              <Col md={3} className="Footer-icon-menu">
                <FaLinkedin />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <div className="address">
              <h6>ADDRESS</h6>
              <p>Patia,Bhubaneswar</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="inquiry">
              <h6>WORK INQUIRES</h6>
              <p>98976556556</p>
              <p>shrutibehera45@gmail.com</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="stay-in-touch">
              <h6>STAY IN TOUCH</h6>
              <div className="subscribe">
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
