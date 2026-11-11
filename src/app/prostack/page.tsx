"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Layout,
  ShoppingBag,
  Code2,
  Gauge,
  BarChart3,
  ShieldCheck,
  Users2,
  Plug,
  CheckCircle2,
  Building2,
  Store,
  Briefcase,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    title: "Website & Content Management",
    description: "Build and manage pages, blogs, media, menus and website themes with drag-and-drop ease and full revision control.",
    icon: Layout,
  },
  {
    number: "02",
    title: "E-commerce Management",
    description: "Manage products, variants, inventory, customers, orders, discounts and promotions with real-time stock sync.",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Visual Builder & Developer Tools",
    description: "Work with visual editing tools or customize themes using clean code and Liquid-based production templates.",
    icon: Code2,
  },
  {
    number: "04",
    title: "SEO & Performance Tools",
    description: "Manage metadata, canonical redirects, automated XML sitemaps, image optimization and sub-second edge speed checks.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Analytics & Insights",
    description: "Understand customer journeys, visitor traffic, cart abandonments and revenue performance through live analytics dashboards.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Security & Access Control",
    description: "Support safer operations through continuous security monitoring, automated audit logs, 2FA, and granular role permissions.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Memberships & Marketplaces",
    description: "Support gated subscriber content, tiered membership levels, vendor self-service portals and multi-vendor commissions.",
    icon: Users2,
  },
  {
    number: "08",
    title: "Integrations & Extensions",
    description: "Connect external payment gateways, CRM backends, logistics providers and extend platform functionality via REST & GraphQL APIs.",
    icon: Plug,
  },
];

interface AudienceItem {
  role: string;
  description: string;
  icon: LucideIcon;
}

const TARGET_AUDIENCES: AudienceItem[] = [
  {
    role: "Growing Businesses",
    description: "Manage brand websites, corporate messaging, customer portals and daily online operations from a single unified workspace.",
    icon: Building2,
  },
  {
    role: "E-commerce Brands",
    description: "Organize SKU catalogs, customer segments, warehouse inventory, multi-currency pricing and high-volume order flows.",
    icon: Store,
  },
  {
    role: "Agencies & Studios",
    description: "Build and deploy production-grade websites for client portfolios with white-label client management and role controls.",
    icon: Briefcase,
  },
  {
    role: "Marketplace Operators",
    description: "Coordinate vendor onboardings, product approvals, automated commission splits and complex marketplace fulfillment.",
    icon: Layers,
  },
];

interface BenefitItem {
  title: string;
  detail: string;
}

const BENEFITS: BenefitItem[] = [
  {
    title: "Connected website and commerce management",
    detail: "Eliminate disparate tools. Content, store catalog, order pipelines, and marketing tools live in one cohesive hub.",
  },
  {
    title: "Flexible visual and code-based customisation",
    detail: "Marketers enjoy rapid visual block layout editors, while developers retain direct code control via Liquid templating.",
  },
  {
    title: "Centralised content and product operations",
    detail: "Maintain single-source-of-truth accuracy for multi-channel inventories, pricing rules, media libraries, and blog releases.",
  },
  {
    title: "Built-in SEO and performance tools",
    detail: "Automated schema injection, canonical link routing, redirect management, and edge caching for sub-second delivery.",
  },
  {
    title: "Security and integration capabilities",
    detail: "Strict role-based permissions, automated backup checkpoints, and modular REST & GraphQL APIs for enterprise scale.",
  },
];

export default function ProstackPage() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-[#0A0E24] text-white selection:bg-[#D61F28] selection:text-white overflow-x-hidden font-sans">
      {/* Contact brief modal */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (LUXURIOUS DARK CANVAS)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#0A0E24] via-[#0E1538] to-[#0A0E24] border-b border-slate-800/80 text-left select-none overflow-hidden">
        {/* Ambient atmospheric luxury glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-br from-[#202B61]/40 via-[#D61F28]/15 to-transparent blur-[140px] pointer-events-none" />

        <div className="relative max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
          
          <div className="max-w-3xl space-y-6 text-left">
            {/* Eyebrow: BUILT BY ARKANET */}
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 font-sans">
              BUILT BY ARKANET • INTEGRATED DIGITAL PLATFORM
            </p>

            {/* Official Prostack Logo Asset (Luminous against Dark Background) */}
            <div className="pt-2 pb-2">
              <Image
                src="/assets/images/prostack-logo.png"
                alt="Prostack Logo"
                width={280}
                height={55}
                className="h-11 sm:h-13 w-auto object-contain drop-shadow-md"
                priority
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-heading font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              One Platform. Everything Your Digital Business Needs.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl text-pretty">
              Build and manage modern business websites with an integrated platform for content, commerce, performance and security.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://prostack.arkanet.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                <span>Get Started / Explore Prostack</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans font-semibold text-xs sm:text-sm tracking-tight backdrop-blur-sm transition-all cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 — PRODUCT OVERVIEW
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-18 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#0B102B] border-b border-slate-800/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 font-sans">
                PRODUCT ARCHITECTURE
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug text-balance">
                Everything connected in one platform
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal text-pretty">
                Prostack combines the essential tools businesses need to create, operate and grow their online presence. Manage website content, products, orders, customers and performance from one connected workspace.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — KEY CAPABILITIES
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0A0E24] border-b border-slate-800/80 text-left select-none scroll-mt-24" id="capabilities">
        <div className="max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 font-sans">
              CORE CAPABILITY SUITE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug text-balance">
              Engineered Capabilities
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed text-pretty">
              Eight unified operational domains designed to eliminate third-party plugin fragmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.number}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#D61F28] group-hover:border-[#D61F28] transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white leading-snug text-balance">
                      {cap.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed text-pretty">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — WHO IT IS FOR
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0B102B] border-b border-slate-800/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 font-sans">
              AUDIENCE &amp; TEAMS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug text-balance">
              Designed for teams building digital businesses
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed text-pretty">
              Purpose-built workflows tailored for high-output digital merchants and creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TARGET_AUDIENCES.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] p-6 sm:p-7 space-y-4 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white text-balance">
                    {audience.role}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed text-pretty">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 — WHY PROSTACK
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0A0E24] border-b border-slate-800/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 font-sans">
                CORE ADVANTAGES
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug text-balance">
                Why Prostack
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed text-pretty">
                Engineered from the ground up to solve operational friction without bloated plugins or vendor lock-in.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D61F28] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white text-balance">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed text-pretty">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 — FINAL CTA
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#0B102B] to-[#0A0E24] text-center select-none overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-br from-[#202B61]/40 via-[#D61F28]/20 to-transparent blur-[120px] pointer-events-none" />

        <div className="relative max-w-[840px] mx-auto space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg">
            <Image
              src="/assets/images/prostack-icon.png"
              alt="Prostack Icon"
              width={32}
              height={32}
              className="w-8 h-8 rounded-xs object-contain"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-white text-center tracking-tight leading-snug text-balance">
            Ready to build with Prostack?
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed text-pretty">
            Discover a connected platform for creating, managing and growing your digital business.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://prostack.arkanet.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-sm tracking-tight shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Prostack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans font-semibold text-sm tracking-tight backdrop-blur-sm transition-all cursor-pointer"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Canonical Unified Footer */}
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
