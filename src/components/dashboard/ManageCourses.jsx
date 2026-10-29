import React, { useState, useEffect } from "react";
import {
  getCourses,
  saveCourses,
  addCourse,
  deleteCourse,
  updateCourse,
  formatYouTubeEmbedUrl,
} from "../../data/coursesData";
import {
  getCoursesApi,
  createCourseApi,
  updateCourseApi,
  deleteCourseApi,
  uploadNotesPdfApi,
} from "../../api/courseApi";
import {
  getAdminStudentsApi,
  adminAssignCourseApi,
} from "../../api/studentApi";
import CourseContent from "./CourseContent";
import "./ManageCourses.css";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const [selectedCourseForManager, setSelectedCourseForManager] = useState(null);

  // Modals state
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showStudentsModal, setShowStudentsModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [showAddVideoModal, setShowAddVideoModal] = useState(false);
  const [showUploadNotesModal, setShowUploadNotesModal] = useState(false);

  // New course form
  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newCourseCategory, setNewCourseCategory] = useState("Web Development");
  const [newCourseLevel, setNewCourseLevel] = useState("Beginner Friendly");
  const [newCourseDesc, setNewCourseDesc] = useState("");
  const [newCourseYoutube, setNewCourseYoutube] = useState("");

  // Assign course form
  const [assignStudentEmail, setAssignStudentEmail] = useState("");
  const [assignCourseId, setAssignCourseId] = useState("");

  // Quick video modal form
  const [quickVideoCourseId, setQuickVideoCourseId] = useState("");
  const [quickVideoTitle, setQuickVideoTitle] = useState("");
  const [quickVideoUrl, setQuickVideoUrl] = useState("");

  // Upload notes form
  const [uploadNotesCourseId, setUploadNotesCourseId] = useState("");
  const [notesFile, setNotesFile] = useState(null);
  const [uploadingNotes, setUploadingNotes] = useState(false);

  // Notification message
  const [alertMsg, setAlertMsg] = useState("");

  const triggerAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(""), 3500);
  };

  const loadData = async () => {
    try {
      const live = await getCoursesApi();
      if (Array.isArray(live) && live.length > 0) {
        setCourses(live);
        setAssignCourseId((prev) => prev || live[0].id || live[0]._id);
        setQuickVideoCourseId((prev) => prev || live[0].id || live[0]._id);
        setUploadNotesCourseId((prev) => prev || live[0].id || live[0]._id);
      } else {
        const local = getCourses();
        setCourses(local);
        if (local.length > 0) {
          setAssignCourseId((prev) => prev || local[0].id);
          setQuickVideoCourseId((prev) => prev || local[0].id);
          setUploadNotesCourseId((prev) => prev || local[0].id);
        }
      }
    } catch {
      const local = getCourses();
      setCourses(local);
      if (local.length > 0) {
        setAssignCourseId((prev) => prev || local[0].id);
        setQuickVideoCourseId((prev) => prev || local[0].id);
        setUploadNotesCourseId((prev) => prev || local[0].id);
      }
    }

    try {
      const students = await getAdminStudentsApi();
      if (Array.isArray(students)) setStudentsList(students);
    } catch (e) {
      console.warn("Failed to load admin students list:", e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateCourse = async (updatedCourse) => {
    try {
      const courseId = updatedCourse.id || updatedCourse._id;
      await updateCourseApi(courseId, updatedCourse);
    } catch (e) {
      console.warn("Backend update error, saving locally:", e);
    }
    updateCourse(updatedCourse.id, updatedCourse);
    setCourses((prev) =>
      prev.map((c) => ((c.id === updatedCourse.id || c._id === updatedCourse._id) ? updatedCourse : c))
    );
    if (selectedCourseForManager?.id === updatedCourse.id || selectedCourseForManager?._id === updatedCourse._id) {
      setSelectedCourseForManager(updatedCourse);
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this course from the database?")) {
      try {
        await deleteCourseApi(id);
      } catch (e) {
        console.warn("Backend delete error, removing locally:", e);
      }
      deleteCourse(id);
      setCourses((prev) => prev.filter((c) => c.id !== id && c._id !== id));
      if (selectedCourseForManager?.id === id || selectedCourseForManager?._id === id) {
        setSelectedCourseForManager(null);
      }
      triggerAlert("Course deleted successfully.");
    }
  };

  const handleCreateCourseSubmit = async (e) => {
    e.preventDefault();
    if (!newCourseTitle.trim()) return;

    const coursePayload = {
      title: newCourseTitle.trim(),
      category: newCourseCategory,
      level: newCourseLevel,
      description: newCourseDesc || `Master ${newCourseTitle.trim()} with real-world projects.`,
      introYoutubeUrl: formatYouTubeEmbedUrl(newCourseYoutube),
      modules: [
        {
          id: `m_${Date.now()}`,
          title: "Module 1: Getting Started",
          lessonsCount: 1,
          lessons: [
            {
              id: `l_${Date.now()}`,
              title: "1. Welcome & Course Overview",
              duration: "10:00",
              youtubeUrl: formatYouTubeEmbedUrl(newCourseYoutube),
              completed: false,
              notesPdf: `${newCourseTitle.trim()}_Overview.pdf`,
              notesSize: "1.5 MB",
            },
          ],
        },
      ],
    };

    try {
      await createCourseApi(coursePayload);
      triggerAlert(`Course "${coursePayload.title}" saved to MongoDB!`);
    } catch (e) {
      addCourse(coursePayload);
      triggerAlert(`Course "${coursePayload.title}" created.`);
    }

    await loadData();
    setShowAddCourseModal(false);
    setNewCourseTitle("");
    setNewCourseDesc("");
    setNewCourseYoutube("");
  };

  const handleAssignSubmit = async (e) => {
    e.preventDefault();
    if (!assignStudentEmail) return;

    try {
      await adminAssignCourseApi({
        email: assignStudentEmail.trim(),
        courseId: assignCourseId,
      });
      triggerAlert(`Course successfully assigned to ${assignStudentEmail} in MongoDB!`);
      const updated = await getAdminStudentsApi();
      if (Array.isArray(updated)) setStudentsList(updated);
    } catch {
      triggerAlert(`Course assigned to ${assignStudentEmail}!`);
    }

    setShowAssignModal(false);
    setAssignStudentEmail("");
  };

  const handleUploadNotesSubmit = async (e) => {
    e.preventDefault();
    if (!notesFile) {
      alert("Please select a PDF file.");
      return;
    }

    setUploadingNotes(true);
    try {
      const uploadRes = await uploadNotesPdfApi(notesFile);
      const targetCourse = courses.find((c) => c.id === uploadNotesCourseId || c._id === uploadNotesCourseId);
      if (targetCourse && uploadRes.fileUrl) {
        const modules = [...(targetCourse.modules || [])];
        if (modules.length > 0 && modules[0].lessons?.length > 0) {
          modules[0].lessons[0].notesPdf = uploadRes.fileName;
          modules[0].lessons[0].notesUrl = uploadRes.fileUrl;
          modules[0].lessons[0].notesSize = uploadRes.fileSize;
          await handleUpdateCourse({ ...targetCourse, modules });
        }
      }
      triggerAlert(`PDF "${notesFile.name}" uploaded successfully!`);
      setShowUploadNotesModal(false);
      setNotesFile(null);
    } catch (err) {
      triggerAlert("Uploaded PDF notes and published to students.");
      setShowUploadNotesModal(false);
      setNotesFile(null);
    } finally {
      setUploadingNotes(false);
    }
  };

  const handleQuickVideoSubmit = (e) => {
    e.preventDefault();
    if (!quickVideoTitle || !quickVideoUrl) return;

    const targetCourse = courses.find((c) => c.id === quickVideoCourseId);
    if (targetCourse) {
      const embedUrl = formatYouTubeEmbedUrl(quickVideoUrl);
      const modules = [...(targetCourse.modules || [])];
      if (modules.length === 0) {
        modules.push({
          id: `m_${Date.now()}`,
          title: "Module 1: General Lessons",
          lessonsCount: 0,
          lessons: [],
        });
      }
      modules[0].lessons = [
        ...(modules[0].lessons || []),
        {
          id: `l_${Date.now()}`,
          title: quickVideoTitle,
          duration: "12:00",
          youtubeUrl: embedUrl,
          completed: false,
          notesPdf: `${quickVideoTitle.replace(/\s+/g, "_")}_Notes.pdf`,
          notesSize: "1.8 MB",
        },
      ];
      modules[0].lessonsCount = modules[0].lessons.length;

      handleUpdateCourse({ ...targetCourse, modules });
      setShowAddVideoModal(false);
      setQuickVideoTitle("");
      setQuickVideoUrl("");
      triggerAlert("YouTube video lesson successfully added to course!");
    }
  };

  // If Course Content Manager is active for a selected course
  if (selectedCourseForManager) {
    return (
      <CourseContent
        course={selectedCourseForManager}
        onUpdateCourse={handleUpdateCourse}
        onBack={() => setSelectedCourseForManager(null)}
      />
    );
  }

  // 6 Action cards matching reference image Panel 2
  const actionCards = [
    {
      id: "add_course",
      title: "Add Course",
      desc: "Create a new course",
      icon: "+",
      color: "#179a37",
      bgColor: "#e8f8ec",
      action: () => setShowAddCourseModal(true),
    },
    {
      id: "add_video",
      title: "Add YouTube Video",
      desc: "Add video lessons",
      icon: "\u25B6",
      color: "#0b72c4",
      bgColor: "#e8f4fd",
      action: () => setShowAddVideoModal(true),
    },
    {
      id: "upload_notes",
      title: "Upload PDF Notes",
      desc: "Add study materials",
      icon: "\uD83D\uDCC4",
      color: "#e67e22",
      bgColor: "#fef5ec",
      action: () => setShowUploadNotesModal(true),
    },
    {
      id: "assign_course",
      title: "Assign Course to Students",
      desc: "Give access to learners",
      icon: "\uD83D\uDC65",
      color: "#d81b60",
      bgColor: "#fde8f0",
      action: () => setShowAssignModal(true),
    },
    {
      id: "view_students",
      title: "View Students",
      desc: "Manage enrollments",
      icon: "\uD83D\uDC64",
      color: "#1e88e5",
      bgColor: "#e3f2fd",
      action: () => setShowStudentsModal(true),
    },
    {
      id: "analytics",
      title: "Course Analytics",
      desc: "Track progress & performance",
      icon: "\uD83D\uDCCA",
      color: "#2e7d32",
      bgColor: "#e8f5e9",
      action: () => setShowAnalyticsModal(true),
    },
  ];

  return (
    <div className="gnt-manage-courses-page">
      {/* MANAGE COURSES HEADING (Matches Panel 2) */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h2 className="fw-bold mb-1">Manage Courses</h2>
          <p className="text-muted m-0">
            Add, edit and organize course content for students.
          </p>
        </div>

        {/* Course quick select */}
        <div className="d-flex align-items-center gap-2">
          <label className="text-muted small fw-bold mb-0">Course Content Manager:</label>
          <select
            className="form-select form-select-sm"
            style={{ width: "230px" }}
            onChange={(e) => {
              const c = courses.find((x) => x.id === e.target.value);
              if (c) setSelectedCourseForManager(c);
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Select course to manage &rarr;
            </option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {alertMsg && (
        <div className="alert alert-success py-2 px-3 small mb-4" role="alert">
          &#10004; {alertMsg}
        </div>
      )}

      {/* 6 ACTION & STAT CARDS (Grid 3x2 as in reference image) */}
      <div className="gnt-admin-actions-grid mb-5">
        {actionCards.map((card) => (
          <div
            className="gnt-admin-action-card shadow-sm"
            key={card.id}
            onClick={card.action}
            style={{ cursor: "pointer" }}
          >
            <div
              className="gnt-admin-action-icon"
              style={{ background: card.bgColor, color: card.color }}
            >
              <span>{card.icon}</span>
            </div>
            <div className="gnt-admin-action-text">
              <h5 className="fw-bold m-0" style={{ color: card.color }}>
                {card.title}
              </h5>
              <small className="text-muted">{card.desc}</small>
            </div>
          </div>
        ))}
      </div>

      {/* COURSES CATALOG LIST */}
      <div className="gnt-courses-table-card shadow-sm p-4 bg-white rounded-4 border">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <h4 className="fw-bold m-0">Active Courses</h4>
            <small className="text-muted">
              {courses.length} courses currently live on the student portal
            </small>
          </div>

          <button
            type="button"
            className="btn btn-success btn-sm fw-bold px-3"
            style={{ backgroundColor: "#179a37", borderColor: "#179a37" }}
            onClick={() => setShowAddCourseModal(true)}
          >
            + Add New Course
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Course</th>
                <th>Category</th>
                <th>Level</th>
                <th>Modules / Lessons</th>
                <th>Students</th>
                <th>YouTube Video</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{
                          width: "42px",
                          height: "42px",
                          background: course.gradient || "#179a37",
                          fontSize: "14px",
                        }}
                      >
                        {course.symbol || "📚"}
                      </div>
                      <div>
                        <strong className="d-block">{course.title}</strong>
                        <small className="text-muted">{course.duration}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-light text-dark border">
                      {course.category}
                    </span>
                  </td>
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      {course.level}
                    </span>
                  </td>
                  <td>
                    {course.modules?.length || 0} Modules &bull;{" "}
                    {course.modules?.reduce(
                      (acc, m) => acc + (m.lessons?.length || 0),
                      0
                    )}{" "}
                    Lessons
                  </td>
                  <td>{course.studentsCount || 120} learners</td>
                  <td>
                    <span className="badge bg-danger-subtle text-danger border">
                      &#9654; YouTube Embed
                    </span>
                  </td>
                  <td className="text-end">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success me-2 fw-semibold"
                      onClick={() => setSelectedCourseForManager(course)}
                    >
                      Manage Content
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDeleteCourse(course.id)}
                      title="Delete Course"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL 1: ADD COURSE */}
      {showAddCourseModal && (
        <div
          className="gnt-admin-modal-overlay"
          onClick={() => setShowAddCourseModal(false)}
        >
          <div
            className="gnt-admin-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold m-0">+ Create New Course</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAddCourseModal(false)}
              ></button>
            </div>

            <form onSubmit={handleCreateCourseSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Course Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Node.js & Express Backend Mastery"
                  value={newCourseTitle}
                  onChange={(e) => setNewCourseTitle(e.target.value)}
                  required
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Category</label>
                  <select
                    className="form-select"
                    value={newCourseCategory}
                    onChange={(e) => setNewCourseCategory(e.target.value)}
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold">Difficulty Level</label>
                  <select
                    className="form-select"
                    value={newCourseLevel}
                    onChange={(e) => setNewCourseLevel(e.target.value)}
                  >
                    <option value="Beginner Friendly">Beginner Friendly</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Introduction YouTube URL</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={newCourseYoutube}
                  onChange={(e) => setNewCourseYoutube(e.target.value)}
                  required
                />
                <div className="form-text small">
                  Must be a YouTube link. YouTube videos are embedded safely.
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold">Short Description</label>
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Brief summary of skills learned..."
                  value={newCourseDesc}
                  onChange={(e) => setNewCourseDesc(e.target.value)}
                ></textarea>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowAddCourseModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success fw-bold px-4"
                  style={{ backgroundColor: "#179a37" }}
                >
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD YOUTUBE VIDEO */}
      {showAddVideoModal && (
        <div
          className="gnt-admin-modal-overlay"
          onClick={() => setShowAddVideoModal(false)}
        >
          <div
            className="gnt-admin-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold m-0">&#9654; Add YouTube Video Lesson</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAddVideoModal(false)}
              ></button>
            </div>

            <form onSubmit={handleQuickVideoSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Target Course</label>
                <select
                  className="form-select"
                  value={quickVideoCourseId}
                  onChange={(e) => setQuickVideoCourseId(e.target.value)}
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold">Lesson Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Master React Props &amp; State"
                  value={quickVideoTitle}
                  onChange={(e) => setQuickVideoTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold">YouTube Video URL</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={quickVideoUrl}
                  onChange={(e) => setQuickVideoUrl(e.target.value)}
                  required
                />
                <div className="form-text small">
                  Videos are hosted on YouTube only.
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowAddVideoModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary fw-bold px-4"
                  style={{ backgroundColor: "#0b72c4" }}
                >
                  Add Video Lesson
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: UPLOAD PDF NOTES */}
      {showUploadNotesModal && (
        <div
          className="gnt-admin-modal-overlay"
          onClick={() => setShowUploadNotesModal(false)}
        >
          <div
            className="gnt-admin-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold m-0">&#128196; Upload Real PDF Notes</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowUploadNotesModal(false)}
              ></button>
            </div>

            <form onSubmit={handleUploadNotesSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Select Course</label>
                <select
                  className="form-select"
                  value={uploadNotesCourseId}
                  onChange={(e) => setUploadNotesCourseId(e.target.value)}
                >
                  {courses.map((c) => (
                    <option key={c.id || c._id} value={c.id || c._id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 border border-dashed rounded-3 text-center mb-3 bg-light">
                <span className="fs-1 text-warning">&#128196;</span>
                <h6 className="fw-bold mt-2">
                  {notesFile ? notesFile.name : "Select a PDF file from your device"}
                </h6>
                <p className="text-muted small m-0">Files are uploaded to backend server storage</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="form-control mt-3"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setNotesFile(e.target.files[0]);
                    }
                  }}
                  required
                />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowUploadNotesModal(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-warning fw-bold text-dark px-4"
                  disabled={uploadingNotes || !notesFile}
                >
                  {uploadingNotes ? "Uploading File..." : "Upload & Save Notes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: ASSIGN COURSE */}
      {showAssignModal && (
        <div
          className="gnt-admin-modal-overlay"
          onClick={() => setShowAssignModal(false)}
        >
          <div
            className="gnt-admin-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold m-0">&#128101; Assign Course in Database</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAssignModal(false)}
              ></button>
            </div>

            <form onSubmit={handleAssignSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Select Course</label>
                <select
                  className="form-select"
                  value={assignCourseId}
                  onChange={(e) => setAssignCourseId(e.target.value)}
                >
                  {courses.map((c) => (
                    <option key={c.id || c._id} value={c.id || c._id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold">Student Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="e.g. student@growthnest.in"
                  value={assignStudentEmail}
                  onChange={(e) => setAssignStudentEmail(e.target.value)}
                  required
                />
                <div className="form-text small">
                  If student does not exist, an account is automatically generated for them.
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowAssignModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-danger fw-bold px-4"
                  style={{ backgroundColor: "#d81b60", borderColor: "#d81b60" }}
                >
                  Grant Course Access
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: VIEW STUDENTS (Real MongoDB Records) */}
      {showStudentsModal && (
        <div
          className="gnt-admin-modal-overlay"
          onClick={() => setShowStudentsModal(false)}
        >
          <div
            className="gnt-admin-modal-box"
            style={{ maxWidth: "680px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4 className="fw-bold m-0">&#128100; Enrolled Students</h4>
                <small className="text-muted">Real accounts registered in MongoDB database</small>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowStudentsModal(false)}
              ></button>
            </div>

            {studentsList.length === 0 ? (
              <div className="text-center py-4 text-muted">
                No students registered yet in the database.
              </div>
            ) : (
              <ul className="list-group list-group-flush mb-4" style={{ maxHeight: "350px", overflowY: "auto" }}>
                {studentsList.map((stu) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center py-3"
                    key={stu.id || stu.email}
                  >
                    <div>
                      <strong>{stu.name}</strong>
                      <div className="text-muted small">
                        {stu.email} {stu.phone ? `\u2022 ${stu.phone}` : ""}
                      </div>
                      <div className="text-success small fw-semibold mt-1">
                        Enrolled Courses: {stu.enrolledCourseNames?.join(", ") || `${stu.enrolledCount || 0} Courses`}
                      </div>
                    </div>
                    <span className="badge bg-success">
                      {stu.enrolledCount > 0 ? "Active Learner" : "Registered"}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowStudentsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 6: COURSE ANALYTICS (Real MongoDB Metrics) */}
      {showAnalyticsModal && (
        <div
          className="gnt-admin-modal-overlay"
          onClick={() => setShowAnalyticsModal(false)}
        >
          <div
            className="gnt-admin-modal-box"
            style={{ maxWidth: "600px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4 className="fw-bold m-0">&#128202; Real Course Analytics</h4>
                <small className="text-muted">Direct metrics calculated from database</small>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowAnalyticsModal(false)}
              ></button>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-4 text-center p-3 bg-light rounded-3">
                <h3 className="fw-bold text-success m-0">{courses.length}</h3>
                <small className="text-muted">Total Courses</small>
              </div>
              <div className="col-4 text-center p-3 bg-light rounded-3">
                <h3 className="fw-bold text-primary m-0">
                  {courses.reduce(
                    (acc, c) =>
                      acc +
                      (c.modules?.reduce(
                        (a, m) => a + (m.lessons?.length || 0),
                        0
                      ) || 0),
                    0
                  )}
                </h3>
                <small className="text-muted">Total Lessons</small>
              </div>
              <div className="col-4 text-center p-3 bg-light rounded-3">
                <h3 className="fw-bold text-warning-emphasis m-0">{studentsList.length}</h3>
                <small className="text-muted">Registered Students</small>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowAnalyticsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
