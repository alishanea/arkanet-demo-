"use client";

import React from "react";

export const ProstackComparison: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        
        {/* ── 1. CLEAN SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 border-b border-slate-100">
          <div className="max-w-2xl space-y-2 text-left">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              Compiled Core vs Fragmented Plugins
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Why growing brands replace dozens of brittle third-party plugins with Prostack.
            </p>
          </div>
        </div>

        {/* ── 2. TWO SIMPLE ARCHITECTURAL CONTRAST CARDS (Radius < 5px: rounded-[4px]) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch w-full">
          
          {/* ── CARD 01: LEGACY FRAGMENTED STACK (Soft Ice Navy) ── */}
          <div className="rounded-[4px] p-7 sm:p-9 bg-[#F4F6FB] border border-slate-200/90 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Card Header (No micro number) */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
                  Legacy Plugins
                </span>
                <span className="text-xs font-mono font-medium text-slate-400">
                  Third-Party Architecture
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
                Fragmented Plugin Stack
              </h3>

              {/* 4 Simple Direct Points */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                    15+ external plugins stitched together on legacy CMS
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                    2.8s – 4.5s slow page load times from third-party scripts
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                    1% to 2% arbitrary revenue share transaction penalties
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                    Frequent breaks, schema conflicts, and update downtime
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/70 text-xs font-mono text-slate-400">
              HIGH ARCHITECTURAL DEBT
            </div>
          </div>

          {/* ── CARD 02: PROSTACK UNIFIED CORE (Signature Brand Navy) ── */}
          <div className="rounded-[4px] p-7 sm:p-9 bg-[#202B61] text-white border border-[#202B61] shadow-md flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Card Header (No micro number) */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  Prostack Engine
                </span>
                <span className="text-xs font-mono font-medium text-white/70">
                  Compiled Architecture
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Single Compiled Core
              </h3>

              {/* 4 Simple Direct Points */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-white/95 leading-relaxed font-medium">
                    0 external plugins — all 8 domains natively compiled
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-white/95 leading-relaxed font-medium">
                    Sub-50ms TTFB global edge distribution out of the box
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-white/95 leading-relaxed font-medium">
                    0% arbitrary revenue cuts — complete margin ownership
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span className="font-sans text-sm sm:text-[15px] text-white/95 leading-relaxed font-medium">
                    Atomic zero-downtime rollouts with draft staging
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 text-xs font-mono text-emerald-300 font-semibold">
              100% MARGIN &amp; CODE OWNERSHIP
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
