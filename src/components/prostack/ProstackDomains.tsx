"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface DomainItem {
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  metric: string;
}

const DOMAINS: DomainItem[] = [
  {
    number: "01",
    title: "Website & Content Management",
    shortTitle: "CMS & Editorial",
    category: "CONTENT LAYER",
    description:
      "A flexible headless CMS for marketing teams to author, schedule, and publish rich editorial pages, blog articles, and landing pages with complete revision history and Liquid code control.",
    features: [
      "Liquid OS 2.0 & React 19 Themes",
      "Draft Staging with Instant Rollback History",
      "Multi-Language & Global Localized Content",
    ],
    image: "/assets/images/web_showcase_bg.jpg",
    metric: "Liquid OS 2.0 & React 19",
  },
  {
    number: "02",
    title: "E-Commerce & Catalog Control",
    shortTitle: "Headless Commerce",
    category: "TRANSACTION LAYER",
    description:
      "High-velocity digital storefront infrastructure managing unlimited SKUs, complex matrix variants, real-time inventory synchronization, and localized multi-currency pricing.",
    features: [
      "Multi-Warehouse Real-Time Inventory Sync",
      "Dynamic Currencies & Multi-Region Checkout",
      "0% Arbitrary Platform Revenue-Share Cuts",
    ],
    image: "/assets/images/elixir-showcase.png",
    metric: "Multi-Warehouse & 0% Fees",
  },
  {
    number: "03",
    title: "Visual Page Builder & Code Tools",
    shortTitle: "Visual Builder",
    category: "DESIGN LAYER",
    description:
      "Bridging the divide between non-technical creators and senior engineers. Assemble visual canvas drafts with full Shopify-compatible Liquid syntax code control.",
    features: [
      "Drag-and-Drop Visual Canvas Assembly",
      "Full Liquid Syntax & Raw CSS Code Control",
      "Component-Level Reusable Design System",
    ],
    image: "/assets/images/webdevelopmentone.jpg",
    metric: "Drag & Drop + Full Code",
  },
  {
    number: "04",
    title: "Automated SEO & Edge Performance",
    shortTitle: "SEO & Speed",
    category: "PERFORMANCE LAYER",
    description:
      "Sub-50ms TTFB edge distribution and automated 98/100 Core Web Vitals out of the box without third-party plugin bloat or script drag.",
    features: [
      "Sub-50ms TTFB Global Edge Distribution",
      "Automated 98/100 Core Web Vitals Out of Box",
      "Zero Third-Party Script Drag Overhead",
    ],
    image: "/assets/images/webdevelopmenttwo.jpg",
    metric: "< 50ms TTFB Global Edge",
  },
  {
    number: "05",
    title: "Real-Time Telemetry & Funnels",
    shortTitle: "Analytics",
    category: "INTELLIGENCE LAYER",
    description:
      "Server-side business telemetry and conversion tracking built directly into the operational core with zero third-party tracking script drag.",
    features: [
      "Server-Side Event Telemetry & Data Pipelines",
      "Real-Time Conversion Funnel Tracking",
      "Zero Client Browser Execution Overhead",
    ],
    image: "/assets/images/digital-marketing-two.jpg",
    metric: "0ms Script Drag Overhead",
  },
  {
    number: "06",
    title: "Enterprise Security & Governance",
    shortTitle: "Security & RBAC",
    category: "GOVERNANCE LAYER",
    description:
      "Zero-compromise protection for transactions with granular role-based permissions, automated SOC2 compliance logging, and TLS 1.3 encryption.",
    features: [
      "Granular Role-Based Access Control (RBAC)",
      "Automated SOC2 & GDPR Compliance Auditing",
      "End-to-End TLS 1.3 Encryption at Rest & Flight",
    ],
    image: "/assets/images/ai-chat-bots.jpg",
    metric: "Granular RBAC Auditing",
  },
  {
    number: "07",
    title: "Memberships & Subscriptions",
    shortTitle: "Subscriptions",
    category: "MONETIZATION LAYER",
    description:
      "Turn standard storefronts into recurring revenue engines with native subscriptions, gated member tiers, and multi-vendor portals with automated commission splits.",
    features: [
      "Native Recurring Billing & Subscription Engine",
      "Multi-Vendor Marketplace & Seller Portals",
      "Automated Commission Splits & Payouts",
    ],
    image: "/assets/images/App-development-three.webp",
    metric: "Native Recurring Engine",
  },
  {
    number: "08",
    title: "APIs & Custom Webhooks",
    shortTitle: "APIs & Webhooks",
    category: "CONNECTIVITY LAYER",
    description:
      "Bidirectional ERP syncing, event-driven webhooks, and sub-20ms edge API dispatching for custom enterprise architectures and automated third-party workflows.",
    features: [
      "Sub-20ms Low-Latency Webhook Dispatching",
      "Bidirectional ERP & CRM Data Synchronization",
      "Complete REST & GraphQL Developer Endpoints",
    ],
    image: "/assets/images/webdevelopmentone.jpg",
    metric: "REST, GraphQL & Webhooks",
  },
];

