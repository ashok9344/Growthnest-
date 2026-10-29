import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaGamepad,
  FaRocket,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Events = () => {
  const events = [
    {
      title: "7-Day Foundation Program",
      description:
        "Kickstart your journey with a powerful 7-day structured learning program with live mentorship.",
      icon: <FaRocket />,
    },
    {
      title: "Weekly Tech Hackathons",
      description:
        "Stay consistent with engaging weekly code sessions, architecture reviews, and community builds.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Weekend Innovation Meets",
      description:
        "Explore freelancing, open-source contribution, client project demos, and startup opportunities.",
      icon: <FaBriefcase />,
    },
    {
      title: "Tech Culture & Team Gaming",
      description:
        "Interactive team activities, logic puzzles, and gaming sessions designed to refresh and connect.",
      icon: <FaGamepad />,
    },
  ];

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="events-section py-5 position-relative">
      <Container className="py-4">
        {/* HERO */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="tech-pill mb-3">
            <span className="tech-pill-dot"></span>
            COMMUNITY & WORKSHOPS
          </span>
          <h1 className="fw-bold display-5 mb-3" style={{ color: "#0f172a" }}>
            Discover Our <span className="text-success-corporate">Events</span>
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: "600px", color: "#475569" }}>
            Learn, build, network, and explore exciting production opportunities every week 🚀
          </p>
        </motion.div>

        {/* EVENTS GRID */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4">
            {events.map((event, index) => (
              <Col xs={12} md={6} lg={3} key={index}>
                <motion.div variants={cardVariant} className="h-100">
                  <Card className="corporate-event-card h-100 text-center p-4">
                    <div className="corporate-icon-box mb-3">
                      {event.icon}
                    </div>

                    <Card.Body className="p-0 d-flex flex-column justify-content-between">
                      <Card.Title className="fw-bold fs-5 mb-2" style={{ color: "#0f172a" }}>
                        {event.title}
                      </Card.Title>

                      <Card.Text className="small" style={{ color: "#475569", lineHeight: "1.6" }}>
                        {event.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      {/* STYLES */}
      <style>{`
        .events-section {
          background: #ffffff;
          min-height: 80vh;
        }

        .corporate-event-card {
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0 !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
        }

        .corporate-event-card:hover {
          transform: translateY(-4px);
          border-color: #86efac !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .corporate-icon-box {
          font-size: 24px;
          width: 56px;
          height: 56px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          border-radius: 12px;
        }
      `}</style>
    </section>
  );
};

export default Events;
