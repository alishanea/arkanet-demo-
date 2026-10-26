"use client";

import React, { useRef } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToOverview = () => {
    const el = document.getElementById("what-is-arkanet");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-between items-center bg-[#f4f6fb] text-[#0b1330] select-none pt-20 sm:pt-24 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* ── CINEMATIC AMBIENT VIDEO BACKGROUND (INTEGRATED SEAMLESSLY, NO CUTOFF) ── */}
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

      {/* Top spacer to balance vertical centering */}
      <div className="w-full h-2 sm:h-4 shrink-0" />

      {/* ── HERO CONTENT (PERFECTLY CENTERED, FITS EXACTLY IN 1 SCREEN) ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto px-4">
        {/* Clean, Majestic Editorial Headline (Plus Jakarta Sans) */}
        <h1 className="hero-h1 text-[#0b1330] text-center max-w-4xl sm:max-w-5xl mx-auto">
          Building Intelligent<br />
          Digital Products
        </h1>

        {/* Balanced Descriptive Subtitle (Inter) */}
        <p className="hero-sub font-medium text-[#0b1330] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-4 sm:mt-5">
          We engineer high performance websites, mobile apps, and intelligent AI systems.
          Delivering scalable digital products built to perform and grow your business.
        </p>

        {/* Call to Action Buttons (Clean Capsule with Circular Arrow Placement) */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-3.5 bg-[#0b1330] text-white hover:bg-[#132047] active:scale-[0.98] pl-6 pr-2.5 py-2.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-[0_4px_14px_rgba(11,19,48,0.16)] hover:shadow-[0_6px_20px_rgba(11,19,48,0.22)] cursor-pointer"
          >
            <span className="tracking-tight">Start a Project</span>
            <span className="w-9 h-9 rounded-full bg-white/12 text-[#38bdf8] flex items-center justify-center group-hover:bg-[#38bdf8] group-hover:text-[#0b1330] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={scrollToOverview}
            className="group inline-flex items-center gap-3 bg-white/80 hover:bg-white text-[#0b1330] border border-slate-200/90 hover:border-slate-300 pl-6 pr-2.5 py-2.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <span className="tracking-tight">What We Do</span>
            <span className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-[#0b1330] flex items-center justify-center transition-all duration-300">
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* ── SUBTLE BOTTOM EXPLORE ANCHOR (COMMON FONT & STYLING) ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-center pt-2 pb-2 shrink-0">
        <button
          type="button"
          onClick={scrollToOverview}
          aria-label="Scroll to overview"
          className="inline-flex items-center gap-2 font-medium text-sm text-slate-500 hover:text-[#202B61] transition-colors cursor-pointer group py-1"
        >
          <span className="tracking-tight">Explore Arkanet</span>
          <span className="w-5 h-5 rounded-full bg-slate-200/60 text-slate-500 group-hover:bg-[#202B61] group-hover:text-white flex items-center justify-center transition-all duration-200">
            <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </span>
        </button>
      </div>

    </section>
  );
};
