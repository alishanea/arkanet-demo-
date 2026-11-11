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
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: LucideIcon;
}

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: "ui-ux",
    index: "01",
    category: "DESIGN & RESEARCH",
    title: "UI/UX Product Design & Prototyping",
    description:
      "Human-centric research, design systems, and clickable prototypes engineered to maximize conversion, accessibility, and intuitive engagement.",
    tags: ["Figma Systems", "UX Research", "Wireframing"],
    href: "/capabilities/graphic-design",
    icon: Layout,
  },
  {
    id: "web-mobile",
    index: "02",
    category: "ENGINEERING",
    title: "High-Performance Web & Mobile Apps",
    description:
      "Ultra-fast Next.js web applications, client portals, and native iOS & Android apps built for enterprise scale, speed, and 99.9% uptime.",
    tags: ["Next.js 15", "React 19", "iOS / Android"],
    href: "/capabilities/website-development",
    icon: Smartphone,
  },
  {
    id: "digital-transformation",
    index: "03",
    category: "TRANSFORMATION",
    title: "Digital Transformation & Consulting",
    description:
      "Helping enterprises and growing brands modernize legacy architectures, automate complex workflows, and establish a resilient digital backbone.",
    tags: ["Workflows", "Cloud Migration", "ERP Systems"],
    href: "/capabilities/business-automation",
    icon: Shield,
  },
  {
    id: "applied-ai",
    index: "04",
    category: "APPLIED AI",
    title: "Applied Machine Learning & AI Systems",
    description:
      "Custom predictive models, fine-tuned LLMs, and real-time inference pipelines trained on private enterprise data to automate decision-making.",
    tags: ["Custom LLMs", "Predictive ML", "PyTorch"],
    href: "/capabilities/applied-ai-ml",
    icon: Cpu,
  },
  {
    id: "big-data",
    index: "05",
    category: "DATA SYSTEMS",
    title: "Big Data Pipelines & Distributed Infra",
    description:
      "High-throughput data engineering pipelines, distributed lakehouses, and real-time telemetry architectures turning raw signals into trusted intelligence.",
    tags: ["Kafka Pipelines", "Snowflake", "Data Lakes"],
    href: "/capabilities/cloud-devops-hosting",
    icon: Network,
  },
  {
    id: "virtual-agents",
    index: "06",
    category: "CONVERSATIONAL",
    title: "Conversational AI & Voicebots",
    description:
      "Omnichannel AI assistants and WhatsApp Business API bots with global multilingual fluency, resolving repetitive support volume by up to 84%.",
    tags: ["WhatsApp API", "Voicebots", "Multi-turn Agents"],
    href: "/capabilities/ai-chatbot-automation",
    icon: Bot,
  },
  {
    id: "cloud-cybersecurity",
    index: "07",
    category: "CLOUD & DEVOPS",
    title: "Cloud DevOps & Cybersecurity",
    description:
      "Multi-region cloud infrastructure, automated CI/CD pipelines, and zero-trust security postures guaranteeing compliance, elasticity, and uptime.",
    tags: ["AWS / GCP", "Docker & K8s", "Zero-Trust"],
    href: "/capabilities/cloud-devops-hosting",
    icon: Cloud,
  },
  {
    id: "ar-vr-metaverse",
    index: "08",
    category: "IMMERSIVE 3D",
    title: "Spatial 3D, AR/VR & Metaverse",
    description:
      "Interactive 3D configurators, spatial WebGL applications, and immersive augmented commerce allowing modern brands to operate at the digital frontier.",
    tags: ["Three.js", "WebGL", "AR Showrooms"],
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
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        {/* ── 1. SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B61]/5 border border-[#202B61]/10 text-[#202B61] text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#202B61] animate-pulse" />
              Capabilities &amp; Specializations
            </div>
            <h2 className="section-h2">
              Full–Stack Engineering &amp; Applied AI Capabilities
            </h2>
            <p className="section-desc max-w-2xl">
              We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-mono font-medium text-[#202B61]/70 bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>8 Core Disciplines · 15+ Years Track Record</span>
          </div>
        </div>

        {/* ── 2. ELEVATED MODERN CAPABILITIES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex flex-col justify-between min-h-[300px] sm:min-h-[320px] p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 shadow-[0_2px_12px_rgba(32,43,97,0.03)] hover:shadow-[0_16px_36px_rgba(32,43,97,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Subtle top accent gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#202B61] via-blue-600 to-[#6c6ce5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Row: Index/Category Pill + Icon Container */}
                <div>
                  <div className="flex items-center justify-between w-full mb-5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-[#202B61]/60 uppercase">
                      <span className="text-[#202B61] font-extrabold">{card.index}</span>
                      <span className="text-slate-300">/</span>
                      <span>{card.category}</span>
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-[#202B61]/5 border border-[#202B61]/10 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:border-[#202B61] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-[17px] sm:text-[18px] text-[#202B61] tracking-tight leading-snug group-hover:text-[#151E48] transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Description: Always clearly visible, eliminating awkward hidden-text jumps */}
                  <p className="font-sans text-[13px] text-[#202B61]/70 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Section: Tags + Action Arrow */}
                <div className="pt-5 mt-4 border-t border-slate-100 space-y-3.5">
                  {/* Micro Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-[#202B61]/75 border border-slate-200/70 group-hover:bg-[#202B61]/5 group-hover:border-[#202B61]/15 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore Link with Circular Arrow */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-semibold text-[#202B61]/80 group-hover:text-[#202B61] transition-colors">
                      Explore capability
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#202B61] group-hover:text-white flex items-center justify-center text-[#202B61] transition-all duration-300 group-hover:translate-x-1 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
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
