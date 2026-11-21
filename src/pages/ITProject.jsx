import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCloud, 
  FaCogs, 
  FaBrain, 
  FaDatabase, 
  FaShoppingCart, 
  FaCreditCard, 
  FaHospital, 
  FaGraduationCap, 
  FaTruck, 
  FaUsers, 
  FaChartLine, 
  FaBriefcase, 
  FaArrowRight, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaRocket, 
  FaWhatsapp,
  FaServer,
  FaLock
} from "react-icons/fa";
import "./ITProject.css";

const ITProject = () => {
  // 1. WHAT WE DO IN IT (CORE SERVICE DOMAINS)
  const whatWeDo = [
    {
      title: "Custom Web & Full-Stack Development",
      desc: "We engineer blazing-fast, secure, and scalable web applications, responsive customer portals, SaaS platforms, and enterprise administration dashboards using modern tech stacks.",
      icon: <FaLaptopCode />,
      boxClass: "box-green",
      tags: ["React 19", "Node.js", "Next.js", "Python", "TypeScript"]
    },
    {
      title: "Mobile App Engineering (iOS & Android)",
      desc: "Cross-platform and native mobile applications crafted with Flutter and React Native. Featuring offline storage, push notifications, biometric auth, and real-time syncing.",
      icon: <FaMobileAlt />,
      boxClass: "box-amber",
      tags: ["Flutter", "React Native", "iOS Swift", "Android", "Firebase"]
    },
    {
      title: "Enterprise ERP & Business Automation",
      desc: "Tailor-made ERP, CRM, and workflow automation systems that unify inventory management, HRMS, automated billing, supply chain tracking, and role-based staff permissions.",
      icon: <FaCogs />,
      boxClass: "box-blue",
      tags: ["Custom ERP", "HRMS Portals", "Billing Systems", "Workflows"]
    },
    {
      title: "AI, Machine Learning & Computer Vision",
      desc: "Intelligent computer vision annotation pipelines, optical character recognition (OCR), predictive business modeling, and automated customer interaction chatbots.",
      icon: <FaBrain />,
      boxClass: "box-purple",
      tags: ["Computer Vision", "Image Annotation", "NLP Chatbots", "PyTorch"]
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Enterprise cloud setups on AWS, Docker containerization, CI/CD automated deployment pipelines, microservices architecture, and 24/7 server health monitoring with 99.9% uptime.",
      icon: <FaCloud />,
      boxClass: "box-rose",
      tags: ["AWS Cloud", "Docker", "Kubernetes", "CI/CD", "Nginx"]
    },
    {
      title: "API Architecture & System Integrations",
      desc: "High-throughput RESTful and GraphQL APIs connecting payment gateways (Razorpay, Stripe), WhatsApp Business API, SMS dispatchers, accounting tools, and external services.",
      icon: <FaDatabase />,
      boxClass: "box-cyan",
      tags: ["REST APIs", "GraphQL", "Razorpay / Stripe", "WhatsApp API"]
    }
  ];

  // 2. WHAT KINDS OF IT PROJECTS WE BUILD (DOMAINS & USE CASES)
  const projectTypes = [
    {
      title: "E-Commerce & Multi-Vendor Marketplaces",
      desc: "Complete digital storefronts with fluid product catalogs, dynamic cart management, multi-gateway checkout, automated invoices, inventory sync, and vendor commission dashboards.",
      icon: <FaShoppingCart />,
      features: [
        "Product & Catalog Management",
        "Secure Payment Gateways (Razorpay/Stripe)",
        "Automated GST Invoicing & Order Tracking",
        "Vendor Admin & Customer Accounts"
      ]
    },
    {
      title: "FinTech & Digital Billing Platforms",
      desc: "Financial tracking systems, recurring subscription engines, automated invoicing, customer wallet integrations, and multi-tenant billing with complete audit trail compliance.",
      icon: <FaCreditCard />,
      features: [
        "Automated Invoicing & Tax Calculations",
        "Recurring Subscription Billing",
        "Multi-Currency Payment Processing",
        "Bank Reconciliation & Audit Logs"
      ]
    },
    {
      title: "Healthcare & Hospital Management Systems",
      desc: "Digital healthcare systems featuring doctor appointment scheduling, electronic medical records (EMR), patient history tracking, lab test reports, and pharmacy inventory.",
      icon: <FaHospital />,
      features: [
        "Doctor Appointment & Token Engine",
        "Electronic Health Records (EHR/EMR)",
        "Pharmacy Inventory & Prescription Dispatch",
        "Patient Self-Service Web Portal"
      ]
    },
    {
      title: "EdTech & Learning Management Systems (LMS)",
      desc: "Interactive educational platforms with video course streaming, student progress tracking, automated quizzes, digital certificate generation, and secure fee payment gateways.",
      icon: <FaGraduationCap />,
      features: [
        "Video Course Player & Progress Tracking",
        "Student & Instructor Portals",
        "Automated Quiz & Certificate Engine",
        "Batch Management & Fee Receipts"
      ]
    },
    {
      title: "Logistics, Delivery & Fleet Tracking",
      desc: "End-to-end logistics solutions with real-time GPS vehicle tracking, automated delivery dispatch, route optimization, driver mobile apps, and customer SMS delivery alerts.",
      icon: <FaTruck />,
      features: [
        "Live GPS Tracking & Route Optimization",
        "Driver & Delivery Agent Mobile Apps",
        "Automated Dispatch & Proof-of-Delivery",
        "Customer SMS & WhatsApp Notifications"
      ]
    },
    {
      title: "Corporate Portals & Community Platforms",
      desc: "Professional membership directories, event & conference scheduling, multi-tier staff permissions, interactive community discussion boards, and internal communication feeds.",
      icon: <FaUsers />,
      features: [
        "Member Directory & Profile Verification",
        "Event Booking & Digital Ticket Badges",
        "Role-Based Access Control (RBAC)",
        "Community Discussion Boards & Newsfeeds"
      ]
    },
    {
      title: "B2B Recruitment & Job Portals",
      desc: "Comprehensive job applicant matching systems, resume upload and parsing, employer job posting workflows, automated interview scheduling, and applicant tracking (ATS).",
      icon: <FaBriefcase />,
      features: [
        "Applicant Tracking System (ATS)",
        "Candidate Resume Parsing & Profiles",
        "Employer Dashboard & Job Postings",
        "Automated Email Interview Notifications"
      ]
    },
    {
      title: "Real-Time Analytics & Business Dashboards",
      desc: "Interactive executive KPI dashboards displaying live sales feeds, user engagement charts, server health metrics, and automated PDF/Excel business report generation.",
      icon: <FaChartLine />,
      features: [
        "Interactive Real-Time Data Charts",
        "Key Performance Indicator (KPI) Tracking",
        "Automated PDF & Excel Export Reports",
        "Role-Specific Data Visibility"
      ]
    }
  ];

  // 3. PROJECT DEVELOPMENT LIFECYCLE
  const lifecycleSteps = [
    {
      num: "01",
      title: "Discovery & Architecture",
      desc: "We analyze your project goals, define software requirements (SRS), design database schemas, and create high-level system architecture."
    },
    {
      num: "02",
      title: "UI/UX & Prototyping",
      desc: "We create interactive Figma prototypes and design systems to guarantee intuitive user journeys before writing a single line of code."
    },
    {
      num: "03",
      title: "Agile Development Sprints",
      desc: "Our engineering team builds features in bi-weekly agile sprints with milestone demos and continuous client feedback."
    },
    {
      num: "04",
      title: "Quality Assurance & Security",
      desc: "Comprehensive end-to-end testing, security penetration audits, cross-browser compatibility checks, and performance optimization."
    },
    {
      num: "05",
      title: "Cloud Deployment & Launch",
      desc: "Zero-downtime production deployment on AWS or custom cloud servers, SSL configuration, domain mapping, and final verification."
    },
    {
      num: "06",
      title: "24/7 SLA Support & Scaling",
      desc: "Post-launch maintenance, automated database backups, 99.9% uptime monitoring, and seamless scaling as your user base expands."
    }
  ];

  return (
    <div className="it-page-wrapper">
      {/* ========================================================
          1. HERO HEADER
          ======================================================== */}
      <section className="it-hero-section">
        <Container className="text-center">
          <div className="mb-3">
            <span className="it-dash-label">
              GrowthNest Tech Solution • IT Engineering
            </span>
          </div>

          <h1 className="it-main-title mb-3">
            What We Do in <span className="text-amber-glow">IT & Software Engineering</span>
          </h1>

          <p className="it-main-subtitle mx-auto mb-4">
            From modern responsive web applications and native mobile apps to custom enterprise ERPs and AI engines, GrowthNest delivers complete end-to-end software solutions designed to scale your business.
          </p>

          {/* Quick Metrics Bar */}
          <Row className="g-3 justify-content-center mt-3">
            <Col lg={3} sm={6}>
              <div className="it-stat-card">
                <div className="it-stat-number">100%</div>
                <div className="it-stat-label">Code & IP Ownership (NDA Protected)</div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="it-stat-card">
                <div className="it-stat-number">99.9%</div>
                <div className="it-stat-label">Cloud Uptime & SLA Guarantee</div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="it-stat-card">
                <div className="it-stat-number">5+ Yrs</div>
                <div className="it-stat-label">Software Engineering Experience</div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="it-stat-card">
                <div className="it-stat-number">24/7</div>
                <div className="it-stat-label">Active Monitoring & Technical Support</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================================
          2. CORE IT CAPABILITIES: "NAANGA IT LA ENNA PANNUM"
          ======================================================== */}
      <section className="py-5" style={{ background: "#fbfbfa" }}>
        <Container className="py-3">
          <div className="section-title-wrap">
            <span className="section-badge-label">Core IT Capabilities</span>
            <h2 className="section-heading-dark mt-2">
              What We Do in <span className="text-amber-glow">Information Technology</span>
            </h2>
            <p className="text-secondary mx-auto mt-2" style={{ maxWidth: "620px" }}>
              Our dedicated engineering teams provide full-lifecycle software development across key technical disciplines.
            </p>
          </div>

          <Row className="g-4">
            {whatWeDo.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="it-service-card">
                  <div className={`it-service-icon-box ${item.boxClass}`}>
                    {item.icon}
                  </div>
                  <h3 className="it-service-title">{item.title}</h3>
                  <p className="it-service-desc">{item.desc}</p>
                  <div className="it-tags-list">
                    {item.tags.map((tag, tIndex) => (
                      <span className="it-tag-pill" key={tIndex}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================================
          3. WHAT KIND OF PROJECTS WE BUILD: "ENNA PROJECT LAA PANNUM"
          ======================================================== */}
      <section className="it-projects-showcase-section py-5">
        <Container className="py-3">
          <div className="section-title-wrap">
            <span className="section-badge-label">Project Domains</span>
            <h2 className="section-heading-dark mt-2">
              What Kinds of <span className="text-amber-glow">IT Projects We Build</span>
            </h2>
            <p className="text-secondary mx-auto mt-2" style={{ maxWidth: "640px" }}>
              We architect and develop production-grade digital solutions tailored for startups, SMEs, and enterprise organizations across diverse industries.
            </p>
          </div>

          <Row className="g-4">
            {projectTypes.map((project, index) => (
              <Col lg={6} key={index}>
                <div className="project-category-card">
                  <div className="project-cat-header">
                    <div className="project-cat-icon">
                      {project.icon}
                    </div>
                    <h3 className="project-cat-title">{project.title}</h3>
                  </div>
                  <p className="project-cat-desc">{project.desc}</p>
                  <ul className="project-features-list">
                    {project.features.map((feat, fIndex) => (
                      <li key={fIndex}>
                        <FaCheckCircle className="feature-check-icon" size={13} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================================
          4. DEVELOPMENT LIFECYCLE: HOW WE DELIVER IT PROJECTS
          ======================================================== */}
      <section className="it-process-section py-5">
        <Container className="py-4">
          <div className="section-title-wrap">
            <span className="section-badge-label" style={{ background: "rgba(245, 158, 11, 0.2)", color: "#fbbf24", borderColor: "#f59e0b" }}>
              Our Development Methodology
            </span>
            <h2 className="section-heading-dark text-white mt-2">
              How We Deliver <span className="text-amber-glow">Your IT Project</span>
            </h2>
            <p className="text-light-silver mx-auto mt-2" style={{ maxWidth: "620px", color: "#cbd5e1" }}>
              A disciplined, transparent, 6-step engineering methodology ensuring guaranteed on-time delivery and clean code standards.
            </p>
          </div>

          <Row className="g-4">
            {lifecycleSteps.map((step, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="process-step-card">
                  <div className="process-step-num">{step.num}</div>
                  <h4 className="process-step-title">{step.title}</h4>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================================
          5. CTA BANNER
          ======================================================== */}
      <section className="py-5">
        <Container>
          <div className="it-cta-banner text-center">
            <div 
              className="d-inline-flex p-3 rounded-circle mb-3 align-items-center justify-content-center"
              style={{ background: "#f59e0b", color: "#111827", width: "56px", height: "56px", fontSize: "1.5rem" }}
            >
              <FaRocket />
            </div>

            <h2 className="it-cta-title mb-3">
              Have an IT Project or Custom Software Requirement?
            </h2>

            <p className="it-cta-desc mx-auto mb-4">
              Share your project vision with GrowthNest Tech Solution. Our senior technical architects will analyze your requirements and provide a free technical roadmap, architecture proposal, and cost estimate.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/getintouch" className="it-btn-amber">
                <span>Request Free Project Proposal</span>
                <FaArrowRight size={12} />
              </Link>

              <a 
                href="https://wa.me/916369347439?text=Hello%20GrowthNest,%20I%20have%20an%20IT%20project%20requirement%20and%20would%20like%20a%20discussion." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="it-btn-whatsapp"
              >
                <FaWhatsapp size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ITProject;
