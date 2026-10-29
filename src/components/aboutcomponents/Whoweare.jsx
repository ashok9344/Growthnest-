import React from "react";
import GlobalBtn from "../global/GlobalBtn";
import aboutImage from "../../assets/about/aboutImage.png";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";
import "./whoweare.css";

const Whoweare = () => {
  return (
    <section className="container my-5 py-4">
      <div className="row align-items-center g-5">
        {/* LEFT - TEXT */}
        <div className="col-md-6 fade-left">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            ABOUT GROWTHNEST TECH SOLUTION
          </span>
          <h1 className="fw-bold mb-3 display-5 text-dark">
            Who We <span className="text-success-corporate">Are</span>
          </h1>

          <p className="mb-4 text-secondary" style={{ fontSize: "1.08rem", lineHeight: "1.7" }}>
            GrowthNest Tech Solution is an agile software engineering and technology consulting company based in Tirunelveli, Tamil Nadu. We partner with ambitious startups, growing SMEs, and enterprise organizations to design, architect, and deploy custom web platforms, mobile applications, computer vision systems, and high-volume data operations.
          </p>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <div className="d-flex align-items-center gap-2">
              <FaRocket className="text-success" />
              <span className="small fw-semibold text-dark">25+ Live Client Deployments</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaShieldAlt className="text-success" />
              <span className="small fw-semibold text-dark">100% NDA & Code Ownership</span>
            </div>
          </div>

          <Link to="/getintouch" className="action-btn text-decoration-none">
            <span>Discuss Your Project With Us</span>
          </Link>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="col-md-6 text-center fade-right">
          <img
            src={aboutImage}
            alt="GrowthNest IT Software Development Team"
            className="img-fluid about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
