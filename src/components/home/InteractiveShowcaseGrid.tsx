"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Layout,
  Brain,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export interface InteractiveShowcaseGridProps {
  onOpenBooking?: () => void;
}

interface CapabilityPillar {
  id: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
}

const PILLARS: CapabilityPillar[] = [
  {
    id: "web-saas",
    icon: Layout,
    title: "Web & SaaS Platforms",
    desc: "Custom Next.js web applications, client dashboards, and cloud-native digital platforms engineered for conversion, speed, and real enterprise scale.",
    href: "/capabilities/website-development",
  },
  {
    id: "applied-ai",
    icon: Brain,
    title: "Applied AI & ML",
    desc: "Custom ML models, demand forecasting, conversational AI agents, and autonomous LLM workflows designed to streamline operations.",
    href: "/capabilities/applied-ai-ml",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "High performance native iOS, Android, and cross-platform React Native apps with real-time cloud sync and offline data resilience.",
    href: "/capabilities/mobile-app-development",
  },
  {
    id: "cloud-devops",
    icon: ShieldCheck,
    title: "Cloud & DevOps 99.9%",
    desc: "Production-ready cloud architecture on AWS, container orchestration, automated CI/CD pipelines, and enterprise security protocols.",
    href: "/capabilities/cloud-devops-hosting",
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="showcase"
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-12 sm:py-16 select-none border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center gap-10 sm:gap-14">
        
        {/* ── 1. SECTION HEADER (AUTHORITATIVE, EDITORIAL) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          <div className="lg:col-span-8 xl:col-span-9">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0b1330] leading-tight tracking-tight">
              Full-Stack Engineering &amp; Applied AI Capabilities
            </h2>
            <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5 max-w-3xl">
              We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
            </p>
          </div>

          <div className="lg:col-span-4 xl:col-span-3 flex justify-start lg:justify-end">
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-3 bg-[#0b1330] hover:bg-[#132047] active:scale-[0.98] text-white pl-6 pr-2.5 py-2.5 rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-[0_4px_14px_rgba(11,19,48,0.16)] hover:shadow-[0_6px_20px_rgba(11,19,48,0.22)] shrink-0"
            >
              <span className="tracking-tight">All Capabilities</span>
              <span className="w-8 h-8 rounded-full bg-white/12 text-[#38bdf8] flex items-center justify-center group-hover:bg-[#38bdf8] group-hover:text-[#0b1330] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* ── 2. FULLY INTERACTIVE 4-COLUMN CAPABILITY GRID (EVERY BOX DYNAMICALLY REACTS ON HOVER) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch w-full">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-white/50 hover:bg-white border border-slate-200/60 hover:border-slate-200/90 shadow-2xs hover:shadow-[0_20px_45px_rgba(11,19,48,0.09)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-5">
                  {/* Icon with interactive color & lift */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/60 border border-blue-100/60 text-[#0b1330] group-hover:text-[#1d4ed8] group-hover:bg-blue-50 group-hover:border-blue-200 flex items-center justify-center group-hover:-translate-y-1 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title & Expanding Underline Bar */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0b1330] group-hover:text-[#1d4ed8] tracking-tight leading-snug transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <div className="h-0.5 w-4 group-hover:w-12 bg-[#1d4ed8] rounded-full transition-all duration-300 opacity-60 group-hover:opacity-100" />
                  </div>

                  {/* Description */}
                  <p className="font-sans font-medium text-slate-600 group-hover:text-[#0b1330] text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Action Prompt with Arrow */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#1d4ed8] transition-colors duration-300">
                  <span className="tracking-tight">Explore Capability</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 group-hover:bg-[#1d4ed8] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
