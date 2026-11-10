"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Smartphone,
  ShoppingBag,
  Layers,
  ArrowUpRight,
  Download,
  ExternalLink,
  Star,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  Globe,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { HomeReviewsSection } from "@/components/home/HomeReviewsSection";

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
  themeColor: string; // Tailwind background gradient for icon & accents
  badgeBg: string;
  badgeText: string;
  iconType: "mobile" | "shopify" | "saas";
  previewImage: string;
  screenshots: string[];
  liveUrl?: string;
  description: string;
  metrics: {
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    stat3: { label: string; value: string };
  };
  highlights: string[];
  techStack: string[];
  client: string;
  year: string;
  platforms: string;
  downloads: {
    primaryLabel: string;
    primaryType: "apple" | "shopify" | "cloud";
    secondaryLabel?: string;
    secondaryType?: "android" | "web" | "docs";
  };
}

const APPLICATIONS: ApplicationItem[] = [
  {
    id: "vesper-horology",
    name: "Vesper Luxury Horology",
    category: "Shopify Stores",
    subCategory: "Luxury Watches & Jewelry",
    tagline: "60fps WebGL 3D watch customizer with sub-second edge checkout delivery.",
    rating: 4.9,
    reviewsCount: "860 reviews",
    platformBadge: "Shopify Plus",
    themeColor: "from-amber-500 to-yellow-600",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://vesper.demo.arkanet.com",
    description:
      "High-conversion bespoke Shopify Plus storefront featuring a 60fps WebGL 3D watch customizer, sub-second edge page loads, and localized international checkout.",
    metrics: {
      stat1: { label: "Conversion Lift", value: "+34%" },
      stat2: { label: "Edge Page Load", value: "480ms" },
      stat3: { label: "Avg. Cart Value", value: "3.2x" },
    },
    highlights: [
      "Real-time 3D watch strap, bezel, and dial material visualizer",
      "Multi-currency conversion with duty and tax calculation at checkout",
      "High-speed edge caching with 98+ Google Lighthouse performance",
      "VIP private client appointment scheduler for flagship boutiques",
    ],
    techStack: ["Shopify Plus", "Next.js 15", "Three.js / WebGL", "Tailwind CSS"],
    client: "Vesper Timepieces Geneva",
    year: "2025",
    platforms: "Shopify Online Store 2.0 • Headless Next.js",
    downloads: {
      primaryLabel: "Visit Live Shopify Store",
      primaryType: "shopify",
      secondaryLabel: "Explore 3D Configurator",
      secondaryType: "web",
    },
  },
  {
    id: "careflow-health",
    name: "CareFlow Telehealth",
    category: "Mobile Apps",
    subCategory: "Medical & Telehealth",
    tagline: "Encrypted patient portal with live WebRTC video visits and diagnostic report routing.",
    rating: 4.9,
    reviewsCount: "1.2k reviews",
    platformBadge: "iOS & Android",
    themeColor: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://careflow.demo.arkanet.com",
    description:
      "A patient-first healthcare mobile application engineered with encrypted WebRTC video encounters, instant diagnostic report delivery, and direct prescription routing.",
    metrics: {
      stat1: { label: "Queue Efficiency", value: "+42%" },
      stat2: { label: "Encounter Video Latency", value: "<250ms" },
      stat3: { label: "HIPAA Compliant", value: "100%" },
    },
    highlights: [
      "Sub-second WebRTC video consultations with zero buffering",
      "Biometric patient authentication with HIPAA-compliant data vault",
      "Instant laboratory report push notifications & automated reminders",
      "Integration with hospital Electronic Health Records (EHR) databases",
    ],
    techStack: ["React Native", "TypeScript", "WebRTC", "HIPAA Vault", "GraphQL"],
    client: "CareFlow Health Group",
    year: "2026",
    platforms: "iOS 17+ • Android 14+ • iPadOS",
    downloads: {
      primaryLabel: "Download on App Store",
      primaryType: "apple",
      secondaryLabel: "Get on Google Play",
      secondaryType: "android",
    },
  },
  {
    id: "kinetics-movement",
    name: "Kinetics Athlete Coach",
    category: "Mobile Apps",
    subCategory: "Health & Fitness",
    tagline: "On-device neural computer vision for real-time 30fps athletic movement analysis.",
    rating: 4.8,
    reviewsCount: "2.4k reviews",
    platformBadge: "iOS & watchOS",
    themeColor: "from-blue-600 to-cyan-500",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://kinetics.demo.arkanet.com",
    description:
      "Athletic performance app utilizing on-device Apple Neural Engine pose estimation to provide 30fps joint tracking, repetition count, and instant audio feedback.",
    metrics: {
      stat1: { label: "Processing FPS", value: "30fps" },
      stat2: { label: "Form Accuracy", value: "99.4%" },
      stat3: { label: "User Retention", value: "88%" },
    },
    highlights: [
      "Private on-device CoreML computer vision with zero server latency",
      "Audible posture warnings and barbell velocity tracking",
      "Seamless bi-directional sync with Apple Health and Google Fit",
      "Weekly athletic progress telemetry with fatigue prediction",
    ],
    techStack: ["Swift", "CoreML", "TensorFlow Lite", "HealthKit", "watchOS"],
    client: "Kinetics Pro Labs",
    year: "2025",
    platforms: "iOS 17+ • Apple Watch • HealthKit",
    downloads: {
      primaryLabel: "Download for iOS",
      primaryType: "apple",
      secondaryLabel: "Get for Android",
      secondaryType: "android",
    },
  },
  {
    id: "moda-atelier",
    name: "Moda Atelier Milano",
    category: "Shopify Stores",
    subCategory: "Luxury Fashion",
    tagline: "Interactive runway video shopping and invitation-gated private client salon.",
    rating: 4.8,
    reviewsCount: "1.9k reviews",
    platformBadge: "Shopify Plus",
    themeColor: "from-rose-600 to-pink-600",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-800",
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
    metrics: {
      stat1: { label: "VIP Engagement", value: "4.5x" },
      stat2: { label: "Shoppable Video CTR", value: "28%" },
      stat3: { label: "Global Currencies", value: "32+" },
    },
    highlights: [
      "Seamless runway video playback paired with interactive shoppable tags",
      "VIP private client shopping room gated by invitation code",
      "Integrated concierge chat and global white-glove courier tracking",
      "Express global delivery calculation and multi-warehouse fulfillment",
    ],
    techStack: ["Shopify Plus", "Storefront API", "Tailwind CSS", "Vimeo Pro"],
    client: "Moda Atelier S.p.A.",
    year: "2025",
    platforms: "Shopify Plus • Liquid OS 2.0 • Global Multi-Currency",
    downloads: {
      primaryLabel: "Visit Shopify Store",
      primaryType: "shopify",
      secondaryLabel: "Watch Runway Stream",
      secondaryType: "web",
    },
  },
  {
    id: "parkease-mobility",
    name: "ParkEase Smart Mobility",
    category: "Mobile Apps",
    subCategory: "Navigation & Transit",
    tagline: "Connected Apple CarPlay transit navigator with live telemetry across 42,000+ bays.",
    rating: 4.9,
    reviewsCount: "5.8k reviews",
    platformBadge: "iOS & Android",
    themeColor: "from-indigo-600 to-purple-600",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
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
    metrics: {
      stat1: { label: "Search Time Reduction", value: "38%" },
      stat2: { label: "Connected Bays", value: "42,000+" },
      stat3: { label: "Telemetry Uptime", value: "99.9%" },
    },
    highlights: [
      "Sub-second sensor telemetry across 42,000+ monitored parking bays",
      "Turn-by-turn guidance directly into open spots via Apple CarPlay",
      "Automated license plate recognition and frictionless mobile billing",
      "Transit traffic prediction model reducing search latency by 38%",
    ],
    techStack: ["Flutter", "TensorFlow Edge", "MQTT IoT", "Apple CarPlay", "AWS"],
    client: "Dubai Smart Mobility Initiative",
    year: "2026",
    platforms: "iOS 17+ • Android 14+ • Apple CarPlay",
    downloads: {
      primaryLabel: "Download on iOS",
      primaryType: "apple",
      secondaryLabel: "Get on Android",
      secondaryType: "android",
    },
  },
  {
    id: "stonecraft-surfaces",
    name: "StoneCraft Surfaces",
    category: "Shopify Stores",
    subCategory: "Home & Architecture",
    tagline: "Architectural stone sampling, 2K slab inspector, and contractor wholesale portal.",
    rating: 4.9,
    reviewsCount: "430 reviews",
    platformBadge: "Shopify Plus",
    themeColor: "from-stone-700 to-slate-800",
    badgeBg: "bg-stone-100",
    badgeText: "text-stone-800",
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
    metrics: {
      stat1: { label: "Sample Orders", value: "+110%" },
      stat2: { label: "Texture Zoom", value: "2K Quad" },
      stat3: { label: "Trade Wholesale", value: "Active" },
    },
    highlights: [
      "2K texture zoom on natural marble, granite, and quartz slabs",
      "Physical architectural sample checkout with real-time courier tracking",
      "Verified contractor wholesale login with tiered quantity discounting",
      "Direct ERP integration for warehouse slab bundle availability",
    ],
    techStack: ["Shopify Liquid", "Tailwind CSS", "Storefront API", "Edge CDN"],
    client: "StoneCraft Natural Surfaces",
    year: "2025",
    platforms: "Shopify Plus • Custom Liquid Architecture",
    downloads: {
      primaryLabel: "Open Live Storefront",
      primaryType: "shopify",
      secondaryLabel: "Trade Portal Demo",
      secondaryType: "web",
    },
  },
  {
    id: "aura-botanicals",
    name: "Aura Living Botanicals",
    category: "Shopify Stores",
    subCategory: "Beauty & Wellness",
    tagline: "Clean organic skincare with personalized regimens and subscription replenishment.",
    rating: 4.8,
    reviewsCount: "3.1k reviews",
    platformBadge: "Shopify Store",
    themeColor: "from-orange-500 to-rose-500",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-800",
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
    metrics: {
      stat1: { label: "Subscription Rate", value: "+45%" },
      stat2: { label: "Quiz Completion", value: "76%" },
      stat3: { label: "Mobile Speed", value: "98/100" },
    },
    highlights: [
      "Dynamic 6-step skin diagnostic quiz recommending custom regimens",
      "1-click recurring subscription discount and automated replenishment",
      "Mobile-first sticky add-to-bag with sliding upsell drawer",
      "Localized multicurrency checkout with instant Apple Pay and Shop Pay",
    ],
    techStack: ["Shopify OS 2.0", "Recharge Subscriptions", "Klaviyo", "Liquid"],
    client: "Aura Living Organics",
    year: "2025",
    platforms: "Shopify Online Store 2.0 • Recharge Subscriptions",
    downloads: {
      primaryLabel: "Visit Shopify Store",
      primaryType: "shopify",
      secondaryLabel: "Take Skincare Quiz",
      secondaryType: "web",
    },
  },
  {
    id: "neuraldesk-ai",
    name: "NeuralDesk Enterprise",
    category: "Web & SaaS",
    subCategory: "Productivity & AI",
    tagline: "Private enterprise knowledge retrieval and departmental AI workflow assistant.",
    rating: 4.9,
    reviewsCount: "640 reviews",
    platformBadge: "Web & Cloud",
    themeColor: "from-cyan-600 to-blue-700",
    badgeBg: "bg-cyan-100",
    badgeText: "text-cyan-800",
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
    metrics: {
      stat1: { label: "Internal Ticket Drop", value: "-84%" },
      stat2: { label: "Citation Accuracy", value: "99.8%" },
      stat3: { label: "Data Leakage", value: "0%" },
    },
    highlights: [
      "Semantic vector indexing across PDF documents, spreadsheets, and databases",
      "Granular departmental access controls ensuring zero unapproved data leaks",
      "Instant citation verification linking every AI answer to exact source pages",
      "Zero telemetry export, fully deployable inside private corporate VPCs",
    ],
    techStack: ["FastAPI", "Python", "pgvector", "LangChain", "Docker", "Next.js"],
    client: "Global Financial Advisory Network",
    year: "2026",
    platforms: "Cloud SaaS • Docker VPC • Web & Mobile",
    downloads: {
      primaryLabel: "Deploy SaaS Instance",
      primaryType: "cloud",
      secondaryLabel: "Explore API Docs",
      secondaryType: "docs",
    },
  },
];

