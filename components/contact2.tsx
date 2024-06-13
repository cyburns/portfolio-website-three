"use client";

import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Close } from "@mui/icons-material";

interface Props {
  setContactWindow: Dispatch<SetStateAction<boolean>>;
  isContactWindowOpen: Boolean;
}

export default function Contact({ setContactWindow }: Props) {
  return (
    <motion.section
      id="contact"
      className="mt-20 w-96 sm:w-full backdrop:text-center bg-white dark:bg-black rounded-2xl shadow-xl max-w-[40rem] py-10 sm:px-10 px-4 z-[99999]"
      initial={{
        opacity: 0,
        y: 300,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      viewport={{
        once: true,
      }}
      exit={{
        y: 300,
        opacity: 0,
      }}
    >
      <div className="flex justify-end text-4xl">
        <button
          className="bg-gray-200 dark:bg-[#333333] w-10 h-10  rounded-full text-center flex items-center justify-center"
          onClick={() => setContactWindow(false)}
        >
          <Close className="transition hover:scale-110" />
        </button>
      </div>
      <div className="flex items-center justify-center text-center w-full">
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Please email{" "}
          <a className="underline" href="cyrusburns@gmail.com">
            cyrusburns@gmail.com
          </a>{" "}
          or submit this form.
        </p>
      </div>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-opacity-50 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
