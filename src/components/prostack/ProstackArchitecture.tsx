"use client";

import React from "react";
import { Layers, ShoppingBag, Workflow, ShieldCheck } from "lucide-react";

interface ArchitectureTier {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ARCHITECTURE_TIERS: ArchitectureTier[] = [
  {
    id: "presentation",
    title: "Presentation & Authoring",
    description:
      "Visual canvas assembly with full Shopify Liquid syntax compatibility, component-level draft controls, and real-time revision history.",
    icon: Layers,
  },
  {
    id: "commerce",
    title: "Unified Commerce Core",
    description:
      "Integrated product catalog matrix, multi-currency cart, multi-warehouse inventory synchronization, and zero arbitrary revenue penalties.",
    icon: ShoppingBag,
  },
  {
    id: "automation",
    title: "Automation & Data Pipelines",
    description:
      "Event-driven webhooks, automated order routing, ERP connectors, and customer intelligence pipelines that eliminate fragile third-party middleware.",
    icon: Workflow,
  },
  {
    id: "edge",
    title: "Global Edge & Security",
    description:
      "300+ Edge POPs delivering sub-50ms TTFB globally, automated SSL lifecycle, enterprise RBAC governance, and continuous security audits.",
    icon: ShieldCheck,
  },
];

export const ProstackArchitecture: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        
        {/* ── 1. SECTION HEADER: Crisp, Clean, Minimalist (No bottom border line) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2">
          <div className="max-w-2xl space-y-2">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] leading-snug text-balance">
              Everything Connected in One Unified Operational Core
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Modern businesses waste thousands of dollars gluing together fragile third-party plugins. Prostack unifies authoring, commerce, automation, and edge distribution into a single compiled architecture.
            </p>
          </div>
        </div>

        {/* ── 2. OPEN EDITORIAL COLUMNS SEPARATED BY VERTICAL LINES ONLY (No top or bottom line) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {ARCHITECTURE_TIERS.map((tier, idx) => {
            const Icon = tier.icon;

            // Mathematical symmetry: vertical dividing lines between columns
            const borderClasses =
              idx === 0
                ? "border-t-0"
                : idx === 1
                ? "border-t border-slate-200 sm:border-t-0 sm:border-l border-slate-200"
                : idx === 2
                ? "border-t border-slate-200 sm:border-t lg:border-t-0 sm:border-l-0 lg:border-l border-slate-200"
                : "border-t border-slate-200 sm:border-t lg:border-t-0 sm:border-l lg:border-l border-slate-200";

            return (
              <div
                key={tier.id}
                className={`group flex flex-col justify-between px-6 sm:px-7 lg:px-8 py-6 lg:py-6 ${borderClasses}`}
              >
                <div>
                  {/* Clean Icon Container (No number badge) */}
                  <div className="w-11 h-11 rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#202B61] mb-6">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>

                  {/* Symmetrical Card Heading (Uniform 2-Line Height Container) */}
                  <div className="h-[2.85rem] sm:h-[3.25rem] flex items-start mb-3">
                    <h3 className="font-heading font-extrabold text-lg sm:text-[19px] text-[#202B61] leading-snug">
                      {tier.title}
                    </h3>
                  </div>

                  {/* Symmetrical Body Copy (Uniform 4-Line Height Container) */}
                  <div className="h-[4.75rem] sm:h-[5.25rem] flex items-start">
                    <p className="font-sans text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed font-normal text-pretty">
                      {tier.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