export const ProstackDomains: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1); // default to 02 (E-Commerce)

  const currentDomain = DOMAINS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % DOMAINS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + DOMAINS.length) % DOMAINS.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="domains"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-12 bg-white text-left select-none scroll-mt-20 font-sans border-b border-slate-200/80"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto space-y-8 sm:space-y-10">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-100">
          <div className="space-y-1.5 text-left">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug">
              Eight Engineered Operational Domains
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 font-normal">
              Compiled into one native architecture — zero third-party plugin chaos.
            </p>
          </div>
          <div className="text-xs font-semibold text-[#202B61]/70 font-mono hidden sm:block">
            DOMAIN {currentDomain.number} / 08
          </div>
        </div>

        {/* ── 2. 2-COLUMN BALANCED SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Substantial Editorial Narrative & Controls ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            {/* Domain Headline & Narrative */}
            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#202B61] tracking-tight leading-tight">
                {currentDomain.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {currentDomain.description}
              </p>
            </div>

            {/* 3 Architectural Feature Highlights */}
            <div className="space-y-2.5 pt-1 border-t border-slate-100">
              {currentDomain.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#202B61] shrink-0" />
                  <span className="font-sans text-xs sm:text-[13.5px] font-medium text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Navigation Buttons + Slide Dots */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous domain"
                  className="w-10 h-10 rounded-[3px] border border-slate-200/90 text-[#202B61] hover:bg-[#F4F6FB] hover:border-[#202B61]/40 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[2]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next domain"
                  className="w-10 h-10 rounded-[3px] bg-[#202B61] text-white hover:bg-[#151E48] flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-sm"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>

              {/* Minimal Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {DOMAINS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveIdx(dotIdx)}
                    aria-label={`Go to domain ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      dotIdx === activeIdx
                        ? "w-6 bg-[#202B61]"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Live Interactive Domain Showcase (Never runs empty) ── */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Main Interactive Screen Frame */}
            <div className="relative rounded-[4px] border border-slate-200/90 bg-[#F4F6FB] overflow-hidden shadow-sm flex flex-col">
              
              {/* Window Console Header */}
              <div className="px-4 py-3 bg-white border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="ml-2 font-mono text-[11px] font-medium text-slate-500">
                    prostack://domains/{currentDomain.shortTitle.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold text-[#202B61]">
                    {currentDomain.metric}
                  </span>
                </div>
              </div>

              {/* Showcase Image Frame */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 overflow-hidden">
                <Image
                  src={currentDomain.image}
                  alt={currentDomain.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover opacity-90 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* In-Frame Domain Banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                      OPERATIONAL SPEC
                    </span>
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
                      {currentDomain.title}
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-[3px] border border-white/10">
                    LIVE CORE
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Domain Switcher Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
              {DOMAINS.map((domain, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={domain.number}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`px-2 py-2 rounded-[3px] text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center gap-0.5 border ${
                      isActive
                        ? "bg-[#202B61] text-white border-[#202B61] shadow-xs"
                        : "bg-white text-slate-600 hover:text-[#202B61] border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] font-bold ${
                        isActive ? "text-white/70" : "text-slate-400"
                      }`}
                    >
                      {domain.number}
                    </span>
                    <span className="font-sans text-[11px] font-semibold truncate w-full">
                      {domain.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
