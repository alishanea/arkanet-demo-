"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  alpha: number;
  isSpecial?: boolean;
}

export const ProstackHeroInteractiveBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);
    let animId: number;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates with smooth lerp
    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = -1000;
    let targetY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetX = -1000;
      targetY = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    // Initialize Network Nodes
    let nodes: Node[] = [];
    const initNodes = () => {
      nodes = [];
      const count = Math.floor((width * height) / 18000); // Dynamic density
      const total = Math.max(30, Math.min(count, 70));

      for (let i = 0; i < total; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius: Math.random() * 2 + 2,
          alpha: Math.random() * 0.35 + 0.2,
          isSpecial: Math.random() < 0.15, // Subtle accent red nodes representing core engine triggers
        });
      }
    };

    initNodes();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      if (targetX > 0 && targetY > 0) {
        if (mouseX === -1000) {
          mouseX = targetX;
          mouseY = targetY;
        } else {
          mouseX += (targetX - mouseX) * 0.08;
          mouseY += (targetY - mouseY) * 0.08;
        }
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }

      // Draw subtle interactive cursor glow
      if (mouseX > 0 && mouseY > 0) {
        const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
        glow.addColorStop(0, "rgba(32, 43, 97, 0.06)");
        glow.addColorStop(0.5, "rgba(59, 130, 246, 0.03)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw nodes
      const maxDistance = 140;
      const mouseReach = 200;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Wrap or bounce around bounds
        if (node.x < 0) node.x = width;
        else if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        else if (node.y > height) node.y = 0;

        // Interactive mouse gravity / deflection
        if (mouseX > 0 && mouseY > 0) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseReach) {
            const pull = (1 - dist / mouseReach) * 0.6;
            node.x += (dx / dist) * pull;
            node.y += (dy / dist) * pull;
          }
        }

        // Draw node circles
        ctx.beginPath();
        const r = node.baseRadius;
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        if (node.isSpecial) {
          ctx.fillStyle = "rgba(214, 31, 40, 0.45)"; // Prostack red accent
        } else {
          ctx.fillStyle = `rgba(32, 43, 97, ${node.alpha})`;
        }
        ctx.fill();

        // Connect to cursor if close
        if (mouseX > 0 && mouseY > 0) {
          const mDist = Math.hypot(mouseX - node.x, mouseY - node.y);
          if (mDist < 160) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(32, 43, 97, ${(1 - mDist / 160) * 0.22})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }

        // Connect to neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const lineAlpha = (1 - dist / maxDistance) * 0.16;
            ctx.strokeStyle = `rgba(32, 43, 97, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Atmospheric Ambient Gradients */}
      <div className="absolute -top-32 right-1/4 w-[750px] h-[550px] bg-gradient-to-b from-[#202B61]/[0.05] via-[#3B82F6]/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#202B61]/[0.04] to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[550px] h-[500px] bg-gradient-to-tr from-[#3B82F6]/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Micro Dot Grid Background with Smooth Mask */}
      <div
        className="absolute inset-0 opacity-[0.38] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(32, 43, 97, 0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* 3. Interactive Physics Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
      />
    </div>
  );
};

