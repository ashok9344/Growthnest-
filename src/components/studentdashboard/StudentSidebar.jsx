import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentSidebar.css";

const StudentSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("gnt_student_token");
    localStorage.removeItem("gnt_student_user");
    navigate("/courses");
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "\uD83C\uDFE0" },
    { id: "courses", label: "My Courses", icon: "\uD83D\uDCD6" },
    { id: "certificates", label: "Certificates", icon: "\uD83C\uDFC6" },
    { id: "notes", label: "Notes", icon: "\uD83D\uDCDD" },
    { id: "progress", label: "Progress", icon: "\uD83D\uDCCA" },
    { id: "settings", label: "Settings", icon: "\u2699\uFE0F" },
  ];

  return (
    <aside className="gnt-student-sidebar">
      {/* BRAND */}
      <div className="gnt-student-brand">
        <Link to="/courses" className="text-decoration-none">
          <div className="gnt-brand-name">
            <span>GrowthNest</span>
          </div>
          <div className="gnt-brand-sub">Tech Solution</div>
        </Link>
      </div>

      {/* NAV LINKS */}
      <nav className="gnt-student-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`gnt-nav-btn ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="gnt-nav-icon">{item.icon}</span>
            <span className="gnt-nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* LOGOUT AT BOTTOM */}
      <div className="gnt-student-sidebar-footer">
        <button
          type="button"
          className="gnt-logout-btn"
          onClick={handleLogout}
        >
          <span className="gnt-nav-icon">&#128682;</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default StudentSidebar;
