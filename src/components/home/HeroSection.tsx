"use client";

import React, { useRef, useState, useEffect } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth mouse tracking for atmospheric spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-between bg-[#0a0e17] text-white select-none overflow-hidden font-sans"
    >
      {/* ── CINEMATIC MONUMENTAL PORTAL VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/hero-cosmic-poster.jpg"
          className="w-full h-full object-cover object-[72%_center] sm:object-center opacity-95 transition-transform duration-1000 ease-out"
          style={{
            transform: isHovering
              ? `scale(1.02) translate(${(mousePos.x - 50) * -0.015}%, ${(mousePos.y - 50) * -0.015}%)`
              : "scale(1)",
          }}
        >
          <source src="/assets/hero-cosmic.webm" type="video/webm" />
          <source src="/assets/hero-cosmic.mp4" type="video/mp4" />
        </video>

        {/* Ambient atmospheric cursor spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: isHovering ? 0.8 : 0.3,
            background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(245, 190, 110, 0.09), transparent 75%)`,
          }}
        />

        {/* Cinematic gradient overlays matching EOSAI reference: dark left column for typography, brilliant right view */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/95 via-[#0a0e17]/55 sm:via-[#0a0e17]/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/90 via-transparent to-[#0a0e17]/40 pointer-events-none" />
      </div>

      {/* ── MAIN CONTENT CONTAINER (LEFT-ALIGNED EDITORIAL LAYOUT) ── */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 h-full flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 pointer-events-none">
        
        {/* Left-Aligned Headline & Story Block */}
        <div className="my-auto max-w-xl lg:max-w-2xl text-left pointer-events-auto">
          <h1 className="hero-h1 !text-white text-left font-light tracking-tight leading-[1.08] text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            Websites, Apps &amp; AI<br />
            <span className="font-semibold text-white">Engineered to Perform.</span>
          </h1>

          {/* Minimalist horizontal rule */}
          <div className="w-12 sm:w-16 h-[1.5px] bg-white/40 my-6 sm:my-8" />

          {/* Subtitle description */}
          <p className="hero-sub !text-slate-300 font-normal text-left text-sm sm:text-base lg:text-lg leading-relaxed max-w-md sm:max-w-lg drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
            Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
          </p>

          {/* Minimalist circular CTA button */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#work"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-4 cursor-pointer select-none"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white/15 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] font-medium text-white/90 group-hover:text-white transition-colors">
                View Our Work
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Left Minimalist Scroll Indicator */}
        <div className="mt-auto pt-6 flex items-center gap-3 select-none pointer-events-none opacity-70">
          <span className="text-[10px] tracking-[0.28em] uppercase text-white/80 font-mono">
            Scroll
          </span>
          <div className="w-8 h-[1px] bg-white/30 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-300 -top-[2.5px] right-0 animate-pulse shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
          </div>
        </div>

      </div>
    </section>
  );
};
