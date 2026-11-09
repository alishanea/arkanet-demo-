"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  ShoppingBag,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Star,
  Check,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Globe,
  X,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";

type ApplicationCategory = "All" | "Mobile Apps" | "Shopify Stores" | "Web & SaaS";

interface ApplicationItem {
  id: string;
  name: string;
  category: "Mobile Apps" | "Shopify Stores" | "Web & SaaS";
  badge: string;
  rating: string;
  tagline: string;
  description: string;
  platforms: string;
  iconBg: string;
  iconType: "mobile" | "shopify" | "saas";
  previewImage: string;
  liveUrl?: string;
  highlights: string[];
  client: string;
  year: string;
}

const APPLICATIONS: ApplicationItem[] = [
  {
    id: "careflow-health",
    name: "CareFlow Telehealth",
    category: "Mobile Apps",
    badge: "iOS & Android",
    rating: "4.9 ★",
    tagline: "Encrypted Patient Telehealth & Diagnostic Portal",
    description:
      "A patient-first healthcare application engineered with encrypted WebRTC video encounters, instant diagnostic report delivery, and direct prescription routing.",
    platforms: "iOS 17+ • Android 14+ • iPadOS",
    iconBg: "bg-emerald-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://careflow.demo.arkanet.com",
    highlights: [
      "Sub-second WebRTC video consultations with zero buffering",
      "Biometric patient authentication with HIPAA-compliant data vault",
      "Instant laboratory report push notifications & automated reminders",
    ],
    client: "CareFlow Health Group",
    year: "2026",
  },
  {
    id: "vesper-horology",
    name: "Vesper Luxury Horology",
    category: "Shopify Stores",
    badge: "Shopify Plus",
    rating: "Top Rated",
    tagline: "Headless 3D Watch Configurator & Flagship Storefront",
    description:
      "High-conversion bespoke Shopify Plus storefront featuring a 60fps WebGL 3D watch customizer, sub-second edge page loads, and localized international checkout.",
    platforms: "Shopify Online Store 2.0 • Headless Next.js",
    iconBg: "bg-amber-600",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://vesper.demo.arkanet.com",
    highlights: [
      "Real-time 3D watch strap, bezel, and dial material visualizer",
      "Multi-currency conversion with duty and tax calculation at checkout",
      "High-speed edge caching with 98+ Google Lighthouse performance",
    ],
    client: "Vesper Timepieces Geneva",
    year: "2025",
  },
  {
    id: "kinetics-movement",
    name: "Kinetics Athlete Coach",
    category: "Mobile Apps",
    badge: "iOS & watchOS",
    rating: "4.8 ★",
    tagline: "On-Device Biomechanical Movement & Form Analyzer",
    description:
      "Athletic performance app utilizing on-device Apple Neural Engine pose estimation to provide 30fps joint tracking, repetition count, and instant audio feedback.",
    platforms: "iOS 17+ • Apple Watch • HealthKit",
    iconBg: "bg-blue-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://kinetics.demo.arkanet.com",
    highlights: [
      "Private on-device CoreML computer vision with zero latency",
      "Audible posture warnings and barbell velocity tracking",
      "Seamless bi-directional sync with Apple Health and Google Fit",
    ],
    client: "Kinetics Pro Labs",
    year: "2025",
  },
  {
    id: "stonecraft-surfaces",
    name: "StoneCraft Surfaces",
    category: "Shopify Stores",
    badge: "Shopify Plus",
    rating: "Featured Store",
    tagline: "Architectural Material Sampling & Contractor Storefront",
    description:
      "Modern e-commerce platform for architectural stone and marble suppliers. Includes high-resolution slab inspection, sample request cart, and wholesale trade pricing.",
    platforms: "Shopify Plus • Custom Liquid Architecture",
    iconBg: "bg-slate-700",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://stonecraft.demo.arkanet.com",
    highlights: [
      "2K texture zoom on natural marble, granite, and quartz slabs",
      "Physical architectural sample checkout with real-time courier tracking",
      "Verified contractor wholesale login with tiered quantity discounting",
    ],
    client: "StoneCraft Natural Surfaces",
    year: "2025",
  },
  {
    id: "aura-botanicals",
    name: "Aura Living Botanicals",
    category: "Shopify Stores",
    badge: "Shopify Store",
    rating: "Best Seller",
    tagline: "Clean Beauty & Organic Skincare Direct-to-Consumer Store",
    description:
      "Minimalist Shopify storefront engineered for a clean beauty brand, combining editorial product storytelling, personalized skincare quiz, and recurring subscriptions.",
    platforms: "Shopify Online Store 2.0 • Recharge Subscriptions",
    iconBg: "bg-rose-600",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://aura.demo.arkanet.com",
    highlights: [
      "Dynamic 6-step skin diagnostic quiz recommending custom regimens",
      "1-click recurring subscription discount and automated replenishment",
      "Mobile-first sticky add-to-bag with sliding upsell drawer",
    ],
    client: "Aura Living Organics",
    year: "2025",
  },
  {
    id: "parkease-mobility",
    name: "ParkEase Smart Mobility",
    category: "Mobile Apps",
    badge: "iOS & Android",
    rating: "4.9 ★",
    tagline: "Connected Vehicle Navigation & IoT Parking Allocator",
    description:
      "Smart city mobility application connecting drivers to real-time in-ground IoT sensors across urban parking garages, enabling automated bay reservations and contact-free gate exit.",
    platforms: "iOS 17+ • Android 14+ • Apple CarPlay",
    iconBg: "bg-indigo-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://parkease.demo.arkanet.com",
    highlights: [
      "Sub-second sensor telemetry across 42,000+ monitored parking bays",
      "Turn-by-turn guidance directly into open spots via Apple CarPlay",
      "Automated license plate recognition and frictionless mobile billing",
    ],
    client: "Dubai Smart Mobility Initiative",
    year: "2026",
  },
  {
    id: "neuraldesk-ai",
    name: "NeuralDesk Enterprise",
    category: "Web & SaaS",
    badge: "Web & Cloud",
    rating: "Enterprise",
    tagline: "Private Enterprise Knowledge Retrieval & Workflow Assistant",
    description:
      "Self-hosted enterprise AI intelligence system indexing corporate repositories, legal contracts, and ERP data with role-based access control and strict data privacy.",
    platforms: "Cloud SaaS • Docker VPC • Web & Mobile",
    iconBg: "bg-cyan-700",
    iconType: "saas",
    previewImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://neuraldesk.demo.arkanet.com",
    highlights: [
      "Semantic vector indexing across PDF documents, spreadsheets, and databases",
      "Granular departmental access controls ensuring zero unapproved data leaks",
      "Instant citation verification linking every AI answer to exact source pages",
    ],
    client: "Global Financial Advisory Network",
    year: "2026",
  },
  {
    id: "moda-atelier",
    name: "Moda Atelier Milano",
    category: "Shopify Stores",
    badge: "Shopify Plus",
    rating: "Luxury Edition",
    tagline: "High-Fashion Editorial Runway & International Commerce",
    description:
      "Editorial digital flagship for an Italian luxury fashion house, featuring full-screen runway video integration, virtual styling appointments, and private VIP collection access.",
    platforms: "Shopify Plus • Liquid OS 2.0 • Global Multi-Currency",
    iconBg: "bg-stone-800",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://moda.demo.arkanet.com",
    highlights: [
      "Seamless runway video playback paired with interactive shoppable tags",
      "VIP private client shopping room gated by invitation code",
      "Integrated concierge chat and global white-glove courier tracking",
    ],
    client: "Moda Atelier S.p.A.",
    year: "2025",
  },
];

