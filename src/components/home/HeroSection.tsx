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

    // Mouse tracking with soft damping
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

    // ── 5 ELEGANT FLOWING WAVE RIBBONS ──
    // Each wave has its own frequency, speed, vertical baseline, and subtle phase offset
    const waves = [
      {
        baseYRatio: 0.52,
        amplitude: 45,
        wavelength: 0.0032,
        speed: 0.008,
        stroke: "rgba(32, 43, 97, 0.22)",
        fill: "rgba(32, 43, 97, 0.035)",
        lineWidth: 1.8,
      },
      {
        baseYRatio: 0.55,
        amplitude: 55,
        wavelength: 0.0026,
        speed: 0.006,
        stroke: "rgba(59, 130, 246, 0.35)",
        fill: "rgba(59, 130, 246, 0.045)",
        lineWidth: 2.0,
      },
      {
        baseYRatio: 0.58,
        amplitude: 40,
        wavelength: 0.0038,
        speed: 0.010,
        stroke: "rgba(32, 43, 97, 0.18)",
        fill: "rgba(32, 43, 97, 0.025)",
        lineWidth: 1.4,
      },
      {
        baseYRatio: 0.62,
        amplitude: 60,
        wavelength: 0.0022,
        speed: 0.005,
        stroke: "rgba(59, 130, 246, 0.28)",
        fill: "rgba(59, 130, 246, 0.035)",
        lineWidth: 1.6,
      },
      {
        baseYRatio: 0.66,
        amplitude: 35,
        wavelength: 0.0042,
        speed: 0.012,
        stroke: "rgba(32, 43, 97, 0.14)",
        fill: "transparent",
        lineWidth: 1.2,
      },
    ];

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      if (targetX > 0) {
        mouseX += (targetX - mouseX) * 0.08;
        mouseY += (targetY - mouseY) * 0.08;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }

      // Soft ambient light bloom around mouse
      if (mouseX > 0 && mouseY > 0) {
        const spot = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 260);
        spot.addColorStop(0, "rgba(59, 130, 246, 0.08)");
        spot.addColorStop(0.6, "rgba(32, 43, 97, 0.02)");
        spot.addColorStop(1, "transparent");
        ctx.fillStyle = spot;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 1;

      // ── Render each flowing wave line ──
      for (let i = 0; i < waves.length; i++) {
        const w = waves[i];
        const baseY = height * w.baseYRatio;
        const waveTime = time * w.speed;

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        const step = 8; // step size in px for smooth curve
        for (let x = 0; x <= width + step; x += step) {
          // Primary harmonic wave
          let y =
            baseY +
            Math.sin(x * w.wavelength + waveTime) * w.amplitude +
            Math.sin(x * w.wavelength * 0.5 - waveTime * 0.6) * (w.amplitude * 0.4);

          // Gentle mouse flow interaction: smooth fluid dip when cursor is near
          if (mouseX > 0 && mouseY > 0) {
            const dx = x - mouseX;
            const dist = Math.abs(dx);
            const reach = 220;
            if (dist < reach) {
              const factor = (1 - dist / reach) ** 2;
              const yDiff = mouseY - baseY;
              // Gentle pull towards cursor height
              y += yDiff * factor * 0.28;
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Fill under the curve for translucent layered depth
        if (w.fill !== "transparent") {
          ctx.fillStyle = w.fill;
          ctx.fill();
        }

        // Stroke the crest line
        ctx.strokeStyle = w.stroke;
        ctx.lineWidth = w.lineWidth;
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
      {/* ── SMOOTH ELEGANT FLUID WAVE FLOW CANVAS ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-auto"
      />

      {/* ── CLEAN EDITORIAL HEADLINE & SUBTITLE ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8">
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_2px_14px_rgba(32,43,97,0.06)]">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance drop-shadow-[0_1px_6px_rgba(32,43,97,0.04)]">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
