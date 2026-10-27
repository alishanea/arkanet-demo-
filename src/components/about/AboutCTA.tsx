"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface AboutCTAProps {
  onOpenBooking: () => void;
}

export function AboutCTA({ onOpenBooking }: AboutCTAProps) {
  return (
    <section className="relative z-20 bg-white text-[#0b1330] py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-[40px] text-left select-none">
      <div className="space-y-4 sm:space-y-8">
        
        <div className="group cursor-pointer inline-block" onClick={onOpenBooking}>
          <h2 className="hero-h1 text-[#0b1330] group-hover:text-black transition-colors duration-500">
            <span>Let&apos;s make</span>
            {" "}
            <span className="inline-block text-[#0b1330] mx-1 sm:mx-2.5 font-normal align-middle text-[0.88em] group-hover:translate-x-3 transition-transform duration-500 ease-out">
              →
            </span>
            <br />
            <span>something engaging</span>
          </h2>
        </div>

        {/* Subtle link with small arrow */}
        <div className="pt-2 flex items-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-slate-600 hover:text-[#0b1330] transition-colors cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#0b1330]" />
          </button>
        </div>

      </div>
    </section>
  );
}
