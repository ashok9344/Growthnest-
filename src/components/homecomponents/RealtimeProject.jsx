import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaLaptopCode, 
  FaCodeBranch, 
  FaDatabase, 
  FaCheckCircle,
  FaShieldAlt,
  FaFileContract,
  FaUsers
} from "react-icons/fa";

const RealtimeProject = () => {
  const models = [
    {
      title: "Fixed-Scope Project Delivery",
      badge: "Turnkey Development",
      icon: <FaLaptopCode />,
      highlight: false,
      desc: "Ideal for businesses with clear project specifications. We handle end-to-end architecture, UI/UX, full-stack sprint coding, and cloud deployment.",
      features: [
        "Guaranteed milestone delivery schedule",
        "Clear, transparent fixed-budget quotation",
        "Complete source code & IP ownership",
        "30-day post-launch warranty & SLA",
      ],
      ctaText: "Get Project Estimate",
      ctaLink: "/getintouch",
    },
    {
      title: "Dedicated Developer Extension",
      badge: "Monthly Retainer",
      icon: <FaUsers />,
      highlight: true,
      desc: "Hire experienced full-stack React, Node.js, Flutter, or Python engineers dedicated exclusively to your company and sprint goals.",
      features: [
        "Full-time (160 hrs/mo) dedicated talent",
        "Direct communication via Slack, Teams & Jira",
        "Agile daily standups & Git pull requests",
        "Flexible scaling: ramp up or down anytime",
      ],
      ctaText: "Hire Dedicated Developers",
      ctaLink: "/getintouch",
    },
    {
      title: "Managed Data & Image Operations",
      badge: "Outsourced BPO",
      icon: <FaDatabase />,
      highlight: false,
      desc: "Outsource high-volume data entry, 2D/3D bounding-box image annotation, and healthcare document OCR digitization to our secure facility.",
      features: [
        "99.5%+ accuracy quality assurance SLA",
        "Strict enterprise NDA & data confidentiality",
        "Dual-pass verification & defect audits",
        "High-throughput delivery for AI & ERP teams",
      ],
      ctaText: "Outsource Data Operations",
      ctaLink: "/non-it-work",
    },
  ];

  return (
    <section className="py-5 position-relative" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
      <Container className="py-3">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            FLEXIBLE CLIENT ENGAGEMENT MODELS
          </span>
          <h2 className="display-6 fw-bold mt-2 text-dark">
            How You Can Hire Us For Your <span style={{ color: "#16a34a" }}>Software & Data Projects</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "700px", fontSize: "1.05rem" }}>
            Whether you need a complete digital product built from scratch, dedicated engineering bandwidth, or managed image annotation services, we offer transparent, outcome-driven partnerships.
          </p>
        </div>

        {/* 3 Model Cards Grid */}
        <Row className="g-4 align-items-stretch">
          {models.map((m, idx) => (
            <Col key={idx} lg={4} md={6}>
              <div 
                className="h-100 p-4 rounded-4 d-flex flex-column justify-content-between"
                style={{
                  background: "#ffffff",
                  border: m.highlight ? "2px solid #16a34a" : "1px solid #e2e8f0",
                  boxShadow: m.highlight ? "0 10px 25px rgba(22, 163, 74, 0.12)" : "0 4px 16px rgba(0, 0, 0, 0.04)",
                  transform: m.highlight ? "translateY(-4px)" : "none",
                  transition: "all 0.25s ease"
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div 
                      className="p-3 rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: m.highlight ? "#f0fdf4" : "#f8fafc",
                        color: "#16a34a",
                        border: "1px solid #bbf7d0",
                        width: "50px",
                        height: "50px",
                        fontSize: "1.4rem"
                      }}
                    >
                      {m.icon}
                    </div>
                    <span 
                      className="badge px-3 py-2 rounded-pill fw-semibold"
                      style={{
                        background: m.highlight ? "#16a34a" : "#f0fdf4",
                        color: m.highlight ? "#ffffff" : "#15803d",
                        border: m.highlight ? "none" : "1px solid #bbf7d0",
                        fontSize: "0.78rem"
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="h4 fw-bold text-dark mb-2">{m.title}</h3>
                  <p className="text-secondary small mb-4" style={{ lineHeight: "1.6" }}>{m.desc}</p>

                  <div className="mb-4">
                    <span className="text-dark small fw-bold d-block mb-2">Key Deliverables:</span>
                    <ul className="list-unstyled mb-0">
                      {m.features.map((f, fIdx) => (
                        <li key={fIdx} className="small text-secondary mb-2 d-flex align-items-start gap-2">
                          <FaCheckCircle className="text-success mt-1 flex-shrink-0" size={13} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-top border-light-subtle">
                  <Link 
                    to={m.ctaLink} 
                    className={m.highlight ? "action-btn w-100 text-decoration-none text-center" : "action-btn-outline w-100 text-decoration-none text-center"}
                  >
                    <span>{m.ctaText}</span>
                    <FaArrowRight size={11} className="ms-2" />
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Bottom Client Assurance Strip */}
        <div 
          className="mt-5 p-4 rounded-4 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{ background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}
        >
          <div className="d-flex align-items-center gap-3">
            <div 
              className="p-3 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ background: "#f0fdf4", color: "#16a34a", width: "54px", height: "54px", fontSize: "1.5rem" }}
            >
              <FaShieldAlt />
            </div>
            <div>
              <h5 className="fw-bold text-dark mb-1">Enterprise Non-Disclosure Agreement (NDA) Protected</h5>
              <p className="text-secondary small mb-0">
                Your intellectual property, proprietary business logic, and dataset confidentiality are 100% secured before we begin any technical discussion.
              </p>
            </div>
          </div>
          <Link to="/getintouch" className="action-btn text-decoration-none text-nowrap">
            <span>Schedule Discovery Call</span>
            <FaArrowRight size={12} className="ms-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RealtimeProject;
