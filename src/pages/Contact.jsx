import React from "react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Nav from "../components/Nav";
const Contact = () => {
  const [state, handleSubmit] = useForm("myyrllad");

  useEffect(() => {
    if (state.succeeded) {
      const timeoutId = setTimeout(() => {
        window.location.href = "/";
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-2xl font-bold border p-12 leading-10 text-stone-400 bg-gray-950 rounded-md">
          Thank you For your interest!
          <br /> I Will get back to you shortly!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-around gap-56 bg-stone-400">
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
          Contact Me
        </motion.h2>
        <Nav
          link1={"/"}
          text1={"Home"}
          text2={"Projects"}
          link2={"/projects"}
        />
      </div>
      <div className="flex flex-col gap-12 md:gap-18">
        <div className="text-center">
          <TypeAnimation
            sequence={[
              "Interested In Collaborating?",
              1000,
              "Let's Connect",
              1000,
            ]}
            speed={15}
            wrapper="span"
            loop:true
            style={{ fontSize: "3em", display: "inline-block " }}
            repeat={Infinity}
            className="text-gray-950 text-center"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-3/4 mx-auto gap-12 md:w-1/3"
        >
          <label htmlFor="email" className="text-lg">
            Email Address
            <input id="email" type="email" name="email" className="w-full" />
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="text-lg text-stone-400  bg-gray-950"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
