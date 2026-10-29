import "./vision.css";

const VisionMission = () => {
  return (
    <section className="py-5 vision-section">
      <div className="container">
        {/* Title */}
        <h1 className="text-center fw-bold mb-5 fade-in">
          More <span className="text-success-corporate">About</span> Us 🌍
        </h1>

        <div className="row g-4">
          {/* Vision */}
          <div className="col-md-6">
            <div className="vision-card fade-left">
              <div className="icon">🌟</div>

              <h4 className="fw-bold text-center mb-3">Vision</h4>

              <p className="fs-5">
                To build a dynamic IT ecosystem where innovative startups thrive
                and aspiring professionals grow into skilled technology leaders,
                driving digital transformation globally.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="col-md-6">
            <div className="vision-card fade-right">
              <div className="icon">🚀</div>

              <h4 className="fw-bold text-center mb-3">Mission</h4>

              <p className="fs-5">
                To empower businesses by delivering cutting-edge IT solutions
                while nurturing talent through career-focused training,
                real-world project experience, and continuous learning —
                bridging the gap between innovation and employability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
