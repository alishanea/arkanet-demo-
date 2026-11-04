"use client";

import React, { useRef } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="home" className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      
      {/* -- CINEMATIC AMBIENT VIDEO / IMAGE BACKGROUND -- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-65 brightness-105 saturate-110"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          <source src="/assets/hero-video.webm" type="video/webm" />
        </video>

        {/* Consistent full-bleed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb]/75 via-[#f4f6fb]/55 to-[#f4f6fb]/85 pointer-events-none" />
      </div>

      {/* -- HERO CONTENT (PERFECTLY CENTERED, FITS EXACTLY IN 1 SCREEN) -- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        {/* Clean Editorial Headline (No Hyphens) */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        {/* Balanced Descriptive Subtitle (No Hyphens, No Orphaned Words, Perfectly Balanced) */}
        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>

    </section>
  );
};
