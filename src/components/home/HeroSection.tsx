"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // 3D Parallax tilt & cursor spotlight
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // ── HIGH-PERFORMANCE INTERACTIVE HOVER CANVAS ──
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

    // ── Particle Data Structures ──
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
      energy: number; // 0..1 triggered on hover proximity
    }

    interface HoverRipple {
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
      color: string;
    }

    interface TrailPoint {
      x: number;
      y: number;
      alpha: number;
      radius: number;
    }

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 60 : 120;
    const nodes: Node[] = [];
    const ripples: HoverRipple[] = [];
    const packets: Packet[] = [];
    const mouseTrail: TrailPoint[] = [];

    // Grid-based jitter distribution
    const cols = isMobile ? 8 : 16;
    const rows = isMobile ? 7 : 8;
    const cellW = width / cols;
    const cellH = height / rows;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (nodes.length >= nodeCount) break;
        const ox = (c + 0.5) * cellW + (Math.random() - 0.5) * (cellW * 0.7);
        const oy = (r + 0.5) * cellH + (Math.random() - 0.5) * (cellH * 0.7);
        const isAccent = Math.random() < 0.32;
        nodes.push({
          x: ox,
          y: oy,
          ox,
          oy,
          vx: 0,
          vy: 0,
          baseR: isAccent ? 2.8 : 1.6,
          color: isAccent ? "rgba(59, 130, 246, 0.85)" : "rgba(32, 43, 97, 0.45)",
          glowColor: "rgba(59, 130, 246, 0.75)",
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

      setCursorPos({ x: targetX, y: targetY });
      setIsHovered(true);

      // Smooth 3D tilt
      const normX = (targetX / width - 0.5) * 2;
      const normY = (targetY / height - 0.5) * 2;
      setTilt({
        x: normX * 9,
        y: -normY * 9,
      });

      // Add point to hover trail
      mouseTrail.push({
        x: targetX,
        y: targetY,
        alpha: 0.6,
        radius: 18 + Math.random() * 8,
      });
      if (mouseTrail.length > 20) mouseTrail.shift();
    };

    const onMouseLeave = () => {
      targetX = -1000;
      targetY = -1000;
      setIsHovered(false);
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

      // Shockwave burst
      ripples.push({
        x: cx,
        y: cy,
        radius: 4,
        maxRadius: Math.max(width, height) * 0.75,
        alpha: 0.9,
        speed: 7.5,
      });

      // Burst packets
      for (let i = 0; i < 6; i++) {
        const n1 = nodes[Math.floor(Math.random() * nodes.length)];
        const n2 = nodes[Math.floor(Math.random() * nodes.length)];
        if (n1 && n2 && n1 !== n2) {
          packets.push({
            fromX: n1.x,
            fromY: n1.y,
            toX: n2.x,
            toY: n2.y,
            progress: 0,
            speed: 0.02 + Math.random() * 0.03,
            color: Math.random() < 0.5 ? "#3B82F6" : "#202B61",
          });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onClick, { passive: true });

    const maxLinkDist = isMobile ? 110 : 155;
    let packetTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates
      if (targetX > 0) {
        mouseX += (targetX - mouseX) * 0.14;
        mouseY += (targetY - mouseY) * 0.14;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }

      // ── Layer 1: Cursor Hover Spotlight & Ambient Aura ──
      if (mouseX > 0 && mouseY > 0) {
        // Broad ambient glow
        const broadGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
        broadGlow.addColorStop(0, "rgba(59, 130, 246, 0.16)");
        broadGlow.addColorStop(0.4, "rgba(32, 43, 97, 0.06)");
        broadGlow.addColorStop(1, "transparent");
        ctx.fillStyle = broadGlow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 280, 0, Math.PI * 2);
        ctx.fill();

        // Focused inner core
        const coreGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 70);
        coreGlow.addColorStop(0, "rgba(59, 130, 246, 0.28)");
        coreGlow.addColorStop(1, "transparent");
        ctx.fillStyle = coreGlow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 70, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Layer 2: Mouse Fluid Trail ──
      for (let i = mouseTrail.length - 1; i >= 0; i--) {
        const pt = mouseTrail[i];
        pt.alpha *= 0.91;
        pt.radius += 0.8;
        if (pt.alpha < 0.01) {
          mouseTrail.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${pt.alpha * 0.12})`;
        ctx.fill();
      }

      // ── Layer 3: Sonar Ripples ──
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.962;

        if (rip.alpha < 0.008 || rip.radius > rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${rip.alpha * 0.65})`;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 16), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(32, 43, 97, ${rip.alpha * 0.35})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
        ctx.restore();
      }

      // ── Layer 4: Physics & Hover Repulsion ──
      for (const n of nodes) {
        // Hover push & energetic activation
        if (mouseX > 0 && mouseY > 0) {
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const dist = Math.hypot(dx, dy);
          const pushRadius = 170;

          if (dist < pushRadius && dist > 0) {
            const force = (1 - dist / pushRadius) * 5.8;
            n.vx += (dx / dist) * force;
            n.vy += (dy / dist) * force;
            n.energy = Math.min(1, n.energy + (1 - dist / pushRadius) * 0.35);
          }
        }

        // Ripple push
        for (const rip of ripples) {
          const dist = Math.hypot(n.x - rip.x, n.y - rip.y);
          const waveDelta = Math.abs(dist - rip.radius);
          if (waveDelta < 28 && dist > 0) {
            const waveForce = (1 - waveDelta / 28) * rip.alpha * 4.2;
            n.vx += ((n.x - rip.x) / dist) * waveForce;
            n.vy += ((n.y - rip.y) / dist) * waveForce;
            n.energy = Math.min(1, n.energy + waveForce * 0.5);
          }
        }

        // Spring restitution to home position
        n.vx += (n.ox - n.x) * 0.038;
        n.vy += (n.oy - n.y) * 0.038;
        n.vx *= 0.87;
        n.vy *= 0.87;
        n.x += n.vx;
        n.y += n.vy;

        n.energy *= 0.93;
        n.phase += n.speed;
      }

      // ── Layer 5: Dynamic Connection Edges ──
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < maxLinkDist) {
            const baseAlpha = (1 - dist / maxLinkDist) * 0.28;
            const energyAlpha = (p1.energy + p2.energy) * 0.5;
            const alpha = Math.min(0.9, baseAlpha + energyAlpha);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (p1.energy > 0.18 || p2.energy > 0.18) {
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
              ctx.lineWidth = 1.3;
            } else {
              ctx.strokeStyle = `rgba(32, 43, 97, ${alpha})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();
          }
        }
      }

      // ── Layer 6: Draw Nodes ──
      for (const n of nodes) {
        const pulse = Math.sin(n.phase) * 0.6;
        const currentR = Math.max(0.8, n.baseR + pulse + n.energy * 2.5);

        // Glowing halo on hover excitation
        if (n.energy > 0.12) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, currentR + 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${n.energy * 0.4})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR, 0, Math.PI * 2);
        ctx.fillStyle = n.energy > 0.25 ? "#3B82F6" : n.color;
        ctx.fill();
      }

      // ── Layer 7: Hover Data Packets ──
      packetTimer++;
      if (packetTimer > 28 && packets.length < 10) {
        packetTimer = 0;
        const src = nodes[Math.floor(Math.random() * nodes.length)];
        for (const tgt of nodes) {
          if (tgt === src) continue;
          const dist = Math.hypot(src.x - tgt.x, src.y - tgt.y);
          if (dist < maxLinkDist) {
            packets.push({
              fromX: src.x,
              fromY: src.y,
              toX: tgt.x,
              toY: tgt.y,
              progress: 0,
              speed: 0.018 + Math.random() * 0.026,
              color: Math.random() < 0.6 ? "#3B82F6" : "#202B61",
            });
            break;
          }
        }
      }

      for (let pk = packets.length - 1; pk >= 0; pk--) {
        const pkt = packets[pk];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(pk, 1);
          continue;
        }

        const px = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress;
        const py = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 9;
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
      ref={containerRef}
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden perspective-[1200px]"
    >
      {/* ── SUBTLE INTERACTIVE MATRIX GRID ── */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage:
            "radial-gradient(#202B61 1.2px, transparent 1.2px), radial-gradient(#202B61 1.2px, #f4f6fb 1.2px)",
          backgroundSize: "38px 38px",
          backgroundPosition: "0 0, 19px 19px",
        }}
      />

      {/* ── DYNAMIC HOVER SPOTLIGHT (RADIAL GRADIENT FOLLOWER) ── */}
      {isHovered && cursorPos.x > 0 && (
        <div
          className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-300"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            width: "360px",
            height: "360px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(32,43,97,0.04) 50%, transparent 75%)",
          }}
        />
      )}

      {/* ── INTERACTIVE HOVER CONSTELLATION & SONAR CANVAS ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[5] w-full h-full cursor-crosshair"
      />

      {/* ── 3D PARALLAX EDITORIAL HEADLINE & SUBTITLE ── */}
      <div
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: "transform 0.16s cubic-bezier(0.2, 0, 0, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8"
      >
        {/* Clean Editorial Headline (No Hyphens, Subtle Drop Shadow) */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_2px_16px_rgba(32,43,97,0.1)]">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        {/* Balanced Descriptive Subtitle */}
        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance drop-shadow-[0_1px_8px_rgba(32,43,97,0.07)]">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
