import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaPython,
  FaJava,
  FaPaintBrush,
  FaBullhorn,
  FaCloud,
  FaNetworkWired,
  FaReact,
  FaBrain,
  FaChartBar,
  FaDatabase,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import "./CourseOffered.css";

const CourseOffered = () => {
  const techStacks = [
    { name: "React & Next.js Platforms", icon: <FaReact />, desc: "Modern dynamic web architectures" },
    { name: "Python & FastAPI / Django", icon: <FaPython />, desc: "High-speed backend & AI engines" },
    { name: "Java & Spring Enterprise", icon: <FaJava />, desc: "High-concurrency microservices" },
    { name: "Flutter Cross-Platform", icon: <FaMobileAlt />, desc: "iOS & Android single codebase" },
    { name: "React Native Mobile Apps", icon: <FaMobileAlt />, desc: "Fluid 60fps mobile interfaces" },
    { name: "AWS & GCP Cloud Architecture", icon: <FaCloud />, desc: "Resilient serverless & Docker" },
    { name: "AI & Computer Vision", icon: <FaBrain />, desc: "Image tagging & defect analysis" },
    { name: "Big Data & Database Scaling", icon: <FaDatabase />, desc: "PostgreSQL, MongoDB & Redis" },
    { name: "Real-time Telemetry & SRE", icon: <FaNetworkWired />, desc: "WebSockets & infrastructure" },
    { name: "Cybersecurity & Zero-Trust", icon: <FaShieldAlt />, desc: "Encryption & compliance audits" },
    { name: "UI/UX Product Design", icon: <FaPaintBrush />, desc: "Figma design systems & tokens" },
    { name: "Business Analytics & BI", icon: <FaChartBar />, desc: "Tableau & PowerBI pipelines" },
  ];

  return (
    <section className="py-5" style={{ background: "#ffffff" }}>
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            ENTERPRISE TECHNOLOGY MATRIX
          </span>
          <h2 className="display-6 fw-bold mt-2 text-dark">
            Technologies & Frameworks <span className="text-success-corporate">We Specialize In</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "680px", fontSize: "1.05rem" }}>
            Our development teams leverage modern, battle-tested programming languages, scalable frameworks, and secure cloud environments to power your projects.
          </p>
        </div>

        {/* Grid */}
        <Row className="g-3 justify-content-center">
          {techStacks.map((tech, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card 
                className="text-center course-card h-100 p-2"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.25s ease",
                }}
              >
                <Card.Body className="p-3 d-flex flex-column justify-content-center">
                  {/* ICON */}
                  <div 
                    className="course-icon mb-2 mx-auto"
                    style={{
                      fontSize: "28px",
                      color: "#16a34a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "45px"
                    }}
                  >
                    {tech.icon}
                  </div>

                  {/* TEXT */}
                  <Card.Text className="fw-bold text-dark small mb-1">
                    {tech.name}
                  </Card.Text>
                  <span className="text-secondary" style={{ fontSize: "0.78rem" }}>
                    {tech.desc}
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CourseOffered;
