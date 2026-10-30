import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaArrowRight,
  FaChevronRight,
  FaClock,
  FaShieldAlt,
  FaExternalLinkAlt
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logoImg from "../assets/logo-bird.png";

const socialLinks = [
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/growth-nest/",
    label: "LinkedIn",
    color: "#0a66c2",
  },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/growth_nest_tech_solution/",
    label: "Instagram",
    color: "#e4405f",
  },
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/share/1AwB1BQ85c/",
    label: "Facebook",
    color: "#1877f2",
  },
  {
    Icon: MdOutlineEmail,
    link: "mailto:growthnesttechsolution@gmail.com",
    label: "Email",
    color: "#16a34a",
  },
];

const itSolutions = [
  { name: "Enterprise IT Projects", path: "/it-project" },
  { name: "Computer Vision & AI Systems", path: "/it-project" },
  { name: "Full-Stack Web Applications", path: "/service" },
  { name: "Cloud & DevOps Architecture", path: "/service" },
  { name: "Mobile App Development", path: "/it-project" },
  { name: "Data Entry & Image Annotation", path: "/non-it-work" },
];

const academyLinks = [
  { name: "Data Entry & Image Analysis", path: "/non-it-work" },
  { name: "IT Engineering Careers", path: "/career" },
  { name: "Client Case Studies", path: "/it-project" },
  { name: "Tech Hackathons & MoUs", path: "/events" },
  { name: "Frequently Asked Questions", path: "/faq" },
  { name: "Student Learning Portal", path: "/student-login" },
];

