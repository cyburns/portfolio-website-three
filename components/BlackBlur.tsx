import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const BlackBlur = () => {
  const { scrollY } = useScroll();
  const fixedDistance = 200;
  const opacity = useTransform(scrollY, [0, fixedDistance], [0, 1]);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black pointer-events-none -z-10"
      style={{ opacity }}
    />
  );
};

export default BlackBlur;
