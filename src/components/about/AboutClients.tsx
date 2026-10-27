"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
}

const CLIENT_GROUPS: ClientLogo[][] = [
  [
    { id: "1", src: "/assets/clinet-logo/1.png", alt: "Al Ras General Trading" },
    { id: "2", src: "/assets/clinet-logo/2.png", alt: "Arbitralis Legal" },
    { id: "3", src: "/assets/clinet-logo/3.png", alt: "B&G Store" },
    { id: "4", src: "/assets/clinet-logo/4.png", alt: "Decorpoint International" },
  ],
  [
    { id: "5", src: "/assets/clinet-logo/5.png", alt: "Dual Investments" },
    { id: "6", src: "/assets/clinet-logo/6.png", alt: "Ebonite Sports" },
    { id: "7", src: "/assets/clinet-logo/7.png", alt: "Emirates National Holdings" },
    { id: "8", src: "/assets/clinet-logo/8.png", alt: "MCH Global" },
  ],
  [
    { id: "9", src: "/assets/clinet-logo/9.png", alt: "Filipino Institute" },
    { id: "10", src: "/assets/clinet-logo/10.png", alt: "GDS Prestige" },
    { id: "11", src: "/assets/clinet-logo/11.png", alt: "Nexus Venture Partners" },
    { id: "12", src: "/assets/clinet-logo/12.png", alt: "Horizon Maritime" },
  ],
  [
    { id: "13", src: "/assets/clinet-logo/13.png", alt: "Al Futtaim Partner Entity" },
    { id: "14", src: "/assets/clinet-logo/14.png", alt: "Apex Medical Systems" },
    { id: "15", src: "/assets/clinet-logo/15.png", alt: "Lumina Technologies" },
    { id: "1-1", src: "/assets/clinet-logo/1-1.png", alt: "Precision Diagnostics" },
  ],
  [
    { id: "2-1", src: "/assets/clinet-logo/2-1.png", alt: "Solara Clean Energy" },
    { id: "3-1", src: "/assets/clinet-logo/3-1.png", alt: "Vesper Horology Paris" },
    { id: "4-1", src: "/assets/clinet-logo/4-1.png", alt: "AeroLogistics Global" },
    { id: "5-1", src: "/assets/clinet-logo/5-1.png", alt: "CareFlow Health" },
  ],
  [
    { id: "6-1", src: "/assets/clinet-logo/6-1.png", alt: "PulseFit Labs" },
    { id: "7-1", src: "/assets/clinet-logo/7-1.png", alt: "Kratos Security" },
    { id: "1-rep", src: "/assets/clinet-logo/1.png", alt: "Al Ras" },
    { id: "2-rep", src: "/assets/clinet-logo/2.png", alt: "Arbitralis" },
  ],
];

const ROTATION_INTERVAL = 4000;

export function AboutClients() {
  const [activeGroup, setActiveGroup] = useState(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Preload logos to prevent loading flicker
    CLIENT_GROUPS.flat().forEach((logo) => {
      const img = new Image();
      img.src = logo.src;
    });

    const interval = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveGroup((prev) => (prev + 1) % CLIENT_GROUPS.length);
      }
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 px-6 sm:px-10 lg:px-12 bg-[#f4f6fb] border-t border-slate-200/80 text-left select-none">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Heading with Big Clean Typography */}
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

        {/* Big Minimal Logo Stage (Old Model with Increased Scale & Effects) */}
        <div
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
          className="relative min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px] flex items-center justify-center pt-4 pb-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-14 lg:gap-16 w-full items-center justify-items-center"
            >
              {CLIENT_GROUPS[activeGroup].map((logo, idx) => (
                <motion.div
                  key={`${activeGroup}-${logo.id}`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full h-36 sm:h-48 md:h-56 lg:h-64 flex flex-col items-center justify-center group cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    style={{ mixBlendMode: "multiply" }}
                    className="max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-48 max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <span className="text-xs sm:text-sm font-heading font-semibold text-slate-400 group-hover:text-[#0b1330] transition-colors mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {logo.alt}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Interactive Progress Indicators (Jump between groups) */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {CLIENT_GROUPS.map((_, gIdx) => {
            const isActive = activeGroup === gIdx;
            return (
              <button
                key={gIdx}
                type="button"
                onClick={() => setActiveGroup(gIdx)}
                aria-label={`Show client group ${gIdx + 1}`}
                className={`transition-all duration-300 rounded-[2px] cursor-pointer ${
                  isActive
                    ? "w-8 h-1.5 bg-[#0b1330]"
                    : "w-3 h-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
