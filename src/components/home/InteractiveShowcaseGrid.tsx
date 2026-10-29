"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    title: "Web Applications & SaaS Platforms",
    desc: "Custom Next.js web applications, client portals, and cloud platforms engineered for conversion, speed, and enterprise scale.",
    href: "/capabilities/website-development",
  },
  {
    id: "applied-ai",
    title: "Applied AI & Automation Systems",
    desc: "Custom machine learning models, document intelligence, conversational agents, and automated LLM workflows to scale operations.",
    href: "/capabilities/applied-ai-ml",
  },
  {
    id: "mobile-apps",
    title: "Native Mobile & App Platforms",
    desc: "High performance native iOS, Android, and React Native applications with real-time cloud sync and offline data support.",
    href: "/capabilities/mobile-app-development",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps System Architectures",
    desc: "Production-ready AWS cloud architectures, container orchestration, automated deployment pipelines, and strict security.",
    href: "/capabilities/cloud-devops-hosting",
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="showcase"
      className="relative w-full bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8">
          <div className="max-w-4xl space-y-3 text-left">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
              Full-Stack Engineering &amp; Applied AI Capabilities
            </h2>
            <p className="font-sans font-medium text-[#202B61]/75 text-sm sm:text-base leading-relaxed max-w-3xl">
              We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
            </p>
          </div>
        </div>

        {/* ── 2. CLEAN 4-COLUMN LINE-SEPARATED ALIGNMENT (NO BOXES, ONLY ARROWS) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 border-t border-b border-slate-200/80 w-full">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="group flex flex-col justify-between p-6 sm:p-8 lg:p-9 transition-colors hover:bg-slate-50/60 text-left cursor-pointer"
            >
              <div className="space-y-3.5">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start">
                  {pillar.title}
                </h3>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#202B61]/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Right: ONLY the arrow (No text, no circle, no boxes) */}
              <div className="pt-8 flex justify-end">
                <ArrowRight className="w-5 h-5 text-[#202B61]/50 group-hover:text-[#202B61] group-hover:translate-x-1.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
