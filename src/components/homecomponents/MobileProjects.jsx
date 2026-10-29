import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaApple, 
  FaGooglePlay, 
  FaMapMarkerAlt, 
  FaMicrophone, 
  FaGraduationCap, 
  FaBus, 
  FaCheckCircle
} from "react-icons/fa";
import app1 from "../../assets/apps/app1.jpeg";
import app2 from "../../assets/apps/app2.jpeg";
import app3 from "../../assets/apps/app3.jpeg";
import app4 from "../../assets/apps/app4.jpeg";

const apps = [
  { 
    img: app1, 
    title: "TransitTrack Live GPS", 
    category: "IoT & Smart Transit",
    desc: "Real-time commuter transit tracking with live bus ETA, geofenced alerts, and route optimization.",
    stack: "React Native • WebSockets",
    icon: FaBus,
    features: ["Real-time GPS", "Smart ETA Alerts"]
  },
  { 
    img: app2, 
    title: "Hyperlocal Logistics Hub", 
    category: "Logistics & Delivery",
    desc: "Live order dispatch and multi-stop tracking engine with interactive map routing across South India.",
    stack: "Flutter • Google Maps API",
    icon: FaMapMarkerAlt,
    features: ["Turn-by-turn Navigation", "Live Order Status"]
  },
  { 
    img: app3, 
    title: "EyesFree Voice Biometrics", 
    category: "Voice AI & Security",
    desc: "Hands-free voice authentication and accessible mobile portal for secure passwordless verification.",
    stack: "React Native • AI Voice ML",
    icon: FaMicrophone,
    features: ["Voice Password Auth", "Zero-Touch Access"]
  },
  { 
    img: app4, 
    title: "Maths World EdTech", 
    category: "Gamified Education",
    desc: "Interactive learning platform with gamified math modules, student attendance, and progress dashboards.",
    stack: "Flutter • Node.js Backend",
    icon: FaGraduationCap,
    features: ["Gamified Lessons", "Automated Attendance"]
  },
];

const MobileProjects = () => {
  return (
    <section className="mobile-apps-section py-5 position-relative">
      <Container className="position-relative py-3">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            ENTERPRISE MOBILE SOLUTIONS
          </span>
          <h2 className="display-6 fw-bold mt-2">
            Enterprise Mobile Apps Built For <span className="text-success-corporate">Scale & Performance</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "660px", fontSize: "1.05rem" }}>
            Engineered with native performance, fluid touch response, and enterprise security. Explore real production apps deployed on iOS and Android.
          </p>
        </div>

        {/* 3D Realistic Smartphone Device Grid */}
        <Row className="g-4 justify-content-center">
          {apps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Col key={idx} xs={12} sm={6} lg={3}>
                <div className="corporate-phone-card">
                  {/* REALISTIC 3D IPHONE MOCKUP FRAME */}
                  <div className="phone-device-frame">
                    <div className="phone-button button-silent"></div>
                    <div className="phone-button button-vol-up"></div>
                    <div className="phone-button button-vol-down"></div>
                    <div className="phone-button button-power"></div>

                    <div className="phone-screen-wrapper">
                      <div className="phone-dynamic-island">
                        <span className="camera-lens"></span>
                        <span className="speaker-sensor"></span>
                      </div>

                      <div className="phone-screen-glare"></div>

                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="phone-screen-media" 
                      />

                      <div className="phone-home-indicator"></div>
                    </div>
                  </div>

                  {/* APPLICATION DETAILS & METRICS */}
                  <div className="p-3 w-100">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="phone-category-tag">
                        <IconComponent className="me-1" size={11} />
                        {item.category}
                      </span>
                      <div className="app-store-icons">
                        <FaApple title="iOS Ready" className="store-icon me-2" />
                        <FaGooglePlay title="Android Ready" className="store-icon" />
                      </div>
                    </div>

                    <h5 className="phone-app-title fw-bold mb-2">
                      {item.title}
                    </h5>

                    <p className="phone-app-desc text-muted mb-3">
                      {item.desc}
                    </p>

                    <div className="phone-app-features mb-3">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="feature-chip">
                          <FaCheckCircle className="text-success me-1" size={13} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-top border-light-subtle d-flex align-items-center justify-content-between">
                      <span className="small text-secondary fw-semibold">{item.stack}</span>
                      <span className="live-status-pill">
                        <span className="live-dot-green"></span> Live
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Mobile App Project CTA */}
        <div className="mt-5 p-4 rounded-4 text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-3" style={{ background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
          <div>
            <h5 className="fw-bold text-dark mb-1">Planning an iOS or Android Mobile Application?</h5>
            <p className="text-secondary small mb-0">From offline-first database sync to payment gateways and push notifications, we build fluid 60fps mobile products.</p>
          </div>
          <a href="#contact" className="action-btn text-decoration-none text-nowrap">
            <span>Estimate Mobile Project</span>
          </a>
        </div>
      </Container>

      {/* Embedded CSS for Clean Corporate Mobile Section */}
      <style>{`
        .mobile-apps-section {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 70px 0;
        }

        .corporate-phone-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 20px 14px 14px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .corporate-phone-card:hover {
          transform: translateY(-4px);
          border-color: #86efac;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .phone-device-frame {
          position: relative;
          width: 100%;
          max-width: 240px;
          margin: 0 auto 16px;
          background: #0f172a;
          border-radius: 34px;
          padding: 8px;
          border: 3px solid #cbd5e1;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease;
        }

        .corporate-phone-card:hover .phone-device-frame {
          transform: scale(1.02);
        }

        .phone-button {
          position: absolute;
          background: #64748b;
          border-radius: 2px;
        }

        .button-silent {
          width: 3px;
          height: 16px;
          left: -5px;
          top: 55px;
        }

        .button-vol-up {
          width: 3px;
          height: 28px;
          left: -5px;
          top: 80px;
        }

        .button-vol-down {
          width: 3px;
          height: 28px;
          left: -5px;
          top: 115px;
        }

        .button-power {
          width: 3px;
          height: 38px;
          right: -5px;
          top: 90px;
        }

        .phone-screen-wrapper {
          position: relative;
          width: 100%;
          border-radius: 26px;
          overflow: hidden;
          background: #000000;
          aspect-ratio: 9 / 18.5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phone-dynamic-island {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 18px;
          background: #000000;
          border-radius: 18px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 10px;
        }

        .camera-lens {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #1e293b;
        }

        .phone-screen-glare {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, transparent 40%);
          z-index: 5;
          pointer-events: none;
        }

        .phone-screen-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .phone-home-indicator {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 3.5px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 100px;
          z-index: 10;
        }

        .phone-category-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          display: inline-flex;
          align-items: center;
        }

        .app-store-icons {
          display: flex;
          align-items: center;
        }

        .store-icon {
          color: #94a3b8;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .corporate-phone-card:hover .store-icon {
          color: #16a34a;
        }

        .phone-app-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }

        .phone-app-desc {
          font-size: 0.9rem;
          line-height: 1.55;
          min-height: 44px;
          color: #475569 !important;
        }

        .phone-app-features {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .feature-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 500;
          color: #334155;
        }

        .live-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #15803d;
          background: #dcfce7;
          padding: 3px 8px;
          border-radius: 100px;
          border: 1px solid #bbf7d0;
        }

        .live-dot-green {
          width: 6px;
          height: 6px;
          background: #16a34a;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default MobileProjects;