const FEATURED_SLIDES = APPLICATIONS.slice(0, 5);

const CATEGORIES: ApplicationCategory[] = [
  "All",
  "Mobile Apps",
  "Shopify Stores",
  "Web & SaaS",
];

const AppleLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.64-1.05 1.7-0.92 2.73 1.01.08 2.03-.5 2.63-1.23z" />
  </svg>
);

const PlayLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.372-.379-.61-.908-.61-1.492V3.306c0-.584.238-1.113.609-1.492zm11.605 11.607l2.454 2.454-11.45 6.467 8.996-8.921zm0-2.842L6.218 1.658l11.45 6.467-2.454 2.454zm1.42 1.42l3.411 1.927c.801.453.801 1.191 0 1.644l-3.411 1.927-2.185-2.185 2.185-2.185z" />
  </svg>
);

const ShopifyLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.78 6.55c-.04-.33-.31-.57-.64-.58l-3.56-.12c-.22 0-.42.12-.52.31l-1.37 2.48c-.08.15-.24.24-.41.24-.17 0-.33-.09-.41-.24L11.5 6.16c-.1-.19-.3-.31-.52-.31l-3.56.12c-.33.01-.6.25-.64.58l-1.5 13.5c-.04.36.19.69.54.77l11.5 2.5c.06.01.12.02.18.02.29 0 .56-.17.67-.45l1.61-14.75z" />
  </svg>
);

