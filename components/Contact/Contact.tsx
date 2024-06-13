import Image from "next/image";
import Rounded from "@/common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "@/common/Magnetic";
import CB_HERO_BG from "@/public/images/FINAL_HERO_TWO.png";
import styles from "./style.module.scss";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="bg-white text-black flex flex-col items-center justify-center relative z-0"
    >
      <div className="pt-[200px] w-full max-w-[1800px] bg-white">
        <div className="border-b border-gray-400 pb-[100px] mx-[200px] relative">
          <span className="flex items-center">
            <div className="w-[100px] h-[100px] relative rounded-full overflow-hidden">
              <Image
                fill={true}
                alt="image"
                src={CB_HERO_BG}
                className="object-cover"
              />
            </div>
            <h2 className="ml-[0.3em] text-[5vw] font-light">Let's work</h2>
          </span>
          <h2 className="text-[5vw] font-light">together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[30%] left-[100%]"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="flex gap-[20px] mt-[100px] mx-[200px]">
          <Rounded>
            <p>cyrusburns@gmail.com</p>
          </Rounded>
        </div>
        <div className="flex justify-between mt-[200px] p-[20px]">
          <div className="flex gap-[10px] items-end">
            <span className="flex flex-col gap-[15px]">
              <h3 className="text-gray-400 cursor-default font-light text-[1em]">
                Version
              </h3>
              <p className="relative cursor-pointer">2022 © Edition</p>
            </span>
            <span className="flex flex-col gap-[15px]">
              <h3 className="text-gray-400 cursor-default font-light text-[1em]">
                Version
              </h3>
              <p className="relative cursor-pointer">11:49 PM GMT+2</p>
            </span>
          </div>
          <div className="flex gap-[10px] items-end">
            <span className="flex flex-col gap-[15px]">
              <h3 className="text-gray-400 cursor-default font-light text-[1em]">
                socials
              </h3>
              <Magnetic>
                <p className="relative cursor-pointer">Awwwards</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p className="relative cursor-pointer">Instagram</p>
            </Magnetic>
            <Magnetic>
              <p className="relative cursor-pointer">Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p className="relative cursor-pointer">Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
