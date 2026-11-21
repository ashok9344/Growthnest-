import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  FaPlay, 
  FaArrowRight, 
  FaArrowUp, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCloud,
  FaDownload,
  FaCheckCircle,
  FaRegLightbulb,
  FaCogs,
  FaAws
} from "react-icons/fa";
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiFlutter, 
  SiDocker, 
  SiPostgresql, 
  SiFigma, 
  SiMongodb, 
  SiGit 
} from "react-icons/si";
import itCompanyWorking from "../../assets/home/it-company-working.jpg";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <div className="pinterest-page-wrapper">
      {/* ========================================================
          1. HERO SECTION (OLIVIA SMITH FIGMA PORTFOLIO STYLE)
          ======================================================== */}
      <section className="pinterest-hero-section py-4 py-lg-5">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            {/* Left Content */}
            <Col lg={6} className="order-2 order-lg-1">
              {/* Figma Corner-Node "Hello There!" Badge */}
              <div className="hello-figma-badge mb-3 mb-md-4">
                <span className="figma-node node-tl"></span>
                <span className="figma-node node-tr"></span>
                <span className="figma-node node-bl"></span>
                <span className="figma-node node-br"></span>
                <span className="hello-badge-text">Hello There!</span>
              </div>

              {/* Bold Hero Headline */}
              <h1 className="pinterest-hero-title mb-3">
                We're <span className="text-amber-highlight">GrowthNest</span>,<br />
                Product & Software Studio<br />
                Based in India.
              </h1>

              {/* Subheading */}
              <p className="pinterest-hero-subtitle mb-4">
                We're an experienced software engineering & technology partner with 5+ years in the field, collaborating with growing startups and enterprise companies.
              </p>

              {/* Dual Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link to="/it-project" className="pinterest-btn-dark">
                  <span>View Our Portfolio</span>
                  <span className="btn-circle-icon">
                    <FaPlay size={10} />
                  </span>
                </Link>

                <Link to="/getintouch" className="pinterest-btn-outline">
                  <span>Hire Our Team</span>
                </Link>
              </div>
            </Col>

            {/* Right Visual Graphic */}
            <Col lg={6} className="order-1 order-lg-2 text-center position-relative">
              <div className="hero-visual-container">
                {/* Warm Amber Sunburst Arch Backdrop */}
                <div className="amber-arch-backdrop"></div>

                {/* Team / Lab Image with Organic Mask */}
                <div className="hero-img-mask">
                  <img 
                    src={itCompanyWorking} 
                    alt="GrowthNest Software Lab" 
                    className="hero-main-photo"
                  />
                </div>

                {/* Rotating "HIRE US" Circular Stamp Badge (Top Right) */}
                <div className="hire-stamp-badge">
                  <svg className="stamp-svg" viewBox="0 0 120 120">
                    <path
                      id="circlePath"
                      d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                      fill="none"
                    />
                    <text className="stamp-text">
                      <textPath href="#circlePath" startOffset="0%">
                        • HIRE US • TOP RATED IT LAB •
                      </textPath>
                    </text>
                  </svg>
                  <div className="stamp-center-arrow">
                    <FaArrowUp style={{ transform: "rotate(45deg)" }} size={14} />
                  </div>
                </div>

                {/* Floating Skill Badge 1: Warm Amber Pill (Middle Right) */}
                <div className="floating-skill-pill pill-amber">
                  <span>UI/UX & Web</span>
                </div>

                {/* Floating Skill Badge 2: Forest Green Pill (Bottom Left) */}
                <div className="floating-skill-pill pill-forest">
                  <span className="pill-cursor-dot"></span>
                  <span>Software Studio</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================================
          2. ICONIC GOLDEN TICKER MARQUEE RIBBON
          ======================================================== */}
      <section className="marquee-ribbon-wrapper">
        <div className="marquee-ribbon-track">
          <div className="marquee-ribbon-content">
            <span>App Design</span>
            <span className="ribbon-star">✻</span>
            <span>Website Design</span>
            <span className="ribbon-star">✻</span>
            <span>Custom Software</span>
            <span className="ribbon-star">✻</span>
            <span>Dashboard</span>
            <span className="ribbon-star">✻</span>
            <span>Cloud & AI</span>
            <span className="ribbon-star">✻</span>
            <span>DevOps & Security</span>
            <span className="ribbon-star">✻</span>
            <span>Full-Stack Engineering</span>
            <span className="ribbon-star">✻</span>
            <span>Mobile Apps</span>
            <span className="ribbon-star">✻</span>
          </div>
          <div className="marquee-ribbon-content" aria-hidden="true">
            <span>App Design</span>
            <span className="ribbon-star">✻</span>
            <span>Website Design</span>
            <span className="ribbon-star">✻</span>
            <span>Custom Software</span>
            <span className="ribbon-star">✻</span>
            <span>Dashboard</span>
            <span className="ribbon-star">✻</span>
            <span>Cloud & AI</span>
            <span className="ribbon-star">✻</span>
            <span>DevOps & Security</span>
            <span className="ribbon-star">✻</span>
            <span>Full-Stack Engineering</span>
            <span className="ribbon-star">✻</span>
            <span>Mobile Apps</span>
            <span className="ribbon-star">✻</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. "SERVICES WE PROVIDE" (3-CARD GRID SECTION)
          ======================================================== */}
      <section className="services-provide-section py-5">
        <Container className="py-3">
          {/* Section Header */}
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 mb-md-5">
            <div>
              <span className="section-dash-label">- Services</span>
              <h2 className="section-main-heading mt-1">
                <span className="text-amber-highlight">Services</span> We Provide
              </h2>
            </div>
            <div className="mt-3 mt-md-0">
              <Link to="/service" className="view-all-services-btn">
                <span>View All Services</span>
                <span className="btn-circle-arrow">
                  <FaArrowRight size={11} />
                </span>
              </Link>
            </div>
          </div>

          {/* 3 Modern Clean Cards */}
          <Row className="g-4">
            {/* Service 1 */}
            <Col lg={4} md={6}>
              <div className="service-minimal-card">
                <div className="service-icon-box box-mint">
                  <FaLaptopCode size={22} className="text-forest" />
                </div>
                <h3 className="service-card-title">UI/UX & Web Design</h3>
                <p className="service-card-desc">
                  Modern, fluid responsive websites engineered for speed, conversion, and effortless user journeys with micro-interactions.
                </p>
                <Link to="/service" className="service-learn-more">
                  <span>Learn more</span>
                  <FaArrowRight size={11} className="ms-1" />
                </Link>
              </div>
            </Col>

            {/* Service 2 */}
            <Col lg={4} md={6}>
              <div className="service-minimal-card">
                <div className="service-icon-box box-amber">
                  <FaCogs size={22} className="text-amber-icon" />
                </div>
                <h3 className="service-card-title">Custom Software Engineering</h3>
                <p className="service-card-desc">
                  Full-stack digital platforms, SaaS applications, custom ERPs, and cloud microservices built for scalability and performance.
                </p>
                <Link to="/service" className="service-learn-more">
                  <span>Learn more</span>
                  <FaArrowRight size={11} className="ms-1" />
                </Link>
              </div>
            </Col>

            {/* Service 3 */}
            <Col lg={4} md={6}>
              <div className="service-minimal-card">
                <div className="service-icon-box box-sand">
                  <FaMobileAlt size={22} className="text-forest" />
                </div>
                <h3 className="service-card-title">Mobile & Cross-Platform</h3>
                <p className="service-card-desc">
                  Native iOS & Android mobile apps engineered with Flutter and React Native for unified reach and high app store ratings.
                </p>
                <Link to="/service" className="service-learn-more">
                  <span>Learn more</span>
                  <FaArrowRight size={11} className="ms-1" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================================
          4. "WHO IS GROWTHNEST?" (FOREST GREEN DEEP SHOWCASE)
          ======================================================== */}
      <section className="who-is-section py-5">
        <Container className="py-4">
          <Row className="align-items-center g-5">
            {/* Left: Circular Showcase Graphic with Orbiting Tags */}
            <Col lg={6} className="text-center position-relative">
              <div className="who-circle-container">
                <div className="who-circle-amber-bg">
                  <img 
                    src={itCompanyWorking} 
                    alt="GrowthNest Team" 
                    className="who-circle-img"
                  />
                </div>

                {/* Orbiting Tech Pills */}
                <div className="orbit-tag tag-pos-1">UX/UI Design</div>
                <div className="orbit-tag tag-pos-2">Mobile App Dev</div>
                <div className="orbit-tag tag-pos-3">Web Platforms</div>
                <div className="orbit-tag tag-pos-4">Cloud & DevOps</div>
                <div className="orbit-tag tag-pos-5">AI Engines</div>
                <div className="orbit-tag tag-pos-6">Custom Dashboards</div>
              </div>
            </Col>

            {/* Right: Bio & Metrics */}
            <Col lg={6}>
              <span className="who-dash-label">- About Us</span>
              <h2 className="who-main-title mb-3">
                Who is <span className="text-amber-glow">GrowthNest</span>?
              </h2>

              <p className="who-desc-text mb-4">
                GrowthNest Tech Solution is a premier software engineering & IT consulting firm based in Tirunelveli, Tamil Nadu. We deliver robust full-stack platforms, high-concurrency mobile apps, and enterprise digital solutions designed to help modern businesses outpace their competition.
              </p>

              {/* 3 Metric Counters */}
              <div className="who-stats-row mb-4">
                <div className="stat-block">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Project Completed</span>
                </div>
                <div className="stat-block">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Industry Covered</span>
                </div>
                <div className="stat-block">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years of Experience</span>
                </div>
              </div>

              {/* CTA + Signature */}
              <div className="d-flex flex-wrap align-items-center gap-4">
                <Link to="/getintouch" className="who-cta-btn">
                  <span>Get In Touch</span>
                  <span className="who-btn-arrow">
                    <FaArrowRight size={11} />
                  </span>
                </Link>

                <div className="who-signature">
                  GrowthNest
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================================
          5. "EXPLORING THE TOOLS BEHIND OUR CODE" (TECH STACK)
          ======================================================== */}
      <section className="tech-tools-section py-5">
        <Container className="text-center py-2">
          <span className="section-dash-label">- Our Tech Stack</span>
          <h2 className="section-main-heading mt-1 mb-4">
            <span className="text-amber-highlight">Exploring the Tools</span> Behind Our Code
          </h2>

          <div className="tools-icons-row mt-4">
            <div className="tool-circle-card" title="React">
              <SiReact size={32} color="#61DAFB" />
              <span className="tool-name">React</span>
            </div>
            <div className="tool-circle-card" title="Node.js">
              <SiNodedotjs size={32} color="#339933" />
              <span className="tool-name">Node.js</span>
            </div>
            <div className="tool-circle-card" title="Python">
              <SiPython size={32} color="#3776AB" />
              <span className="tool-name">Python</span>
            </div>
            <div className="tool-circle-card" title="Flutter">
              <SiFlutter size={32} color="#02569B" />
              <span className="tool-name">Flutter</span>
            </div>
            <div className="tool-circle-card" title="Docker">
              <SiDocker size={32} color="#2496ED" />
              <span className="tool-name">Docker</span>
            </div>
            <div className="tool-circle-card" title="AWS Cloud">
              <FaAws size={32} color="#FF9900" />
              <span className="tool-name">AWS</span>
            </div>
            <div className="tool-circle-card" title="PostgreSQL">
              <SiPostgresql size={32} color="#4169E1" />
              <span className="tool-name">Postgres</span>
            </div>
            <div className="tool-circle-card" title="Figma">
              <SiFigma size={32} color="#F24E1E" />
              <span className="tool-name">Figma</span>
            </div>
            <div className="tool-circle-card" title="MongoDB">
              <SiMongodb size={32} color="#47A248" />
              <span className="tool-name">MongoDB</span>
            </div>
            <div className="tool-circle-card" title="Git">
              <SiGit size={32} color="#F05032" />
              <span className="tool-name">Git</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FrontPage;
