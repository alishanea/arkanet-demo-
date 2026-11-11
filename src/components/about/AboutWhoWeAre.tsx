"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    number: "15+",
    label: "Years of Experience",
    detail: "Over 15 years of technology innovation, digital architecture, and scalable software solutions.",
  },
  {
    number: "Dual-Hub",
    label: "Kerala HQ & Dubai Presence",
    detail: "Bridging regional insights with global enterprise technological standards.",
  },
  {
    number: "100%",
    label: "In-House Engineering",
    detail: "Zero third-party contracting with one unified in-house team owning your entire codebase.",
  },
  {
    number: "5+",
    label: "Key Industry Verticals",
    detail: "Delivering solutions across hospitality, IT, eCommerce, government, and business services.",
  },
];

export function AboutWhoWeAre() {
  return (
    <section
      id="about-story"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#151E48] text-white border-t border-[#253272] border-b border-[#253272] text-left select-none overflow-hidden font-sans scroll-mt-28 sm:scroll-mt-36"
    >
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-14">
        {/* Top 2-Column Split: Headline + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Headline + Core Intro */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="section-h2 text-white !text-white leading-[1.22] tracking-tight">
              A passionate team of tech enthusiasts, creatives, and problem solvers
            </h2>
            <p className="font-sans text-sm sm:text-[15px] lg:text-base text-slate-200 leading-[1.65] font-normal">
              Based in Kannur, Kerala with global presence in Business Bay, Dubai, Arkanet Technologies combines diverse backgrounds and deep engineering expertise to create a powerhouse of digital talent. From web development wizards to AI and digital marketing mavens, we have the skills to turn your vision into a digital masterpiece.
            </p>
          </div>

          {/* Right Story Paragraphs: Unified size, line-height & color */}
          <div className="lg:col-span-7 space-y-4 font-sans text-sm sm:text-[15px] lg:text-base text-slate-200 leading-[1.65] font-normal lg:pt-1">
            <p>
              Our mission is to empower businesses and individuals with innovative solutions that drive measurable success in an ever-evolving digital landscape. We are committed to delivering excellence through creativity, technology, and unwavering dedication to our clients — staying ahead of industry trends, working collaboratively on tailor-made architectures, and building long-term relationships with ongoing support after project launch.
            </p>
            <p>
              As part of a next-generation global technology group, our software, cloud, and artificial intelligence offerings are built on over 15 years of market expertise and enterprise engagements. With our India operations centered in Kelakam, Kannur, we provide agile delivery, transparent sprint reporting, and direct engineering access that modern businesses rely on.
            </p>
          </div>
        </div>

        {/* 4 Stats Grid: Connected directly in dark navy with refined, noticeably reduced font sizes */}
        <div className="pt-8 sm:pt-10 border-t border-[#253272]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mx-4 sm:-mx-6 lg:-mx-8 gap-y-7 items-stretch w-full">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col justify-between h-full text-left px-4 sm:px-6 lg:px-8 transition-all duration-200 ${
                  idx < 3 ? "lg:border-r lg:border-[#253272]" : "lg:border-r-0"
                } ${
                  idx % 2 === 0
                    ? "sm:border-r sm:border-[#253272]"
                    : "sm:border-r-0"
                } ${
                  idx < 3 ? "border-b border-[#253272] pb-5 sm:border-b-0 sm:pb-0" : ""
                }`}
              >
                <div className="space-y-1">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                    {stat.number}
                  </div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-white leading-snug">
                    {stat.label}
                  </h3>
                </div>
                <div className="pt-1.5">
                  <p className="font-sans text-xs sm:text-[12.5px] text-slate-300/85 font-normal leading-[1.6]">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
