"use client";

import React, { useState } from "react";
import { Message } from "@mui/icons-material";
import Contact from "./contact2";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactButton() {
  const [isContactWindowOpen, setContactWindow] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence initial={false} mode="wait">
        {isContactWindowOpen ? (
          <motion.header
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.35,
            }}
            viewport={{
              once: true,
            }}
            exit={{
              opacity: 0,
            }}
            className="active-message  w-full"
          >
            <div className="flex justify-center items-center ">
              <Contact
                isContactWindowOpen={isContactWindowOpen}
                setContactWindow={setContactWindow}
              />
            </div>
          </motion.header>
        ) : null}
      </AnimatePresence>

      <button
        className="fixed bottom-4 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[2001]"
        onClick={() => setContactWindow(!isContactWindowOpen)}
      >
        <Message />
      </button>
    </div>
  );
}
