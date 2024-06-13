import React from "react";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Contact = () => {
  const spanClass = `${play.className} text-base xl:text-center`;
  return (
    <div className=" mb-96 flex justify-center items-center flex-col p-4 relative">
      <h1 className="text-pink-400 text-center text-[6vw] !leading-[0.8]">
        AS ARTIFICIAL INTELLIGENCE BECOMES A BUZZWORD FOR REPLACING HUMAN
        ABILITY, IT’S MORE IMPORTANT THAN EVER TO TELL YOUR STORY IN AN
        AUTHENTIC WAY
      </h1>
      <h3
        className={`text-pink-400 text-xl lg:text-3xl font-thin text-center max-w-3xl mt-10`}
      >
        WORKING
        <span className={`${spanClass} text-end`}> WITH </span>
        PASSIONATE PEOPLE
        <span className={`${spanClass} text-end`}> & </span>
        DISRUPTORS
        <span className={`${spanClass} text-end`}> TO CREATE MEMORABLE </span>
        BRANDS
        <span className={`${spanClass} text-end`}> & CAPTIVATING </span>
        DIGITAL EXPERIENCES
        <span className={`${spanClass} text-end`}> THAT DELIVER </span>
        RESULTS
      </h3>
      <div className="relative mt-[100px] h-[50px] bg-yellow-300">
        <div className="absolute bottom-0 left-0 w-full h-full bg-yellow-300" />
      </div>
    </div>
  );
};

export default Contact;
