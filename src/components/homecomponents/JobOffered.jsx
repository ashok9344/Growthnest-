import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tcs from "../../assets/home/tcs.png";
import zoho from "../../assets/home/zoho.jpg";
import cognizant from "../../assets/home/cognizant.jpg";
import nsn from "../../assets/home/nsn.jpg";
import accenture from "../../assets/home/accenture.jpg";
import wipro from "../../assets/home/wipro.png";
import { FaShieldAlt, FaServer, FaCheckDouble, FaLock } from "react-icons/fa";
import "./joboffered.css";

const enterpriseEcosystem = [
  { img: zoho, name: "Zoho Ecosystem", role: "SaaS & Cloud Standards" },
  { img: tcs, name: "Tata Consultancy", role: "Enterprise Architecture" },
  { img: cognizant, name: "Cognizant", role: "Agile CI/CD Pipelines" },
  { img: accenture, name: "Accenture", role: "Digital Transformation" },
  { img: wipro, name: "Wipro", role: "QA & Security Benchmarks" },
  { img: nsn, name: "NSN Global", role: "High-Throughput Systems" },
];

export const JobOffered = () => {
  return (
    <section className="py-5 enterprise-partner-section" style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="partner-badge">
            <FaShieldAlt className="me-2 text-success" />
            ENTERPRISE ENGINEERING EXCELLENCE
          </span>
          <h2 className="partner-heading mt-2 text-dark">
            Technology Standards Trusted By <span className="text-success-corporate">Enterprise Ecosystems</span>
          </h2>
          <p className="partner-subheading text-secondary mx-auto" style={{ maxWidth: "680px" }}>
            Our software architectures, clean code guidelines, and data security protocols align with top-tier global enterprise technology benchmarks.
          </p>
        </div>

        {/* Company Logo Grid */}
        <Row className="g-3 g-md-4 justify-content-center">
          {enterpriseEcosystem.map((company, index) => (
            <Col key={index} xs={6} sm={4} md={4} lg={2}>
              <div className="partner-card">
                <div className="partner-logo-box">
                  <img src={company.img} alt={company.name} className="partner-logo-img" />
                </div>
                <div className="partner-info">
                  <span className="partner-name text-dark fw-bold">{company.name}</span>
                  <span className="partner-role text-secondary small">{company.role}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Highlight Stats Row */}
        <div className="partner-metrics-bar mt-4 pt-3">
          <div className="partner-stat">
            <FaServer className="stat-icon text-success" />
            <div>
              <span className="stat-num text-dark">99.9%</span>
              <span className="stat-txt text-secondary">Cloud Uptime SLA</span>
            </div>
          </div>
          <div className="partner-stat">
            <FaCheckDouble className="stat-icon text-success" />
            <div>
              <span className="stat-num text-dark">100%</span>
              <span className="stat-txt text-secondary">IP & Code Ownership</span>
            </div>
          </div>
          <div className="partner-stat">
            <FaLock className="stat-icon text-success" />
            <div>
              <span className="stat-num text-dark">NDA</span>
              <span className="stat-txt text-secondary">Guaranteed Privacy</span>
            </div>
          </div>
          <div className="partner-stat">
            <FaShieldAlt className="stat-icon text-success" />
            <div>
              <span className="stat-num text-dark">24/7</span>
              <span className="stat-txt text-secondary">Production Monitoring</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JobOffered;
