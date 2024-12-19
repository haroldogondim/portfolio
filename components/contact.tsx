"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section id="contact">
      <section className="container md:w-full flex flex-col items-center justify-center p-[6rem]">
        <h2 className="text-2xl font-bold text-center mb-1 text-white">
          Drop me an e-mail at
        </h2>
        <a
          href="mailto:hello@haroldo.dev"
          className="text-[2rem] md:text-[3rem] font-bold text-center mb-6 text-[#fdd762]"
        >
          hello@haroldo.dev
        </a>
      </section>
    </motion.section>
  );
}
