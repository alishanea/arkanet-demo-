"use client";

import React from "react";

export function ContactHero() {
  return (
    <section className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-white text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80 overflow-hidden">
      
      {/* -- CINEMATIC AMBIENT BACKGROUND -- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
          alt="Arkanet Global Engineering Hubs"
          className="w-full h-full object-cover opacity-50 brightness-105 saturate-105"
          loading="eager"
        />

        {/* Consistent full-bleed gradient overlay (no oval shape) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />
      </div>

      {/* -- HERO CONTENT (PERFECTLY CENTERED, FITS EXACTLY IN 1 SCREEN) -- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        {/* Clean, Majestic Editorial Headline */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto">
          Let&apos;s Build Something<br />
          Exceptional Together
        </h1>

        {/* Balanced Descriptive Subtitle */}
        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6">
          Have a product concept, an architectural challenge, or a business system to scale? Share your requirements with our engineering leadership in Dubai and India.
        </p>
      </div>

    </section>
  );
}
