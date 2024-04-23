import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/16/solid";
import experience from "../data/experience";
import { motion } from "framer-motion";
import Nav from "../components/Nav";

const IconComponent = ({ name }) => {
  switch (name) {
    case "AcademicCapIcon":
      return <AcademicCapIcon />;
    case "ComputerDesktopIcon":
      return <ComputerDesktopIcon />;
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-28 bg-stone-400">
      <div className="flex justify-between items-center w-full">
        <motion.h2
          className="text-5xl pl-12 pt-12  lg:text-[4rem] text-gray-950 "
          initial={{ x: -1000, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0,
            duration: 0.8,
          }}
        >
          Freelance and Collaborations
        </motion.h2>
        <Nav
          text1={"About"}
          link1={"/about"}
          text2={"Contact"}
          link2={"/contact"}
        />{" "}
      </div>
      <VerticalTimeline lineColor="#000">
        {experience.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className="vte-education"
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={experience.date}
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<IconComponent name={experience.icon} />}
          >
            <h3 className="font-bold text-xl">{experience.title}</h3>
            <p>{experience.description}</p>
            <p className="font-bold">{experience.Location}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
