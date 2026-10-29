import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaCheckCircle, FaBuilding } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const clientReviews = [
  {
    name: "Rajesh Murugan",
    role: "Director of Digital Operations",
    company: "RetailSync Global",
    project: "Custom Multi-Tenant ERP & Cloud Architecture",
    quote: "GrowthNest architected and delivered our multi-branch enterprise ERP platform in under 12 weeks. Their agile sprint communication, Git discipline, and post-launch SLA monitoring have been exceptional.",
    stars: 5,
    tag: "Enterprise SaaS"
  },
  {
    name: "Dr. Anand Vasudevan",
    role: "Head of AI & Data Operations",
    company: "VisionTech Innovations",
    project: "Computer Vision Image Annotation & QA",
    quote: "We outsourced our AI training dataset annotation and image defect tagging to GrowthNest. They labeled and verified over 150,000 polygon image bounding boxes with 99.7% benchmark accuracy on schedule.",
    stars: 5,
    tag: "AI & Image Analysis"
  },
  {
    name: "Sneha Krishnan",
    role: "Co-Founder & Product Head",
    company: "FastRoute Logistics",
    project: "Cross-Platform Mobile App (Flutter & GPS)",
    quote: "From initial UI/UX prototypes to native iOS and Android apps with live GPS telematics, GrowthNest delivered a seamless mobile experience for our delivery fleet. Reliable, responsive, and highly skilled.",
    stars: 5,
    tag: "Mobile App Development"
  },
  {
    name: "Mohamed Farook",
    role: "Chief Technology Officer",
    company: "CloudMatrix Systems",
    project: "Cloud DevOps & Microservices Engine",
    quote: "Finding an IT engineering partner that provides daily commit visibility, zero-downtime CI/CD deployments, and proactive SLA support was tough until we onboarded GrowthNest. They exceeded our expectations.",
    stars: 5,
    tag: "Cloud Native & DevOps"
  },
];

const Review = () => {
  return (
    <section className="enterprise-review-section py-5">
      <Container className="py-3">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="tech-pill mb-2">
            <span className="tech-pill-dot"></span>
            CLIENT TESTIMONIALS & SUCCESS STORIES
          </span>
          <h2 className="display-6 fw-bold mt-2 text-dark">
            What Business Leaders Say About <span style={{ color: "#16a34a" }}>Our Delivery</span>
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "680px", fontSize: "1.05rem" }}>
            Read how businesses, startups, and enterprise product teams partner with GrowthNest Tech Solution to build mission-critical software and scale their digital operations.
          </p>

          <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
            <div className="d-flex text-warning fs-5">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span className="fw-bold text-dark">4.9 / 5.0 Client Satisfaction</span>
            <span className="text-secondary small">• 25+ Completed Enterprise Deliverables</span>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-5"
        >
          {clientReviews.map((rev, index) => (
            <SwiperSlide key={index}>
              <div 
                className="corporate-review-card h-100 d-flex flex-column justify-content-between p-4 rounded-4"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.25s ease"
                }}
              >
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span 
                      className="badge px-2 py-1 rounded-pill small fw-semibold"
                      style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0", fontSize: "0.75rem" }}
                    >
                      {rev.tag}
                    </span>
                    <div className="d-flex text-warning">
                      {[...Array(rev.stars)].map((_, i) => (
                        <FaStar key={i} size={13} className="me-1" />
                      ))}
                    </div>
                  </div>

                  <FaQuoteLeft className="text-success opacity-50 mb-2 fs-4" />
                  
                  <p className="text-secondary small mb-4" style={{ lineHeight: "1.65", minHeight: "90px" }}>
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-3 border-top border-light-subtle">
                  <h6 className="fw-bold text-dark mb-0">{rev.name}</h6>
                  <span className="text-secondary small d-block">{rev.role}</span>
                  <div className="d-flex align-items-center gap-1 text-success small fw-semibold mt-1">
                    <FaBuilding size={11} />
                    <span>{rev.company}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style>{`
        .enterprise-review-section {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 70px 0;
        }

        .corporate-review-card:hover {
          transform: translateY(-4px);
          border-color: #86efac !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
        }

        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          opacity: 0.8 !important;
        }

        .swiper-pagination-bullet-active {
          background: #16a34a !important;
          width: 20px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default Review;