const CATEGORIES: ApplicationCategory[] = [
  "All",
  "Mobile Apps",
  "Shopify Stores",
  "Web & SaaS",
];

export default function ApplicationPage() {
  const [selectedCategory, setSelectedCategory] = useState<ApplicationCategory>("All");
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);

  const openContact = () => setContactOpen(true);

  const filteredApps =
    selectedCategory === "All"
      ? APPLICATIONS
      : APPLICATIONS.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#f4f6fb] text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      {/* ── HEADER ── */}
      <Header onOpenBooking={openContact} />

      {/* ── CONTACT MODAL ── */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. ARCHITECTURAL HERO (CLEAN, BOLD, NO MICRO-ELEMENTS) ── */}
      <section className="relative w-full pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left">
        <div className="max-w-[1400px] mx-auto space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-[1.15]">
              Applications &amp; Shopify Storefronts
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#202B61]/85 leading-relaxed font-normal">
              Explore our directory of production mobile apps, high-converting Shopify websites, and enterprise platforms built and scaled for international brands.
            </p>
          </div>

          {/* Clean Segmented Filter Bar (No clutter, simple content) */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-[4px] text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#202B61] text-white shadow-xs"
                      : "bg-[#f8fafc] text-[#202B61]/75 hover:text-[#202B61] hover:bg-slate-100 border border-slate-200/90"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 2. APP STORE & SHOPIFY SHOWCASE DIRECTORY (MODERN 2-COLUMN STRUCTURE) ── */}
      <section className="w-full py-14 sm:py-18 lg:py-20 px-4 sm:px-8 lg:px-12 text-left font-sans">
        <div className="max-w-[1400px] mx-auto space-y-8">

          {/* Directory Count Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs sm:text-sm text-[#202B61]/70 font-medium">
            <span>
              Showing <strong className="text-[#202B61]">{filteredApps.length}</strong> verified production releases
            </span>
            <span className="hidden sm:inline-block">
              Engineered by Arkanet Technologies
            </span>
          </div>

          {/* Product Cards Grid: Modern, balanced, generous spacing, NO micro-element clutter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredApps.map((app) => {
              const isShopify = app.category === "Shopify Stores";

              return (
                <div
                  key={app.id}
                  className="rounded-[4px] bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-[#202B61]/35 hover:shadow-[0_8px_30px_rgba(32,43,97,0.06)] transition-all duration-300"
                >
                  <div className="space-y-6">
                    
                    {/* Header: App Store / Play Store App Identity */}
                    <div className="flex items-start justify-between gap-4">
                      
                      {/* Icon + Title + Category */}
                      <div className="flex items-center gap-4">
                        {/* Modern App Store Squircle Icon */}
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${app.iconBg} text-white flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(0,0,0,0.12)]`}
                        >
                          {isShopify ? (
                            <ShoppingBag className="w-7 h-7 stroke-[1.75]" />
                          ) : app.iconType === "mobile" ? (
                            <Smartphone className="w-7 h-7 stroke-[1.75]" />
                          ) : (
                            <Layers className="w-7 h-7 stroke-[1.75]" />
                          )}
                        </div>

                        {/* Title & Platforms */}
                        <div className="space-y-1">
                          <h2 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] leading-tight">
                            {app.name}
                          </h2>
                          <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/70 font-medium">
                            {app.badge} • {app.platforms}
                          </p>
                        </div>
                      </div>

                      {/* App Store Rating / Status */}
                      <div className="shrink-0 text-right">
                        <span className="inline-block text-xs font-bold text-[#202B61] bg-[#202B61]/5 px-2.5 py-1 rounded-[4px]">
                          {app.rating}
                        </span>
                      </div>

                    </div>

                    {/* Screenshot / Interface Preview (High Resolution, Clean Aspect Ratio) */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedApp(app)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedApp(app);
                        }
                      }}
                      className="group relative aspect-[16/9.5] w-full rounded-[4px] overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer"
                    >
                      <Image
                        src={app.previewImage}
                        alt={app.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#202B61]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-[#202B61] text-xs font-bold px-4 py-2 rounded-[4px] shadow-sm">
                          View Details &amp; Highlights
                        </span>
                      </div>
                    </div>

                    {/* Simple, Authoritative Content (No clutter) */}
                    <div className="space-y-3">
                      <p className="font-sans font-medium text-xs sm:text-sm text-[#202B61]/75 leading-none">
                        {app.tagline}
                      </p>
                      <p className="font-sans text-xs sm:text-[13.5px] text-[#202B61]/85 leading-relaxed font-normal">
                        {app.description}
                      </p>
                    </div>

                    {/* 3 Key Highlights (Clean checkmark list) */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {app.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#202B61]/85">
                          <Check className="w-4 h-4 text-[#202B61] shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Action Row (Store CTA buttons) */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedApp(app)}
                      className="text-xs sm:text-sm font-semibold text-[#202B61] hover:text-[#202B61]/75 transition-colors cursor-pointer"
                    >
                      Case Overview
                    </button>

                    <button
                      type="button"
                      onClick={openContact}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm tracking-tight hover:bg-[#202B61]/90 active:scale-98 transition-all cursor-pointer shadow-xs"
                    >
                      <span>{isShopify ? "Visit Shopify Store" : "Open Application"}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. CLEAN APP STORE DETAIL MODAL ── */}
      {selectedApp && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[4px] border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedApp(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-[#202B61] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 pr-8">
              <div
                className={`w-14 h-14 rounded-2xl ${selectedApp.iconBg} text-white flex items-center justify-center shrink-0 shadow-md`}
              >
                {selectedApp.category === "Shopify Stores" ? (
                  <ShoppingBag className="w-7 h-7 stroke-[1.75]" />
                ) : selectedApp.iconType === "mobile" ? (
                  <Smartphone className="w-7 h-7 stroke-[1.75]" />
                ) : (
                  <Layers className="w-7 h-7 stroke-[1.75]" />
                )}
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-xl text-[#202B61] leading-tight">
                  {selectedApp.name}
                </h3>
                <p className="font-sans text-xs text-[#202B61]/70">
                  {selectedApp.client} • Released {selectedApp.year}
                </p>
              </div>
            </div>

            {/* Modal Preview Image */}
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden bg-slate-100 border border-slate-200/80">
              <Image
                src={selectedApp.previewImage}
                alt={selectedApp.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Overview */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#202B61]">
                About This Release
              </h4>
              <p className="font-sans text-sm text-[#202B61]/85 leading-relaxed">
                {selectedApp.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#202B61]">
                Key Deliverables &amp; Architectural Features
              </h4>
              <div className="space-y-2">
                {selectedApp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202B61]/85">
                    <Check className="w-4 h-4 text-[#202B61] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="font-sans text-xs text-[#202B61]/70">
                Supported: {selectedApp.platforms}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedApp(null);
                  openContact();
                }}
                className="px-5 py-2.5 rounded-[4px] bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm hover:bg-[#202B61]/90 transition-all cursor-pointer"
              >
                Request Product Walkthrough &amp; Source
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── 4. CALL TO ACTION ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── 5. FOOTER ── */}
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
