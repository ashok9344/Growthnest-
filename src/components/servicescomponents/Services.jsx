import React, { useEffect, useState, useRef } from "react";
import servicesImage from "../../assets/servicesimages/services.png";
import { FaGlobe, FaMobileAlt, FaProductHunt } from "react-icons/fa";
import {
  MdDesignServices,
} from "react-icons/md";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Website Development",
      icon: <FaGlobe size={36} />,
      gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "CMS Integration",
      ],
      description:
        "We specialize in professional website development, creating responsive, user-friendly, and visually engaging websites that help businesses build a strong online presence.",
      color: "#16a34a",
    },
    {
      id: 2,
      title: "Mobile Apps",
      icon: <FaMobileAlt size={36} />,
      gradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
      features: [
        "iOS & Android",
        "Native Performance",
        "User Friendly",
        "App Store Ready",
      ],
      description:
        "Our mobile app development focuses on delivering high-performance, intuitive, and scalable applications for both Android and iOS platforms, ensuring seamless user experiences.",
      color: "#0284c7",
    },
    {
      id: 3,
      title: "Own Products",
      icon: <FaProductHunt size={36} />,
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      features: [
        "Innovative Solutions",
        "Cutting-edge Tech",
        "Value Driven",
        "Scalable",
      ],
      description:
        "We also design and develop our own innovative products, combining creativity and advanced technology to solve real-world problems and deliver value-driven solutions.",
      color: "#10b981",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="position-relative overflow-hidden"
      style={{
        background: "#ffffff",
        padding: "70px 0",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <div className="mb-3">
                <span className="tech-pill">
                  <span className="tech-pill-dot"></span>
                  WHAT WE OFFER
                </span>
              </div>

              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0f172a" }}
              >
                Our <span className="text-success-corporate">Services</span>
              </h2>

              <p
                className="lead mb-4"
                style={{ color: "#475569", lineHeight: "1.7", fontSize: "1.05rem" }}
              >
                We are an innovative IT startup specializing in website
                development, mobile applications, and our own cutting‑edge
                digital products. Our focus is on delivering scalable,
                user‑friendly, and high‑performance solutions that help
                businesses grow.
              </p>

              {/* Stats Section */}
              <div className="row g-3 mt-3">
                {[
                  { number: "150+", label: "Projects Completed", icon: "🚀" },
                  { number: "50+", label: "Happy Clients", icon: "😊" },
                  { number: "24/7", label: "Support", icon: "💪" },
                ].map((stat, idx) => (
                  <div key={idx} className="col-4">
                    <div
                      className="text-center p-3 rounded-3"
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <div className="fs-3 mb-1">{stat.icon}</div>
                      <div
                        className="fs-4 fw-bold"
                        style={{ color: "#16a34a" }}
                      >
                        {stat.number}
                      </div>
                      <div className="small text-secondary">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(40px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              <img
                src={servicesImage}
                alt="Startup illustration"
                className="img-fluid"
                style={{
                  maxHeight: "460px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="row g-4 mt-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div
                className="corporate-service-card h-100 p-4"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon Circle */}
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: service.gradient,
                    color: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transition: "transform 0.25s ease",
                    transform: hoveredCard === service.id ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-center fw-bold mb-3"
                  style={{
                    fontSize: "20px",
                    color: "#0f172a",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-center text-muted mb-4"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#475569",
                  }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-2">
                  <div className="row g-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="col-6">
                        <div
                          className="d-flex align-items-center gap-2 p-2 rounded"
                          style={{
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          <MdDesignServices
                            size={14}
                            color={service.color}
                          />
                          <span style={{ fontSize: "12px", color: "#334155", fontWeight: "500" }}>
                            {feature}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .corporate-service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .corporate-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border-color: #86efac;
        }
      `}</style>
    </section>
  );
};

export default Services;
