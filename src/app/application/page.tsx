"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Zap,
  Globe,
  Award,
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

export default function ApplicationPage() {
  const [selectedCategory, setSelectedCategory] = useState<ApplicationCategory>("All");
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // Deck carousel index (Image 3 inspired)
  const [activeDeckIdx, setActiveDeckIdx] = useState(0);

  const openContact = () => setContactOpen(true);

  const handlePrevDeck = () => {
    setActiveDeckIdx((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const handleNextDeck = () => {
    setActiveDeckIdx((prev) => (prev + 1) % FEATURED_SLIDES.length);
  };

  const filteredApps =
    selectedCategory === "All"
      ? APPLICATIONS
      : APPLICATIONS.filter((item) => item.category === selectedCategory);

  const handleOpenAppModal = (app: ApplicationItem) => {
    setSelectedApp(app);
    setActiveScreenshotIdx(0);
  };

  const currentDeckApp = FEATURED_SLIDES[activeDeckIdx];

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      {/* ── HEADER ── */}
      <Header onOpenBooking={openContact} />

      {/* ── CONTACT MODAL ── */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. BENTO HERO SHOWCASE (INSPIRED BY REFERENCE IMAGES 1 & 2) ── */}
      <section className="relative w-full min-h-[calc(100vh-1rem)] lg:min-h-screen pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left flex flex-col justify-center">
        <div className="max-w-[1400px] w-full mx-auto space-y-6 sm:space-y-7 my-auto">
          
          {/* Header Row: Large Typography (Matching Image 1: "Our focus is simple / Design to convert") */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-1">
            <div className="space-y-1.5 max-w-3xl">
              <span className="font-heading font-medium text-base sm:text-lg text-slate-500 block tracking-tight">
                Our focus is simple
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-[1.1] text-balance">
                Design to scale &amp; convert
              </h1>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#202B61]/70 leading-relaxed font-normal max-w-md lg:text-right">
              We engineer production mobile apps and flagship Shopify websites that turn technical architecture into measurable commercial growth.
            </p>
          </div>

          {/* Bento Cards Grid (Matching Image 1 & Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            
            {/* Card 1: Avatar stack & Partners (Span 3) */}
            <div className="lg:col-span-3 flex flex-col justify-between p-5 sm:p-6 rounded-[24px] bg-[#f8fafc] border border-slate-200/80 shadow-xs min-h-[220px]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold">
                    CF
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold">
                    VH
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold">
                    KP
                  </div>
                  <div className="w-8 h-8 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold">
                    MA
                  </div>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#202B61]/70">
                  50+ Global Releases
                </span>
              </div>

              <div className="pt-6 space-y-1">
                <span className="font-sans text-xs text-[#202B61]/65 font-medium block">
                  Average Enterprise ROI Timeline
                </span>
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B61] tracking-tight">
                  90%
                </h3>
                <p className="font-sans text-xs text-[#202B61]/75">
                  Return on investment within 90 days of launch
                </p>
              </div>
            </div>

            {/* Card 2: Revenue Generated (Span 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-[24px] bg-[#f8fafc] border border-slate-200/80 shadow-xs min-h-[220px]">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#202B61]/70">
                  Through custom-tailored mobile &amp; e-commerce systems
                </span>
              </div>

              <div className="pt-4 space-y-2.5">
                <div>
                  <h3 className="font-heading font-black text-4xl sm:text-5xl text-[#202B61] tracking-tight">
                    $45M<span className="text-emerald-600 font-bold">+</span>
                  </h3>
                  <span className="text-xs font-sans text-[#202B61]/65 font-medium block mt-0.5">
                    Client transaction volume powered in 2025–2026
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs font-semibold text-[#202B61]/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Q2 Architecture &amp; App Builds</span>
                </div>
              </div>
            </div>

            {/* Card 3: Dark High-Contrast Statement Card (Matching Image 1 Dark Card #232323) */}
            <div className="lg:col-span-5 relative flex flex-col justify-between p-5 sm:p-6 lg:p-7 rounded-[24px] bg-[#232323] text-white shadow-[0_12px_36px_rgba(0,0,0,0.14)] overflow-hidden min-h-[220px]">
              
              {/* Subtle Growth Trajectory Graphic in Background (Matching Image 1) */}
              <div className="absolute right-3 bottom-3 opacity-15 pointer-events-none">
                <TrendingUp className="w-40 h-40 text-emerald-400 stroke-[1]" />
              </div>

              <div className="relative z-10 space-y-2 max-w-sm">
                <p className="font-sans font-medium text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                  We engineered 50+ applications and Shopify stores worldwide, helping category leaders scale traffic, automate workflows, and retain customers.
                </p>
              </div>

              <div className="relative z-10 pt-5 flex items-end justify-between border-t border-white/10 mt-4">
                <div>
                  <h4 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                    4.9<span className="text-white/60 text-2xl font-normal">/5</span>
                  </h4>
                  <div className="flex items-center gap-1 text-amber-400 mt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                    TRUSTED BY
                  </span>
                  <span className="text-xs font-bold text-white block">
                    CLIENTS WORLDWIDE
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 2. FEATURED CASE CAROUSEL DECK (INSPIRED BY REFERENCE IMAGE 3 "What We've Built") ── */}
      <section className="relative w-full min-h-[calc(100vh-1rem)] lg:min-h-screen py-10 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-12 bg-[#E2ECF8] border-b border-blue-200/60 text-left overflow-hidden flex flex-col justify-center">
        <div className="max-w-[1400px] w-full mx-auto space-y-4 sm:space-y-5 my-auto">
          
          {/* Section Header (Matching Reference 3 & Snippet 4, 6) */}
          <div className="text-left space-y-1">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#202B61]/65 block">
              001 • FEATURED SHOWCASE
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight">
              What We&apos;ve Built
            </h2>
          </div>

          {/* Elevated Floating 3D Showcase Card */}
          <div className="relative rounded-[28px] bg-white border border-blue-100/90 p-6 sm:p-8 lg:p-10 shadow-[0_10px_36px_rgba(32,43,97,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              {/* Left Column: Clean App Store Preview Container */}
              <div className="lg:col-span-6">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenAppModal(currentDeckApp)}
                  className="group relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-slate-50 border border-slate-200/80 cursor-pointer"
                >
                  <Image
                    src={currentDeckApp.previewImage}
                    alt={currentDeckApp.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Floating Bottom Pill Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="bg-white/95 backdrop-blur-md text-[#202B61] px-3 py-1.5 rounded-full border border-slate-200/70 font-medium text-[11px] shadow-2xs">
                      {currentDeckApp.platforms}
                    </span>
                    <span className="bg-[#202B61] text-white font-bold px-3.5 py-1.5 rounded-full shadow-2xs flex items-center gap-1 group-hover:bg-[#202B61]/90 text-[11px] transition-colors">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Editorial Info, Metrics & Actions */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
                
                {/* App Icon Squircle & Category Line */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-[16px] bg-[#f1f5f9] border border-slate-200/80 text-[#202B61] flex items-center justify-center shrink-0 shadow-2xs"
                  >
                    {currentDeckApp.category === "Shopify Stores" ? (
                      <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                    ) : (
                      <Smartphone className="w-5 h-5 stroke-[1.8]" />
                    )}
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {currentDeckApp.category}
                    </span>
                    <p className="font-sans text-[11px] text-slate-400 font-medium truncate">
                      {currentDeckApp.subCategory}
                    </p>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight leading-tight">
                    {currentDeckApp.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#202B61]/75 leading-relaxed font-normal">
                    {currentDeckApp.description}
                  </p>
                </div>

                {/* 3 Impact Stat Metrics */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-slate-100">
                  <div>
                    <h4 className="font-heading font-black text-xl sm:text-2xl text-[#202B61]">
                      {currentDeckApp.metrics.stat1.value}
                    </h4>
                    <span className="text-[10.5px] font-sans text-slate-500 font-medium block mt-0.5 leading-snug">
                      {currentDeckApp.metrics.stat1.label}
                    </span>
                  </div>
                  <div className="border-l border-slate-100 pl-3">
                    <h4 className="font-heading font-black text-xl sm:text-2xl text-[#202B61]">
                      {currentDeckApp.metrics.stat2.value}
                    </h4>
                    <span className="text-[10.5px] font-sans text-slate-500 font-medium block mt-0.5 leading-snug">
                      {currentDeckApp.metrics.stat2.label}
                    </span>
                  </div>
                  <div className="border-l border-slate-100 pl-3">
                    <h4 className="font-heading font-black text-xl sm:text-2xl text-[#202B61]">
                      {currentDeckApp.metrics.stat3.value}
                    </h4>
                    <span className="text-[10.5px] font-sans text-slate-500 font-medium block mt-0.5 leading-snug">
                      {currentDeckApp.metrics.stat3.label}
                    </span>
                  </div>
                </div>

                {/* Actions: Clean App Store Style */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => handleOpenAppModal(currentDeckApp)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm hover:bg-[#202B61]/90 transition-all cursor-pointer shadow-2xs active:scale-95"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenAppModal(currentDeckApp)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#202B61] font-sans font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#202B61]/70" />
                    <span>Download App / Demo</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom Deck Navigation: Dots on Left, Very Simple Arrows on Right Bottom */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5">
              {FEATURED_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveDeckIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeDeckIdx ? "w-7 bg-[#202B61]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Slide to ${slide.name}`}
                />
              ))}
              <span className="text-xs font-mono font-semibold text-[#202B61]/60 ml-2">
                0{activeDeckIdx + 1} / 0{FEATURED_SLIDES.length}
              </span>
            </div>

            {/* Simple Arrows on Right Bottom */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevDeck}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-[#202B61] flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-2xs"
                aria-label="Previous featured release"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>
              <button
                type="button"
                onClick={handleNextDeck}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-[#202B61] flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-2xs"
                aria-label="Next featured release"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. FULL APP STORE & SHOPIFY DIRECTORY (COLORFUL SQUIRCLES, REVIEWS, GET BUTTONS) ── */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-left font-sans bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto space-y-8">

          {/* Directory Header & Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="space-y-1">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
                All Applications &amp; Storefronts
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#202B61]/70">
                Browse our complete catalog of verified mobile releases and e-commerce platforms.
              </p>
            </div>

            {/* Segmented Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#202B61] text-white shadow-xs"
                        : "bg-white text-[#202B61]/75 hover:text-[#202B61] hover:bg-slate-100 border border-slate-200/60"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredApps.map((app) => {
              const isShopify = app.category === "Shopify Stores";

              return (
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
                  className="group rounded-[20px] bg-white border border-slate-200/80 p-5 hover:border-[#202B61]/40 hover:shadow-[0_8px_30px_rgba(32,43,97,0.06)] cursor-pointer transition-all duration-300 flex flex-col justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]"
                >
                  <div className="space-y-4">
                    
                    {/* Header: App Store Squircle Icon + App Info + GET Button */}
                    <div className="flex items-center justify-between gap-3">
                      
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* App Squircle Icon */}
                        <div
                          className="w-12 h-12 rounded-[16px] bg-[#f1f5f9] border border-slate-200/80 text-[#202B61] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-102 transition-transform"
                        >
                          {isShopify ? (
                            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                          ) : app.iconType === "mobile" ? (
                            <Smartphone className="w-5 h-5 stroke-[1.8]" />
                          ) : (
                            <Layers className="w-5 h-5 stroke-[1.8]" />
                          )}
                        </div>

                        {/* Title & Category Line */}
                        <div className="min-w-0 space-y-0.5">
                          <h3 className="font-heading font-bold text-base sm:text-[17px] text-[#202B61] leading-tight truncate">
                            {app.name}
                          </h3>
                          <span className="inline-block text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {app.subCategory}
                          </span>
                        </div>
                      </div>

                      {/* App Store 'GET' Pill Button */}
                      <span className="shrink-0 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 group-hover:bg-[#202B61] text-[#202B61] group-hover:text-white font-sans font-bold text-xs tracking-tight transition-colors duration-200">
                        GET
                      </span>

                    </div>

                    {/* Screenshot / Interface Preview */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                      <Image
                        src={app.previewImage}
                        alt={app.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#202B61]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="bg-white/95 backdrop-blur-xs text-[#202B61] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Short Tagline */}
                    <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/80 leading-relaxed line-clamp-2">
                      {app.tagline}
                    </p>

                  </div>

                  {/* Bottom: Customer Rating & Platform Tag */}
                  <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                      <span>{app.rating}</span>
                      <span className="text-[#202B61]/55 font-normal ml-0.5">
                        ({app.reviewsCount})
                      </span>
                    </div>

                    <span className="text-slate-500 font-semibold bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/70 text-[11px]">
                      {app.platformBadge}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. DETAILED APP STORE MODAL SHEET (ALL DETAILS + DOWNLOAD OPTIONS) ── */}
      {selectedApp && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[24px] border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xl max-h-[92vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedApp(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#202B61] transition-colors cursor-pointer rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* App Store Top Row: Clean Squircle Icon + Name + Primary Download */}
            <div className="flex items-start justify-between gap-4 pr-8">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#f1f5f9] border border-slate-200/80 text-[#202B61] flex items-center justify-center shrink-0 shadow-2xs"
                >
                  {selectedApp.category === "Shopify Stores" ? (
                    <ShoppingBag className="w-8 h-8 stroke-[1.8]" />
                  ) : selectedApp.iconType === "mobile" ? (
                    <Smartphone className="w-8 h-8 stroke-[1.8]" />
                  ) : (
                    <Layers className="w-8 h-8 stroke-[1.8]" />
                  )}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61] leading-tight">
                    {selectedApp.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/70 font-medium">
                    {selectedApp.subCategory}
                  </p>
                  <p className="font-sans text-[11px] text-[#202B61]/55">
                    {selectedApp.client} • Released {selectedApp.year}
                  </p>
                </div>
              </div>

              {/* Direct Download / Visit Store Primary Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedApp(null);
                  openContact();
                }}
                className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm hover:bg-[#202B61]/90 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>GET</span>
              </button>
            </div>

            {/* App Store Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center text-xs">
              <div>
                <span className="block text-[10.5px] text-[#202B61]/60 uppercase tracking-wider font-semibold">
                  Customer Rating
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
                <span className="block text-[10.5px] text-[#202B61]/60 uppercase tracking-wider font-semibold">
                  Platform
                </span>
                <span className="font-bold text-[#202B61] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.platformBadge}
                </span>
                <span className="block text-[10px] text-emerald-600 font-semibold mt-0.5">
                  Live in Production
                </span>
              </div>

              <div>
                <span className="block text-[10.5px] text-[#202B61]/60 uppercase tracking-wider font-semibold">
                  Architecture
                </span>
                <span className="font-bold text-[#202B61] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.category}
                </span>
                <span className="block text-[10px] text-[#202B61]/60 mt-0.5">
                  Arkanet Verified
                </span>
              </div>
            </div>

            {/* ── DOWNLOAD & ACCESS OPTIONS ── */}
            <div className="space-y-2 pt-1">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70 block">
                Download &amp; Store Access Options
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Primary Download Button */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedApp(null);
                    openContact();
                  }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#202B61]/40 hover:bg-slate-50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    {selectedApp.downloads.primaryType === "apple" ? (
                      <AppleLogo className="w-5 h-5 text-[#202B61]" />
                    ) : selectedApp.downloads.primaryType === "shopify" ? (
                      <ShopifyLogo className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Download className="w-5 h-5 text-[#202B61]" />
                    )}
                    <div className="text-left">
                      <span className="block font-sans font-bold text-xs text-[#202B61]">
                        {selectedApp.downloads.primaryLabel}
                      </span>
                      <span className="block font-sans text-[10.5px] text-[#202B61]/60">
                        Official Storefront Link
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#202B61]/50 group-hover:text-[#202B61] transition-colors" />
                </button>

                {/* Secondary Download Button */}
                {selectedApp.downloads.secondaryLabel && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedApp(null);
                      openContact();
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#202B61]/40 hover:bg-slate-50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      {selectedApp.downloads.secondaryType === "android" ? (
                        <PlayLogo className="w-5 h-5 text-[#202B61]" />
                      ) : (
                        <ExternalLink className="w-4.5 h-4.5 text-[#202B61]" />
                      )}
                      <div className="text-left">
                        <span className="block font-sans font-bold text-xs text-[#202B61]">
                          {selectedApp.downloads.secondaryLabel}
                        </span>
                        <span className="block font-sans text-[10.5px] text-[#202B61]/60">
                          Direct Access &amp; Demo
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#202B61]/50 group-hover:text-[#202B61] transition-colors" />
                  </button>
                )}
              </div>
            </div>

            {/* Screenshots Gallery with Thumbnails */}
            <div className="space-y-2 pt-1">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70 block">
                Interface Screenshots Preview
              </span>

              {/* Main Screenshot Preview */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80">
                <Image
                  src={selectedApp.screenshots[activeScreenshotIdx] || selectedApp.previewImage}
                  alt={selectedApp.name}
                  fill
                  className="object-cover transition-all duration-300"
                />
              </div>

              {/* Screenshot Thumbnails (if multiple) */}
              {selectedApp.screenshots.length > 1 && (
                <div className="flex items-center gap-2 pt-1">
                  {selectedApp.screenshots.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`relative w-20 h-12 rounded-lg overflow-hidden border cursor-pointer transition-all ${
                        activeScreenshotIdx === idx
                          ? "border-[#202B61] ring-2 ring-[#202B61]/20 scale-102"
                          : "border-slate-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About The Application Description */}
            <div className="space-y-1.5 pt-1">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
                About The Application
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#202B61]/85 leading-relaxed">
                {selectedApp.description}
              </p>
            </div>

            {/* Key Deliverables & Architectural Features */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
                Key Features &amp; Deliverables
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

            {/* Tech Stack Chips */}
            <div className="space-y-1.5 pt-1 border-t border-slate-100">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
                Engineered With
              </h4>
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-sans text-[11px] font-medium text-[#202B61]/80 bg-[#f8fafc] border border-slate-200/80 px-2.5 py-0.5 rounded-[4px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Inquire / Walkthrough */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="font-sans text-[11px] text-[#202B61]/65">
                Compatibility: {selectedApp.platforms}
              </span>
              
              <button
                type="button"
                onClick={() => {
                  setSelectedApp(null);
                  openContact();
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#202B61] text-white font-sans font-bold text-xs hover:bg-[#202B61]/90 transition-all cursor-pointer shadow-xs ml-auto"
              >
                <span>Request Custom Build &amp; Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── 5. CLOSING CTA ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── 6. FOOTER ── */}
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
