"use client";

import React, { useRef } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#0d1219] text-white select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans"
    >
      {/* ── CINEMATIC COSMIC ARCH & REFLECTIVE WATER BACKGROUND VIDEO ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-95 brightness-100"
        >
          <source src="/assets/hero-cosmic.webm" type="video/webm" />
          <source src="/assets/hero-cosmic.mp4" type="video/mp4" />
        </video>

        {/* Subtle radial scrim to guarantee razor-sharp headline contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* ── CLEAN EDITORIAL HEADLINE & SUBTITLE ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8">
        <h1 className="hero-h1 text-white text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)]">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        <p className="hero-sub font-medium text-slate-200 leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.8)]">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
