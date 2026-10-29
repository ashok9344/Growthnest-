import React, { useState, useEffect } from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logoImg from "../assets/logo-bird.png";
import "./navbar.css";

const Navitem = ({ name, path, onNavClick }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={path}
      end={path === "/"}
      className="nav-item-custom"
      onClick={onNavClick}
    >
      <span className="nav-item-text">{name}</span>
      <span className="nav-active-bar" aria-hidden="true"></span>
    </Nav.Link>
  );
};

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Automatically close mobile menu on route change
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const closeMenu = () => setExpanded(false);

  return (
    <header className="navbar-wrapper">
      <BSNavbar 
        expand="lg" 
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
        className="custom-navbar"
      >
        <Container fluid className="px-3 px-lg-4">
          {/* Brand Logo & Title */}
          <BSNavbar.Brand as={NavLink} to="/" onClick={closeMenu} className="brand-container">
            <div className="brand-logo-wrap">
              <img src={logoImg} alt="GrowthNest Logo" className="brand-logo-img" />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">Growth<span className="text-success-corporate">Nest</span></span>
              <span className="brand-tagline">Tech Solution</span>
            </div>
          </BSNavbar.Brand>

          {/* Mobile Toggle Button */}
          <BSNavbar.Toggle 
            aria-controls="main-navbar" 
            aria-label="Toggle navigation" 
            className="corporate-toggle"
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </BSNavbar.Toggle>

          {/* Navbar Menu */}
          <BSNavbar.Collapse id="main-navbar">
            <Nav className="mx-auto text-center gap-1 gap-xl-2 my-2 my-lg-0 align-items-center">
              <Navitem path="/" name="Home" onNavClick={closeMenu} />
              <Navitem path="/service" name="Services" onNavClick={closeMenu} />
              <Navitem path="/it-project" name="Projects" onNavClick={closeMenu} />
              <Navitem path="/non-it-work" name="Non IT" onNavClick={closeMenu} />
              <Navitem path="/about" name="About Us" onNavClick={closeMenu} />
              <Navitem path="/it-career" name="Careers" onNavClick={closeMenu} />
              <Navitem path="/faq" name="FAQ" onNavClick={closeMenu} />
            </Nav>

            {/* Action Button: Request a Quote */}
            <div className="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
              <Link 
                to="/getintouch" 
                onClick={closeMenu} 
                className="action-btn nav-action-btn text-decoration-none"
              >
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
