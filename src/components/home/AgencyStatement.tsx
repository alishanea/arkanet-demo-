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
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center">
        
        {/* ── 2-COLUMN EDITORIAL LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start text-left">
          
          {/* Left Side: Statement Heading & Narrative in Signature #202B61 Plus Jakarta Sans */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#202B61] leading-[1.08] tracking-tight">
              Engineering Enterprise Software, Intelligent AI &amp; Cloud Systems
            </h2>

            <p className="font-sans font-medium text-[#202B61]/80 text-sm sm:text-base leading-relaxed">
              We deliver custom digital products, web &amp; mobile applications, and applied artificial intelligence engineered to perform under real traffic and strict enterprise SLAs.
            </p>
          </div>

          {/* Right Side: 3 Items with Single Line Separation, No Boxes, No Numbers, No Micro-Elements */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="divide-y divide-slate-200/80 border-t border-b lg:border-t-0 border-slate-200/80">
              {STATEMENTS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group block py-7 sm:py-8 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1 pr-4">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61] group-hover:opacity-85 transition-opacity leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-sans font-normal text-xs sm:text-sm text-[#202B61]/70 leading-relaxed max-w-xl">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-1 shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-[#202B61]/40 group-hover:text-[#202B61] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Right: Clean Arrow ONLY (No circle, No line around or below it) */}
            <div className="pt-6 flex justify-end">
              <Link
                href="/capabilities"
                aria-label="View all capabilities"
                title="View all capabilities"
                className="inline-flex items-center text-[#202B61]/60 hover:text-[#202B61] transition-colors p-1"
              >
                <ArrowRight className="w-5 h-5 hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
