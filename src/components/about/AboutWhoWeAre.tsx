"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    number: "20+",
    label: "Years combined tech expertise",
  },
  {
    number: "1000+",
    label: "Digital products & projects delivered",
  },
  {
    number: "100%",
    label: "In-house engineering team",
  },
];

export function AboutWhoWeAre() {
  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 bg-white border-t border-slate-200/80 text-left">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Heading & Lead Copy */}
        <div className="space-y-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330] tracking-tight leading-snug"
          >
            Who we are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Arkanet Technologies is a full-stack engineering team building software, AI systems, and automation for clients across Kerala, India, and the Gulf. We work across 6 practices, from custom software and mobile apps to conversational AI and business automation, so every project is handled by one team, not handed between vendors.
          </motion.p>
        </div>

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#f8fafc] rounded-[5px] p-8 sm:p-10 border border-slate-200/90 shadow-none flex flex-col justify-center text-left"
            >
              <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#0b1330] tracking-tight mb-3">
                {stat.number}
              </div>
              <p className="font-sans text-sm sm:text-base font-medium text-slate-600 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
