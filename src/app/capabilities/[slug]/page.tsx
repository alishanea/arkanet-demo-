"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Code,
  Monitor,
  RefreshCw,
  Smartphone,
  Bot,
  BarChart,
  BarChart3,
  Award,
  Settings,
  Users,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Layout,
  Database,
  Cpu,
  BookOpen,
  Layers,
  Target,
  GitBranch,
  Server,
  Palette,
  Clock,
  ClipboardList,
  FileSearch,
  UserCheck,
  Search,
  Shield,
  CreditCard,
  Lock,
  ShoppingBag,
  DollarSign,
  Split,
  MapPin,
  ShieldAlert,
  FileCheck,
  Activity,
  Share2,
  Cloud,
  FileCode,
  GitPullRequest,
  Eye,
  HelpCircle,
  ShoppingCart,
  Globe,
  Inbox,
  FileText,
  Printer,
  CheckSquare,
  Languages,
  PhoneCall,
  Headphones,
  Link as LinkIcon,
  AlertCircle,
  Bell,
  Video,
  FileCheck2,
  Radio,
  Ticket,
  QrCode,
  FileSpreadsheet,
  Boxes,
  Briefcase,
  PieChart,
  Fingerprint,
  Camera,
  Package,
  Compass,
  Presentation,
  Wrench,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { CAPABILITIES_DATA } from "@/lib/capabilitiesData";

const ICON_MAP: Record<string, React.ElementType> = {
  FileSearch,
  Database,
  Code,
  CheckCircle2,
  Award,
  Settings,
  UserCheck,
  Search,
  Lightbulb,
  Users,
  ShieldCheck,
  TrendingUp,
  Shield,
  CreditCard,
  Lock,
  BarChart3,
  ShoppingBag,
  DollarSign,
  Layers,
  Split,
  MapPin,
  ShieldAlert,
  FileCheck,
  Activity,
  Share2,
  Zap,
  RefreshCw,
  Cloud,
  GitBranch,
  FileCode,
  GitPullRequest,
  Smartphone,
  Target,
  Eye,
  Bot,
  MessageSquare,
  HelpCircle,
  ShoppingCart,
  Globe,
  Inbox,
  FileText,
  Printer,
  CheckSquare,
  Clock,
  Languages,
  Sparkles,
  Server,
  PhoneCall,
  Headphones,
  ClipboardList,
  Link: LinkIcon,
  AlertCircle,
  Bell,
  BookOpen,
  Video,
  FileCheck2,
  Radio,
  Ticket,
  QrCode,
  FileSpreadsheet,
  Boxes,
  Briefcase,
  PieChart,
  Fingerprint,
  Camera,
  Package,
  Monitor,
  Compass,
  Layout,
  Palette,
  Presentation,
  Wrench,
  Cpu,
  BarChart,
};

export default function CapabilityDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "website-development";
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);

  // Fallback to website-development if slug not found
  const data = CAPABILITIES_DATA[slug] || CAPABILITIES_DATA["website-development"];

  return (
    <main className="min-h-screen bg-white text-[#0b1330] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── SECTION 1: HERO SECTION ── */}
      <section className="w-full bg-[#f4f6fb] pt-32 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-12 border-b border-slate-200/80 text-left">
        <div className="max-w-7xl mx-auto">
          {/* Badge & Headline */}
          <div className="inline-block px-3 py-1 rounded-[4px] bg-[#0b1330] text-white text-[11px] font-bold uppercase tracking-wider mb-5">
            {data.badge}
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0b1330] tracking-tight leading-[1.1] max-w-4xl">
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

          {/* Device Mockups Showcase Banner */}
          <div className="relative w-full rounded-[5px] bg-[#eef2f6] p-4 sm:p-8 lg:p-10 overflow-hidden border border-slate-200/90 shadow-none mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left Mockup (Desktop only) */}
              <div className="hidden md:block relative aspect-[4/5] rounded-[5px] overflow-hidden border border-slate-200 shadow-none bg-white">
                <img src={data.heroImages.left} alt="Left preview" className="w-full h-full object-cover" />
              </div>

              {/* Center Main Hero Mockup */}
              <div className="relative aspect-[16/10] sm:aspect-[4/5] md:aspect-[3/4] rounded-[5px] overflow-hidden border border-slate-200 shadow-none z-10 bg-white">
                <img src={data.heroImages.center} alt="Center preview" className="w-full h-full object-cover" />
              </div>

              {/* Right Mockup (Desktop only) */}
              <div className="hidden md:block relative aspect-[4/5] rounded-[5px] overflow-hidden border border-slate-200 shadow-none bg-white">
                <img src={data.heroImages.right} alt="Right preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: OPEN HIGHLIGHTS GRID ── */}
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

      {/* ── SECTION 3: FEATURE ROWS WITH ALTERNATING POSITIONS ── */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 border-t border-slate-200/80 text-left">
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

      {/* ── SECTION 4: TECH SHOWCASE CARD ── */}
      <section className="w-full py-16 sm:py-20 px-6 sm:px-10 lg:px-12 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 lg:p-16 bg-[#0b1330] text-white rounded-[5px] border border-slate-800 shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-5">
                <div className="inline-block px-3 py-1 rounded-[3px] bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider">
                  {data.techShowcase.badge || "Architecture"}
                </div>

                <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  {data.techShowcase.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                  {data.techShowcase.description}
                </p>

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
                <img src={data.techShowcase.image} alt={data.techShowcase.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLOSING CTA SECTION ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── SECTION 6: FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
