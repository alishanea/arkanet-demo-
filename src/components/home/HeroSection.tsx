"use client";

import React, { useRef, useEffect } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ── IT NETWORK CONSTELLATION & DATA NODES EFFECT ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Responsive node count based on screen width
    const isMobile = width < 768;
    const nodeCount = isMobile ? 22 : 45;
    const maxDistance = isMobile ? 95 : 140;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    interface Packet {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
    }

    const nodes: Node[] = [];
    const colors = [
      "rgba(32, 43, 97, 0.35)",  // Arkanet Navy
      "rgba(59, 130, 246, 0.45)", // Digital Blue
      "rgba(32, 43, 97, 0.25)",  // Deep Tech Navy
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    // Occasional data packets traversing the IT network
    const packets: Packet[] = [];
    let packetTimer = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for subtle interactive tether
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce softly off edges
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        n.pulse += n.pulseSpeed;
        const currentRadius = n.radius + Math.sin(n.pulse) * 0.5;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Mouse interactive soft tether
        if (mouseX > 0 && mouseY > 0) {
          const dxMouse = n.x - mouseX;
          const dyMouse = n.y - mouseY;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 160) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - distMouse / 160) * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Connect nearby IT nodes with data bus links
      const connections: [number, number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            connections.push([i, j]);
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(32, 43, 97, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 3. Spawn and animate data packets along active links
      packetTimer++;
      if (packetTimer > 40 && connections.length > 0 && packets.length < 6) {
        packetTimer = 0;
        const [fromIdx, toIdx] = connections[Math.floor(Math.random() * connections.length)];
        packets.push({
          fromIdx,
          toIdx,
          progress: 0,
          speed: 0.012 + Math.random() * 0.018,
        });
      }

      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const n1 = nodes[pkt.fromIdx];
        const n2 = nodes[pkt.toIdx];
        if (!n1 || !n2) {
          packets.splice(p, 1);
          continue;
        }

        const px = n1.x + (n2.x - n1.x) * pkt.progress;
        const py = n1.y + (n2.y - n1.y) * pkt.progress;

        // Glowing data packet dot
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.85)";
        ctx.shadowColor = "rgba(59, 130, 246, 0.6)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans"
    >
      {/* ── 1. CINEMATIC AMBIENT VIDEO / IMAGE BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-50 brightness-105 saturate-110"
        >
          <source src="/assets/hero-video.webm" type="video/webm" />
          <source src="/assets/images/compressed-hero-video.mp4" type="video/mp4" />
        </video>

        {/* Consistent full-bleed gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6fb]/75 via-[#f4f6fb]/55 to-[#f4f6fb]/85 pointer-events-none" />
      </div>

      {/* ── 2. ARCHITECTURAL TECH GRID PATTERN (IT INFRASTRUCTURE MESH) ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(32, 43, 97, 0.12) 1px, transparent 1px),
            linear-gradient(to right, rgba(32, 43, 97, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(32, 43, 97, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 96px 96px, 96px 96px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 85%)",
        }}
      />

      {/* ── 3. LIVING IT DATA NETWORK CONSTELLATION CANVAS ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] pointer-events-none w-full h-full"
      />

      {/* ── 4. ARKANET LOGO ICON WITH LIVING AMBIENT TECH GLOW (25% OPACITY, NO TEXT) ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
        {/* Soft breathing optical glow behind Arkanet mark */}
        <div
          className="absolute w-[440px] h-[340px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,rgba(32,43,97,0.05)_50%,transparent_75%)] blur-2xl animate-pulse pointer-events-none"
          style={{ animationDuration: "7s" }}
        />

        <img
          src="/assets/images/arkanet-icon-clean.png"
          alt="Arkanet Logo"
          className="relative w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] max-w-[80vw] max-h-[60vh] object-contain opacity-25 select-none"
        />
      </div>

      {/* ── 5. PURE HERO CONTENT (STRICTLY ORIGINAL HEADLINE & SUBTITLE, ZERO BOXES, ZERO EXTRA TEXT) ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        {/* Clean Editorial Headline (No Hyphens) */}
        <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        {/* Balanced Descriptive Subtitle (No Hyphens, No Orphaned Words, Perfectly Balanced) */}
        <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
