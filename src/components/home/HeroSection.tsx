"use client";

import React, { useRef } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* -- CINEMATIC AMBIENT VIDEO BACKGROUND (INTEGRATED SEAMLESSLY, NO CUTOFF) -- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-25 brightness-105 saturate-110"
        >
          <source src="/assets/hero-video.webm" type="video/webm" />
          <source src="/assets/images/compressed-hero-video.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered soft vignette and legibility masks */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb]/95 via-[#f4f4f8]/75 to-[#f4f6fb] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#38bdf8]/15 via-[#1d4ed8]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* -- HERO CONTENT (PERFECTLY CENTERED, FITS EXACTLY IN 1 SCREEN) -- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center px-4">
        {/* Clean, Majestic Editorial Headline (Plus Jakarta Sans) */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto">
          Building Intelligent<br />
          Digital Products
        </h1>

        {/* Balanced Descriptive Subtitle (Inter) */}
        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6">
          We engineer high performance websites, mobile apps, and intelligent AI systems.
          Delivering scalable digital products built to perform and grow your business.
        </p>
      </div>

    </section>
  );
};
