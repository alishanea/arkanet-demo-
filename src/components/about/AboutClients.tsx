"use client";

import React from "react";
import { motion } from "framer-motion";

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

const TRACK_1: ClientLogo[] = [
  { id: "1", src: "/assets/clinet-logo/1.png", alt: "Al Ras General Trading" },
  { id: "2", src: "/assets/clinet-logo/2.png", alt: "Arbitralis Legal" },
  { id: "3", src: "/assets/clinet-logo/3.png", alt: "B&G Store" },
  { id: "4", src: "/assets/clinet-logo/4.png", alt: "Decorpoint International" },
  { id: "5", src: "/assets/clinet-logo/5.png", alt: "Dual Investments" },
  { id: "6", src: "/assets/clinet-logo/6.png", alt: "Ebonite Sports" },
  { id: "7", src: "/assets/clinet-logo/7.png", alt: "Emirates National Holdings" },
  { id: "8", src: "/assets/clinet-logo/8.png", alt: "MCH Global" },
  { id: "9", src: "/assets/clinet-logo/9.png", alt: "Filipino Institute" },
  { id: "10", src: "/assets/clinet-logo/10.png", alt: "GDS Prestige" },
  { id: "11", src: "/assets/clinet-logo/11.png", alt: "Partner 11" },
];

const TRACK_2: ClientLogo[] = [
  { id: "12", src: "/assets/clinet-logo/12.png", alt: "Horizon Maritime" },
  { id: "13", src: "/assets/clinet-logo/13.png", alt: "Al Futtaim Partner Entity" },
  { id: "14", src: "/assets/clinet-logo/14.png", alt: "Apex Medical Systems" },
  { id: "15", src: "/assets/clinet-logo/15.png", alt: "Lumina Technologies" },
  { id: "1-1", src: "/assets/clinet-logo/1-1.png", alt: "Precision Diagnostics" },
  { id: "2-1", src: "/assets/clinet-logo/2-1.png", alt: "Solara Clean Energy" },
  { id: "3-1", src: "/assets/clinet-logo/3-1.png", alt: "Vesper Horology Paris" },
  { id: "4-1", src: "/assets/clinet-logo/4-1.png", alt: "AeroLogistics Global" },
  { id: "5-1", src: "/assets/clinet-logo/5-1.png", alt: "CareFlow Health" },
  { id: "6-1", src: "/assets/clinet-logo/6-1.png", alt: "PulseFit Labs" },
  { id: "7-1", src: "/assets/clinet-logo/7-1.png", alt: "Kratos Security" },
];

export function AboutClients() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-[#f4f6fb] border-t border-slate-200/80 text-left select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-6 sm:space-y-8">
        
        {/* Section Heading with Clean Typography */}
        <div className="w-full space-y-4 max-w-4xl text-left">
          <div className="inline-block px-3 py-1 rounded-[4px] bg-[#0b1330] text-white text-[11px] font-bold uppercase tracking-wider">
            Our Clients
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0b1330] tracking-tight leading-[1.1]"
          >
            Trusted by ambitious businesses across the UAE &amp; India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-sans text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl pt-1 leading-relaxed font-normal"
          >
            Businesses across Kerala, India, and the Gulf trust us to build, modernise, and scale their digital systems and platforms.
          </motion.p>
        </div>

      </div>

      {/* ── 2-LEVEL MOVIE TRACK / MARQUEE TICKER ── */}
      <div className="relative w-full mt-12 sm:mt-16 py-4 overflow-hidden">
        {/* Soft edge gradient masks for luxury editorial depth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#f4f6fb] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#f4f6fb] to-transparent z-20" />

        {/* Level 1 Track: Smooth Left Glide */}
        <div className="flex space-x-6 animate-marquee py-2">
          {[...TRACK_1, ...TRACK_1].map((logo, idx) => (
            <div
              key={`t1-${logo.id}-${idx}`}
              className="w-[240px] sm:w-[280px] h-[120px] sm:h-[135px] rounded-[5px] bg-white border border-slate-200/90 flex items-center justify-center p-6 group hover:border-[#0b1330] hover:scale-[1.02] transition-all duration-300 shadow-none shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                style={{ mixBlendMode: "multiply" }}
                className="max-h-12 sm:max-h-14 max-w-[170px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Level 2 Track: Smooth Reverse Right Glide */}
        <div className="flex space-x-6 animate-marquee-reverse py-2 mt-4">
          {[...TRACK_2, ...TRACK_2].map((logo, idx) => (
            <div
              key={`t2-${logo.id}-${idx}`}
              className="w-[240px] sm:w-[280px] h-[120px] sm:h-[135px] rounded-[5px] bg-white border border-slate-200/90 flex items-center justify-center p-6 group hover:border-[#0b1330] hover:scale-[1.02] transition-all duration-300 shadow-none shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                style={{ mixBlendMode: "multiply" }}
                className="max-h-12 sm:max-h-14 max-w-[170px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
