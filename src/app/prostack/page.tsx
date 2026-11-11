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
  details: string[];
  icon: LucideIcon;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    title: "Website & Content Management",
    description:
      "A flexible headless CMS designed for marketing teams to author, schedule, and publish rich editorial pages, blog articles, and landing pages with complete revision history.",
    details: [
      "Visual drag-and-drop page assembly",
      "Multi-author workflows with draft approvals",
      "Nested navigation and multi-language support",
      "Automated image compression and CDN delivery",
    ],
    icon: Layout,
  },
  {
    number: "02",
    title: "E-Commerce & Catalog Control",
    description:
      "High-velocity digital storefront infrastructure managing unlimited SKUs, complex matrix variants, real-time inventory synchronization, and localized multi-currency pricing.",
    details: [
      "SKU variant management (sizes, colors, bundles)",
      "Multi-warehouse stock tracking and alerts",
      "Dynamic promotions, coupon codes, and gift cards",
      "One-page optimized checkout with Stripe & local gateways",
    ],
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Visual Builder & Developer Tools",
    description:
      "Bridging the divide between non-technical creators and senior engineers. Build visually using pre-tested components or take complete code control via Liquid templating.",
    details: [
      "Shopify-compatible Liquid syntax templates",
      "Custom CSS, Tailwind classes, and JavaScript injections",
      "Local developer CLI with hot-reload previews",
      "Git-backed version control for theme releases",
    ],
    icon: Code2,
  },
  {
    number: "04",
    title: "Automated SEO & Edge Performance",
    description:
      "Engineered from the ground up to achieve 95+ Core Web Vitals out of the box. Eliminate SEO plugin conflicts with built-in search engine optimization automation.",
    details: [
      "Dynamic XML sitemaps and robots.txt generation",
      "Automated OpenGraph and Schema.org JSON-LD tags",
      "301 and 302 wildcard redirect management",
      "Sub-second global edge caching via Cloudflare network",
    ],
    icon: Gauge,
  },
  {
    number: "05",
    title: "Analytics & Telemetry Insights",
    description:
      "Real-time business telemetry and customer funnel tracking built directly into the platform without relying on third-party tracking scripts that slow down page loads.",
    details: [
      "Live visitor session and conversion telemetry",
      "Cart abandonment tracking with automated recovery emails",
      "Product revenue, average order value (AOV), and cohort metrics",
      "Privacy-first GDPR & CCPA compliant measurement",
    ],
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Enterprise Security & Governance",
    description:
      "Zero-compromise protection for your customer transactions and business data with enterprise-grade encryption, role-based access control, and automated compliance logging.",
    details: [
      "Granular role-based access control (RBAC)",
      "Mandatory two-factor authentication (2FA)",
      "Immutable audit logs tracking all administrative actions",
      "Automated daily encrypted backups with point-in-time recovery",
    ],
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Memberships & Marketplaces",
    description:
      "Turn your standard store into a recurring revenue engine or a full multi-vendor marketplace with vendor portals, gated content tiers, and automated commission splits.",
    details: [
      "Subscriber-only gated content and digital products",
      "Recurring membership billing and customer portals",
      "Vendor self-service dashboard for product onboarding",
      "Automated payout calculations and commission structures",
    ],
    icon: Users2,
  },
  {
    number: "08",
    title: "Open APIs & ERP Webhooks",
    description:
      "Connect Prostack seamlessly into your existing enterprise software ecosystem. Integrate directly with SAP, Microsoft Dynamics, Salesforce, Zoho, and custom logistics providers.",
    details: [
      "High-throughput REST and GraphQL API endpoints",
      "Real-time event webhooks for order and inventory triggers",
      "Pre-built integrations for major regional payment gateways",
      "Custom microservice extension support",
    ],
    icon: Plug,
  },
];

interface AudienceItem {
  role: string;
  description: string;
  benefits: string;
  icon: LucideIcon;
}

const TARGET_AUDIENCES: AudienceItem[] = [
  {
    role: "Growing DTC & B2B Brands",
    description:
      "Manage marketing websites, wholesale catalogs, direct consumer sales, and daily operations from one unified platform without stitching together ten disparate SaaS tools.",
    benefits: "Faster time to market, lower software overhead, and sub-second page performance.",
    icon: Building2,
  },
  {
    role: "High-Volume E-Commerce Stores",
    description:
      "Organize complex product variant matrices, warehouse inventories, localized currencies, and high-concurrency flash sale traffic without platform crashes.",
    benefits: "High conversion checkout, automated inventory sync, and zero revenue-share penalties.",
    icon: Store,
  },
  {
    role: "Agencies & Design Studios",
    description:
      "Deliver bespoke, high-performance web products for your clients faster using Liquid themes and visual block builders, backed by white-label administrative accounts.",
    benefits: "Faster client turnarounds, reusable component libraries, and full developer code access.",
    icon: Briefcase,
  },
  {
    role: "Multi-Vendor Marketplaces",
    description:
      "Coordinate hundreds of independent merchant catalogs, automated commission distributions, customer disputes, and complex shipping fulfillment under one roof.",
    benefits: "Vendor self-service onboarding, unified customer cart, and automated split payments.",
    icon: Layers,
  },
];

interface BenefitItem {
  title: string;
  detail: string;
}

