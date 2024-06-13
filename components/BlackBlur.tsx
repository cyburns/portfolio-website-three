import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const BlackBlur = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black pointer-events-none -z-10"
      style={{ opacity }}
    />
  );
};

export default BlackBlur;
