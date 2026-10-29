import React from "react";
import "./MyCourses.css";

const MyCourses = ({ courses, onSelectCourse }) => {
  return (
    <div className="gnt-mycourses-page">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">My Enrolled Courses</h2>
          <p className="text-muted m-0">
            Access your courses, track milestones, and view course content.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {courses.map((course) => {
          const isCompleted = course.progress >= 100;
          return (
            <div className="col-md-6 col-lg-4" key={course.id}>
              <div className="gnt-mycourse-card shadow-sm h-100">
                <div
                  className="gnt-mycourse-thumb"
                  style={{
                    background:
                      course.gradient ||
                      "linear-gradient(135deg, #179a37, #28a745)",
                  }}
                >
                  <span>{course.symbol || "📚"}</span>
                  <span className="gnt-mycourse-level-badge">
                    {course.level}
                  </span>
                </div>

                <div className="gnt-mycourse-content p-3 d-flex flex-column flex-fill">
                  <h4 className="fw-bold fs-5 mb-1">{course.title}</h4>
                  <p className="text-muted small mb-3 flex-fill">
                    {course.description}
                  </p>

                  <div className="mb-2">
                    <div className="d-flex justify-content-between small text-muted mb-1">
                      <span>Progress</span>
                      <strong className="text-success">{course.progress || 0}%</strong>
                    </div>
                    <div className="progress gnt-progress-bar-wrap">
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${course.progress || 0}%` }}
                        role="progressbar"
                        aria-valuenow={course.progress || 0}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between text-muted small mb-3">
                    <span>
                      &#9635; {course.completedLessons || 0} /{" "}
                      {course.totalLessons || 20} lessons
                    </span>
                    <span>&#9201; {course.duration || "4 Weeks"}</span>
                  </div>

                  <button
                    type="button"
                    className={`btn w-100 fw-bold ${
                      isCompleted ? "btn-outline-success" : "btn-success"
                    }`}
                    style={
                      !isCompleted
                        ? { backgroundColor: "#179a37", borderColor: "#179a37" }
                        : {}
                    }
                    onClick={() => onSelectCourse(course.id)}
                  >
                    {isCompleted ? "Review Course" : "Continue Learning \u2192"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCourses;
