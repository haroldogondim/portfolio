"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  skills: readonly string[];
  year: number;
  icons: readonly string[];
  imageUrl?: { src: string } | StaticImageData | null;
  iconUrl?: string | StaticImageData | null;
  urlLink?: string | null;
  demoLink?: string | null;
  githubLink?: string | null;
}

export default function Project({
  title,
  description,
  skills,
  year,
  icons,
  imageUrl,
  iconUrl,
  urlLink,
  demoLink,
  githubLink,
}: Project) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 0.8], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-zinc-950 w-100 border border-black/5 rounded-lg overflow-hidden lg:pr-8 relative lg:min-h-[21rem] hover:bg-zinc-900 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <h6 className="text-xs font-semibold mb-4">{year}</h6>

          <p
            className="mt-2 text-[14px] leading-relaxed text-zinc-400 dark:text-white/70 mb-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="py-[5px] px-[6px] text-[12px] font-semibold bg-[rgba(255,255,255,0.1)] hover:bg-[#fdd762] hover:text-black transition rounded"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="flex">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
              >
                <Icon icon="gridicons:external" className="mr-3 text-2xl" />{" "}
                Live
              </a>
            )}

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
              >
                <Icon icon="ph:layout-light" className="mr-3 text-2xl" /> Live
                Demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
              >
                <Icon
                  icon="octicon:mark-github-16"
                  className="mr-1 opacity-70"
                />{" "}
                <span className="opacity-70">GitHub</span>
              </a>
            )}
          </div>
        </div>
        {imageUrl && (
          <>
            <a
              href={
                typeof imageUrl === "object" && "src" in imageUrl
                  ? imageUrl.src
                  : typeof imageUrl === "string"
                    ? imageUrl
                    : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={
                  typeof imageUrl === "object" && "src" in imageUrl
                    ? imageUrl.src
                    : imageUrl
                }
                alt="Project"
                quality={100}
                height={800}
                width={800}
                className="lg:absolute lg:block top-[0px] lg:-right-[30px] lg:w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0]
                    transition 
                    lg:scale-[1.1]
                    lg:group-hover:-translate-x-3
                    lg:group-hover:translate-y-3
                    lg:group-hover:-rotate-2
                    p-[1rem]
                    w-full
                  "
              />
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
}
