import React from "react";
import Whoweare from "../components/aboutcomponents/Whoweare";
import { Teammates } from "../components/aboutcomponents/Teammates";
import VisionMission from "../components/aboutcomponents/VisionMission";
import { OurTeam } from "../components/aboutcomponents/OurTeam";

const about = () => {
  return (
    <div>
      <Whoweare />
      <Teammates />
      <VisionMission />
      {/* <OurTeam/> */}
    </div>
  );
};

export default about;
