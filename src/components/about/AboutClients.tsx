"use client";

import React from "react";
import { motion } from "framer-motion";

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
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
  { id: "11", src: "/assets/clinet-logo/11.png", alt: "Ikon Petroleum" },
  { id: "12", src: "/assets/clinet-logo/12.png", alt: "International Gemological Institute" },
  { id: "13", src: "/assets/clinet-logo/13.png", alt: "Client Partner 13" },
  { id: "14", src: "/assets/clinet-logo/14.png", alt: "Client Partner 14" },
  { id: "15", src: "/assets/clinet-logo/15.png", alt: "Client Partner 15" },
  { id: "1-1", src: "/assets/clinet-logo/1-1.png", alt: "Client Partner 16" },
  { id: "2-1", src: "/assets/clinet-logo/2-1.png", alt: "Client Partner 17" },
  { id: "3-1", src: "/assets/clinet-logo/3-1.png", alt: "Client Partner 18" },
  { id: "4-1", src: "/assets/clinet-logo/4-1.png", alt: "Client Partner 19" },
  { id: "5-1", src: "/assets/clinet-logo/5-1.png", alt: "Client Partner 20" },
  { id: "6-1", src: "/assets/clinet-logo/6-1.png", alt: "Client Partner 21" },
  { id: "7-1", src: "/assets/clinet-logo/7-1.png", alt: "Client Partner 22" },
];

export function AboutClients() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f4f6fb] border-t border-slate-200/80 text-left select-none overflow-hidden px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* Section Heading with Clean Typography */}
        <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8 space-y-3 max-w-4xl text-left">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.1]"
          >
            Trusted by ambitious businesses across the UAE &amp; India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#202B61]/80 max-w-4xl pt-1 leading-relaxed font-normal"
          >
            Businesses across Kerala, India, and the Gulf trust us to build, modernise, and scale their digital systems and platforms.
          </motion.p>
        </div>

      </div>

      {/* ── SINGLE CONTINUOUS TRAILING TRACK ── */}
      <div className="relative w-full mt-10 sm:mt-14 py-4 overflow-hidden group">
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#f4f6fb] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#f4f6fb] to-transparent z-20" />

        {/* Single Track: Continuous Smooth Left Glide with Pause on Hover */}
        <div
          className="flex shrink-0 items-center animate-marquee py-4 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "95s" }}
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div
              key={`about-client-${logo.id}-${idx}`}
              className="mx-8 sm:mx-12 lg:mx-14 shrink-0 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
              title={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                style={{ mixBlendMode: "multiply" }}
                className="h-14 sm:h-16 lg:h-20 max-h-20 max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] w-auto object-contain opacity-80 hover:opacity-100 filter contrast-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
