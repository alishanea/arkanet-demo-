"use client";

import React from "react";

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
  { id: "13", src: "/assets/clinet-logo/13.png", alt: "Prime Logistics" },
  { id: "14", src: "/assets/clinet-logo/14.png", alt: "Alpha Horizon" },
  { id: "15", src: "/assets/clinet-logo/15.png", alt: "Apex Maritime" },
  { id: "1-1", src: "/assets/clinet-logo/1-1.png", alt: "Vertex Capital" },
  { id: "2-1", src: "/assets/clinet-logo/2-1.png", alt: "Zenith Global" },
  { id: "3-1", src: "/assets/clinet-logo/3-1.png", alt: "Sterling Crest" },
  { id: "4-1", src: "/assets/clinet-logo/4-1.png", alt: "Oasis Group" },
  { id: "5-1", src: "/assets/clinet-logo/5-1.png", alt: "Falcon Energy" },
  { id: "6-1", src: "/assets/clinet-logo/6-1.png", alt: "Regal Holdings" },
  { id: "7-1", src: "/assets/clinet-logo/7-1.png", alt: "Atlas Enterprise" },
];

export function AboutClients() {
  // Duplicate array once for seamless infinite loop
  const trailingLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="clients"
      className="relative w-full bg-white text-[#202B61] select-none py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#202B61]/70 font-sans">
            Trusted Partnerships
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#202B61] tracking-tight">
            Our Clients
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#202B61]/80 leading-relaxed font-normal text-pretty">
            Trusted by leading enterprises, government partners, and ambitious brands across the UAE, GCC, and global markets.
          </p>
        </div>

        {/* Trailing Marquee Container with Soft Fade Edges */}
        <div className="relative w-full overflow-hidden flex items-center group pt-4">
          {/* Left Gradient Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Continuous Trailing Track */}
          <div
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "55s" }}
          >
            {trailingLogos.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="mx-6 sm:mx-8 lg:mx-10 shrink-0 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                title={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-10 sm:h-12 lg:h-14 max-h-14 max-w-[180px] sm:max-w-[220px] w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Right Gradient Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
