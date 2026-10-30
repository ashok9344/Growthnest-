import React from "react";
import FrontPage from "../components/homecomponents/FrontPage";
import Offering from "../components/homecomponents/Offering";
import { ProjectShowCase } from "../components/homecomponents/ProjectShowCase";
import RealtimeProject from "../components/homecomponents/RealtimeProject";
import MobileProjects from "../components/homecomponents/MobileProjects";
import Review from "../components/homecomponents/Review";
import { JobOffered } from "../components/homecomponents/JobOffered";
import Pastworks from "../components/homecomponents/Pastworks";
import GetinTouch from "../components/GetinTouch";

const Home = () => {
  return (
    <div className="home-page-wrapper">
      {/* 1. Hero Section - Client Value Proposition */}
      <FrontPage />

      {/* 2. Core IT Solutions & Services (What We Build For Clients) */}
      <Offering />

      {/* 3. Featured Production Projects & Client Case Studies (Proof) */}
      <ProjectShowCase />

      {/* 4. Client Engagement Models (Fixed-Price, Dedicated Teams, BPO) */}
      <RealtimeProject />

      {/* 5. Mobile & Cross-Platform Production Applications */}
      <MobileProjects />

      {/* 6. Verified Client Testimonials & B2B Success Stories */}
      <Review />

      {/* 7. Enterprise Engineering Standards & Security */}
      <JobOffered />

      {/* 8. Institutional MoUs & Outreach */}
      <Pastworks />

      {/* 9. Project Proposal & Free Cost Estimate Form */}
      <GetinTouch isEmbedded={true} />
    </div>
  );
};

export default Home;
