"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section id="about">
      <div className="container md:w-full flex flex-col">
        <div className="w-full text-3xl mt-10 font-semibold text-[#fdd762]">
          About
        </div>
        <div className="w-full mt-10 text-md grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-zinc-100">
          <div className="order-2 lg:order-1 flex flex-col">
            <span className="font-semibold">
              I wrote my first line of code when I was 13 years old and never
              stopped.
            </span>
            <div className="text-[0.85rem]">
              <p className="mt-6">
                My name is Haroldo, a self-taught and passionate Software
                Engineer in love with challenges and solving real problems.
              </p>
              <p className="mt-6">
                I started my career as a freelance Full Stack Developer in 2010
                when I decided to learn how to create my own website to
                entertain my friends and other players while we played a game
                called Habbo Hotel. In this context, I developed many projects
                using the <b>PHP</b> and basic Front-end skills, including
                communities, dashboards, forums, landing pages, admin panels,
                RESTful APIs, online stores (e-commerce), FiveM servers, and
                more. Today, I am highly experienced with PHP and JavaScript and
                primarily work with these languages. I am also a passionate
                Golang enthusiast and look forward to working with Golang in the
                near future.
              </p>
              <p className="mt-6">
                Today, my core skills are <b>PHP</b> and{" "}
                <b>JavaScript/TypeScript</b>, and I&apos;m working at{" "}
                <a
                  className="font-bold text-[rgb(0,150,214)]"
                  href="https://www.hp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HP
                </a>{" "}
                as a <b>Senior Software Developer</b>, consulting through{" "}
                <a
                  href="https://www.wipro.com"
                  className="font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wipro
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
