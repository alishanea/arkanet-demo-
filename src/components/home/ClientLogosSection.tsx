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
  { id: "1", src: "/assets/clinet-logo/1.png", alt: "Al Ras" },
  { id: "2", src: "/assets/clinet-logo/2.png", alt: "Arbitralis" },
  { id: "3", src: "/assets/clinet-logo/3.png", alt: "B&G Store" },
  { id: "4", src: "/assets/clinet-logo/4.png", alt: "Decorpoint International" },
  { id: "5", src: "/assets/clinet-logo/5.png", alt: "Dual Investments" },
  { id: "6", src: "/assets/clinet-logo/6.png", alt: "Ebonite" },
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

export const ClientLogosSection: React.FC<ClientLogosSectionProps> = () => {
  // Duplicate array once for seamless -50% infinite trailing loop
  const trailingLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="trusted-by"
      className="relative w-full bg-[#edf2f9] text-[#202B61] select-none py-10 sm:py-12 lg:py-14 border-t border-b border-slate-200/90 overflow-hidden"
    >
      <div className="w-full">
        {/* Small Subtle Label */}
        <div className="text-center mb-6 sm:mb-7">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#202B61]/55 font-sans">
            Our Clients
          </p>
        </div>

        {/* Trailing Marquee Container with Soft Fade Edges */}
        <div className="relative w-full overflow-hidden flex items-center group">
          {/* Left Trailing Gradient Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-[#edf2f9] to-transparent z-10 pointer-events-none" />

          {/* Continuous Trailing Track */}
          <div
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "36s" }}
          >
            {trailingLogos.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="mx-6 sm:mx-8 lg:mx-10 shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="eager"
                  style={{ mixBlendMode: "multiply" }}
                  className="h-7 sm:h-8 lg:h-9 max-h-8 sm:max-h-9 max-w-[110px] sm:max-w-[130px] w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Right Trailing Gradient Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-[#edf2f9] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
