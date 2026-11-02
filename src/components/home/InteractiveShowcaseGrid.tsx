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
    id: "ui-ux",
    title: "UI/UX Design & Product Strategy",
    description:
      "User-centric research, wireframing, high-fidelity design systems, and rapid interactive prototyping that align product functionality with business conversion.",
    href: "/capabilities/graphic-design",
    icon: Layout,
  },
  {
    id: "web-mobile",
    title: "Web & Mobile App Development",
    description:
      "High-performance Next.js web applications, client portals, and native iOS/Android apps engineered for real-world traffic, speed, and 99.9% uptime.",
    href: "/capabilities/website-development",
    icon: Smartphone,
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description:
      "Helping enterprises and growing brands reshape their operational workflows, modernize legacy systems, and implement a future-proof digital backbone.",
    href: "/capabilities/business-automation",
    icon: Shield,
  },
  {
    id: "applied-ai",
    title: "End-to-End ML & AI Production",
    description:
      "Harness predictive analytics and automated intelligence. Developing custom models trained on your data to optimize operational efficiency.",
    href: "/capabilities/applied-ai-ml",
    icon: Cpu,
  },
  {
    id: "big-data",
    title: "Big Data Infrastructure",
    description:
      "High-throughput data engineering pipelines, distributed storage, and real-time telemetry architectures turning scattered data into trusted business intelligence.",
    href: "/capabilities/cloud-devops-hosting",
    icon: Network,
  },
  {
    id: "virtual-agents",
    title: "Virtual Agents & Chatbots",
    description:
      "Conversational AI assistants and WhatsApp Business API bots built on modern LLMs to automate customer queries and reduce support volume by up to 84%.",
    href: "/capabilities/ai-chatbot-automation",
    icon: Bot,
  },
  {
    id: "cloud-cybersecurity",
    title: "Cloud Solutions & Cybersecurity",
    description:
      "Secure, resilient cloud architectures with automated CI/CD deployment pipelines, continuous monitoring, and robust enterprise cybersecurity protocols.",
    href: "/capabilities/cloud-devops-hosting",
    icon: Cloud,
  },
  {
    id: "ar-vr-metaverse",
    title: "AR/VR & Metaverse Solutions",
    description:
      "Interactive 3D spaces, augmented and virtual reality experiences, and secure blockchain integrations allowing your brand to operate at the digital frontier.",
    href: "/capabilities/ecommerce-shopify-development",
    icon: ShoppingBag,
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28 select-none border-t border-slate-200/80 overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        {/* ── 1. STRUCTURED PAGE SECTION HEADER ── */}
        <div className="max-w-3xl space-y-3 text-left">
          <h2 className="section-h2">
            Full–Stack Engineering &amp; Applied AI Capabilities
          </h2>
          <p className="section-desc max-w-2xl">
            We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
          </p>
        </div>

        {/* ── 2. 8-CARD TIGHT ARCHITECTURAL GRID (RADIUS < 5PX, REFINED PROPORTIONS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4 w-full">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col justify-between h-[180px] sm:h-[190px] lg:h-[195px] p-5 sm:p-5.5 lg:p-6 rounded-[4px] bg-white border border-slate-200/90 shadow-none cursor-pointer overflow-hidden text-left transition-none"
              >
                {/* Top Area: Smooth crossfade between Title (default) and Value Proposition (hover) */}
                <div className="relative w-full flex-1">
                  {/* Default State: Clean, Refined Headline */}
                  <div className="transition-all duration-200 ease-out group-hover:opacity-0 group-hover:-translate-y-1 group-focus-visible:opacity-0">
                    <h3 className="font-heading font-bold text-[15.5px] sm:text-[16.5px] text-[#202B61] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Hover State: Technical Value Proposition */}
                  <div className="absolute inset-0 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
                    <p className="font-sans font-medium text-[13.5px] sm:text-[14px] text-[#202B61] leading-[1.55] line-clamp-4 tracking-[-0.01em]">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Linear Icon on Left, Clean Subtle Arrow on Right */}
                <div className="flex items-end justify-between w-full pt-3 mt-auto">
                  <div className="text-[#202B61]/70 group-hover:text-[#202B61] transition-colors duration-200">
                    <Icon className="w-6 h-6 stroke-[1.3]" />
                  </div>
                  <div className="text-[#202B61]/60 group-hover:text-[#202B61] group-hover:translate-x-1 transition-all duration-200">
                    <ArrowRight className="w-4.5 h-4.5 stroke-[1.6]" />
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
