import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaCheckCircle,
  FaWhatsapp,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaClock,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp
} from "react-icons/fa";
import growthStairsVideo from "../../assets/video/growth-stairs.mp4";
import heroVideo from "../../assets/video/hero-video.mp4";
import itCompanyWorking from "../../assets/home/it-company-working.jpg";
import "./FrontPage.css";

const FrontPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeMediaTab, setActiveMediaTab] = useState("office"); // "office" (Indian IT lab) or "video" (live coding)

  const mainVideoRef = useRef(null);
  const bgVideoRef = useRef(null);

  // Auto-play videos reliably across all browsers (muted by default)
  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = true;
      bgVideoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (activeMediaTab === "video" && mainVideoRef.current) {
      mainVideoRef.current.muted = isMuted;
      mainVideoRef.current.play().catch(() => {});
    }
  }, [activeMediaTab, isMuted]);

  const togglePlay = () => {
    if (!mainVideoRef.current) return;
    if (isPlaying) {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      mainVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!mainVideoRef.current) return;
    mainVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="hero-section py-5 position-relative">
      {/* 1. AMBIENT BACKGROUND GROWTH VIDEO (COMPACT & SCALED) */}
      <div className="hero-bg-video-wrapper">
        <video
          ref={bgVideoRef}
          src={growthStairsVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video-elem"
        />
        <div className="hero-bg-video-overlay"></div>
      </div>

      <Container className="hero-container py-2 py-lg-4">
        <Row className="align-items-center g-5">
          {/* LEFT CONTENT */}
          <Col lg={7} className="hero-content-col">
            <div className="mb-3">
              <span className="tech-pill">
                <span className="tech-pill-dot"></span>
                CUSTOM SOFTWARE & IT DEVELOPMENT PARTNER
              </span>
            </div>

            <h1 className="hero-heading mb-3">
              We Build Scalable <span className="text-success-corporate">Custom Software, Web & Mobile Apps</span> For Your Business
            </h1>

            <p className="hero-subheading mb-4">
              Turn your business ideas into robust production software. GrowthNest delivers end-to-end full-stack web platforms, mobile applications, AI computer vision engines, and scalable cloud architectures with guaranteed on-time delivery.
            </p>

            {/* CTAs */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/getintouch" className="action-btn">
                <FaFileInvoiceDollar size={15} className="me-1" />
                <span>Get a Free Project Quote</span>
                <FaArrowRight size={13} className="ms-1" />
              </Link>

              <Link to="/it-project" className="action-btn-outline">
                <span>View Our Client Work</span>
              </Link>
            </div>

            {/* Direct WhatsApp Quick Advisory */}
            <div className="d-inline-flex align-items-center gap-2 p-2 px-3 rounded-pill mb-4" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
              <FaWhatsapp className="text-success fs-5" />
              <span className="small text-secondary">
                Have an urgent project requirement? <a href="https://wa.me/916369347439?text=Hello%20GrowthNest,%20I%20have%20a%20project%20requirement%20and%20would%20like%20a%20quote." target="_blank" rel="noopener noreferrer" className="fw-bold text-success text-decoration-none">Chat With Our Technical Lead &rarr;</a>
              </span>
            </div>

            {/* Trust Metrics Bar for Clients */}
            <div className="hero-trust-bar pt-3 d-flex flex-wrap gap-3 gap-md-4 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <FaShieldAlt className="text-success" size={15} />
                <span className="small fw-semibold text-secondary">100% Code & IP Ownership (NDA Protected)</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaClock className="text-success" size={15} />
                <span className="small fw-semibold text-secondary">Agile Sprints & On-Time Delivery</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaCheckCircle className="text-success" size={15} />
                <span className="small fw-semibold text-secondary">Post-Deployment SLA & 24/7 Monitoring</span>
              </div>
            </div>
          </Col>

          {/* RIGHT VISUAL - INDIAN TECH LAB & CODE VIDEO */}
          <Col lg={5} className="text-center">
            {/* Visual Media Tabs */}
            <div className="hero-media-tabs d-inline-flex align-items-center gap-1 mb-2 p-1 rounded-pill bg-white border shadow-sm">
              <button
                type="button"
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold transition-all ${activeMediaTab === "office" ? "btn-success text-white shadow-sm" : "text-secondary border-0 bg-transparent"}`}
                onClick={() => setActiveMediaTab("office")}
                style={{ fontSize: "0.82rem" }}
              >
                🇮🇳 Indian Tech Lab
              </button>
              <button
                type="button"
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold transition-all ${activeMediaTab === "video" ? "btn-success text-white shadow-sm" : "text-secondary border-0 bg-transparent"}`}
                onClick={() => {
                  setActiveMediaTab("video");
                  if (mainVideoRef.current) mainVideoRef.current.play().catch(() => {});
                }}
                style={{ fontSize: "0.82rem" }}
              >
                💻 Live Code Demo
              </button>
            </div>

            <div className="hero-image-card">
              {activeMediaTab === "office" ? (
                <div className="position-relative w-100">
                  <img
                    src={itCompanyWorking}
                    alt="GrowthNest Indian Software Development Lab"
                    className="hero-main-video"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Play Video Trigger Overlay Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMediaTab("video");
                      setTimeout(() => {
                        if (mainVideoRef.current) mainVideoRef.current.play().catch(() => {});
                      }, 100);
                    }}
                    className="hero-media-play-overlay"
                    title="Watch Coding Video"
                    aria-label="Watch Coding Video"
                  >
                    <FaPlay size={16} className="text-white ms-1" />
                  </button>
                </div>
              ) : (
                <video
                  ref={mainVideoRef}
                  src={heroVideo}
                  poster={itCompanyWorking}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="hero-main-video"
                />
              )}

              {/* Floating India Location Badge (No 'Next-Gen Tech') */}
              <div className="india-badge-floating">
                <span className="india-flag-icon">🇮🇳</span>
                <div>
                  <div className="india-badge-metric">Indian Software Lab</div>
                  <div className="india-badge-label">Tamil Nadu, India</div>
                </div>
              </div>

              {/* Bottom Video Badge */}
              <div className="hero-image-badge">
                <span className="badge-title">GrowthNest Tech Solution</span>
                <span className="badge-subtitle">Custom Software Engineering &bull; Tirunelveli</span>
              </div>

              {/* Video Play/Pause & Sound Controls (Active in Video Mode) */}
              {activeMediaTab === "video" && (
                <div className="video-quick-controls">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="btn-video-control"
                    title={isPlaying ? "Pause video" : "Play video"}
                    aria-label="Play or Pause Video"
                  >
                    {isPlaying ? <FaPause size={11} /> : <FaPlay size={11} />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="btn-video-control"
                    title={isMuted ? "Unmute audio" : "Mute audio"}
                    aria-label="Mute or Unmute Video"
                  >
                    {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FrontPage;
