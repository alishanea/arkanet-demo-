"use client";

import React from "react";

export interface ClientLogosSectionProps {
  onOpenBooking?: () => void;
}

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
];

export const ClientLogosSection: React.FC<ClientLogosSectionProps> = () => {
  // Duplicate array once for seamless -50% infinite trailing train loop
  const trailingLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="clients"
      className="relative w-full bg-[#f4f6fb] text-[#202B61] select-none py-10 sm:py-12 lg:py-14 border-t border-slate-200/80 overflow-hidden font-sans scroll-mt-24"
    >
      <div className="w-full">
        {/* Subtle Section Label */}
        <div className="text-center mb-6 sm:mb-7">
          <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.28em] text-[#202B61] font-sans leading-none">
            Our Clients
          </p>
        </div>

        {/* Trailing Marquee Container with Soft Fade Edges (Continuous Train) */}
        <div className="relative w-full overflow-hidden flex items-center group">
          {/* Left Trailing Gradient Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 lg:w-60 bg-gradient-to-r from-[#f4f6fb] to-transparent z-10 pointer-events-none" />

          {/* Continuous Trailing Track (Train) */}
          <div
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "55s" }}
          >
            {trailingLogos.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="bg-white rounded-xl p-4 sm:p-5 h-20 sm:h-24 border border-slate-200/90 shadow-none flex items-center justify-center shrink-0 min-w-[170px] sm:min-w-[210px] mx-2 sm:mx-3 transition-all duration-300 hover:border-slate-300 cursor-pointer"
                title={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="eager"
                  className="max-h-10 sm:max-h-12 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Right Trailing Gradient Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 lg:w-60 bg-gradient-to-l from-[#f4f6fb] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