const BENEFITS: BenefitItem[] = [
  {
    title: "Unified Architecture Eliminates Plugin Chaos",
    detail:
      "Unlike WordPress or Shopify where 20+ conflicting plugins cause security vulnerabilities and slow load times, Prostack provides CMS, e-commerce, SEO, and analytics out of the box in one unified engine.",
  },
  {
    title: "Sub-Second Global Edge Performance",
    detail:
      "Every Prostack website is rendered and cached across a distributed global edge network, guaranteeing sub-second initial page load times and 95+ Core Web Vitals scores worldwide.",
  },
  {
    title: "Developer Freedom via Liquid & Custom Code",
    detail:
      "Marketers get a visual page builder with real-time editing, while engineers retain total freedom to write custom Liquid templates, CSS, and API hooks without framework lock-in.",
  },
  {
    title: "Zero Revenue-Share Penalties",
    detail:
      "Keep 100% of your transaction revenue. Prostack does not charge arbitrary percentage fees on top of your payment gateway rates, allowing your business margins to scale freely.",
  },
  {
    title: "Enterprise Security & Automated Compliance",
    detail:
      "Equipped with granular role-based permissions, automated tamper-proof audit trails, daily encrypted database backups, and SOC2-ready security practices from day one.",
  },
];

export default function ProstackPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#D61F28] selection:text-white overflow-x-hidden font-sans">
      {/* Contact brief modal */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (CLEAN WHITE EDITORIAL CANVAS)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden">
        <div className="relative max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
          
          <div className="max-w-3xl space-y-5 text-left">
            {/* Official Prostack Logo Asset (Navy on White) */}
            <div className="pt-2 pb-1">
              <Image
                src="/assets/images/prostack-logo-navy.png"
                alt="Prostack Logo"
                width={280}
                height={55}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-heading font-extrabold text-[#202B61] tracking-tight leading-[1.12] text-balance">
              One Connected Platform. Everything Your Digital Business Needs.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl text-pretty">
              Build and scale high-performance websites and online storefronts with an integrated platform combining CMS, headless commerce, automated SEO, and security infrastructure.
            </p>

            {/* Clean Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="https://prostack.arkanet.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[4px] bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
              >
                <span>Launch Prostack Live</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[4px] bg-white text-[#202B61] hover:bg-slate-50 border border-slate-200/90 hover:border-[#202B61]/50 font-sans font-bold text-xs sm:text-sm tracking-tight shadow-2xs transition-all cursor-pointer"
              >
                <span>Schedule Platform Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 — PRODUCT ARCHITECTURE SUMMARY
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D61F28] font-sans">
                PRODUCT ARCHITECTURE
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
                Everything connected in one unified operational core
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty">
                Modern online businesses waste thousands of dollars and hundreds of engineering hours gluing together fragmented plugins for page building, cart checkouts, SEO tags, and security audits. Prostack re-engineers this stack from the ground up, delivering all essential commerce and publishing domains inside a single, high-speed workspace.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — ALL 8 CORE ENGINEERED CAPABILITIES (EXPLAINED IN FULL)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none scroll-mt-24" id="capabilities">
        <div className="max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D61F28] font-sans">
              CORE CAPABILITY SUITE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              The Eight Engineered Domains of Prostack
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
              Every critical function required to build, operate, and scale digital web commerce without third-party plugin friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.number}
                  className="rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group shadow-2xs hover:shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Top Header: Frameless Icon & Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5 stroke-[1.6]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {cap.number}
                      </span>
                    </div>

                    {/* Capability Title */}
                    <h3 className="font-heading font-bold text-lg text-[#202B61] leading-snug text-balance pt-1">
                      {cap.title}
                    </h3>

                    {/* Description Narrative */}
                    <p className="font-sans text-xs sm:text-[13.5px] text-slate-600 leading-relaxed text-pretty">
                      {cap.description}
                    </p>

                    {/* Key Technical Features Checklist */}
                    <ul className="pt-3 border-t border-slate-100 space-y-2">
                      {cap.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 font-sans text-xs text-slate-600 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D61F28] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — AUDIENCE & USE CASES
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
          
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D61F28] font-sans">
              AUDIENCE &amp; TEAMS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              Who Prostack is Built For
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
              Engineered for organizations that have outgrown rigid templates and need enterprise-grade scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {TARGET_AUDIENCES.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61]/50 p-6 sm:p-7 space-y-4 transition-all duration-200 shadow-2xs group"
                >
                  <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61] text-balance">
                    {audience.role}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty">
                    {audience.description}
                  </p>
                  <div className="pt-3 border-t border-slate-100">
                    <p className="font-sans text-xs font-semibold text-[#202B61]">
                      Advantage: <span className="font-normal text-slate-600">{audience.benefits}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 — WHY PROSTACK (ARCHITECTURAL ADVANTAGES)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D61F28] font-sans">
                CORE ADVANTAGES
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
                Why Enterprises Choose Prostack
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
                Engineered from the ground up to solve operational friction without bloated plugins, performance regressions, or arbitrary revenue cuts.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-[4px] bg-white border border-slate-200/90 shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D61F28] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#202B61] text-balance">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty">
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
          SECTION 6 — FINAL CTA (CLEAN WHITE)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-white text-center select-none overflow-hidden">
        <div className="relative max-w-[840px] mx-auto space-y-6">
          <div className="w-12 h-12 mx-auto rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-2xs">
            <Image
              src="/assets/images/prostack-icon.png"
              alt="Prostack Icon"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#202B61] text-center tracking-tight leading-snug text-balance">
            Ready to scale your digital business with Prostack?
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed text-pretty">
            Experience an integrated platform engineered for creating, managing, and accelerating your online commerce.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://prostack.arkanet.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[4px] bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-sm tracking-tight shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Prostack Live</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={openContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[4px] bg-white text-[#202B61] hover:bg-slate-50 border border-slate-200/90 hover:border-[#202B61]/50 font-sans font-bold text-sm tracking-tight shadow-2xs transition-all cursor-pointer"
            >
              <span>Talk to Our Engineering Team</span>
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
