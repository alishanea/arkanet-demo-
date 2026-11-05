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
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans"
    >
      {/* ── 1. AUTHENTIC ARKANET ENGINEERING TEAM VIDEO BACKGROUND ── */}
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

        {/* Ambient Gradient Overlays for Depth, Contrast & Seamless Page Flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb]/75 via-[#f4f6fb]/50 to-[#f4f6fb]/95 pointer-events-none" />
      </div>

      {/* ── 2. DUAL-FREQUENCY ARCHITECTURAL TECH GRID OVERLAY ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(32, 43, 97, 0.13) 1px, transparent 1px),
            linear-gradient(to right, rgba(32, 43, 97, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(32, 43, 97, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px, 84px 84px, 84px 84px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 90%)",
        }}
      />

      {/* ── 3. HIGH-TECH PROCESSOR & NEURAL CIRCUIT DIE (TECHNOLOGICAL ARCHITECTURE WATERMARK) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[680px] lg:w-[840px] h-[520px] sm:h-[680px] lg:h-[840px] pointer-events-none z-[1] select-none opacity-[0.10] text-[#202B61]">
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Boundary Frame & Alignment Reticles */}
          <rect x="80" y="80" width="640" height="640" rx="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.4" />
          <circle cx="80" cy="80" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="720" cy="80" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="80" cy="720" r="4" fill="currentColor" opacity="0.5" />
          <circle cx="720" cy="720" r="4" fill="currentColor" opacity="0.5" />

          {/* Precision Chip Die Outer Ring */}
          <rect x="160" y="160" width="480" height="480" rx="18" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <rect x="180" y="180" width="440" height="440" rx="14" stroke="currentColor" strokeWidth="1" opacity="0.3" />

          {/* Central Computing & Neural Silicon Core */}
          <rect x="270" y="270" width="260" height="260" rx="12" stroke="currentColor" strokeWidth="2" opacity="0.8" fill="currentColor" fillOpacity="0.03" />

          {/* Core Quad-Cluster Logic Blocks */}
          <rect x="295" y="295" width="95" height="95" rx="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <rect x="410" y="295" width="95" height="95" rx="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <rect x="295" y="410" width="95" height="95" rx="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <rect x="410" y="410" width="95" height="95" rx="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />

          {/* Central Neural Node Nexus */}
          <circle cx="400" cy="400" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
          <circle cx="400" cy="400" r="8" fill="currentColor" opacity="0.9" />

          {/* North Data Bus Lines */}
          <path d="M220 160 V100 M260 160 V70 M310 160 V110 M360 160 V80 M400 160 V50 M440 160 V80 M490 160 V110 M540 160 V70 M580 160 V100" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          {/* South Data Bus Lines */}
          <path d="M220 640 V700 M260 640 V730 M310 640 V690 M360 640 V720 M400 640 V750 M440 640 V720 M490 640 V690 M540 640 V730 M580 640 V700" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          {/* West Data Bus Lines */}
          <path d="M160 220 H100 M160 260 H70 M160 310 H110 M160 360 H80 M160 400 H50 M160 440 H80 M160 490 H110 M160 540 H70 M160 580 H100" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          {/* East Data Bus Lines */}
          <path d="M640 220 H700 M640 260 H730 M640 310 H690 M640 360 H720 M640 400 H750 M640 440 H720 M640 490 H690 M640 540 H730 M640 580 H700" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />

          {/* Bus Terminal Pins / Node Dots */}
          <circle cx="400" cy="50" r="3.5" fill="currentColor" opacity="0.8" />
          <circle cx="400" cy="750" r="3.5" fill="currentColor" opacity="0.8" />
          <circle cx="50" cy="400" r="3.5" fill="currentColor" opacity="0.8" />
          <circle cx="750" cy="400" r="3.5" fill="currentColor" opacity="0.8" />

          <circle cx="260" cy="70" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="540" cy="70" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="260" cy="730" r="2.5" fill="currentColor" opacity="0.6" />
          <circle cx="540" cy="730" r="2.5" fill="currentColor" opacity="0.6" />

          {/* Diagonal Corner Circuit Vectors */}
          <path d="M160 160 L105 105 M640 160 L695 105 M160 640 L105 695 M640 640 L695 695" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
          <circle cx="105" cy="105" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="695" cy="105" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="105" cy="695" r="3" fill="currentColor" opacity="0.7" />
          <circle cx="695" cy="695" r="3" fill="currentColor" opacity="0.7" />
        </svg>
      </div>

      {/* ── 4. LIVING ARKANET BRAND AMBIENT OPTICAL GLOW ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] max-w-[95vw] h-[440px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,rgba(32,43,97,0.07)_45%,transparent_75%)] blur-2xl pointer-events-none z-[1] animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* ── 5. ARCHITECTURAL CORNER CROSSHAIRS (MINIMAL BLUEPRINT FRAMING) ── */}
      <div className="absolute inset-x-8 sm:inset-x-14 lg:inset-x-20 top-28 bottom-12 pointer-events-none z-[2] hidden sm:block">
        <span className="absolute top-0 left-0 font-mono text-xs text-[#202B61]/25 select-none leading-none">+</span>
        <span className="absolute top-0 right-0 font-mono text-xs text-[#202B61]/25 select-none leading-none">+</span>
        <span className="absolute bottom-0 left-0 font-mono text-xs text-[#202B61]/25 select-none leading-none">+</span>
        <span className="absolute bottom-0 right-0 font-mono text-xs text-[#202B61]/25 select-none leading-none">+</span>
      </div>

      {/* ── 6. PURE ORIGINAL HERO CONTENT (NO EXTRA TEXT, NO TABLES, ZERO CLUTTER) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        {/* Clean Editorial Headline (No Hyphens) */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        {/* Balanced Descriptive Subtitle */}
        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
