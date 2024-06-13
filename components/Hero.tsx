"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import CB_HERO_BG from "@/public/images/FINAL_HERO_TWO.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [maxScroll, setMaxScroll] = useState(1000);

  const updateMaxScroll = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setMaxScroll(500);
    } else {
      setMaxScroll(1000);
    }
  };

  useEffect(() => {
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, maxScroll]);

  const firstText = useRef(null);
  const secondText = useRef(null);

  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.09 * direction;
  };

  return (
    <div
      ref={ref}
      className="w-screen h-screen overflow-hidden relative bg-[100vh]"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-screen h-screen -z-10 block"
      >
        <Image
          src={CB_HERO_BG}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10"
        />
      </motion.div>

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-white text-6xl font-bold opacity-80 pr-5 sm:pr-12 text-[30vw] sm:text-[10vw] z-50"
          >
            Software Engineer •
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 m-0 text-white text-6xl font-bold opacity-80 text-[30vw] sm:text-[10vw] z-50"
          >
            Software Engineer •
          </p>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="0.01"
        className="absolute top-[20%] left-[65%] text-white text-xl sm:text-3xl"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-16"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </svg>
        <p>Designer & Developer</p>
      </div>
    </div>
  );
};

export default Hero;
