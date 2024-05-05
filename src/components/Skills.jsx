import { motion } from "framer-motion";
import { skills } from "../data/skills";
import "../index.css";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Skills = () => {
  return (
    <>
      <motion.div
        className="h-full w-full pt-12 grid gap-4 md:gap-6 lg:w-3/4 lg:mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gridTemplateRows: "auto",
        }}
        initial={{ opacity: 0, scale: 0, x: -500 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1, scale: 0.95 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill.iconSrc}
              className="bento-box  text-gray-950 border-gray-950"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",

                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <img
                src={skill.iconSrc}
                alt={skill.title}
                style={{
                  maxWidth: "80px",
                  maxHeight: "80px",
                  marginBottom: "10px",
                }}
              />
              <h3 className="text-center text-xs font-semibold lg:text-2xl">
                {skill.title}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};
export default Skills;
