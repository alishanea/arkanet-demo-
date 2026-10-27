"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Award,
  Settings,
  Users,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Search,
  UserCheck,
  Zap,
  Code,
  Monitor,
  Layout,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Check,
  Gauge,
  Globe2,
  Smartphone,
  Shield,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { CAPABILITIES_DATA } from "@/lib/capabilitiesData";

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  Settings,
  UserCheck,
  Search,
  Lightbulb,
  Users,
  ShieldCheck,
  TrendingUp,
  Zap,
  Code,
  Monitor,
  Layout,
  Database,
  Cpu,
  Layers,
  Smartphone,
  Shield,
  ShoppingBag,
};

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
    data.techShowcase.image,
  ];

  // Auto-advance background image one by one every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showcaseImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [showcaseImages.length]);

  // Reset to first image when slug changes
  useEffect(() => {
    setActiveIdx(0);
  }, [slug]);

  return (
    <main className="min-h-screen bg-white text-[#0b1330] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── SECTION 1: HERO SECTION WITH AUTOMATIC BACKGROUND IMAGE SLIDESHOW ── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#f4f6fb] text-[#0b1330] pt-28 sm:pt-36 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-14 border-b border-slate-200/80 text-left">
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
              <img
                src={showcaseImages[activeIdx]}
                alt="Background showcase"
                className="w-full h-full object-cover brightness-105 saturate-110"
              />
            </motion.div>
          </AnimatePresence>

          {/* Soft Cinematic Scrims & Ambient Glowing Overlay for Flawless Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6fb] via-[#f4f6fb]/75 to-[#f4f6fb]/95 pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f6fb] via-[#f4f6fb]/80 to-transparent pointer-events-none z-[1]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#38bdf8]/15 via-[#1d4ed8]/10 to-transparent blur-3xl pointer-events-none z-[1]" />
        </div>

        {/* Foreground Content (Headline, Subtitle, Practice Switcher) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8">
          <div className="space-y-5 w-full max-w-5xl lg:max-w-6xl">
            <h1 className="hero-h1 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0b1330] tracking-tight leading-[1.08]">
              {data.title} <br />
              <span className="text-[#1d4ed8]">{data.highlightText}</span>
            </h1>

            {data.subtitle && (
              <p className="hero-sub font-sans text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
                {data.subtitle}
              </p>
            )}
          </div>

          {/* Quick Capability Practice Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
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
                      ? "bg-[#0b1330] text-white border border-[#0b1330] shadow-xs"
                      : "bg-white text-slate-600 hover:text-[#0b1330] border border-slate-200/90 shadow-xs hover:border-slate-300"
                  }`}
                >
                  {cap.name}
                </Link>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-200/80">
            <button
              onClick={openContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-[#0b1330] hover:bg-[#132047] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#38bdf8]" />
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: OPEN HIGHLIGHTS GRID WITH HOVER EFFECTS ── */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 text-left bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330] tracking-tight leading-snug whitespace-pre-line">
              {data.section2Headline}
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {data.section2Subtitle}
            </p>
          </div>

          {/* 4-Column Minimalist Grid with Dynamic Hover Lift & Index Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {data.highlights.map((item, idx) => {
              const IconComp = ICON_MAP[item.icon] || Award;
              const indexFormatted = `0${idx + 1}`;
              return (
                <div
                  key={idx}
                  className="group relative p-7 rounded-[5px] bg-[#f8fafc] border border-slate-200/90 hover:border-[#0b1330] hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-[4px] bg-[#0b1330] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-sans text-xs font-bold text-slate-400 group-hover:text-[#0b1330] transition-colors">
                        {indexFormatted}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0b1330] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle Accent Bottom Line */}
                  <div className="h-[2px] w-8 bg-slate-200 group-hover:w-full group-hover:bg-[#0b1330] transition-all duration-300 rounded-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURE ROWS WITH ALTERNATING POSITIONS & HOVER EFFECTS ── */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 border-t border-slate-200/80 text-left bg-white">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
          {data.featureRows.map((row, idx) => {
            const rowNumber = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  row.imagePosition === "right" ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text Side */}
                <div className="space-y-5">
                  <div className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Specification {rowNumber}
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0b1330] tracking-tight leading-snug">
                    {row.title}
                  </h3>
                  <p className="font-sans text-base text-slate-600 font-normal leading-relaxed">
                    {row.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={openContact}
                      className="group inline-flex items-center gap-2 text-xs font-bold text-[#0b1330] hover:text-slate-700 uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Consult on This Architecture</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Image Side with Clean Zoom Hover Effect */}
                <div className="group relative aspect-[16/10] rounded-[5px] overflow-hidden border border-slate-200/90 shadow-none bg-slate-100 hover:border-[#0b1330]/50 transition-all duration-500">
                  <img
                    src={row.image}
                    alt={row.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1330]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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

      {/* ── SECTION 4: 3-COLUMN METRICS IMPACT STRIP ── */}
      <section className="w-full py-12 px-6 sm:px-10 lg:px-12 bg-[#f8fafc] border-y border-slate-200/80 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-[5px] bg-white border border-slate-200/90 space-y-2">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330]">
                &lt; 0.8s
              </div>
              <div className="font-sans font-semibold text-sm text-[#0b1330]">
                Average First Contentful Paint
              </div>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Global Edge deployment via Vercel Edge Network ensures lightning-fast page delivery regardless of user location.
              </p>
            </div>

            <div className="p-6 rounded-[5px] bg-white border border-slate-200/90 space-y-2">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330]">
                +140%
              </div>
              <div className="font-sans font-semibold text-sm text-[#0b1330]">
                Inbound Conversion Rate Lift
              </div>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                User-tested conversion funnels, friction-free forms, and strategic value triggers engineered into every page.
              </p>
            </div>

            <div className="p-6 rounded-[5px] bg-white border border-slate-200/90 space-y-2">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330]">
                100 / 100
              </div>
              <div className="font-sans font-semibold text-sm text-[#0b1330]">
                SEO & Technical Best Practices
              </div>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Clean semantic HTML5, automated JSON-LD schema, open graph assets, and dynamic XML sitemaps built from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TECH SHOWCASE CARD WITH INTERACTIVE CHIPS ── */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-12 text-left bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 lg:p-16 bg-[#f8fafc] text-[#0b1330] rounded-[5px] border border-slate-200/90 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-[3px] bg-blue-50 border border-blue-200 text-[#1d4ed8] text-xs font-bold uppercase tracking-wider font-sans">
                  {data.techShowcase.badge || "Modern Web Architecture"}
                </div>

                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#0b1330] tracking-tight leading-tight">
                  {data.techShowcase.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                  {data.techShowcase.description}
                </p>

                {/* Tech Chips with Hover Reaction */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                    "Vercel Edge",
                    "Sanity CMS",
                    "Shopify Storefront",
                    "Supabase",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-[3px] bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-[#0b1330] text-xs font-medium font-sans transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={openContact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#0b1330] text-white hover:bg-[#132047] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs font-sans"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowUpRight className="w-4 h-4 text-[#38bdf8]" />
                  </button>
                </div>
              </div>

              {/* Right Image with Hover Effect */}
              <div className="group relative aspect-[4/3] rounded-[5px] overflow-hidden border border-slate-200 bg-slate-100 shadow-none">
                <img
                  src={data.techShowcase.image}
                  alt={data.techShowcase.title}
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
