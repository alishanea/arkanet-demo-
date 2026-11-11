"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Layout,
  ShoppingBag,
  Code2,
  Gauge,
  BarChart3,
  ShieldCheck,
  Users2,
  Puzzle,
  Building2,
  Store,
  Layers,
  Network,
} from "lucide-react";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { Footer } from "@/components/layout/Footer";

const CAPABILITIES = [
  {
    number: "01",
    title: "Website & Content Management",
    description: "Build and manage pages, blogs, media, menus and website themes.",
    icon: Layout,
  },
  {
    number: "02",
    title: "E-commerce Management",
    description: "Manage products, variants, inventory, customers, orders, discounts and promotions.",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Visual Builder & Developer Tools",
    description: "Work with visual editing tools or customise themes using code and Liquid-based templates.",
    icon: Code2,
  },
  {
    number: "04",
    title: "SEO & Performance",
    description: "Manage metadata, redirects, sitemaps, image optimisation and website checks.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Analytics & Insights",
    description: "Understand website activity and business performance through analytics tools.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Security & Access Control",
    description: "Support safer website operations through security monitoring, audit logs and access controls.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Memberships & Marketplaces",
    description: "Support restricted content, membership levels, vendor portals and marketplace workflows.",
    icon: Users2,
  },
  {
    number: "08",
    title: "Integrations & Extensions",
    description: "Connect external services and extend platform functionality through integrations and APIs.",
    icon: Puzzle,
  },
];

const TARGET_AUDIENCES = [
  {
    role: "Businesses",
    description: "Manage websites and online operations from one platform.",
    icon: Building2,
  },
  {
    role: "E-commerce brands",
    description: "Organise products, customers, inventory and orders.",
    icon: Store,
  },
  {
    role: "Agencies",
    description: "Build and manage websites for clients.",
    icon: Layers,
  },
  {
    role: "Marketplace operators",
    description: "Manage vendors, commissions and marketplace workflows.",
    icon: Network,
  },
];

const BENEFITS = [
  {
    title: "Connected website and commerce management",
    detail: "Operate your storefront, corporate site, and customer records from a unified operational hub.",
  },
  {
    title: "Flexible visual and code-based customisation",
    detail: "Choose between rapid no-code page assembly or complete Liquid template source editing.",
  },
  {
    title: "Centralised content and product operations",
    detail: "Synchronize inventory, digital assets, collections, and multilingual translations in one place.",
  },
  {
    title: "Built-in SEO and performance tools",
    detail: "Automated schema injection, canonical link routing, redirect management, and edge caching.",
  },
  {
    title: "Security and integration capabilities",
    detail: "Strict role-based permissions, automated backup checkpoints, and modular REST & GraphQL APIs.",
  },
];

export default function ProstackPage() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      {/* Contact brief modal */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
          
          <div className="max-w-3xl space-y-5 text-left">
            {/* Eyebrow: BUILT BY ARKANET */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/70 font-sans">
                BUILT BY ARKANET
              </span>
              <span className="h-3 w-[1px] bg-slate-200" />
              <span className="text-[11px] sm:text-xs font-semibold text-[#202B61]/60 font-sans">
                INTEGRATED DIGITAL PLATFORM
              </span>
            </div>

            {/* Official Prostack Logo Asset */}
            <div className="pt-1 pb-2">
              <Image
                src="/assets/images/prostack-logo.png"
                alt="Prostack Logo"
                width={260}
                height={51}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>

            {/* Heading */}
            <h1 className="hero-h1 text-[#202B61] text-left text-balance">
              One Platform. Everything Your Digital Business Needs.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#202B61]/80 leading-relaxed font-normal max-w-2xl text-pretty">
              Build and manage modern business websites with an integrated platform for content, commerce, performance and security.
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="https://prostack.arkanet.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#202B61] text-white hover:bg-[#151E48] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                <span>Get Started / Explore Prostack</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-[#202B61] font-sans font-semibold text-xs sm:text-sm tracking-tight transition-all cursor-pointer"
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
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/70 font-sans">
                PRODUCT ARCHITECTURE
              </p>
              <h2 className="section-h2 text-balance">
                Everything connected in one platform
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="font-sans text-base sm:text-lg lg:text-xl text-[#202B61]/85 leading-relaxed font-normal text-pretty">
                Prostack combines the essential tools businesses need to create, operate and grow their online presence. Manage website content, products, orders, customers and performance from one connected workspace.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — KEY CAPABILITIES
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none scroll-mt-24" id="capabilities">
        <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
          
          <div className="max-w-2xl space-y-2.5">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/70 font-sans">
              CORE CAPABILITY SUITE
            </p>
            <h2 className="section-h2 text-balance">
              Engineered Capabilities
            </h2>
            <p className="section-desc text-pretty">
              Eight unified operational domains designed to eliminate third-party plugin fragmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.number}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-[#202B61]/40 hover:shadow-[0_10px_30px_rgba(32,43,97,0.06)] hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#202B61]/5 border border-[#202B61]/10 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading font-black text-xs text-[#202B61]/35 tracking-wider">
                        #{cap.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#202B61] leading-snug text-balance">
                      {cap.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#202B61]/75 leading-relaxed text-pretty">
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
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
          
          <div className="max-w-2xl space-y-2.5">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/70 font-sans">
              AUDIENCE &amp; TEAMS
            </p>
            <h2 className="section-h2 text-balance">
              Designed for teams building digital businesses
            </h2>
            <p className="section-desc text-pretty">
              Purpose-built workflows tailored for high-output digital merchants and creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {TARGET_AUDIENCES.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-3.5 hover:border-[#202B61]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#202B61]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61] text-balance">
                    {audience.role}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#202B61]/75 leading-relaxed text-pretty">
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
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/70 font-sans">
                CORE ADVANTAGES
              </p>
              <h2 className="section-h2 text-balance">
                Why Prostack
              </h2>
              <p className="section-desc text-pretty">
                Engineered from the ground up to solve operational friction without bloated plugins or vendor lock-in.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#202B61] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#202B61] text-balance">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#202B61]/75 leading-relaxed text-pretty">
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
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white text-center select-none">
        <div className="max-w-[840px] mx-auto space-y-6">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#202B61]/5 border border-[#202B61]/10 flex items-center justify-center">
            <Image
              src="/assets/images/prostack-icon.png"
              alt="Prostack Icon"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>

          <h2 className="section-h2 text-center text-balance">
            Ready to build with Prostack?
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#202B61]/80 max-w-xl mx-auto leading-relaxed text-pretty">
            Discover a connected platform for creating, managing and growing your digital business.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://prostack.arkanet.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#202B61] text-white hover:bg-[#151E48] font-sans font-bold text-sm tracking-tight shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Prostack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-[#202B61] font-sans font-semibold text-sm tracking-tight transition-all cursor-pointer"
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
