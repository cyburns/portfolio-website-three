"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero/Hero";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import BlackBlur from "@/components/BlackBlur";
import Block from "@/components/Block";
import Description from "@/components/Description/Description";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Hero />
      <BlackBlur />
      <Block />
      <Description />
      <Projects />
    </main>
  );
}
