"use client";

import React, { useRef, useEffect } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ── HIGH-PERFORMANCE INTERACTIVE IT CANVAS BACKGROUND ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

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

    // Particle nodes definition
    interface Particle {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      glowColor: string;
      phase: number;
      speed: number;
    }

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }

    interface Packet {
      fromX: number;
      fromY: number;
      toX: number;
      toY: number;
      progress: number;
      speed: number;
    }

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];
    const packets: Packet[] = [];

    // Calculate node distribution
    const isMobile = window.innerWidth < 768;
    const cols = isMobile ? 8 : 16;
    const rows = isMobile ? 12 : 10;
    const cellW = width / cols;
    const cellH = height / rows;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const ox = (c + 0.5) * cellW + (Math.random() - 0.5) * (cellW * 0.4);
        const oy = (r + 0.5) * cellH + (Math.random() - 0.5) * (cellH * 0.4);
        particles.push({
          x: ox,
          y: oy,
          ox,
          oy,
          vx: 0,
          vy: 0,
          radius: Math.random() * 1.5 + 1.2,
          baseColor: Math.random() > 0.3 ? "rgba(32, 43, 97, 0.4)" : "rgba(59, 130, 246, 0.55)",
          glowColor: "rgba(59, 130, 246, 0.9)",
          phase: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.03,
        });
      }
    }

    // Mouse tracking for fluid interactive distortion
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    // Click / Touch creates an interactive digital sonar wave
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clickX = 0;
      let clickY = 0;

      if ("touches" in e && e.touches.length > 0) {
        clickX = e.touches[0].clientX - rect.left;
        clickY = e.touches[0].clientY - rect.top;
      } else if ("clientX" in e) {
        clickX = e.clientX - rect.left;
        clickY = e.clientY - rect.top;
      }

      ripples.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: Math.max(width, height) * 0.65,
        alpha: 0.7,
        speed: 7,
      });

      // Also trigger a cluster of quick data bursts
      for (let i = 0; i < 4; i++) {
        const randP1 = particles[Math.floor(Math.random() * particles.length)];
        const randP2 = particles[Math.floor(Math.random() * particles.length)];
        if (randP1 && randP2) {
          packets.push({
            fromX: randP1.x,
            fromY: randP1.y,
            toX: randP2.x,
            toY: randP2.y,
            progress: 0,
            speed: 0.02 + Math.random() * 0.03,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("touchstart", handleClick, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Occasional automated data packet stream
    let packetTimer = 0;
    const maxLinkDist = isMobile ? 100 : 135;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (targetMouseX > 0) {
        mouseX += (targetMouseX - mouseX) * 0.12;
        mouseY += (targetMouseY - mouseY) * 0.12;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }

      // Draw subtle interactive cursor glow field
      if (mouseX > 0 && mouseY > 0) {
        const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 220);
        cursorGlow.addColorStop(0, "rgba(59, 130, 246, 0.12)");
        cursorGlow.addColorStop(0.5, "rgba(32, 43, 97, 0.04)");
        cursorGlow.addColorStop(1, "transparent");
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & Draw Click Ripples
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
        ctx.strokeStyle = `rgba(59, 130, 246, ${rip.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 12), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(32, 43, 97, ${rip.alpha * 0.3})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
      }

      // Update particles physics & interactions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Mouse magnetic push / interaction
        if (mouseX > 0 && mouseY > 0) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 160;

          if (dist < pushRadius && dist > 0) {
            const force = (1 - dist / pushRadius) * 4.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // 2. Ripple displacement
        for (const rip of ripples) {
          const dx = p.x - rip.x;
          const dy = p.y - rip.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const waveDist = Math.abs(dist - rip.radius);

          if (waveDist < 30) {
            const waveForce = (1 - waveDist / 30) * rip.alpha * 3.5;
            if (dist > 0) {
              p.vx += (dx / dist) * waveForce;
              p.vy += (dy / dist) * waveForce;
            }
          }
        }

        // 3. Spring back to origin (homeostasis)
        const homeX = p.ox - p.x;
        const homeY = p.oy - p.y;
        p.vx += homeX * 0.035;
        p.vy += homeY * 0.035;

        // Friction damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Gentle breathing pulse
        p.phase += p.speed;
      }

      // Draw Network Interconnections (Data bus lines)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDist) {
            const alpha = (1 - dist / maxLinkDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(32, 43, 97, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const pulseFactor = Math.sin(p.phase) * 0.6;
        const currentRadius = Math.max(0.8, p.radius + pulseFactor);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.baseColor;
        ctx.fill();
      }

      // Spawn periodic digital packets
      packetTimer++;
      if (packetTimer > 45 && packets.length < 8) {
        packetTimer = 0;
        const idx1 = Math.floor(Math.random() * particles.length);
        const p1 = particles[idx1];
        // find a neighbor
        for (let j = 0; j < particles.length; j++) {
          if (idx1 === j) continue;
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxLinkDist) {
            packets.push({
              fromX: p1.x,
              fromY: p1.y,
              toX: p2.x,
              toY: p2.y,
              progress: 0,
              speed: 0.015 + Math.random() * 0.02,
            });
            break;
          }
        }
      }

      // Draw and update glowing packets
      for (let pk = packets.length - 1; pk >= 0; pk--) {
        const pkt = packets[pk];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(pk, 1);
          continue;
        }

        const currX = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress;
        const currY = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#3B82F6";
        ctx.shadowColor = "#3B82F6";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("touchstart", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans"
    >
      {/* ── 1. AMBIENT CYBERNETIC COLOR WASHES (PURE CODE, ZERO VIDEO LOAD) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft moving tech gradients */}
        <div
          className="absolute -top-[25%] -left-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,rgba(32,43,97,0.04)_50%,transparent_75%)] blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle,rgba(32,43,97,0.09)_0%,rgba(59,130,246,0.06)_50%,transparent_75%)] blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "3s" }}
        />
      </div>

      {/* ── 2. ARCHITECTURAL TECH GRID PATTERN ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(32, 43, 97, 0.12) 1px, transparent 1px),
            linear-gradient(to right, rgba(32, 43, 97, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(32, 43, 97, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 96px 96px, 96px 96px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 90%)",
        }}
      />

      {/* ── 3. FULLY INTERACTIVE IT DATA MESH & SONAR RIPPLE CANVAS ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] w-full h-full cursor-crosshair"
      />

      {/* ── 4. ARKANET EMBLEM WITH LIVING TECH AURA (25% OPACITY, NO TEXT) ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none flex items-center justify-center">
        {/* Soft breathing optical aura */}
        <div
          className="absolute w-[460px] h-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14)_0%,rgba(32,43,97,0.06)_50%,transparent_75%)] blur-2xl animate-pulse pointer-events-none"
          style={{ animationDuration: "6s" }}
        />

        <img
          src="/assets/images/arkanet-icon-clean.png"
          alt="Arkanet Logo"
          className="relative w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] max-w-[80vw] max-h-[60vh] object-contain opacity-25 select-none"
        />
      </div>

      {/* ── 5. CLEAN EDITORIAL HEADLINE & SUBTITLE (ZERO BOXES, ZERO EXTRA TEXT) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none">
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
