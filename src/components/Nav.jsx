import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";

const Nav = ({ text1, link1, text2, link2 }) => {
  return (
    <div className="flex justify-between items-center gap-4 md:gap-8 ">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -500 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1, scale: 0.95 }}
        transition={{ duration: 1 }}
      >
        <Link to={link1} className="text-xl">
          <ArrowLeftIcon className="font-bold w-6 inline-block cursor-pointer links md:w-8" />
          {text1}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, x: -500 }}
        animate={{ x: 0 }}
        whileInView={{ opacity: 1, scale: 0.95 }}
        transition={{ duration: 1 }}
      >
        <Link to={link2} className="text-xl">
          {text2}
          <ArrowRightIcon className="font-bold w-6 inline-block cursor-pointer links md:w-8" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Nav;
