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
    { id: "1", src: "/assets/clinet-logo/1.png", alt: "Al Ras" },
    { id: "2", src: "/assets/clinet-logo/2.png", alt: "Arbitralis" },
    { id: "3", src: "/assets/clinet-logo/3.png", alt: "B&G Store" },
    { id: "4", src: "/assets/clinet-logo/4.png", alt: "Decorpoint International" },
  ],
  [
    { id: "5", src: "/assets/clinet-logo/5.png", alt: "Dual Investments" },
    { id: "6", src: "/assets/clinet-logo/6.png", alt: "Ebonite" },
    { id: "7", src: "/assets/clinet-logo/7.png", alt: "Emirates National Holdings" },
    { id: "8", src: "/assets/clinet-logo/8.png", alt: "MCH Global" },
  ],
  [
    { id: "9", src: "/assets/clinet-logo/9.png", alt: "Filipino Institute" },
    { id: "10", src: "/assets/clinet-logo/10.png", alt: "GDS Prestige" },
    { id: "11", src: "/assets/clinet-logo/11.png", alt: "Client Partner 11" },
    { id: "12", src: "/assets/clinet-logo/12.png", alt: "Client Partner 12" },
  ],
];

const ROTATION_INTERVAL = 3500;

export function AboutClients() {
  const [activeGroup, setActiveGroup] = useState(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
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
    <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 bg-[#f4f6fb] border-t border-slate-200/80 text-left">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Heading */}
        <div className="space-y-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330] tracking-tight leading-snug"
          >
            Our Clients
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Businesses across Kerala, India, and the Gulf trust us to build, modernise, and scale their digital systems and platforms.
          </motion.p>
        </div>

        {/* Minimal Logo Stage */}
        <div
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
          className="relative min-h-[120px] sm:min-h-[140px] flex items-center justify-center pt-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full items-center justify-items-center"
            >
              {CLIENT_GROUPS[activeGroup].map((logo, idx) => (
                <motion.div
                  key={`${activeGroup}-${logo.id}`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full h-24 sm:h-28 flex items-center justify-center group"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    style={{ mixBlendMode: "multiply" }}
                    className="max-h-14 sm:max-h-16 max-w-[180px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
