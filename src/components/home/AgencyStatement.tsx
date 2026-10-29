"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface AgencyStatementProps {
  onOpenBooking?: () => void;
}

interface CapabilityItem {
  id: string;
  title: string;
  desc: string;
  href: string;
  renderIcon: () => React.ReactNode;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "web-platforms",
    title: "Web & SaaS Platforms",
    desc: "Custom Next.js web applications, client portals, and multi-tenant platforms engineered for speed, enterprise scale, and conversion.",
    href: "/capabilities/website-development",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 stroke-[1.25] text-[#202B61]/75 group-hover:text-[#202B61] transition-colors"
        aria-hidden="true"
      >
        <rect x="6" y="8" width="36" height="28" rx="3" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="17" cy="12" r="1.5" fill="currentColor" />
        <circle cx="22" cy="12" r="1.5" fill="currentColor" />
        <rect x="12" y="22" width="10" height="8" rx="1.5" />
        <line x1="27" y1="23" x2="36" y2="23" />
        <line x1="27" y1="28" x2="33" y2="28" />
        <path d="M18 40h12" />
        <path d="M24 36v4" />
      </svg>
    ),
  },
  {
    id: "applied-ai",
    title: "Applied AI & Autonomous Systems",
    desc: "Production-ready machine learning models, custom RAG pipelines, and conversational AI agents built to scale business operations.",
    href: "/capabilities/applied-ai-ml",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 stroke-[1.25] text-[#202B61]/75 group-hover:text-[#202B61] transition-colors"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <rect x="21" y="5" width="6" height="6" rx="1" />
        <rect x="21" y="37" width="6" height="6" rx="1" />
        <rect x="5" y="21" width="6" height="6" rx="1" />
        <rect x="37" y="21" width="6" height="6" rx="1" />
        <line x1="24" y1="11" x2="24" y2="16" />
        <line x1="24" y1="32" x2="24" y2="37" />
        <line x1="11" y1="24" x2="16" y2="24" />
        <line x1="32" y1="24" x2="37" y2="24" />
        <circle cx="34" cy="14" r="1.5" fill="currentColor" />
        <circle cx="14" cy="34" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "mobile-apps",
    title: "Native Mobile & App Ecosystems",
    desc: "High-performance iOS, Android, and cross-platform mobile apps with real-time cloud sync, offline caching, and 99.9% crash-free sessions.",
    href: "/capabilities/mobile-app-development",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 stroke-[1.25] text-[#202B61]/75 group-hover:text-[#202B61] transition-colors"
        aria-hidden="true"
      >
        <rect x="14" y="6" width="20" height="36" rx="4" />
        <line x1="21" y1="11" x2="27" y2="11" />
        <circle cx="24" cy="37" r="1.5" fill="currentColor" />
        <path d="M7 20l4 4-4 4" />
        <path d="M41 20l-4 4 4 4" />
        <line x1="11" y1="24" x2="14" y2="24" />
        <line x1="34" y1="24" x2="37" y2="24" />
      </svg>
    ),
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Architecture",
    desc: "Production-grade cloud architecture with continuous uptime monitoring, automated deployment pipelines, and zero technical debt.",
    href: "/capabilities/cloud-devops-hosting",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 stroke-[1.25] text-[#202B61]/75 group-hover:text-[#202B61] transition-colors"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v16" />
        <path d="M18 24l6 6 6-6" />
        <path d="M15 17a10 10 0 0 1 18 0" strokeDasharray="2 3" />
        <circle cx="24" cy="14" r="2" fill="currentColor" />
        <circle cx="33" cy="33" r="1.5" fill="currentColor" />
        <circle cx="15" cy="33" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export const AgencyStatement: React.FC<AgencyStatementProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="what-is-arkanet"
      className="relative w-full bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28 select-none border-t border-slate-200/80 overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* ── 1. AUTHORITATIVE HERO STATEMENT ── */}
        <div className="space-y-4 max-w-4xl text-left">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] text-[#202B61] leading-[1.18] tracking-tight">
            Engineering Enterprise Software, Intelligent AI &amp; Cloud Systems
          </h2>
          <p className="font-sans font-medium text-[#202B61]/75 text-base sm:text-lg leading-relaxed max-w-3xl">
            We deliver custom digital products, web &amp; mobile applications, and applied artificial intelligence engineered to perform under real traffic and strict enterprise SLAs.
          </p>
        </div>

        {/* ── 2. OPEN 2-COLUMN CAPABILITY GRID (MATCHING REFERENCE EDITORIAL LAYOUT) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16 w-full text-left">
          {CAPABILITIES.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col items-start cursor-pointer transition-transform duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#202B61] focus-visible:ring-offset-8 rounded-lg"
            >
              {/* Minimalist Linear Icon */}
              <div className="mb-4 sm:mb-5">
                {item.renderIcon()}
              </div>

              {/* Title & Subtle Chevron Arrow */}
              <div className="flex items-center justify-between gap-4 w-full">
                <h3 className="font-heading font-semibold text-2xl sm:text-[26px] lg:text-[28px] text-[#202B61] tracking-tight leading-snug group-hover:text-[#202B61]/85 transition-colors">
                  {item.title}
                </h3>
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#202B61]/40 group-hover:text-[#202B61] group-hover:translate-x-2 transition-all shrink-0 stroke-[1.5]" />
              </div>

              {/* Refined Description */}
              <p className="font-sans font-normal text-sm sm:text-[15px] text-[#202B61]/70 leading-relaxed mt-2.5 max-w-lg">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
