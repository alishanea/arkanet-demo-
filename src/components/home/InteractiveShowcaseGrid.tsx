"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface InteractiveShowcaseGridProps {
  onOpenBooking?: () => void;
}

interface CapabilityPillar {
  id: string;
  titleLine1: string;
  titleLine2: string;
  desc: string;
  href: string;
}

const PILLARS: CapabilityPillar[] = [
  {
    id: "web-saas",
    titleLine1: "Web Applications &",
    titleLine2: "SaaS Platforms",
    desc: "Custom Next.js web applications, client portals, and cloud platforms engineered for conversion, speed, and enterprise scale.",
    href: "/capabilities/website-development",
  },
  {
    id: "applied-ai",
    titleLine1: "Applied AI &",
    titleLine2: "Automation Systems",
    desc: "Custom machine learning models, document intelligence, conversational agents, and automated LLM workflows to scale operations.",
    href: "/capabilities/applied-ai-ml",
  },
  {
    id: "mobile-apps",
    titleLine1: "Native Mobile &",
    titleLine2: "App Platforms",
    desc: "High performance native iOS, Android, and React Native applications with real-time cloud sync and offline data support.",
    href: "/capabilities/mobile-app-development",
  },
  {
    id: "cloud-devops",
    titleLine1: "Cloud & DevOps",
    titleLine2: "System Architectures",
    desc: "Production-ready AWS cloud architectures, container orchestration, automated deployment pipelines, and strict security.",
    href: "/capabilities/cloud-devops-hosting",
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="showcase"
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8">
          <div className="max-w-4xl space-y-3 text-left">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
              Full-Stack Engineering &amp; Applied AI Capabilities
            </h2>
            <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
            </p>
          </div>
        </div>

        {/* ── 2. FULLY INTERACTIVE 4-COLUMN CAPABILITY GRID (PERFECT SYMMETRY) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full">
          {PILLARS.map((pillar) => {
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group relative rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full bg-white hover:bg-slate-50/80 border border-slate-200/90 transition-all duration-300 cursor-pointer text-left"
              >
                <div className="space-y-5 flex-1 flex flex-col">
                  {/* Title & Expanding Underline Bar (Guaranteed identical 2-line height) */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug min-h-[3.25rem] sm:min-h-[3.75rem] flex flex-col justify-start">
                      <span className="block">{pillar.titleLine1}</span>
                      <span className="block">{pillar.titleLine2}</span>
                    </h3>
                    <div className="h-0.5 w-6 group-hover:w-14 bg-[#202B61] rounded-full transition-all duration-300 opacity-60 group-hover:opacity-100" />
                  </div>

                  {/* Description (Guaranteed identical height & line count across all 4 cards) */}
                  <p className="font-sans font-medium text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[5.25rem] sm:min-h-[5.5rem] flex-1 flex items-start">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Action Prompt - right-facing arrow with line */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-end text-slate-400 group-hover:text-[#202B61] transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
