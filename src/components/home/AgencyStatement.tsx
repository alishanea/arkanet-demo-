"use client";

import React from "react";
import Link from "next/link";

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

const STATEMENTS: CapabilityItem[] = [
  {
    id: "web-mobile",
    title: "Web & Mobile Engineering",
    desc: "Custom Next.js web applications, cross-platform mobile apps, and scalable digital platforms engineered for conversion, speed, and performance.",
    href: "/capabilities/website-development",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 stroke-[1.25] text-[#202B61]/80 group-hover:text-[#202B61] transition-colors"
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
    title: "Applied AI & Automation",
    desc: "Production-ready machine learning models, conversational AI agents, and intelligent automated workflows built to scale enterprise business operations.",
    href: "/capabilities/applied-ai-ml",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 stroke-[1.25] text-[#202B61]/80 group-hover:text-[#202B61] transition-colors"
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
    id: "cloud-devops",
    title: "Cloud & DevOps Architecture",
    desc: "Production-grade cloud architecture with continuous uptime monitoring, zero technical debt, and enterprise-grade security protocols across all workloads.",
    href: "/capabilities/cloud-devops-hosting",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        className="w-10 h-10 stroke-[1.25] text-[#202B61]/80 group-hover:text-[#202B61] transition-colors"
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
      className="relative w-full bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden font-sans"
    >
      {/* ── ARCHITECTURAL ENGINEERING DOT GRID BACKGROUND LAYER ── */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(32, 43, 97, 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 65% at 50% 50%, black 35%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 50% 50%, black 35%, transparent 100%)",
        }}
      />

      {/* ── SUBTLE AMBIENT LUMINOUS GLOW ── */}
      <div 
        aria-hidden="true"
        className="absolute -top-32 right-1/4 w-[500px] h-[350px] bg-[#202B61]/4 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true"
        className="absolute -bottom-32 left-10 w-[420px] h-[300px] bg-[#202B61]/3 rounded-full blur-3xl pointer-events-none"
      />

      {/* ── SECTION CONTENT ── */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* ── 1. EXACT ORIGINAL STATEMENT HEADLINE & DESCRIPTION ── */}
        <div className="space-y-3 max-w-4xl text-left">
          <h2 className="section-h2">
            Engineering Enterprise Software, Intelligent AI &amp; Cloud Systems
          </h2>
          <p className="section-desc max-w-3xl">
            We deliver custom digital products, web &amp; mobile applications, and applied artificial intelligence engineered to perform under real traffic and strict enterprise SLAs.
          </p>
        </div>

        {/* ── 2. OPEN 3-COLUMN CAPABILITY GRID (EXACT ORIGINAL 3 STATEMENTS, NO ARROWS, CLEAN AESTHETIC) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full text-left">
          {STATEMENTS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col items-start cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#202B61] focus-visible:ring-offset-4 rounded-sm"
            >
              {/* Minimalist Linear Icon */}
              <div className="mb-4 sm:mb-5">
                {item.renderIcon()}
              </div>

              {/* Title (No arrows) */}
              <h3 className="card-h3 group-hover:text-[#202B61]/80 transition-colors">
                {item.title}
              </h3>

              {/* Exact Original Description */}
              <p className="font-sans font-normal text-sm text-[#202B61]/70 leading-relaxed mt-2.5">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
