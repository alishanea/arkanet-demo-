"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ArchitectureTier {
  id: string;
  num: string;
  title: string;
  description: string;
  isDark?: boolean;
}

const ARCHITECTURE_TIERS: ArchitectureTier[] = [
  {
    id: "presentation",
    num: "01",
    title: "Presentation & Authoring",
    description:
      "Visual canvas assembly with full Shopify Liquid syntax compatibility, component-level draft controls, and real-time revision history.",
  },
  {
    id: "commerce",
    num: "02",
    title: "Unified Commerce Core",
    description:
      "Integrated product catalog matrix, multi-currency cart, multi-warehouse inventory synchronization, and zero arbitrary revenue penalties.",
    isDark: true,
  },
  {
    id: "automation",
    num: "03",
    title: "Automation & Data Pipelines",
    description:
      "Event-driven webhooks, automated order routing, ERP connectors, and customer intelligence pipelines that eliminate fragile third-party middleware.",
  },
  {
    id: "edge",
    num: "04",
    title: "Global Edge & Security",
    description:
      "300+ Edge POPs delivering sub-50ms TTFB globally, automated SSL lifecycle, enterprise RBAC governance, and continuous security audits.",
    isDark: true,
  },
];

export const ProstackArchitecture: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        
        {/* ── 1. SECTION HEADER: Crisp, Clean, Minimalist ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 border-b border-slate-100">
          <div className="max-w-2xl space-y-2">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              Everything Connected in One Unified Operational Core
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Modern businesses waste thousands of dollars gluing together fragile third-party plugins. Prostack unifies authoring, commerce, automation, and edge distribution into a single compiled architecture.
            </p>
          </div>
        </div>

        {/* ── 2. 4 CARDS: Architectural Precision Engineered (Radius < 5px: rounded-[4px]) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full">
          {ARCHITECTURE_TIERS.map((tier) => {
            const isDark = tier.isDark;

            return (
              <div
                key={tier.id}
                className={`group rounded-[4px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? "bg-[#202B61] text-white shadow-md border border-[#202B61]"
                    : "bg-[#F4F6FB] text-[#202B61] border border-slate-200/90 hover:border-[#202B61]/40"
                }`}
              >
                <div>
                  {/* Card Header: Sequence Badge (01/02/03/04) on left (radius 3px < 5px), Minimal Diagonal Arrow (↗) on right */}
                  <div className="flex items-center justify-between pb-8 select-none">
                    <span
                      className={`px-2.5 py-1 rounded-[3px] text-xs font-bold tracking-wider ${
                        isDark
                          ? "bg-white/15 text-white border border-white/20"
                          : "bg-[#202B61]/10 text-[#202B61] border border-[#202B61]/15"
                      }`}
                    >
                      {tier.num}
                    </span>

                    <ArrowUpRight
                      className={`w-5 h-5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isDark ? "text-white/80" : "text-[#202B61]/70"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-extrabold text-lg sm:text-[20px] tracking-tight leading-snug mb-3.5 ${
                      isDark ? "text-white" : "text-[#202B61]"
                    }`}
                  >
                    {tier.title}
                  </h3>

                  {/* Narrative Description */}
                  <p
                    className={`font-sans text-[13.5px] sm:text-[14px] leading-relaxed font-normal ${
                      isDark ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
