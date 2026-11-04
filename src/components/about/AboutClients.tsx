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
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f4f6fb] border-b border-slate-200/80 text-left select-none overflow-hidden px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Heading & Subtitle */}
        <div className="space-y-2.5 max-w-3xl text-left">
          <h2 className="section-h2">
            Trusted by Ambitious Businesses Across UAE &amp; India
          </h2>
          <p className="section-desc max-w-2xl">
            From regional founders to international enterprises, we deliver software infrastructure that scales under real production demands
          </p>
        </div>

        {/* Client Logos Grid / Continuous Flow */}
        <div className="relative w-full overflow-hidden py-4 -mx-2 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {CLIENT_LOGOS.slice(0, 12).map((logo) => (
              <div
                key={logo.id}
                className="bg-white rounded-xl p-4 sm:p-5 h-20 sm:h-24 border border-slate-200/90 shadow-none flex items-center justify-center transition-all duration-300 hover:border-slate-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 sm:max-h-12 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
