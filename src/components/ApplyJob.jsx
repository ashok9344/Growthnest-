import React, { useState } from "react";
import { applyJob } from "../api/jobApi";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const ApplyJob = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });

    setErrors({ ...errors, [name]: "" });
    setApiError("");
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full name is required";
      if (!formData.email) newErrors.email = "Valid email is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
    }

    if (step === 2) {
      if (!formData.position) newErrors.position = "Please select a role";
      if (!formData.resume) newErrors.resume = "Resume file is required";
    }

    if (step === 3) {
      if (!formData.coverLetter) newErrors.coverLetter = "Brief note or cover letter is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      setLoading(true);
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await applyJob(data);

      setSuccess("Application submitted successfully! Our engineering talent team will review and connect with you.");
      setStep(1);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        coverLetter: "",
      });
    } catch {
      setApiError("Submission encountered an issue. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="apply-section position-relative">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="tech-pill mb-3">
            <span className="tech-pill-dot"></span>
            FAST APPLICATION
          </span>
          <h2 className="display-5 fw-bold mb-2" style={{ color: "#0f172a" }}>
            Apply for <span className="text-success-corporate">Career Roles</span>
          </h2>
          <p className="text-muted">
            Complete the 3 quick steps below to join our elite engineering network.
          </p>
        </motion.div>

        {/* STATUS NOTICES */}
        {success && (
          <div className="alert alert-custom-success mb-4 d-flex align-items-center gap-2">
            <FaCheckCircle size={18} />
            <span>{success}</span>
          </div>
        )}
        {apiError && (
          <div className="alert alert-custom-error mb-4 d-flex align-items-center gap-2">
            <FaExclamationCircle size={18} />
            <span>{apiError}</span>
          </div>
        )}

        {/* STEP INDICATOR */}
        <div className="stepper mb-4">
          {[
            { num: 1, label: "Personal Info" },
            { num: 2, label: "Role & CV" },
            { num: 3, label: "Cover Note" }
          ].map((s) => (
            <div key={s.num} className="d-flex flex-column align-items-center gap-2">
              <div className={`step-circle ${step >= s.num ? "active" : ""}`}>
                {s.num}
              </div>
              <span className={`step-label small ${step >= s.num ? "text-dark fw-bold" : "text-muted"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* FORM CARD */}
        <motion.div className="form-card" layout>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="d-flex flex-column gap-3"
                >
                  <div>
                    <label className="form-label small fw-bold">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. John Doe"
                      className={`form-control form-control-purple ${errors.fullName && "is-invalid"}`}
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                    {errors.fullName && <div className="text-danger small mt-1">{errors.fullName}</div>}
                  </div>

                  <div>
                    <label className="form-label small fw-bold">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className={`form-control form-control-purple ${errors.email && "is-invalid"}`}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                  </div>

                  <div>
                    <label className="form-label small fw-bold">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className={`form-control form-control-purple ${errors.phone && "is-invalid"}`}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="d-flex flex-column gap-3"
                >
                  <div>
                    <label className="form-label small fw-bold">Desired Position *</label>
                    <select
                      name="position"
                      className={`form-select form-control-purple ${errors.position && "is-invalid"}`}
                      value={formData.position}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Position</option>
                      <optgroup label="IT Engineering & Tech">
                        <option>Junior Flutter Developer</option>
                        <option>Frontend Developer (React/Next)</option>
                        <option>Backend Developer (Node/Python)</option>
                        <option>Cloud / DevOps Engineer</option>
                        <option>UI/UX Product Designer</option>
                        <option>Technical Trainer / Mentor</option>
                      </optgroup>
                      <optgroup label="Data Operations & Image Analysis (Non-IT)">
                        <option>Data Entry Specialist / Operator</option>
                        <option>AI Image Analysis & Annotation Specialist</option>
                        <option>Healthcare & Records Data Processing Executive</option>
                        <option>Image Quality Audit & Verification Analyst</option>
                        <option>Document Digitization & OCR Executive</option>
                        <option>E-Commerce Catalog & Product Image Tagging Associate</option>
                      </optgroup>
                    </select>
                    {errors.position && <div className="text-danger small mt-1">{errors.position}</div>}
                  </div>

                  <div>
                    <label className="form-label small fw-bold">Upload Resume / CV (PDF/DOCX) *</label>
                    <input
                      type="file"
                      name="resume"
                      className={`form-control form-control-purple ${errors.resume && "is-invalid"}`}
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                    />
                    {errors.resume && <div className="text-danger small mt-1">{errors.resume}</div>}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="d-flex flex-column gap-3"
                >
                  <div>
                    <label className="form-label small fw-bold">Cover Note / Introduction *</label>
                    <textarea
                      rows="4"
                      name="coverLetter"
                      placeholder="Tell us about your experience, tech stacks, or why you want to work with GrowthNest..."
                      className={`form-control form-control-purple ${errors.coverLetter && "is-invalid"}`}
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                    />
                    {errors.coverLetter && <div className="text-danger small mt-1">{errors.coverLetter}</div>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BUTTONS */}
            <div className="d-flex gap-3 mt-4">
              {step > 1 && (
                <button
                  type="button"
                  className="btn btn-back-purple px-4"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  className="btn btn-action-purple w-100"
                  onClick={handleNext}
                >
                  Next Step →
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn btn-action-purple w-100" 
                  disabled={loading}
                >
                  {loading ? "Submitting Application..." : "Submit Application 🚀"}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>

      {/* STYLES */}
      <style>{`
        .apply-section {
          padding: 60px 0;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .form-card {
          max-width: 620px;
          margin: auto;
          background: #ffffff;
          padding: 36px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .form-control-purple {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a !important;
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 0.94rem;
          transition: all 0.2s ease;
        }

        .form-control-purple:focus {
          background: #ffffff;
          border-color: #16a34a;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);
          color: #0f172a !important;
        }

        .form-control-purple::placeholder {
          color: #94a3b8;
        }

        .form-control-purple option {
          background: #ffffff;
          color: #0f172a;
        }

        .btn-action-purple {
          background: #16a34a;
          color: #ffffff;
          font-weight: 600;
          padding: 12px;
          border-radius: 8px;
          border: none;
          box-shadow: 0 2px 6px rgba(22, 163, 74, 0.25);
          transition: all 0.2s ease;
        }

        .btn-action-purple:hover {
          background: #15803d;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .btn-back-purple {
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          color: #334155;
          font-weight: 600;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .btn-back-purple:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        /* STEPPER */
        .stepper {
          display: flex;
          justify-content: center;
          gap: 36px;
        }

        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #cbd5e1;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .step-circle.active {
          background: #16a34a;
          border-color: #16a34a;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(22, 163, 74, 0.3);
        }

        .alert-custom-success {
          background: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 12px 18px;
        }

        .alert-custom-error {
          background: #fee2e2;
          color: #b91c1c;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 12px 18px;
        }
      `}</style>
    </section>
  );
};

export default ApplyJob;
