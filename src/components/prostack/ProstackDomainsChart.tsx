"use client";

import React, { useState } from "react";
import { ArrowDown, Cpu } from "lucide-react";

interface DomainNode {
  num: string;
  name: string;
  category: string;
  metric: string;
  description: string;
}

const TOP_DOMAINS: DomainNode[] = [
  {
    num: "01",
    name: "CMS & Editorial",
    category: "CONTENT LAYER",
    metric: "Liquid + React 19",
    description: "Headless content authoring with draft staging and full revision history.",
  },
  {
    num: "02",
    name: "Headless Commerce",
    category: "TRANSACTION LAYER",
    metric: "Multi-Warehouse",
    description: "Unlimited SKU matrix, global currencies, and zero arbitrary platform cuts.",
  },
  {
    num: "03",
    name: "Visual Builder",
    category: "DESIGN LAYER",
    metric: "Drag & Drop Canvas",
    description: "No-code canvas assembly paired with complete Liquid syntax code control.",
  },
  {
    num: "04",
    name: "SEO & Edge Speed",
    category: "PERFORMANCE LAYER",
    metric: "98/100 Core Vitals",
    description: "Automated schema, sitemaps, and sub-50ms edge delivery out of the box.",
  },
];

const BOTTOM_DOMAINS: DomainNode[] = [
  {
    num: "05",
    name: "Telemetry & Analytics",
    category: "INTELLIGENCE LAYER",
    metric: "0ms Script Drag",
    description: "Server-side event pipelines and conversion tracking with zero script slowdown.",
  },
  {
    num: "06",
    name: "Security & RBAC",
    category: "GOVERNANCE LAYER",
    metric: "Granular RBAC",
    description: "Enterprise role permissions, SOC2 compliance logging, and TLS 1.3 encryption.",
  },
  {
    num: "07",
    name: "Subscriptions & Tiers",
    category: "MONETIZATION LAYER",
    metric: "Recurring Engine",
    description: "Recurring revenue engine with vendor portals and automated commission splits.",
  },
  {
    num: "08",
    name: "APIs & Webhooks",
    category: "CONNECTIVITY LAYER",
    metric: "< 20ms Edge APIs",
    description: "Bidirectional ERP sync, event-driven webhooks, and REST/GraphQL endpoints.",
  },
];

export const ProstackDomainsChart: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 border-b border-slate-100">
          <div className="max-w-2xl space-y-2 text-left">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              Eight Engineered Operational Domains
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              All eight commercial capabilities compiled into one single engine — eliminating fragile third-party plugins.
            </p>
          </div>
        </div>

        {/* ── 2. ARCHITECTURAL SYSTEM CHART (Radius < 5px: rounded-[4px]) ── */}
        <div className="space-y-4 w-full">
          
          {/* TOP 4 DOMAIN NODES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {TOP_DOMAINS.map((domain) => {
              const isHovered = activeNode === domain.num;
              return (
                <div
                  key={domain.num}
                  onMouseEnter={() => setActiveNode(domain.num)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`p-5 sm:p-6 rounded-[4px] border transition-all duration-200 flex flex-col justify-between ${
                    isHovered
                      ? "bg-[#202B61] text-white border-[#202B61] shadow-sm -translate-y-0.5"
                      : "bg-[#F4F6FB] text-[#202B61] border-slate-200/90 hover:border-[#202B61]/40"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 rounded-[3px] text-xs font-bold tracking-wider ${
                          isHovered
                            ? "bg-white/20 text-white"
                            : "bg-[#202B61]/10 text-[#202B61]"
                        }`}
                      >
                        {domain.num}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider ${
                          isHovered ? "text-white/70" : "text-slate-400"
                        }`}
                      >
                        {domain.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg tracking-tight">
                      {domain.name}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed line-clamp-2 ${
                        isHovered ? "text-white/80" : "text-slate-600"
                      }`}
                    >
                      {domain.description}
                    </p>
                  </div>

                  <div
                    className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                      isHovered ? "border-white/15 text-white/90" : "border-slate-200/80 text-slate-500"
                    }`}
                  >
                    <span>Metric:</span>
                    <span className={isHovered ? "text-white font-bold" : "text-[#202B61] font-bold"}>
                      {domain.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTRAL COMPILED BUS KERNEL (Connecting all 8 domains) */}
          <div className="rounded-[4px] p-4 sm:p-5 bg-[#202B61] text-white border border-[#202B61] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-wide">
                PROSTACK COMPILED OPERATIONAL KERNEL
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-white/80">
              <span className="hidden md:inline">SUB-50ms GLOBAL EDGE</span>
              <span className="hidden md:inline">•</span>
              <span>ZERO RUNTIME PLUGINS</span>
              <span className="hidden md:inline">•</span>
              <span className="text-emerald-300 font-semibold">100% MARGIN OWNERSHIP</span>
            </div>
          </div>

          {/* BOTTOM 4 DOMAIN NODES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {BOTTOM_DOMAINS.map((domain) => {
              const isHovered = activeNode === domain.num;
              return (
                <div
                  key={domain.num}
                  onMouseEnter={() => setActiveNode(domain.num)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`p-5 sm:p-6 rounded-[4px] border transition-all duration-200 flex flex-col justify-between ${
                    isHovered
                      ? "bg-[#202B61] text-white border-[#202B61] shadow-sm -translate-y-0.5"
                      : "bg-[#F4F6FB] text-[#202B61] border-slate-200/90 hover:border-[#202B61]/40"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 rounded-[3px] text-xs font-bold tracking-wider ${
                          isHovered
                            ? "bg-white/20 text-white"
                            : "bg-[#202B61]/10 text-[#202B61]"
                        }`}
                      >
                        {domain.num}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider ${
                          isHovered ? "text-white/70" : "text-slate-400"
                        }`}
                      >
                        {domain.category}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg tracking-tight">
                      {domain.name}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed line-clamp-2 ${
                        isHovered ? "text-white/80" : "text-slate-600"
                      }`}
                    >
                      {domain.description}
                    </p>
                  </div>

                  <div
                    className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                      isHovered ? "border-white/15 text-white/90" : "border-slate-200/80 text-slate-500"
                    }`}
                  >
                    <span>Metric:</span>
                    <span className={isHovered ? "text-white font-bold" : "text-[#202B61] font-bold"}>
                      {domain.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ── 3. BOTTOM CONTINUATION PROMPT ── */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-semibold text-[#202B61]">
            <span>Explore deep-dives for Domains 01–04 below</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-slate-400">PAGE 1 OF 3 • ARCHITECTURE MAP</span>
        </div>

      </div>
    </section>
  );
};

