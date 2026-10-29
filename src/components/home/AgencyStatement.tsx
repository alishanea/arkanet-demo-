"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface AgencyStatementProps {
  onOpenBooking?: () => void;
}

const STATEMENTS = [
  {
    title: "Web & Mobile Engineering",
    desc: "Custom Next.js web applications, cross-platform mobile apps, and scalable digital platforms engineered for conversion, speed, and performance.",
    href: "/capabilities/website-development",
  },
  {
    title: "Applied AI & Automation",
    desc: "Production-ready machine learning models, conversational AI agents, and intelligent automated workflows built to scale enterprise business operations.",
    href: "/capabilities/applied-ai-ml",
  },
  {
    title: "Cloud & DevOps Architecture",
    desc: "Production-grade cloud architecture with continuous uptime monitoring, zero technical debt, and enterprise-grade security protocols across all workloads.",
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
        
        {/* ── 2-COLUMN EDITORIAL LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start text-left">
          
          {/* Left Side: Statement Heading & Narrative (No text above heading, No button, No blue text) */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-slate-900 leading-[1.08] tracking-tight">
              Engineering Enterprise Software, Intelligent AI &amp; Cloud Systems
            </h2>

            <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed">
              We deliver custom digital products, web &amp; mobile applications, and applied artificial intelligence engineered to perform under real traffic and strict enterprise SLAs.
            </p>
          </div>

          {/* Right Side: 3 Items with Single Line Separation, No Boxes, No Numbers, No Micro-Elements */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200/90 border-t lg:border-t-0 border-b border-slate-200/90">
            {STATEMENTS.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group block py-7 sm:py-8 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1 pr-4">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-black transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-1 shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-950 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Bottom Right: All Capabilities Arrow (No text, just a small arrow at the bottom right side) */}
            <div className="pt-6 pb-2 flex justify-end">
              <Link
                href="/capabilities"
                aria-label="View all capabilities"
                title="View all capabilities"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 hover:border-slate-900 text-slate-500 hover:text-slate-950 transition-all"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
