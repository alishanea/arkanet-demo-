"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layout,
  Cpu,
  Smartphone,
  Cloud,
  ShoppingBag,
  Shield,
  Bot,
  Network,
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
    id: "web-saas",
    title: "Web Applications & SaaS Platforms",
    description:
      "Custom Next.js web applications, client portals, and multi-tenant SaaS engineered for sub-second latency and zero-downtime enterprise scale.",
    href: "/capabilities/website-development",
    icon: Layout,
  },
  {
    id: "applied-ai",
    title: "Applied AI & Automation Systems",
    description:
      "Custom machine learning models, document intelligence, and automated LLM workflows cutting operational processing cycles by up to 84%.",
    href: "/capabilities/applied-ai-ml",
    icon: Cpu,
  },
  {
    id: "mobile-apps",
    title: "Native Mobile & App Platforms",
    description:
      "High-performance native iOS, Android, and cross-platform mobile apps with real-time sync, offline caching, and 99.9% crash-free sessions.",
    href: "/capabilities/mobile-app-development",
    icon: Smartphone,
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Architectures",
    description:
      "Production-ready AWS cloud architectures, container orchestration, automated CI/CD pipelines, and enterprise-grade security protocols.",
    href: "/capabilities/cloud-devops-hosting",
    icon: Cloud,
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Flagships",
    description:
      "Headless commerce, high-converting checkout flows, and custom 3D WebGL visualizers engineered for maximum global customer engagement.",
    href: "/capabilities/ecommerce-shopify-development",
    icon: ShoppingBag,
  },
  {
    id: "portals",
    title: "Enterprise Portals & Client Systems",
    description:
      "Centralized role-based access portals, internal tooling, and secure databases engineered with strict SOC-2 and HIPAA compliance.",
    href: "/capabilities/custom-portals",
    icon: Shield,
  },
  {
    id: "conversational-ai",
    title: "Conversational AI & Autonomous Agents",
    description:
      "Autonomous tier-1 support agents, intelligent dispatch systems, and customer-facing assistants resolving complex inquiries 24/7.",
    href: "/capabilities/ai-chatbot-automation",
    icon: Bot,
  },
  {
    id: "api-integration",
    title: "API & Systems Architecture",
    description:
      "High-throughput microservices, legacy system modernizations, and event-driven integrations handling millions of reliable daily syncs.",
    href: "/capabilities/api-systems-integration",
    icon: Network,
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="showcase"
      className="relative w-full bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12 lg:space-y-14">
        {/* ── 1. SECTION HEADER ── */}
        <div className="max-w-4xl space-y-3 text-left">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
            Full-Stack Engineering &amp; Applied AI Capabilities
          </h2>
          <p className="font-sans font-medium text-[#202B61]/75 text-sm sm:text-base leading-relaxed max-w-3xl">
            We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
          </p>
        </div>

        {/* ── 2. 8-CARD INTERACTIVE GRID (4 COLUMNS × 2 ROWS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col justify-between h-[215px] sm:h-[225px] lg:h-[235px] p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:bg-[#edf2f8] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]/30 focus-visible:ring-offset-2 transition-all duration-300 cursor-pointer overflow-hidden text-left"
              >
                {/* Top Area: Crossfade between Title (default) and Value Proposition (hover) */}
                <div className="relative w-full flex-1">
                  {/* Default State: Title */}
                  <div className="transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-1 group-focus-visible:opacity-0">
                    <h3 className="font-heading font-extrabold text-lg sm:text-[19px] lg:text-xl text-[#202B61] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Hover State: Value Proposition / Technical Impact Description */}
                  <div className="absolute inset-0 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                    <p className="font-sans font-medium text-xs sm:text-[13.5px] text-[#202B61]/90 leading-relaxed line-clamp-5">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Linear Icon on Left, Clean Arrow on Right */}
                <div className="flex items-end justify-between w-full pt-4 mt-auto">
                  <div className="text-[#202B61]/70 group-hover:text-[#202B61] transition-colors duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.35]" />
                  </div>
                  <div className="text-[#202B61]/60 group-hover:text-[#202B61] group-hover:translate-x-1.5 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 stroke-[1.8]" />
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
