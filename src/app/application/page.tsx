"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Star,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
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

  // Deck carousel index
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

  return (
    <main className="min-h-screen bg-[#EDEDF0] text-[#18191C] selection:bg-[#18191C] selection:text-white overflow-x-hidden font-sans">
      {/* ── CONTACT MODAL ── */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ══════════════════════════════════════════════════════════════════
          1. EXACT STUDIO HERO (MATCHING USER REFERENCE DESIGN & PALETTE)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[calc(100vh-1rem)] lg:min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-[#EDEDF0] border-b border-[#E2E4E8] text-left flex flex-col justify-center">
        <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 my-auto">
          
          {/* Main Hero Header Block: Two-Column Headline & Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 text-left">
            <div>
              {/* Mission Pill from Reference */}
              <span className="inline-block px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 font-bold text-[10px] sm:text-[11px] tracking-widest uppercase mb-3">
                MISSION
              </span>

              <p className="font-sans text-base sm:text-lg text-[#6B7280] font-medium mb-1">
                Our focus is simple
              </p>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#18191C] tracking-tight leading-[1.05]">
                Design to convert
              </h1>
            </div>

            <div className="max-w-md lg:max-w-lg lg:pb-1">
              <p className="font-sans text-sm sm:text-[15px] text-[#6B7280] leading-relaxed font-normal">
                We promise to deliver beyond your expectations for your business, engineering production applications that scale revenue.
              </p>
            </div>
          </div>

          {/* Elevated 3-Card Bento Proof Grid (Exact Reference Replica) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 pt-2">
            
            {/* Card 1: Verified Releases & ROI */}
            <div className="lg:col-span-4 rounded-[28px] bg-white border border-[#E2E4E8] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] min-h-[280px] sm:min-h-[300px]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                  <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#059669] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                    CF
                  </div>
                  <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d97706] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                    VH
                  </div>
                  <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2563eb] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                    KP
                  </div>
                  <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e11d48] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                    MA
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#6B7280]">
                  50+ GLOBAL RELEASES
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-sans text-xs text-[#6B7280] font-medium block">
                  Earn back on your investment within 30 days
                </span>
                <h3 className="font-heading font-black text-5xl sm:text-6xl text-[#18191C] tracking-tight leading-none">
                  90%
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-[#6B7280] pt-0.5">
                  Return on investment (ROI)
                </p>
              </div>
            </div>

            {/* Card 2: Transaction Volume & Availability */}
            <div className="lg:col-span-4 rounded-[28px] bg-white border border-[#E2E4E8] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.03)] min-h-[280px] sm:min-h-[300px]">
              <div>
                <p className="font-sans text-xs sm:text-[13px] text-[#6B7280] font-normal leading-relaxed">
                  Through custom-tailored funnel &amp; e-commerce systems
                </p>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-heading font-black text-5xl sm:text-6xl text-[#18191C] tracking-tight leading-none">
                    $45M<span className="text-emerald-500 font-bold">+</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#6B7280]">
                    Revenue generated
                  </p>
                </div>

                <div className="pt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-sans text-xs text-[#6B7280] font-medium uppercase tracking-wider text-[11px]">
                    Available for Q2
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Matte Charcoal Dark Client Trust Card (Exact Reference Match) */}
            <div className="lg:col-span-4 rounded-[28px] bg-[#18191C] text-white p-7 sm:p-8 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.22)] min-h-[280px] sm:min-h-[300px]">
              <div>
                <p className="font-sans text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed">
                  We delivered 50+ projects worldwide, helping service-based companies secure more clients.
                </p>
              </div>

              <div className="pt-6 flex items-end justify-between">
                <div>
                  <h4 className="font-heading font-black text-5xl sm:text-6xl text-white tracking-tight leading-none">
                    4.8<span className="text-white/45 text-2xl font-light">/5</span>
                  </h4>
                  <div className="flex items-center gap-1 text-amber-400 mt-2">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <svg viewBox="0 0 64 36" fill="none" className="w-16 h-9 stroke-[#6B7280] stroke-[2.5] mb-2">
                    <path d="M4 28 L20 16 L32 24 L56 6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42 6 H56 V20" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block leading-tight">
                    TRUSTED BY
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white block leading-tight">
                    CLIENTS WORLDWIDE
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. FEATURED COVERFLOW 3D DEPTH SHOWCASE (MATCHING USER REFERENCE)
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="showcase"
        className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-[#EDEDF0] border-b border-[#E2E4E8] scroll-mt-24 font-sans text-center"
      >
        <div className="max-w-[1340px] w-full mx-auto">
          
          {/* Outer Rounded Studio Frame (Exact Reference Container) */}
          <div className="relative rounded-[36px] sm:rounded-[44px] bg-white border border-[#E2E4E8] py-12 sm:py-16 px-4 sm:px-8 lg:px-12 shadow-[0_12px_45px_rgba(0,0,0,0.03)] overflow-hidden">
            
            {/* Top Centered Header Block */}
            <div className="max-w-xl mx-auto space-y-2 mb-8 sm:mb-12 text-center">
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#18191C] tracking-tight leading-tight">
                What We&apos;ve Built
              </h2>
            </div>

            {/* 3D Depth Card Carousel Stage */}
            <div className="relative w-full max-w-[1020px] mx-auto h-[490px] sm:h-[420px] md:h-[380px] flex items-center justify-center">
              
              {/* Prev / Next Floating Circular Arrows */}
              <button
                type="button"
                onClick={handlePrevDeck}
                className="absolute left-1 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18191C] text-white hover:bg-black flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              <button
                type="button"
                onClick={handleNextDeck}
                className="absolute right-1 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18191C] text-white hover:bg-black flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
                aria-label="Next case study"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Coverflow Depth Cards */}
              {FEATURED_SLIDES.map((slide, idx) => {
                let diff = idx - activeDeckIdx;
                const total = FEATURED_SLIDES.length;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isCenter = diff === 0;
                const isRightPeek = diff === 1;
                const isLeftPeek = diff === -1;
                const isVisible = isCenter || isRightPeek || isLeftPeek;

                return (
                  <div
                    key={slide.id}
                    onClick={() => {
                      if (!isCenter) setActiveDeckIdx(idx);
                    }}
                    style={{
                      transform: isCenter
                        ? "translate(-50%, -50%) scale(1)"
                        : isRightPeek
                        ? "translate(calc(-50% + clamp(110px, 18vw, 210px)), -50%) scale(0.88)"
                        : isLeftPeek
                        ? "translate(calc(-50% - clamp(110px, 18vw, 210px)), -50%) scale(0.88)"
                        : `translate(calc(-50% + ${diff * 280}px), -50%) scale(0.75)`,
                      zIndex: isCenter ? 30 : isVisible ? 20 : 10,
                      opacity: isCenter ? 1 : isVisible ? 0.38 : 0,
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                    className={`absolute left-1/2 top-1/2 w-[92%] sm:w-[680px] md:w-[760px] lg:w-[820px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      !isCenter ? "cursor-pointer select-none" : ""
                    }`}
                  >
                    <div
                      className={`relative rounded-[28px] sm:rounded-[34px] bg-white border border-[#E5E7EB] p-4 sm:p-5 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center gap-5 sm:gap-6 text-left transition-all ${
                        isCenter ? "ring-1 ring-black/5" : ""
                      }`}
                    >
                      {/* Left Side: Clean Rounded Image Canvas */}
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          if (isCenter) handleOpenAppModal(slide);
                        }}
                        className="relative aspect-[4/3] md:aspect-square w-full md:w-[260px] lg:w-[290px] shrink-0 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#141518] border border-[#E5E7EB] cursor-pointer group"
                      >
                        <Image
                          src={slide.previewImage}
                          alt={slide.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                          priority={isCenter}
                        />
                      </div>

                      {/* Right Side: Editorial & Clean Metrics */}
                      <div className="flex-1 min-w-0 space-y-3 py-1">
                        
                        {/* Clean Client Name */}
                        <div>
                          <span className="font-heading font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#18191C]">
                            {slide.name.split(" ")[0]}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 className="font-heading font-black text-lg sm:text-xl lg:text-2xl text-[#18191C] tracking-tight leading-snug">
                            {slide.name}
                          </h3>
                          <p className="font-sans text-xs sm:text-[13px] text-[#6B7280] leading-relaxed line-clamp-2 mt-1">
                            {slide.description}
                          </p>
                        </div>

                        {/* Clean Read More Action */}
                        <div>
                          <button
                            type="button"
                            onClick={() => handleOpenAppModal(slide)}
                            className="inline-flex items-center gap-1.5 font-sans font-bold text-xs text-[#18191C] hover:opacity-75 transition-opacity cursor-pointer"
                          >
                            <span>Read More</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 3-Column Metrics */}
                        <div className="grid grid-cols-3 gap-3 pt-3.5 mt-2 border-t border-slate-100">
                          <div>
                            <div className="font-heading font-black text-base sm:text-lg text-[#18191C] tracking-tight leading-none">
                              {slide.metrics.stat1.value}
                            </div>
                            <div className="font-sans text-[10px] sm:text-[11px] text-[#6B7280] mt-1 leading-tight line-clamp-1">
                              {slide.metrics.stat1.label}
                            </div>
                          </div>
                          <div>
                            <div className="font-heading font-black text-base sm:text-lg text-[#18191C] tracking-tight leading-none">
                              {slide.metrics.stat2.value}
                            </div>
                            <div className="font-sans text-[10px] sm:text-[11px] text-[#6B7280] mt-1 leading-tight line-clamp-1">
                              {slide.metrics.stat2.label}
                            </div>
                          </div>
                          <div>
                            <div className="font-heading font-black text-base sm:text-lg text-[#18191C] tracking-tight leading-none">
                              {slide.metrics.stat3.value}
                            </div>
                            <div className="font-sans text-[10px] sm:text-[11px] text-[#6B7280] mt-1 leading-tight line-clamp-1">
                              {slide.metrics.stat3.label}
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* Pagination Indicators & Bottom CTA Button */}
            <div className="space-y-4 mt-6 sm:mt-8 flex flex-col items-center">
              
              {/* Clean Minimal Pagination Dots */}
              <div className="flex items-center justify-center gap-2">
                {FEATURED_SLIDES.map((_, i) => {
                  const isActive = i === activeDeckIdx;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveDeckIdx(i)}
                      className={`transition-all duration-200 rounded-full cursor-pointer ${
                        isActive
                          ? "w-6 h-1.5 bg-[#18191C]"
                          : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  );
                })}
              </div>

              {/* Clean Pill Button */}
              <div>
                <a
                  href="#directory"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#18191C] text-white hover:bg-black font-sans font-semibold text-xs tracking-tight shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  Explore all Case Studies
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. FULL APP STORE & SHOPIFY DIRECTORY (MATCHING REFERENCE DESIGN)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="directory" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-left font-sans bg-[#EDEDF0] border-b border-[#E2E4E8] scroll-mt-24">
        <div className="max-w-[1400px] mx-auto space-y-8">

          {/* Directory Header & Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#E2E4E8]">
            <div className="space-y-1">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#18191C] tracking-tight">
                All Applications &amp; Storefronts
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
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
                        ? "bg-[#18191C] text-white shadow-xs"
                        : "bg-white text-[#6B7280] hover:text-[#18191C] hover:bg-slate-50 border border-[#E2E4E8]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Clean Release Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredApps.map((app) => {
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
                  className="group rounded-[24px] bg-white border border-[#E2E4E8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-5 sm:p-6 hover:border-[#18191C]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer transition-all duration-300 flex flex-col justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#18191C]"
                >
                  <div className="space-y-4">
                    {/* Clean Preview Image */}
                    <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden bg-slate-100 border border-[#E2E4E8]/80">
                      <Image
                        src={app.previewImage}
                        alt={app.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Metadata & Title */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] block">
                        {app.category} • {app.subCategory}
                      </span>
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#18191C] leading-snug group-hover:text-black transition-colors">
                        {app.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-[13px] text-[#6B7280] leading-relaxed line-clamp-2">
                        {app.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Clean Bottom Action Row */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#6B7280] font-semibold text-[11px]">
                      {app.platformBadge}
                    </span>
                    <span className="inline-flex items-center gap-1 font-sans font-bold text-xs text-[#18191C] group-hover:translate-x-0.5 transition-transform">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. DETAILED APP STORE MODAL SHEET (ALL DETAILS + DOWNLOAD OPTIONS)
          ══════════════════════════════════════════════════════════════════ */}
      {selectedApp && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[24px] border border-[#E2E4E8] p-6 sm:p-8 space-y-6 shadow-2xl max-h-[92vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedApp(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#18191C] transition-colors cursor-pointer rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header: Clean Title & Primary Action */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pr-8">
              <div className="space-y-1 min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] block">
                  {selectedApp.category} • {selectedApp.subCategory}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#18191C] leading-tight">
                  {selectedApp.name}
                </h3>
                <p className="font-sans text-xs text-[#6B7280]">
                  {selectedApp.client} • Released {selectedApp.year}
                </p>
              </div>

              {/* Primary Contact / Build Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedApp(null);
                  openContact();
                }}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#18191C] text-white font-sans font-bold text-xs sm:text-sm hover:bg-black transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span>Request Custom Build</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* App Store Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-50 border border-[#E2E4E8] text-center text-xs">
              <div>
                <span className="block text-[10.5px] text-[#6B7280] uppercase tracking-wider font-semibold">
                  Customer Rating
                </span>
                <span className="font-bold text-[#18191C] text-sm flex items-center justify-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                  {selectedApp.rating}
                </span>
                <span className="block text-[10px] text-[#6B7280] mt-0.5">
                  {selectedApp.reviewsCount}
                </span>
              </div>

              <div className="border-x border-[#E2E4E8]">
                <span className="block text-[10.5px] text-[#6B7280] uppercase tracking-wider font-semibold">
                  Platform
                </span>
                <span className="font-bold text-[#18191C] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.platformBadge}
                </span>
                <span className="block text-[10px] text-emerald-600 font-semibold mt-0.5">
                  Live in Production
                </span>
              </div>

              <div>
                <span className="block text-[10.5px] text-[#6B7280] uppercase tracking-wider font-semibold">
                  Architecture
                </span>
                <span className="font-bold text-[#18191C] text-sm block mt-0.5 truncate px-1">
                  {selectedApp.category}
                </span>
                <span className="block text-[10px] text-[#6B7280] mt-0.5">
                  Arkanet Verified
                </span>
              </div>
            </div>

            {/* Download & Access Options */}
            <div className="space-y-2 pt-1">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280] block">
                Download &amp; Store Access Options
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedApp(null);
                    openContact();
                  }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E4E8] hover:border-[#18191C]/40 hover:bg-slate-50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    {selectedApp.downloads.primaryType === "apple" ? (
                      <AppleLogo className="w-5 h-5 text-[#18191C]" />
                    ) : selectedApp.downloads.primaryType === "shopify" ? (
                      <ShopifyLogo className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Download className="w-5 h-5 text-[#18191C]" />
                    )}
                    <div className="text-left">
                      <span className="block font-sans font-bold text-xs text-[#18191C]">
                        {selectedApp.downloads.primaryLabel}
                      </span>
                      <span className="block font-sans text-[10.5px] text-[#6B7280]">
                        Official Storefront Link
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#18191C] transition-colors" />
                </button>

                {selectedApp.downloads.secondaryLabel && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedApp(null);
                      openContact();
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E4E8] hover:border-[#18191C]/40 hover:bg-slate-50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      {selectedApp.downloads.secondaryType === "android" ? (
                        <PlayLogo className="w-5 h-5 text-[#18191C]" />
                      ) : (
                        <ExternalLink className="w-4.5 h-4.5 text-[#18191C]" />
                      )}
                      <div className="text-left">
                        <span className="block font-sans font-bold text-xs text-[#18191C]">
                          {selectedApp.downloads.secondaryLabel}
                        </span>
                        <span className="block font-sans text-[10.5px] text-[#6B7280]">
                          Direct Access &amp; Demo
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#18191C] transition-colors" />
                  </button>
                )}
              </div>
            </div>

            {/* Screenshots Gallery with Thumbnails */}
            <div className="space-y-2 pt-1">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280] block">
                Interface Screenshots Preview
              </span>

              {/* Main Screenshot Preview */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-[#E2E4E8]">
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
                          ? "border-[#18191C] ring-2 ring-[#18191C]/20 scale-102"
                          : "border-[#E2E4E8] opacity-60 hover:opacity-100"
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
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280]">
                About The Application
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedApp.description}
              </p>
            </div>

            {/* Key Deliverables & Architectural Features */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280]">
                Key Features &amp; Deliverables
              </h4>
              <div className="space-y-1.5">
                {selectedApp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-1.5 pt-1 border-t border-slate-100">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280]">
                Engineered With
              </h4>
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-sans text-[11px] font-medium text-[#18191C] bg-[#EDEDF0] border border-[#E2E4E8] px-2.5 py-0.5 rounded-[4px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Inquire */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="font-sans text-[11px] text-[#6B7280]">
                Compatibility: {selectedApp.platforms}
              </span>
              
              <button
                type="button"
                onClick={() => {
                  setSelectedApp(null);
                  openContact();
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#18191C] text-white font-sans font-bold text-xs hover:bg-black transition-all cursor-pointer shadow-xs ml-auto"
              >
                <span>Request Custom Build &amp; Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── 5. CLIENT REVIEWS & VERIFIED STORIES (EXCELLENT EVERYWHERE) ── */}
      <HomeReviewsSection />

      {/* ── 6. CLOSING CTA ── */}
      <AboutCTA onOpenBooking={openContact} bgColor="bg-[#EDEDF0]" />

      {/* ── 7. FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-[#18191C]" />
    </main>
  );
}
