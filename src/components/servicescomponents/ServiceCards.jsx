import React, { useState } from "react";

const ServiceCardsDark = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
    section: {
      padding: "70px 0",
      background: "#f8fafc",
      borderTop: "1px solid #e2e8f0",
      borderBottom: "1px solid #e2e8f0",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "800",
      color: "#0f172a",
      letterSpacing: "-0.5px",
    },
    subheading: {
      fontSize: "16px",
      color: "#475569",
      maxWidth: "550px",
      margin: "0 auto",
    },
    card: (isHovered) => ({
      background: "#ffffff",
      border: isHovered 
        ? "1px solid #86efac" 
        : "1px solid #e2e8f0",
      borderRadius: "16px",
      padding: "36px",
      transition: "all 0.25s ease",
      transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      boxShadow: isHovered 
        ? "0 10px 25px rgba(0, 0, 0, 0.08)" 
        : "0 4px 14px rgba(0, 0, 0, 0.04)",
      cursor: "pointer",
    }),
    iconWrapper: {
      width: "56px",
      height: "56px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0fdf4",
      border: "1px solid #bbf7d0",
      borderRadius: "12px",
    },
    icon: {
      fontSize: "26px",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "14px",
    },
    divider: {
      width: "44px",
      height: "3px",
      background: "#16a34a",
      borderRadius: "100px",
      margin: "0 0 20px 0",
    },
    description: {
      fontSize: "15px",
      lineHeight: "1.65",
      color: "#475569",
      marginBottom: "22px",
    },
    featureItem: {
      fontSize: "14px",
      color: "#334155",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    button: {
      background: "#16a34a",
      border: "none",
      padding: "10px 22px",
      borderRadius: "8px",
      color: "#ffffff",
      fontWeight: "600",
      fontSize: "14px",
      transition: "all 0.25s ease",
      marginTop: "20px",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(22, 163, 74, 0.2)",
    },
    buttonHover: {
      background: "#15803d",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(22, 163, 74, 0.3)",
    },
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={styles.heading}>
            Enterprise <span className="text-success-corporate">Solutions</span>
          </h2>
          <p style={styles.subheading}>
            Premium IT infrastructure and digital transformation for modern businesses
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div
              style={styles.card(hoveredCard === "hardware")}
              onMouseEnter={() => setHoveredCard("hardware")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>🖥️</span>
              </div>
              <h3 style={styles.cardTitle}>Hardware & Cloud Infrastructure</h3>
              <div style={styles.divider}></div>
              <p style={styles.description}>
                Enterprise-grade hardware solutions including servers,
                networking devices, hybrid cloud setups, and high-performance workstations.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={styles.featureItem}>
                  <span style={{ color: "#16a34a", fontWeight: "bold" }}>⟶</span> Enterprise Multi-Region Servers
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#16a34a", fontWeight: "bold" }}>⟶</span> High-Throughput Networking
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#16a34a", fontWeight: "bold" }}>⟶</span> 24/7 Monitored Infrastructure SLA
                </li>
              </ul>
              <button
                style={{
                  ...styles.button,
                  ...(hoveredCard === "hardware" ? styles.buttonHover : {}),
                }}
              >
                Learn More →
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              style={styles.card(hoveredCard === "software")}
              onMouseEnter={() => setHoveredCard("software")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>⚡</span>
              </div>
              <h3 style={styles.cardTitle}>Custom Software & Cloud Apps</h3>
              <div style={styles.divider}></div>
              <p style={styles.description}>
                Custom software engineering, scalable cloud microservices, and AI/ML
                integration architected for maximum business growth.
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={styles.featureItem}>
                  <span style={{ color: "#16a34a", fontWeight: "bold" }}>⟶</span> Full-Stack React & Node Applications
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#16a34a", fontWeight: "bold" }}>⟶</span> Cloud Automation & DevOps CI/CD
                </li>
                <li style={styles.featureItem}>
                  <span style={{ color: "#16a34a", fontWeight: "bold" }}>⟶</span> Enterprise AI/ML Business Integration
                </li>
              </ul>
              <button
                style={{
                  ...styles.button,
                  ...(hoveredCard === "software" ? styles.buttonHover : {}),
                }}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsDark;
