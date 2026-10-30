import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaShieldAlt, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaUser, 
  FaBuilding, 
  FaComments,
  FaArrowRight,
  FaSpinner,
  FaWhatsapp,
  FaFileContract,
  FaCalendarAlt
} from "react-icons/fa";
import { sendMessage } from "../api/contactApi";

const GetinTouch = ({ isEmbedded = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Custom Web Platform / SaaS Development",
    timeline: "1 - 3 Months",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  // validation rules
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact / WhatsApp number is required for quote communication";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project requirements or scope";
    }
    return newErrors;
  };

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setSuccess("");
      setErrors({});

      const compositeMessage = `[PROJECT INQUIRY]\n` +
        `Company: ${formData.company ? formData.company.trim() : "N/A"}\n` +
        `Service: ${formData.service}\n` +
        `Timeline: ${formData.timeline}\n` +
        `Phone: ${formData.phone.trim()}\n\n` +
        `Project Scope & Requirements:\n${formData.message.trim()}`;

      await sendMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: compositeMessage,
      });

      setSuccess("Thank you! Your project inquiry has been received. Our senior solution architect will review your requirements and provide an initial proposal & estimate within 24 hours under NDA.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Custom Web Platform / SaaS Development",
        timeline: "1 - 3 Months",
        message: "",
      });
    } catch {
      setErrors({ api: "Failed to send project inquiry. Please click the WhatsApp button to chat with our technical lead directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`contact-master-section ${isEmbedded ? "py-5" : "pt-5 pb-5"}`}>
      <Container className="position-relative py-3">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            REQUEST A PROJECT PROPOSAL & FREE ESTIMATE
          </span>
          <h2 className="display-6 fw-bold mt-2 text-dark">
            Let's Build Your Next <span style={{ color: "#16a34a" }}>Software Solution</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "700px", fontSize: "1.05rem" }}>
            Have a project in mind, need to automate workflows, or require a dedicated engineering team? Share your requirements below to receive a comprehensive technical proposal within 24 hours.
          </p>
        </div>

        {/* Master 2-Column Responsive Grid */}
        <Row className="g-4 g-lg-5 align-items-stretch">
          {/* LEFT COLUMN: CONTACT INFORMATION & CLIENT ASSURANCE */}
          <Col lg={5} className="d-flex flex-column justify-content-between">
            <div className="corporate-info-panel h-100 p-4 p-md-5 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="corporate-info-badge">
                    Direct Client Advisory
                  </span>
                  <span className="badge bg-light text-secondary border px-2 py-1 small fw-semibold">
                    <FaClock className="me-1 text-success" /> &lt; 2h Response Time
                  </span>
                </div>

                <h3 className="h4 fw-bold mb-3 text-dark">
                  Connect Directly With Our Solution Leads
                </h3>
                <p className="text-secondary mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Every project at GrowthNest is managed by experienced software architects. We sign mutual Non-Disclosure Agreements (NDAs) to protect your business ideas and proprietary data.
                </p>

                {/* Info Cards Stack */}
                <div className="contact-cards-stack d-flex flex-column gap-3 mb-4">
                  {/* Headquarters Campus */}
                  <div className="corporate-info-card d-flex align-items-start gap-3 p-3">
                    <div className="corporate-icon-bubble">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <div className="corporate-card-label">DEVELOPMENT LAB & HEADQUARTERS</div>
                      <div className="corporate-card-value">
                        GrowthNest Tech Solution, Adayakarungulam, Ambasumuthiram, Tamil Nadu, India
                      </div>
                    </div>
                  </div>

                  {/* Phone Line */}
                  <a 
                    href="tel:+916369347439" 
                    className="corporate-info-card d-flex align-items-start gap-3 p-3 text-decoration-none"
                  >
                    <div className="corporate-icon-bubble">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <div className="corporate-card-label">DIRECT PROJECT LINE (CLICK TO CALL)</div>
                      <div className="corporate-card-value fw-bold text-dark">
                        +91 63693 47439
                      </div>
                      <div className="small text-secondary">
                        Mon – Sat • 9:00 AM – 7:00 PM IST
                      </div>
                    </div>
                  </a>

                  {/* Corporate Email */}
                  <a 
                    href="mailto:growthnesttechsolution@gmail.com" 
                    className="corporate-info-card d-flex align-items-start gap-3 p-3 text-decoration-none"
                  >
                    <div className="corporate-icon-bubble">
                      <FaEnvelope />
                    </div>
                    <div>
                      <div className="corporate-card-label">PROJECT PROPOSALS & RFPs</div>
                      <div className="corporate-card-value text-break text-dark">
                        growthnesttechsolution@gmail.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp Chat */}
              <div className="pt-3 border-top border-light-subtle">
                <a
                  href="https://wa.me/916369347439?text=Hello%20GrowthNest,%20I%20have%20a%20project%20requirement%20and%20would%20like%20to%20discuss%20timelines%20and%20costs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-corporate-btn d-flex align-items-center justify-content-center gap-2 w-100 text-decoration-none"
                >
                  <FaWhatsapp size={20} />
                  <span>Chat With Our Technical Lead on WhatsApp</span>
                </a>
              </div>

              {/* Google Maps Location */}
              <div className="pt-3 border-top border-light-subtle">
                <div className="rounded-3 overflow-hidden border border-light-subtle shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d985.9512725217838!2d77.416604!3d8.710051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0439003d56a7b7%3A0x2414b7237c95821!2sGrowthNest%20Tech%20Solution!5e0!3m2!1sen!2sin!4v1793359799802!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="GrowthNest Tech Solution Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT COLUMN: PROJECT INQUIRY FORM */}
          <Col lg={7}>
            <div className="corporate-form-wrapper p-4 p-md-5">
              <div className="form-heading-group mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="h4 fw-bold mb-1 text-dark">
                    Tell Us About Your Project
                  </h3>
                  <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 small">
                    <FaShieldAlt className="me-1" /> NDA Protected
                  </span>
                </div>
                <p className="text-secondary small mb-0">
                  Fill in your project requirements below. Our engineering team will prepare an architectural roadmap and cost estimate.
                </p>
              </div>

              {/* Alerts */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    className="alert alert-success d-flex align-items-center gap-2 mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <FaCheckCircle className="flex-shrink-0" size={18} />
                    <div className="small">{success}</div>
                  </motion.div>
                )}

                {errors.api && (
                  <motion.div
                    className="alert alert-danger mb-4 small"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>{errors.api}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                {/* Row 1: Full Name & Company Name */}
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <div>
                      <label htmlFor="contact-name" className="form-label small fw-bold text-dark">
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light text-muted">
                          <FaUser size={13} />
                        </span>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Kumar"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        />
                      </div>
                      {errors.name && (
                        <div className="text-danger small mt-1">{errors.name}</div>
                      )}
                    </div>
                  </Col>

                  <Col md={6}>
                    <div>
                      <label htmlFor="contact-company" className="form-label small fw-bold text-dark">
                        Company / Business Name <span className="text-muted fw-normal">(Optional)</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light text-muted">
                          <FaBuilding size={13} />
                        </span>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme Tech / Startup"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* Row 2: Work Email & Contact Phone */}
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <div>
                      <label htmlFor="contact-email" className="form-label small fw-bold text-dark">
                        Work Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light text-muted">
                          <FaEnvelope size={13} />
                        </span>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        />
                      </div>
                      {errors.email && (
                        <div className="text-danger small mt-1">{errors.email}</div>
                      )}
                    </div>
                  </Col>

                  <Col md={6}>
                    <div>
                      <label htmlFor="contact-phone" className="form-label small fw-bold text-dark">
                        Phone / WhatsApp <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light text-muted">
                          <FaPhoneAlt size={13} />
                        </span>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        />
                      </div>
                      {errors.phone && (
                        <div className="text-danger small mt-1">{errors.phone}</div>
                      )}
                    </div>
                  </Col>
                </Row>

                {/* Row 3: Service Type & Estimated Timeline */}
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <div>
                      <label htmlFor="contact-service" className="form-label small fw-bold text-dark">
                        Project / Service Category
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light text-muted">
                          <FaFileContract size={13} />
                        </span>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option>Custom Web Platform / SaaS Development</option>
                          <option>Mobile App Development (iOS & Android)</option>
                          <option>Enterprise ERP / CRM / Business Software</option>
                          <option>AI, Machine Learning & Computer Vision</option>
                          <option>Data Entry & Image Annotation (BPO)</option>
                          <option>Hire Dedicated Developers (Monthly Retainer)</option>
                          <option>Cloud Infrastructure & DevOps Setup</option>
                        </select>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div>
                      <label htmlFor="contact-timeline" className="form-label small fw-bold text-dark">
                        Estimated Target Timeline
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-light text-muted">
                          <FaCalendarAlt size={13} />
                        </span>
                        <select
                          id="contact-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option>1 - 3 Months (Standard)</option>
                          <option>Urgent (&lt; 1 Month MVP)</option>
                          <option>3 - 6 Months (Enterprise)</option>
                          <option>Flexible / Ongoing Retainer</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* Message / Project Description */}
                <div className="mb-4">
                  <label htmlFor="contact-message" className="form-label small fw-bold text-dark">
                    Project Requirements / Problem Statement <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted align-items-start pt-2">
                      <FaComments size={13} />
                    </span>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the key features, required user roles, target platforms, or data processing scope..."
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <div className="text-danger small mt-1">{errors.message}</div>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="action-btn w-100 py-3 border-0 d-flex align-items-center justify-content-center gap-2"
                  style={{ fontSize: "1rem" }}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="spinner-border spinner-border-sm" />
                      <span>Transmitting Project Brief...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      <span>Submit Project Brief For Free Estimate</span>
                      <FaArrowRight size={12} className="ms-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .contact-master-section {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }

        .corporate-info-panel {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
        }

        .corporate-info-badge {
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .corporate-info-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .corporate-info-card:hover {
          border-color: #86efac;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .corporate-icon-bubble {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .corporate-card-label {
          font-size: 0.74rem;
          font-weight: 700;
          color: #16a34a;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .corporate-card-value {
          font-size: 0.94rem;
          color: #0f172a;
        }

        .whatsapp-corporate-btn {
          background: #16a34a;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px;
          border-radius: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(22, 163, 74, 0.25);
        }

        .whatsapp-corporate-btn:hover {
          background: #15803d;
          color: #ffffff;
        }

        .corporate-form-wrapper {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
};

export default GetinTouch;
