import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import Services from "../components/servicescomponents/Services";
import ServiceCards from "../components/servicescomponents/ServiceCards";
import CourseOffered from "../components/servicescomponents/CourseOffered";
import RealtimeProject from "../components/homecomponents/RealtimeProject";

const Service = () => {
  return (
    <div className="services-page-wrapper">
      {/* 1. Core Development Offerings */}
      <Services />

      {/* 2. Specialized Engineering & Cloud Infrastructure */}
      <ServiceCards />

      {/* 3. Technology Stack & Framework Matrix */}
      <CourseOffered />

      {/* 4. Client Partnership & Engagement Models */}
      <RealtimeProject />

      {/* 5. Client Project CTA */}
      <section className="py-5 text-center" style={{ background: "#ffffff" }}>
        <Container>
          <div 
            className="p-5 rounded-4 text-center"
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
            <h2 className="fw-bold text-dark mb-2">Ready to Build Your Software Project?</h2>
            <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "620px" }}>
              Share your project scope, target timeline, and feature requirements. Our engineering team will review and provide a free architectural blueprint and estimate within 24 hours.
            </p>
            <Link to="/getintouch" className="action-btn text-decoration-none">
              <span>Request Free Project Proposal</span>
              <FaArrowRight className="action-arrow ms-2" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Service;
