"use client";

import React, { useRef, useEffect } from "react";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

// ── Simplified world map (90 cols × 32 rows, Mercator-like projection)
// X = land, space = ocean
const WORLD_MAP: string[] = [
  /*  0 ≈75°N */ "          XXXXXXXXX                 XXXXXXX   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      ",
  /*  1 ≈70°N */ "XXXXX   XXXXXXXXXXXXXXXX        XXXXXXXXXX  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ",
  /*  2 ≈65°N */ "XXXX    XXXXXXXXXXXXXXXXXX   XXXXXXXXXX  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   ",
  /*  3 ≈60°N */ "XXX    XXXXXXXXXXXXXXXXXXXX  XXXXXXXXX  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   ",
  /*  4 ≈55°N */ "       XXXXXXXXXXXXXXXXXXXX  XXXXXXXX  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    ",
  /*  5 ≈50°N */ "       XXXXXXXXXXXXXXXXXXXX  XXXXX XXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    ",
  /*  6 ≈45°N */ "      XXXXXXXXXXXXXXXXXXXXX  XXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XX     ",
  /*  7 ≈40°N */ "      XXXXXXXXXXXXXXXXXXXX   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX X ",
  /*  8 ≈35°N */ "      XXXXXXXXXXXXXXXXXXXX   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ",
  /*  9 ≈30°N */ "      XXXXXXXXXXXXXXXXXXX    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ",
  /* 10 ≈25°N */ "      XXXXXXXXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX         ",
  /* 11 ≈20°N */ "      XXXXXXXXXXXXXXXX   X X XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX         ",
  /* 12 ≈15°N */ "      XXXXXXXXXXXXXXXX   X   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX        ",
  /* 13 ≈10°N */ "      XXXXXXXXXXXXXXXXXX     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX X      ",
  /* 14 ≈ 5°N */ "       XXXXXXXXXXXXXXXXX     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XX      ",
  /* 15 ≈ 0°  */ "       XXXXXXXXXXXXXXXXXX     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX           ",
  /* 16 ≈ 5°S */ "       XXXXXXXXXXXXXXXXXX      XXXXXXXXXXXXXXXXXXXXX X  XXXXXXXXXX                     ",
  /* 17 ≈10°S */ "        XXXXXXXXXXXXXXXXX      XXXXXXXXXXXXXXXXXX        XXXX   XXXXXXXX               ",
  /* 18 ≈15°S */ "        XXXXXXXXXXXXXXXXX       XXXXXXXXXXXXXXXX         XXXXXXXXXXXXXXXXXX             ",
  /* 19 ≈20°S */ "        XXXXXXXXXXXXXXXX        XXXXXXXXXXXXXX    X      XXXXXXXXXXXXXXXXXX             ",
  /* 20 ≈25°S */ "        XXXXXXXXXXXXXXX          XXXXXXXXXXXX            XXXXXXXXXXXXXXXXXX             ",
  /* 21 ≈30°S */ "         XXXXXXXXXXXXX           XXXXXXXXXX              XXXXXXXXXXXXXXXXX              ",
  /* 22 ≈35°S */ "         XXXXXXXXXXXX             XXXXXXXX               XXXXXXXXXXXXXXX    XX          ",
  /* 23 ≈40°S */ "          XXXXXXXXXX               XXXXXX               XXXXXXXXXX          XX          ",
  /* 24 ≈45°S */ "          XXXXXXXXX                 XXXX               XXXXXXX               X          ",
  /* 25 ≈50°S */ "           XXXXXXXX                  XXX              XXXXXX                            ",
  /* 26 ≈55°S */ "           XXXXXXX                    XX                                                ",
  /* 27 ≈60°S */ "            XXXXXX                     X                                               ",
  /* 28 ≈65°S */ "             XXXXX                                                                     ",
  /* 29 ≈70°S */ "              XXX                                                                      ",
  /* 30        */ "               X                                                                       ",
  /* 31        */ "                                                                                       ",
];

