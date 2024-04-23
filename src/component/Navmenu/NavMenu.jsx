import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavMenu = () => {
  return (
    <>
      <Navbar bg="info" fixed="top" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-end">
            <Nav.Link href="/" active>
              Home
            </Nav.Link>
            {/* <Nav.Link>PortFolio</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
