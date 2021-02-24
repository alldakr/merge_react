import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components
import imgA from "assets/argon-design/img/ill/p8.svg";
import NavbarPrimary from "components/argon-design/navbars/NavbarPrimary.js";

function Header() {
  return (
    <>
      <header className="header-2 skew-separator">
        <Navbar className="bg-white navbar-absolute" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                Creative Tim
              </NavbarBrand>
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target="#example-header-2"
                data-toggle="collapse"
                id="example-header-2"
                type="button"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <UncontrolledCollapse
              id="example-header-2"
              navbar
              toggler="#example-header-2"
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Argon <span>PRO</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button
                      aria-controls="navigation-index"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#example-header-2"
                      data-toggle="collapse"
                      id="example-header-2"
                      type="button"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav navbar-right" navbar>
                <NavItem>
                  <NavLink href="https://twitter.com/CreativeTim">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.facebook.com/CreativeTim">
                    <i className="fab fa-facebook-square"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.instagram.com/CreativeTimOfficial">
                    <i className="fab fa-instagram"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <NavbarPrimary />
        <div className="page-header"></div>
      </header>
    </>
  );
}

export default Header;
