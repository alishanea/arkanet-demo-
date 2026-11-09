"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  ShoppingBag,
  Layers,
  ArrowUpRight,
  Star,
  Check,
  X,
  ExternalLink,
  ShieldCheck,
  Sparkles,
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
  subCategory: string;
  tagline: string;
  rating: number;
  reviewsCount: string;
  platformBadge: string;
  iconBg: string;
  iconType: "mobile" | "shopify" | "saas";
  previewImage: string;
  screenshots: string[];
  liveUrl?: string;
  description: string;
  highlights: string[];
  client: string;
  year: string;
  platforms: string;
}

const APPLICATIONS: ApplicationItem[] = [
  {
    id: "careflow-health",
    name: "CareFlow Telehealth",
    category: "Mobile Apps",
    subCategory: "Medical & Telehealth",
    tagline: "Encrypted patient portal & live video encounters",
    rating: 4.9,
    reviewsCount: "1.2k ratings",
    platformBadge: "iOS & Android",
    iconBg: "bg-emerald-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://careflow.demo.arkanet.com",
    description:
      "A patient-first healthcare application engineered with encrypted WebRTC video encounters, instant diagnostic report delivery, and direct prescription routing.",
    highlights: [
      "Sub-second WebRTC video consultations with zero buffering",
      "Biometric patient authentication with HIPAA-compliant data vault",
      "Instant laboratory report push notifications & automated reminders",
      "Integration with hospital Electronic Health Records (EHR) databases",
    ],
    client: "CareFlow Health Group",
    year: "2026",
    platforms: "iOS 17+ • Android 14+ • iPadOS",
  },
  {
    id: "vesper-horology",
    name: "Vesper Luxury Horology",
    category: "Shopify Stores",
    subCategory: "Luxury Watches & Jewelry",
    tagline: "Headless 3D watch customizer & flagship store",
    rating: 4.9,
    reviewsCount: "860 ratings",
    platformBadge: "Shopify Plus",
    iconBg: "bg-amber-600",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://vesper.demo.arkanet.com",
    description:
      "High-conversion bespoke Shopify Plus storefront featuring a 60fps WebGL 3D watch customizer, sub-second edge page loads, and localized international checkout.",
    highlights: [
      "Real-time 3D watch strap, bezel, and dial material visualizer",
      "Multi-currency conversion with duty and tax calculation at checkout",
      "High-speed edge caching with 98+ Google Lighthouse performance",
      "VIP private client appointment scheduler for flagship boutiques",
    ],
    client: "Vesper Timepieces Geneva",
    year: "2025",
    platforms: "Shopify Online Store 2.0 • Headless Next.js",
  },
  {
    id: "kinetics-movement",
    name: "Kinetics Athlete Coach",
    category: "Mobile Apps",
    subCategory: "Health & Fitness",
    tagline: "On-device AI pose tracking & movement analyzer",
    rating: 4.8,
    reviewsCount: "2.4k ratings",
    platformBadge: "iOS & watchOS",
    iconBg: "bg-blue-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://kinetics.demo.arkanet.com",
    description:
      "Athletic performance app utilizing on-device Apple Neural Engine pose estimation to provide 30fps joint tracking, repetition count, and instant audio feedback.",
    highlights: [
      "Private on-device CoreML computer vision with zero server latency",
      "Audible posture warnings and barbell velocity tracking",
      "Seamless bi-directional sync with Apple Health and Google Fit",
      "Weekly athletic progress telemetry with fatigue prediction",
    ],
    client: "Kinetics Pro Labs",
    year: "2025",
    platforms: "iOS 17+ • Apple Watch • HealthKit",
  },
  {
    id: "stonecraft-surfaces",
    name: "StoneCraft Surfaces",
    category: "Shopify Stores",
    subCategory: "Home & Architecture",
    tagline: "Architectural stone sampling & contractor store",
    rating: 4.9,
    reviewsCount: "430 ratings",
    platformBadge: "Shopify Plus",
    iconBg: "bg-slate-700",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://stonecraft.demo.arkanet.com",
    description:
      "Modern e-commerce platform for architectural stone and marble suppliers. Includes high-resolution slab inspection, sample request cart, and wholesale trade pricing.",
    highlights: [
      "2K texture zoom on natural marble, granite, and quartz slabs",
      "Physical architectural sample checkout with real-time courier tracking",
      "Verified contractor wholesale login with tiered quantity discounting",
      "Direct ERP integration for warehouse slab bundle availability",
    ],
    client: "StoneCraft Natural Surfaces",
    year: "2025",
    platforms: "Shopify Plus • Custom Liquid Architecture",
  },
  {
    id: "aura-botanicals",
    name: "Aura Living Botanicals",
    category: "Shopify Stores",
    subCategory: "Beauty & Wellness",
    tagline: "Clean organic skincare & subscription e-commerce",
    rating: 4.8,
    reviewsCount: "3.1k ratings",
    platformBadge: "Shopify Store",
    iconBg: "bg-rose-600",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://aura.demo.arkanet.com",
    description:
      "Minimalist Shopify storefront engineered for a clean beauty brand, combining editorial product storytelling, personalized skincare quiz, and recurring subscriptions.",
    highlights: [
      "Dynamic 6-step skin diagnostic quiz recommending custom regimens",
      "1-click recurring subscription discount and automated replenishment",
      "Mobile-first sticky add-to-bag with sliding upsell drawer",
      "Localized multicurrency checkout with instant Apple Pay and Shop Pay",
    ],
    client: "Aura Living Organics",
    year: "2025",
    platforms: "Shopify Online Store 2.0 • Recharge Subscriptions",
  },
  {
    id: "parkease-mobility",
    name: "ParkEase Smart Mobility",
    category: "Mobile Apps",
    subCategory: "Navigation & Transit",
    tagline: "Connected vehicle navigation & parking allocator",
    rating: 4.9,
    reviewsCount: "5.8k ratings",
    platformBadge: "iOS & Android",
    iconBg: "bg-indigo-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://parkease.demo.arkanet.com",
    description:
      "Smart city mobility application connecting drivers to real-time in-ground IoT sensors across urban parking garages, enabling automated bay reservations and contact-free gate exit.",
    highlights: [
      "Sub-second sensor telemetry across 42,000+ monitored parking bays",
      "Turn-by-turn guidance directly into open spots via Apple CarPlay",
      "Automated license plate recognition and frictionless mobile billing",
      "Transit traffic prediction model reducing search latency by 38%",
    ],
    client: "Dubai Smart Mobility Initiative",
    year: "2026",
    platforms: "iOS 17+ • Android 14+ • Apple CarPlay",
  },
  {
    id: "neuraldesk-ai",
    name: "NeuralDesk Enterprise",
    category: "Web & SaaS",
    subCategory: "Productivity & AI",
    tagline: "Private knowledge retrieval & workflow assistant",
    rating: 4.9,
    reviewsCount: "640 ratings",
    platformBadge: "Web & Cloud",
    iconBg: "bg-cyan-700",
    iconType: "saas",
    previewImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://neuraldesk.demo.arkanet.com",
    description:
      "Self-hosted enterprise AI intelligence system indexing corporate repositories, legal contracts, and ERP data with role-based access control and strict data privacy.",
    highlights: [
      "Semantic vector indexing across PDF documents, spreadsheets, and databases",
      "Granular departmental access controls ensuring zero unapproved data leaks",
      "Instant citation verification linking every AI answer to exact source pages",
      "Zero telemetry export, fully deployable inside private corporate VPCs",
    ],
    client: "Global Financial Advisory Network",
    year: "2026",
    platforms: "Cloud SaaS • Docker VPC • Web & Mobile",
  },
  {
    id: "moda-atelier",
    name: "Moda Atelier Milano",
    category: "Shopify Stores",
    subCategory: "Luxury Fashion",
    tagline: "Runway video shopping & international boutique",
    rating: 4.8,
    reviewsCount: "1.9k ratings",
    platformBadge: "Shopify Plus",
    iconBg: "bg-stone-800",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://moda.demo.arkanet.com",
    description:
      "Editorial digital flagship for an Italian luxury fashion house, featuring full-screen runway video integration, virtual styling appointments, and private VIP collection access.",
    highlights: [
      "Seamless runway video playback paired with interactive shoppable tags",
      "VIP private client shopping room gated by invitation code",
      "Integrated concierge chat and global white-glove courier tracking",
      "Express global delivery calculation and multi-warehouse fulfillment",
    ],
    client: "Moda Atelier S.p.A.",
    year: "2025",
    platforms: "Shopify Plus • Liquid OS 2.0 • Global Multi-Currency",
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

      {/* ── 1. CLEAN APP STORE STYLE HERO HEADER ── */}
      <section className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left">
        <div className="max-w-[1400px] mx-auto space-y-6">
          
          <div className="max-w-3xl space-y-2.5">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight leading-tight">
              Applications &amp; Shopify Stores
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal">
              Select any app or store below to inspect live customer ratings, verified production builds, and architectural specifications.
            </p>
          </div>

          {/* Clean Segmented Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#202B61] text-white shadow-xs"
                      : "bg-[#f8fafc] text-[#202B61]/70 hover:text-[#202B61] hover:bg-slate-100 border border-slate-200/90"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 2. COMPACT APP STORE / PLAY STORE CARD DIRECTORY ── */}
      <section className="w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 text-left font-sans">
        <div className="max-w-[1400px] mx-auto space-y-6">

          {/* Directory Count Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 text-xs text-[#202B61]/70 font-medium">
            <span>
              Showing <strong className="text-[#202B61]">{filteredApps.length}</strong> releases
            </span>
            <span className="hidden sm:inline-block">
              Click any card to open complete details &amp; previews
            </span>
          </div>

          {/* Compact App Store Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
            {filteredApps.map((app) => {
              const isShopify = app.category === "Shopify Stores";

              return (
                <div
                  key={app.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedApp(app)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedApp(app);
                    }
                  }}
                  className="group relative rounded-[6px] bg-white border border-slate-200/90 p-4 sm:p-4.5 hover:border-[#202B61]/40 hover:shadow-[0_4px_18px_rgba(32,43,97,0.06)] cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]"
                >
                  {/* Left: App Icon + Metadata */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    
                    {/* App Store Squircle Icon */}
                    <div
                      className={`w-12 h-12 sm:w-13 sm:h-13 rounded-xl ${app.iconBg} text-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.12)] group-hover:scale-103 transition-transform`}
                    >
                      {isShopify ? (
                        <ShoppingBag className="w-5.5 h-5.5 stroke-[1.8]" />
                      ) : app.iconType === "mobile" ? (
                        <Smartphone className="w-5.5 h-5.5 stroke-[1.8]" />
                      ) : (
                        <Layers className="w-5.5 h-5.5 stroke-[1.8]" />
                      )}
                    </div>

                    {/* App Info */}
                    <div className="min-w-0 space-y-0.5">
                      <h2 className="font-heading font-bold text-[14.5px] sm:text-[15px] text-[#202B61] leading-tight truncate">
                        {app.name}
                      </h2>
                      
                      <p className="font-sans text-[11.5px] text-[#202B61]/70 truncate">
                        {app.subCategory}
                      </p>

                      {/* App Store Rating & Platform Bar */}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#202B61]/80 pt-0.5">
                        <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                          <Star className="w-3 h-3 fill-amber-400 stroke-amber-500" />
                          <span>{app.rating}</span>
                        </div>
                        <span className="text-slate-300">•</span>
                        <span className="text-[#202B61]/65 truncate">
                          {app.platformBadge}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Right: App Store Style 'VIEW' Action Pill */}
                  <div className="shrink-0 pl-1">
                    <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-slate-100 group-hover:bg-[#202B61] text-[#202B61] group-hover:text-white font-sans font-bold text-xs tracking-tight transition-colors duration-200">
                      VIEW
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. DETAILED APP STORE MODAL SHEET (APPEARS ONLY AFTER SELECTION) ── */}
      {selectedApp && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[8px] border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedApp(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-[#202B61] transition-colors cursor-pointer rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* App Store Header Section */}
            <div className="flex items-start gap-4 pr-8">
              <div
                className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl ${selectedApp.iconBg} text-white flex items-center justify-center shrink-0 shadow-md`}
              >
                {selectedApp.category === "Shopify Stores" ? (
                  <ShoppingBag className="w-8 h-8 stroke-[1.8]" />
                ) : selectedApp.iconType === "mobile" ? (
                  <Smartphone className="w-8 h-8 stroke-[1.8]" />
                ) : (
                  <Layers className="w-8 h-8 stroke-[1.8]" />
                )}
              </div>

              <div className="space-y-1 min-w-0">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61] leading-tight">
                  {selectedApp.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#202B61]/70">
                  {selectedApp.tagline}
                </p>
                <p className="font-sans text-xs text-[#202B61]/60 font-medium">
                  {selectedApp.client} • Released {selectedApp.year}
                </p>
              </div>
            </div>

            {/* App Store Rating & Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-[6px] bg-slate-50 border border-slate-200/70 text-center text-xs">
              <div>
                <span className="block text-[11px] text-[#202B61]/60 uppercase tracking-wider font-semibold">
                  Rating
                </span>
                <span className="font-bold text-[#202B61] text-sm flex items-center justify-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                  {selectedApp.rating}
                </span>
                <span className="block text-[10px] text-[#202B61]/60 mt-0.5">
                  {selectedApp.reviewsCount}
                </span>
              </div>

              <div className="border-x border-slate-200">
                <span className="block text-[11px] text-[#202B61]/60 uppercase tracking-wider font-semibold">
                  Category
                </span>
                <span className="font-bold text-[#202B61] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.category}
                </span>
                <span className="block text-[10px] text-[#202B61]/60 mt-0.5 truncate px-1">
                  {selectedApp.subCategory}
                </span>
              </div>

              <div>
                <span className="block text-[11px] text-[#202B61]/60 uppercase tracking-wider font-semibold">
                  Platform
                </span>
                <span className="font-bold text-[#202B61] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.platformBadge}
                </span>
                <span className="block text-[10px] text-emerald-600 font-semibold mt-0.5">
                  Verified Production
                </span>
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div className="space-y-2">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70 block">
                Interface Preview
              </span>
              <div className="relative aspect-[16/9] w-full rounded-[6px] overflow-hidden bg-slate-100 border border-slate-200/80">
                <Image
                  src={selectedApp.previewImage}
                  alt={selectedApp.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
                About The Application
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#202B61]/85 leading-relaxed">
                {selectedApp.description}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
                Features &amp; Technical Capabilities
              </h4>
              <div className="space-y-1.5">
                {selectedApp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#202B61]/85">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="font-sans text-xs text-[#202B61]/70">
                Compatibility: {selectedApp.platforms}
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedApp(null);
                    openContact();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-[#202B61] text-white font-sans font-bold text-xs hover:bg-[#202B61]/90 transition-all cursor-pointer shadow-xs"
                >
                  <span>Request Full Walkthrough</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── 4. CLOSING CTA ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── 5. FOOTER ── */}
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
