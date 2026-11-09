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
    title: "UI/UX Design, Wireframing & Product Strategy",
    description:
      "User-centric research, wireframing, high-fidelity design systems, and rapid interactive prototyping that align product functionality with business conversion.",
    href: "/capabilities/graphic-design",
    icon: Layout,
  },
  {
    id: "web-mobile",
    title: "High-Performance Web & Mobile App Development",
    description:
      "High-performance Next.js web applications, client portals, and native iOS/Android apps engineered for real-world traffic, speed, and 99.9% uptime.",
    href: "/capabilities/website-development",
    icon: Smartphone,
  },
  {
    id: "digital-transformation",
    title: "Enterprise Digital Transformation Consulting",
    description:
      "Helping enterprises and growing brands reshape their operational workflows, modernize legacy systems, and implement a future-proof digital backbone.",
    href: "/capabilities/business-automation",
    icon: Shield,
  },
  {
    id: "applied-ai",
    title: "Applied Machine Learning & Enterprise AI Systems",
    description:
      "Harness predictive analytics and automated intelligence. Developing custom models trained on your data to optimize operational efficiency.",
    href: "/capabilities/applied-ai-ml",
    icon: Cpu,
  },
  {
    id: "big-data",
    title: "Big Data Pipelines & Distributed Infrastructure",
    description:
      "High-throughput data engineering pipelines, distributed storage, and real-time telemetry architectures turning scattered data into trusted business intelligence.",
    href: "/capabilities/cloud-devops-hosting",
    icon: Network,
  },
  {
    id: "virtual-agents",
    title: "Conversational AI, Voicebots & Virtual Agents",
    description:
      "Conversational AI assistants and WhatsApp Business API bots built on modern LLMs to automate customer queries and reduce support volume by up to 84%.",
    href: "/capabilities/ai-chatbot-automation",
    icon: Bot,
  },
  {
    id: "cloud-cybersecurity",
    title: "Cloud Architecture, DevOps & Cybersecurity",
    description:
      "Secure, resilient cloud architectures with automated CI/CD deployment pipelines, continuous monitoring, and robust enterprise cybersecurity protocols.",
    href: "/capabilities/cloud-devops-hosting",
    icon: Cloud,
  },
  {
    id: "ar-vr-metaverse",
    title: "Spatial 3D, AR/VR & Metaverse Solutions",
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
      className="relative w-full bg-white px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden font-sans scroll-mt-24"
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

        {/* ── 2. 8-CARD TIGHT ARCHITECTURAL GRID (LARGER SHAPE, PROMINENT CENTERED HEADING, CONTENT ON HOVER) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5 w-full">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col justify-between h-[175px] sm:h-[185px] lg:h-[195px] p-5 sm:p-6 lg:p-6.5 rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61]/40 shadow-none hover:shadow-[0_6px_24px_rgba(32,43,97,0.06)] cursor-pointer overflow-hidden transition-all duration-300"
              >
                {/* Content Area: Vertically and horizontally centered in the mid */}
                <div className="relative w-full flex-1 flex flex-col justify-center my-auto">
                  {/* Default State: Refined Heading, cleanly centered in the mid */}
                  <div className="transition-all duration-200 ease-out group-hover:opacity-0 group-hover:-translate-y-1 group-focus-visible:opacity-0 flex flex-col justify-center items-center text-center">
                    <h3 className="font-heading font-bold text-[15.5px] sm:text-[16.5px] lg:text-[17px] xl:text-[17.5px] text-[#202B61] tracking-tight leading-[1.3] text-balance">
                      {card.title}
                    </h3>
                  </div>

                  {/* Hover State: Content becomes visible after hover, cleanly centered in the mid */}
                  <div className="absolute inset-0 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto flex flex-col justify-center items-center text-center">
                    <p className="font-sans font-medium text-[12.5px] sm:text-[13px] lg:text-[13.5px] text-[#202B61] leading-[1.52] line-clamp-4 tracking-[-0.01em] text-pretty">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Linear Icon on Left, Clean Subtle Arrow on Right */}
                <div className="flex items-center justify-between w-full pt-2 mt-auto">
                  <div className="text-[#202B61]/70 group-hover:text-[#202B61] transition-colors duration-200">
                    <Icon className="w-5.5 h-5.5 stroke-[1.35]" />
                  </div>
                  <div className="text-[#202B61]/50 group-hover:text-[#202B61] group-hover:translate-x-1.5 transition-all duration-200">
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
