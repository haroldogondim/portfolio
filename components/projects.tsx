"use client";
import { projects } from "@/lib/info";
import { motion } from "framer-motion";
import Project from "./project";

export default function Projects() {
  return (
    <motion.section id="projects">
      <section className="container md:w-full flex flex-col">
        <div className="w-full text-3xl mt-[5rem] font-semibold text-[#fdd762]">
          Projects
        </div>
        <div className="w-full text-sm mt-[5px] font-semibold text-white">
          Only my most relevant projects.
        </div>
        <div className="w-full justify-center divide-y divide-slate-200 py-3 overflow-hidden mt-3">
          <div className="w-full md:mx-auto flex flex-wrap">
            {projects.map((project, index) => {
              return <Project key={index} {...project} />;
            })}
          </div>
        </div>
      </section>
    </motion.section>
  );
}
