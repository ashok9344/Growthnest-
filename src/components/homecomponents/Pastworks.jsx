import React from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap, FaCheckCircle, FaAward } from "react-icons/fa";
import img1 from "../../assets/pastworks/psn.jpeg";
import img2 from "../../assets/pastworks/tvc.jpeg";
import img3 from "../../assets/pastworks/govm.jpeg";

const works = [
  {
    title: "Institutional MoU & Advanced Tech Workshop",
    institution: "PSN College of Engineering & Technology",
    desc: "Conducted an intensive 3-day technical immersion module on Full-Stack Production Architectures, Git CI/CD workflows, and Cloud deployment fundamentals for 200+ final-year engineering students.",
    image: img1,
    metrics: "200+ Engineering Students • 3 Live Projects Deployed",
    tags: ["Full Stack Architecture", "DevOps Immersion", "University MoU"],
  },
  {
    title: "Campus Placement Acceleration Summit",
    institution: "TVC Technical Institute",
    desc: "Empowering undergraduate talent to bridge the gap between academic syllabi and enterprise expectations through live mock technical interviews, algorithmic problem solving, and portfolio building.",
    image: img2,
    metrics: "85% Placement Success • Direct Hiring Pipeline",
    tags: ["Interview Mastery", "Resume Architecture", "Live Code Assessment"],
  },
  {
    title: "Industrial Readiness & Practical Software Workshop",
    institution: "Government Polytechnic & Tech Consortium",
    desc: "Hands-on software engineering training guiding engineering students through real-time database design, secure RESTful APIs, and responsive enterprise dashboard development.",
    image: img3,
    metrics: "150+ Certified Trainees • High Commendation Award",
    tags: ["Database Architecture", "RESTful APIs", "Certified Tech Program"],
  },
];

const Pastworks = () => {
  return (
    <section className="pastworks-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            ACADEMIC MoUs & WORKSHOPS
          </span>
          <h2 className="display-6 fw-bold mt-2 text-dark">
            Institutional Impact & <span style={{ color: "#16a34a" }}>Industry Outreach</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "680px", fontSize: "1.05rem" }}>
            GrowthNest actively collaborates with universities and polytechnic colleges to mentor next-generation tech talent directly on their campuses.
          </p>
        </div>

        {/* Industrial Engagements Cards */}
        <div className="d-flex flex-column gap-4">
          {works.map((item, index) => (
            <div 
              key={index} 
              className={`enterprise-outreach-card ${index % 2 !== 0 ? "flex-lg-row-reverse" : ""}`}
            >
              {/* Media Column */}
              <div className="outreach-media">
                <img src={item.image} alt={item.title} className="outreach-img" />
                <div className="outreach-institution-tag">
                  <FaGraduationCap className="me-2 text-warning" />
                  <span>{item.institution}</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="outreach-content p-4 p-md-5">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-1 rounded-pill small fw-semibold">
                    <FaAward className="me-1" /> VERIFIED ENGAGEMENT
                  </span>
                </div>

                <h3 className="fw-bold mb-3 text-dark outreach-title">
                  {item.title}
                </h3>
                <p className="text-secondary mb-4 outreach-desc">
                  {item.desc}
                </p>

                <div className="outreach-metric-box mb-4">
                  <FaCheckCircle className="text-success me-2" />
                  <span className="fw-semibold text-dark">{item.metrics}</span>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="outreach-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        .pastworks-section {
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 80px 0;
        }

        .enterprise-outreach-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
        }

        @media (min-width: 992px) {
          .enterprise-outreach-card {
            flex-direction: row;
            align-items: stretch;
          }
        }

        .enterprise-outreach-card:hover {
          transform: translateY(-3px);
          border-color: #86efac;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .outreach-media {
          position: relative;
          flex: 1;
          min-height: 280px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .outreach-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .enterprise-outreach-card:hover .outreach-img {
          transform: scale(1.03);
        }

        .outreach-institution-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 8px;
          display: flex;
          align-items: center;
        }

        .outreach-content {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .outreach-title {
          font-size: 1.45rem;
          color: #0f172a;
          font-weight: 700;
          line-height: 1.35;
        }

        .outreach-desc {
          font-size: 0.98rem;
          color: #475569 !important;
          line-height: 1.65;
        }

        .outreach-metric-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #15803d;
          padding: 8px 16px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          font-size: 0.9rem;
        }

        .outreach-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          background: #f8fafc;
          padding: 5px 12px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }
      `}</style>
    </section>
  );
};

export default Pastworks;
