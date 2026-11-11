"use client";

import React, { useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Smooth mouse tracking
    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = -1000;
    let targetY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      targetX = -1000;
      targetY = -1000;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // ── MINIMALIST FLOW: JUST 2 SUBTLE LOWER-THIRD HARMONIC RIBBONS (NO FULL WAVES, NO CIRCLES) ──
    const ribbons = [
      {
        baseYRatio: 0.74,
        amplitude: 38,
        wavelength: 0.0022,
        speed: 0.005,
        stroke: "rgba(32, 43, 97, 0.22)",
        fill: "rgba(32, 43, 97, 0.018)",
        lineWidth: 1.4,
      },
      {
        baseYRatio: 0.82,
        amplitude: 44,
        wavelength: 0.0028,
        speed: 0.007,
        stroke: "rgba(59, 130, 246, 0.36)",
        fill: "rgba(59, 130, 246, 0.025)",
        lineWidth: 1.8,
      },
      {
        baseYRatio: 0.89,
        amplitude: 32,
        wavelength: 0.0034,
        speed: 0.006,
        stroke: "rgba(32, 43, 97, 0.12)",
        fill: "transparent",
        lineWidth: 1.0,
      },
    ];

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      if (targetX > 0) {
        mouseX += (targetX - mouseX) * 0.06;
        mouseY += (targetY - mouseY) * 0.06;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }

      time += 1;

      // ── Render each minimalist silk ribbon ──
      for (const r of ribbons) {
        ctx.beginPath();
        const baseY = height * r.baseYRatio;
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        const step = 8;
        for (let x = 0; x <= width + step; x += step) {
          const wave1 = Math.sin(x * r.wavelength + time * r.speed) * r.amplitude;
          const wave2 = Math.cos(x * (r.wavelength * 0.6) - time * (r.speed * 0.7)) * (r.amplitude * 0.4);
          let y = baseY + wave1 + wave2;

          // Gentle cursor deflection
          if (mouseX > 0 && mouseY > 0) {
            const dx = x - mouseX;
            const dy = baseY - mouseY;
            const dist = Math.hypot(dx, dy);
            const reach = 220;
            if (dist < reach) {
              const factor = (1 - dist / reach) ** 2;
              y += (mouseY - baseY) * factor * 0.20;
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        if (r.fill !== "transparent") {
          ctx.fillStyle = r.fill;
          ctx.fill();
        }

        ctx.strokeStyle = r.stroke;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-between items-center bg-white text-[#202B61] select-none pt-32 sm:pt-36 lg:pt-40 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* ── CINEMATIC AMBIENT 3D DIGITAL WAVE BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop"
          alt="Arkanet Digital Innovation Waves"
          className="w-full h-full object-cover opacity-35 scale-105"
          loading="eager"
        />
        {/* Soft atmospheric radial & linear gradient veil ensuring optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white pointer-events-none" />
      </div>

      {/* ── MINIMALIST CANVAS FLOW (LOWER THIRD HARMONIC RIBBONS) ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] w-full h-full pointer-events-auto"
      />

      {/* ── MAIN HERO CONTENT (EYEBROW, EDITORIAL HEADLINE, SUBTITLE & CTAS) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center my-auto px-4 sm:px-8">
        {/* 1. Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202B61]/5 border border-[#202B61]/10 mb-5 sm:mb-6 pointer-events-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#202B61]">
            The Digital Innovation Company • Dubai &amp; Global
          </span>
        </div>

        {/* 2. Editorial Headline */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_2px_16px_rgba(32,43,97,0.06)] leading-[1.08]">
          Architecting Next-Gen<br />
          Digital Products &amp; Enterprise AI
        </h1>

        {/* 3. Narrative Subtitle */}
        <p className="hero-sub font-medium text-[#202B61]/80 leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance drop-shadow-[0_1px_8px_rgba(32,43,97,0.04)]">
          We design and engineer high-performance web platforms, mobile apps, and automated AI systems that help ambitious businesses scale and lead their markets.
        </p>

        {/* 4. Actionable CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 pointer-events-auto">
          {onOpenBooking && (
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#202B61] text-white hover:bg-[#151E48] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer group"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          )}

          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#202B61] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-2xs hover:border-[#202B61]/30 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Explore Flagship Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* ── BOTTOM IMPACT & TRUST STRIP ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto pt-8 border-t border-slate-200/60 pointer-events-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="space-y-0.5">
            <p className="font-heading font-extrabold text-base sm:text-lg text-[#202B61] tracking-tight">15+ Years</p>
            <p className="font-sans text-[11px] sm:text-xs text-slate-500 font-medium">Engineering Track Record</p>
          </div>
          <div className="space-y-0.5">
            <p className="font-heading font-extrabold text-base sm:text-lg text-[#202B61] tracking-tight">50+ Products</p>
            <p className="font-sans text-[11px] sm:text-xs text-slate-500 font-medium">Enterprise Deployments</p>
          </div>
          <div className="space-y-0.5">
            <p className="font-heading font-extrabold text-base sm:text-lg text-[#202B61] tracking-tight">99.9%</p>
            <p className="font-sans text-[11px] sm:text-xs text-slate-500 font-medium">Production Reliability</p>
          </div>
          <div className="space-y-0.5">
            <p className="font-heading font-extrabold text-base sm:text-lg text-[#202B61] tracking-tight">Dubai &amp; Global</p>
            <p className="font-sans text-[11px] sm:text-xs text-slate-500 font-medium">UAE Headquarters</p>
          </div>
        </div>
      </div>
    </section>
  );
};
