"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkDetailModal, WorkProjectDetail } from "@/components/modals/WorkDetailModal";

interface WhatsNewSectionProps {
  onOpenBooking?: () => void;
}

const FEATURED_PROJECTS: WorkProjectDetail[] = [
  {
    id: "elixir-luxury-perfumery",
    category: "Luxury E-Commerce & Shopify",
    title: "Elixir Luxury Boutique Artistic Perfume Commerce",
    titleLine1: "Elixir Luxury Boutique",
    titleLine2: "Artistic Perfume Commerce",
    description: "Bilingual Shopify Plus platform for Dubai's luxury perfume boutique, featuring localized UAE payments and sub-second speeds.",
    outerImage: "/assets/images/elixir-hero.png",
    innerImage: "/assets/images/elixir-showcase.png",
    detail: {
      client: "Elixir Beauty Dubai",
      year: "2025",
      services: [
        "Shopify Plus Architecture",
        "Bilingual Arabic (RTL) & English",
        "UAE Payment Gateway (Tabby / Apple Pay)",
        "Fragrance Notes Discovery Engine",
        "High-Performance Edge Caching"
      ],
      overview: "Elixir (elixirbeauty.com) is Dubai's luxury fragrance house retailing elite niche perfumes including Amouage, Maison Crivelli, Nishane, and Marc-Antoine Barrois. Arkanet engineered an ultra-fast, bespoke bilingual Shopify Plus storefront with seamless local payments.",
      challenge: "High-end luxury fragrances require an immersive, high-elegance digital showcase, lightning-fast product filtering by olfactory notes, full Arabic RTL layout support, and frictionless regional checkout with Tabby installments and Apple Pay.",
      solution: "We designed and deployed a custom Shopify Plus architecture featuring bespoke Liquid OS 2.0 components, smooth RTL layout transitions, dynamic fragrance discovery filters, localized GCC currencies (AED, SAR, QAR, KWD), and sub-1.2s page loads.",
      impact: [
        "+168% Online sales conversion growth within 90 days",
        "Sub-1.2s Page load speeds across UAE, GCC, and international traffic",
        "Seamless bilingual Arabic (RTL) & English switching with 100% catalog parity",
      ],
      techStack: ["Shopify Plus", "Liquid OS 2.0", "Next.js", "Tailwind CSS", "Apple Pay / Tabby", "Cloudflare Edge"],
    },
  },
  {
    id: "ai-mobility-platform",
    category: "Applied AI & Mobility",
    title: "AI Mobility Intelligence & Connected City Parking",
    titleLine1: "AI Mobility Intelligence",
    titleLine2: "& Connected City Parking",
    description: "Connected vehicle telemetry, edge computer vision, and automated real-time parking space allocation for modern smart cities.",
    outerImage: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1000&auto=format&fit=crop",
    detail: {
      client: "Dubai Smart Mobility Initiative",
      year: "2026",
      services: ["AI Mobility Intelligence", "Computer Vision Parking", "Sensor Telemetry", "IoT Integration"],
      overview: "Arkanet engineered an automated mobility intelligence platform connecting in-ground IoT sensors, computer vision feeds, and driver navigation apps across high-density urban zones.",
      challenge: "Urban drivers spend up to 20 minutes locating available parking, generating traffic bottlenecks, unnecessary fuel burn, and transit friction.",
      solution: "Deployed real-time edge computer vision paired with IoT sensors and mobile telemetry to detect, predict, and guide drivers to vacant parking bays with sub-second accuracy.",
      impact: [
        "38% Reduction in parking search transit time",
        "Over 42,000 Connected parking bays monitored live",
        "99.6% Sensor accuracy across outdoor and indoor garages",
      ],
      techStack: ["Python", "TensorFlow", "Edge IoT", "MQTT", "Next.js", "AWS IoT Core"],
    },
  },
  {
    id: "healthcare-bigdata-platform",
    category: "Big Data & HealthTech",
    title: "Healthcare Big Data Lake & Hospital Clinical Analytics",
    titleLine1: "Healthcare Big Data Lake",
    titleLine2: "& Hospital Clinical Analytics",
    description: "High-throughput clinical data lake unifying electronic records with predictive machine learning for early cardiac detection.",
    outerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    detail: {
      client: "UAE Healthcare & Clinical Network",
      year: "2025",
      services: ["Big Data Engineering", "Hospital Data Lake", "Cardiovascular AI", "Clinical Decision Support"],
      overview: "A mission-critical healthcare big data infrastructure designed to unify electronic health records (EHR), lab feeds, and vital metrics into a single high-security clinical data lake.",
      challenge: "Fragmented hospital data systems and delayed risk identification in cardiovascular diseases caused high clinical latency and treatment delays.",
      solution: "Engineered a scalable big data pipeline that normalizes hospital records into an encrypted data lake, applying predictive machine learning to flag cardiovascular indicators early.",
      impact: [
        "1.2M+ Patient records indexed and unified",
        "42% Earlier detection of critical cardiac risk factors",
        "100% Compliance with UAE Ministry of Health clinical data regulations",
      ],
      techStack: ["Apache Spark", "Kafka", "Python", "PostgreSQL", "Next.js", "Docker"],
    },
  },
  {
    id: "conversational-ai-voicebots",
    category: "Conversational AI & Avatars",
    title: "Conversational AI Agents & Multilingual Voicebots",
    titleLine1: "Conversational AI Agents",
    titleLine2: "& Multilingual Voicebots",
    description: "Enterprise conversational voicebots automating customer care across phone lines, web portals, and WhatsApp in global languages.",
    outerImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    detail: {
      client: "Enterprise Customer Care & Telecom",
      year: "2026",
      services: ["Conversational AI", "Voicebot Development", "Global Multilingual NLU", "Omnichannel Integration"],
      overview: "An enterprise-grade conversational AI suite engineered to handle high-concurrency customer enquiries across phone lines, web chat, and WhatsApp Business API.",
      challenge: "Peak season support queues overwhelmed human support desks, resulting in 15+ minute wait times and inconsistent multilingual customer service.",
      solution: "Trained and deployed neural voicebots and generative chat assistants with real-time speech recognition, automated ticket resolution, and seamless human agent handoffs.",
      impact: [
        "86% First-contact automated resolution rate",
        "Sub-1.2s Average neural voice response latency",
        "Fluid real-time switching across multiple global languages",
      ],
      techStack: ["Python", "FastAPI", "Speech-to-Text NLU", "LangChain", "WebRTC", "WhatsApp API"],
    },
  },
];

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onOpenBooking }) => {
  const [selectedProject, setSelectedProject] = useState<WorkProjectDetail | null>(null);

  return (
    <section
      id="work"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 select-none font-sans scroll-mt-24 border-t border-slate-200/80"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto space-y-10 sm:space-y-12">
        
        {/* ── 1. CLEAN EDITORIAL SECTION HEADER (NO TOP/BOTTOM DIVIDER LINES) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 sm:pb-3">
          <div className="space-y-2.5 max-w-2xl text-left">
            <h2 className="section-h2">
              Selected Work &amp; Case Studies
            </h2>
            <p className="section-desc max-w-2xl">
              Explore how we design, build, and deploy production digital systems that solve real operational friction.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#202B61] hover:text-[#202B61]/75 transition-colors shrink-0 group self-start sm:self-end pb-1"
          >
            <span>See all work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── 2. PROPORTIONAL 4-COLUMN PROJECT GRID WITH HARMONIOUS SIZING & SPACING ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mx-3.5 sm:-mx-4 lg:-mx-5 gap-y-10 sm:gap-y-10 lg:gap-y-0 items-stretch">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between h-full w-full px-3.5 sm:px-4 lg:px-5 border-b-0 pb-0 ${
                /* Desktop (4-cols): pure centered vertical divider lines between columns */
                idx < 3 ? "lg:border-r lg:border-slate-200/80" : "lg:border-r-0"
              } ${
                /* Tablet (2-cols): vertical divider line between left and right column */
                idx % 2 === 0
                  ? "sm:border-r sm:border-slate-200/80"
                  : "sm:border-r-0"
              }`}
            >
              <div
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View case study: ${project.title}`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group flex flex-col justify-between h-full w-full cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202B61] focus-visible:ring-offset-4 rounded-xl transition-transform duration-200"
              >
                {/* Clean Aspect Ratio Image with Balanced Proportions */}
                <div className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden bg-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] shrink-0">
                  <Image
                    src={project.outerImage || project.image || "/assets/images/webdevelopmentone.webp"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Refined Typography Stack: Reduced Eyebrow, Elegant Title, Balanced Body */}
                <div className="pt-4 sm:pt-4.5 flex flex-col flex-1">
                  {/* Category Eyebrow Label (Reduced size, refined tracking, subtle contrast) */}
                  <div className="h-4 flex items-center mb-1.5">
                    <p className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#202B61]/70 font-sans leading-none">
                      {project.category}
                    </p>
                  </div>

                  {/* Project Headline: Rich, descriptive titles filling available space with crisp, compact spacing */}
                  <div className="h-[2.85rem] sm:h-[3.1rem] lg:h-[3.25rem] flex items-start mb-2">
                    <h3 className="font-heading font-bold text-base sm:text-[17px] lg:text-[18px] text-[#202B61] leading-[1.28] tracking-tight">
                      <span className="block whitespace-nowrap">{project.titleLine1 || project.title}</span>
                      <span className="block whitespace-nowrap">{project.titleLine2}</span>
                    </h3>
                  </div>

                  {/* Body Description: Balanced size, 16 words, perfect 3-line flow */}
                  <div className="h-[4.2rem] sm:h-[4.5rem] flex items-start pb-1">
                    <p className="font-sans text-[13px] sm:text-[13.5px] lg:text-[14px] text-[#202B61]/85 leading-[1.6] font-normal text-pretty line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <WorkDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        allProjects={FEATURED_PROJECTS}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </section>
  );
};
