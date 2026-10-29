import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const TrackCard = ({ title, badge, duration, description, features, highlight }) => {
  return (
    <div
      className="p-4 d-flex flex-column justify-content-between"
      style={{
        background: highlight ? "#16a34a" : "#ffffff",
        color: highlight ? "#ffffff" : "#0f172a",
        borderRadius: "16px",
        width: "285px",
        border: highlight ? "2px solid #15803d" : "1px solid #e2e8f0",
        transform: highlight ? "scale(1.02)" : "scale(1)",
        boxShadow: highlight 
          ? "0 10px 25px rgba(22, 163, 74, 0.25)" 
          : "0 4px 14px rgba(0, 0, 0, 0.04)",
        transition: "all 0.25s ease",
      }}
    >
      <div>
        {/* Track Badge */}
        <span 
          className="badge px-3 py-1 rounded-pill mb-3 fw-semibold"
          style={{
            background: highlight ? "rgba(255, 255, 255, 0.2)" : "#f0fdf4",
            color: highlight ? "#ffffff" : "#16a34a",
            border: highlight ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid #bbf7d0",
            fontSize: "0.75rem"
          }}
        >
          {badge}
        </span>

        {/* Title */}
        <h5
          className="mb-2 fw-bold"
          style={{ color: highlight ? "#ffffff" : "#0f172a" }}
        >
          {title}
        </h5>

        {/* Duration */}
        <div 
          className="mb-3 small fw-semibold d-flex align-items-center gap-1"
          style={{ color: highlight ? "#dcfce7" : "#15803d" }}
        >
          <FaGraduationCap /> {duration}
        </div>

        {/* Description */}
        <p style={{ fontSize: "0.9rem", color: highlight ? "#f0fdf4" : "#475569", lineHeight: "1.5" }}>
          {description}
        </p>

        {/* Features */}
        <ul className="list-unstyled mt-3 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="mb-2 small d-flex align-items-start gap-2" style={{ color: highlight ? "#ffffff" : "#334155" }}>
              <span style={{ color: highlight ? "#ffffff" : "#16a34a", fontWeight: "bold" }}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/getintouch"
        className="text-decoration-none py-2 px-3 rounded-3 text-center fw-semibold d-flex align-items-center justify-content-center gap-2"
        style={{
          background: highlight ? "#ffffff" : "#f0fdf4",
          color: highlight ? "#15803d" : "#16a34a",
          border: highlight ? "none" : "1px solid #bbf7d0",
          fontSize: "0.88rem",
          transition: "all 0.2s ease"
        }}
      >
        <span>Inquire Syllabus</span>
        <FaArrowRight size={11} />
      </Link>
    </div>
  );
};

const Courses = () => {
  const courseTracks = [
    {
      title: "Fast-Track Immersion",
      badge: "Flagship Track",
      duration: "3 Months Intensive",
      description: "Hands-on full-stack software training paired with live enterprise production projects.",
      features: [
        "Live client project deployment",
        "Git team workflow & code reviews",
        "Direct placement support",
        "Industry-recognized certificate",
      ],
      highlight: true,
    },
    {
      title: "Campus Academic Track",
      badge: "College Integrated",
      duration: "1 Year Immersion",
      description: "Designed for 2nd, 3rd & final year engineering students alongside university academics.",
      features: [
        "Weekend & flexible schedules",
        "Academic project guidance",
        "Mock interviews & aptitude training",
        "Technical portfolio building",
      ],
    },
    {
      title: "Specialized Tech Track",
      badge: "Skill Development",
      duration: "2 Months Focused",
      description: "Deep-dive module on specific in-demand stacks like React, Node.js, Flutter or Python.",
      features: [
        "Project-driven curriculum",
        "Real-time database architectures",
        "RESTful API design & testing",
        "Course completion credential",
      ],
    },
    {
      title: "Office Productivity Track",
      badge: "Foundation Track",
      duration: "2 Months Core",
      description: "Comprehensive office computing, advanced spreadsheets, data management & typing skills.",
      features: [
        "Advanced Excel formulas & pivots",
        "Business documentation & formatting",
        "Data hygiene & keyboard mastery",
        "Official proficiency certificate",
      ],
    },
  ];

  return (
    <div className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            STRUCTURED LEARNING PATHS
          </span>
          <h2 className="display-6 fw-bold mt-2 text-dark">
            Industry Training <span style={{ color: "#16a34a" }}>Curriculum Tracks</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "620px", fontSize: "1.05rem" }}>
            Practical, mentor-led programs designed to bridge the gap between academic theory and enterprise engineering.
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          {courseTracks.map((plan, index) => (
            <TrackCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
