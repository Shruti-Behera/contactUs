import React from "react";
import styles from "./Contact.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <Container className={styles["main-container"]}>
        <Row className={styles['main-row']}>
          <h1 className="text-center">Contact Us</h1>
          <Col md={4} className={styles["left-col"]}>
            <div className={styles["contact-information"]}>
              <h4>Contact Information</h4>
              <p>
                Fill up the form and our team will get back to you within
                24hours
              </p>
              <p>
                <IoCall />
                -571-6744-900
              </p>
              <p>
                <IoIosMail />
                shrutibehra345@gmail.com
              </p>
              <p>
                <FaMapMarkerAlt />
                Patia,Bhubaneswar,odisha
              </p>
            </div>
            <Row className={styles["icon-row"]}>
              <Col md={3} className={styles["icon-menu"]}>
                <RiFacebookFill />
              </Col>
              <Col md={3} className={styles["icon-menu"]}>
                <FaTwitter />
              </Col>
              <Col md={3} className={styles["icon-menu"]}>
                <FaInstagram />
              </Col>
              <Col md={3} className={styles["icon-menu"]}>
                <FaLinkedin />
              </Col>
            </Row>
          </Col>
          <Col md={8} className={styles["right-col"]}>
            <Form>
              <Row className={styles["right-row"]}>
                <Col md={6}>
                  <label>First Name</label>
                  <br />
                  <input type="text" />
                </Col>
                <Col md={6}>
                  <label>Last Name</label>
                  <br />
                  <input type="text" />
                </Col>
              </Row>
              <Row className={styles["right-row"]}>
                <Col md={6}>
                  <label>Email</label>
                  <br />
                  <input type="email" />
                </Col>
                <Col md={6}>
                  <label>Phone</label>
                  <br />
                  <input type="text" />
                </Col>
              </Row>
              <Row className={styles["need-help-row"]}>
                <h6>I Need Help With</h6>
                <Row>
                  <Col md={4} className={styles["radiobox-col"]}>
                    <input type="radio" />
                    App Development
                  </Col>
                  <Col md={4} className={styles["radiobox-col"]}>
                    <input type="radio" />
                    UI/UX Designer
                  </Col>
                  <Col md={4} className={styles["radiobox-col"]}>
                    <input type="radio" />
                    Web Development
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className={styles["radiobox-col"]}>
                    <input type="radio" />
                    Devop
                  </Col>
                  <Col md={4} className={styles["radiobox-col"]}>
                    <input type="radio" />
                    Branding and Styling
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className={styles["radiobox-col"]}>
                    <input type="radio" />
                    Content Marketing
                  </Col>
                  <Col md={4} className={styles["radiobox-col"]}>
                    <input type="radio" />
                    Other
                  </Col>
                </Row>
              </Row>

              <Row>
                <Col md={12} className={styles["message"]}>
                  <label>Messages</label>
                  <br />
                  <input type="text" placeholder="Write your message here" />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="text-end">
                  <Button className="send-btn">Send Message</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
