"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Cpu,
  Cloud,
  Layout,
  ShoppingBag,
  Zap,
  MessageSquare,
  Database,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface CapabilityPractice {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  icon: LucideIcon;
}

const PRACTICES: CapabilityPractice[] = [
  {
    slug: "website-development",
    title: "Web & SaaS Engineering",
    category: "Full-Stack Web",
    description: "Next.js applications, headless CMS platforms, and scalable cloud architectures engineered for sub-second speeds and 99.9% uptime.",
    highlight: "React 19 / Next.js 15 / Cloudflare Edge",
    icon: Code2,
  },
  {
    slug: "mobile-app-development",
    title: "Native & Mobile Applications",
    category: "Mobile Apps",
    description: "High-performance iOS & Android applications built with native Swift/Kotlin or Flutter/React Native for seamless cross-platform delivery.",
    highlight: "iOS & Android / Native Performance",
    icon: Smartphone,
  },
  {
    slug: "applied-ai-ml",
    title: "Applied AI & Machine Learning",
    category: "Artificial Intelligence",
    description: "Custom fine-tuned LLMs, predictive intelligence pipelines, and proprietary AI agents deployed securely on private enterprise data lakes.",
    highlight: "Custom Models & Real-Time Inference",
    icon: Cpu,
  },
  {
    slug: "cloud-devops-hosting",
    title: "Cloud & DevOps Infrastructure",
    category: "Infrastructure",
    description: "Multi-region AWS, GCP, and Cloudflare topologies with automated zero-downtime CI/CD deployment pipelines and SOC2-ready security posture.",
    highlight: "Kubernetes / Terraform / Zero-Downtime",
    icon: Cloud,
  },
  {
    slug: "graphic-design",
    title: "UI/UX Product Design & Systems",
    category: "Design",
    description: "Human-centered user research, comprehensive Figma design systems, and rapid clickable interactive prototypes built for maximum conversion.",
    highlight: "Atomic Design Tokens & WCAG 2.1 AA",
    icon: Layout,
  },
  {
    slug: "ecommerce-shopify-development",
    title: "Digital Commerce & Shopify Plus",
    category: "Commerce",
    description: "High-concurrency Shopify Plus flagship storefronts with custom Liquid OS 2.0 sections, bilingual Arabic (RTL), and local GCC payment gateways.",
    highlight: "Shopify Plus / Tabby / Apple Pay",
    icon: ShoppingBag,
  },
  {
    slug: "business-automation",
    title: "Business Process Automation",
    category: "Automation",
    description: "End-to-end event-driven workflows connecting CRMs, ERPs, accounting pipelines, and customer notifications to eliminate manual operations.",
    highlight: "Event-Driven Webhooks & 85% Less Overhead",
    icon: Zap,
  },
  {
    slug: "whatsapp-social-commerce-automation",
    title: "WhatsApp & Social Commerce",
    category: "Omnichannel",
    description: "Official WhatsApp Business API automations, interactive in-chat product carousels, instant checkout links, and automated customer care bots.",
    highlight: "Official Meta API & 98% Open Rate",
    icon: MessageSquare,
  },
  {
    slug: "erp-business-management",
    title: "ERP & Enterprise Integrations",
    category: "Enterprise Systems",
    description: "Bi-directional data pipelines bridging SAP, NetSuite, Zoho, Microsoft Dynamics, and custom operational data lakes with real-time auditability.",
    highlight: "SAP / NetSuite / Custom Middleware",
    icon: Database,
  },
];

export const CapabilitiesGrid: React.FC = () => {
  return (
    <section id="practices" className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none font-sans scroll-mt-20">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2.5 max-w-2xl text-left">
            <h2 className="section-h2">
              Our 9 Core Engineering Disciplines
            </h2>
            <p className="section-desc max-w-2xl">
              From foundational cloud architecture to applied neural models, each practice is led by senior staff engineers who build production systems that scale.
            </p>
          </div>
        </div>

        {/* 3x3 Grid of Symmetrical Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-7 items-stretch w-full pt-2">
          {PRACTICES.map((practice) => {
            const Icon = practice.icon;
            return (
              <Link
                key={practice.slug}
                href={`/capabilities/${practice.slug}`}
                className="group flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 p-6 sm:p-7 lg:p-8 transition-all duration-200 shadow-none hover:shadow-xs cursor-pointer"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#202B61]/60">
                      {practice.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#202B61] tracking-tight leading-snug mb-3 group-hover:text-[#202B61] transition-colors">
                    {practice.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal text-pretty">
                    {practice.description}
                  </p>
                </div>

                {/* Bottom Bar: Highlight Tag + Learn More Arrow */}
                <div className="flex items-center justify-between pt-5 mt-6 border-t border-slate-100">
                  <span className="text-[11.5px] font-semibold text-[#202B61]/80">
                    {practice.highlight}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-slate-200/90 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 shrink-0 ml-2">
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