/* ── Platform category cards for the grid (like "Notely for Android / iOS / Web / Desktop") ── */
const PLATFORM_CARDS = [
  {
    title: "Mobile Apps",
    subtitle: "Native iOS & Android experiences built with Swift, Kotlin, Flutter, and React Native. Optimized for performance, offline-first, and App Store ready.",
    apps: APPLICATIONS.filter((a) => a.category === "Mobile Apps").slice(0, 2),
    icon: Smartphone,
  },
  {
    title: "Shopify Stores",
    subtitle: "High-conversion Shopify Plus storefronts with headless architecture, 3D product viewers, and localized checkout for global e-commerce.",
    apps: APPLICATIONS.filter((a) => a.category === "Shopify Stores").slice(0, 2),
    icon: ShoppingBag,
  },
  {
    title: "Web & SaaS",
    subtitle: "Enterprise web applications, AI-powered dashboards, and scalable SaaS platforms with real-time data processing and role-based access.",
    apps: APPLICATIONS.filter((a) => a.category === "Web & SaaS").slice(0, 2),
    icon: Layers,
  },
  {
    title: "Enterprise Solutions",
    subtitle: "End-to-end custom builds integrating IoT telemetry, computer vision, and cloud infrastructure for organizations at scale.",
    apps: APPLICATIONS.filter((a) => a.category === "Mobile Apps").slice(1, 3),
    icon: Globe,
  },
];

