"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Code,
  Monitor,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Layout,
  Database,
  Cpu,
  Layers,
  Search,
  Check,
  X,
  Gauge,
  Sparkles,
  ShoppingBag,
  Globe2,
  FileText,
  Sliders,
  ChevronRight,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { CAPABILITIES_DATA } from "@/lib/capabilitiesData";

// Interactive showcase archetypes for website clients
const WEBSITE_SHOWCASE_TABS = [
  {
    id: "corporate",
    label: "Corporate & B2B Lead Gen",
    heading: "Enterprise Authority & Pipeline Generation",
    description:
      "Engineered for high-growth firms that require an undeniable market presence, trust-building authority, and friction-free lead capture pathways.",
    metricValue: "0.64s",
    metricLabel: "First Contentful Paint",
    secondaryMetric: "+148% Demo Bookings",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "HubSpot CRM Sync", "Edge Caching"],
    features: [
      "Sub-second edge rendering via Vercel Edge Network",
      "Dynamic lead routing directly to your sales CRM",
      "Interactive case studies with high-fidelity media",
      "Automated OpenGraph and rich snippet previews",
    ],
  },
  {
    id: "ecommerce",
    label: "Headless eCommerce",
    heading: "Sub-Second Storefronts & High-AOV Checkouts",
    description:
      "D2C and omnichannel retail experiences built on headless commerce APIs, delivering zero-lag catalog navigation, instant search, and unified multi-currency checkout.",
    metricValue: "99/100",
    metricLabel: "Mobile Performance Score",
    secondaryMetric: "+32% Cart Completion",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    tags: ["Shopify Storefront API", "React 19", "Stripe Multi-Currency", "Algolia Search"],
    features: [
      "Instant faceted search and predictive inventory filtering",
      "Slide-out slide-over cart drawer with cross-sell mechanics",
      "Bilingual Arabic (RTL) & English localization",
      "Omnichannel checkout with Apple Pay, Google Pay & Tabby",
    ],
  },
  {
    id: "saas",
    label: "SaaS & Web Dashboards",
    heading: "Customer Portals & Interactive Web Platforms",
    description:
      "Interactive web platforms combining marketing excellence with authenticated customer workspaces, real-time analytics, and secure billing.",
    metricValue: "100%",
    metricLabel: "Responsive Touch Fluidity",
    secondaryMetric: "99.99% Uptime SLA",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tags: ["App Router", "Supabase Auth", "PostgreSQL", "Tailwind UI", "Server Actions"],
    features: [
      "Role-based access control with biometric / passkey auth",
      "Real-time data visualization with interactive charts",
      "Self-service billing and subscription management",
      "Automated transactional email and webhook pipeline",
    ],
  },
];

