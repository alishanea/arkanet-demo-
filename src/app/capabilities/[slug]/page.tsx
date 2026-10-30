"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { CAPABILITIES_DATA } from "@/lib/capabilitiesData";

const PRACTICE_METRICS: Record<string, Array<{ stat: string; label: string; desc: string }>> = {
  "graphic-design": [
    {
      stat: "100%",
      label: "WCAG 2.1 AA Accessibility",
      desc: "Every component, color token, and contrast ratio tested and compliant for universal accessibility.",
    },
    {
      stat: "3x",
      label: "Faster Engineering Velocity",
      desc: "Modular design tokens and atomic Figma components mapped 1:1 to production code for instant handoffs.",
    },
    {
      stat: "+185%",
      label: "Usability Score Lift",
      desc: "Validated user flows and rapid interactive prototypes that eliminate user hesitation before coding.",
    },
  ],
  "digital-marketing": [
    {
      stat: "4.2x",
      label: "Average Client ROAS",
      desc: "High-intent paid search, targeted social acquisition, and audience segmentation that maximize budget efficiency.",
    },
    {
      stat: "-38%",
      label: "Customer Acquisition Cost",
      desc: "Data-driven creative iterations, landing page split-testing, and automated audience bid optimization.",
    },
    {
      stat: "99.4%",
      label: "Attribution Accuracy",
      desc: "Server-side GA4 and Meta Conversions API implementations ensuring clean, reliable event tracking.",
    },
  ],
  "business-automation": [
    {
      stat: "85%",
      label: "Manual Effort Eliminated",
      desc: "End-to-end event-driven workflows connecting CRMs, invoicing, notifications, and operational databases.",
    },
    {
      stat: "0.01%",
      label: "Error Rate Tolerance",
      desc: "Rigid schema validation, automated exception handling, and self-healing retry queues for mission-critical jobs.",
    },
    {
      stat: "10x",
      label: "Data Processing Speed",
      desc: "Instant asynchronous webhook execution eliminating delays and human bottlenecks in daily operations.",
    },
  ],
  "whatsapp-social-commerce-automation": [
    {
      stat: "98%",
      label: "WhatsApp Message Open Rate",
      desc: "Unmatched mobile open rates with verified official WhatsApp Business API broadcasts and customer notifications.",
    },
    {
      stat: "+64%",
      label: "Direct In-Chat Conversions",
      desc: "Interactive product catalogues, automatic order placement, and frictionless checkout payment links right in chat.",
    },
    {
      stat: "< 15s",
      label: "Average Response Time",
      desc: "24/7 automated routing, instant catalogue search, and seamless human agent handover when needed.",
    },
  ],
  "erp-business-management": [
    {
      stat: "99.9%",
      label: "Inventory & Ledger Accuracy",
      desc: "Real-time synchronization across warehouses, purchasing, sales channels, and financial ledgers.",
    },
    {
      stat: "70%",
      label: "Faster Month-End Closing",
      desc: "Automated journal entries, multi-currency reconciliations, and instant executive financial statements.",
    },
    {
      stat: "100%",
      label: "Audit & Compliance Readiness",
      desc: "Tamper-proof event audit logging, strict role-based access control (RBAC), and tax compliance reporting.",
    },
  ],
};

const DEFAULT_METRICS = [
  {
    stat: "< 0.8s",
    label: "Average First Contentful Paint",
    desc: "Global Edge network deployment ensures sub-second page delivery and instant responsiveness for visitors worldwide.",
  },
  {
    stat: "+140%",
    label: "Inbound Conversion Rate Lift",
    desc: "User-tested conversion funnels, friction-free forms, and strategic value triggers engineered into every page layout.",
  },
  {
    stat: "100 / 100",
    label: "SEO & Technical Best Practices",
    desc: "Clean semantic HTML5, automated JSON-LD schemas, open graph assets, and XML sitemaps built right from day one.",
  },
];

