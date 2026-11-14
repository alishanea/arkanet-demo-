"use client";

import React from "react";
import { X, Check } from "lucide-react";

const LEGACY_POINTS = [
  "15+ external plugins stitched together on legacy CMS",
  "2.8s – 4.5s slow page load times from third-party script drag",
  "1% to 2% arbitrary revenue share transaction penalties",
  "Frequent breaks, schema conflicts, and update downtime",
];

const PROSTACK_POINTS = [
  "0 external plugins — all 8 domains natively compiled",
  "Sub-50ms TTFB global edge distribution out of the box",
  "0% arbitrary revenue cuts — complete margin ownership",
  "Atomic zero-downtime rollouts with continuous draft staging",
];

export const ProstackComparison: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        
        {/* ── 1. SECTION HEADER: Crisp, Clean, Minimalist (No bottom border line) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2">
          <div className="max-w-2xl space-y-2 text-left">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] leading-snug text-balance">
              Compiled Core vs Fragmented Plugins
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Why growing brands replace dozens of brittle third-party plugins with Prostack.
            </p>
          </div>
        </div>

        {/* ── 2. OPEN 2-COLUMN COMPARISON (No boxes, clean vertical line separation) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full pt-2">
          
          {/* ── LEFT COLUMN: LEGACY FRAGMENTED STACK ── */}
          <div className="py-6 md:py-4 md:pr-10 lg:pr-14 space-y-7">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase block">
                Legacy Architecture
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[32px] text-[#202B61] leading-tight">
                Fragmented Plugin Stack
              </h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed font-normal text-pretty">
                Stitching together external plugins creates unpredictable failure points, slow load times, and ongoing maintenance debt.
              </p>
            </div>

            {/* 4 Legacy Points */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              {LEGACY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200/80 flex items-center justify-center shrink-0 mt-0.5 text-rose-500">
                    <X className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">
              Outcome: High Architectural Debt
            </div>
          </div>

          {/* ── RIGHT COLUMN: PROSTACK UNIFIED CORE ── */}
          <div className="py-6 md:py-4 md:pl-10 lg:pl-14 border-t md:border-t-0 md:border-l border-slate-200/80 space-y-7">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase block">
                Prostack Engine
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[32px] text-[#202B61] leading-tight">
                Single Compiled Core
              </h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed font-normal text-pretty">
                CMS authoring, commerce, data automation, and edge delivery compiled into a single connected operational core.
              </p>
            </div>

            {/* 4 Prostack Points */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              {PROSTACK_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="font-sans text-sm sm:text-[15px] text-[#202B61] leading-relaxed font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-emerald-600 font-bold tracking-wider uppercase">
              Outcome: 100% Margin &amp; Code Ownership
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
