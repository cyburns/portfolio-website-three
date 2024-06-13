import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "@/common/RoundedButton";
import styles from "./style.module.scss";

export default function Description() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div
      ref={description}
      className="description px-4 sm:px-20  flex justify-center bg-black text-white"
    >
      <div className="body max-w-[1400px] flex flex-col sm:flex-row gap-10 relative">
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
                className="text-[2rem] sm:text-[3rem] gap-2 leading-[1.3]"
              >
                {word}
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
            <Rounded className={styles.button}>
              <p>About me</p>
            </Rounded>
          </div>
        </div>
      </div>
    </div>
  );
}
