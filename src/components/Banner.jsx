import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const textVariants = {
    hidden: { x: "-100%", y: "-100%" },
    visible: {
      x: 0,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="mt-2 p-4 flex flex-col gap-2  lg:mt-0 lg:px-12 xl:mt-16 overflow-hidden absolute text-gray-950">
      <motion.h1
        className="text-[3.5rem] md:text-[6rem] lg:text-[8rem]"
        initial={{ x: -1000, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 1,
        }}
      >
        FullStack
      </motion.h1>
      <motion.h1
        className="text-center  text-[3.5rem] md:text-[6rem] lg:text-[8rem]"
        initial={{ y: 1000, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 1,
        }}
      >
        Developer
      </motion.h1>
    </div>
  );
};

export default Banner;
