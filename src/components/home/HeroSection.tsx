"use client";

import React, { useRef, useEffect } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ── DEEP-SPACE IT CONSTELLATION BACKGROUND ──
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

    // ── Interfaces ──
    interface Node {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
      phase: number;
      phaseSpeed: number;
      tier: number; // 0 = hub, 1 = mid, 2 = leaf
    }

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
      color: string;
    }

    interface DataPacket {
      fromX: number;
      fromY: number;
      toX: number;
      toY: number;
      progress: number;
      speed: number;
      color: string;
      trail: Array<{ x: number; y: number; a: number }>;
    }

    interface FloatingCode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      alpha: number;
      size: number;
      life: number;
      maxLife: number;
    }

    // ── Colour palette ──
    const HUB_COLOR = "#00e5ff";       // cyan hub nodes
    const MID_COLOR = "#3B82F6";       // blue mid nodes
    const LEAF_COLOR = "#7c8aff";      // indigo leaf nodes
    const PACKET_A = "#00e5ff";
    const PACKET_B = "#a78bfa";
    const RIPPLE_COLOR_A = "#00e5ff";
    const RIPPLE_COLOR_B = "#3B82F6";

    const isMobile = window.innerWidth < 768;
    const NODE_COUNT = isMobile ? 55 : 110;

    const nodes: Node[] = [];
    const ripples: Ripple[] = [];
    const packets: DataPacket[] = [];
    const floatingCodes: FloatingCode[] = [];

    const CODE_SNIPPETS = [
      "01", "10", "if()", "{}","fn", "=>", "AI", "</>", "ssh",
      "git", "api", "SQL", "0x", "{}","cdn", "jwt", "ts", "py",
    ];

    // ── Build node network ──
    for (let i = 0; i < NODE_COUNT; i++) {
      const tier = i < NODE_COUNT * 0.08 ? 0 : i < NODE_COUNT * 0.3 ? 1 : 2;
      const radius = tier === 0 ? 3.8 + Math.random() * 1.2
                   : tier === 1 ? 2.2 + Math.random() * 1.0
                   : 1.2 + Math.random() * 0.8;
      const color = tier === 0 ? HUB_COLOR : tier === 1 ? MID_COLOR : LEAF_COLOR;
      const ox = Math.random() * width;
      const oy = Math.random() * height;
      nodes.push({
        x: ox, y: oy, ox, oy,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius, color,
        glowColor: color,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.015 + Math.random() * 0.025,
        tier,
      });
    }

    // ── Mouse tracking ──
    let mouseX = -2000;
    let mouseY = -2000;
    let targetMouseX = -2000;
    let targetMouseY = -2000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -2000;
      targetMouseY = -2000;
    };

    // ── Click / tap: sonar ripple + burst packets ──
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let cx = 0, cy = 0;
      if ("touches" in e && e.touches.length > 0) {
        cx = e.touches[0].clientX - rect.left;
        cy = e.touches[0].clientY - rect.top;
      } else if ("clientX" in e) {
        cx = e.clientX - rect.left;
        cy = e.clientY - rect.top;
      }

      ripples.push({
        x: cx, y: cy,
        radius: 4,
        maxRadius: Math.max(width, height) * 0.7,
        alpha: 0.9,
        speed: 8,
        color: Math.random() > 0.5 ? RIPPLE_COLOR_A : RIPPLE_COLOR_B,
      });

      // burst 6 data packets from nearest node
      const nearest = nodes.reduce((best, n) => {
        const d = Math.hypot(n.x - cx, n.y - cy);
        return d < Math.hypot(best.x - cx, best.y - cy) ? n : best;
      }, nodes[0]);

      for (let i = 0; i < 6; i++) {
        const target = nodes[Math.floor(Math.random() * nodes.length)];
        packets.push({
          fromX: nearest.x, fromY: nearest.y,
          toX: target.x, toY: target.y,
          progress: 0,
          speed: 0.012 + Math.random() * 0.025,
          color: Math.random() > 0.5 ? PACKET_A : PACKET_B,
          trail: [],
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("touchstart", handleClick, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // ── Max link distance (tiered) ──
    const MAX_LINK = isMobile ? 110 : 155;

    // ── Gradient background ──
    let bgGradient: CanvasGradient | null = null;
    const buildBg = () => {
      bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, "#0a0e1a");
      bgGradient.addColorStop(0.5, "#0d1530");
      bgGradient.addColorStop(1, "#050810");
    };
    buildBg();

    let packetTimer = 0;
    let codeTimer = 0;
    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // ── Background ──
      if (bgGradient) {
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, width, height);
      }

      // ── Subtle radial vignette ──
      const vig = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.72);
      vig.addColorStop(0, "rgba(0,229,255,0.03)");
      vig.addColorStop(0.6, "transparent");
      vig.addColorStop(1, "rgba(0,0,0,0.45)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

      // ── Smooth mouse ──
      if (targetMouseX > 0) {
        mouseX += (targetMouseX - mouseX) * 0.1;
        mouseY += (targetMouseY - mouseY) * 0.1;
      } else {
        mouseX = -2000;
        mouseY = -2000;
      }

      // ── Mouse spotlight ──
      if (mouseX > 0) {
        const spot = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 260);
        spot.addColorStop(0, "rgba(0,229,255,0.09)");
        spot.addColorStop(0.4, "rgba(59,130,246,0.04)");
        spot.addColorStop(1, "transparent");
        ctx.fillStyle = spot;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Update & draw ripples ──
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.962;
        if (rip.alpha < 0.008 || rip.radius > rip.maxRadius) { ripples.splice(r, 1); continue; }

        // outer ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${rip.color}${Math.round(rip.alpha * 255).toString(16).padStart(2, "0")}`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = rip.color;
        ctx.shadowBlur = 10;
        ctx.stroke();
        // inner ring offset
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 15), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59,130,246,${rip.alpha * 0.4})`;
        ctx.lineWidth = 0.6;
        ctx.shadowBlur = 0;
        ctx.stroke();
        ctx.restore();

        // push nearby nodes
        for (const n of nodes) {
          const dist = Math.hypot(n.x - rip.x, n.y - rip.y);
          const waveDist = Math.abs(dist - rip.radius);
          if (waveDist < 25 && dist > 0) {
            const force = (1 - waveDist / 25) * rip.alpha * 4;
            n.vx += ((n.x - rip.x) / dist) * force;
            n.vy += ((n.y - rip.y) / dist) * force;
          }
        }
      }

      // ── Physics: update nodes ──
      for (const n of nodes) {
        // gentle autonomous drift
        n.x += n.vx;
        n.y += n.vy;

        // mouse repulsion
        if (mouseX > 0) {
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const dist = Math.hypot(dx, dy);
          const pushR = 170;
          if (dist < pushR && dist > 0) {
            const force = (1 - dist / pushR) * 5.5;
            n.vx += (dx / dist) * force;
            n.vy += (dy / dist) * force;
          }
        }

        // spring home
        n.vx += (n.ox - n.x) * 0.03;
        n.vy += (n.oy - n.y) * 0.03;
        n.vx *= 0.86;
        n.vy *= 0.86;

        // soft boundary bounce
        if (n.x < 0) n.vx += 0.5;
        if (n.x > width) n.vx -= 0.5;
        if (n.y < 0) n.vy += 0.5;
        if (n.y > height) n.vy -= 0.5;

        n.phase += n.phaseSpeed;
      }

      // ── Draw edges ──
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_LINK) {
            const alpha = (1 - dist / MAX_LINK) * (a.tier === 0 || b.tier === 0 ? 0.55 : 0.28);
            const edgeColor = a.tier === 0 || b.tier === 0 ? HUB_COLOR : MID_COLOR;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `${edgeColor}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`;
            ctx.lineWidth = a.tier === 0 || b.tier === 0 ? 0.9 : 0.5;
            if (a.tier === 0 || b.tier === 0) {
              ctx.shadowColor = HUB_COLOR;
              ctx.shadowBlur = 4;
            }
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // ── Draw nodes ──
      for (const n of nodes) {
        const pulse = Math.sin(n.phase) * 0.5;
        const r = Math.max(0.5, n.radius + pulse);

        // glow
        ctx.save();
        ctx.shadowColor = n.glowColor;
        ctx.shadowBlur = n.tier === 0 ? 18 : n.tier === 1 ? 10 : 5;

        // outer halo for hubs
        if (n.tier === 0) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 4, 0, Math.PI * 2);
          ctx.fillStyle = `${n.color}22`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
        ctx.restore();
      }

      // ── Auto-spawn data packets ──
      packetTimer++;
      if (packetTimer > 30 && packets.length < 18) {
        packetTimer = 0;
        const src = nodes[Math.floor(Math.random() * nodes.length)];
        for (const tgt of nodes) {
          if (tgt === src) continue;
          const dist = Math.hypot(src.x - tgt.x, src.y - tgt.y);
          if (dist < MAX_LINK) {
            packets.push({
              fromX: src.x, fromY: src.y,
              toX: tgt.x, toY: tgt.y,
              progress: 0,
              speed: 0.01 + Math.random() * 0.025,
              color: Math.random() > 0.4 ? PACKET_A : PACKET_B,
              trail: [],
            });
            break;
          }
        }
      }

      // ── Draw data packets with trail ──
      for (let pk = packets.length - 1; pk >= 0; pk--) {
        const pkt = packets[pk];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) { packets.splice(pk, 1); continue; }

        const cx = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress;
        const cy = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress;

        // trail
        pkt.trail.push({ x: cx, y: cy, a: 0.9 });
        if (pkt.trail.length > 14) pkt.trail.shift();
        for (let t = 0; t < pkt.trail.length; t++) {
          const pt = pkt.trail[t];
          const trailA = (t / pkt.trail.length) * pt.a * 0.5;
          const trailR = (t / pkt.trail.length) * 2;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(0.3, trailR), 0, Math.PI * 2);
          ctx.fillStyle = `${pkt.color}${Math.round(trailA * 255).toString(16).padStart(2, "0")}`;
          ctx.fill();
        }

        // head
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // ── Floating code snippets ──
      codeTimer++;
      if (codeTimer > 60 && floatingCodes.length < (isMobile ? 6 : 14)) {
        codeTimer = 0;
        const life = 180 + Math.random() * 120;
        floatingCodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -0.2 - Math.random() * 0.3,
          text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
          alpha: 0,
          size: 10 + Math.random() * 5,
          life: 0,
          maxLife: life,
        });
      }

      ctx.save();
      ctx.font = `600 ${12}px 'Courier New', monospace`;
      for (let fc = floatingCodes.length - 1; fc >= 0; fc--) {
        const f = floatingCodes[fc];
        f.life++;
        f.x += f.vx;
        f.y += f.vy;
        const halfLife = f.maxLife * 0.5;
        f.alpha = f.life < halfLife
          ? (f.life / halfLife) * 0.35
          : ((f.maxLife - f.life) / halfLife) * 0.35;
        if (f.life >= f.maxLife) { floatingCodes.splice(fc, 1); continue; }

        ctx.font = `600 ${f.size}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(0,229,255,${f.alpha})`;
        ctx.fillText(f.text, f.x, f.y);
      }
      ctx.restore();

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
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#07091a] text-white select-none overflow-hidden font-sans"
    >
      {/* ── DEEP-SPACE IT CONSTELLATION CANVAS ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] w-full h-full cursor-crosshair"
      />

      {/* ── HEADLINE CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8">
        <h1 className="hero-h1 text-white text-center max-w-4xl sm:max-w-5xl mx-auto drop-shadow-[0_0_40px_rgba(0,229,255,0.25)]">
          Websites, Apps &amp; AI<br />
          Engineered to Perform
        </h1>

        <p className="hero-sub font-medium text-slate-300 leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6 text-balance">
          Arkanet Technologies designs and builds websites, mobile apps, and AI systems made to work under real traffic, real customers, and real deadlines.
        </p>
      </div>
    </section>
  );
};
