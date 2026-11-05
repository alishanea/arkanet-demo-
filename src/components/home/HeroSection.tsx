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

    // Mouse tracking with smooth physics
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

    // ── HARMONIC FLOW BANDS (DISTRIBUTED ACROSS THE FULL VIEWPORT) ──
    const waveBands = [
      // Upper atmospheric currents (fills top empty space)
      {
        baseYRatio: 0.18,
        amplitude: 38,
        wavelength: 0.0024,
        speed: 0.007,
        stroke: "rgba(32, 43, 97, 0.14)",
        fill: "rgba(32, 43, 97, 0.015)",
        lineWidth: 1.2,
      },
      {
        baseYRatio: 0.28,
        amplitude: 45,
        wavelength: 0.0031,
        speed: 0.009,
        stroke: "rgba(59, 130, 246, 0.22)",
        fill: "rgba(59, 130, 246, 0.025)",
        lineWidth: 1.4,
      },
      // Mid-depth flow framing the headline
      {
        baseYRatio: 0.44,
        amplitude: 35,
        wavelength: 0.0028,
        speed: 0.006,
        stroke: "rgba(32, 43, 97, 0.12)",
        fill: "transparent",
        lineWidth: 1.0,
      },
      {
        baseYRatio: 0.54,
        amplitude: 52,
        wavelength: 0.0022,
        speed: 0.008,
        stroke: "rgba(59, 130, 246, 0.32)",
        fill: "rgba(59, 130, 246, 0.035)",
        lineWidth: 1.8,
      },
      // Lower fluid flow ribbons
      {
        baseYRatio: 0.68,
        amplitude: 58,
        wavelength: 0.0026,
        speed: 0.007,
        stroke: "rgba(32, 43, 97, 0.24)",
        fill: "rgba(32, 43, 97, 0.04)",
        lineWidth: 2.0,
      },
      {
        baseYRatio: 0.80,
        amplitude: 48,
        wavelength: 0.0034,
        speed: 0.011,
        stroke: "rgba(59, 130, 246, 0.25)",
        fill: "rgba(59, 130, 246, 0.03)",
        lineWidth: 1.6,
      },
      {
        baseYRatio: 0.90,
        amplitude: 36,
        wavelength: 0.0040,
        speed: 0.013,
        stroke: "rgba(32, 43, 97, 0.15)",
        fill: "transparent",
        lineWidth: 1.2,
      },
    ];

    // ── 38 GENTLE FLOW PARTICLES (DRIFTING ORGANICALLY ALONG CURRENTS) ──
    interface FlowParticle {
      x: number;
      y: number;
      speed: number;
      r: number;
      alpha: number;
      bandIdx: number;
      phase: number;
    }

    const particles: FlowParticle[] = [];
    for (let i = 0; i < 38; i++) {
      particles.push({
        x: Math.random() * (width || 1400),
        y: Math.random() * (height || 900),
        speed: 0.4 + Math.random() * 0.7,
        r: 1.4 + Math.random() * 1.6,
        alpha: 0.25 + Math.random() * 0.45,
        bandIdx: i % waveBands.length,
        phase: Math.random() * Math.PI * 2,
      });
    }

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

      // Soft ambient light aura following cursor
      if (mouseX > 0 && mouseY > 0) {
        const spot = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
        spot.addColorStop(0, "rgba(59, 130, 246, 0.09)");
        spot.addColorStop(0.5, "rgba(32, 43, 97, 0.025)");
        spot.addColorStop(1, "transparent");
        ctx.fillStyle = spot;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 1;

      // ── Render each flowing wave across full viewport ──
      for (let i = 0; i < waveBands.length; i++) {
        const w = waveBands[i];
        const baseY = height * w.baseYRatio;
        const waveTime = time * w.speed;

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        const step = 8;
        for (let x = 0; x <= width + step; x += step) {
          // Double harmonic wave
          let y =
            baseY +
            Math.sin(x * w.wavelength + waveTime) * w.amplitude +
            Math.sin(x * w.wavelength * 0.55 - waveTime * 0.65) * (w.amplitude * 0.45);

          // Full-screen mouse fluid interaction
          if (mouseX > 0 && mouseY > 0) {
            const dx = x - mouseX;
            const dy = baseY - mouseY;
            const dist = Math.hypot(dx, dy);
            const reach = 260;
            if (dist < reach) {
              const factor = (1 - dist / reach) ** 2;
              y += (mouseY - baseY) * factor * 0.24;
            }
          }

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        if (w.fill !== "transparent") {
          ctx.fillStyle = w.fill;
          ctx.fill();
        }

        ctx.strokeStyle = w.stroke;
        ctx.lineWidth = w.lineWidth;
        ctx.stroke();
      }

      // ── Render subtle flow particles drifting across the currents ──
      for (const p of particles) {
        p.x += p.speed;
        if (p.x > width + 20) {
          p.x = -20;
          p.y = Math.random() * height;
        }

        // Particle bobs smoothly along the current
        const band = waveBands[p.bandIdx];
        const baseY = height * band.baseYRatio;
        const waveY =
          baseY +
          Math.sin(p.x * band.wavelength + time * band.speed) * (band.amplitude * 0.7);

        // Interpolate smoothly towards the wave line
        p.y += (waveY - p.y) * 0.05;

        // Subtle pulsing glow
        const pulse = (Math.sin(time * 0.03 + p.phase) + 1.0) * 0.5;
        const finalAlpha = p.alpha * (0.6 + pulse * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.bandIdx % 2 === 0
            ? `rgba(59, 130, 246, ${finalAlpha})`
            : `rgba(32, 43, 97, ${finalAlpha * 0.8})`;
        ctx.fill();
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
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-between items-center bg-[#f4f6fb] text-[#202B61] select-none py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* ── FULL-CANVAS FLUID WAVE FLOW & PARTICLES ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-auto"
      />

      {/* ── MINIMAL TOP BRAND METRICS / ANCHORS (BALANCES EMPTY TOP SPACE) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex items-center justify-between text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#202B61]/55 pointer-events-none pt-4 sm:pt-6">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          <span>Arkanet Digital Engineering</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#202B61]/45 font-mono">
          <span>Web &bull; Apps &bull; AI Systems</span>
          <span>&bull;</span>
          <span>EST. 2026</span>
        </div>
      </div>

      {/* ── CENTER EDITORIAL HEADLINE & SUBTITLE ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none my-auto px-4 sm:px-8">
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_2px_16px_rgba(32,43,97,0.06)]">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance drop-shadow-[0_1px_8px_rgba(32,43,97,0.04)]">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>

      {/* ── MINIMAL BOTTOM TELEMETRY (BALANCES EMPTY BOTTOM SPACE) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex items-center justify-between text-[11px] sm:text-xs font-medium text-[#202B61]/50 pointer-events-none pb-2 sm:pb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-[#3B82F6] font-semibold">99.98%</span>
          <span className="text-[11px] hidden xs:inline">Uptime Reliability</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#202B61]/45 tracking-wider">
          <span>REAL TRAFFIC</span>
          <span>&bull;</span>
          <span>REAL DEADLINES</span>
        </div>
      </div>
    </section>
  );
};
