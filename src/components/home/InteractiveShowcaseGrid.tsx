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
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug">
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

        {/* ── 2. 4 OPEN EDITORIAL CAPABILITY COLUMNS (OLD MODEL: NO CLOSED BOXES) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full pt-4">
          {CAPABILITY_CARDS.map((card, idx) => {
            const Icon = card.icon;

            // Responsive padding: flush on outer edges, comfortable spacing inward
            let paddingClasses = "py-8 lg:py-2 px-0 ";
            if (idx === 0) {
              paddingClasses += "md:pl-0 md:pr-8 lg:pl-0 lg:pr-8";
            } else if (idx === 1) {
              paddingClasses += "md:pl-8 md:pr-0 lg:px-8";
            } else if (idx === 2) {
              paddingClasses += "md:pl-0 md:pr-8 lg:px-8";
            } else if (idx === 3) {
              paddingClasses += "md:pl-8 md:pr-0 lg:pl-8 lg:pr-0";
            }

            // Clean dividing line in between each column
            let borderClasses = "";
            if (idx !== 0) borderClasses += "border-t border-slate-200 ";
            if (idx % 2 === 1) borderClasses += "md:border-l ";
            if (idx >= 2) borderClasses += "md:border-t ";
            else borderClasses += "md:border-t-0 ";
            borderClasses += "lg:border-t-0 ";
            if (idx !== 0) borderClasses += "lg:border-l ";
            borderClasses += "border-slate-200";

            return (
              <Link
                key={card.id}
                href={card.href}
                className={`group flex flex-col justify-between cursor-pointer transition-colors ${paddingClasses} ${borderClasses}`}
              >
                <div>
                  {/* Clean Icon Container (Radius strictly < 5px: rounded-[4px]) */}
                  <div className="w-11 h-11 rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white group-hover:border-[#202B61] transition-colors duration-200 mb-6">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#202B61] tracking-tight leading-snug mb-3 group-hover:text-[#202B61] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed font-normal text-pretty">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action: Clean link with animated arrow (Radius strictly < 5px: rounded-[4px]) */}
                <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-100">
                  <span className="text-xs sm:text-[13px] font-semibold text-[#202B61] group-hover:text-[#202B61] transition-colors">
                    Learn more
                  </span>
                  <div className="w-8 h-8 rounded-[4px] border border-slate-200/90 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white group-hover:border-[#202B61] group-hover:translate-x-1 transition-all duration-200">
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