const PRACTICE_TECH: Record<string, string[]> = {
  "graphic-design": [
    "Figma",
    "Design Tokens",
    "Adobe CC",
    "Principle",
    "Tailwind CSS",
    "Storybook",
    "WCAG 2.1 AA",
    "Design Systems",
  ],
  "digital-marketing": [
    "Google Ads",
    "Meta Ads Manager",
    "Google Analytics 4",
    "Conversions API",
    "Semrush",
    "Looker Studio",
    "HubSpot",
    "Klaviyo",
  ],
  "business-automation": [
    "Python",
    "Node.js",
    "REST & GraphQL",
    "Webhooks",
    "Redis / Celery",
    "PostgreSQL",
    "Make / Zapier",
    "Docker",
  ],
  "whatsapp-social-commerce-automation": [
    "WhatsApp Business API",
    "Meta Cloud API",
    "Webhooks",
    "Stripe / Telr",
    "Node.js Microservices",
    "Redis Cache",
    "CRM Sync",
    "Tamara / Tabby",
  ],
  "erp-business-management": [
    "PostgreSQL",
    "Odoo ERP",
    "SAP Integration",
    "REST APIs",
    "Role-Based Access (RBAC)",
    "Docker",
    "Power BI",
    "Automated Backups",
  ],
};

const DEFAULT_TECH = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Vercel Edge",
  "Sanity CMS",
  "Shopify Storefront",
  "Supabase",
];

