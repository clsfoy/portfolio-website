import { Link } from "@material-ui/core";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="navbar">
      <Navbar
        fixed="top"
        style={{
          background: "#AFB3C1",
        }}
        bg="light"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Topbar;
