import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  FaLaptopCode, 
  FaCloud, 
  FaBrain, 
  FaPalette, 
  FaUserGraduate, 
  FaCheck, 
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaBolt,
  FaLock,
  FaMobileAlt,
  FaDatabase,
  FaRocket,
  FaSyncAlt,
  FaClock,
  FaUsers
} from "react-icons/fa";

const Offering = () => {
  return (
    <section className="bento-solutions-section py-5 position-relative">
      <Container className="position-relative py-3">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            ENTERPRISE CAPABILITIES
          </span>
          <h2 className="display-6 fw-bold mt-2">
            End-to-End <span className="text-success-corporate">IT Solutions</span> & Engineering
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "700px", fontSize: "1.05rem" }}>
            We architect, develop, and maintain custom web applications, cross-platform mobile apps, cloud infrastructure, AI computer vision systems, and high-volume data operations for startups and enterprises worldwide.
          </p>
        </div>

        {/* Bento Grid */}
        <Row className="g-4">
          {/* Card 1: Large Featured Web & Full-Stack Systems */}
          <Col lg={8} md={12}>
            <div className="corporate-bento-card p-4 p-md-5 h-100">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="corporate-bento-icon">
                  <FaLaptopCode />
                </div>
                <span className="corporate-bento-badge">
                  <FaBolt className="me-1" /> FLAGSHIP SOLUTION
                </span>
              </div>
              <h3 className="fw-bold mb-3">
                Custom Web & Enterprise Full-Stack Engineering
              </h3>
              <p className="text-muted mb-4" style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
                We architect and build robust, secure, and blazing-fast digital platforms using React 19, Node.js, Python, and scalable cloud microservices. Engineered for high concurrency, zero latency, and flawless UX.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="feature-check-item">
                    <span className="check-dot">✓</span>
                    <span>Microservices & Event-Driven APIs</span>
                  </div>
                  <div className="feature-check-item mt-2">
                    <span className="check-dot">✓</span>
                    <span>Enterprise Database Optimization</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-check-item">
                    <span className="check-dot">✓</span>
                    <span>Cross-Platform Fluid Responsiveness</span>
                  </div>
                  <div className="feature-check-item mt-2">
                    <span className="check-dot">✓</span>
                    <span>DevOps & Automated CI/CD Pipelines</span>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top border-light-subtle gap-2">
                <span className="small text-secondary">
                  <strong>Stack:</strong> React 19 • Node.js • AWS Cloud • Docker • MongoDB
                </span>
                <Link to="/service" className="bento-link">
                  Explore Architecture <FaArrowRight className="ms-1" size={12} />
                </Link>
              </div>
            </div>
          </Col>

          {/* Card 2: Cloud Infrastructure & DevOps */}
          <Col lg={4} md={6}>
            <div className="corporate-bento-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="corporate-bento-icon">
                    <FaCloud />
                  </div>
                  <span className="corporate-bento-badge">CLOUD & SRE</span>
                </div>
                <h4 className="fw-bold mb-2">Cloud Infrastructure & DevOps</h4>
                <p className="text-muted small mb-4">
                  Automate deployments, achieve resilient multi-region uptime on AWS and GCP with Kubernetes clusters and IaC pipelines.
                </p>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-2"><FaShieldAlt className="me-2 text-success" /> 99.99% High Availability SLA</li>
                  <li><FaCogs className="me-2 text-success" /> Zero-Downtime Blue/Green Deploys</li>
                </ul>
              </div>
              <Link to="/service" className="bento-link mt-4">
                Cloud Capabilities <FaArrowRight className="ms-1" size={12} />
              </Link>
            </div>
          </Col>

          {/* Card 3: AI & Machine Learning Solutions */}
          <Col lg={4} md={6}>
            <div className="corporate-bento-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="corporate-bento-icon">
                    <FaBrain />
                  </div>
                  <span className="corporate-bento-badge">AI & DATA</span>
                </div>
                <h4 className="fw-bold mb-2">Enterprise AI & Automation</h4>
                <p className="text-muted small mb-4">
                  Integrate custom predictive intelligence, autonomous LLM agents, and real-time business analytics directly into enterprise software.
                </p>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-2"><FaCheck className="me-2 text-success" /> Custom LLM RAG & Fine-Tuning</li>
                  <li><FaCheck className="me-2 text-success" /> Predictive Business Analytics</li>
                </ul>
              </div>
              <Link to="/service" className="bento-link mt-4">
                Explore AI Solutions <FaArrowRight className="ms-1" size={12} />
              </Link>
            </div>
          </Col>

          {/* Card 4: UI/UX & Design Systems */}
          <Col lg={4} md={6}>
            <div className="corporate-bento-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="corporate-bento-icon">
                    <FaPalette />
                  </div>
                  <span className="corporate-bento-badge">DESIGN SYSTEMS</span>
                </div>
                <h4 className="fw-bold mb-2">Product UI/UX & Design</h4>
                <p className="text-muted small mb-4">
                  Conversion-engineered, accessible interfaces crafted in Figma with atomic design tokens for seamless developer handoff.
                </p>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-2"><FaCheck className="me-2 text-success" /> High-Fidelity Interactive Prototypes</li>
                  <li><FaCheck className="me-2 text-success" /> Multi-Platform Design Systems</li>
                </ul>
              </div>
              <Link to="/service" className="bento-link mt-4">
                View Design Studio <FaArrowRight className="ms-1" size={12} />
              </Link>
            </div>
          </Col>

          {/* Card 5: Dedicated Developers & Engineering Team Extension */}
          <Col lg={4} md={6}>
            <div className="corporate-bento-card p-4 h-100 d-flex flex-column justify-content-between" style={{ background: "#f0fdf4", borderColor: "#bbf7d0" }}>
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="corporate-bento-icon" style={{ background: "#ffffff" }}>
                    <FaUsers />
                  </div>
                  <span className="corporate-bento-badge" style={{ background: "#dcfce7" }}>
                    TEAM EXTENSION
                  </span>
                </div>
                <h4 className="fw-bold mb-2">Dedicated Developer Teams</h4>
                <p className="text-secondary small mb-4">
                  Scale your engineering bandwidth with full-time, experienced React, Node.js, Python, Flutter, and QA engineers dedicated exclusively to your business sprint goals.
                </p>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-2"><FaChartLine className="me-2 text-success" /> Direct Slack, Jira & Daily Standups</li>
                  <li><FaCheck className="me-2 text-success" /> Flexible Monthly Retainers & Fast Onboarding</li>
                </ul>
              </div>
              <Link to="/getintouch" className="bento-link mt-4">
                Hire Dedicated Developers <FaArrowRight className="ms-1" size={12} />
              </Link>
            </div>
          </Col>

          {/* Card 6: Cybersecurity & Zero-Trust */}
          <Col lg={4} md={6}>
            <div className="corporate-bento-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="corporate-bento-icon">
                    <FaLock />
                  </div>
                  <span className="corporate-bento-badge">CYBER DEFENSE</span>
                </div>
                <h4 className="fw-bold mb-2">Cybersecurity & Zero-Trust</h4>
                <p className="text-muted small mb-4">
                  Protect mission-critical data with proactive penetration testing, automated vulnerability remediation, encrypted channels, and SOC 2 / GDPR compliance audits.
                </p>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-2"><FaShieldAlt className="me-2 text-success" /> Automated SAST/DAST Scans</li>
                  <li><FaCheck className="me-2 text-success" /> IAM Policies & Zero-Trust Encryption</li>
                </ul>
              </div>
              <Link to="/service" className="bento-link mt-4">
                Explore Cyber Architecture <FaArrowRight className="ms-1" size={12} />
              </Link>
            </div>
          </Col>

          {/* Card 7: Native & Cross-Platform Mobile Apps */}
          <Col lg={4} md={6}>
            <div className="corporate-bento-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="corporate-bento-icon">
                    <FaMobileAlt />
                  </div>
                  <span className="corporate-bento-badge">MOBILE APPS</span>
                </div>
                <h4 className="fw-bold mb-2">Native & Cross-Platform Apps</h4>
                <p className="text-muted small mb-4">
                  Build ultra-responsive, offline-first iOS and Android applications using Flutter and React Native with biometrics and real-time push notification engines.
                </p>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-2"><FaCheck className="me-2 text-success" /> Offline-First SQLite & Sync</li>
                  <li><FaCheck className="me-2 text-success" /> 60 FPS Native Performance & Smooth UX</li>
                </ul>
              </div>
              <Link to="/service" className="bento-link mt-4">
                View Mobile Frameworks <FaArrowRight className="ms-1" size={12} />
              </Link>
            </div>
          </Col>

          {/* Card 8: Data Entry & AI Image Analysis Operations */}
          <Col lg={4} md={6}>
            <div className="corporate-bento-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="corporate-bento-icon">
                    <FaDatabase />
                  </div>
                  <span className="corporate-bento-badge">DATA & ANNOTATION</span>
                </div>
                <h4 className="fw-bold mb-2">Data Entry & Image Analysis</h4>
                <p className="text-muted small mb-4">
                  Enterprise data entry, high-precision computer vision image annotation, bounding box tagging, and healthcare document digitization.
                </p>
                <ul className="list-unstyled small mb-0">
                  <li className="mb-2"><FaCheck className="me-2 text-success" /> 2D/3D Bounding Boxes & Image Segmentation</li>
                  <li><FaCheck className="me-2 text-success" /> 99.5%+ Data Accuracy & Medical OCR Verification</li>
                </ul>
              </div>
              <Link to="/non-it-work" className="bento-link mt-4">
                Explore Data Operations <FaArrowRight className="ms-1" size={12} />
              </Link>
            </div>
          </Col>
        </Row>

        {/* Feature Highlights Grid */}
        <div className="corporate-feature-strip mt-5 p-4 rounded-4">
          <Row className="g-4 align-items-center">
            <Col lg={3} sm={6}>
              <div className="d-flex align-items-center gap-3">
                <div className="strip-icon-box">
                  <FaRocket />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">14-Day MVP Launch</h6>
                  <span className="small text-muted">Rapid agile delivery with staging previews</span>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="d-flex align-items-center gap-3">
                <div className="strip-icon-box">
                  <FaShieldAlt />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">SOC 2 & ISO Ready</h6>
                  <span className="small text-muted">Zero-trust architecture & compliance</span>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="d-flex align-items-center gap-3">
                <div className="strip-icon-box">
                  <FaSyncAlt />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Automated CI/CD</h6>
                  <span className="small text-muted">Zero-downtime rolling cloud deploys</span>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="d-flex align-items-center gap-3">
                <div className="strip-icon-box">
                  <FaClock />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">24/7 SLA Support</h6>
                  <span className="small text-muted">Uptime monitoring & proactive fixes</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Metrics Strip */}
        <div className="corporate-metrics-strip mt-5 p-4 rounded-4">
          <Row className="text-center g-4">
            <Col xs={6} md={3}>
              <div>
                <span className="metric-number">99.4%</span>
                <span className="metric-title d-block">Client Satisfaction</span>
                <span className="metric-subtitle small text-muted">Consistent 5-Star SLA</span>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div>
                <span className="metric-number">50+</span>
                <span className="metric-title d-block">Enterprise Deployments</span>
                <span className="metric-subtitle small text-muted">Zero-Downtime Delivery</span>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div>
                <span className="metric-number">500+</span>
                <span className="metric-title d-block">Engineers Mentored</span>
                <span className="metric-subtitle small text-muted">Top IT Placements</span>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div>
                <span className="metric-number">15+</span>
                <span className="metric-title d-block">Tech Stacks Mastered</span>
                <span className="metric-subtitle small text-muted">Cloud, AI & Full-Stack</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Embedded CSS for Clean Corporate Theme */}
      <style>{`
        .bento-solutions-section {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 70px 0;
        }

        .corporate-bento-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
        }

        .corporate-bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border-color: #86efac;
        }

        .corporate-bento-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: #f0fdf4;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          border: 1px solid #bbf7d0;
        }

        .corporate-bento-badge {
          font-size: 0.75rem;
          font-weight: 700;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          padding: 5px 12px;
          border-radius: 9999px;
          letter-spacing: 0.04em;
        }

        .feature-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.93rem;
          color: #334155;
          font-weight: 500;
        }

        .check-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #dcfce7;
          color: #16a34a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .bento-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: #16a34a;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s ease;
        }

        .bento-link:hover {
          color: #15803d;
        }

        .corporate-feature-strip {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .strip-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #f0fdf4;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
          border: 1px solid #bbf7d0;
        }

        .corporate-metrics-strip {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .metric-number {
          display: block;
          font-size: 2.4rem;
          font-weight: 800;
          color: #16a34a;
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .metric-title {
          font-size: 0.96rem;
          font-weight: 700;
          color: #0f172a;
        }
      `}</style>
    </section>
  );
};

export default Offering;