// 4 Web Archetypes
const WEB_ARCHETYPES = [
  {
    title: "B2B Corporate & Lead Engines",
    subtitle: "Enterprise Presence & Pipeline Conversion",
    description:
      "We design authoritative digital front doors for corporate leaders, consultancies, and private equity firms that turn casual enterprise visitors into qualified sales conversations.",
    deliverables: [
      "Custom strategic UI/UX wireframes",
      "Instant edge rendering (< 0.8s LCP)",
      "CRM & marketing automation integrations",
      "Interactive calculators & lead magnets",
    ],
    idealFor: "Corporate firms, advisory groups, technology consultancies",
    icon: Monitor,
  },
  {
    title: "Headless eCommerce Storefronts",
    subtitle: "Frictionless Browsing & Elevated AOV",
    description:
      "Break free from rigid monolithic themes. We build custom headless front-ends connected to Shopify Plus or custom commerce engines with instant page transitions and slide-out carts.",
    deliverables: [
      "Headless Shopify / Medusa architecture",
      "Sub-second faceted product filtering",
      "Multi-currency (AED, SAR, USD, EUR)",
      "High-converting 1-step checkout integration",
    ],
    idealFor: "Luxury brands, high-growth D2C, omnichannel merchants",
    icon: ShoppingBag,
  },
  {
    title: "Customer Portals & Web Apps",
    subtitle: "Authenticated Platforms & Interactive Dashboards",
    description:
      "Custom web platforms providing your clients with a seamless digital workspace to access reports, book services, submit data, or collaborate with your team.",
    deliverables: [
      "Secure authentication & RBAC roles",
      "Interactive dashboards & data tables",
      "Payment gateway & invoice billing",
      "REST & GraphQL API integrations",
    ],
    idealFor: "SaaS startups, logistics companies, financial portals",
    icon: Layout,
  },
  {
    title: "Content Engines & Custom CMS",
    subtitle: "Zero-Bottleneck Publishing for Marketing Teams",
    description:
      "Empower your marketing team to build high-converting landing pages and publish rich editorial content without writing a single line of code or relying on engineering sprints.",
    deliverables: [
      "Sanity.io or Strapi headless CMS setup",
      "Modular drag-and-drop page block schema",
      "Automated image compression & WebP/AVIF CDN",
      "Scheduled publishing & preview workflows",
    ],
    idealFor: "Media publications, marketing-heavy brands, dynamic portfolios",
    icon: FileText,
  },
];

// Template vs Arkanet Matrix
const COMPARISON_POINTS = [
  {
    criteria: "Page Load Speed",
    template: "3.5s – 5.2s (Bloated scripts, unoptimized assets, multiple CSS files)",
    arkanet: "< 0.8s (Static generation, edge caching, automated next-gen image compression)",
  },
  {
    criteria: "Mobile Experience",
    template: "Awkward responsive downscaling, small touch targets, horizontal scroll bugs",
    arkanet: "Engineered mobile-first with app-grade touch ergonomics and fluid typography",
  },
  {
    criteria: "Code Quality & Debt",
    template: "30+ third-party plugins that conflict, slow down hosting, and create security holes",
    arkanet: "Clean, bespoke TypeScript & Next.js 15 codebase with zero third-party plugin debt",
  },
  {
    criteria: "Technical SEO & Schema",
    template: "Generic automated meta tags, messy DOM hierarchy, poor crawl efficiency",
    arkanet: "Clean semantic HTML5, structured JSON-LD schema, automated XML sitemaps",
  },
  {
    criteria: "Brand Identity",
    template: "Recognizable generic template used by thousands of direct competitors",
    arkanet: "100% bespoke design system tailored precisely to your brand guidelines and audience",
  },
];