const MAP_COLS = 90;
const MAP_ROWS = WORLD_MAP.length;

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // ── Dot data ──
    interface MapDot {
      x: number;
      y: number;
      baseR: number;
      phase: number;
      brightness: number; // 0–1 extra highlight
    }

    let dots: MapDot[] = [];

    // ── Build dot positions on each resize ──
    const buildDots = () => {
      dots = [];
      const cellW = W / MAP_COLS;
      const cellH = H / MAP_ROWS;
      // dot radius: scale with cell size, vary slightly per dot
      const baseR = Math.min(cellW, cellH) * 0.28;

      for (let r = 0; r < MAP_ROWS; r++) {
        const row = WORLD_MAP[r];
        for (let c = 0; c < row.length && c < MAP_COLS; c++) {
          if (row[c] === "X") {
            dots.push({
              x: (c + 0.5) * cellW,
              y: (r + 0.5) * cellH,
              baseR: baseR * (0.65 + Math.random() * 0.7),
              phase: Math.random() * Math.PI * 2,
              brightness: 0,
            });
          }
        }
      }
    };

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      buildDots();
    };

    resize();
    window.addEventListener("resize", resize);

    // ── Pulse waves (sonar rings that light up dots they cross) ──
    interface PulseWave {
      x: number;
      y: number;
      radius: number;
      speed: number;
      strength: number;
      maxR: number;
    }
    const waves: PulseWave[] = [];

    // ── Mouse ──
    let mx = -1;
    let my = -1;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => { mx = -1; my = -1; };

    // ── Click: burst wave from nearest dot ──
    const onClick = (e: MouseEvent | TouchEvent) => {
      let cx = 0, cy = 0;
      if ("touches" in e && e.touches.length > 0) {
        const r = canvas.getBoundingClientRect();
        cx = e.touches[0].clientX - r.left;
        cy = e.touches[0].clientY - r.top;
      } else if ("clientX" in e) {
        const r = canvas.getBoundingClientRect();
        cx = e.clientX - r.left;
        cy = e.clientY - r.top;
      }
      waves.push({ x: cx, y: cy, radius: 0, speed: 3.5, strength: 1.2, maxR: Math.max(W, H) });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onClick, { passive: true });

    // ── Auto-spawn waves every ~3 s ──
    let waveTimer = 0;
    const WAVE_INTERVAL = 180; // frames

    // ── Render loop ──
    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // ── Pure white background ──
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, W, H);

      // ── Auto wave spawn ──
      waveTimer++;
      if (waveTimer >= WAVE_INTERVAL && dots.length > 0) {
        waveTimer = 0;
        // Pick a random land dot as origin
        const src = dots[Math.floor(Math.random() * dots.length)];
        waves.push({
          x: src.x,
          y: src.y,
          radius: 0,
          speed: 2.2,
          strength: 1.0,
          maxR: Math.max(W, H) * 0.95,
        });
      }

      // ── Update waves ──
      for (let wi = waves.length - 1; wi >= 0; wi--) {
        const wv = waves[wi];
        wv.radius += wv.speed;
        wv.strength -= 0.0025;
        if (wv.strength <= 0 || wv.radius > wv.maxR) waves.splice(wi, 1);
      }

      // ── Update & draw dots ──
      for (const d of dots) {
        d.phase += 0.018;
        d.brightness *= 0.88; // decay

        // Wave influence: highlight dots the wave ring sweeps over
        for (const wv of waves) {
          const dist = Math.hypot(d.x - wv.x, d.y - wv.y);
          const waveDelta = Math.abs(dist - wv.radius);
          if (waveDelta < 22) {
            const hit = (1 - waveDelta / 22) * wv.strength;
            if (hit > d.brightness) d.brightness = hit;
          }
        }

        // Mouse proximity highlight
        if (mx > 0) {
          const md = Math.hypot(d.x - mx, d.y - my);
          const reach = 90;
          if (md < reach) {
            const mhit = (1 - md / reach) * 0.85;
            if (mhit > d.brightness) d.brightness = mhit;
          }
        }

        // Compute final color: base navy → blue highlight
        const br = d.brightness;
        const baseR = 32, baseG = 43, baseB = 97;      // #202B61
        const hiR = 59,  hiG = 130, hiB = 246;         // #3B82F6
        const r = Math.round(baseR + (hiR - baseR) * br);
        const g = Math.round(baseG + (hiG - baseG) * br);
        const b = Math.round(baseB + (hiB - baseB) * br);

        // Base opacity: gentle breathing + brightness boost
        const breathe = Math.sin(d.phase) * 0.04;
        const alpha = Math.min(1, 0.18 + breathe + br * 0.72);

        // Radius grows slightly when highlighted
        const radius = Math.max(0.6, d.baseR * (1 + br * 0.6));

        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onClick);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-white text-[#202B61] select-none overflow-hidden font-sans"
    >
      {/* ── ANIMATED DOT WORLD MAP ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] w-full h-full"
      />

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center pointer-events-none px-4 sm:px-8">
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
