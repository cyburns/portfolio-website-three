"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import BlackBlur from "@/components/BlackBlur";
import Block from "@/components/Block";
import Description from "@/components/Description/Description";
import Projects from "@/components/Projects/Projects";
import SlidingImages from "@/components/SlidingImages";
import Contact from "@/components/Contact/Contact";
import MobileProject from "@/components/Projects/MobileProject";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
    <main className="-z-50 overflow-hidden max-w-[100%">
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Hero />
      <BlackBlur />
      <Block />
      <Description />
      <div className="hidden sm:block z-50">
        <Projects />
        <SlidingImages />
      </div>
      <div className="flex sm:hidden z-50">
        <MobileProject />
      </div>
      <Contact />
    </main>
  );
}
