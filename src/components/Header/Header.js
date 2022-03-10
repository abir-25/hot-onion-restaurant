import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Header.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="mb-5 pb-2">
      <Navbar
        className="navbar "
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto text-black"></Nav> */}
            <Nav className="ms-auto">
              <Nav.Link className="text-black medium-font-size me-3" href="#">
                <span class="position-relative">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="cart-icon"
                  ></FontAwesomeIcon>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    12
                  </span>
                </span>
              </Nav.Link>
              <Nav.Link
                className="text-black medium-font-size me-3"
                eventKey={2}
                href="#memes"
              >
                Login
              </Nav.Link>
              <Nav.Link
                className="signup-button medium-font-size mx-auto"
                eventKey={2}
                href="#memes"
              >
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
