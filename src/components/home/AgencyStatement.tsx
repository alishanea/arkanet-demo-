"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface AgencyStatementProps {
  onOpenBooking?: () => void;
}

const STATEMENTS = [
  {
    title: "Web & Mobile Engineering",
    desc: "Custom Next.js web applications, cross-platform mobile apps, and scalable digital platforms engineered for conversion, speed, and performance.",
    tag: "High Performance",
  },
  {
    title: "Applied AI & Automation",
    desc: "Production-ready machine learning models, conversational AI agents, and intelligent automated workflows built to scale enterprise business operations.",
    tag: "Autonomous Systems",
  },
  {
    title: "Cloud & DevOps Architecture",
    desc: "Production-grade cloud architecture with continuous uptime monitoring, zero technical debt, and enterprise-grade security protocols across all workloads.",
    tag: "99.9% Availability",
  },
];

export const AgencyStatement: React.FC<AgencyStatementProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="what-is-arkanet"
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center gap-8 sm:gap-10">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="max-w-4xl space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
            Engineering Enterprise Software, Intelligent AI &amp; Cloud Systems
          </h2>
          <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            We deliver custom digital products, web &amp; mobile applications, and applied artificial intelligence engineered to perform under real traffic and strict enterprise SLAs.
          </p>
        </div>

        {/* ── 2. THREE EQUAL BALANCED HIGHLIGHT CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full">
          {STATEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-6 group-hover:w-14 bg-[#202B61] rounded-full transition-all duration-300 opacity-60 group-hover:opacity-100" />
                </div>

                {/* Exactly 16 words each */}
                <p className="font-sans font-medium text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-[#202B61] shrink-0" />
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrow on right side - no text, size change on hover/touch */}
        <div className="flex justify-end pt-2">
          <Link
            href="/work"
            aria-label="Explore Work"
            className="group inline-flex items-center justify-center p-2 text-slate-400 hover:text-[#202B61] transition-colors"
          >
            <ArrowUpRight className="w-6 h-6 transition-transform duration-200 group-hover:scale-125 group-active:scale-110" />
          </Link>
        </div>

      </div>
    </section>
  );
};
