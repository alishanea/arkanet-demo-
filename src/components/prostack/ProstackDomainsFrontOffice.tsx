"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface DomainCard {
  num: string;
  title: string;
  description: string;
  image: string;
  metricLabel: string;
  metricValue: string;
  isDark?: boolean;
}

const FRONT_OFFICE_DOMAINS: DomainCard[] = [
  {
    num: "01",
    title: "CMS & Editorial Publishing",
    description:
      "A flexible headless CMS to author, schedule, and publish rich editorial pages with draft staging, instant rollbacks, and complete revision history.",
    image: "/assets/images/web_showcase_bg.jpg",
    metricLabel: "Authoring",
    metricValue: "Liquid + React 19",
  },
  {
    num: "02",
    title: "E-Commerce & Catalog Control",
    description:
      "High-velocity digital storefront infrastructure managing unlimited SKUs, complex matrix variants, and multi-warehouse sync with zero revenue cuts.",
    image: "/assets/images/elixir-showcase.png",
    metricLabel: "Inventory",
    metricValue: "Multi-Warehouse",
    isDark: true,
  },
  {
    num: "03",
    title: "Visual Page Builder",
    description:
      "Drag-and-drop visual canvas paired with full code access in Shopify-compatible Liquid syntax for total engineering and design autonomy.",
    image: "/assets/images/webdevelopmentone.jpg",
    metricLabel: "Canvas",
    metricValue: "Drag & Drop + Code",
  },
  {
    num: "04",
    title: "Automated SEO & Edge Speed",
    description:
      "Sub-50ms TTFB edge distribution and automated 98/100 Core Web Vitals out of the box without third-party script bloat or plugin conflicts.",
    image: "/assets/images/webdevelopmenttwo.jpg",
    metricLabel: "Latency",
    metricValue: "< 50ms Global TTFB",
    isDark: true,
  },
];

export const ProstackDomainsFrontOffice: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 border-b border-slate-100">
          <div className="max-w-2xl space-y-2 text-left">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              Front-Office &amp; Commerce Domains (01–04)
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Content authoring, multi-currency commerce, visual drag-and-drop assembly, and sub-50ms edge delivery.
            </p>
          </div>
        </div>

        {/* ── 2. 4 CARDS (Radius < 5px: rounded-[4px]) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full">
          {FRONT_OFFICE_DOMAINS.map((domain) => {
            const isDark = domain.isDark;

            return (
              <div
                key={domain.num}
                className={`group rounded-[4px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? "bg-[#202B61] text-white shadow-md border border-[#202B61]"
                    : "bg-[#F4F6FB] text-[#202B61] border border-slate-200/90 hover:border-[#202B61]/40"
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header: Arrow only (No sequence badge) */}
                  <div className="flex items-center justify-end select-none">
                    <ArrowUpRight
                      className={`w-5 h-5 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isDark ? "text-white/80" : "text-[#202B61]/70"
                      }`}
                    />
                  </div>

                  {/* Real Domain Image Showcase (Radius < 5px: rounded-[4px]) */}
                  <div className="relative w-full aspect-[16/10] rounded-[4px] overflow-hidden bg-slate-900 border border-slate-200/60 shrink-0">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-heading font-extrabold text-lg sm:text-[19px] tracking-tight leading-snug ${
                      isDark ? "text-white" : "text-[#202B61]"
                    }`}
                  >
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-sans text-[13px] sm:text-[13.5px] leading-relaxed font-normal ${
                      isDark ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {domain.description}
                  </p>
                </div>

                {/* Bottom Metric */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                    isDark ? "border-white/15" : "border-slate-200/70"
                  }`}
                >
                  <span className={isDark ? "text-white/60" : "text-slate-400"}>
                    {domain.metricLabel}
                  </span>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-[#202B61]"}`}>
                    {domain.metricValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 3. BOTTOM CONTINUATION PROMPT ── */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-semibold text-[#202B61]">
            <span>Continue to Infrastructure &amp; Intelligence Domains 05–08 below</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-slate-400">PAGE 2 OF 3 • FRONT-OFFICE DOMAINS</span>
        </div>

      </div>
    </section>
  );
};

