import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaArrowRight, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import project1 from "../../assets/home/project1.png";
import project2 from "../../assets/home/project2.png";
import inmbaLogo from "../../assets/home/inmba-logo.png";
import womensStyleLogo from "../../assets/home/womensstyle-logo.png";
import "./showcase.css";

const projects = [
  {
    id: "inmba",
    title: "INMBA",
    category: "INMBA",
    badge: "INMBA",
    desc: "Global business networking and international trade delegation portal engineered for business leaders, featuring interactive member directories, conference event scheduling, and collaborative community forums.",
    img: project1,
    logo: inmbaLogo,
    liveUrl: "https://inmba.org",
    displayUrl: "inmba.org",
    metrics: "International Business Network • 100% Live Production",
    tags: ["React", "Cloud Architecture", "REST APIs", "Modern UI", "Community Portal"],
  },
  {
    id: "womensstyle",
    title: "Women's Style",
    category: "Women's Style",
    badge: "Women's Style",
    desc: "Full-featured online storefront engineered with fluid product catalogs, dynamic cart management, secure checkout, and mobile-first responsive shopping experience.",
    img: project2,
    logo: womensStyleLogo,
    liveUrl: "https://womensstyle.store",
    displayUrl: "womensstyle.store",
    metrics: "Mobile-First UX • High-Conversion Storefront",
    tags: ["React", "E-Commerce", "Shopping Cart", "Responsive UX", "Vercel"],
  },
];

export const ProjectShowCase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

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
            Featured <span style={{ color: "#16a34a" }}>Production Projects</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "680px", fontSize: "1.05rem" }}>
            Explore the real-world digital architectures and live production platforms engineered and deployed by GrowthNest Tech Solution.
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
                  {cat === "all" ? `All Projects (${projects.length})` : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <Row className="g-4 justify-content-center">
          {filteredProjects.map((item) => (
            <Col key={item.id} lg={filteredProjects.length === 1 ? 8 : 6} md={6}>
              <div 
                className="enterprise-case-card h-100 d-flex flex-column justify-content-between"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.25s ease"
                }}
              >
                <div>
                  {/* Clickable Image Box */}
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-img-box position-relative d-block text-decoration-none"
                    style={{ height: "230px", overflow: "hidden", background: "#f8fafc" }}
                  >
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="case-img w-100 h-100" 
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                    />
                    
                    {/* Category Badge */}
                    <div 
                      className="case-category-pill position-absolute"
                      style={{
                        top: "12px",
                        left: "12px",
                        background: "rgba(15, 23, 42, 0.88)",
                        color: "#ffffff",
                        padding: "4px 12px",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        fontWeight: "600",
                        backdropFilter: "blur(4px)"
                      }}
                    >
                      {item.badge}
                    </div>

                    {/* Live Demo Pill */}
                    <div 
                      className="position-absolute d-flex align-items-center gap-1"
                      style={{
                        top: "12px",
                        right: "12px",
                        background: "#16a34a",
                        color: "#ffffff",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.74rem",
                        fontWeight: "700",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.25)"
                      }}
                    >
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff", display: "inline-block" }}></span>
                      <span>Live Site</span>
                      <FaExternalLinkAlt size={9} className="ms-1" />
                    </div>

                    {/* Official Brand Logo */}
                    <div
                      className="position-absolute shadow-sm"
                      style={{
                        bottom: "12px",
                        right: "14px",
                        width: "56px",
                        height: "56px",
                        borderRadius: "14px",
                        background: "#ffffff",
                        padding: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #ffffff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
                      }}
                    >
                      <img 
                        src={item.logo} 
                        alt={`${item.title} Logo`}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                      />
                    </div>
                  </a>

                  {/* Card Content */}
                  <div className="case-body p-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 small fw-semibold">
                        <FaGlobe className="me-1" size={11} />
                        {item.displayUrl}
                      </span>
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="small text-success fw-semibold text-decoration-none d-flex align-items-center gap-1"
                      >
                        <span>Open Live</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>

                    <h4 className="case-title fw-bold mb-2 fs-5">
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark text-decoration-none"
                      >
                        {item.title}
                      </a>
                    </h4>
                    
                    <p className="case-desc text-secondary mb-3 small" style={{ lineHeight: "1.6" }}>
                      {item.desc}
                    </p>

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

                {/* Card Action Buttons */}
                <div className="p-4 pt-0 border-top-0 d-flex flex-column gap-2">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-100 py-2 d-flex align-items-center justify-content-center gap-2 fw-semibold text-decoration-none"
                    style={{ background: "#16a34a", borderColor: "#16a34a", boxShadow: "0 2px 6px rgba(22, 163, 74, 0.25)" }}
                  >
                    <span>Visit Live Website ({item.displayUrl})</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
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