export default function CapabilityDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "website-development";
  const [contactOpen, setContactOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const openContact = () => setContactOpen(true);

  // Fallback to website-development if slug not found
  const data = CAPABILITIES_DATA[slug] || CAPABILITIES_DATA["website-development"];

  // Unique showcase images for this capability (used in hero background slideshow & sections)
  const showcaseImages = [
    data.heroImages.center,
    data.heroImages.left,
    data.heroImages.right,
    ...(data.featureRows || []).map((r) => r.image),
    data.techShowcase?.image,
  ].filter(Boolean) as string[];

  // Auto-advance background image one by one every 3 seconds
  useEffect(() => {
    if (showcaseImages.length === 0) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showcaseImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [showcaseImages.length]);

  // Reset to first image when slug changes
  useEffect(() => {
    setActiveIdx(0);
  }, [slug]);

  const metrics = PRACTICE_METRICS[slug] || DEFAULT_METRICS;
  const techChips = PRACTICE_TECH[slug] || DEFAULT_TECH;

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── SECTION 1: HERO SECTION WITH AUTOMATIC BACKGROUND IMAGE SLIDESHOW ── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#f4f6fb] text-[#202B61] pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80 text-left">
        {/* Background Images Changing Smoothly One by One (Every 3 seconds) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.22, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {showcaseImages[activeIdx] && (
                <img
                  src={showcaseImages[activeIdx]}
                  alt="Background showcase"
                  className="w-full h-full object-cover brightness-105 saturate-110"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Soft Scrims & Ambient Overlay for Flawless Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6fb] via-[#f4f6fb]/75 to-[#f4f6fb]/95 pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f6fb] via-[#f4f6fb]/80 to-transparent pointer-events-none z-[1]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#202B61]/10 via-[#202B61]/5 to-transparent blur-3xl pointer-events-none z-[1]" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full space-y-8">
          <div className="space-y-5 w-full max-w-5xl lg:max-w-6xl">
            <h1 className="hero-h1 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.08]">
              {data.title} <br />
              <span className="text-[#202B61]">{data.highlightText}</span>
            </h1>

            {data.subtitle && (
              <p className="hero-sub font-sans text-base sm:text-lg md:text-xl text-[#202B61]/80 font-normal leading-relaxed max-w-4xl">
                {data.subtitle}
              </p>
            )}
          </div>

          {/* Quick Capability Practice Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
            {[
              { name: "Web & SaaS", slug: "website-development" },
              { name: "Mobile Apps", slug: "mobile-app-development" },
              { name: "Applied AI", slug: "applied-ai-ml" },
              { name: "Cloud & DevOps", slug: "cloud-devops-hosting" },
              { name: "UI/UX Design", slug: "graphic-design" },
              { name: "Marketing", slug: "digital-marketing" },
              { name: "Automation", slug: "business-automation" },
              { name: "WhatsApp", slug: "whatsapp-social-commerce-automation" },
              { name: "ERP Systems", slug: "erp-business-management" },
            ].map((cap) => {
              const isActive = slug === cap.slug;
              return (
                <Link
                  key={cap.slug}
                  href={`/capabilities/${cap.slug}`}
                  className={`px-3 py-1.5 rounded-[4px] shadow-none text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-[#202B61] text-white border border-[#202B61]"
                      : "bg-white text-[#202B61]/75 hover:text-[#202B61] border border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {cap.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: OPEN HIGHLIGHTS GRID ── */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-left bg-[#f4f6fb] border-t border-slate-200/80 font-sans">
        <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8">
            <div className="max-w-3xl space-y-3">
              <h2 className="section-h2 whitespace-pre-line">
                {data.section2Headline}
              </h2>
              <p className="section-desc max-w-2xl">
                {data.section2Subtitle}
              </p>
            </div>
          </div>

          {/* 4-Column Simple Clean Grid (No Hover Effects, No Numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {data.highlights.map((item, idx) => {
              const IconComp = (LucideIcons as Record<string, any>)[item.icon] || LucideIcons.Award;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[4px] bg-white border border-slate-200/90 shadow-none flex flex-col text-left space-y-4"
                >
                  {/* Icon */}
                  <div className="w-8 h-8 rounded-[4px] bg-[#202B61]/5 flex items-center justify-center text-[#202B61] shrink-0">
                    <IconComp className="w-4 h-4 stroke-[1.8]" />
                  </div>

                  {/* Title & Description Stack */}
                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-base sm:text-[17px] text-[#202B61] leading-snug tracking-tight">
                      {item.title}
                    </h4>
                    <p className="font-sans text-sm text-[#202B61]/80 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURE ROWS WITH ALTERNATING POSITIONS & HOVER EFFECTS ── */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-t border-slate-200/80 text-left bg-white font-sans">
        <div className="max-w-[1400px] mx-auto space-y-24 sm:space-y-32">
          {data.featureRows.map((row, idx) => {
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  row.imagePosition === "right" ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text Side */}
                <div className="space-y-5">
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#202B61] tracking-tight leading-snug">
                    {row.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#202B61]/80 font-normal leading-relaxed">
                    {row.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={openContact}
                      className="group inline-flex items-center gap-2 text-xs font-bold text-[#202B61] hover:text-[#202B61]/70 uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Consult on This Architecture</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Image Side with Box Radius < 5 and Shadow-None */}
                <div className="group relative aspect-[16/10] rounded-[4px] overflow-hidden border border-slate-200/90 shadow-none bg-slate-100 transition-all duration-500">
                  <img
                    src={row.image}
                    alt={row.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202B61]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-sans font-medium">
                      Engineered for high availability & speed
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 4: 3-COLUMN PRACTICE-AWARE METRICS IMPACT STRIP ── */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f8fafc] border-y border-slate-200/80 text-left font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-6 sm:p-7 rounded-[4px] bg-white border border-slate-200/90 shadow-none space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B61]">
                    {metric.stat}
                  </div>
                  <div className="font-sans font-semibold text-sm text-[#202B61] mt-1">
                    {metric.label}
                  </div>
                </div>
                <p className="font-sans text-sm text-[#202B61]/80 leading-relaxed font-normal">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TECH SHOWCASE CARD WITH PRACTICE-SPECIFIC CHIPS ── */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-left bg-white border-t border-slate-200/80 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="p-8 sm:p-12 lg:p-16 bg-[#f8fafc] text-[#202B61] rounded-[4px] border border-slate-200/90 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-6">
                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#202B61] tracking-tight leading-tight">
                  {data.techShowcase?.title || "Enterprise Architecture & Production Tooling"}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#202B61]/80 font-normal leading-relaxed max-w-xl">
                  {data.techShowcase?.description || data.subtitle}
                </p>

                {/* Tech Chips with Hover Reaction & Radius < 5 */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {techChips.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-[4px] shadow-none bg-white border border-slate-200 hover:border-slate-300 text-[#202B61]/80 hover:text-[#202B61] text-xs font-medium font-sans transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={openContact}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-[#202B61] text-white hover:bg-[#161e47] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-none font-sans"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Right Image with Hover Effect & Radius < 5 */}
              <div className="group relative aspect-[4/3] rounded-[4px] overflow-hidden border border-slate-200 bg-slate-100 shadow-none">
                <img
                  src={data.techShowcase?.image || data.heroImages.center}
                  alt={data.techShowcase?.title || "Tech Architecture"}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CLOSING CTA SECTION ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── SECTION 7: FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
