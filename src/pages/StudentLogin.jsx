import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginStudentApi, registerStudentApi } from "../api/studentApi";
import "../components/studentdashboard/StudentLogin.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("student@growthnest.in");
  const [password, setPassword] = useState("Password@123");
  const [phone, setPhone] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAuthSubmit = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (isRegisterMode && !name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    setLoading(true);

    try {
      let res;
      if (isRegisterMode) {
        res = await registerStudentApi({
          name: name.trim(),
          email: email.trim(),
          password,
          phone: phone.trim(),
        });
        setSuccessMessage("Account created successfully! Logging you in...");
      } else {
        res = await loginStudentApi({
          email: email.trim(),
          password,
        });
      }

      if (res && res.token) {
        localStorage.setItem("gnt_student_token", res.token);
        localStorage.setItem("gnt_student_user", JSON.stringify(res.student));
        setTimeout(() => {
          setLoading(false);
          navigate("/student-dashboard");
        }, 500);
      } else {
        throw new Error(res.message || "Authentication failed");
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message || "Authentication failed. Please verify your details.");
    }
  };

  const handleDemoLogin = () => {
    setIsRegisterMode(false);
    setEmail("student@growthnest.in");
    setPassword("Password@123");
    handleAuthSubmit();
  };

  return (
    <div className="gnt-student-login-container">
      <div className="gnt-student-login-card">
        {/* LOGO & HEADING */}
        <div className="text-center mb-4">
          <div className="gnt-login-logo">
            <span className="gnt-logo-highlight">GrowthNest</span> Tech Solution
          </div>
          <span className="gnt-login-badge">STUDENT LMS PORTAL</span>
          <h2 className="gnt-login-title">
            {isRegisterMode ? "Create Student Account" : "Welcome Back, Learner"}
          </h2>
          <p className="gnt-login-subtitle">
            {isRegisterMode
              ? "Register to enroll in courses and track your certificates."
              : "Log in with your official student credentials to access video lessons."}
          </p>
        </div>

        {/* TAB TOGGLE: LOGIN / REGISTER */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group w-100" role="group">
            <button
              type="button"
              className={`btn btn-sm ${!isRegisterMode ? "btn-success fw-bold" : "btn-outline-secondary"}`}
              style={!isRegisterMode ? { backgroundColor: "#179a37", borderColor: "#179a37" } : {}}
              onClick={() => {
                setIsRegisterMode(false);
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              Log In
            </button>
            <button
              type="button"
              className={`btn btn-sm ${isRegisterMode ? "btn-success fw-bold" : "btn-outline-secondary"}`}
              style={isRegisterMode ? { backgroundColor: "#179a37", borderColor: "#179a37" } : {}}
              onClick={() => {
                setIsRegisterMode(true);
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              New Registration
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="alert alert-danger py-2 px-3 small mb-3" role="alert">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="alert alert-success py-2 px-3 small mb-3" role="alert">
            {successMessage}
          </div>
        )}

        {/* AUTH FORM */}
        <form onSubmit={handleAuthSubmit}>
          {isRegisterMode && (
            <div className="mb-3">
              <label className="form-label gnt-form-label">Full Name</label>
              <input
                type="text"
                className="form-control gnt-form-input"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isRegisterMode}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label gnt-form-label">Student Email Address</label>
            <input
              type="email"
              className="form-control gnt-form-input"
              placeholder="e.g. student@growthnest.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {isRegisterMode && (
            <div className="mb-3">
              <label className="form-label gnt-form-label">Phone Number (Optional)</label>
              <input
                type="tel"
                className="form-control gnt-form-input"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}

          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label className="form-label gnt-form-label">Password</label>
              {!isRegisterMode && (
                <span className="gnt-forgot-link">Default: Password@123</span>
              )}
            </div>
            <input
              type="password"
              className="form-control gnt-form-input"
              placeholder="Enter your password (min 6 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isRegisterMode && (
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberCheck"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label text-muted small" htmlFor="rememberCheck">
                  Remember this device
                </label>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="btn w-100 gnt-login-submit-btn"
            disabled={loading}
          >
            {loading
              ? "Connecting to Database..."
              : isRegisterMode
              ? "Register & Start Learning \u2192"
              : "Log In to Student Portal \u2192"}
          </button>
        </form>

        {/* QUICK ACCESS BUTTON */}
        {!isRegisterMode && (
          <>
            <div className="gnt-demo-divider">
              <span>OR QUICK ACCESS</span>
            </div>

            <button
              type="button"
              className="btn btn-outline-success w-100 gnt-demo-btn"
              onClick={handleDemoLogin}
              disabled={loading}
            >
              &#9889; Official Student Login (1-Click)
            </button>
          </>
        )}

        {/* FOOTER */}
        <div className="text-center mt-4">
          <p className="text-muted small m-0">
            Need course enrollment or account help?{" "}
            <Link to="/getintouch" className="text-success fw-bold">
              Contact Support
            </Link>
          </p>
          <div className="mt-2">
            <Link to="/courses" className="text-muted small text-decoration-underline">
              &larr; Back to Public Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
