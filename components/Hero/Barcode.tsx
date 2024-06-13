import React from "react";
import { Libre_Barcode_39_Text } from "next/font/google";

const barcode = Libre_Barcode_39_Text({
  weight: "400",
  subsets: ["latin"],
});

const Barcode = () => {
  return (
    <div className=" text-pink-400">
      <div className="flex flex-row">
        <div className=" rounded-full hidden lg:block">
          <h2 className="text-center m-2 text-3xl">
            EST.
            <br />
            1999
          </h2>
        </div>

        <div className="border border-pink-400 capitalize lg:ml-3 w-full sm:grid hidden grid-cols-5 text-xl ">
          <p className="border border-pink-400 p-1 col-span-4">
            marketing and social
          </p>
          <p className="border border-pink-400 p-1 col-span-1 text-center">
            24
          </p>
          <p className="border border-pink-400 p-1 col-span-1">USA</p>
          <p className="border border-pink-400 p-1 col-span-4 text-right">
            New York, New York
          </p>
        </div>
      </div>
      <h1
        className={`${barcode.className} capitalize text-[2rem] lg:text-[3rem] font-semibold mt-2 hidden sm:block`}
      >
        Christine Dazzo
      </h1>
    </div>
  );
};

export default Barcode;
