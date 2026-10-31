"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ExternalLink,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Terminal,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Code2,
  Layers,
  Copy,
  Check,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";

type ProductCategory =
  | "All"
  | "Mobile Apps"
  | "Shopify E-Commerce"
  | "AI & SaaS Tools"
  | "Developer Kits";

interface Product {
  id: string;
  name: string;
  category: "Mobile Apps" | "Shopify E-Commerce" | "AI & SaaS Tools" | "Developer Kits";
  tagline: string;
  description: string;
  image: string;
  version: string;
  platforms: string[];
  features: string[];
  techStack: string[];
  downloads: {
    primaryLabel: string;
    primaryIcon: "apple" | "android" | "shopify" | "cloud" | "download";
    primaryUrl: string;
    secondaryLabel?: string;
    secondaryUrl?: string;
    demoUrl?: string;
  };
}

const PRODUCTS: Product[] = [
  {
    id: "careflow-health",
    name: "CareFlow Telehealth & Diagnostic Portal",
    category: "Mobile Apps",
    tagline: "HIPAA-Compliant Patient Portal & Live Video Encounters",
    description:
      "Native iOS and Android patient mobile application featuring encrypted WebRTC video visits, automated prescription routing, lab report access, and clinic queue management.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    version: "v2.4.1 Production Release",
    platforms: ["iOS 16+", "Android 12+", "watchOS", "iPadOS"],
    features: [
      "End-to-end encrypted WebRTC telehealth rooms",
      "Instant push notifications for diagnostics & lab alerts",
      "One-tap appointment rescheduling and biometric login",
      "SOC2 & HIPAA compliant encrypted patient storage",
    ],
    techStack: ["React Native", "TypeScript", "WebRTC", "HIPAA Vault", "GraphQL"],
    downloads: {
      primaryLabel: "Download on App Store",
      primaryIcon: "apple",
      primaryUrl: "https://apps.apple.com",
      secondaryLabel: "Get on Google Play",
      secondaryUrl: "https://play.google.com",
      demoUrl: "https://careflow.demo.arkanet.com",
    },
  },
  {
    id: "vesper-horology",
    name: "Vesper Luxury E-Commerce & 3D Configurator",
    category: "Shopify E-Commerce",
    tagline: "High-Conversion Headless Shopify Storefront Architecture",
    description:
      "Production-ready Shopify Plus theme and WebGL 3D product configurator engineered for high-ticket luxury brands, delivering sub-second edge page loads and 60fps real-time material previews.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    version: "v3.0.0 Storefront API",
    platforms: ["Shopify Plus", "Headless Hydrogen", "Liquid Online Store 2.0"],
    features: [
      "Real-time 3D WebGL watch configurator (bezels, straps, metals)",
      "Sub-second Core Web Vitals on Edge CDN delivery",
      "Automated multi-currency conversion and localized tax checkout",
      "Dynamic bundle discounts and cart upsell drawer",
    ],
    techStack: ["Shopify Plus", "Next.js 15", "Three.js / WebGL", "Stripe", "Tailwind CSS"],
    downloads: {
      primaryLabel: "Install Shopify Theme",
      primaryIcon: "shopify",
      primaryUrl: "#install-shopify",
      secondaryLabel: "View Theme Docs",
      secondaryUrl: "#docs",
      demoUrl: "https://vesper.demo.arkanet.com",
    },
  },
  {
    id: "neuraldesk-ai",
    name: "NeuralDesk Enterprise AI & RAG Engine",
    category: "AI & SaaS Tools",
    tagline: "Private Enterprise Knowledge Retrieval & LLM Assistant",
    description:
      "Self-hosted enterprise AI intelligence platform connecting directly to corporate PDFs, databases, and customer ticketing systems with zero third-party telemetry or data leakage.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    version: "v1.8.0 Enterprise Build",
    platforms: ["Docker Container", "Kubernetes Helm", "REST API", "Web UI"],
    features: [
      "Self-hosted pgvector similarity search & document chunking",
      "Role-based access control (RBAC) on departmental file trees",
      "Multi-model routing: OpenAI, Claude 3.5, or local Llama 3 weights",
      "Pre-built web chat widget with custom brand styling",
    ],
    techStack: ["FastAPI", "Python", "pgvector", "LangChain", "Docker", "Next.js"],
    downloads: {
      primaryLabel: "Deploy Docker Image",
      primaryIcon: "cloud",
      primaryUrl: "#docker-pull",
      secondaryLabel: "Explore API Specs",
      secondaryUrl: "#api-docs",
      demoUrl: "https://neuraldesk.demo.arkanet.com",
    },
  },
  {
    id: "pulsefit-coach",
    name: "PulseFit Biomechanical Movement Analyzer",
    category: "Mobile Apps",
    tagline: "Computer-Vision On-Device Form & Repetition Tracker",
    description:
      "Mobile fitness application utilizing device neural engines for real-time 30fps posture analysis, joint angle tracking, and instant audio coaching during athletic lifts.",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
    version: "v2.1.0 App Store Build",
    platforms: ["iOS 17+", "watchOS 10+", "Android 13+"],
    features: [
      "100% on-device CoreML / TFLite pose estimation (no server lag)",
      "Instant audible rep feedback and safety lockout warnings",
      "Apple Health & Google Fit biometrics synchronization",
      "Offline workout mode with cloud backup on reconnect",
    ],
    techStack: ["Swift", "Kotlin", "CoreML", "TensorFlow Lite", "HealthKit"],
    downloads: {
      primaryLabel: "Download for iOS",
      primaryIcon: "apple",
      primaryUrl: "https://apps.apple.com",
      secondaryLabel: "Download for Android",
      secondaryUrl: "https://play.google.com",
      demoUrl: "https://pulsefit.demo.arkanet.com",
    },
  },
  {
    id: "stonecraft-showroom",
    name: "StoneCraft Headless Materials Showroom",
    category: "Shopify E-Commerce",
    tagline: "Architectural Stone Sampling & Room Visualizer Storefront",
    description:
      "Bespoke Shopify e-commerce engine engineered for architectural material distributors. Features high-res surface streaming, physical sample ordering, and commercial contractor trade portal.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    version: "v2.2.0 Production",
    platforms: ["Shopify Storefront API", "Liquid OS 2.0", "Next.js"],
    features: [
      "Real-time 2K marble and granite slab texture viewer",
      "Architectural sample request cart with automated dispatch tracking",
      "Contractor trade tier pricing with verified tax ID sign-in",
      "Integrated shipping calculator for bulk pallet deliveries",
    ],
    techStack: ["Shopify Liquid", "Tailwind CSS", "Storefront API", "Edge CDN"],
    downloads: {
      primaryLabel: "Get Shopify Theme",
      primaryIcon: "shopify",
      primaryUrl: "#get-theme",
      secondaryLabel: "Live Demo Store",
      secondaryUrl: "#demo-store",
      demoUrl: "https://stonecraft.demo.arkanet.com",
    },
  },
  {
    id: "whatsapp-commerce-bot",
    name: "Arkanet WhatsApp Commerce Gateway",
    category: "AI & SaaS Tools",
    tagline: "Turnkey Meta Cloud API Ordering & Payment Automation",
    description:
      "Transactional conversational engine connecting official Meta WhatsApp Cloud API directly to inventory catalogs, Stripe / Razorpay payments, and automated dispatch tracking.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    version: "v3.2 Cloud Production",
    platforms: ["Meta Cloud API", "Node.js Microservice", "Webhooks"],
    features: [
      "In-chat product catalog browsing with multi-item shopping cart",
      "Instant payment links via Stripe, Razorpay, or cash on delivery",
      "Automated order confirmation and courier tracking messages",
      "Seamless human agent escalation during business hours",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "WhatsApp API"],
    downloads: {
      primaryLabel: "Connect WhatsApp API",
      primaryIcon: "cloud",
      primaryUrl: "#connect-whatsapp",
      secondaryLabel: "Documentation",
      secondaryUrl: "#docs",
      demoUrl: "https://wa.me/demo",
    },
  },
];

