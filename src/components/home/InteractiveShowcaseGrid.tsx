"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface InteractiveShowcaseGridProps {
  onOpenBooking?: () => void;
}

interface CapabilityPillar {
  id: string;
  title: string;
  desc: string;
  href: string;
}

const PILLARS: CapabilityPillar[] = [
  {
    id: "web-saas",
    title: "Web & SaaS Platforms",
    desc: "Custom Next.js web applications, client portals, and cloud-native digital platforms engineered for conversion, speed, and enterprise scale.",
    href: "/capabilities/website-development",
  },
  {
    id: "applied-ai",
    title: "Applied AI & Automation",
    desc: "Custom ML models, intelligent document processing, conversational AI agents, and autonomous LLM workflows designed to streamline operations.",
    href: "/capabilities/applied-ai-ml",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    desc: "High performance native iOS, Android, and cross-platform React Native apps with real-time cloud synchronization and offline reliability.",
    href: "/capabilities/mobile-app-development",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Systems",
    desc: "Production-ready cloud architecture on AWS, container orchestration, automated CI/CD deployment pipelines, and strict enterprise security protocols.",
    href: "/capabilities/cloud-devops-hosting",
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="showcase"
      className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center gap-8 sm:gap-10">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="max-w-4xl space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
            Full-Stack Engineering &amp; Applied AI Capabilities
          </h2>
          <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
          </p>
        </div>

        {/* ── 2. FULLY INTERACTIVE 4-COLUMN CAPABILITY GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full">
          {PILLARS.map((pillar) => {
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                className="group relative rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-[#202B61]/40 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Title & Expanding Underline Bar */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <div className="h-0.5 w-6 group-hover:w-14 bg-[#202B61] rounded-full transition-all duration-300 opacity-60 group-hover:opacity-100" />
                  </div>

                  {/* Description (Exact 16 words in all 4 cards) */}
                  <p className="font-sans font-medium text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Action Prompt with Small Arrow */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold font-sans text-slate-400 group-hover:text-[#202B61] transition-colors duration-200">
                  <span className="tracking-tight">Explore Capability</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-125" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Navigation arrow on right side - no text, size change on hover/touch */}
        <div className="flex justify-end pt-2">
          <Link
            href="/capabilities"
            aria-label="Explore Capabilities"
            className="group inline-flex items-center justify-center p-2 text-slate-400 hover:text-[#202B61] transition-colors"
          >
            <ArrowUpRight className="w-6 h-6 transition-transform duration-200 group-hover:scale-125 group-active:scale-110" />
          </Link>
        </div>

      </div>
    </section>
  );
};
