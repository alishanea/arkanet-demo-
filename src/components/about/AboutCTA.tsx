"use client";

import React from "react";

interface AboutCTAProps {
  onOpenBooking: () => void;
}

export function AboutCTA({ onOpenBooking }: AboutCTAProps) {
  return (
    <section id="contact" className="relative z-20 bg-[#f4f6fb] text-[#202B61] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-left select-none border-t border-b border-slate-200/80 font-sans scroll-mt-24">
      <div className="max-w-[1400px] w-full mx-auto space-y-4 sm:space-y-6">
        <div 
          className="group cursor-pointer inline-block outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:outline-none select-none" 
          onClick={onOpenBooking}
          tabIndex={0}
        >
          <h2 className="hero-h1 text-[#202B61]">
            <span>Have something</span>
            {" "}
            <span className="inline-block text-[#202B61] mx-1 sm:mx-2.5 font-normal align-middle text-[0.88em] group-hover:translate-x-3 transition-transform duration-300 ease-out">
              →
            </span>
            <br />
            <span>in mind?</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base lg:text-lg text-[#202B61]/80 max-w-2xl leading-relaxed">
          Send us a brief, a sketch, or just a problem you haven&apos;t solved yet — we&apos;ll tell you plainly whether AI or a rebuild is the right call.
        </p>
      </div>
    </section>
  );
}
