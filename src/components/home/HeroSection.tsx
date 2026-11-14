"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-white text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans"
    >
      {/* ── CINEMATIC AMBIENT BACKGROUND GENERATED VIA CANVA AI ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/assets/images/canva-hero-bg.png"
          alt="Arkanet Digital Architecture & Global Enterprise"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65 sm:opacity-75 brightness-[1.03] contrast-[1.04] pointer-events-none"
        />

        {/* Ambient editorial gradient overlay ensuring crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/90 pointer-events-none" />
      </div>

      {/* ── PURE EDITORIAL HEADLINE & SUBTITLE (ZERO MICRO-ELEMENTS, ZERO WAVES, ZERO CLUTTER) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8">
        <h1 className="hero-h1 text-[#202B61] text-center max-w-5xl sm:max-w-6xl mx-auto drop-shadow-[0_2px_20px_rgba(32,43,97,0.06)] leading-[1.12]">
          Architecting Next-Gen<br className="hidden sm:inline" />{" "}
          Digital Products &amp;&nbsp;Enterprise&nbsp;AI
        </h1>

        <p className="hero-sub font-medium text-[#202B61]/80 leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-6 sm:mt-7 text-pretty drop-shadow-[0_1px_8px_rgba(32,43,97,0.03)] text-base sm:text-lg lg:text-xl">
          We design and engineer high-performance web platforms, mobile apps, and automated AI systems that help ambitious businesses scale and lead their&nbsp;markets.
        </p>
      </div>
    </section>
  );
};
