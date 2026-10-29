import React, { useState } from "react";
import { formatYouTubeEmbedUrl, toggleLessonCompletion } from "../../data/coursesData";
import { updateLessonProgressApi } from "../../api/studentApi";
import "./LessonViewer.css";

const LessonViewer = ({ course, onBackToDashboard, onUpdateCourse }) => {
  const [currentLesson, setCurrentLesson] = useState(
    course.modules?.[0]?.lessons?.[0] || null
  );
  const [activeTab, setActiveTab] = useState("notes");
  const [downloadNotice, setDownloadNotice] = useState("");

  // Find all lessons flattened for next/prev navigation
  const allLessons = [];
  course.modules?.forEach((m) => {
    m.lessons?.forEach((l) => {
      allLessons.push({ ...l, moduleId: m.id, moduleTitle: m.title });
    });
  });

  const currentIndex = allLessons.findIndex(
    (l) => l.id === currentLesson?.id
  );

  const handleSelectLesson = (lesson) => {
    setCurrentLesson(lesson);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextLesson = () => {
    if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
      const next = allLessons[currentIndex + 1];
      handleSelectLesson(next);
    }
  };

  const handleToggleComplete = async () => {
    if (!currentLesson) return;
    const newStatus = !currentLesson.completed;

    const storedUser = localStorage.getItem("gnt_student_user");
    if (storedUser) {
      try {
        const studentObj = JSON.parse(storedUser);
        if (studentObj.email) {
          await updateLessonProgressApi({
            email: studentObj.email,
            courseId: course.id,
            lessonId: currentLesson.id,
            completed: newStatus,
          });
        }
      } catch (err) {
        console.warn("Backend progress sync error:", err);
      }
    }

    const updated = toggleLessonCompletion(course.id, currentLesson.id);
    if (updated) {
      onUpdateCourse(updated);
      setCurrentLesson((prev) => ({
        ...prev,
        completed: newStatus,
      }));
    }
  };

  const handleDownload = (filename, customUrl) => {
    const cleanName = (filename || "Course_Notes.pdf").split("/").pop();
    const fileUrl = customUrl || (filename?.startsWith("/") ? filename : `/notes/${cleanName}`);
    
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", cleanName);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNotice(`Downloaded: ${cleanName}`);
    setTimeout(() => {
      setDownloadNotice("");
    }, 3500);
  };

  if (!currentLesson) {
    return (
      <div className="p-4 text-center">
        <h4>No lessons available in this course.</h4>
        <button
          type="button"
          className="btn btn-outline-secondary mt-3"
          onClick={onBackToDashboard}
        >
          &larr; Back to Dashboard
        </button>
      </div>
    );
  }

  const isCurrentCompleted = !!currentLesson.completed;

  return (
    <div className="gnt-lesson-viewer">
      {/* TOP BAR / BREADCRUMBS */}
      <div className="gnt-viewer-topbar mb-3">
        <div className="gnt-viewer-breadcrumbs">
          <span className="gnt-crumb-link" onClick={onBackToDashboard}>
            My Courses
          </span>
          <span className="mx-2">&gt;</span>
          <span className="gnt-crumb-link" onClick={onBackToDashboard}>
            {course.title}
          </span>
          <span className="mx-2">&gt;</span>
          <span className="text-dark fw-bold">{currentLesson.title}</span>
        </div>

        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={onBackToDashboard}
        >
          &larr; Back to Dashboard
        </button>
      </div>

      {/* HEADER: LESSON TITLE & PROGRESS */}
      <div className="gnt-lesson-header-card shadow-sm mb-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 mb-1">
              Lesson {currentIndex + 1} of {allLessons.length}
            </span>
            <h2 className="gnt-lesson-main-title">{currentLesson.title}</h2>
          </div>

          <div className="gnt-course-progress-header">
            <div className="d-flex justify-content-between text-muted small mb-1">
              <span>Course Progress</span>
              <strong className="text-success">{course.progress || 0}% Complete</strong>
            </div>
            <div className="progress gnt-progress-mini">
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
        </div>
      </div>

      {/* MAIN VIDEO PLAYER + PLAYLIST GRID */}
      <div className="row g-4 mb-4">
        {/* LEFT: YOUTUBE PLAYER */}
        <div className="col-lg-8">
          <div className="gnt-player-frame-wrap shadow-sm rounded-4 overflow-hidden">
            <iframe
              src={`${formatYouTubeEmbedUrl(
                currentLesson.youtubeUrl
              )}?autoplay=0&rel=0`}
              title={currentLesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* PLAYER CONTROLS & ACTIONS */}
          <div className="gnt-player-action-bar shadow-sm mt-3 p-3 rounded-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
            <button
              type="button"
              className={`btn btn-sm ${
                isCurrentCompleted ? "btn-success text-white" : "btn-outline-success"
              } fw-bold`}
              onClick={handleToggleComplete}
            >
              {isCurrentCompleted ? "\u2714 Lesson Completed" : "\u25CB Mark Lesson Complete"}
            </button>

            {currentIndex < allLessons.length - 1 && (
              <button
                type="button"
                className="btn btn-sm btn-dark px-3 fw-bold"
                onClick={handleNextLesson}
              >
                Next Lesson &rarr;
              </button>
            )}
          </div>

          {downloadNotice && (
            <div className="alert alert-success py-2 px-3 small mt-3" role="alert">
              &#10004; {downloadNotice}
            </div>
          )}

          {/* TABS BELOW VIDEO */}
          <div className="gnt-viewer-tabs-card shadow-sm mt-4">
            <div className="gnt-viewer-tabs-header">
              <button
                type="button"
                className={`gnt-tab-btn ${activeTab === "notes" ? "active" : ""}`}
                onClick={() => setActiveTab("notes")}
              >
                Notes
              </button>
              <button
                type="button"
                className={`gnt-tab-btn ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                type="button"
                className={`gnt-tab-btn ${
                  activeTab === "resources" ? "active" : ""
                }`}
                onClick={() => setActiveTab("resources")}
              >
                Resources
              </button>
              <button
                type="button"
                className={`gnt-tab-btn ${activeTab === "qa" ? "active" : ""}`}
                onClick={() => setActiveTab("qa")}
              >
                Q&amp;A
              </button>
            </div>

            <div className="gnt-viewer-tabs-body p-4">
              {activeTab === "notes" && (
                <div className="gnt-notes-tab-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold m-0">Downloadable Study Notes &amp; Handbooks</h5>
                    <span className="badge bg-success-subtle text-success border border-success-subtle">
                      Real Verified PDFs
                    </span>
                  </div>
                  
                  <div className="d-flex flex-column gap-3">
                    {/* CURRENT LESSON NOTES */}
                    <div className="gnt-pdf-row d-flex justify-content-between align-items-center p-3 rounded-3 border">
                      <div className="d-flex align-items-center gap-3">
                        <span className="gnt-pdf-icon">&#128196;</span>
                        <div>
                          <h6 className="m-0 fw-bold">
                            {currentLesson.notesPdf || `${course.title} - Chapter Notes.pdf`}
                          </h6>
                          <small className="text-muted">
                            {currentLesson.notesSize || "7.7 KB"} &bull; Chapter Guide &bull; Verified PDF
                          </small>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <a
                          href={currentLesson.notesUrl || `/notes/${currentLesson.notesPdf || "HTML5_Complete_Mastery_Guide_A_to_Z.pdf"}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm fw-bold"
                          title="Open PDF in new tab"
                        >
                          &#128065; View
                        </a>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm fw-bold"
                          onClick={() =>
                            handleDownload(
                              currentLesson.notesPdf || "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
                              currentLesson.notesUrl
                            )
                          }
                        >
                          &#11015; Download
                        </button>
                      </div>
                    </div>

                    {/* CHEATSHEET & REFERENCE */}
                    <div className="gnt-pdf-row d-flex justify-content-between align-items-center p-3 rounded-3 border">
                      <div className="d-flex align-items-center gap-3">
                        <span className="gnt-pdf-icon">&#128218;</span>
                        <div>
                          <h6 className="m-0 fw-bold">
                            {course.id === "html"
                              ? "HTML5 Cheatsheet & Tag Reference Guide.pdf"
                              : `${course.shortTitle} Quick Reference Cheatsheet.pdf`}
                          </h6>
                          <small className="text-muted">
                            3.4 KB &bull; Quick Reference Cheatsheet &bull; PDF document
                          </small>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <a
                          href={course.id === "html" ? "/notes/HTML5_Cheatsheet_and_Tag_Reference.pdf" : `/notes/${course.shortTitle}_Cheatsheet.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm fw-bold"
                          title="Open PDF in new tab"
                        >
                          &#128065; View
                        </a>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm fw-bold"
                          onClick={() =>
                            handleDownload(
                              course.id === "html"
                                ? "HTML5_Cheatsheet_and_Tag_Reference.pdf"
                                : `${course.shortTitle}_Cheatsheet.pdf`,
                              course.id === "html" ? "/notes/HTML5_Cheatsheet_and_Tag_Reference.pdf" : null
                            )
                          }
                        >
                          &#11015; Download
                        </button>
                      </div>
                    </div>

                    {/* EXTRA HTML5 SPECIALIZED HANDBOOKS IF HTML COURSE */}
                    {course.id === "html" && (
                      <>
                        <div className="gnt-pdf-row d-flex justify-content-between align-items-center p-3 rounded-3 border">
                          <div className="d-flex align-items-center gap-3">
                            <span className="gnt-pdf-icon">&#128221;</span>
                            <div>
                              <h6 className="m-0 fw-bold">HTML5 Forms and Validations Handbook.pdf</h6>
                              <small className="text-muted">3.6 KB &bull; Module 5 In-Depth Handbook &bull; PDF document</small>
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            <a
                              href="/notes/HTML5_Forms_and_Validations_Handbook.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-secondary btn-sm fw-bold"
                            >
                              &#128065; View
                            </a>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm fw-bold"
                              onClick={() => handleDownload("HTML5_Forms_and_Validations_Handbook.pdf")}
                            >
                              &#11015; Download
                            </button>
                          </div>
                        </div>

                        <div className="gnt-pdf-row d-flex justify-content-between align-items-center p-3 rounded-3 border">
                          <div className="d-flex align-items-center gap-3">
                            <span className="gnt-pdf-icon">&#127760;</span>
                            <div>
                              <h6 className="m-0 fw-bold">HTML5 Semantic Web and SEO Guide.pdf</h6>
                              <small className="text-muted">3.4 KB &bull; Semantic Layouts &amp; Technical SEO &bull; PDF document</small>
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            <a
                              href="/notes/HTML5_Semantic_Web_and_SEO_Guide.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-secondary btn-sm fw-bold"
                            >
                              &#128065; View
                            </a>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm fw-bold"
                              onClick={() => handleDownload("HTML5_Semantic_Web_and_SEO_Guide.pdf")}
                            >
                              &#11015; Download
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "description" && (
                <div>
                  <h5 className="fw-bold mb-2">{currentLesson.title}</h5>
                  <p className="text-muted">
                    In this tutorial session, you will learn the core concepts, syntax,
                    and practical workflow for {currentLesson.title}. Follow along
                    with your code editor and review the attached PDF notes.
                  </p>
                  <ul className="text-muted small">
                    <li>Duration: {currentLesson.duration}</li>
                    <li>Module: {course.title}</li>
                    <li>Instructor: GrowthNest Senior Technical Mentor</li>
                  </ul>
                </div>
              )}

              {activeTab === "resources" && (
                <div>
                  <h5 className="fw-bold mb-3">Helpful Resources</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      &#128279;{" "}
                      <a
                        href="https://developer.mozilla.org"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success text-decoration-none fw-semibold"
                      >
                        Official MDN Documentation
                      </a>
                    </li>
                    <li className="mb-2">
                      &#128279;{" "}
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success text-decoration-none fw-semibold"
                      >
                        GitHub Starter Code &amp; Repositories
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "qa" && (
                <div>
                  <h5 className="fw-bold mb-2">Questions &amp; Answers</h5>
                  <p className="text-muted small">
                    Have a question on this lesson? Post it here and our GrowthNest
                    teaching assistants will respond within 24 hours.
                  </p>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your question..."
                    />
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "#179a37" }}
                      type="button"
                      onClick={() => alert("Your question has been submitted to mentors.")}
                    >
                      Post Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: COURSE CONTENT PLAYLIST */}
        <div className="col-lg-4">
          <div className="gnt-playlist-card shadow-sm rounded-4">
            <div className="gnt-playlist-header p-3 border-bottom">
              <h5 className="m-0 fw-bold">Course Content</h5>
              <small className="text-muted">
                {allLessons.length} lessons &bull; {course.duration || "4 Weeks"}
              </small>
            </div>

            <div className="gnt-playlist-body p-2">
              {course.modules?.map((module, mIdx) => (
                <div className="gnt-playlist-module mb-2" key={module.id || mIdx}>
                  <div className="gnt-module-bar px-3 py-2 bg-light rounded-2 fw-bold text-dark small">
                    {module.title}
                  </div>

                  <div className="gnt-module-items mt-1">
                    {module.lessons?.map((lesson, lIdx) => {
                      const isCurrent = lesson.id === currentLesson.id;
                      const isDone = !!lesson.completed;
                      return (
                        <div
                          key={lesson.id || lIdx}
                          className={`gnt-playlist-item p-2 rounded-2 d-flex justify-content-between align-items-center ${
                            isCurrent ? "active" : ""
                          }`}
                          onClick={() => handleSelectLesson(lesson)}
                        >
                          <div className="d-flex align-items-center gap-2 overflow-hidden">
                            <span className="gnt-play-indicator">
                              {isDone ? "\u2705" : isCurrent ? "\u25B6" : "\u25CB"}
                            </span>
                            <span className="gnt-playlist-title text-truncate small">
                              {lesson.title}
                            </span>
                          </div>
                          <span className="gnt-playlist-duration small text-muted ms-2">
                            {lesson.duration}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
