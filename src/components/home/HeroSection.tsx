"use client";

import React, { useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans"
    >
      {/* ── 1. CINEMATIC AMBIENT VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-45 brightness-105 saturate-110"
        >
          <source src="/assets/hero-video.webm" type="video/webm" />
          <source src="/assets/images/compressed-hero-video.mp4" type="video/mp4" />
        </video>

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb]/80 via-[#f4f6fb]/60 to-[#f4f6fb]/90 pointer-events-none" />
      </div>

      {/* ── 2. SUBTLE ARCHITECTURAL TECH GRID & AMBIENT GLOW ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(32, 43, 97, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(32, 43, 97, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 85%)",
        }}
      />

      {/* Soft Ambient Technical Glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] max-w-[90vw] h-[360px] bg-gradient-to-tr from-[#202B61]/8 via-[#3b82f6]/10 to-transparent rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* ── 3. HERO CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        
        {/* Subtle Tech Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-300/80 bg-white/80 backdrop-blur-md shadow-[0_2px_8px_rgba(32,43,97,0.04)] mb-5 sm:mb-6 transition-all duration-300 hover:border-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#202B61]/85 font-mono">
            Next-Gen Software &amp; Applied AI
          </span>
        </div>

        {/* Clean Editorial Technological Headline */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto tracking-tight">
          Websites, Apps &amp; AI<br />
          <span className="relative inline-block">
            Engineered to Perform
            {/* Subtle tech accent underline line */}
            <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#202B61]/30 to-transparent pointer-events-none" />
          </span>
        </h1>

        {/* Balanced Descriptive Subtitle */}
        <p className="hero-sub font-normal text-[#202B61]/85 leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>

        {/* Clean, Powerful Action CTAs */}
        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#202B61] text-white font-medium text-sm sm:text-[15px] shadow-[0_4px_14px_rgba(32,43,97,0.22)] hover:bg-[#151E48] transition-all duration-200 group cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <Link
            href="/capabilities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/80 hover:bg-white text-[#202B61] border border-slate-300/80 font-medium text-sm sm:text-[15px] backdrop-blur-sm transition-all duration-200 hover:border-slate-400 cursor-pointer shadow-sm"
          >
            <span>View Capabilities</span>
            <ChevronRight className="w-4 h-4 text-[#202B61]/70" />
          </Link>
        </div>

        {/* Subtle Tech Telemetry Ticker / Spec Badges */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-slate-200/80 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2 text-[11.5px] sm:text-xs text-[#202B61]/75 font-mono tracking-wide">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#202B61]/40" />
            Full-Stack Systems
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#202B61]/40" />
            Applied AI Models
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#202B61]/40" />
            Cloud &amp; Telemetry
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#202B61]/40" />
            Kerala &amp; Dubai Hubs
          </span>
        </div>

      </div>

    </section>
  );
};
