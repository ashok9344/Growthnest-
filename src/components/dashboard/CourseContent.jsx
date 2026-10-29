import React, { useState } from "react";
import { formatYouTubeEmbedUrl } from "../../data/coursesData";
import "./CourseContent.css";

const CourseContent = ({ course, onUpdateCourse, onBack }) => {
  const [activeSubTab, setActiveSubTab] = useState("modules");
  const [newModuleName, setNewModuleName] = useState("");
  const [showAddModule, setShowAddModule] = useState(false);

  // New Lesson form state
  const [selectedModuleForLesson, setSelectedModuleForLesson] = useState(
    course.modules?.[0]?.id || ""
  );
  const [lessonTitle, setLessonTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [lessonDuration, setLessonDuration] = useState("12:00");
  const [previewUrl, setPreviewUrl] = useState("");

  // New PDF Notes form state
  const [selectedModuleForNotes, setSelectedModuleForNotes] = useState(
    course.modules?.[0]?.id || ""
  );
  const [notesTitle, setNotesTitle] = useState("");
  const [notesFileName, setNotesFileName] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const showFeedback = (msg) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(""), 3500);
  };

  // Add module
  const handleAddModule = (e) => {
    e.preventDefault();
    if (!newModuleName.trim()) return;

    const newMod = {
      id: `m_${Date.now()}`,
      title: newModuleName.trim(),
      lessonsCount: 0,
      lessons: [],
    };

    const updatedModules = [...(course.modules || []), newMod];
    const updated = {
      ...course,
      modules: updatedModules,
    };

    onUpdateCourse(updated);
    setNewModuleName("");
    setShowAddModule(false);
    showFeedback(`Module "${newMod.title}" added successfully!`);
  };

  // Delete module
  const handleDeleteModule = (moduleId) => {
    if (!window.confirm("Are you sure you want to delete this module?")) return;
    const updatedModules = course.modules.filter((m) => m.id !== moduleId);
    onUpdateCourse({ ...course, modules: updatedModules });
    showFeedback("Module deleted.");
  };

  // Add YouTube Video lesson
  const handleAddVideoLesson = (e) => {
    e.preventDefault();
    if (!lessonTitle || !youtubeUrl) {
      alert("Please enter a lesson title and YouTube video URL.");
      return;
    }

    const embedLink = formatYouTubeEmbedUrl(youtubeUrl);
    const targetModuleId = selectedModuleForLesson || course.modules?.[0]?.id;

    const updatedModules = course.modules.map((m) => {
      if (m.id === targetModuleId) {
        const newLesson = {
          id: `l_${Date.now()}`,
          title: lessonTitle.trim(),
          duration: lessonDuration || "10:00",
          youtubeUrl: embedLink,
          completed: false,
          notesPdf: `${lessonTitle.trim().replace(/\s+/g, "_")}_Notes.pdf`,
          notesSize: "1.5 MB",
        };
        const lessons = [...(m.lessons || []), newLesson];
        return {
          ...m,
          lessons,
          lessonsCount: lessons.length,
        };
      }
      return m;
    });

    const totalLessons = updatedModules.reduce(
      (acc, m) => acc + (m.lessons?.length || 0),
      0
    );

    const updated = {
      ...course,
      modules: updatedModules,
      totalLessons,
      lessonsCount: `${totalLessons} Lessons`,
    };

    onUpdateCourse(updated);
    setLessonTitle("");
    setYoutubeUrl("");
    setPreviewUrl("");
    showFeedback("YouTube video lesson added successfully!");
  };

  // Upload PDF Notes
  const handleUploadNotes = (e) => {
    e.preventDefault();
    if (!notesTitle) {
      alert("Please enter a title for the study notes.");
      return;
    }

    const finalFileName =
      notesFileName || `${notesTitle.replace(/\s+/g, "_")}.pdf`;
    const targetModuleId = selectedModuleForNotes || course.modules?.[0]?.id;

    const updatedModules = course.modules.map((m) => {
      if (m.id === targetModuleId && m.lessons && m.lessons.length > 0) {
        // Attach to first lesson or update module notes
        const lessons = [...m.lessons];
        lessons[0] = {
          ...lessons[0],
          notesPdf: finalFileName,
          notesSize: "2.5 MB",
        };
        return { ...m, lessons };
      }
      return m;
    });

    onUpdateCourse({ ...course, modules: updatedModules });
    setNotesTitle("");
    setNotesFileName("");
    showFeedback(`PDF Notes "${finalFileName}" uploaded and linked!`);
  };

  const totalLessonsCount =
    course.modules?.reduce((acc, m) => acc + (m.lessons?.length || 0), 0) || 0;

  return (
    <div className="gnt-course-content-manager">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div className="d-flex align-items-center gap-3">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={onBack}
          >
            &larr; Back to Courses
          </button>
          <div>
            <h3 className="m-0 fw-bold">{course.title}</h3>
            <small className="text-muted">
              Course Content Manager &bull; {course.level}
            </small>
          </div>
        </div>

        <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 fs-6">
          {course.category}
        </span>
      </div>

      {feedbackMsg && (
        <div className="alert alert-success py-2 px-3 small mb-3" role="alert">
          &#10004; {feedbackMsg}
        </div>
      )}

      {/* CONTENT MANAGER BODY */}
      <div className="row g-4">
        {/* SUB-MENU (matches reference image Panel 2 left sub-menu) */}
        <div className="col-lg-3">
          <div className="gnt-content-submenu-card shadow-sm rounded-3 overflow-hidden">
            <div className="p-3 bg-light border-bottom fw-bold text-dark small">
              COURSE NAVIGATION
            </div>
            <div className="list-group list-group-flush">
              <button
                type="button"
                className={`list-group-item list-group-item-action ${
                  activeSubTab === "info" ? "active bg-success border-success" : ""
                }`}
                onClick={() => setActiveSubTab("info")}
              >
                &#128196; Course Information
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action ${
                  activeSubTab === "modules"
                    ? "active bg-success border-success"
                    : ""
                }`}
                onClick={() => setActiveSubTab("modules")}
              >
                &#9638; Modules &amp; Lessons
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action ${
                  activeSubTab === "materials"
                    ? "active bg-success border-success"
                    : ""
                }`}
                onClick={() => setActiveSubTab("materials")}
              >
                &#128228; Upload Materials
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action ${
                  activeSubTab === "assign"
                    ? "active bg-success border-success"
                    : ""
                }`}
                onClick={() => setActiveSubTab("assign")}
              >
                &#128101; Assign to Students
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action ${
                  activeSubTab === "preview"
                    ? "active bg-success border-success"
                    : ""
                }`}
                onClick={() => setActiveSubTab("preview")}
              >
                &#128065; Preview Course
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN MANAGER AREA */}
        <div className="col-lg-9">
          {activeSubTab === "modules" && (
            <div>
              {/* TOP SUMMARY BAR */}
              <div className="gnt-manager-header-bar p-3 bg-white border rounded-3 d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                  <h4 className="fw-bold m-0">{course.title}</h4>
                  <small className="text-muted">
                    Total Modules: {course.modules?.length || 0} | Total Lessons:{" "}
                    {totalLessonsCount}
                  </small>
                </div>

                <button
                  type="button"
                  className="btn btn-success btn-sm fw-bold px-3"
                  style={{ backgroundColor: "#179a37", borderColor: "#179a37" }}
                  onClick={() => setShowAddModule(!showAddModule)}
                >
                  + Add Module
                </button>
              </div>

              {/* INLINE ADD MODULE FORM */}
              {showAddModule && (
                <form
                  onSubmit={handleAddModule}
                  className="p-3 bg-white border rounded-3 mb-4 shadow-sm"
                >
                  <h6 className="fw-bold mb-2">Create New Module</h6>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Module 6: Advanced Deployment & Cloud Hosting"
                      value={newModuleName}
                      onChange={(e) => setNewModuleName(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ backgroundColor: "#179a37" }}
                    >
                      Save Module
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowAddModule(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* MODULES LIST (matches reference image Panel 2 modules list) */}
              <div className="d-flex flex-column gap-3 mb-4">
                {course.modules?.map((module, mIdx) => (
                  <div
                    className="p-3 bg-white border rounded-3 shadow-sm"
                    key={module.id || mIdx}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-secondary-subtle text-dark border">
                          {mIdx + 1}
                        </span>
                        <h6 className="m-0 fw-bold">{module.title}</h6>
                        <span className="text-muted small">
                          ({module.lessons?.length || 0} lessons)
                        </span>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm py-0 px-2"
                          title="Delete Module"
                          onClick={() => handleDeleteModule(module.id)}
                        >
                          &times;
                        </button>
                      </div>
                    </div>

                    {/* LESSONS ACCORDION ITEMS */}
                    {module.lessons && module.lessons.length > 0 ? (
                      <div className="ps-4 border-start ms-2 mt-2 d-flex flex-column gap-2">
                        {module.lessons.map((lesson, lIdx) => (
                          <div
                            key={lesson.id || lIdx}
                            className="p-2 bg-light rounded-2 d-flex justify-content-between align-items-center small"
                          >
                            <div className="d-flex align-items-center gap-2">
                              <span>&#9654;</span>
                              <span className="fw-semibold">{lesson.title}</span>
                              <span className="badge bg-light text-muted border">
                                {lesson.duration}
                              </span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <span className="badge bg-danger-subtle text-danger border">
                                YouTube Video
                              </span>
                              {lesson.notesPdf && (
                                <span className="badge bg-warning-subtle text-warning-emphasis border">
                                  PDF Notes
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="ps-4 text-muted small mt-2">
                        No video lessons in this module yet. Use the form below to add a YouTube lesson.
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* TWO BOTTOM PANELS (matches reference image: Add YouTube Video & Upload PDF Notes) */}
              <div className="row g-4">
                {/* 1. ADD YOUTUBE VIDEO */}
                <div className="col-md-6">
                  <div className="p-3 bg-white border rounded-3 shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="fs-4 text-danger">&#9654;</span>
                      <div>
                        <h6 className="fw-bold m-0">Add YouTube Video</h6>
                        <small className="text-muted">
                          Embed tutorial video from YouTube
                        </small>
                      </div>
                    </div>

                    <form onSubmit={handleAddVideoLesson}>
                      <div className="mb-2">
                        <label className="form-label small fw-bold">Select Module</label>
                        <select
                          className="form-select form-select-sm"
                          value={selectedModuleForLesson}
                          onChange={(e) => setSelectedModuleForLesson(e.target.value)}
                        >
                          {course.modules?.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-2">
                        <label className="form-label small fw-bold">Lesson Title</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="e.g. Setting up Dev Environment"
                          value={lessonTitle}
                          onChange={(e) => setLessonTitle(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-2">
                        <label className="form-label small fw-bold">YouTube URL</label>
                        <input
                          type="url"
                          className="form-control form-control-sm"
                          placeholder="https://www.youtube.com/watch?v=..."
                          value={youtubeUrl}
                          onChange={(e) => {
                            setYoutubeUrl(e.target.value);
                            setPreviewUrl(formatYouTubeEmbedUrl(e.target.value));
                          }}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold">Duration</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="12:30"
                          value={lessonDuration}
                          onChange={(e) => setLessonDuration(e.target.value)}
                        />
                      </div>

                      {previewUrl && (
                        <div className="mb-3 rounded overflow-hidden border">
                          <iframe
                            src={previewUrl}
                            title="Preview"
                            style={{ width: "100%", height: "150px", border: 0 }}
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                          ></iframe>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn btn-primary btn-sm w-100 fw-bold"
                        style={{ backgroundColor: "#0b72c4", borderColor: "#0b72c4" }}
                      >
                        Add Video Lesson
                      </button>
                    </form>
                  </div>
                </div>

                {/* 2. UPLOAD PDF NOTES */}
                <div className="col-md-6">
                  <div className="p-3 bg-white border rounded-3 shadow-sm h-100">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="fs-4 text-warning">&#128196;</span>
                      <div>
                        <h6 className="fw-bold m-0">Upload PDF Notes</h6>
                        <small className="text-muted">
                          Add study materials (Supports: PDF [Max 50MB])
                        </small>
                      </div>
                    </div>

                    <form onSubmit={handleUploadNotes}>
                      <div className="mb-2">
                        <label className="form-label small fw-bold">Select Module</label>
                        <select
                          className="form-select form-select-sm"
                          value={selectedModuleForNotes}
                          onChange={(e) => setSelectedModuleForNotes(e.target.value)}
                        >
                          {course.modules?.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-2">
                        <label className="form-label small fw-bold">Notes Title</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="e.g. Chapter 1 Architecture Summary"
                          value={notesTitle}
                          onChange={(e) => setNotesTitle(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold">PDF Document</label>
                        <input
                          type="file"
                          accept=".pdf"
                          className="form-control form-control-sm"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setNotesFileName(e.target.files[0].name);
                            }
                          }}
                        />
                        <div className="form-text small">
                          File will be linked and accessible in student notes tab.
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-warning btn-sm w-100 fw-bold text-dark"
                        style={{ backgroundColor: "#f59e0b", borderColor: "#f59e0b" }}
                      >
                        Upload &amp; Link PDF Notes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === "info" && (
            <div className="p-4 bg-white border rounded-3 shadow-sm">
              <h5 className="fw-bold mb-3">Course Information</h5>
              <div className="mb-3">
                <label className="form-label small fw-bold">Course Title</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={course.title}
                  onChange={(e) =>
                    onUpdateCourse({ ...course, title: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Short Description</label>
                <textarea
                  className="form-control"
                  rows={2}
                  defaultValue={course.description}
                  onChange={(e) =>
                    onUpdateCourse({ ...course, description: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Introduction YouTube URL</label>
                <input
                  type="url"
                  className="form-control"
                  defaultValue={course.introYoutubeUrl}
                  onChange={(e) =>
                    onUpdateCourse({
                      ...course,
                      introYoutubeUrl: formatYouTubeEmbedUrl(e.target.value),
                    })
                  }
                />
              </div>

              <button
                type="button"
                className="btn btn-success fw-bold"
                style={{ backgroundColor: "#179a37" }}
                onClick={() => showFeedback("Course details updated!")}
              >
                Save Course Details
              </button>
            </div>
          )}

          {activeSubTab === "materials" && (
            <div className="p-4 bg-white border rounded-3 shadow-sm">
              <h5 className="fw-bold mb-3">Uploaded Course Materials</h5>
              <p className="text-muted small">
                All study files currently attached to modules in this course.
              </p>
              <ul className="list-group">
                {course.modules?.flatMap((m) =>
                  m.lessons?.filter((l) => l.notesPdf).map((l, i) => (
                    <li
                      key={i}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{l.notesPdf}</strong>
                        <div className="text-muted small">Module: {m.title}</div>
                      </div>
                      <span className="badge bg-success-subtle text-success">
                        {l.notesSize || "PDF"}
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}

          {activeSubTab === "assign" && (
            <div className="p-4 bg-white border rounded-3 shadow-sm">
              <h5 className="fw-bold mb-3">Assign Course to Students</h5>
              <p className="text-muted small">
                Grant enrolled student accounts immediate access to this course track.
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="student@growthnest.com"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => showFeedback("Course assigned to student successfully!")}
                >
                  Assign Access
                </button>
              </div>
            </div>
          )}

          {activeSubTab === "preview" && (
            <div className="p-4 bg-white border rounded-3 shadow-sm">
              <h5 className="fw-bold mb-3">Course Live Preview</h5>
              <div className="ratio ratio-16x9 rounded overflow-hidden">
                <iframe
                  src={formatYouTubeEmbedUrl(course.introYoutubeUrl)}
                  title="Course Preview"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
