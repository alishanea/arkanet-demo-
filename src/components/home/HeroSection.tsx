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

      {/* ── 3. ARKANET LOGO & IT NETWORK CIRCUITRY IN BACKGROUND ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] sm:w-[780px] lg:w-[920px] h-[480px] sm:h-[580px] lg:h-[660px] pointer-events-none z-[1] flex items-center justify-center">
        
        {/* IT Field Circuit SVG Surrounding Logo */}
        <svg
          viewBox="0 0 900 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full text-[#202B61] opacity-25"
        >
          {/* Central Housing Frame */}
          <rect x="250" y="160" width="400" height="280" rx="20" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.6" />
          <rect x="270" y="180" width="360" height="240" rx="14" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />

          {/* West Bus Traces (Network Ingress) */}
          <path d="M50 220 H180 L210 250 H270" stroke="currentColor" strokeWidth="1.2" />
          <path d="M80 300 H270" stroke="currentColor" strokeWidth="1.5" />
          <path d="M50 380 H180 L210 350 H270" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="50" cy="220" r="3.5" fill="currentColor" />
          <circle cx="80" cy="300" r="4" fill="#3B82F6" className="animate-pulse" />
          <circle cx="50" cy="380" r="3.5" fill="currentColor" />

          {/* East Bus Traces (Network Egress) */}
          <path d="M630 250 H690 L720 220 H850" stroke="currentColor" strokeWidth="1.2" />
          <path d="M630 300 H820" stroke="currentColor" strokeWidth="1.5" />
          <path d="M630 350 H690 L720 380 H850" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="850" cy="220" r="3.5" fill="currentColor" />
          <circle cx="820" cy="300" r="4" fill="#3B82F6" className="animate-pulse" />
          <circle cx="850" cy="380" r="3.5" fill="currentColor" />

          {/* North Bus Traces (Cloud / Compute Lines) */}
          <path d="M350 50 V180" stroke="currentColor" strokeWidth="1.2" />
          <path d="M450 30 V180" stroke="currentColor" strokeWidth="1.5" />
          <path d="M550 50 V180" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="350" cy="50" r="3" fill="currentColor" />
          <circle cx="450" cy="30" r="4" fill="#3B82F6" className="animate-pulse" />
          <circle cx="550" cy="50" r="3" fill="currentColor" />

          {/* South Bus Traces (Database / Storage Lines) */}
          <path d="M350 420 V550" stroke="currentColor" strokeWidth="1.2" />
          <path d="M450 420 V570" stroke="currentColor" strokeWidth="1.5" />
          <path d="M550 420 V550" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="350" cy="550" r="3" fill="currentColor" />
          <circle cx="450" cy="570" r="4" fill="#3B82F6" className="animate-pulse" />
          <circle cx="550" cy="550" r="3" fill="currentColor" />

          {/* IT Data Packet Pulses Traveling on Traces */}
          <circle cx="160" cy="300" r="2.5" fill="#3B82F6">
            <animate attributeName="cx" values="80;270" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="740" cy="300" r="2.5" fill="#3B82F6">
            <animate attributeName="cx" values="630;820" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="100" r="2.5" fill="#3B82F6">
            <animate attributeName="cy" values="30;180" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="500" r="2.5" fill="#3B82F6">
            <animate attributeName="cy" values="420;570" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Subtle IT Field Telemetry Tags */}
          <text x="90" y="290" fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" opacity="0.6">// DATA_BUS_01</text>
          <text x="710" y="290" fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" opacity="0.6">// API_GATEWAY</text>
          <text x="460" y="55" fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" opacity="0.6">// CLOUD_CLUSTER</text>
          <text x="460" y="555" fill="currentColor" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" opacity="0.6">// NEURAL_PIPELINE</text>
        </svg>

        {/* Central Arkanet Brand Logo with IT Glow & Laser Scanline */}
        <div className="relative flex flex-col items-center justify-center opacity-18 select-none transition-opacity duration-500">
          {/* Arkanet Official Icon */}
          <img
            src="/assets/images/arkanet-icon-clean.png"
            alt="Arkanet Logo"
            className="w-20 sm:w-24 lg:w-28 h-auto object-contain drop-shadow-sm mb-2"
          />
          {/* Arkanet Official Brand Text */}
          <span className="font-display font-black tracking-[0.3em] text-xl sm:text-2xl lg:text-3xl text-[#202B61] leading-none">
            ARKANET
          </span>

          {/* Subtle IT Laser Scanline Sweep */}
          <div
            className="absolute left-[-20%] right-[-20%] h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent pointer-events-none"
            style={{
              animation: "itScanline 6s ease-in-out infinite",
            }}
          />
        </div>

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

      {/* Inline Keyframes for IT Scanline */}
      <style jsx>{`
        @keyframes itScanline {
          0%, 100% {
            top: -20%;
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          50% {
            top: 120%;
            opacity: 0.8;
          }
          65% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
