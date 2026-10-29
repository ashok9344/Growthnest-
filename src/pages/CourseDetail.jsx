import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCourseById, formatYouTubeEmbedUrl } from "../data/coursesData";
import { getCourseByIdApi } from "../api/courseApi";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(() => getCourseById(id));
  const [loading, setLoading] = useState(!course);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [modalActionText, setModalActionText] = useState("");
  const [activeModule, setActiveModule] = useState(
    course?.modules?.[0]?.id || null
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true;
    getCourseByIdApi(id)
      .then((data) => {
        if (isMounted && data) {
          setCourse(data);
          if (data.modules && data.modules.length > 0) {
            setActiveModule(data.modules[0].id);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn("Using local course detail:", err.message);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  const requireStudentLogin = (actionName) => {
    setModalActionText(actionName);
    setShowLoginModal(true);
  };

  if (!course && loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status"></div>
        <p className="mt-2 text-muted">Loading course syllabus...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-5 text-center gnt-not-found-course">
        <h2>Course Not Found</h2>
        <p className="text-muted">
          The requested course could not be located in our catalog.
        </p>
        <Link to="/courses" className="btn btn-success mt-3">
          &larr; Back to All Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="gnt-course-detail-page">
      {/* HEADER BANNER */}
      <div
        className="gnt-detail-hero"
        style={{
          background:
            course.gradient ||
            "linear-gradient(135deg, #1b5e20, #2e7d32)",
        }}
      >
        <div className="container">
          <div className="gnt-detail-breadcrumbs">
            <Link to="/courses">Courses</Link> &gt; <span>{course.title}</span>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-lg-8">
              <span className="gnt-detail-badge">{course.category || "Skill Development"}</span>
              <h1 className="gnt-detail-title">{course.title}</h1>
              <p className="gnt-detail-subtitle">{course.description}</p>

              <div className="gnt-detail-meta">
                <span>&#128100; {course.level}</span>
                <span>&#9635; {course.lessonsCount || "20+ Lessons"}</span>
                <span>&#9201; {course.duration || "6 Weeks"}</span>
                <span>&#9733; {course.rating || "4.9"} (GrowthNest Certified)</span>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="gnt-detail-cta-box">
                <button
                  type="button"
                  className="gnt-start-learning-btn"
                  onClick={() => requireStudentLogin("Start Learning")}
                >
                  Start Learning &rarr;
                </button>
                <small className="d-block mt-2 text-white-50">
                  Free student access available with student login
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* LEFT: OVERVIEW & VIDEO PREVIEW */}
          <div className="col-lg-7">
            <div className="gnt-detail-section">
              <h3 className="gnt-section-title">Course Introduction Preview</h3>
              <p className="text-muted">
                Watch our official introductory session. The full course curriculum
                is available inside the student learning dashboard.
              </p>

              {/* YOUTUBE INTRO PLAYER */}
              <div className="gnt-intro-player-container shadow-sm rounded-4 overflow-hidden">
                <iframe
                  src={`${formatYouTubeEmbedUrl(course.introYoutubeUrl)}?rel=0`}
                  title={`${course.title} Introduction`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            <div className="gnt-detail-section mt-5">
              <h3 className="gnt-section-title">About This Course</h3>
              <p className="gnt-course-full-desc">{course.fullDescription}</p>

              <div className="gnt-highlights-grid mt-4">
                <div className="gnt-highlight-card">
                  <div className="gnt-highlight-icon">&#128640;</div>
                  <div>
                    <h5>Practical Experience</h5>
                    <p>Build industry standard portfolio applications step by step.</p>
                  </div>
                </div>

                <div className="gnt-highlight-card">
                  <div className="gnt-highlight-icon">&#128220;</div>
                  <div>
                    <h5>Downloadable PDF Notes</h5>
                    <p>Includes cheat sheets, revision handbooks, and reference code.</p>
                  </div>
                </div>

                <div className="gnt-highlight-card">
                  <div className="gnt-highlight-icon">&#127942;</div>
                  <div>
                    <h5>Verified Certificate</h5>
                    <p>Earn an official GrowthNest certificate upon completing all lessons.</p>
                  </div>
                </div>

                <div className="gnt-highlight-card">
                  <div className="gnt-highlight-icon">&#128172;</div>
                  <div>
                    <h5>Dedicated Mentorship</h5>
                    <p>Get answers to doubts from our professional development team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SYLLABUS OVERVIEW WITH LOCKED ACCESS */}
          <div className="col-lg-5">
            <div className="gnt-syllabus-card shadow-sm">
              <div className="gnt-syllabus-header">
                <div>
                  <h4 className="m-0 fw-bold">Course Syllabus</h4>
                  <small className="text-muted">
                    {course.modules?.length || 0} Modules &bull;{" "}
                    {course.modules?.reduce(
                      (acc, m) => acc + (m.lessons?.length || 0),
                      0
                    )}{" "}
                    Lessons
                  </small>
                </div>
                <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">
                  Structured Learning
                </span>
              </div>

              <div className="gnt-syllabus-body">
                {course.modules?.map((module, mIdx) => {
                  const isOpen = activeModule === module.id;
                  return (
                    <div className="gnt-module-item" key={module.id || mIdx}>
                      <button
                        type="button"
                        className={`gnt-module-header ${isOpen ? "open" : ""}`}
                        onClick={() =>
                          setActiveModule(isOpen ? null : module.id)
                        }
                      >
                        <span className="gnt-module-number">
                          M{mIdx + 1}
                        </span>
                        <div className="gnt-module-title-wrap">
                          <span className="gnt-module-title">
                            {module.title}
                          </span>
                          <span className="gnt-module-count">
                            {module.lessons?.length || 0} Lessons
                          </span>
                        </div>
                        <span className="gnt-module-chevron">
                          {isOpen ? "\u25B2" : "\u25BC"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="gnt-module-lessons">
                          {module.lessons?.map((lesson, lIdx) => (
                            <div
                              className="gnt-lesson-row"
                              key={lesson.id || lIdx}
                              onClick={() =>
                                requireStudentLogin(`Lesson: ${lesson.title}`)
                              }
                            >
                              <div className="gnt-lesson-left">
                                <span className="gnt-lock-icon">&#128274;</span>
                                <span className="gnt-lesson-name">
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="gnt-lesson-duration">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="gnt-syllabus-footer">
                <div className="gnt-access-notice">
                  <span className="gnt-notice-icon">&#128272;</span>
                  <div>
                    <strong>Full Course Access Locked</strong>
                    <p>
                      Log in as a student to unlock all lessons, videos, and PDF notes.
                    </p>
                  </div>
                </div>

                <div className="d-grid gap-2 mt-3">
                  <button
                    type="button"
                    className="btn btn-success fw-bold py-2"
                    style={{ backgroundColor: "#179a37", borderColor: "#179a37" }}
                    onClick={() => requireStudentLogin("Full Course Access")}
                  >
                    Unlock Full Course
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => requireStudentLogin("Download Notes")}
                  >
                    &#128196; Download Notes (Login Required)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOGIN REQUIRED MODAL */}
      {showLoginModal && (
        <div
          className="gnt-auth-modal-overlay"
          onClick={() => setShowLoginModal(false)}
        >
          <div
            className="gnt-auth-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gnt-auth-modal-icon">&#128272;</div>
            <h3>Student Login Required</h3>
            <p className="text-muted">
              {modalActionText
                ? `To access "${modalActionText}", please log in with your GrowthNest student credentials.`
                : "Full tutorials, lesson players, and PDF study notes are reserved for enrolled students."}
            </p>

            <div className="gnt-auth-modal-buttons">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowLoginModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success px-4"
                style={{ backgroundColor: "#179a37", borderColor: "#179a37" }}
                onClick={() => {
                  setShowLoginModal(false);
                  navigate("/student-login");
                }}
              >
                Go to Student Login &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
