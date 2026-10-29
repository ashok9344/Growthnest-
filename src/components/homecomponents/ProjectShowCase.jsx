import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import project1 from "../../assets/home/project1.png";
import project2 from "../../assets/home/project2.png";
import project3 from "../../assets/home/project3.png";
import projectDevops from "../../assets/home/enterprise-devops-dashboard.jpg";
import projectWorking from "../../assets/home/it-company-working.jpg";
import "./showcase.css";

const projects = [
  {
    id: "p1",
    title: "Next-Gen Enterprise ERP & Cloud Portal",
    category: "Web & Cloud",
    badge: "Enterprise SaaS",
    desc: "A high-performance ERP and workflow platform engineered for real-time analytics, automated inventory forecasting, and multi-branch data synchronization.",
    img: project1,
    metrics: "40% Faster Load Time • 99.9% Uptime SLA",
    tags: ["React 19", "Node.js", "MongoDB", "AWS S3", "Docker"],
  },
  {
    id: "p2",
    title: "AI Computer Vision & Image Defect Detection System",
    category: "AI & Image Analysis",
    badge: "Computer Vision",
    desc: "High-precision industrial computer vision platform that inspects assembly lines, detects micro-surface cracks, and tags bounding-box defects in sub-15ms latency.",
    img: project3,
    metrics: "99.4% Defect Detection Accuracy • Sub-15ms Latency",
    tags: ["Python", "OpenCV", "PyTorch", "FastAPI", "Image Tagging"],
  },
  {
    id: "p3",
    title: "Cloud DevOps & Infrastructure Telemetry",
    category: "Cloud Native",
    badge: "DevOps & Cloud",
    desc: "Real-time telemetry and cluster observability dashboard tracking container health, Kubernetes microservice latency, and automated zero-downtime rollouts.",
    img: projectDevops,
    metrics: "99.99% Service Uptime • 50ms Telemetry Response",
    tags: ["Kubernetes", "Docker", "Prometheus", "Go", "AWS Cloud"],
  },
  {
    id: "p4",
    title: "Conversational AI & Customer Intelligence Suite",
    category: "AI & Image Analysis",
    badge: "Smart Automation",
    desc: "Omnichannel customer support platform integrating predictive ticket classification, automated FAQ triage, and multilingual Tamil & English sentiment tagging.",
    img: project2,
    metrics: "Over 10k Active Daily Sessions • 65% Instant Resolution",
    tags: ["Python", "FastAPI", "React", "Docker", "NLP Models"],
  },
  {
    id: "p5",
    title: "Healthcare EHR & Tele-Consultation Platform",
    category: "Web & Cloud",
    badge: "Digital Health",
    desc: "Comprehensive hospital management and outpatient records portal with encrypted clinical notes, digital diagnostic chart indexing, and video consultations.",
    img: projectWorking,
    metrics: "15,000+ Patient Records Indexed • HIPAA Compliant",
    tags: ["React", "Express.js", "WebRTC", "PostgreSQL", "Tailwind"],
  },
  {
    id: "p6",
    title: "FinTech Multi-Tenant Invoicing & Payment Engine",
    category: "Web & Cloud",
    badge: "FinTech & Banking",
    desc: "Automated GST compliance, invoice reconciliation, and subscription recurring-billing engine supporting high-volume real-time transactions.",
    img: project1,
    metrics: "100k+ Transactions Processed • Instant Webhook Delivery",
    tags: ["Spring Boot", "React", "Redis", "Razorpay API", "PostgreSQL"],
  },
];

export const ProjectShowCase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Web & Cloud", "AI & Image Analysis", "Cloud Native"];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-5 showcase-section" style={{ background: "#ffffff" }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            PRODUCTION PORTFOLIO & CLIENT DELIVERABLES
          </span>
          <h2 className="display-6 fw-bold mt-2 text-dark">
            Featured Enterprise <span style={{ color: "#16a34a" }}>Production Projects</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "680px", fontSize: "1.05rem" }}>
            Explore the real-world digital architectures, computer vision systems, and cloud platforms engineered and delivered by GrowthNest Tech Solution.
          </p>

          {/* Filter Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="btn btn-sm rounded-pill px-3 py-2 fw-semibold"
                  style={{
                    fontSize: "0.85rem",
                    backgroundColor: isSelected ? "#16a34a" : "#ffffff",
                    borderColor: isSelected ? "#16a34a" : "#cbd5e1",
                    color: isSelected ? "#ffffff" : "#475569",
                    boxShadow: isSelected ? "0 2px 8px rgba(22, 163, 74, 0.25)" : "none",
                  }}
                >
                  {cat === "all" ? "All Projects (6)" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <Row className="g-4">
          {filteredProjects.map((item, index) => (
            <Col key={item.id} lg={4} md={6}>
              <div 
                className="enterprise-case-card h-100 d-flex flex-column justify-content-between"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.25s ease"
                }}
              >
                <div>
                  <div className="case-img-box position-relative" style={{ height: "200px", overflow: "hidden", background: "#f1f5f9" }}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="case-img w-100 h-100" 
                      style={{ objectFit: "cover" }}
                    />
                    <div 
                      className="case-category-pill position-absolute"
                      style={{
                        top: "12px",
                        left: "12px",
                        background: "rgba(15, 23, 42, 0.85)",
                        color: "#ffffff",
                        padding: "4px 12px",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        fontWeight: "600"
                      }}
                    >
                      {item.badge}
                    </div>
                  </div>

                  <div className="case-body p-4">
                    <h4 className="case-title fw-bold mb-2 fs-5 text-dark">{item.title}</h4>
                    <p className="case-desc text-secondary mb-3 small" style={{ lineHeight: "1.6" }}>{item.desc}</p>

                    <div 
                      className="case-metric mb-3 p-2 rounded-3 small d-flex align-items-center"
                      style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#15803d" }}
                    >
                      <FaCheckCircle className="text-success me-2 flex-shrink-0" />
                      <span className="fw-semibold">{item.metrics}</span>
                    </div>

                    <div className="case-tags-wrap d-flex flex-wrap gap-1 mb-2">
                      {item.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="badge rounded-pill px-2 py-1 fw-normal"
                          style={{
                            fontSize: "0.72rem",
                            color: "#334155",
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 pt-0 border-top-0">
                  <Link
                    to="/getintouch"
                    className="action-btn-outline w-100 text-decoration-none py-2 text-center small d-flex align-items-center justify-content-center gap-2"
                  >
                    <span>Request Quote For Similar Project</span>
                    <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
