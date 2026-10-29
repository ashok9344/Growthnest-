import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourses, getCourseById } from "../data/coursesData";
import { getCoursesApi } from "../api/courseApi";
import { getStudentProfileApi } from "../api/studentApi";
import StudentSidebar from "../components/studentdashboard/StudentSidebar";
import StudentOverview from "../components/studentdashboard/StudentOverview";
import MyCourses from "../components/studentdashboard/MyCourses";
import LessonViewer from "../components/studentdashboard/LessonViewer";

const StudentDashboard = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(() => getCourses());
  const [activeTab, setActiveTab] = useState(() => (id ? "learn" : "dashboard"));
  const [selectedCourseId, setSelectedCourseId] = useState(() => {
    if (id) {
      const match = getCourseById(id);
      return match ? match.id : null;
    }
    return null;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [student, setStudent] = useState(() => {
    const storedUser = localStorage.getItem("gnt_student_user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch {
        // fallback
      }
    }
    return {
      name: "GrowthNest Student",
      email: "student@growthnest.in",
      role: "Student",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    };
  });

  useEffect(() => {
    let isMounted = true;
    const token = localStorage.getItem("gnt_student_token");

    // Fetch live courses from MongoDB
    getCoursesApi()
      .then((liveCourses) => {
        if (!isMounted) return;
        let baseCourses = Array.isArray(liveCourses) && liveCourses.length > 0 ? liveCourses : getCourses();

        // If authenticated student, load their real enrollments and progress from DB
        if (student?.email) {
          getStudentProfileApi(student.email, token)
            .then((prof) => {
              if (!isMounted || !prof?.student) return;
              setStudent((prev) => ({
                ...prev,
                ...prof.student,
                avatar: prev.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
              }));

              const enrolledList = prof.student.enrolledCourses || [];
              const studentProg = prof.student.progress || {};

              // Mark enrolled and progress
              const mapped = baseCourses.map((c) => {
                const isEnrolled = enrolledList.includes(c.id) || enrolledList.includes(String(c._id)) || enrolledList.length === 0;
                const progInfo = studentProg[c.id] || studentProg[String(c._id)];
                return {
                  ...c,
                  isEnrolled,
                  progress: progInfo?.percent ?? (c.progress || 0),
                  completedLessons: progInfo?.completedLessons?.length ?? (c.completedLessons || 0),
                };
              });

              setCourses(mapped);
            })
            .catch(() => {
              if (isMounted) setCourses(baseCourses);
            });
        } else {
          setCourses(baseCourses);
        }
      })
      .catch(() => {
        // network offline, fallback
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (id) {
      const match = getCourseById(id) || courses.find((c) => c.id === id);
      if (match) {
        setSelectedCourseId(match.id);
        setActiveTab("learn");
      }
    }
  }, [id, courses]);

  const handleSelectCourse = (courseId) => {
    setSelectedCourseId(courseId);
    setActiveTab("learn");
  };

  const handleBackToDashboard = () => {
    setActiveTab("dashboard");
    setSelectedCourseId(null);
  };

  const handleUpdateCourse = (updatedCourse) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c))
    );
  };

  // Filter courses by search if searching
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeCourse =
    selectedCourseId ? courses.find((c) => c.id === selectedCourseId) || courses[0] : null;

  return (
    <div className="d-flex flex-column flex-lg-row min-vh-100 bg-light">
      {/* SIDEBAR */}
      <StudentSidebar
        activeTab={activeTab === "learn" ? "courses" : activeTab}
        setActiveTab={(tab) => {
          setSelectedCourseId(null);
          setActiveTab(tab);
        }}
      />

      {/* MAIN CONTENT AREA */}
      <div className="flex-fill d-flex flex-column" style={{ minWidth: 0 }}>
        {/* TOP HEADER (as shown in reference image Panel 3) */}
        <header className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center flex-wrap gap-3">
          {/* SEARCH BAR */}
          <div className="d-flex align-items-center" style={{ maxWidth: "340px", width: "100%" }}>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light border-end-0">
                &#128269;
              </span>
              <input
                type="text"
                className="form-control bg-light border-start-0"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* USER PROFILE & NOTIFICATIONS */}
          <div className="d-flex align-items-center gap-3">
            <span
              className="fs-5 text-muted cursor-pointer position-relative"
              title="Notifications"
              style={{ cursor: "pointer" }}
            >
              &#128276;
              <span
                className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
                style={{ width: "8px", height: "8px" }}
              ></span>
            </span>

            <div className="d-flex align-items-center gap-2 border-start ps-3">
              <img
                src={student.avatar}
                alt={student.name}
                className="rounded-circle border"
                style={{ width: "36px", height: "36px", objectFit: "cover" }}
              />
              <div className="d-none d-sm-block text-start" style={{ lineHeight: "1.2" }}>
                <span className="d-block fw-bold small text-dark">{student.name}</span>
                <span className="text-muted" style={{ fontSize: "11px" }}>
                  {student.role || "Student"}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* BODY CONTENT */}
        <main className="p-4 flex-fill" style={{ background: "#f8fafc" }}>
          {activeTab === "dashboard" && (
            <StudentOverview
              courses={filteredCourses}
              onSelectCourse={handleSelectCourse}
            />
          )}

          {activeTab === "courses" && (
            <MyCourses
              courses={filteredCourses}
              onSelectCourse={handleSelectCourse}
            />
          )}

          {activeTab === "learn" && activeCourse && (
            <LessonViewer
              course={activeCourse}
              onBackToDashboard={handleBackToDashboard}
              onUpdateCourse={handleUpdateCourse}
            />
          )}

          {activeTab === "certificates" && (
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h3 className="fw-bold mb-1">My Certificates</h3>
              <p className="text-muted mb-4">
                Official verified certificates earned through GrowthNest course completion.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="border rounded-3 p-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <span className="fs-1">&#127942;</span>
                      <div>
                        <h6 className="m-0 fw-bold">CSS3 &amp; Modern Styling Mastery</h6>
                        <small className="text-muted">Issued: October 2026 &bull; Verified</small>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-sm fw-bold"
                      onClick={() => alert("Downloading CSS3 Certificate (PDF)...")}
                    >
                      Download
                    </button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded-3 p-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <span className="fs-1">&#127942;</span>
                      <div>
                        <h6 className="m-0 fw-bold">Responsive Web Foundations</h6>
                        <small className="text-muted">Issued: September 2026 &bull; Verified</small>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-sm fw-bold"
                      onClick={() => alert("Downloading Foundations Certificate (PDF)...")}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notes" && (
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h3 className="fw-bold mb-1">Course Notes &amp; Handbooks</h3>
              <p className="text-muted mb-4">
                Download PDF cheat sheets and lecture summaries for offline revision.
              </p>
              <div className="d-flex flex-column gap-3">
                {courses.map((course) => (
                  <div key={course.id} className="p-3 border rounded-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-3">
                      <span className="fs-2">&#128196;</span>
                      <div>
                        <h6 className="m-0 fw-bold">{course.title} - Complete Handbook.pdf</h6>
                        <small className="text-muted">{course.category} &bull; 4.2 MB</small>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm fw-bold"
                      onClick={() => alert(`Downloading notes for ${course.title}...`)}
                    >
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "progress" && (
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h3 className="fw-bold mb-1">Learning Analytics</h3>
              <p className="text-muted mb-4">
                Detailed metrics of completed modules, quiz scores, and watch time.
              </p>
              <div className="row g-4">
                {courses.map((course) => (
                  <div className="col-md-6" key={course.id}>
                    <div className="p-3 border rounded-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">{course.title}</span>
                        <span className="text-success fw-bold">{course.progress || 0}%</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "8px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: `${course.progress || 0}%` }}
                        ></div>
                      </div>
                      <small className="text-muted">
                        {course.completedLessons || 0} of {course.totalLessons || 20} lessons completed
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white p-4 rounded-4 shadow-sm" style={{ maxWidth: "600px" }}>
              <h3 className="fw-bold mb-1">Student Profile Settings</h3>
              <p className="text-muted mb-4">Update your profile and notification settings.</p>

              <div className="mb-3">
                <label className="form-label small fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={student.name}
                  onChange={(e) => setStudent({ ...student, name: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  defaultValue={student.email || "student@growthnest.com"}
                  disabled
                />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold">Preferred Track</label>
                <select className="form-select" defaultValue="web">
                  <option value="web">Full Stack Web Development</option>
                  <option value="mobile">Flutter Mobile Development</option>
                  <option value="uiux">UI/UX Design &amp; Frontend</option>
                </select>
              </div>

              <button
                type="button"
                className="btn btn-success px-4"
                style={{ backgroundColor: "#179a37", borderColor: "#179a37" }}
                onClick={() => {
                  localStorage.setItem("gnt_student_user", JSON.stringify(student));
                  alert("Profile settings saved successfully!");
                }}
              >
                Save Changes
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
