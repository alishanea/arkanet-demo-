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

      {/* ── 3. ARKANET SIGNATURE EMBLEM WATERMARK (ELEGANT BACKGROUND BRAND RELATION) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1] select-none opacity-[0.045] transition-opacity duration-700">
        <img
          src="/assets/images/arkanet-icon-clean.png"
          alt=""
          aria-hidden="true"
          className="w-[300px] sm:w-[420px] lg:w-[520px] h-auto object-contain blur-[0.5px]"
        />
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
