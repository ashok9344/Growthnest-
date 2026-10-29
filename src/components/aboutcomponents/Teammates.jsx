import React from "react";
import { motion } from "framer-motion";
import ceoImage from "../../assets/about/ceoImage.jpeg";
import managerImage from "../../assets/about/managerImage.jpeg";
import admin2 from "../../assets/about/admin2.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./teammates.css";

export const Teammates = () => {
  const team = [
    {
      name: "Sathish",
      role: "CEO",
      badge: "Founder & CEO",
      photo: managerImage,
      description: "Leading strategic vision, technology roadmap, and organizational growth.",
    },
    {
      name: "Surya Prabha",
      role: "Growth Supporter",
      badge: "Core Leadership",
      photo: ceoImage,
      description: "Driving community impact, talent nurturing, and student empowerment.",
    },
    {
      name: "Venkadesh",
      role: "Growth Supporter",
      badge: "Core Leadership",
      photo: admin2,
      description: "Accelerating operations, client relations, and delivery excellence.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="container py-5 team-section">
      {/* Animated Header */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="tech-pill mb-2">
          <span className="tech-pill-dot"></span>
          CORE LEADERSHIP
        </span>
        <h2 className="display-6 fw-bold mt-2">
          Our <span className="text-success-corporate">Team</span>
        </h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "580px", fontSize: "1.05rem" }}>
          Meet the passionate minds driving GrowthNest forward with innovation, excellence, and dedication.
        </p>
        <div className="team-title-divider"></div>
      </motion.div>

      {/* Animated Cards Grid */}
      <motion.div
        className="row g-4 justify-content-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {team.map((member, index) => (
          <motion.div
            className="col-11 col-sm-6 col-lg-4"
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="team-card-modern">
              {/* Photo Box */}
              <div className="team-photo-wrapper">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                />
                <div className="team-badge-tag">{member.badge}</div>
                <div className="team-photo-gradient"></div>
              </div>

              {/* Body */}
              <div className="team-card-content text-center">
                <h4 className="fw-bold mb-1 team-name">{member.name}</h4>
                <div className="team-role-wrap mb-2">
                  <span className="team-role-chip">{member.role}</span>
                </div>
                <p className="text-muted small mb-0 px-2 team-desc">
                  {member.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
