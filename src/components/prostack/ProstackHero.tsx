"use client";

import React from "react";
import Image from "next/image";

export const ProstackHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans flex flex-col justify-center">
      {/* ── CINEMATIC ARCHITECTURAL BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/images/prostack-hero-bg.jpg"
          alt="Prostack Architecture Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-30 brightness-[1.04] contrast-[1.05]"
        />

        {/* Precision Multi-Layer Gradients for Clean Contrast & Pure Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto my-auto">
        <div className="max-w-4xl space-y-6 sm:space-y-7 text-left">
          
          {/* Main Heading: Prostack using the Official Brand Typography */}
          <h1 className="leading-none text-balance flex items-center">
            <span className="sr-only">Prostack</span>
            <Image
              src="/assets/images/prostack-logo-navy.png"
              alt="Prostack"
              width={660}
              height={128}
              className="h-14 sm:h-20 lg:h-[88px] w-auto object-contain select-none pointer-events-none -ml-1"
              priority
            />
          </h1>

          {/* One Clean, Refined Small Sub-Heading */}
          <h2 className="font-heading font-semibold text-lg sm:text-2xl lg:text-[26px] text-[#202B61]/85 tracking-[-0.015em] leading-snug text-balance">
            One Connected Platform. Everything Your Digital Business Needs.
          </h2>

          {/* Clearly Differentiated, Breathable Content Description */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-500 font-normal leading-[1.65] max-w-2xl text-pretty pt-0.5">
            Build and scale high-performance websites and online storefronts with an integrated platform combining CMS, headless commerce, automated SEO, and security infrastructure.
          </p>

        </div>
      </div>
    </section>
  );
};
