import React from "react";
import { Link } from "react-router-dom";
import "./CourseHero.css";

const CourseHero = () => {
  const scrollToCourses = () => {
    const section = document.getElementById("popular-courses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: "💻",
      title: "Practical Projects",
      desc: "Build real-world skills",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Guidance",
      desc: "Learn from industry experts",
    },
    {
      icon: "⏳",
      title: "Lifetime Access",
      desc: "Study at your own pace",
    },
    {
      icon: "🎓",
      title: "Certificate Provided",
      desc: "Boost your career",
    },
  ];

  return (
    <section className="gnt-course-hero">
      <div className="container">
        <div className="gnt-course-hero-wrapper">
          {/* LEFT CONTENT */}
          <div className="gnt-course-hero-content">
            <div className="gnt-course-label">
              <span></span>
              LEARN • BUILD • GROW
            </div>

            <h1>
              Empower your career <span>Growth</span> with us
            </h1>

            <p>
              Are you finding difficulty in where &amp; when to start? Learn
              in-demand technical skills with our structured project-based
              courses taught by industry mentors.
            </p>

            <div className="gnt-course-hero-buttons">
              <button
                type="button"
                onClick={scrollToCourses}
                className="gnt-explore-course-btn"
              >
                Explore Courses →
              </button>

              <Link to="/student-login" className="gnt-student-login-btn">
                Student Login
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="gnt-course-hero-design">
            <div className="gnt-hero-main-circle">
              {/* Floating code cards */}
              <div className="gnt-code-card gnt-code-card-left">&lt;/&gt;</div>
              <div className="gnt-code-card gnt-code-card-right">&#123; &#125;</div>
              <div className="gnt-code-card gnt-code-card-bottom">⚛</div>

              <div className="gnt-student-illustration">
                <span className="gnt-student-head" role="img" aria-label="Student learning on laptop">
                  👨‍💻
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 BENEFITS BAR */}
        <div className="gnt-course-benefits">
          {benefits.map((b, idx) => (
            <div className="gnt-course-benefit" key={idx}>
              <div className="gnt-benefit-icon">{b.icon}</div>
              <div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
