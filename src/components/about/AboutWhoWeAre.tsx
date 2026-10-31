"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  {
    number: "20+",
    label: "Years Combined Leadership",
    detail: "Decades of engineering leadership, product design, and cloud architecture expertise.",
  },
  {
    number: "1000+",
    label: "Projects & Releases Delivered",
    detail: "Successful releases delivered from consumer mobile apps to enterprise workflow automation.",
  },
  {
    number: "99.8%",
    label: "SLA Uptime & Reliability",
    detail: "Engineered with multi-region redundancy, automated failovers, and 24/7 monitoring.",
  },
  {
    number: "100%",
    label: "In-House Engineering",
    detail: "Zero third-party contracting with one unified in-house team owning your entire codebase.",
  },
];

export function AboutWhoWeAre() {
  return (
    <section
      id="about-story"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#151E48] text-white border-t border-[#253272] text-left select-none overflow-hidden font-sans scroll-mt-28 sm:scroll-mt-36"
    >
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Heading & In-Depth Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.15]">
              Engineering digital infrastructure that endures
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <p className="font-sans text-base sm:text-lg text-slate-100 font-normal leading-relaxed">
              Arkanet Technologies was founded with a singular conviction: businesses deserve technology partners who think like software owners, not disconnected outsourced agencies. Too many digital initiatives stumble because discovery, design, development, and hosting are fragmented across disparate vendors.
            </p>
            <p className="font-sans text-base sm:text-lg text-slate-200/90 font-normal leading-relaxed">
              We operate across 6 specialized practices — custom web platforms, native mobile applications, applied artificial intelligence, cloud architecture, UI/UX systems, and business process automation. By unifying strategic advisory in Dubai with deep technical craftsmanship in India, we deliver software built around your exact commercial realities.
            </p>
          </div>
        </div>

        {/* 4 Stats Grid: Frameless with Simple Divider Lines */}
        <div className="pt-10 sm:pt-12 border-t border-[#253272]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 items-stretch w-full">
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
                className={`flex flex-col justify-between h-full text-left transition-all duration-200 ${
                  /* Desktop (4-cols): simple separation line between each stat column */
                  idx < 3 ? "lg:border-r lg:border-[#253272] lg:pr-8 xl:pr-10" : "lg:border-r-0 lg:pr-0"
                } ${
                  /* Desktop: left padding on subsequent columns */
                  idx > 0 ? "lg:pl-8 xl:pl-10" : "lg:pl-0"
                } ${
                  /* Tablet (2-cols): divider line between column 1 and column 2 */
                  idx % 2 === 0
                    ? "sm:border-r sm:border-[#253272] sm:pr-8 sm:pl-0"
                    : "sm:border-r-0 sm:pl-8 sm:pr-0"
                } ${
                  /* Mobile (1-col): subtle horizontal separation line between items */
                  idx < 3 ? "border-b border-[#253272] pb-6 sm:border-b-0 sm:pb-0" : ""
                }`}
              >
                <div className="space-y-2">
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                    {stat.number}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                    {stat.label}
                  </h3>
                </div>
                <div className="pt-2">
                  <p className="font-sans text-sm text-slate-300 font-normal leading-relaxed">
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
