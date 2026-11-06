"use client";

import React from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#f4f6fb] text-[#202B61] pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80 text-left select-none"
    >
      {/* ── DEDICATED ENGINEERING & WORKSPACE BACKGROUND IMAGE (MATCHING ARCHITECTURAL HERO ACROSS ALL PAGES) ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[56%] z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop"
          alt="Arkanet Engineering & Code Workspace"
          className="w-full h-full object-cover object-center lg:object-right opacity-80 sm:opacity-85 brightness-[1.02] contrast-[1.05]"
          loading="eager"
        />

        {/* Precision Gradient Blends: Keeps left text 100% crisp & readable while right image remains vivid and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f6fb] via-[#f4f6fb]/80 lg:via-[#f4f6fb]/50 to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6fb]/40 via-transparent to-transparent pointer-events-none z-[1]" />
        {/* Mobile contrast guard so copy never clashes on smaller devices */}
        <div className="absolute inset-0 bg-[#f4f6fb]/75 sm:bg-[#f4f6fb]/60 lg:hidden pointer-events-none z-[1]" />
      </div>

      {/* ── FOREGROUND CONTENT: EDITORIAL HEADLINE & SUBTITLE MATCHING SITEWIDE ARCHITECTURAL HIERARCHY ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full my-auto space-y-6 sm:space-y-8">
        <div className="space-y-5 w-full max-w-4xl lg:max-w-5xl">
          <h1 className="hero-h1 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.08]">
            Websites, Apps &amp; AI <br />
            <span className="text-[#202B61]">Engineered to Perform</span>
          </h1>

          <p className="hero-sub font-sans font-medium text-[#202B61]/80 leading-relaxed max-w-3xl">
            Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
          </p>
        </div>
      </div>
    </section>
  );
};
