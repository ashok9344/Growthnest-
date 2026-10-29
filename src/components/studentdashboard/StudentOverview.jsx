import React from "react";
import "./StudentOverview.css";

const StudentOverview = ({ courses, onSelectCourse }) => {
  const enrolledCourses = courses.filter((c) => c.isEnrolled !== false);
  const totalEnrolled = enrolledCourses.length;
  const completedLessons = enrolledCourses.reduce(
    (acc, c) => acc + (c.completedLessons || 0),
    0
  );
  const totalLessons = enrolledCourses.reduce(
    (acc, c) => acc + (c.totalLessons || c.modules?.reduce((mAcc, m) => mAcc + (m.lessons?.length || 0), 0) || 0),
    0
  );
  const overallProgress =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const completedCoursesCount = enrolledCourses.filter((c) => (c.progress || 0) >= 100).length;

  const statCards = [
    {
      id: "enrolled",
      title: "Enrolled Courses",
      value: totalEnrolled,
      icon: "\uD83D\uDCD6",
      bgColor: "#e8f8ec",
      textColor: "#179a37",
    },
    {
      id: "completed",
      title: "Completed Lessons",
      value: completedLessons,
      icon: "\u2705",
      bgColor: "#e6f9ed",
      textColor: "#12822d",
    },
    {
      id: "progress",
      title: "Overall Progress",
      value: `${overallProgress}%`,
      icon: "\uD83D\uDCCA",
      bgColor: "#e8f4fd",
      textColor: "#0b72c4",
    },
    {
      id: "certificates",
      title: "Certificates Earned",
      value: completedCoursesCount,
      icon: "\uD83C\uDFC6",
      bgColor: "#fef9e7",
      textColor: "#b78103",
    },
  ];

  return (
    <div className="gnt-student-overview">
      {/* SECTION HEADER */}
      <div className="gnt-overview-heading mb-4">
        <h2>My Learning Dashboard</h2>
        <p className="text-muted">Track your progress and continue learning.</p>
      </div>

      {/* 4 STAT CARDS */}
      <div className="gnt-stats-grid mb-5">
        {statCards.map((stat) => (
          <div className="gnt-stat-card shadow-sm" key={stat.id}>
            <div
              className="gnt-stat-icon-wrap"
              style={{ background: stat.bgColor, color: stat.textColor }}
            >
              <span>{stat.icon}</span>
            </div>
            <div className="gnt-stat-info">
              <span className="gnt-stat-value">{stat.value}</span>
              <span className="gnt-stat-title">{stat.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MY COURSES SECTION */}
      <div className="gnt-my-courses-section">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="gnt-section-subtitle">My Courses</h3>
          <button
            type="button"
            className="btn btn-link text-success text-decoration-none fw-bold p-0"
            onClick={() => {
              if (courses.length > 0) onSelectCourse(courses[0].id);
            }}
          >
            View All Courses &rarr;
          </button>
        </div>

        {/* COURSE CARDS WITH PROGRESS */}
        <div className="gnt-overview-courses-grid">
          {courses.map((course) => {
            const isCompleted = course.progress >= 100;
            return (
              <div
                className="gnt-overview-course-card shadow-sm"
                key={course.id}
              >
                {/* ICON & BADGE */}
                <div
                  className="gnt-course-badge-box"
                  style={{
                    background:
                      course.gradient ||
                      "linear-gradient(135deg, #179a37, #28a745)",
                  }}
                >
                  <span>{course.symbol || "📚"}</span>
                </div>

                <div className="gnt-overview-course-body">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h4 className="gnt-course-name">
                      {course.shortTitle || course.title}
                    </h4>
                    <span className="gnt-progress-pct">{course.progress || 0}%</span>
                  </div>

                  <div className="progress gnt-progress-bar-wrap mb-2">
                    <div
                      className={`progress-bar ${
                        isCompleted ? "bg-success" : "bg-success"
                      }`}
                      style={{
                        width: `${course.progress || 0}%`,
                        backgroundColor: "#179a37",
                      }}
                      role="progressbar"
                      aria-valuenow={course.progress || 0}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <div className="gnt-lessons-completed-meta mb-3">
                    <small className="text-muted">
                      {course.completedLessons || 0} of {course.totalLessons || 20} lessons
                    </small>
                  </div>

                  <button
                    type="button"
                    className={`btn w-100 fw-bold btn-sm ${
                      isCompleted
                        ? "btn-outline-success"
                        : "btn-success text-white"
                    }`}
                    style={
                      !isCompleted
                        ? { backgroundColor: "#179a37", borderColor: "#179a37" }
                        : {}
                    }
                    onClick={() => onSelectCourse(course.id)}
                  >
                    {isCompleted ? "Completed" : "Continue Learning"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;
