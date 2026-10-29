import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaRocket, 
  FaArrowRight, 
  FaServer, 
  FaEye, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaCheckDouble,
  FaCogs
} from "react-icons/fa";
import { ProjectShowCase } from "../components/homecomponents/ProjectShowCase";
import MobileProjects from "../components/homecomponents/MobileProjects";
import RealtimeProject from "../components/homecomponents/RealtimeProject";

const ITProject = () => {
  const deliveryStats = [
    { number: "25+", label: "Production Platforms Delivered", icon: <FaServer /> },
    { number: "99.9%", label: "Uptime & SLA Performance", icon: <FaShieldAlt /> },
    { number: "100K+", label: "Active Enterprise Users", icon: <FaCheckDouble /> },
    { number: "15ms", label: "Real-time Processing Latency", icon: <FaCogs /> },
  ];

  return (
    <div className="it-projects-page" style={{ paddingTop: "20px", backgroundColor: "#ffffff" }}>
      {/* Hero Header */}
      <section className="py-5 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tech-pill mb-3">
              <span className="tech-pill-dot"></span>
              CORE ENTERPRISE CAPABILITIES
            </span>
            <h1 className="display-5 fw-bold text-dark mt-2">
              Enterprise <span style={{ color: "#16a34a" }}>IT Projects</span> & Production Systems
            </h1>
            <p className="text-secondary mx-auto" style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
              GrowthNest delivers scalable enterprise web architectures, AI & computer vision annotation engines, cross-platform mobile apps, and real-time cloud microservices.
            </p>
          </motion.div>

          {/* Delivery Stats Bar */}
          <Row className="g-3 mt-4 justify-content-center">
            {deliveryStats.map((stat, idx) => (
              <Col key={idx} lg={3} sm={6}>
                <div 
                  className="p-3 rounded-3 text-center h-100"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)"
                  }}
                >
                  <div className="fs-4 mb-1" style={{ color: "#16a34a" }}>
                    {stat.icon}
                  </div>
                  <div className="fs-3 fw-bold text-dark">{stat.number}</div>
                  <div className="text-secondary small fw-medium">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 1. Web & Cloud Applications + AI / Image Analysis Showcase */}
      <ProjectShowCase />

      {/* 2. Mobile & Cross Platform */}
      <MobileProjects />

      {/* 3. Incubation & Realtime Systems */}
      <RealtimeProject />

      {/* CTA Section */}
      <section className="py-5 text-center">
        <Container>
          <div 
            className="p-5 rounded-4" 
            style={{ 
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div 
              className="d-inline-flex p-3 rounded-circle mb-3 align-items-center justify-content-center"
              style={{ background: "#f0fdf4", color: "#16a34a", width: "64px", height: "64px", fontSize: "1.75rem" }}
            >
              <FaRocket />
            </div>
            <h2 className="fw-bold text-dark mb-2">Have an Enterprise Project or MVP in Mind?</h2>
            <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "600px" }}>
              From initial technical architecture and computer vision pipeline design to zero-downtime cloud deployment, our senior engineering team turns your requirements into reality.
            </p>
            <Link to="/getintouch" className="action-btn text-decoration-none">
              <span>Discuss Your Project Requirements</span>
              <FaArrowRight className="action-arrow" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ITProject;