export default function CapabilityDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "website-development";
  const [contactOpen, setContactOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("corporate");

  // Project Estimator State
  const [estimatorType, setEstimatorType] = useState("Corporate Website");
  const [estimatorTimeline, setEstimatorTimeline] = useState("4-6 Weeks");

  const openContact = () => setContactOpen(true);

  // Fallback to website-development if slug not found
  const data = CAPABILITIES_DATA[slug] || CAPABILITIES_DATA["website-development"];
  const isWebsiteDevelopment = slug === "website-development";

  const selectedTabData =
    WEBSITE_SHOWCASE_TABS.find((t) => t.id === activeTab) || WEBSITE_SHOWCASE_TABS[0];

  return (
    <main className="min-h-screen bg-white text-[#0b1330] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── SECTION 1: HERO SECTION ── */}
      <section className="w-full bg-[#f4f6fb] pt-32 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-12 border-b border-slate-200/80 text-left">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0b1330] tracking-tight leading-[1.08] max-w-4xl">
            {data.title} <br />
            <span>{data.highlightText}</span>
          </h1>

          {data.subtitle && (
            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
              {data.subtitle}
            </p>
          )}

          {/* Quick Capability Practice Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8">
            {[
              { name: "Web & SaaS", slug: "website-development" },
              { name: "Mobile Apps", slug: "mobile-app-development" },
              { name: "Applied AI", slug: "applied-ai-ml" },
              { name: "Cloud & DevOps", slug: "cloud-devops-hosting" },
              { name: "UI/UX Design", slug: "graphic-design" },
              { name: "Business Systems", slug: "erp-business-management" },
            ].map((cap) => {
              const isActive = slug === cap.slug;
              return (
                <Link
                  key={cap.slug}
                  href={`/capabilities/${cap.slug}`}
                  className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-[#0b1330] text-white border border-[#0b1330]"
                      : "bg-white text-slate-600 hover:text-[#0b1330] border border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {cap.name}
                </Link>
              );
            })}
          </div>

          {/* Live Metric Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-slate-200/70 text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#0b1330] font-semibold">99/100</span> Core Web Vitals
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0b1330]" />
              <span className="text-[#0b1330] font-semibold">&lt; 0.8s</span> Edge LCP
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0b1330]" />
              <span>100% Bespoke Code</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0b1330]" />
              <span>Arabic RTL & Multi-Currency</span>
            </div>
          </div>

          {/* Interactive Browser Frame Showcase for Website Clients */}
          {isWebsiteDevelopment ? (
            <div className="mt-12 rounded-[5px] bg-[#ffffff] border border-slate-200/90 overflow-hidden shadow-none">
              {/* Browser Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-3.5 bg-[#f8fafc] border-b border-slate-200/90 text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                  </div>
                  <span className="ml-2 font-sans font-medium text-slate-400 hidden sm:inline">
                    Arkanet Web Engine v4.2
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-[3px] bg-white border border-slate-200 text-slate-600 max-w-xs truncate">
                  <span className="text-emerald-600 font-sans font-bold">🔒</span>
                  <span className="truncate">arkanet.ae/engineered-web/{activeTab}</span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-[4px] border border-slate-200">
                  {WEBSITE_SHOWCASE_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1 rounded-[3px] text-xs font-sans font-semibold transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-[#0b1330] text-white"
                          : "text-slate-600 hover:text-[#0b1330]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Showcase Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTabData.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                  >
                    {/* Left Details */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0b1330] tracking-tight leading-snug">
                          {selectedTabData.heading}
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                          {selectedTabData.description}
                        </p>
                      </div>

                      {/* Key Metric Highlight */}
                      <div className="grid grid-cols-2 gap-4 p-4 rounded-[4px] bg-[#f8fafc] border border-slate-200">
                        <div>
                          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0b1330]">
                            {selectedTabData.metricValue}
                          </div>
                          <div className="font-sans text-xs text-slate-500 font-medium">
                            {selectedTabData.metricLabel}
                          </div>
                        </div>
                        <div>
                          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0b1330]">
                            {selectedTabData.secondaryMetric}
                          </div>
                          <div className="font-sans text-xs text-slate-500 font-medium">
                            Validated Result
                          </div>
                        </div>
                      </div>

                      {/* Feature Bullet Points */}
                      <ul className="space-y-2.5">
                        {selectedTabData.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#0b1330] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {selectedTabData.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-[3px] bg-slate-100 text-slate-600 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={openContact}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#0b1330] hover:bg-[#172347] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                        >
                          <span>Consult on this Architecture</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right Visual Frame */}
                    <div className="lg:col-span-7">
                      <div className="relative aspect-[16/10] rounded-[5px] overflow-hidden border border-slate-200 bg-slate-100 group">
                        <img
                          src={selectedTabData.image}
                          alt={selectedTabData.heading}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-[3px] bg-[#0b1330]/90 backdrop-blur-md text-white text-xs font-mono">
                          Live Architecture Preview
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            /* Standard 3-device banner for other slugs */
            <div className="relative w-full rounded-[5px] bg-[#eef2f6] p-4 sm:p-8 lg:p-10 overflow-hidden border border-slate-200/90 shadow-none mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="hidden md:block relative aspect-[4/5] rounded-[5px] overflow-hidden border border-slate-200 shadow-none bg-white">
                  <img src={data.heroImages.left} alt="Left preview" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[16/10] sm:aspect-[4/5] md:aspect-[3/4] rounded-[5px] overflow-hidden border border-slate-200 shadow-none z-10 bg-white">
                  <img src={data.heroImages.center} alt="Center preview" className="w-full h-full object-cover" />
                </div>
                <div className="hidden md:block relative aspect-[4/5] rounded-[5px] overflow-hidden border border-slate-200 shadow-none bg-white">
                  <img src={data.heroImages.right} alt="Right preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 2: WEB ARCHETYPES (TAILORED FOR WEBSITE CLIENTS) ── */}
      {isWebsiteDevelopment && (
        <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 text-left bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330] tracking-tight leading-snug">
                Websites shaped around your business model, <br />
                never a generic template.
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Whether you need an enterprise lead generation engine, a sub-second headless eCommerce storefront, or an authenticated customer portal, we build clean, bespoke web architectures.
              </p>
            </div>

            {/* 4 Archetypes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {WEB_ARCHETYPES.map((arch, idx) => {
                const IconComponent = arch.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-[5px] bg-[#f8fafc] border border-slate-200/90 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-[4px] bg-[#0b1330] text-white flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0b1330] tracking-tight">
                          {arch.title}
                        </h3>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {arch.subtitle}
                        </div>
                      </div>
                      <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                        {arch.description}
                      </p>

                      <div className="pt-2 border-t border-slate-200/80">
                        <div className="text-xs font-bold text-[#0b1330] uppercase tracking-wider mb-2">
                          Core Deliverables:
                        </div>
                        <ul className="space-y-1.5">
                          {arch.deliverables.map((d, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0b1330]" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-500 italic">
                        Ideal for: {arch.idealFor}
                      </span>
                      <button
                        onClick={openContact}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b1330] hover:text-slate-700 uppercase tracking-wider cursor-pointer"
                      >
                        <span>Scope Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 3: CORE PILLARS / HIGHLIGHTS ── */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330] tracking-tight leading-snug whitespace-pre-line">
              {data.section2Headline}
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {data.section2Subtitle}
            </p>
          </div>

          {/* 4-Column Minimalist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {data.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[5px] bg-[#f8fafc] border border-slate-200/90 hover:border-slate-300 transition-all duration-200 space-y-3"
              >
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0b1330] tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TEMPLATE VS BESPOKE COMPARISON (FOR WEBSITE CLIENTS) ── */}
      {isWebsiteDevelopment && (
        <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 bg-[#f4f6fb] border-y border-slate-200/80 text-left">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330] tracking-tight leading-snug">
                Why ambitious brands choose custom web engineering over off-the-shelf templates.
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                A template site looks acceptable on day one, but degrades into slow load times, security vulnerabilities, and missed customer opportunities. Here is how Arkanet custom web engineering compares.
              </p>
            </div>

            {/* Comparison Table / Matrix */}
            <div className="rounded-[5px] bg-white border border-slate-200/90 overflow-hidden shadow-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#f8fafc] border-b border-slate-200 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-600">
                <div className="lg:col-span-3">Core Capability</div>
                <div className="lg:col-span-4 text-slate-500">Standard / Template Sites</div>
                <div className="lg:col-span-5 text-[#0b1330] flex items-center gap-2">
                  <span>Arkanet Engineered Web</span>
                  <span className="px-2 py-0.5 rounded-[3px] bg-[#0b1330] text-white text-[10px] font-mono">
                    RECOMMENDED
                  </span>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                {COMPARISON_POINTS.map((pt, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 lg:grid-cols-12 p-6 gap-4 items-center hover:bg-slate-50/60 transition-colors"
                  >
                    <div className="lg:col-span-3 font-heading font-bold text-sm sm:text-base text-[#0b1330]">
                      {pt.criteria}
                    </div>
                    <div className="lg:col-span-4 text-xs sm:text-sm text-slate-500 flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <span>{pt.template}</span>
                    </div>
                    <div className="lg:col-span-5 text-xs sm:text-sm text-slate-800 font-medium flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{pt.arkanet}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 5: FEATURE ROWS WITH ALTERNATING POSITIONS ── */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 text-left">
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-32">
          {data.featureRows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                row.imagePosition === "right" ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0b1330] tracking-tight leading-snug">
                  {row.title}
                </h3>
                <p className="font-sans text-base text-slate-600 font-normal leading-relaxed">
                  {row.description}
                </p>
                <div className="pt-2">
                  <button
                    onClick={openContact}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b1330] hover:text-slate-700 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-[5px] overflow-hidden border border-slate-200/90 shadow-none bg-slate-100">
                <img
                  src={row.image}
                  alt={row.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: TECH SHOWCASE CARD ── */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-12 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 lg:p-16 bg-[#0b1330] text-white rounded-[5px] border border-slate-800 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-5">
                <div className="inline-block px-3 py-1 rounded-[3px] bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider">
                  {data.techShowcase.badge || "Modern Web Architecture"}
                </div>

                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  {data.techShowcase.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                  {data.techShowcase.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge", "Sanity CMS", "Shopify API", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-[3px] bg-white/10 border border-white/10 text-white text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={openContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-white text-[#0b1330] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative aspect-[4/3] rounded-[5px] overflow-hidden border border-white/10 bg-slate-900">
                <img
                  src={data.techShowcase.image}
                  alt={data.techShowcase.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: INTERACTIVE QUICK PROJECT SCOPER (FOR WEBSITE CLIENTS) ── */}
      {isWebsiteDevelopment && (
        <section className="w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-12 bg-[#f8fafc] border-t border-slate-200/80 text-left">
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-[5px] bg-white border border-slate-200/90 shadow-none space-y-8">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0b1330] tracking-tight">
                Plan Your Next Web Project
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600">
                Select your intended project scope and timeline to get a direct technical assessment and milestone estimate from our engineering leads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Scope Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Project Archetype
                </label>
                <div className="space-y-2">
                  {[
                    "Corporate Website",
                    "Headless eCommerce Store",
                    "Customer Portal / SaaS Web App",
                    "Website Redesign & Speed Optimization",
                  ].map((type) => (
                    <button
                      key={type}
                      onClick={() => setEstimatorType(type)}
                      className={`w-full text-left px-4 py-2.5 rounded-[4px] text-xs font-medium border transition-all cursor-pointer flex items-center justify-between ${
                        estimatorType === type
                          ? "bg-[#0b1330] text-white border-[#0b1330]"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span>{type}</span>
                      {estimatorType === type && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Target Launch Horizon
                </label>
                <div className="space-y-2">
                  {[
                    "2–4 Weeks (Fast-Track Sprint)",
                    "4–6 Weeks (Standard Deployment)",
                    "8+ Weeks (Comprehensive Enterprise)",
                  ].map((time) => (
                    <button
                      key={time}
                      onClick={() => setEstimatorTimeline(time)}
                      className={`w-full text-left px-4 py-2.5 rounded-[4px] text-xs font-medium border transition-all cursor-pointer flex items-center justify-between ${
                        estimatorTimeline === time
                          ? "bg-[#0b1330] text-white border-[#0b1330]"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span>{time}</span>
                      {estimatorTimeline === time && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Selected: <span className="font-semibold text-[#0b1330]">{estimatorType}</span> · <span className="font-semibold text-[#0b1330]">{estimatorTimeline}</span>
              </div>
              <button
                onClick={openContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-[#0b1330] hover:bg-[#172347] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 8: CLOSING CTA SECTION ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── SECTION 9: FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
