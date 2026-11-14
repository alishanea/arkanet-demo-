"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layout,
  Smartphone,
  Cpu,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export interface InteractiveShowcaseGridProps {
  onOpenBooking?: () => void;
}

interface CapabilityCard {
  id: string;
  title: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: "ui-ux",
    title: "UI/UX Product Design & Rapid Prototyping",
    titleLine1: "UI/UX Product Design",
    titleLine2: "& Rapid Prototyping",
    description:
      "Human-centric user research, high-fidelity design systems, and rapid interactive prototypes engineered to maximize conversion and user\u00A0engagement.",
    href: "/capabilities/graphic-design",
    icon: Layout,
  },
  {
    id: "web-mobile",
    title: "High-Performance Web & Mobile Engineering",
    titleLine1: "High-Performance Web",
    titleLine2: "& Mobile Engineering",
    description:
      "Modern Next.js web applications, client portals, and native iOS & Android apps engineered for enterprise scale, speed, and 99.9%\u00A0uptime.",
    href: "/capabilities/website-development",
    icon: Smartphone,
  },
  {
    id: "applied-ai",
    title: "Applied Machine Learning & AI Systems",
    titleLine1: "Applied Machine",
    titleLine2: "Learning & AI Systems",
    description:
      "Custom predictive intelligence models, fine-tuned LLMs, and real-time inference pipelines trained on private enterprise data to automate decision\u00A0making.",
    href: "/capabilities/applied-ai-ml",
    icon: Cpu,
  },
  {
    id: "cloud-cybersecurity",
    title: "Cloud Infrastructure & Enterprise Security",
    titleLine1: "Cloud Infrastructure",
    titleLine2: "& Enterprise Security",
    description:
      "Resilient multi-region cloud architectures, automated CI/CD deployment pipelines, and zero-trust security postures guaranteeing high\u00A0availability.",
    href: "/capabilities/cloud-devops-hosting",
    icon: Cloud,
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="capabilities"
      className="relative w-full bg-white px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        {/* ── 1. CLEAN SECTION HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2.5 max-w-2xl text-left">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] leading-snug">
              Full–Stack Engineering &amp; Applied AI Capabilities
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl text-pretty">
              We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
            </p>
          </div>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#202B61] hover:text-[#202B61]/75 transition-colors shrink-0 group self-start sm:self-end pb-1"
          >
            <span>Explore all capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── 2. 4 OPEN EDITORIAL CAPABILITY COLUMNS (PERFECT SYMMETRY ACROSS ALL 4 COLUMNS) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full pt-4">
          {CAPABILITY_CARDS.map((card, idx) => {
            const Icon = card.icon;

            // Symmetrical border and equal padding across all columns
            const borderClasses =
              idx === 0
                ? "border-t border-slate-200 md:border-t-0"
                : idx === 1
                ? "border-t border-slate-200 md:border-t-0 md:border-l lg:border-l border-slate-200"
                : idx === 2
                ? "border-t border-slate-200 md:border-t md:border-l-0 lg:border-t-0 lg:border-l border-slate-200"
                : "border-t border-slate-200 md:border-t md:border-l lg:border-t-0 lg:border-l border-slate-200";

            return (
              <Link
                key={card.id}
                href={card.href}
                className={`group flex flex-col justify-between cursor-pointer px-5 sm:px-6 lg:px-5 xl:px-8 py-7 sm:py-8 lg:py-6 ${borderClasses}`}
              >
                <div>
                  {/* Clean Icon Container (Static, no color fill on hover) */}
                  <div className="w-11 h-11 rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#202B61] mb-6">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>

                  {/* Symmetrical 2-Line Title Container */}
                  <div className="min-h-[2.85rem] sm:min-h-[3.25rem] lg:min-h-[3.4rem] flex items-start mb-3.5">
                    <h3 className="font-heading font-bold text-[17px] sm:text-lg xl:text-[19px] text-[#202B61] leading-[1.3]">
                      <span className="block">{card.titleLine1}</span>
                      <span className="block">{card.titleLine2}</span>
                    </h3>
                  </div>

                  {/* Symmetrical Description Container (Ample height, no ellipsis truncation) */}
                  <div className="min-h-[5.5rem] sm:min-h-[5.85rem] flex items-start">
                    <p className="font-sans text-[13px] sm:text-[13.5px] xl:text-[14px] text-slate-600 leading-[1.62] font-normal text-pretty">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action: Frameless inline "Learn more →" sitting on the exact same horizontal baseline */}
                <div className="pt-6 mt-8 border-t border-slate-100 flex items-center">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#202B61]">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2] group-hover:translate-x-1.5 transition-transform duration-200" />
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
