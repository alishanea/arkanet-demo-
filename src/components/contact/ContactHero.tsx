"use client";

import React from "react";

export function ContactHero() {
  return (
    <section className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 overflow-hidden">
      
      {/* -- CINEMATIC AMBIENT BACKGROUND -- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
          alt="Arkanet Global Engineering Hubs"
          className="w-full h-full object-cover opacity-55 brightness-105 saturate-110"
          loading="eager"
        />

        {/* Multi-layered soft vignette and legibility masks */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb]/80 via-[#f4f4f8]/45 to-[#f4f6fb]/85 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#f4f6fb]/75 backdrop-blur-[2px] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* -- HERO CONTENT (PERFECTLY CENTERED, FITS EXACTLY IN 1 SCREEN) -- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center px-4">
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
