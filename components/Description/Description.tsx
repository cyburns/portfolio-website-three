import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "@/common/RoundedButton";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="description px-20  flex justify-center bg-black text-white"
    >
      <div className="body max-w-[1400px] flex gap-10 relative">
        <p className="gap-2 leading-[1.3]">
          {phrase.split(" ").map((word, index) => (
            <span
              key={index}
              className="relative overflow-hidden inline-flex mr-2 "
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
                className="text-[3rem] gap-2 leading-[1.3]"
              >
                {word}{" "}
              </motion.span>
            </span>
          ))}
        </p>
        <div>
          <motion.p
            variants={opacity}
            animate={isInView ? "open" : "closed"}
            className="w-4/5 font-light text-xl gap-2 leading-[1.3] mb-24 overflow-hidden"
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>
          <div data-scroll data-scroll-speed={0.1} className="relative">
            <Rounded className="button top-80% left-[calc(100%-200px)] w-36 h-36 bg-[#1C1D20] text-white rounded-full flex items-center justify-center cursor-pointer">
              <p className="m-0 text-sm font-light z-40">About me</p>
            </Rounded>
          </div>
        </div>
      </div>
    </div>
  );
}
