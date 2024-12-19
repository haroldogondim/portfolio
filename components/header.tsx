"use client";
import React from "react";
import Icon from "./ui/icon";
import Navbar from "./navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.section id="home">
      <div className="container min-h-[60dvh] relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.03),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,255,255,0.03),rgba(255,255,255,0))]"></div>
        <Navbar />
        <section className="relative flex flex-col items-center justify-center py-4 lg:py-12 font-sans">
          <div className="w-full flex flex-col items-start p-2 pb-20 md:pb-10 lg:pt-10">
            <h1 className="text-3xl leading-10 text-white  lg:text-[2.1rem] lg:leading-[3.5rem]">
              <div className="w-full text-md lg:text-[1.8rem] ml-1 md:font-extrabold font-bold">
                Hey there! I&apos;m
              </div>
              <div className="w-full font-bold md:font-extrabold text-[#fdd762] text-6xl md:text-9xl max-sm:leading-none">
                Haroldo Gondim
              </div>
              <div className="text-xl md:text-4xl mt-5 pt-2 text-zinc-500 md:w-[70%] w-full font-semibold">
                A curious <span className="text-white">Software Engineer</span>{" "}
                driven by challenges and coffee ☕
              </div>
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <a
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#fcbf31] to-[#fdd762] px-3 py-2 md:px-5 md:py-3 font-semibold text-center text-xs uppercase tracking-wider text-black no-underline transition-all duration-200 ease-out hover:text-black"
                role="button"
                target="_blank"
                href="#"
              >
                <span>Get My Resume</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/haroldogondim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-3 py-2 md:px-5 md:py-3 bg-neutral-900 rounded-full border-none text-center md:text-xs text-xs font-medium tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2 hover:gap-3">
                  <Icon name="Linkedin" size={16} className="text-white" />{" "}
                  <span>LinkedIn</span>
                </button>
              </a>

              <a
                href="https://github.com/haroldogondim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-3 py-2 md:px-5 md:py-3 bg-neutral-900 rounded-full border-none text-center md:text-xs text-xs font-medium tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2 hover:gap-3">
                  <Icon name="Github" size={16} className="text-white" />{" "}
                  <span>GitHub</span>
                </button>
              </a>

              <a
                href="https://stackoverflow.com/users/2154665/haroldo-gondim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-3 py-2 md:px-5 md:py-3 bg-neutral-900 rounded-full border-none text-center md:text-xs text-xs font-medium tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2 hover:gap-3">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z"
                      fill="#FFF"
                    />
                    <path
                      d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z"
                      fill="#FFF"
                    />
                  </svg>
                  StackOverflow
                </button>
              </a>

              <a
                href="mailto:hello@haroldo.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-3 py-2 md:px-5 md:py-3 bg-neutral-900 rounded-full border-none text-center md:text-xs text-xs font-medium tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2 hover:gap-3">
                  <Icon name="Mail" size={16} className="text-white" />{" "}
                  <span>E-mail</span>
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default Header;
