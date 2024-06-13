"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 33,
        y: mousePosition.y - 35,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 400,
      }}
      className="fixed top-0 left-0 z-50 pointer-events-none"
    >
      <div className="relative">
        <div className="bg-opacity-40 rounded-full w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="border border-white border-opacity-40 rounded-full w-16 h-16"></div>
      </div>
    </motion.div>
  );
};

export default Mouse;
