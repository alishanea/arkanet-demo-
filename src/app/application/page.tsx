"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Sparkles,
  ShieldCheck,
  Globe,
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
  heroImage: string;
  screenshots: string[];
  liveUrl?: string;
  description: string;
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
    id: "careflow-health",
    name: "CareFlow Telehealth",
    category: "Mobile Apps",
    subCategory: "Medical & Telehealth",
    tagline: "Encrypted patient portal with live video encounters and automated lab routing.",
    rating: 4.9,
    reviewsCount: "1.2k ratings",
    platformBadge: "iOS & Android",
    iconBg: "bg-emerald-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://careflow.demo.arkanet.com",
    description:
      "A patient-first healthcare mobile application engineered with encrypted WebRTC video encounters, instant diagnostic report delivery, and direct prescription routing.",
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
    id: "vesper-horology",
    name: "Vesper Luxury Horology",
    category: "Shopify Stores",
    subCategory: "Luxury Watches & Jewelry",
    tagline: "60fps WebGL 3D watch customizer with sub-second edge checkout delivery.",
    rating: 4.9,
    reviewsCount: "860 ratings",
    platformBadge: "Shopify Plus",
    iconBg: "bg-amber-600",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1000&auto=format&fit=crop",
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
    id: "kinetics-movement",
    name: "Kinetics Athlete Coach",
    category: "Mobile Apps",
    subCategory: "Health & Fitness",
    tagline: "On-device neural computer vision for real-time 30fps athletic movement analysis.",
    rating: 4.8,
    reviewsCount: "2.4k ratings",
    platformBadge: "iOS & watchOS",
    iconBg: "bg-blue-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1800&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
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
    id: "stonecraft-surfaces",
    name: "StoneCraft Surfaces",
    category: "Shopify Stores",
    subCategory: "Home & Architecture",
    tagline: "Architectural stone sampling, 2K slab inspector, and contractor wholesale portal.",
    rating: 4.9,
    reviewsCount: "430 ratings",
    platformBadge: "Shopify Plus",
    iconBg: "bg-slate-700",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
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
    id: "parkease-mobility",
    name: "ParkEase Smart Mobility",
    category: "Mobile Apps",
    subCategory: "Navigation & Transit",
    tagline: "Connected Apple CarPlay transit navigator with live telemetry across 42,000+ bays.",
    rating: 4.9,
    reviewsCount: "5.8k ratings",
    platformBadge: "iOS & Android",
    iconBg: "bg-indigo-600",
    iconType: "mobile",
    previewImage:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1800&auto=format&fit=crop",
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
    id: "moda-atelier",
    name: "Moda Atelier Milano",
    category: "Shopify Stores",
    subCategory: "Luxury Fashion",
    tagline: "Interactive runway video shopping and invitation-gated private client salon.",
    rating: 4.8,
    reviewsCount: "1.9k ratings",
    platformBadge: "Shopify Plus",
    iconBg: "bg-stone-800",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1800&auto=format&fit=crop",
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
    id: "aura-botanicals",
    name: "Aura Living Botanicals",
    category: "Shopify Stores",
    subCategory: "Beauty & Wellness",
    tagline: "Clean organic skincare with personalized regimens and subscription replenishment.",
    rating: 4.8,
    reviewsCount: "3.1k ratings",
    platformBadge: "Shopify Store",
    iconBg: "bg-rose-600",
    iconType: "shopify",
    previewImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1800&auto=format&fit=crop",
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
    reviewsCount: "640 ratings",
    platformBadge: "Web & Cloud",
    iconBg: "bg-cyan-700",
    iconType: "saas",
    previewImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop",
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

  // Auto-sliding state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const openContact = () => setContactOpen(true);

  // Auto-slide effect every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_SLIDES.length);
    }, 4500);

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FEATURED_SLIDES.length);
  };

  const filteredApps =
    selectedCategory === "All"
      ? APPLICATIONS
      : APPLICATIONS.filter((item) => item.category === selectedCategory);

  const handleOpenAppModal = (app: ApplicationItem) => {
    setSelectedApp(app);
    setActiveScreenshotIdx(0);
  };

  const activeFeatured = FEATURED_SLIDES[currentSlide];

  return (
    <main className="min-h-screen bg-[#f4f6fb] text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      {/* ── HEADER ── */}
      <Header onOpenBooking={openContact} />

      {/* ── CONTACT MODAL ── */}
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. PROPER FIRST PAGE (LIGHT BACKGROUND HERO WITH AUTO-SLIDING PRODUCTS) ── */}
      <section
        className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-between pt-32 sm:pt-36 lg:pt-40 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white text-[#202B61] border-b border-slate-200/80"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Auto-Sliding Product Showcase Layer (Light Airy Treatment) */}
        {FEATURED_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105 pointer-events-none"
            }`}
          >
            <Image
              src={slide.heroImage}
              alt={slide.name}
              fill
              priority={idx === 0}
              className="object-cover transition-transform duration-1000 ease-out opacity-[0.14] mix-blend-luminosity filter blur-[0.5px]"
            />
            {/* Luminous Light Gradient Overlay ensuring 100% crisp navy typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
          </div>
        ))}

        {/* Top Content: Proper Authoritative Heading & Subheading (Deep Navy #202B61) */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto space-y-4 sm:space-y-5 text-left">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.12] max-w-4xl text-balance">
            Applications, Shopify Stores &amp; Enterprise Platforms
          </h1>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#202B61]/80 leading-relaxed font-normal max-w-3xl">
            Explore our verified portfolio of production mobile apps, high-converting Shopify websites, and autonomous systems engineered for global enterprises.
          </p>

        </div>

        {/* Bottom Floating Light Card: Active Product Info, Small Name & Description */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto pt-8 sm:pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-4.5 sm:p-6 lg:p-7 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgba(32,43,97,0.06)]">
            
            {/* Active Product Icon + Name + Description */}
            <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0">
              
              {/* Product Squircle Icon */}
              <div
                className={`w-13 h-13 sm:w-16 sm:h-16 rounded-2xl ${activeFeatured.iconBg} text-white flex items-center justify-center shrink-0 shadow-md`}
              >
                {activeFeatured.category === "Shopify Stores" ? (
                  <ShoppingBag className="w-7 h-7 stroke-[1.8]" />
                ) : activeFeatured.iconType === "mobile" ? (
                  <Smartphone className="w-7 h-7 stroke-[1.8]" />
                ) : (
                  <Layers className="w-7 h-7 stroke-[1.8]" />
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-0.5 sm:space-y-1 min-w-0 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#202B61]">
                    Featuring: {activeFeatured.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-[#202B61]/80 font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 stroke-amber-500" />
                    {activeFeatured.rating}
                  </span>
                  <span className="text-[11px] text-[#202B61]/60">
                    ({activeFeatured.reviewsCount})
                  </span>
                </div>

                <h2 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] leading-tight truncate">
                  {activeFeatured.name}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#202B61]/75 leading-snug line-clamp-1 max-w-xl">
                  {activeFeatured.tagline}
                </p>
              </div>

            </div>

            {/* Controls & Action Button */}
            <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t border-slate-100 md:border-t-0">
              
              {/* Progress Dots & Slide Arrows */}
              <div className="flex items-center gap-2 mr-2">
                <div className="flex items-center gap-1.5">
                  {FEATURED_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide
                          ? "w-6 bg-[#202B61]"
                          : "w-2 bg-[#202B61]/25 hover:bg-[#202B61]/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${slide.name}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1 ml-2">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-[#202B61] border border-slate-200/90 shadow-xs cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-[#202B61] border border-slate-200/90 shadow-xs cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* View Details CTA */}
              <button
                type="button"
                onClick={() => handleOpenAppModal(activeFeatured)}
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm hover:bg-[#202B61]/90 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>

            </div>

          </div>
        </div>

      </section>

      {/* ── 2. VISUAL APP STORE DIRECTORY GRID (IMAGE PREVIEW + APP STORE BADGES) ── */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 text-left font-sans bg-[#f4f6fb]">
        <div className="max-w-[1400px] mx-auto space-y-6">

          {/* Section Heading & Category Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="space-y-1">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight">
                All Applications &amp; Storefronts
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#202B61]/70">
                Verified customer ratings, production releases, and architectural breakdowns.
              </p>
            </div>

            {/* Segmented Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#202B61] text-white shadow-xs"
                        : "bg-white text-[#202B61]/75 hover:text-[#202B61] hover:bg-slate-100 border border-slate-200/90"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                  className="group rounded-[6px] bg-white border border-slate-200/90 p-4 sm:p-5 hover:border-[#202B61]/40 hover:shadow-[0_8px_24px_rgba(32,43,97,0.07)] cursor-pointer transition-all duration-200 flex flex-col justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]"
                >
                  <div className="space-y-3.5">
                    
                    {/* Header: App Store Icon + Identity + GET Button */}
                    <div className="flex items-center justify-between gap-3">
                      
                      {/* Left: App Icon & Name */}
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Squircle App Icon */}
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${app.iconBg} text-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.12)] group-hover:scale-103 transition-transform`}
                        >
                          {isShopify ? (
                            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                          ) : app.iconType === "mobile" ? (
                            <Smartphone className="w-5 h-5 stroke-[1.8]" />
                          ) : (
                            <Layers className="w-5 h-5 stroke-[1.8]" />
                          )}
                        </div>

                        {/* Title & Category */}
                        <div className="min-w-0 space-y-0.5">
                          <h3 className="font-heading font-bold text-[14.5px] sm:text-[15px] text-[#202B61] leading-tight truncate">
                            {app.name}
                          </h3>
                          <p className="font-sans text-[11.5px] text-[#202B61]/70 truncate">
                            {app.subCategory}
                          </p>
                        </div>
                      </div>

                      {/* Right: App Store 'GET' Action Pill */}
                      <span className="shrink-0 inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 group-hover:bg-[#202B61] text-[#202B61] group-hover:text-white font-sans font-bold text-xs tracking-tight transition-colors duration-200">
                        GET
                      </span>

                    </div>

                    {/* Middle: Clean Interface Picture Preview */}
                    <div className="relative aspect-[16/10] w-full rounded-[4px] overflow-hidden bg-slate-100 border border-slate-200/80">
                      <Image
                        src={app.previewImage}
                        alt={app.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#202B61]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="bg-white/95 backdrop-blur-xs text-[#202B61] text-xs font-bold px-3 py-1.5 rounded-[4px] shadow-sm flex items-center gap-1.5">
                          <span>View Screenshots &amp; Download</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Short Tagline / Summary */}
                    <p className="font-sans text-xs text-[#202B61]/80 leading-relaxed line-clamp-2">
                      {app.tagline}
                    </p>

                  </div>

                  {/* Bottom: Customer Rating & Platform Tag */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11.5px]">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                      <span>{app.rating}</span>
                      <span className="text-[#202B61]/55 font-normal ml-0.5">
                        ({app.reviewsCount})
                      </span>
                    </div>

                    <span className="text-[#202B61]/70 font-medium bg-slate-50 px-2 py-0.5 rounded-[4px] border border-slate-200/70">
                      {app.platformBadge}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. DETAILED APP STORE MODAL SHEET (ALL DETAILS + DOWNLOAD OPTIONS) ── */}
      {selectedApp && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[8px] border border-slate-200/90 p-5 sm:p-7 space-y-5 shadow-2xl max-h-[92vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedApp(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-[#202B61] transition-colors cursor-pointer rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* App Store Top Row: Icon + Name + Primary Download */}
            <div className="flex items-start justify-between gap-4 pr-8">
              <div className="flex items-center gap-3.5 sm:gap-4">
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
                className="shrink-0 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm hover:bg-[#202B61]/90 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>GET</span>
              </button>
            </div>

            {/* App Store Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-[6px] bg-slate-50 border border-slate-200/70 text-center text-xs">
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
                  className="flex items-center justify-between p-3 rounded-[6px] bg-white border border-slate-200 hover:border-[#202B61]/40 hover:bg-slate-50 transition-all cursor-pointer group"
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
                    className="flex items-center justify-between p-3 rounded-[6px] bg-white border border-slate-200 hover:border-[#202B61]/40 hover:bg-slate-50 transition-all cursor-pointer group"
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
              <div className="relative aspect-[16/9] w-full rounded-[6px] overflow-hidden bg-slate-100 border border-slate-200/80">
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
                      className={`relative w-20 h-12 rounded-[4px] overflow-hidden border cursor-pointer transition-all ${
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-[#202B61] text-white font-sans font-bold text-xs hover:bg-[#202B61]/90 transition-all cursor-pointer shadow-xs ml-auto"
              >
                <span>Request Custom Build &amp; Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
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
