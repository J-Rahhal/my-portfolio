import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import Nav from "../components/Nav";
const About = () => {
  return (
    <div className="h-full flex flex-col items-start gap-y-[12rem] ">
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
          About Me
        </motion.h2>
        <Nav
          text1={"Home"}
          link1={"/"}
          text2={"Projects"}
          link2={"/projects"}
        />
      </div>

      <div className="mx-auto bg-stone-400">
        <div className="text-center">
          <TypeAnimation
            sequence={["I'm Joanna Rahal", 1200]}
            speed={15}
            wrapper="span"
            loop:true
            style={{ fontSize: "4em", display: "inline-block " }}
            repeat={Infinity}
            className="text-gray-950 text-center"
          />
        </div>
        <div className="text-center px-12">
          <motion.p
            className="text-md pt-12 text-gray-950 leading-8 md:w-3/4 md:mx-auto lg:w-1/2 "
            initial={{ x: -1000, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          >
            Hello, I'm a{" "}
            <span className="font-extrabold underline underline-offset-8">
              FullStack developer
            </span>{" "}
            who enjoys creating user-friendly web applications. I've always been
            captivated by technology. My passion fuels my dedication to help
            brands, companies, and organizations bring their digital identities
            to life.
          </motion.p>
        </div>

        <div className="h-1/4 w-full pt-[8rem]">
          <motion.div
            className="text-center"
            initial={{ x: -1000, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
          >
            <h2 className="font-bold text-3xl">My Skills</h2>
          </motion.div>

          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
