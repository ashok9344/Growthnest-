import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ManageCourses from "./ManageCourses";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("courses");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({
    register: [],
    contact: [],
    job: [],
    meeting: [],
  });
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH ALL APIs AT ONCE
  useEffect(() => {
    const fetchData = async () => {
      try {
        const safeFetchJson = async (url) => {
          try {
            const res = await fetch(url);
            const ct = res.headers.get("content-type") || "";
            if (ct.includes("application/json")) {
              return await res.json();
            }
            return { data: [] };
          } catch {
            return { data: [] };
          }
        };

        const [register, contact, job, meeting] = await Promise.all([
          safeFetchJson("https://gnt-official-website-backend.onrender.com/api/register"),
          safeFetchJson("https://gnt-official-website-backend.onrender.com/api/contact"),
          safeFetchJson("https://gnt-official-website-backend.onrender.com/api/apply-job"),
          safeFetchJson("https://gnt-official-website-backend.onrender.com/api/meetings"),
        ]);

        setData({
          register: register.data || [],
          contact: contact.data || [],
          job: job.data || [],
          meeting: meeting.data || [],
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 DELETE FUNCTION
  const handleDelete = async (type, id) => {
    try {
      await fetch(`https://gnt-official-website-backend.onrender.com/api/${type}/${id}`, {
        method: "DELETE",
      });

      setData((prev) => ({
        ...prev,
        [type]: prev[type].filter((item) => item.id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 CARD RENDER FOR EXISTING TABS
  const renderCards = () => {
    const current = (data[activeTab] || []).filter((item) => {
      if (!searchQuery) return true;
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    if (loading) return <p className="text-muted p-3">Loading data from backend...</p>;
    if (!current.length) return <p className="text-muted p-3">No {activeTab} data found</p>;

    return (
      <div className="row g-4">
        <AnimatePresence>
          {current.map((item) => (
            <motion.div
              key={item.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card shadow-sm border-0 h-100"
              >
                <div className="card-body p-4">
                  {Object.entries(item).map(
                    ([key, value]) =>
                      key !== "id" && (
                        <p key={key} className="mb-2 small">
                          <strong className="text-capitalize">{key}:</strong>{" "}
                          {key === "resume" ? (
                            <span className="text-success fw-bold">{value}</span>
                          ) : (
                            String(value)
                          )}
                        </p>
                      ),
                  )}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-outline-danger btn-sm mt-3 w-100 fw-bold"
                    onClick={() => handleDelete(activeTab, item.id)}
                  >
                    Delete Entry
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  };

  const navTabs = [
    { id: "courses", label: "Manage Courses", icon: "📚" },
    { id: "register", label: "Registrations", icon: "📋" },
    { id: "contact", label: "Contact Inquiries", icon: "📩" },
    { id: "job", label: "Job Applications", icon: "💼" },
    { id: "meeting", label: "Scheduled Meetings", icon: "📅" },
  ];

  return (
    <div className="d-flex flex-column flex-lg-row admin-container">
      {/* SIDEBAR (Matches Panel 2) */}
      <motion.div
        initial={{ x: -180 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        className="admin-sidebar p-3 d-flex flex-column"
      >
        {/* BRAND */}
        <div className="admin-brand mb-4 pb-3 border-bottom border-light-subtle">
          <Link to="/" className="text-decoration-none">
            <h4 className="text-white fw-bold m-0">GrowthNest</h4>
            <span className="text-success-emphasis small fw-semibold" style={{ color: "#74d989" }}>
              Tech Solution &bull; Admin
            </span>
          </Link>
        </div>

        {/* NAVIGATION TABS */}
        <div className="admin-nav-list flex-fill d-flex flex-column gap-1">
          {navTabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              className={`btn text-start d-flex align-items-center gap-2 mb-1 py-2 px-3 fw-semibold ${
                activeTab === tab.id
                  ? "btn-success text-white"
                  : "text-white-50 btn-outline-dark border-0"
              }`}
              style={
                activeTab === tab.id
                  ? { backgroundColor: "#179a37", borderColor: "#179a37" }
                  : {}
              }
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* SIDEBAR FOOTER / LOGOUT */}
        <div className="pt-3 border-top border-light-subtle mt-auto">
          <button
            type="button"
            className="btn btn-outline-light btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={() => navigate("/courses")}
          >
            <span>&#128682;</span>
            <span>Exit to Website</span>
          </button>
        </div>
      </motion.div>

      {/* RIGHT MAIN AREA */}
      <div className="flex-fill d-flex flex-column" style={{ minWidth: 0 }}>
        {/* TOP HEADER BAR (Matches reference Panel 2) */}
        <header className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center flex-wrap gap-3">
          {/* SEARCH BAR */}
          <div className="d-flex align-items-center" style={{ maxWidth: "360px", width: "100%" }}>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light border-end-0">
                &#128269;
              </span>
              <input
                type="text"
                className="form-control bg-light border-start-0"
                placeholder="Search courses, students, entries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* ADMIN PROFILE & NOTIFICATIONS */}
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
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="Admin Avatar"
                className="rounded-circle border"
                style={{ width: "36px", height: "36px", objectFit: "cover" }}
              />
              <div className="d-none d-sm-block text-start" style={{ lineHeight: "1.2" }}>
                <span className="d-block fw-bold small text-dark">Admin</span>
                <span className="text-muted" style={{ fontSize: "11px" }}>
                  Super Admin
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="admin-content p-4 flex-fill"
          style={{ background: "#f8fafc" }}
        >
          {activeTab === "courses" ? (
            <ManageCourses />
          ) : (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="mb-1 text-capitalize fw-bold">{activeTab} Inquiries &amp; Records</h3>
                  <small className="text-muted">
                    Manage real-time submissions received through the website.
                  </small>
                </div>
              </div>
              {renderCards()}
            </div>
          )}
        </motion.div>
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .admin-container {
          min-height: 100vh;
          background: #f8fafc;
        }

        .admin-sidebar {
          width: 250px;
          background: #0f1c16;
          flex-shrink: 0;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .admin-sidebar button {
          border-radius: 8px;
          transition: all 0.2s;
        }

        @media (max-width: 991px) {
          .admin-sidebar {
            width: 100%;
          }

          .admin-nav-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .admin-nav-list button {
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
};

export default Admin;
