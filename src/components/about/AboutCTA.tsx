"use client";

import React from "react";

interface AboutCTAProps {
  onOpenBooking: () => void;
}

export function AboutCTA({ onOpenBooking }: AboutCTAProps) {
  return (
    <section className="relative z-20 bg-white text-[#202B61] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-left select-none border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-8">
        <div 
          className="group cursor-pointer inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#202B61] focus-visible:ring-offset-4 select-none" 
          onClick={onOpenBooking}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenBooking();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Start a project: Let's make something engaging"
        >
          <h2 className="hero-h1 text-[#202B61]">
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
