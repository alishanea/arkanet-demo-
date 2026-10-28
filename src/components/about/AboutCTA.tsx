"use client";

import React from "react";

interface AboutCTAProps {
  onOpenBooking: () => void;
}

export function AboutCTA({ onOpenBooking }: AboutCTAProps) {
  return (
    <section className="relative z-20 bg-white text-[#202B61] py-8 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-[40px] text-left select-none">
      <div className="space-y-4 sm:space-y-8">
        <div 
          className="group cursor-pointer inline-block outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:outline-none select-none" 
          onClick={onOpenBooking}
          tabIndex={0}
        >
          <h2 className="hero-h1 text-[#202B61] group-hover:text-[#1d4ed8] transition-colors duration-300">
            <span>Let&apos;s make</span>
            {" "}
            <span className="inline-block text-[#202B61] mx-1 sm:mx-2.5 font-normal align-middle text-[0.88em] group-hover:translate-x-3 transition-transform duration-300 ease-out">
              →
            </span>
            <br />
            <span>something engaging</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
