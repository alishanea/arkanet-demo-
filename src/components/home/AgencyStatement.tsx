"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowUpRight, Sparkles, Layers, Cpu, Cloud } from "lucide-react";

interface AgencyStatementProps {
  onOpenBooking?: () => void;
}

const STATEMENTS = [
  {
    number: "01",
    icon: Layers,
    title: "Web & Mobile Engineering",
    desc: "Custom Next.js web applications, cross-platform mobile apps, and scalable digital platforms engineered for conversion, speed, and performance.",
    tag: "High Performance",
    href: "/capabilities/website-development",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Applied AI & Automation",
    desc: "Production-ready machine learning models, conversational AI agents, and intelligent automated workflows built to scale enterprise business operations.",
    tag: "Autonomous Systems",
    href: "/capabilities/applied-ai-ml",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud & DevOps Architecture",
    desc: "Production-grade cloud architecture with continuous uptime monitoring, zero technical debt, and enterprise-grade security protocols across all workloads.",
    tag: "99.9% Availability",
    href: "/capabilities/cloud-devops-hosting",
  },
];

export const AgencyStatement: React.FC<AgencyStatementProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="what-is-arkanet"
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center">
        
        {/* ── 2-COLUMN BALANCED EDITORIAL ORIENTATION (LEFT: STATEMENT / RIGHT: 3 VERTICAL BLOCKS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center text-left">
          
          {/* Left Side: Bold Editorial Anchor Statement (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 border border-slate-300/60 text-[#202B61] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#202B61]" />
              <span>Core Engineering Pillars</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#202B61] leading-[1.08] tracking-tight">
              Engineering Enterprise Software, Intelligent AI &amp; Cloud Systems
            </h2>

            <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed">
              We deliver custom digital products, web &amp; mobile applications, and applied artificial intelligence engineered to perform under real traffic and strict enterprise SLAs.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/capabilities/website-development"
                className="inline-flex items-center gap-2 bg-[#202B61] hover:bg-[#161e47] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-none hover:shadow-md cursor-pointer"
              >
                <span>View Full Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Zero Technical Debt Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Side: 3 Re-Oriented Editorial Blocks (Span 7 - Stacked Rows) */}
          <div className="lg:col-span-7 space-y-4">
            {STATEMENTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group block p-5 sm:p-6 lg:p-7 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-300 cursor-pointer shadow-none hover:shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    
                    {/* Index Number & Icon */}
                    <div className="flex items-center sm:items-start gap-3 shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#202B61] flex items-center justify-center text-[#202B61] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading font-black text-xs sm:text-sm text-slate-400 group-hover:text-[#202B61] transition-colors pt-2 sm:pt-0">
                        #{item.number}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] group-hover:text-[#202B61] transition-colors">
                          {item.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#202B61] group-hover:scale-125 transition-transform shrink-0" />
                      </div>

                      <p className="font-sans font-normal text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
                        {item.desc}
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70 text-[11px]">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
