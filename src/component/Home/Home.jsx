import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import reactimg from "../Home/reactimg3.jpg";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12} className=" main-div">
            <img src={reactimg} alt="" />
            <h1>Welcome! to React Page</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
