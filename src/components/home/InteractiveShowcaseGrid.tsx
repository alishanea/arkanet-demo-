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
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        
        {/* ── 1. SECTION HEADER (NO INNER BORDER LINES) ── */}
        <div className="max-w-4xl space-y-3 text-left">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
            Full-Stack Engineering &amp; Applied AI Capabilities
          </h2>
          <p className="font-sans font-medium text-[#202B61]/75 text-sm sm:text-base leading-relaxed max-w-3xl">
            We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
          </p>
        </div>

        {/* ── 2. CLEAN OPEN 4-COLUMN ALIGNMENT (BALANCED RESPONSIVE GAPS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 xl:gap-12 items-stretch w-full">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="group flex flex-col justify-between text-left cursor-pointer transition-transform duration-200 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#202B61] focus-visible:ring-offset-4"
            >
              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug min-h-[3.25rem] sm:min-h-[3.5rem] flex items-start">
                  {pillar.title}
                </h3>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#202B61]/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Right: ONLY the arrow */}
              <div className="pt-6 sm:pt-8 flex justify-end mt-auto">
                <ArrowRight className="w-5 h-5 text-[#202B61]/60 group-hover:text-[#202B61] group-hover:translate-x-1.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
