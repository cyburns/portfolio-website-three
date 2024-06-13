"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const projects = [
  {
    title: "Audia",
    src: "getaudia.com.png",
    color: "#4cded8",
    desc: "Interaction and full-stack development.",
  },
  {
    title: "ReacType",
    src: "reactype.dev.png",
    color: "#8C8C8C",
    desc: "Interaction and full-stack development.",
  },
  {
    title: "Bright",
    src: "bright.dev.png",
    color: "#992db4",
    desc: "Interaction and full-stack development.",
  },

  {
    title: "Press Sports",
    src: "press.com.png",
    color: "#EFE8D3",
    desc: "Interaction and development.",
  },
];

const MobileProject = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 8]);

  return (
    <div ref={container} className="bg-black pt-56 mb-24">
      {projects.map((project, index) => {
        const { src, color, desc } = project;

        return (
          <div className="flex flex-col p-4 mt-16">
            <div
              className="flex items-center justify-center p-10"
              style={{ backgroundColor: color }}
              key={`modal_${index}`}
            >
              <Image
                src={`/images/${src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
            <div className="flex flex-col mt-8">
              <h2 className="text-white text-start text-3xl font-light border-b pb-5">
                {project.title}
              </h2>
              <p className="text-white text-lg font-ligh mt-5">{desc}</p>
            </div>
          </div>
        );
      })}

      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="h-[1550%] w-[140%] -left-[20%] rounded-b-full bg-black z-1 absolute shadow-[0_60px_50px_rgba(0,0,0,0.748)] z-50"></div>
      </motion.div>
    </div>
  );
};

export default MobileProject;
