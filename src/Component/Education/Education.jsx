import React from "react";
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="my-20 education" id="education">
      <h2 className="mb-3 text-3xl text-center text-[#005C78] uppercase">
        Education Details
      </h2>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#F3F7EC", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #005C78" }}
          date="2003-2007"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Diploma in Electrical Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kushtia Polytechnic Institute
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#F3F7EC", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #005C78" }}
          date="1999-2003"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">H.S.C</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Buiragir Chore High School
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
