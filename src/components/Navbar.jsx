import React from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logoImg from "../assets/logo-bird.png";
import "./navbar.css";

const Navitem = ({ name, path }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={path}
      end={path === "/"}
      className="nav-item-custom"
    >
      <span className="nav-item-text">{name}</span>
      <span className="nav-active-bar" aria-hidden="true"></span>
    </Nav.Link>
  );
};

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <BSNavbar expand="lg" className="custom-navbar">
        <Container fluid className="px-3 px-lg-4">
          {/* Brand Logo & Title */}
          <BSNavbar.Brand as={NavLink} to="/" className="brand-container">
            <div className="brand-logo-wrap">
              <img src={logoImg} alt="GrowthNest Logo" className="brand-logo-img" />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">Growth<span className="text-success-corporate">Nest</span></span>
              <span className="brand-tagline">Tech Solution</span>
            </div>
          </BSNavbar.Brand>

          {/* Mobile Toggle Button */}
          <BSNavbar.Toggle aria-controls="main-navbar" aria-label="Toggle navigation" className="corporate-toggle">
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </BSNavbar.Toggle>

          {/* Navbar Menu */}
          <BSNavbar.Collapse id="main-navbar">
            <Nav className="mx-auto text-center gap-1 gap-xl-2 my-2 my-lg-0 align-items-center">
              <Navitem path="/" name="Home" />
              <Navitem path="/service" name="Services" />
              <Navitem path="/it-project" name="Projects" />
              <Navitem path="/non-it-work" name="Data & Image BPO" />
              <Navitem path="/about" name="About Us" />
              <Navitem path="/it-career" name="Careers" />
              <Navitem path="/faq" name="FAQ" />
            </Nav>

            {/* Action Button: Request a Quote */}
            <div className="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
              <Link to="/getintouch" className="action-btn nav-action-btn text-decoration-none">
                <span>Request a Quote</span>
                <FaArrowRight className="ms-1" size={13} />
              </Link>
            </div>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </header>
  );
};

export default Navbar;
