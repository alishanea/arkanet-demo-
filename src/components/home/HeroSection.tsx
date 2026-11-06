"use client";

import React, { useRef, useEffect } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
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
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* ── MINIMALIST CANVAS FLOW (LOWER THIRD ONLY, NO FULL WAVES, NO CIRCLES) ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-auto"
      />

      {/* ── CLEAN CENTERED EDITORIAL HEADLINE & SUBTITLE WITH GENEROUS EMPTY SPACE ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8">
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_2px_16px_rgba(32,43,97,0.06)]">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        <p className="hero-sub font-medium text-[#202B61]/80 leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance drop-shadow-[0_1px_8px_rgba(32,43,97,0.04)]">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines — not just look good in a pitch deck. Based in Kerala and built for founders, growing SMEs, and enterprise teams alike, we take projects from first sketch through to production, then stay on as the team that keeps them running and improving.
        </p>
      </div>
    </section>
  );
};
