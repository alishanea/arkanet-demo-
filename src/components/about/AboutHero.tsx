"use client";

import React from "react";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[80vh] flex flex-col justify-center items-center bg-white text-[#202B61] select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80 overflow-hidden font-sans">
      
      {/* Subtle Atmospheric Gradient Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#202B61]/5 via-[#202B61]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202B61]/[0.04] border border-[#202B61]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#202B61]" />
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#202B61]">
              About Arkanet Technologies
            </p>
          </div>

          {/* Main Title */}
          <h1 className="hero-h1 text-[#202B61] text-center tracking-tight text-balance">
            Architecting Digital Systems<br className="hidden sm:inline" />
            That Power Modern Enterprise.
          </h1>

          {/* Supporting Lead Description */}
          <p className="hero-sub font-normal text-[#202B61]/85 leading-[1.7] max-w-2xl sm:max-w-3xl text-center mx-auto text-pretty text-base sm:text-lg lg:text-[19px]">
            For over 15 years, Arkanet Technologies has bridged strategic commercial vision with rigorous technical execution — designing, engineering, and scaling mission-critical platforms for enterprises across the UAE, GCC, and global markets.
          </p>

        </div>
      </div>

    </section>
  );
}
