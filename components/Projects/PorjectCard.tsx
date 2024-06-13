"use client";

import React from "react";

export default function ProjectCard({ index, title, manageModal }: any) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="project flex w-full justify-between items-center px-[100px] py-[50px] border-t border-gray-300 cursor-pointer transition-all duration-200 last:border-b hover:opacity-50 group"
    >
      <h2 className="text-5xl m-0 font-normal transition-all duration-500 group-hover:-translate-x-2 text-white">
        {title}
      </h2>
      <p className="transition-all duration-500 font-light group-hover:translate-x-2 text-white">
        Design & Development
      </p>
    </div>
  );
}
