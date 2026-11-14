"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  const [cardStep, setCardStep] = useState(340);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive step measurement for pixel-perfect sliding on all screen widths
  useEffect(() => {
    const updateStep = () => {
      if (window.innerWidth < 640) {
        setCardStep(270 + 16);
      } else if (window.innerWidth < 1024) {
        setCardStep(290 + 16);
      } else {
        setCardStep(310 + 20);
      }
    };

    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

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
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-12 bg-white text-left select-none scroll-mt-20 font-sans overflow-hidden border-b border-slate-200/80"
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
        </div>

        {/* ── 2. 50/50 SPLIT: LEFT CONTENT (50%) & RIGHT SLIDER (50%) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT 50% COLUMN: Substantial Editorial Content + Arrows Directly Below ── */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-left">
            
            {/* Domain Headline & Narrative (No category tag badge) */}
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

            {/* ── ARROWS DIRECTLY BELOW CONTENT (No micro numbers) ── */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3 select-none">
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
              <div className="flex items-center gap-1.5 ml-2">
                {DOMAINS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveIdx(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      dotIdx === activeIdx
                        ? "w-6 bg-[#202B61]"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT 50% COLUMN: Carousel Slider Taking Half of Screen ── */}
          <div className="lg:col-span-6 relative overflow-hidden py-2">
            <div
              ref={trackRef}
              style={{
                transform: `translateX(-${activeIdx * cardStep}px)`,
                transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="flex gap-4 sm:gap-5 items-stretch w-max"
            >
              {DOMAINS.map((domain, idx) => {
                const isActive = idx === activeIdx;

                return (
                  <div
                    key={domain.number}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative rounded-[4px] overflow-hidden transition-all duration-300 cursor-pointer shrink-0 w-[270px] sm:w-[290px] lg:w-[310px] h-[330px] sm:h-[350px] lg:h-[370px] flex flex-col justify-between ${
                      isActive
                        ? "bg-[#202B61] text-white border border-[#202B61] shadow-lg ring-2 ring-[#202B61]/25"
                        : "bg-[#F4F6FB] text-[#202B61] border border-slate-200/90 hover:border-[#202B61]/50 opacity-85 hover:opacity-100"
                    }`}
                  >
                    {/* Top: Real Preview Image */}
                    <div className="relative w-full h-[62%] bg-slate-900 overflow-hidden shrink-0">
                      <Image
                        src={domain.image}
                        alt={domain.title}
                        fill
                        sizes="(max-width: 768px) 280px, 320px"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                        priority={idx === activeIdx}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom: Card Caption */}
                    <div className="p-4 sm:p-5 h-[38%] flex flex-col justify-between">
                      <h4
                        className={`font-heading font-bold text-base sm:text-lg tracking-tight leading-snug line-clamp-2 ${
                          isActive ? "text-white" : "text-[#202B61]"
                        }`}
                      >
                        {domain.shortTitle}
                      </h4>

                      <div
                        className={`pt-2 border-t flex items-center justify-between text-xs ${
                          isActive
                            ? "border-white/15 text-white/80"
                            : "border-slate-200/80 text-slate-500"
                        }`}
                      >
                        <span className="font-mono text-[11px] truncate max-w-[190px]">
                          {domain.metric}
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isActive ? "text-white" : "text-[#202B61]"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
