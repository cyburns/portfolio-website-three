"use client";

import React, { useRef, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Lottie from "react-lottie";
import GuyAnimation from "@/lib/man.json";
import ConfettiAnim from "@/lib/confetti.json";
import AnimalGuys from "@/lib/animal.json";
import ChrisSig from "@/public/images/Christine-Dazzo-6-6-2024.png";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const About = () => {
  const spanClass = `${play.className} text-base xl:text-center`;

  const largeTextRef = useRef(null);
  const isLargeTextInView = useInView(largeTextRef);
  const controls = useAnimation();

  const mediumTextRef = useRef(null);
  const isMediumTextInView = useInView(mediumTextRef);
  const mediumControls = useAnimation();

  const smallTextRef = useRef(null);
  const isSmallTextInView = useInView(smallTextRef);
  const smallControls = useAnimation();

  useEffect(() => {
    if (isLargeTextInView) {
      controls.start("visible");
    }

    if (isMediumTextInView) {
      mediumControls.start("visible");
    }

    if (isSmallTextInView) {
      smallControls.start("visible");
    }
  }, [
    isLargeTextInView,
    controls,
    largeTextRef,
    isMediumTextInView,
    mediumControls,
    mediumTextRef,
    isSmallTextInView,
    smallControls,
    smallTextRef,
  ]);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: GuyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const textVariants = {
    hidden: {
      y: 175,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 2.25,
      },
    },
  };

  return (
    <div className="items-center justify-center bg-black !leading-[0.5] md:!leading-[0.7] pt-10 overflow-hidden">
      <div className="mt-96">
        <h1 className="text-center p-4 text-black text-[17vw] md:text-[18vw]">
          New York-BASED
        </h1>
      </div>
    </div>
  );
};

export default About;
