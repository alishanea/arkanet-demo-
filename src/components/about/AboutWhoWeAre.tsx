"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    number: "2023",
    label: "Year Founded",
    detail: "Established as a next-generation digital innovation and technology consulting firm.",
  },
  {
    number: "Dual-Hub",
    label: "Kerala HQ & Dubai Presence",
    detail: "Bridging regional technical insights with scalable global enterprise technological standards.",
  },
  {
    number: "100%",
    label: "In-House Engineering",
    detail: "Zero third-party outsourcing with one dedicated in-house full-stack engineering team.",
  },
  {
    number: "5+",
    label: "Key Industry Verticals",
    detail: "Delivering solutions across hospitality, IT, eCommerce, government, and business services.",
  },
];

export function AboutWhoWeAre() {
  return (
    <>
      {/* ── 1. MAIN NARRATIVE BODY: BALANCED 2-COLUMN EDITORIAL (NO EMPTY SPACES) ── */}
      <section
        id="about-story"
        className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#151E48] text-white border-t border-[#253272] text-left select-none overflow-hidden font-sans scroll-mt-28 sm:scroll-mt-36"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Headline + Core Intro (Fills height naturally, zero dead space) */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="section-h2 text-white !text-white leading-[1.22] tracking-tight">
                Bridging regional insights with global technology standards
              </h2>
              <p className="font-sans text-sm sm:text-[15px] lg:text-base text-slate-200 leading-[1.65] font-normal">
                Founded in 2023, Arkanet Technologies is a premier digital innovation and IT consulting firm dedicated to building next-generation software platforms. We specialize in transforming complex technological challenges into scalable, future-ready solutions for enterprises and ambitious brands worldwide.
              </p>
            </div>

            {/* Right Story Paragraphs: Unified size, line-height & color */}
            <div className="lg:col-span-7 space-y-4 font-sans text-sm sm:text-[15px] lg:text-base text-slate-200 leading-[1.65] font-normal lg:pt-1">
              <p>
                Operating at the intersection of emerging technology and business strategy, our core expertise spans Artificial Intelligence, Blockchain, AR/VR, IoT, and robust cloud infrastructure. We partner with organizations across hospitality, IT, eCommerce, and government sectors to architect immersive digital experiences and end-to-end data architectures that drive operational excellence and sustained market growth.
              </p>
              <p>
                With our strategic headquarters in Kelakam, Kerala, and a dedicated corporate presence in Business Bay, Dubai, we seamlessly bridge regional insights with global technological standards. This dual-hub approach ensures agile development, continuous deployment, and highly responsive consulting tailored to the unique operational landscapes of our international clients. At Arkanet, we do not just adapt to the digital frontier—we actively build it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BOTTOM STATS: REFINED COMPACT SIZING ON SITE #f4f6fb CANVAS ── */}
      <section className="w-full py-10 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] text-[#202B61] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mx-4 sm:-mx-6 lg:-mx-8 gap-y-7 items-stretch w-full">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col justify-between h-full text-left px-4 sm:px-6 lg:px-8 transition-all duration-200 ${
                  idx < 3 ? "lg:border-r lg:border-slate-200/90" : "lg:border-r-0"
                } ${
                  idx % 2 === 0
                    ? "sm:border-r sm:border-slate-200/90"
                    : "sm:border-r-0"
                } ${
                  idx < 3 ? "border-b border-slate-200/90 pb-5 sm:border-b-0 sm:pb-0" : ""
                }`}
              >
                <div className="space-y-1">
                  <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#202B61] tracking-tight leading-tight">
                    {stat.number}
                  </div>
                  <h3 className="font-heading font-bold text-xs sm:text-[13.5px] lg:text-sm text-[#202B61] leading-snug">
                    {stat.label}
                  </h3>
                </div>
                <div className="pt-1.5">
                  <p className="font-sans text-[11.5px] sm:text-xs text-[#202B61]/75 font-normal leading-[1.55]">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
