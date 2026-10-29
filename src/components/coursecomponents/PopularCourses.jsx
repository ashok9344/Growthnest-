import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCourses, formatYouTubeEmbedUrl } from "../../data/coursesData";
import { getCoursesApi } from "../../api/courseApi";
import "./PopularCourses.css";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIntroVideo, setSelectedIntroVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    getCoursesApi()
      .then((data) => {
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setCourses(data);
          } else {
            setCourses(getCourses());
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn("Using local courses cache:", err.message);
        if (isMounted) {
          setCourses(getCourses());
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const openIntroModal = (course) => {
    setSelectedIntroVideo(course);
  };

  const closeIntroModal = () => {
    setSelectedIntroVideo(null);
  };

  return (
    <section className="gnt-popular-courses" id="popular-courses">
      <div className="container">
        {/* HEADING */}
        <div className="gnt-popular-heading">
          <div>
            <span className="gnt-popular-small-title">
              LEARN WITH GROWTHNEST
            </span>
            <h2>Popular Courses</h2>
            <p>
              Choose from our most in-demand courses and start your learning
              journey.
            </p>
          </div>

          <button
            type="button"
            className="gnt-view-all-btn"
            onClick={() => {
              const el = document.getElementById("popular-courses");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View All Courses &rarr;
          </button>
        </div>

        {/* CARDS GRID */}
        <div className="gnt-popular-course-grid">
          {courses.map((course) => (
            <article className="gnt-popular-course-card" key={course.id}>
              {/* THUMBNAIL */}
              <div
                className={`gnt-course-thumbnail ${course.className || ""}`}
                style={
                  course.gradient
                    ? { background: course.gradient }
                    : { background: "linear-gradient(135deg, #179a37, #28a745)" }
                }
              >
                <span>{course.symbol || "📚"}</span>
              </div>

              {/* CARD CONTENT */}
              <div className="gnt-popular-card-content">
                <h3>{course.shortTitle || course.title}</h3>
                <p>{course.description}</p>

                <div className="gnt-popular-meta">
                  <div>
                    <span className="gnt-meta-icon">&#9635;</span>
                    {course.lessonsCount || `${course.totalLessons || 20}+ Lessons`}
                  </div>
                  <div>
                    <span className="gnt-meta-icon">&#128100;</span>
                    {course.level || "Beginner Friendly"}
                  </div>
                </div>

                <button
                  type="button"
                  className="gnt-view-course-btn"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  View Course
                </button>

                <button
                  type="button"
                  className="gnt-watch-course-btn"
                  onClick={() => openIntroModal(course)}
                >
                  &#9654; Watch Tutorial
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* YOUTUBE INTRO PREVIEW MODAL */}
      {selectedIntroVideo && (
        <div className="gnt-video-modal-overlay" onClick={closeIntroModal}>
          <div
            className="gnt-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gnt-video-modal-header">
              <div>
                <span className="gnt-modal-badge">Course Preview</span>
                <h4>{selectedIntroVideo.title} - Introduction</h4>
              </div>
              <button
                type="button"
                className="gnt-modal-close-btn"
                onClick={closeIntroModal}
                aria-label="Close Preview"
              >
                &times;
              </button>
            </div>

            <div className="gnt-video-modal-player">
              <iframe
                src={`${formatYouTubeEmbedUrl(
                  selectedIntroVideo.introYoutubeUrl
                )}?autoplay=1&rel=0`}
                title={`${selectedIntroVideo.title} Introduction Preview`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

            <div className="gnt-video-modal-footer">
              <p>
                Public preview only. Log in with your student account to access
                full modules, step-by-step video tutorials, and downloadable PDF notes.
              </p>
              <div className="gnt-modal-actions">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={closeIntroModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-sm px-3"
                  onClick={() => {
                    closeIntroModal();
                    navigate(`/course/${selectedIntroVideo.id}`);
                  }}
                >
                  Course Syllabus &rarr;
                </button>
                <Link
                  to="/student-login"
                  className="btn btn-primary btn-sm px-3 text-white"
                  style={{ backgroundColor: "#179a37", borderColor: "#179a37" }}
                >
                  Student Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularCourses;
