import React, { useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaQuestionCircle, 
  FaSearch, 
  FaArrowRight, 
  FaHeadset
} from "react-icons/fa";

const faqData = [
  {
    category: "IT Projects & Services",
    q: "What types of IT software projects does GrowthNest build?",
    a: "GrowthNest designs and delivers end-to-end full-stack web platforms, cross-platform mobile apps (Flutter, React Native), scalable cloud infrastructure, custom ERP systems, and AI-assisted automation workflows for startups and enterprises.",
  },
  {
    category: "IT Projects & Services",
    q: "How do I request a custom software development proposal or quote?",
    a: "You can reach out through our 'Get In Touch' page or schedule a session via the 'Meet' feature. Our technical leads will conduct a requirements discovery call and provide an architectural blueprint with timelines and estimates.",
  },
  {
    category: "IT Projects & Services",
    q: "Do you offer post-deployment maintenance and cloud support?",
    a: "Yes! Every software project we deliver includes deployment warranty, automated CI/CD monitoring, regular security patching, and SLA-backed maintenance plans.",
  },
  {
    category: "Careers & Hiring",
    q: "Are freshers eligible for IT and Non-IT career openings at GrowthNest?",
    a: "Absolutely! We actively welcome fresh graduates, college passouts, and career switchers. We evaluate candidates on logic, willingness to learn, and problem-solving mindset rather than prior brand names.",
  },
  {
    category: "Careers & Hiring",
    q: "What is the interview and hiring process at GrowthNest?",
    a: "Our process is simple and practical: 1) Initial resume screening, 2) Technical or role-specific hands-on assignment / live assessment, 3) Culture & leadership interview with the founders, and 4) Direct offer roll-out.",
  },
  {
    category: "Careers & Hiring",
    q: "What kinds of Non-IT work opportunities do you offer?",
    a: "We offer specialized career opportunities in Data Entry Operations, AI Image Analysis & Computer Vision Bounding-Box Annotation, Healthcare Records Digitization, OCR Quality Verification, and E-Commerce Catalog Operations.",
  },
  {
    category: "Training & Incubation",
    q: "What is the GrowthNest Tech Solution incubation model?",
    a: "Unlike traditional passive coaching, GrowthNest Tech Solution pairs trainees directly with live production projects, Git team repositories, pull-request reviews, and real client deliverables, guaranteeing true enterprise experience.",
  },
  {
    category: "General",
    q: "Where is GrowthNest Tech Solution located?",
    a: "Our main development campus is located in Adayakarungulam, Ambasumuthiram, Tamil Nadu, with university MoU partner centers across South India.",
  },
  {
    category: "General",
    q: "Can universities partner with GrowthNest for student technical workshops?",
    a: "Yes! We hold active MoUs with prominent engineering colleges and polytechnics, organizing 3-5 day practical hackathons, campus placement accelerators, and hands-on immersion modules.",
  },
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "IT Projects & Services", "Careers & Hiring", "Training & Incubation", "General"];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeTab === "all" || item.category === activeTab;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq-page py-5" style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="tech-pill mb-2">
              <span className="tech-pill-dot"></span>
              HELP & FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="display-5 fw-bold text-dark mt-2">
              Frequently Asked <span style={{ color: "#16a34a" }}>Questions (FAQ)</span>
            </h1>
            <p className="text-secondary mx-auto" style={{ maxWidth: "620px", fontSize: "1.05rem" }}>
              Find quick answers to common questions about our IT projects, career openings, non-technical jobs, and software services.
            </p>
          </motion.div>

          {/* Search bar */}
          <div className="mx-auto mt-4" style={{ maxWidth: "520px" }}>
            <div
              className="d-flex align-items-center px-3 py-2 rounded-pill shadow-sm"
              style={{
                background: "#ffffff",
                border: "1px solid #cbd5e1",
              }}
            >
              <FaSearch style={{ color: "#16a34a" }} className="me-2" />
              <input
                type="text"
                className="form-control border-0 bg-transparent text-dark shadow-none"
                placeholder="Search question or keywords (e.g. project, salary, hiring)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: "0.95rem" }}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => {
              const isSelected = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className="btn btn-sm rounded-pill px-3 py-2 fw-semibold transition-all"
                  style={{ 
                    fontSize: "0.85rem",
                    backgroundColor: isSelected ? "#16a34a" : "#ffffff",
                    borderColor: isSelected ? "#16a34a" : "#cbd5e1",
                    color: isSelected ? "#ffffff" : "#475569",
                    boxShadow: isSelected ? "0 2px 8px rgba(22, 163, 74, 0.25)" : "none"
                  }}
                >
                  {cat === "all" ? "All Questions" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion */}
        <Row className="justify-content-center">
          <Col lg={10}>
            {filteredFaqs.length > 0 ? (
              <Accordion defaultActiveKey="0" className="faq-custom-accordion">
                {filteredFaqs.map((faq, idx) => (
                  <Accordion.Item
                    eventKey={String(idx)}
                    key={idx}
                    className="mb-3 rounded-3 overflow-hidden"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                    }}
                  >
                    <Accordion.Header>
                      <div className="d-flex align-items-center gap-3">
                        <FaQuestionCircle style={{ color: "#16a34a" }} className="fs-5 flex-shrink-0" />
                        <span className="fw-semibold text-dark fs-6">{faq.q}</span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body
                      className="text-secondary pt-2 pb-4 px-4"
                      style={{ lineHeight: "1.7", fontSize: "0.98rem", backgroundColor: "#ffffff" }}
                    >
                      {faq.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-5 text-muted">
                <FaQuestionCircle className="fs-1 text-secondary mb-3 opacity-50" />
                <h5 className="text-dark">No matching questions found</h5>
                <p className="text-secondary small">Try searching for other keywords or select 'All Questions'.</p>
              </div>
            )}
          </Col>
        </Row>

        {/* Still have questions banner */}
        <div
          className="mt-5 p-4 rounded-3 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <div 
              className="fs-2 p-3 rounded-circle d-flex align-items-center justify-content-center"
              style={{ color: "#16a34a", background: "#f0fdf4", width: "56px", height: "56px" }}
            >
              <FaHeadset />
            </div>
            <div>
              <h5 className="fw-bold text-dark mb-1">Still have questions?</h5>
              <p className="text-secondary mb-0 small">Our support and counseling team is ready to assist you right away.</p>
            </div>
          </div>
          <Link to="/getintouch" className="action-btn text-decoration-none text-nowrap">
            <span>Contact Support</span>
            <FaArrowRight className="action-arrow" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
