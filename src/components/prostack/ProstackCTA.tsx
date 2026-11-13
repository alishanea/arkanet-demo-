"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProstackCTAProps {
  onOpenBooking: () => void;
}

export const ProstackCTA: React.FC<ProstackCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80 text-center select-none overflow-hidden font-sans">
      <div className="relative max-w-[800px] mx-auto flex flex-col items-center">
        
        {/* Prostack Icon Badge with Generous Bottom Spacing */}
        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-6 sm:mb-8 shadow-xs">
          <Image
            src="/assets/images/prostack-icon.png"
            alt="Prostack Icon"
            width={28}
            height={28}
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Heading with Generous, Breathable Line Height (No Overlapping Text) */}
        <h2 className="font-heading font-extrabold text-[#202B61] text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.22] sm:leading-[1.2] lg:leading-[1.18] text-balance mb-5 sm:mb-6">
          Ready to scale your digital business with Prostack?
        </h2>

        {/* Subtitle with Ample Margin Before Buttons */}
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed text-pretty mb-8 sm:mb-10">
          Experience an integrated platform engineered for creating, managing, and accelerating your online commerce.
        </p>

        {/* Balanced Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://prostack.arkanet.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#202B61] text-white hover:bg-[#151E48] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Prostack Live</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#202B61] hover:bg-slate-50 border border-slate-200/90 hover:border-[#202B61]/40 font-sans font-bold text-xs sm:text-sm tracking-tight shadow-none transition-all cursor-pointer active:scale-95"
          >
            <span>Talk to Our Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