const Footerbar = () => {
  return (
    <footer className="enterprise-footer position-relative pt-5 pb-4">
      <Container className="position-relative">
        {/* TOP CALL TO ACTION BANNER */}
        <div className="footer-cta-card mb-5 rounded-4 text-white p-4 p-md-5">
          <Row className="align-items-center g-4">
            <Col lg={8} md={7}>
              <div className="d-inline-flex align-items-center gap-2 mb-3">
                <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-1 rounded-pill small fw-semibold">
                  LET'S BUILD TOGETHER
                </span>
                <span className="small text-secondary d-none d-sm-inline">
                  • Q4 Client Project Bookings Open
                </span>
              </div>

              <h2 className="cta-headline fw-bold mb-3 text-white">
                Ready to accelerate your next <span className="text-success-corporate">tech breakthrough?</span>
              </h2>

              <p className="cta-subtext mb-0 text-white-50">
                Partner with GrowthNest for full-cycle enterprise software development or register for our production-ready engineering academy.
              </p>
            </Col>

            <Col lg={4} md={5}>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-md-end">
                <Link to="/getintouch" className="action-btn text-decoration-none">
                  <span>Get In Touch</span>
                  <FaArrowRight size={13} />
                </Link>
                <Link to="/it-project" className="btn-cta-outline text-decoration-none">
                  <span>View Production Projects</span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        {/* MAIN 4-COLUMN FOOTER NAVIGATION */}
        <Row className="g-4 g-lg-5 text-start pb-5 border-bottom border-secondary border-opacity-25">
          {/* Column 1: Company Profile */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img src={logoImg} alt="GrowthNest Logo" className="footer-brand-logo" />
              <div>
                <h5 className="fw-bold mb-0 text-white footer-brand-title">
                  Growth<span className="text-success-corporate">Nest</span>
                </h5>
                <span className="small fw-semibold text-white-50" style={{ fontSize: "0.78rem" }}>
                  GrowthNest Tech Solution
                </span>
              </div>
            </div>

            <p className="footer-company-desc mb-4 text-white-50">
              GrowthNest Tech Solution is a premier software development consulting enterprise. We architect scalable digital solutions and empower industry-ready software engineers.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-2 mb-3">
              {socialLinks.map(({ Icon, link, label, color }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="footer-trust-chip d-inline-flex align-items-center gap-2 text-white-50 small">
              <FaShieldAlt className="text-success" size={13} />
              <span>Certified Enterprise Delivery & Incubation Partner</span>
            </div>
          </Col>

          {/* Column 2: IT Solutions */}
          <Col lg={2} sm={6} xs={6}>
            <h6 className="footer-col-title text-white mb-3">IT Solutions</h6>
            <ul className="footer-nav-list list-unstyled mb-0">
              {itSolutions.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <Link to={item.path} className="footer-nav-link d-inline-flex align-items-center text-white-50">
                    <FaChevronRight className="me-2" size={8} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 3: Tech Academy */}
          <Col lg={2} sm={6} xs={6}>
            <h6 className="footer-col-title text-white mb-3">Tech Academy</h6>
            <ul className="footer-nav-list list-unstyled mb-0">
              {academyLinks.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <Link to={item.path} className="footer-nav-link d-inline-flex align-items-center text-white-50">
                    <FaChevronRight className="me-2" size={8} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 4: Contact & Location */}
          <Col lg={4} md={6}>
            <h6 className="footer-col-title text-white mb-3">Location & Support</h6>

            <div className="footer-contact-stack d-flex flex-column gap-2 mb-3 text-white-50 small">
              <div className="d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="text-success mt-1 flex-shrink-0" size={14} />
                <span>
                  GrowthNest Tech Solution, Adayakarungulam, Ambasumuthiram, Tamil Nadu, India
                </span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaPhoneAlt className="text-success flex-shrink-0" size={13} />
                <a href="tel:+916369347439" className="text-white-50 text-decoration-none">
                  +91 63693 47439
                </a>
                <span className="badge bg-dark border border-secondary text-white-50 ms-auto">
                  <FaClock size={9} className="me-1" /> 9AM - 7PM
                </span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaEnvelope className="text-success flex-shrink-0" size={13} />
                <a href="mailto:growthnesttechsolution@gmail.com" className="text-white-50 text-decoration-none text-break">
                  growthnesttechsolution@gmail.com
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="footer-map-container rounded-3 overflow-hidden border border-secondary border-opacity-50">
              <div className="bg-dark bg-opacity-50 d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-secondary border-opacity-25">
                <span className="small text-white-50 fw-semibold">
                  <FaMapMarkerAlt className="text-success me-1" size={11} /> Ambasumuthiram Tech Hub
                </span>
                <a 
                  href="https://maps.google.com/?q=GrowthNest+Tech+Solution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="small text-success text-decoration-none"
                >
                  <span>Open Maps</span>
                  <FaExternalLinkAlt size={10} className="ms-1" />
                </a>
              </div>
              <iframe
                title="GrowthNest Tech Solution Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d985.9512725217838!2d77.416604!3d8.710051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0439003d56a7b7%3A0x2414b7237c95821!2sGrowthNest%20Tech%20Solution!5e0!3m2!1sen!2sin!4v1793359799802!5m2!1sen!2sin"
                width="100%"
                height="115"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-bar pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-2 text-white-50 small">
            <span className="live-status-dot"></span>
            <span>All Enterprise Systems Operational 🟢</span>
          </div>

          <p className="mb-0 text-white-50 small text-center">
            © {new Date().getFullYear()} GrowthNest Tech Solution. All rights reserved.
          </p>

          <div className="d-flex gap-3 text-white-50 small">
            <Link to="/about" className="footer-sublink">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="footer-sublink">Terms of Service</Link>
          </div>
        </div>
      </Container>

      {/* Styles */}
      <style>{`
        .enterprise-footer {
          background: #0f172a;
          color: #94a3b8;
          border-top: 1px solid #1e293b;
        }

        .footer-cta-card {
          background: #1e293b;
          border: 1px solid #334155;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .cta-headline {
          font-size: 1.85rem;
          line-height: 1.3;
        }

        .cta-subtext {
          font-size: 0.96rem;
          line-height: 1.6;
        }

        .btn-cta-outline {
          background: transparent;
          border: 1.5px solid #475569;
          color: #ffffff !important;
          font-weight: 600;
          font-size: 0.94rem;
          padding: 10px 22px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-cta-outline:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .footer-brand-logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .footer-brand-title {
          font-size: 1.3rem;
          font-weight: 800;
        }

        .footer-company-desc {
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e293b;
          border: 1px solid #334155;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-icon-btn:hover {
          background: #16a34a;
          color: #ffffff;
          border-color: #16a34a;
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-nav-link {
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: #22c55e !important;
        }

        .footer-sublink {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-sublink:hover {
          color: #ffffff;
        }

        .live-status-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
        }
      `}</style>
    </footer>
  );
};

export default Footerbar;
