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

const INFRASTRUCTURE_DOMAINS: DomainCard[] = [
  {
    num: "05",
    title: "Real-Time Telemetry & Funnels",
    description:
      "Server-side event pipelines and conversion tracking built directly into the platform core with zero third-party tracking scripts or browser slowdown.",
    image: "/assets/images/digital-marketing-two.jpg",
    metricLabel: "Overhead",
    metricValue: "0ms Script Drag",
  },
  {
    num: "06",
    title: "Enterprise Security & RBAC",
    description:
      "Granular role-based permissions, automated SOC2 compliance audit logs, and TLS 1.3 encryption across every transaction and administration endpoint.",
    image: "/assets/images/ai-chat-bots.jpg",
    metricLabel: "Governance",
    metricValue: "Granular RBAC",
    isDark: true,
  },
  {
    num: "07",
    title: "Memberships & Subscriptions",
    description:
      "Turn digital stores into recurring revenue engines with native subscriptions, gated member tiers, vendor portals, and automated payouts.",
    image: "/assets/images/App-development-three.webp",
    metricLabel: "Billing",
    metricValue: "Recurring Engine",
  },
  {
    num: "08",
    title: "APIs & Custom Webhooks",
    description:
      "Bidirectional ERP syncing, event-driven webhooks, and sub-20ms edge API dispatching for custom enterprise workflows and third-party integrations.",
    image: "/assets/images/webdevelopmentone.jpg",
    metricLabel: "Protocols",
    metricValue: "REST & GraphQL",
    isDark: true,
  },
];

export const ProstackDomainsInfrastructure: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 border-b border-slate-100">
          <div className="max-w-2xl space-y-2 text-left">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              Infrastructure &amp; Intelligence Domains (05–08)
            </h2>
          </div>

          <div className="max-w-md lg:max-w-lg">
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Server-side telemetry, role-based enterprise security, subscription monetization, and low-latency edge APIs.
            </p>
          </div>
        </div>

        {/* ── 2. 4 CARDS (Radius < 5px: rounded-[4px]) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full">
          {INFRASTRUCTURE_DOMAINS.map((domain) => {
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
                  {/* Card Header: Sequence Badge (05-08) + Arrow */}
                  <div className="flex items-center justify-between select-none">
                    <span
                      className={`px-2.5 py-1 rounded-[3px] text-xs font-bold tracking-wider ${
                        isDark
                          ? "bg-white/15 text-white border border-white/20"
                          : "bg-[#202B61]/10 text-[#202B61] border border-[#202B61]/15"
                      }`}
                    >
                      {domain.num}
                    </span>

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
            <span>Proceed to Core Comparison &amp; Advantages below</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-slate-400">PAGE 3 OF 3 • INFRASTRUCTURE DOMAINS</span>
        </div>

      </div>
    </section>
  );
};

