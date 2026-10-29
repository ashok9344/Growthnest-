import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaClock,
  FaRupeeSign,
  FaArrowRight,
  FaRegHeart,
} from "react-icons/fa";
import {
  MdWork,
  MdSchool,
  MdVerified,
  MdLayers,
  MdCode,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const CareerComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredJob, setHoveredJob] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const jobCategories = {
    flutter: {
      name: "Flutter Developer",
      icon: <MdLayers size={24} />,
      color: "#16a34a",
    },
    backend: {
      name: "Backend Developer",
      icon: <MdCode size={24} />,
      color: "#0284c7",
    },
    frontend: {
      name: "Frontend Developer",
      icon: <FaBriefcase size={24} />,
      color: "#15803d",
    },
  };

  const jobListings = [
    {
      id: 1,
      title: "Junior Flutter Developer",
      category: "flutter",
      type: "Full Time",
      experience: "0-1 years",
      salary: "Competitive Industry Standard",
      deadline: "30 days left",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
      description:
        "Looking for a motivated Flutter developer to build cross-platform mobile applications. Freshers with strong project portfolio welcome.",
      openings: 2,
      level: "Entry Level",
    },
    {
      id: 2,
      title: "Backend Developer (Node.js)",
      category: "backend",
      type: "Full Time",
      experience: "1-2 years",
      salary: "Best in Industry + Perks",
      deadline: "25 days left",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      description:
        "Join our backend team to develop robust APIs and microservices. Experience with database design and cloud deployment preferred.",
      openings: 1,
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Frontend Developer (React)",
      category: "frontend",
      type: "Full Time",
      experience: "0-2 years",
      salary: "Competitive Package",
      deadline: "20 days left",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Tailwind"],
      description:
        "Seeking a creative frontend developer to craft responsive, performant user interfaces for our web applications.",
      openings: 2,
      level: "Entry Level",
    },
    {
      id: 4,
      title: "Senior Flutter Architect",
      category: "flutter",
      type: "Full Time",
      experience: "3+ years",
      salary: "Attractive Package + Incentives",
      deadline: "15 days left",
      skills: ["Flutter", "Bloc", "Clean Architecture", "CI/CD"],
      description:
        "Lead our mobile development initiatives, architect scalable solutions, and mentor junior developers in best practices.",
      openings: 1,
      level: "Senior",
    },
  ];

  const getFilteredJobs = () => {
    if (selectedCategory === "all") {
      return jobListings;
    }
    return jobListings.filter((job) => job.category === selectedCategory);
  };

  const getLevelBadgeStyle = (level) => {
    switch (level) {
      case "Entry Level":
        return {
          bg: "#f0fdf4",
          color: "#16a34a",
          border: "#bbf7d0",
          text: "Entry Level",
        };
      case "Intermediate":
        return {
          bg: "#eff6ff",
          color: "#2563eb",
          border: "#bfdbfe",
          text: "Intermediate",
        };
      case "Senior":
        return {
          bg: "#faf5ff",
          color: "#9333ea",
          border: "#e9d5ff",
          text: "Senior Level",
        };
      default:
        return {
          bg: "#f1f5f9",
          color: "#475569",
          border: "#cbd5e1",
          text: level,
        };
    }
  };

  const filteredJobs = getFilteredJobs();

  return (
    <section
      ref={sectionRef}
      className="position-relative overflow-hidden career-portal-section py-5"
      style={{
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <div className="container position-relative py-3" style={{ zIndex: 2 }}>
        {/* Header Section */}
        <div
          className="text-center mb-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease-out",
          }}
        >
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            WE'RE HIRING
          </span>

          <h1 className="display-5 fw-bold mb-3" style={{ color: "#0f172a" }}>
            Career <span className="text-success-corporate">Opportunities</span>
          </h1>

          <p className="fs-5 mx-auto" style={{ maxWidth: "650px", color: "#475569" }}>
            Build your career with us. Explore exciting opportunities in
            Flutter, Backend, and Frontend engineering.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="row g-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const category = jobCategories[job.category];
              const levelBadge = getLevelBadgeStyle(job.level);

              return (
                <div key={job.id} className="col-md-6 col-lg-4">
                  <div
                    className="corporate-job-card h-100 p-4"
                    onMouseEnter={() => setHoveredJob(job.id)}
                    onMouseLeave={() => setHoveredJob(null)}
                  >
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "48px",
                          height: "48px",
                          background: "#f0fdf4",
                          border: "1px solid #bbf7d0",
                          color: "#16a34a",
                        }}
                      >
                        {category.icon}
                      </div>
                      <span
                        className="px-3 py-1 rounded-pill"
                        style={{
                          background: levelBadge.bg,
                          color: levelBadge.color,
                          border: `1px solid ${levelBadge.border}`,
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        {levelBadge.text}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h5
                      className="fw-bold mb-1"
                      style={{ fontSize: "19px", color: "#0f172a" }}
                    >
                      {job.title}
                    </h5>

                    {/* Department */}
                    <p
                      className="mb-3 fw-semibold"
                      style={{ color: "#16a34a", fontSize: "14px" }}
                    >
                      {category.name || "Software Engineering"}
                    </p>

                    {/* Details */}
                    <div className="mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <FaBriefcase style={{ color: "#16a34a", fontSize: "14px" }} />
                        <span style={{ fontSize: "14px", color: "#475569" }}>
                          {job.experience} experience
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <FaRupeeSign style={{ color: "#16a34a", fontSize: "14px" }} />
                        <span style={{ fontSize: "14px", color: "#475569" }}>
                          {job.salary}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <FaClock style={{ color: "#16a34a", fontSize: "14px" }} />
                        <span style={{ fontSize: "14px", color: "#475569" }}>
                          Apply by: {job.deadline}
                        </span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-1">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-pill"
                            style={{
                              background: "#f8fafc",
                              color: "#334155",
                              fontSize: "11px",
                              fontWeight: "600",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="mb-3 small"
                      style={{
                        color: "#64748b",
                        lineHeight: "1.6",
                      }}
                    >
                      {job.description}
                    </p>

                    {/* Footer */}
                    <div
                      className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-light-subtle"
                    >
                      <div className="d-flex align-items-center gap-1 text-secondary small">
                        <MdVerified style={{ color: "#16a34a" }} />
                        <span>{job.openings} openings</span>
                      </div>
                      <Link
                        to="/applyjob"
                        state={{ jobRole: job.title, category: "IT" }}
                        className="action-btn text-decoration-none py-1 px-3 small"
                      >
                        <span>Apply</span>
                        <FaArrowRight size={11} className="ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-5">
              <h3>No jobs found matching your criteria</h3>
              <p className="text-muted">Try adjusting your filters</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-3">
          <div
            className="p-5 rounded-4"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h4 className="fw-bold mb-2" style={{ color: "#0f172a" }}>Don't see the perfect role?</h4>
            <p className="mb-4 text-muted">
              We're always on the lookout for visionary talent. Send us your resume and let's explore opportunities together.
            </p>
            <Link to="/applyjob" className="action-btn text-decoration-none">
              <span>Send Your Resume</span>
              <FaArrowRight size={13} className="ms-1" />
            </Link>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mt-5 pt-4">
          <h3 className="text-center fw-bold mb-4" style={{ color: "#0f172a" }}>
            Why Join <span className="text-success-corporate">GrowthNest?</span>
          </h3>
          <div className="row g-4">
            {[
              {
                icon: <MdWork size={28} />,
                title: "Growth Opportunities",
                desc: "Fast-paced growth, production responsibilities, and clear career ladders.",
              },
              {
                icon: <FaRegHeart size={28} />,
                title: "Great Culture",
                desc: "Collaborative, transparent, and highly empowering work environment.",
              },
              {
                icon: <GiSkills size={28} />,
                title: "Continuous Learning",
                desc: "Regular engineering masterclasses, tech sessions, and architecture workshops.",
              },
              {
                icon: <MdSchool size={28} />,
                title: "Executive Mentorship",
                desc: "Learn directly from senior software architects and industry leaders.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="col-md-3 col-sm-6">
                <div
                  className="text-center p-4 rounded-4 h-100"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "#86efac";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.03)";
                  }}
                >
                  <div style={{ color: "#16a34a" }} className="mb-3">
                    {benefit.icon}
                  </div>
                  <h6 className="fw-bold mb-2" style={{ color: "#0f172a" }}>{benefit.title}</h6>
                  <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .corporate-job-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .corporate-job-card:hover {
          transform: translateY(-4px);
          border-color: #86efac;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
};

export default CareerComponent;
