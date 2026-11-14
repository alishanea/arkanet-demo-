"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown, ShieldCheck, Zap, Layers, Globe } from "lucide-react";

interface ProstackHeroProps {
  onOpenBooking?: () => void;
}

export const ProstackHero: React.FC<ProstackHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      {/* ── CINEMATIC ARCHITECTURAL BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/images/prostack-hero-bg.jpg"
          alt="Prostack Architecture Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-30 brightness-[1.04] contrast-[1.05]"
        />

        {/* Precision Multi-Layer Gradients for Clean Contrast & Pure Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: Core Narrative & Action CTAs (7 Cols) ── */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Eyebrow Platform Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B61]/5 border border-[#202B61]/15 text-[#202B61] text-xs font-bold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D61F28] animate-pulse" />
              <span>Flagship Enterprise Architecture</span>
            </div>

            {/* Main Heading: Official Brand Logo Typography */}
            <h1 className="leading-none text-balance flex items-center">
              <span className="sr-only">Prostack</span>
              <Image
                src="/assets/images/prostack-logo-navy.png"
                alt="Prostack"
                width={660}
                height={128}
                className="h-12 sm:h-16 lg:h-[76px] w-auto object-contain select-none pointer-events-none -ml-1"
                priority
              />
            </h1>

            {/* Sub-Heading */}
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-[28px] text-[#202B61] tracking-[-0.015em] leading-snug text-balance">
              One Connected Platform. Everything Your Digital Business Needs.
            </h2>

            {/* Breathable Content Description */}
            <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-[1.65] max-w-2xl text-pretty">
              Build and scale high-performance websites and online storefronts with an integrated platform combining CMS, headless commerce, automated SEO, and security infrastructure—without third-party plugin chaos.
            </p>

            {/* Hero Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#202B61] text-white hover:bg-[#151E48] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Schedule Platform Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#202B61] hover:bg-slate-50 border border-slate-200/90 hover:border-[#202B61]/40 font-sans font-bold text-xs sm:text-sm tracking-tight shadow-none transition-all cursor-pointer active:scale-95"
              >
                <span>Explore Architecture</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust & Architecture Metrics Strip */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <span className="block font-heading font-extrabold text-lg sm:text-xl text-[#202B61]">Sub-50ms</span>
                <span className="block font-sans text-xs text-slate-500">Global Edge TTFB</span>
              </div>
              <div>
                <span className="block font-heading font-extrabold text-lg sm:text-xl text-[#202B61]">0 Plugins</span>
                <span className="block font-sans text-xs text-slate-500">Single Native Core</span>
              </div>
              <div>
                <span className="block font-heading font-extrabold text-lg sm:text-xl text-[#202B61]">100% Margin</span>
                <span className="block font-sans text-xs text-slate-500">Zero Transaction Cuts</span>
              </div>
              <div>
                <span className="block font-heading font-extrabold text-lg sm:text-xl text-[#202B61]">95+ Vitals</span>
                <span className="block font-sans text-xs text-slate-500">Automated Audit Pass</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: High-Fidelity Architectural Live Pane (5 Cols) ── */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-[4px] bg-white border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-5 text-left">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]">
                    Prostack Runtime Engine
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-[3px] bg-slate-100 text-slate-600">
                  v4.8 Production Core
                </span>
              </div>

              {/* 4 Core Pillars Overview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-[3px] bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Layers className="w-4 h-4 text-[#202B61]" />
                    <span className="font-sans text-xs sm:text-sm font-semibold text-[#202B61]">Visual Liquid Studio</span>
                  </div>
                  <span className="font-sans text-[11px] text-emerald-600 font-bold">Shopify Compatible</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-[3px] bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#202B61]" />
                    <span className="font-sans text-xs sm:text-sm font-semibold text-[#202B61]">Global Edge Distribution</span>
                  </div>
                  <span className="font-sans text-[11px] text-emerald-600 font-bold">300+ POPs Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-[3px] bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-[#202B61]" />
                    <span className="font-sans text-xs sm:text-sm font-semibold text-[#202B61]">Headless Commerce Core</span>
                  </div>
                  <span className="font-sans text-[11px] text-emerald-600 font-bold">0% Revenue Penalties</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-[3px] bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#202B61]" />
                    <span className="font-sans text-xs sm:text-sm font-semibold text-[#202B61]">Enterprise RBAC &amp; SSL</span>
                  </div>
                  <span className="font-sans text-[11px] text-emerald-600 font-bold">SOC2 / ISO Aligned</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Architecture: Compiled Microservices</span>
                <a
                  href="https://prostack.arkanet.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#202B61] hover:underline inline-flex items-center gap-1"
                >
                  <span>prostack.arkanet.ae</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
