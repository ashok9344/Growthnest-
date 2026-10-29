import React, { useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaKeyboard,
  FaImage,
  FaFileAlt,
  FaClipboardCheck,
  FaFileInvoice,
  FaTags,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaAward,
  FaCheckCircle,
  FaFileExcel
} from "react-icons/fa";
import dataImage from "../assets/home/enterprise-devops-dashboard.jpg";

const nonItRoles = [
  {
    id: "de-01",
    title: "Data Entry Specialist / Operator",
    category: "Data Entry",
    icon: <FaKeyboard />,
    type: "Full-Time / Day & Evening Shifts",
    location: "Tirunelveli / On-Site",
    salary: "Competitive Industry Package + Incentives",
    experience: "0-2 Years (Freshers Welcome)",
    openings: 8,
    description: "Execute high-speed alphanumeric data entry, database records compilation, spreadsheet updates, and data validation with 99.5%+ accuracy.",
    skills: ["Typing Speed 35-45+ WPM", "MS Excel & Google Sheets", "Data Cleaning", "Numeric Verification", "Attention to Detail"],
  },
  {
    id: "ia-02",
    title: "Image Analysis & AI Data Annotation Specialist",
    category: "Image Analysis",
    icon: <FaImage />,
    type: "Full-Time",
    location: "Tirunelveli / Hybrid",
    salary: "Attractive Package + Monthly Performance Bonus",
    experience: "0-1 Year (Training Provided)",
    openings: 6,
    description: "Analyze, classify, and annotate high-resolution imagery using 2D/3D bounding boxes, polygon segmentation, and landmark tagging for AI & Computer Vision datasets.",
    skills: ["Image Tagging & Bounding Boxes", "Semantic Segmentation", "CVAT / LabelImg Tooling", "Visual Quality Inspection", "Object Classification"],
  },
  {
    id: "med-03",
    title: "Healthcare & Records Data Processing Executive",
    category: "Data Entry",
    icon: <FaFileInvoice />,
    type: "Full-Time",
    location: "Tirunelveli / On-Site",
    salary: "Standard Industry Compensation + Night Allowance",
    experience: "0-2 Years",
    openings: 5,
    description: "Transcribe, index, and digitize medical intake sheets, patient records, diagnostic lab reports, and billing data adhering to enterprise data confidentiality standards.",
    skills: ["Medical Data Entry", "EHR Record Indexing", "Keyboard Mastery", "Accuracy & Quality Audit", "HIPAA Compliance Awareness"],
  },
  {
    id: "qa-04",
    title: "Image Quality Audit & Verification Analyst",
    category: "Image Analysis",
    icon: <FaClipboardCheck />,
    type: "Full-Time",
    location: "Tirunelveli / On-Site",
    salary: "Best in Industry + Quarterly Incentives",
    experience: "1-2 Years",
    openings: 3,
    description: "Conduct rigorous quality control checks on labeled image datasets, audit boundary pixel accuracy, detect labeling discrepancies, and maintain deliverable benchmarks.",
    skills: ["Image Quality Audit", "Error Rate Analysis", "Pixel Precision", "Dataset Validation", "Detailed Reporting"],
  },
  {
    id: "ocr-05",
    title: "Document Digitization & OCR Verification Executive",
    category: "Data Processing",
    icon: <FaFileAlt />,
    type: "Full-Time",
    location: "Tirunelveli / On-Site",
    salary: "Competitive Monthly Package",
    experience: "Fresher / Experienced",
    openings: 4,
    description: "Scan, convert, and verify physical invoices, legal forms, and utility bills using OCR workflows; correct OCR translation discrepancies and index metadata.",
    skills: ["OCR Proofreading", "Document Indexing", "Invoice Data Extraction", "PDF & Batch Processing", "Data Hygiene"],
  },
  {
    id: "cat-06",
    title: "E-Commerce Catalog & Product Image Tagging Associate",
    category: "Image & Catalog",
    icon: <FaTags />,
    type: "Full-Time",
    location: "Tirunelveli / Remote Friendly",
    salary: "Performance-Based Industry Package",
    experience: "0-2 Years",
    openings: 5,
    description: "Review enterprise retail and e-commerce product catalogs; tag color palettes, product silhouettes, brand attributes, and maintain standardized product inventories.",
    skills: ["Product Image Tagging", "SKU Categorization", "Attribute Mapping", "E-Commerce Spreadsheets", "Quality Check"],
  },
];

const NonITWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRoles =
    selectedCategory === "all"
      ? nonItRoles
      : nonItRoles.filter((r) => r.category === selectedCategory);

  const categories = ["all", "Data Entry", "Image Analysis", "Data Processing", "Image & Catalog"];

  return (
    <div className="non-it-work-page py-5" style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
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
              DATA OPERATIONS & BPO EXCELLENCE
            </span>
            <h1 className="display-5 fw-bold text-dark mt-2">
              Data Entry & <span style={{ color: "#16a34a" }}>Image Analysis Operations</span>
            </h1>
            <p className="text-secondary mx-auto" style={{ maxWidth: "680px", fontSize: "1.05rem" }}>
              Join GrowthNest's dedicated data operations unit. We power enterprise datasets through precision data entry, AI image analysis, computer vision annotation, and digital records processing.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="btn btn-sm rounded-pill px-3 py-2 fw-semibold"
                  style={{ 
                    fontSize: "0.85rem",
                    backgroundColor: isSelected ? "#16a34a" : "#ffffff",
                    borderColor: isSelected ? "#16a34a" : "#cbd5e1",
                    color: isSelected ? "#ffffff" : "#475569",
                    boxShadow: isSelected ? "0 2px 8px rgba(22, 163, 74, 0.25)" : "none"
                  }}
                >
                  {cat === "all" ? "All Operations Roles" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Data Entry & Excel Project Showcase */}
        <div 
          className="p-3 p-md-4 p-lg-5 rounded-4 mb-4 mb-md-5"
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)"
          }}
        >
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div 
                className="position-relative rounded-3 overflow-hidden shadow-sm"
                style={{ border: "1px solid #e2e8f0", background: "#0f172a" }}
              >
                <img
                  src={dataImage}
                  alt="Enterprise Excel Sheet Creation and Data Entry Operations"
                  className="w-100 img-fluid"
                  style={{ minHeight: "200px", maxHeight: "320px", width: "100%", objectFit: "cover" }}
                />
                <div 
                  className="position-absolute"
                  style={{
                    top: "12px",
                    left: "12px",
                    background: "rgba(15, 23, 42, 0.88)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    padding: "5px 12px",
                    borderRadius: "8px",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                    border: "1px solid rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <FaFileExcel className="me-2 text-success" />
                  Excel & Data Entry Operations
                </div>
                <div 
                  className="position-absolute"
                  style={{
                    bottom: "12px",
                    left: "12px",
                    right: "12px",
                    background: "rgba(15, 23, 42, 0.90)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div className="fw-bold small text-white">Live Data Compilation & Validation Hub</div>
                  <div style={{ fontSize: "0.72rem", color: "#a7f3d0" }}>
                    Tirunelveli Operations Center • 99.8% Alphanumeric Accuracy
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="ps-lg-3">
                <span className="badge px-3 py-2 rounded-pill fw-semibold mb-2" style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  DATA ENTRY & EXCEL SPREADSHEETS
                </span>
                <h2 className="fw-bold text-dark mb-3 fs-3">
                  Custom Excel Workbook Creation & Alphanumeric Data Entry
                </h2>
                <p className="text-secondary mb-4" style={{ lineHeight: "1.7", fontSize: "0.98rem" }}>
                  Our dedicated non-IT data operations team handles end-to-end data processing: from creating structured Microsoft Excel workbooks, dynamic formulas, and automated summary spreadsheets to executing rapid, error-free alphanumeric data entry across enterprise CRM, inventory, and billing databases.
                </p>

                {/* Checklist */}
                <Row className="g-2 mb-4">
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-2 small text-secondary">
                      <FaCheckCircle className="text-success flex-shrink-0" />
                      <span>Excel Sheets & Formula Setup</span>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-2 small text-secondary">
                      <FaCheckCircle className="text-success flex-shrink-0" />
                      <span>Rapid Alphanumeric Data Entry</span>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-2 small text-secondary">
                      <FaCheckCircle className="text-success flex-shrink-0" />
                      <span>Invoice, Billing & Records Entry</span>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex align-items-center gap-2 small text-secondary">
                      <FaCheckCircle className="text-success flex-shrink-0" />
                      <span>99.8% Accuracy & Audit Verification</span>
                    </div>
                  </Col>
                </Row>

                {/* Tech & Skills tags */}
                <div className="d-flex flex-wrap gap-1 mb-4">
                  {["MS Excel", "Google Sheets", "Spreadsheet Formulas", "Data Entry", "Records Verification", "Data Cleaning", "Double-Key Verification"].map((tag, idx) => (
                    <span 
                      key={idx}
                      className="badge rounded-pill px-3 py-2 fw-normal"
                      style={{
                        fontSize: "0.76rem",
                        color: "#334155",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
                  <Link to="/getintouch" className="action-btn text-decoration-none text-center">
                    <span>Outsource Data Entry Work</span>
                    <FaArrowRight className="action-arrow" />
                  </Link>
                  <Link to="/applyjob" state={{ jobRole: "Data Entry Specialist / Operator", category: "Non-IT Data Operations" }} className="action-btn-outline text-decoration-none text-center">
                    <span>Apply For Data Entry Role</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* B2B Client Outsource Callout */}
        <div 
          className="mb-5 p-4 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0" }}
        >
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge bg-success text-white small px-2 py-1 rounded-pill">FOR BUSINESS CLIENTS & AI TEAMS</span>
              <span className="fw-bold text-dark">Need High-Volume Data Entry or Image Annotation Done?</span>
            </div>
            <p className="text-secondary small mb-0">
              We provide dedicated, secure in-house BPO teams for 2D/3D polygon image segmentation, OCR document extraction, and medical data indexing with 99.5%+ accuracy SLAs under strict NDA.
            </p>
          </div>
          <Link to="/getintouch" className="action-btn text-decoration-none text-nowrap">
            <span>Outsource Data Work To Us</span>
            <FaArrowRight size={11} className="ms-1" />
          </Link>
        </div>

        {/* Roles Grid */}
        <Row className="g-4">
          {filteredRoles.map((role) => (
            <Col lg={6} key={role.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="h-100"
              >
                <div
                  className="p-4 rounded-3 h-100 d-flex flex-column justify-content-between"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div>
                    {/* Top Row */}
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="fs-3 p-2 rounded-3 d-flex align-items-center justify-content-center"
                          style={{ 
                            color: "#16a34a",
                            background: "#f0fdf4", 
                            border: "1px solid #bbf7d0",
                            width: "48px",
                            height: "48px"
                          }}
                        >
                          {role.icon}
                        </div>
                        <div>
                          <h4 className="fw-bold text-dark mb-0 fs-5">{role.title}</h4>
                          <span className="text-secondary small">{role.category}</span>
                        </div>
                      </div>
                      <Badge 
                        style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }} 
                        className="px-3 py-2 rounded-pill fw-semibold"
                      >
                        {role.openings} Openings
                      </Badge>
                    </div>

                    <p className="text-secondary small mb-3">{role.description}</p>

                    {/* Metadata tags */}
                    <div className="d-flex flex-wrap gap-3 mb-3 small text-secondary">
                      <span className="d-flex align-items-center gap-1">
                        <FaClock style={{ color: "#16a34a" }} /> {role.type}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <FaMapMarkerAlt style={{ color: "#16a34a" }} /> {role.location}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <FaAward style={{ color: "#16a34a" }} /> {role.salary}
                      </span>
                    </div>

                    {/* Skills pills */}
                    <div className="mb-4">
                      <span className="text-muted small fw-bold d-block mb-1">Required Skills & Tools:</span>
                      <div className="d-flex flex-wrap gap-1">
                        {role.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="badge rounded-pill px-2 py-1 fw-normal"
                            style={{ 
                              fontSize: "0.75rem",
                              color: "#334155",
                              background: "#f8fafc",
                              border: "1px solid #e2e8f0" 
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="pt-3 border-top border-light-subtle d-flex justify-content-between align-items-center">
                    <span className="text-muted small">{role.experience}</span>
                    <Link
                      to="/applyjob"
                      state={{ jobRole: role.title, category: "Non-IT Data Operations" }}
                      className="action-btn text-decoration-none py-2 px-3 small"
                    >
                      <span>Apply Now</span>
                      <FaArrowRight className="action-arrow" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Bottom Banner */}
        <div
          className="mt-5 p-4 rounded-3 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
          }}
        >
          <div>
            <h5 className="fw-bold text-dark mb-1">Interested in Data Entry or Image Analysis Projects?</h5>
            <p className="text-secondary mb-0 small">Freshers with basic computer and typing skills are provided complete on-the-job training for annotation and data processing.</p>
          </div>
          <Link to="/applyjob" state={{ jobRole: "General Data Operations", category: "Non-IT" }} className="action-btn text-decoration-none text-nowrap">
            <span>Submit Application</span>
            <FaArrowRight className="action-arrow" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NonITWork;