const CATEGORIES: ProductCategory[] = [
  "All",
  "Mobile Apps",
  "Shopify E-Commerce",
  "AI & SaaS Tools",
];

export default function ApplicationShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All");
  const [contactOpen, setContactOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const openContact = () => setContactOpen(true);

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("npx create-arkanet-app@latest my-platform");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f4f6fb] text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. ARCHITECTURAL HERO HEADER ── */}
      <section className="relative w-full pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left">
        <div className="max-w-[1400px] mx-auto space-y-8">
          
          {/* Top Category Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#202B61]/5 border border-[#202B61]/10 text-xs font-bold text-[#202B61] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#202B61]" />
              <span>Arkanet Product Labs &amp; Releases</span>
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              · Production-Ready Code &amp; Deployable Assets
            </span>
          </div>

          {/* Majestic Editorial Headline */}
          <div className="max-w-4xl space-y-4">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.1] text-wrap-balance">
              Applications, Shopify Stores &amp; Enterprise AI Products
            </h1>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#202B61]/80 font-normal leading-relaxed max-w-3xl">
              Explore our portfolio of production-grade mobile applications, high-converting Shopify websites, and autonomous AI systems built for commercial scale.
            </p>
          </div>

          {/* Interactive Category Selector Filter Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-[4px] text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#202B61] text-white shadow-xs"
                      : "bg-[#f8fafc] text-[#202B61]/75 hover:text-[#202B61] hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 2. PRODUCT SHOWCASE GRID ── */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 text-left font-sans">
        <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10">

          {/* Results Count Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 text-xs sm:text-sm text-[#202B61]/70 font-medium">
            <span>
              Showing <strong className="text-[#202B61]">{filteredProducts.length}</strong> production products
            </span>
            <span className="hidden sm:inline-block">
              All downloads tested on production infrastructure
            </span>
          </div>

          {/* Product Cards Stack */}
          <div className="space-y-6 sm:space-y-8">
            {filteredProducts.map((product, idx) => {
              const rowNum = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={product.id}
                  className="rounded-[4px] bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-none transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Product Information & Features (Span 7) */}
                    <div className="lg:col-span-7 space-y-5">
                      
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center gap-2.5 text-xs">
                        <span className="font-heading font-black text-slate-400">
                          #{rowNum}
                        </span>
                        <span className="h-3 w-[1px] bg-slate-200" />
                        <span className="font-bold uppercase tracking-wider text-[#202B61]">
                          {product.category}
                        </span>
                        <span className="h-3 w-[1px] bg-slate-200" />
                        <span className="px-2 py-0.5 rounded-[4px] bg-[#202B61]/5 text-[#202B61] font-semibold text-[11px]">
                          {product.version}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1.5">
                        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight leading-snug">
                          {product.name}
                        </h2>
                        <p className="font-sans font-semibold text-sm sm:text-base text-[#202B61]/70">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal">
                        {product.description}
                      </p>

                      {/* Feature Bullet List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {product.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#202B61]/85">
                            <CheckCircle2 className="w-4 h-4 text-[#202B61] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        {product.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-sans text-[11px] font-medium text-[#202B61]/80 bg-[#f8fafc] border border-slate-200/80 px-2.5 py-1 rounded-[4px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Download & Action Buttons */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={openContact}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm tracking-tight hover:bg-[#202B61]/90 active:scale-95 transition-all shadow-xs cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          <span>{product.downloads.primaryLabel}</span>
                        </button>

                        {product.downloads.secondaryLabel && (
                          <button
                            type="button"
                            onClick={openContact}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[4px] bg-white border border-slate-200 hover:border-slate-300 text-[#202B61] font-sans font-bold text-xs sm:text-sm tracking-tight active:scale-95 transition-all cursor-pointer"
                          >
                            <span>{product.downloads.secondaryLabel}</span>
                          </button>
                        )}

                        {product.downloads.demoUrl && (
                          <button
                            type="button"
                            onClick={openContact}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#202B61]/80 hover:text-[#202B61] transition-colors ml-auto group cursor-pointer"
                          >
                            <span>Live Product Demo</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>
                        )}
                      </div>

                    </div>

                    {/* Right Column: Visual Product Media (Span 5) */}
                    <div className="lg:col-span-5">
                      <div className="group relative aspect-[16/10] sm:aspect-[16/10] rounded-[4px] overflow-hidden border border-slate-200/90 bg-slate-100 shadow-none">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        
                        {/* Platform Badge Overlay */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-slate-200/70 text-[11px] font-bold text-[#202B61] shadow-xs">
                          {product.platforms[0]}
                        </div>

                        {/* Bottom Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#202B61]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white text-xs font-sans font-medium">
                            Ready for immediate enterprise deployment
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 3. DEVELOPER QUICKSTART CLI & WHITE-LABEL LICENSING ── */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80 text-left font-sans">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[4px] bg-[#f8fafc] border border-slate-200/90 p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#202B61]/5 text-xs font-bold text-[#202B61] uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Developer CLI &amp; White-Label Licensing</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight">
                  Need a customized white-label deployment?
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal">
                  All Arkanet applications, Shopify engines, and AI pipelines can be custom-branded, integrated into your proprietary databases, and hosted on your private cloud VPC.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={openContact}
                    className="px-5 py-2.5 rounded-[4px] bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm tracking-tight hover:bg-[#202B61]/90 cursor-pointer shadow-xs"
                  >
                    Request Custom Build &amp; Source License
                  </button>
                  <button
                    type="button"
                    onClick={openContact}
                    className="px-4 py-2.5 rounded-[4px] bg-white border border-slate-200 text-[#202B61] font-sans font-bold text-xs sm:text-sm hover:border-slate-300 cursor-pointer"
                  >
                    Schedule Architectural Review
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="lg:col-span-5">
                <div className="rounded-[4px] bg-[#202B61] text-white p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-3 border border-slate-800 shadow-none">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/10 text-xs">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <span>bash</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-200">
                    <code>npx create-arkanet-app@latest</code>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy command"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-slate-400 text-xs pt-1 font-sans">
                    Scaffolds complete multi-tenant mobile apps, Shopify Plus stores, and AI RAG pipelines in seconds.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CLOSING HEADLINE CTA ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── 5. FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}