export default function ApplicationPage() {
  const [selectedCategory, setSelectedCategory] = useState<ApplicationCategory>("All");
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  const openContact = () => setContactOpen(true);

  const filteredApps =
    selectedCategory === "All"
      ? APPLICATIONS
      : APPLICATIONS.filter((item) => item.category === selectedCategory);

  const handleOpenAppModal = (app: ApplicationItem) => {
    setSelectedApp(app);
    setActiveScreenshotIdx(0);
  };

  return (
    <main className="min-h-screen bg-white text-[#1a1a2e] selection:bg-[#1a1a2e] selection:text-white overflow-x-hidden font-sans">
      {/* ── CONTACT MODAL ── */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 1 — DARK HERO  (Scribbit: "Ideas. Notes. Clarity.")
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0f0f1a] text-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">

          {/* Active users badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex -space-x-2">
              {["CF", "VH", "KP", "MA"].map((initials, i) => (
                <div
                  key={initials}
                  className="w-7 h-7 rounded-full bg-white/15 border-2 border-[#0f0f1a] flex items-center justify-center text-[10px] font-bold text-white/80"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-xs text-white/50 font-medium">50+ production releases</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-tight max-w-3xl">
            Apps. Stores. Scale.
            <br />
            <span className="text-white/90">Wherever your business grows.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-white/50 max-w-xl leading-relaxed">
            We engineer production mobile apps, Shopify storefronts, and enterprise SaaS — ready whenever growth demands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button
              type="button"
              onClick={openContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0f0f1a] font-bold text-sm hover:bg-white/90 transition-all cursor-pointer active:scale-[0.97]"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/5 transition-all cursor-pointer"
            >
              View Case Studies
            </a>
          </div>

          {/* Featured App Preview Mockup */}
          <div className="mt-14 relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[16/8] max-w-4xl">
            <Image
              src={APPLICATIONS[0].previewImage}
              alt={APPLICATIONS[0].name}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
              priority
            />
            {/* Floating product label */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
              <p className="text-[11px] text-white/60 font-medium">{APPLICATIONS[0].platforms}</p>
              <p className="text-sm font-bold text-white">{APPLICATIONS[0].name}</p>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/45 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Production-Ready
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" /> $45M+ Revenue Powered
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> 4.9/5 Client Rating
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Delivered Globally
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 — FEATURE SHOWCASE  (Scribbit: "Notes that work the way you think")
          ══════════════════════════════════════════════════════════════════ */}
      <section id="showcase" className="w-full bg-white py-20 sm:py-24 lg:py-28 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Text */}
            <div className="space-y-5 max-w-lg">
              <h2 className="font-black text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-[#1a1a2e]">
                Products that work the way your business thinks.
              </h2>
              <p className="text-base text-[#1a1a2e]/60 leading-relaxed">
                Every application we build starts from your commercial goals — not ours. With Arkanet, every line of code maps directly to conversions, retention, or operational velocity. Architecture adapts to your style, helping you scale focused and productive.
              </p>
            </div>

            {/* Right — Large Product Screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-[#e5e5e5] bg-[#f8f8f8] aspect-[4/3]">
              <Image
                src={APPLICATIONS[1].previewImage}
                alt={APPLICATIONS[1].name}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — CAPABILITIES + FEATURES  (Scribbit: "Smarter Notes" section)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#fafafa] border-y border-[#ebebeb] py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — Illustration / Screenshot in Card */}
            <div className="rounded-2xl overflow-hidden border border-[#e5e5e5] bg-white aspect-[4/3] relative">
              <Image
                src={APPLICATIONS[4].previewImage}
                alt={APPLICATIONS[4].name}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Right — Heading + Feature List */}
            <div className="space-y-8">
              <div>
                <h2 className="font-black text-3xl sm:text-4xl leading-[1.1] tracking-tight text-[#1a1a2e]">
                  Smarter Products. One Simple Space to Build, Ship &amp; Scale.
                </h2>
                <p className="mt-4 text-base text-[#1a1a2e]/55 leading-relaxed">
                  From idea to production in one streamlined pipeline. We capture your requirements, organize them into clear architecture, stay focused with agile sprints, and deliver a product that moves with you.
                </p>
              </div>

              {/* Feature Items */}
              <div className="space-y-7">
                {[
                  {
                    icon: Zap,
                    title: "Rapid Prototyping & Delivery",
                    desc: "From wireframe to working prototype in weeks, not months. We build iteratively so you see progress from day one.",
                  },
                  {
                    icon: Sparkles,
                    title: "Adaptive Architecture",
                    desc: "Your product grows with you. We design flexible systems that can pivot with market changes and scale with demand.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Production-Grade & Secure",
                    desc: "Every build ships with enterprise security, automated testing, and monitoring baked in from the start.",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1a1a2e] flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#1a1a2e]">{feature.title}</h4>
                      <p className="mt-1 text-sm text-[#1a1a2e]/55 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — PLATFORM GRID  (Scribbit: "Ideas. Notes. Clarity. Wherever your mind goes.")
          ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Heading */}
          <div className="max-w-2xl mb-12">
            <h2 className="font-black text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight text-[#1a1a2e]">
              Apps. Stores. SaaS.
              <br />
              <span className="text-[#1a1a2e]/60">Wherever your audience is.</span>
            </h2>
          </div>

          {/* 2x2 Platform Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLATFORM_CARDS.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-6 sm:p-8 hover:border-[#1a1a2e]/20 transition-all"
              >
                {/* Preview thumbnails */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {card.apps.map((app) => (
                    <div
                      key={app.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleOpenAppModal(app)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleOpenAppModal(app);
                        }
                      }}
                      className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white border border-[#e5e5e5] cursor-pointer hover:border-[#1a1a2e]/30 transition-all"
                    >
                      <Image
                        src={app.previewImage}
                        alt={app.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Card Text */}
                <h3 className="font-bold text-lg text-[#1a1a2e] mb-2">{card.title}</h3>
                <p className="text-sm text-[#1a1a2e]/55 leading-relaxed">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 — FULL APP DIRECTORY (Browse all applications)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#fafafa] border-y border-[#ebebeb] py-20 sm:py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 space-y-8">

          {/* Directory Header & Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
            <div>
              <h2 className="font-black text-2xl sm:text-3xl text-[#1a1a2e] tracking-tight">
                All Applications &amp; Storefronts
              </h2>
              <p className="mt-1 text-sm text-[#1a1a2e]/50">
                Browse our complete catalog of verified releases.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer select-none ${
                      isActive
                        ? "bg-[#1a1a2e] text-white"
                        : "bg-white text-[#1a1a2e]/65 hover:text-[#1a1a2e] border border-[#e5e5e5] hover:border-[#1a1a2e]/30"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                role="button"
                tabIndex={0}
                onClick={() => handleOpenAppModal(app)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenAppModal(app);
                  }
                }}
                className="group rounded-2xl bg-white border border-[#e5e5e5] p-5 hover:border-[#1a1a2e]/25 hover:shadow-lg cursor-pointer transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a2e] flex flex-col"
              >
                {/* Preview Image */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#f0f0f0] border border-[#e5e5e5] mb-4">
                  <Image
                    src={app.previewImage}
                    alt={app.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Card Meta */}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1a1a2e]/45 block mb-1">
                  {app.category}
                </span>
                <h3 className="font-bold text-base text-[#1a1a2e] leading-snug mb-1">
                  {app.name}
                </h3>
                <p className="text-xs text-[#1a1a2e]/55 leading-relaxed line-clamp-2 mb-4">
                  {app.tagline}
                </p>

                {/* Bottom Row */}
                <div className="mt-auto pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#1a1a2e]/45">{app.platformBadge}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1a1a2e] group-hover:translate-x-0.5 transition-transform">
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 — CTA BANNER  (Scribbit: "How You Take Notes?")
          ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-2xl bg-[#f5f5f5] border border-[#e5e5e5] py-16 px-8 sm:px-12 text-center">
            <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl text-[#1a1a2e] tracking-tight">
              How Do You Build Products?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#1a1a2e]/50 max-w-lg mx-auto leading-relaxed">
              Start building apps to capture your market instantly. Keep your team organized effortlessly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1a1a2e] text-white font-bold text-sm hover:bg-[#1a1a2e]/90 transition-all cursor-pointer active:scale-[0.97]"
              >
                Get Started Free
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP DETAIL MODAL ── */}
      {selectedApp && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#e5e5e5] p-6 sm:p-8 space-y-5 shadow-2xl max-h-[92vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedApp(null)}
              className="absolute top-4 right-4 p-2 text-[#1a1a2e]/40 hover:text-[#1a1a2e] transition-colors cursor-pointer rounded-full hover:bg-[#f5f5f5]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pr-8">
              <div className="min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1a1a2e]/45 block">
                  {selectedApp.category} • {selectedApp.subCategory}
                </span>
                <h3 className="font-black text-2xl sm:text-3xl text-[#1a1a2e] leading-tight">
                  {selectedApp.name}
                </h3>
                <p className="text-xs text-[#1a1a2e]/45 mt-0.5">
                  {selectedApp.client} • Released {selectedApp.year}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedApp(null);
                  openContact();
                }}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a2e] text-white font-bold text-xs sm:text-sm hover:bg-[#1a1a2e]/90 transition-all cursor-pointer active:scale-95"
              >
                Request Custom Build
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-[#fafafa] border border-[#ebebeb] text-center text-xs">
              <div>
                <span className="block text-[10px] text-[#1a1a2e]/45 uppercase tracking-wider font-semibold">
                  Rating
                </span>
                <span className="font-bold text-[#1a1a2e] text-sm flex items-center justify-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                  {selectedApp.rating}
                </span>
                <span className="block text-[10px] text-[#1a1a2e]/40 mt-0.5">{selectedApp.reviewsCount}</span>
              </div>
              <div className="border-x border-[#ebebeb]">
                <span className="block text-[10px] text-[#1a1a2e]/45 uppercase tracking-wider font-semibold">
                  Platform
                </span>
                <span className="font-bold text-[#1a1a2e] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.platformBadge}
                </span>
                <span className="block text-[10px] text-emerald-600 font-semibold mt-0.5">Live</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#1a1a2e]/45 uppercase tracking-wider font-semibold">
                  Type
                </span>
                <span className="font-bold text-[#1a1a2e] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.category}
                </span>
                <span className="block text-[10px] text-[#1a1a2e]/40 mt-0.5">Verified</span>
              </div>
            </div>

            {/* Downloads */}
            <div className="space-y-2">
              <span className="font-bold text-xs uppercase tracking-wider text-[#1a1a2e]/50 block">
                Access Options
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedApp(null);
                    openContact();
                  }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e5e5e5] hover:border-[#1a1a2e]/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    {selectedApp.downloads.primaryType === "apple" ? (
                      <AppleLogo className="w-5 h-5 text-[#1a1a2e]" />
                    ) : selectedApp.downloads.primaryType === "shopify" ? (
                      <ShopifyLogo className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Download className="w-5 h-5 text-[#1a1a2e]" />
                    )}
                    <span className="font-bold text-xs text-[#1a1a2e]">{selectedApp.downloads.primaryLabel}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#1a1a2e]/30 group-hover:text-[#1a1a2e] transition-colors" />
                </button>

                {selectedApp.downloads.secondaryLabel && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedApp(null);
                      openContact();
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e5e5e5] hover:border-[#1a1a2e]/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      {selectedApp.downloads.secondaryType === "android" ? (
                        <PlayLogo className="w-5 h-5 text-[#1a1a2e]" />
                      ) : (
                        <ExternalLink className="w-4.5 h-4.5 text-[#1a1a2e]" />
                      )}
                      <span className="font-bold text-xs text-[#1a1a2e]">{selectedApp.downloads.secondaryLabel}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#1a1a2e]/30 group-hover:text-[#1a1a2e] transition-colors" />
                  </button>
                )}
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-2">
              <span className="font-bold text-xs uppercase tracking-wider text-[#1a1a2e]/50 block">
                Screenshots
              </span>
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#f5f5f5] border border-[#e5e5e5]">
                <Image
                  src={selectedApp.screenshots[activeScreenshotIdx] || selectedApp.previewImage}
                  alt={selectedApp.name}
                  fill
                  className="object-cover transition-all duration-300"
                />
              </div>
              {selectedApp.screenshots.length > 1 && (
                <div className="flex items-center gap-2 pt-1">
                  {selectedApp.screenshots.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`relative w-20 h-12 rounded-lg overflow-hidden border cursor-pointer transition-all ${
                        activeScreenshotIdx === idx
                          ? "border-[#1a1a2e] ring-2 ring-[#1a1a2e]/20"
                          : "border-[#e5e5e5] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#1a1a2e]/50">
                About
              </h4>
              <p className="text-sm text-[#1a1a2e]/75 leading-relaxed">
                {selectedApp.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2 border-t border-[#f0f0f0] pt-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#1a1a2e]/50">
                Key Features
              </h4>
              <div className="space-y-1.5">
                {selectedApp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#1a1a2e]/75">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-1.5 border-t border-[#f0f0f0] pt-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#1a1a2e]/50">
                Built With
              </h4>
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium text-[#1a1a2e]/70 bg-[#f5f5f5] border border-[#e5e5e5] px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[#f0f0f0] flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-[#1a1a2e]/40">
                {selectedApp.platforms}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedApp(null);
                  openContact();
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1a1a2e] text-white font-bold text-xs hover:bg-[#1a1a2e]/90 transition-all cursor-pointer ml-auto"
              >
                Request Build
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CLIENT REVIEWS ── */}
      <HomeReviewsSection />

      {/* ── CLOSING CTA ── */}
      <AboutCTA onOpenBooking={openContact} bgColor="bg-white" />

      {/* ── FOOTER ── */}
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
