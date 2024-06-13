"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const slider1 = [
  {
    color: "#ffffff",
    src: "seatr.png",
  },
  {
    color: "#9e9e9e",
    src: "brightdev.dev.png",
  },
  {
    color: "#709441",
    src: "cpd.com2.png",
  },
  {
    color: "#5f5efe",
    src: "Codeshare-port-pic.png",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#d4d4d4",
    src: "port.com.png",
  },
  {
    color: "#e0b8f2",
    src: "audia.com-two.png",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 8]);

  return (
    <div
      ref={container}
      className="flex flex-col gap-[3vw] relative pt-32 bg-black z-10"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex relative gap-[3vw] w-[120vw] -left-[10vw]"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div className="relative w-4/5 h-4/5">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-[3vw] w-[120vw] -left-[10vw]"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-1/4 h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative w-4/5 h-4/5">
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="relative mt-[100px] bg-red-500">
        <div className="h-[1550%] w-[120%] -left-[10%] rounded-b-full bg-black z-1 absolute shadow-[0_60px_50px_rgba(0,0,0,0.748)]"></div>
      </motion.div>
    </div>
  );
}
