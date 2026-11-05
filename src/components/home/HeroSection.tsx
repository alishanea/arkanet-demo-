"use client";

import React, { useRef, useEffect, useState } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // 3D Parallax tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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

    // ── Particle & Interactive Physics ──
    interface Node {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      baseR: number;
      color: string;
      glowColor: string;
      phase: number;
      speed: number;
      energy: number; // 0..1 triggered on hover/ripple
    }

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }

    interface Signal {
      fromX: number;
      fromY: number;
      toX: number;
      toY: number;
      progress: number;
      speed: number;
    }

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 48 : 95;
    const nodes: Node[] = [];
    const ripples: Ripple[] = [];
    const signals: Signal[] = [];

    // Distribute nodes evenly across viewport with organic jitter
    const cols = isMobile ? 8 : 14;
    const rows = isMobile ? 6 : 7;
    const cellW = width / cols;
    const cellH = height / rows;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (nodes.length >= nodeCount) break;
        const ox = (c + 0.5) * cellW + (Math.random() - 0.5) * (cellW * 0.7);
        const oy = (r + 0.5) * cellH + (Math.random() - 0.5) * (cellH * 0.7);
        const isAccent = Math.random() < 0.28;
        nodes.push({
          x: ox,
          y: oy,
          ox,
          oy,
          vx: 0,
          vy: 0,
          baseR: isAccent ? 2.6 : 1.6,
          color: isAccent ? "rgba(59, 130, 246, 0.85)" : "rgba(32, 43, 97, 0.45)",
          glowColor: "rgba(59, 130, 246, 0.6)",
          phase: Math.random() * Math.PI * 2,
          speed: 0.015 + Math.random() * 0.02,
          energy: 0,
        });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = -1000;
    let targetY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      // Parallax calculations (centered at 0, normalized -1 to 1)
      const normX = (targetX / width - 0.5) * 2;
      const normY = (targetY / height - 0.5) * 2;
      setTilt({
        x: normX * 8, // subtle rotation angle in deg
        y: -normY * 8,
      });
    };

    const onMouseLeave = () => {
      targetX = -1000;
      targetY = -1000;
      setTilt({ x: 0, y: 0 });
    };

    const onClick = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let cx = 0;
      let cy = 0;
      if ("touches" in e && e.touches.length > 0) {
        cx = e.touches[0].clientX - rect.left;
        cy = e.touches[0].clientY - rect.top;
      } else if ("clientX" in e) {
        cx = e.clientX - rect.left;
        cy = e.clientY - rect.top;
      }

      // Sonar shockwave
      ripples.push({
        x: cx,
        y: cy,
        radius: 4,
        maxRadius: Math.max(width, height) * 0.65,
        alpha: 0.85,
        speed: 6.5,
      });

      // Spawn signal burst between nearest nodes
      for (let i = 0; i < 5; i++) {
        const n1 = nodes[Math.floor(Math.random() * nodes.length)];
        const n2 = nodes[Math.floor(Math.random() * nodes.length)];
        if (n1 && n2 && n1 !== n2) {
          signals.push({
            fromX: n1.x,
            fromY: n1.y,
            toX: n2.x,
            toY: n2.y,
            progress: 0,
            speed: 0.02 + Math.random() * 0.03,
          });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onClick, { passive: true });

    const maxLinkDist = isMobile ? 105 : 145;
    let signalTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (targetX > 0) {
        mouseX += (targetX - mouseX) * 0.12;
        mouseY += (targetY - mouseY) * 0.12;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }

      // ── Cursor Spotlight Glow ──
      if (mouseX > 0 && mouseY > 0) {
        const spot = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 220);
        spot.addColorStop(0, "rgba(59, 130, 246, 0.14)");
        spot.addColorStop(0.5, "rgba(32, 43, 97, 0.04)");
        spot.addColorStop(1, "transparent");
        ctx.fillStyle = spot;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Sonar Ripples ──
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.965;

        if (rip.alpha < 0.01 || rip.radius > rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${rip.alpha * 0.6})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 14), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(32, 43, 97, ${rip.alpha * 0.35})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
      }

      // ── Physics: Update Nodes ──
      for (const n of nodes) {
        // Mouse repulsion
        if (mouseX > 0 && mouseY > 0) {
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const dist = Math.hypot(dx, dy);
          const pushRadius = 150;

          if (dist < pushRadius && dist > 0) {
            const force = (1 - dist / pushRadius) * 4.8;
            n.vx += (dx / dist) * force;
            n.vy += (dy / dist) * force;
            n.energy = Math.min(1, n.energy + (1 - dist / pushRadius) * 0.25);
          }
        }

        // Ripple reaction
        for (const rip of ripples) {
          const dist = Math.hypot(n.x - rip.x, n.y - rip.y);
          const waveDelta = Math.abs(dist - rip.radius);
          if (waveDelta < 26 && dist > 0) {
            const waveForce = (1 - waveDelta / 26) * rip.alpha * 3.8;
            n.vx += ((n.x - rip.x) / dist) * waveForce;
            n.vy += ((n.y - rip.y) / dist) * waveForce;
            n.energy = Math.min(1, n.energy + waveForce * 0.4);
          }
        }

        // Spring restitution towards original anchor
        n.vx += (n.ox - n.x) * 0.038;
        n.vy += (n.oy - n.y) * 0.038;
        n.vx *= 0.88;
        n.vy *= 0.88;
        n.x += n.vx;
        n.y += n.vy;

        // Energy dissipation & breathing cycle
        n.energy *= 0.94;
        n.phase += n.speed;
      }

      // ── Draw Connection Edges ──
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < maxLinkDist) {
            const baseAlpha = (1 - dist / maxLinkDist) * 0.25;
            const energyAlpha = (p1.energy + p2.energy) * 0.4;
            const alpha = Math.min(0.85, baseAlpha + energyAlpha);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            if (p1.energy > 0.2 || p2.energy > 0.2) {
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 1.1;
            } else {
              ctx.strokeStyle = `rgba(32, 43, 97, ${alpha})`;
              ctx.lineWidth = 0.75;
            }
            ctx.stroke();
          }
        }
      }

      // ── Draw Particle Nodes ──
      for (const n of nodes) {
        const pulse = Math.sin(n.phase) * 0.5;
        const currentR = Math.max(0.8, n.baseR + pulse + n.energy * 2.2);

        // Glow halo for energized nodes
        if (n.energy > 0.15) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, currentR + 4.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${n.energy * 0.35})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR, 0, Math.PI * 2);
        ctx.fillStyle = n.energy > 0.3 ? "#3B82F6" : n.color;
        ctx.fill();
      }

      // ── Auto-generate data signals across edges ──
      signalTimer++;
      if (signalTimer > 35 && signals.length < 8) {
        signalTimer = 0;
        const src = nodes[Math.floor(Math.random() * nodes.length)];
        for (const tgt of nodes) {
          if (tgt === src) continue;
          const dist = Math.hypot(src.x - tgt.x, src.y - tgt.y);
          if (dist < maxLinkDist) {
            signals.push({
              fromX: src.x,
              fromY: src.y,
              toX: tgt.x,
              toY: tgt.y,
              progress: 0,
              speed: 0.016 + Math.random() * 0.024,
            });
            break;
          }
        }
      }

      // ── Render Signal Packets ──
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const sx = sig.fromX + (sig.toX - sig.fromX) * sig.progress;
        const sy = sig.fromY + (sig.toY - sig.fromY) * sig.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#3B82F6";
        ctx.shadowColor = "#3B82F6";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onClick);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden perspective-[1200px]"
    >
      {/* ── CINEMATIC TECH VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-55 brightness-105 saturate-110"
        >
          <source src="/assets/hero-tech-team.webm" type="video/webm" />
          <source src="/assets/hero-tech-team.mp4" type="video/mp4" />
        </video>

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb]/75 via-[#f4f6fb]/50 to-[#f4f6fb]/85 pointer-events-none" />

        {/* Subtle Engineering Matrix Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#202B61 1px, transparent 1px), radial-gradient(#202B61 1px, #f4f6fb 1px)",
            backgroundSize: "36px 36px",
            backgroundPosition: "0 0, 18px 18px",
          }}
        />
      </div>

      {/* ── INTERACTIVE NEURAL CONSTELLATION & SONAR CANVAS ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[5] w-full h-full cursor-crosshair"
      />

      {/* ── 3D PARALLAX EDITORIAL HEADLINE & SUBTITLE ── */}
      <div
        ref={contentRef}
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.18s cubic-bezier(0.2, 0, 0, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8"
      >
        {/* Clean Editorial Headline (No Hyphens) */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_2px_12px_rgba(32,43,97,0.08)]">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        {/* Balanced Descriptive Subtitle */}
        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance drop-shadow-[0_1px_6px_rgba(32,43,97,0.06)]">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
