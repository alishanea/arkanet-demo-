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
  description: string;
  href: string;
  icon: LucideIcon;
}

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: "ui-ux",
    title: "UI/UX Product Design & Prototyping",
    description:
      "Human-centric user research, high-fidelity design systems, and rapid interactive prototypes engineered to maximize conversion and engagement.",
    href: "/capabilities/graphic-design",
    icon: Layout,
  },
  {
    id: "web-mobile",
    title: "High-Performance Web & Mobile Apps",
    description:
      "Modern Next.js web applications, client portals, and native iOS & Android apps built for enterprise scale, speed, and 99.9% uptime.",
    href: "/capabilities/website-development",
    icon: Smartphone,
  },
  {
    id: "applied-ai",
    title: "Applied Machine Learning & AI Systems",
    description:
      "Custom predictive models, fine-tuned LLMs, and real-time inference pipelines trained on private enterprise data to automate decision-making.",
    href: "/capabilities/applied-ai-ml",
    icon: Cpu,
  },
  {
    id: "cloud-cybersecurity",
    title: "Cloud Infrastructure & Cybersecurity",
    description:
      "Resilient multi-region cloud setups, automated CI/CD deployment pipelines, and zero-trust security postures guaranteeing 99.9% uptime.",
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
            <h2 className="section-h2">
              Full–Stack Engineering &amp; Applied AI Capabilities
            </h2>
            <p className="section-desc max-w-2xl">
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

        {/* ── 2. 4 CLEAN STATIC CARDS (RADIUS LESS THAN 5, HOVER EFFECT ON ARROW ONLY) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[4px] bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(32,43,97,0.03)] cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Clean Icon Container (Radius less than 5) */}
                  <div className="w-12 h-12 rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#202B61] shadow-2xs mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#202B61] tracking-tight leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13.5px] sm:text-[14px] text-[#202B61]/75 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action: Hover effect on arrow only (slide right, no fill) */}
                <div className="flex items-center justify-between pt-5 mt-6 border-t border-slate-100">
                  <span className="text-xs sm:text-[13px] font-semibold text-[#202B61]">
                    Learn more
                  </span>
                  <div className="w-8 h-8 rounded-full border border-slate-200/90 flex items-center justify-center text-[#202B61] group-hover:translate-x-1.5 transition-transform duration-200">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
