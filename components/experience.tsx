"use client";
import { Icon } from "@iconify/react";
import { experiences } from "@/lib/info";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section id="work">
      <div className="container md:w-full flex flex-col">
        <div className="w-full text-3xl mt-[5rem] font-semibold text-[#fdd762]">
          Work Experience
        </div>
        <div className="w-full justify-center divide-y divide-slate-200 py-3 overflow-hidden mt-3">
          <div className="w-full md:mx-auto flex flex-wrap">
            {experiences.map(
              (
                { title, position, location, description, icons, date, skills },
                index
              ) => {
                return (
                  <div key={index} className="w-full mb-10">
                    <div className="w-full">
                      <div className="text-zinc-500 flex flex-col flex-wrap md:flex-row">
                        <div className="w-full md:w-1/2 text-white font-bold">
                          {title}
                        </div>
                        <div className="w-full md:w-1/2 md:text-right md:text-white text-sm">
                          {date}
                        </div>
                        <div className="w-full md:w-1/2 text-sm">
                          {position}
                        </div>
                        <div className="w-full md:w-1/2 md:text-right text-sm">
                          {location.address} ({location.type})
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-sm mt-2 whitespace-pre-line">
                      {description}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="py-[5px] px-[6px] text-[12px] font-semibold bg-[rgba(255,255,255,0.1)] hover:bg-[#fdd762] hover:text-black transition rounded"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
