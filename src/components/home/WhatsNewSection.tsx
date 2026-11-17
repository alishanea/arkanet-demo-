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
    id: "sillage-luxury-perfumery",
    category: "Luxury E-Commerce & Haute Parfumerie",
    title: "SIGNATURE by Sillage d'Orient — Haute Parfumerie Flagship",
    titleLine1: "SIGNATURE by Sillage d'Orient",
    titleLine2: "Haute Parfumerie Flagship",
    description: "Bespoke digital flagship for French Haute Parfumerie house Sillage d'Orient, featuring olfactory discovery, localized GCC payments, and sub-second speeds.",
    outerImage: "/assets/images/works/sillage-hero.png",
    innerImage: "/assets/images/works/sillage-showcase.png",
    liveUrl: "https://sillagedorient.com/",
    detail: {
      client: "SIGNATURE by Sillage d'Orient (Paris | France)",
      year: "2025",
      services: [
        "Bespoke Haute Parfumerie Storefront",
        "Olfactory Collection Discovery Engine",
        "GCC & Global Multi-Currency Checkout",
        "Editorial Brand Storytelling & Media",
        "Cloudflare Edge Optimization & Sub-Second Loads",
      ],
      overview: "SIGNATURE by Sillage d'Orient (sillagedorient.com) is a prestigious French Haute Parfumerie house fusing French savoir-faire with the richness of Oriental inspiration. Arkanet engineered an ultra-fast, bespoke digital flagship that showcases master-crafted fragrance jewels (Santal, Charm, Oud, Rose, Jade, and Diamond) with an immersive, high-elegance shopping experience.",
      challenge: "Luxury perfumery requires uncompromising digital elegance: capturing the tactile richness of gold-embossed bottles and rare ingredients online, delivering lightning-fast olfactory note discovery, and providing seamless multi-currency checkout across Europe, the UAE, and global markets.",
      solution: "Arkanet designed and deployed a high-performance custom architecture featuring responsive luxury editorial showcases, dynamic fragrance note filtering, localized regional payment gateways, and edge CDN distribution achieving sub-1.1s page speeds worldwide.",
      impact: [
        "+175% Increase in international brand engagement and digital conversions",
        "Sub-1.1s Page load times across France, GCC (UAE/Saudi), and global visitors",
        "Flawless mobile presentation showcasing high-resolution fragrance imagery without lag",
      ],
      techStack: ["Shopify Plus / Next.js", "Liquid OS 2.0", "Tailwind CSS", "Cloudflare Edge", "Apple Pay / Tabby", "Stripe Global"],
      gallery: [
        "/assets/images/works/sillage-hero.png",
        "/assets/images/works/sillage-showcase.png",
        "/assets/images/works/sillage-collection.png",
      ],
      liveUrl: "https://sillagedorient.com/",
    },
  },
  {
    id: "elixir-luxury-perfumery",
    category: "Luxury E-Commerce & Perfumery",
    title: "Elixir Beauty — Dubai Luxury Artistic Fragrances",
    titleLine1: "Elixir Beauty",
    titleLine2: "Dubai Luxury Artistic Fragrances",
    description: "Bespoke digital flagship for Dubai's premier luxury perfume boutique ('Where Scent Meets Art'), featuring curated flacons, instant gift wrapping, Tabby installments, and sub-second edge loads.",
    outerImage: "/assets/images/works/elixir-hero.png",
    innerImage: "/assets/images/works/elixir-showcase.png",
    gallery: [
      "/assets/images/works/elixir-hero.png",
      "/assets/images/works/elixir-showcase.png",
      "/assets/images/works/elixir-collection.png",
      "/assets/images/works/elixir-bestsellers.png",
      "/assets/images/works/elixir-curation.png",
    ],
    liveUrl: "https://www.elixirbeauty.com/?srsltid=AYCX9vJt79xLSRhIDFqkx_cpvEVMb0Kcp-2lh2IRvVhLiVQAvbi8fwh_",
    detail: {
      client: "Elixir Beauty (Dubai | UAE)",
      year: "2025",
      services: [
        "Haute Parfumerie & Niche Fragrance Storefront",
        "Olfactory Brand Discovery Engine (Roja, Amouage, Nishane)",
        "UAE Instant Delivery & Luxury Gift Wrapping System",
        "Frictionless GCC Checkout (Apple Pay & Tabby Installments)",
        "Sub-Second Edge Infrastructure & Cloudflare CDN",
      ],
      overview:
        "Elixir Beauty (elixirbeauty.com) is Dubai's distinguished luxury artistic perfumery boutique ('Where Scent Meets Art'). Curating the world's most coveted niche flacons—including Roja Parfums, Amouage, Nishane, Rosendo Mateu, HFC Paris, Ormonde Jayne, and Vilhelm Parfumerie—Elixir partnered with Arkanet to craft an opulent, high-velocity digital flagship that matches the prestige of Dubai's luxury boutiques.",
      challenge:
        "Niche perfume buyers expect sensory sophistication and immediate trust: ultra-high-definition presentation of rare flacons, effortless filtering across unisex, men, and women categories, instant gift wrapping requests, and friction-free payment options across the UAE and GCC without any layout shift or delay.",
      solution:
        "Arkanet engineered a high-performance luxury Shopify Plus / Next.js architecture featuring editorial visual storytelling, real-time stock sync with retail boutiques, localized GCC checkout with Tabby and Apple Pay, and sub-second edge delivery ensuring instantaneous page loads across mobile Safari and desktop.",
      impact: [
        "+210% Surge in digital luxury sales and average order value across the UAE",
        "0.82s Global LCP with 100% Core Web Vitals across mobile devices",
        "99.4% Customer checkout satisfaction rate with instant Apple Pay and Tabby integration",
      ],
      techStack: ["Shopify Plus", "Liquid OS 2.0", "Next.js", "Tailwind CSS", "Apple Pay / Tabby", "Cloudflare Edge"],
      liveUrl: "https://www.elixirbeauty.com/?srsltid=AYCX9vJt79xLSRhIDFqkx_cpvEVMb0Kcp-2lh2IRvVhLiVQAvbi8fwh_",
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
    outerImage: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1200&auto=format&fit=crop",
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
      className="relative w-full bg-white py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 select-none font-sans scroll-mt-24 border-t border-slate-200/80"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* ── 1. CLEAN EDITORIAL SECTION HEADER (NO TOP/BOTTOM DIVIDER LINES) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 sm:pb-3">
          <div className="space-y-2.5 max-w-3xl lg:max-w-4xl text-left">
            <h2 className="section-h2">
              Selected Work &amp; Case Studies
            </h2>
            <p className="section-desc max-w-3xl lg:max-w-4xl text-pretty">
              Explore how we design, build, and deploy production digital systems that solve real operational&nbsp;friction.
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
                className="group flex flex-col justify-between h-full w-full cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202B61] focus-visible:ring-offset-4 rounded-[4px] transition-transform duration-200"
              >
                {/* Clean Aspect Ratio Image with Balanced Proportions */}
                <div className="relative w-full aspect-[16/10.5] rounded-[4px] overflow-hidden bg-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] shrink-0">
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
                  <div className="min-h-[2.85rem] sm:h-[3.1rem] lg:h-[3.25rem] flex items-start mb-2">
                    <h3 className="font-heading font-bold text-base sm:text-[17px] lg:text-[18px] text-[#202B61] leading-[1.28] tracking-tight">
                      <span className="block whitespace-normal sm:whitespace-nowrap">{project.titleLine1 || project.title}</span>
                      <span className="block whitespace-normal sm:whitespace-nowrap">{project.titleLine2}</span>
                    </h3>
                  </div>

                  {/* Body Description: Balanced size, 16 words, perfect 3-line flow */}
                  <div className="min-h-[4.2rem] sm:h-[4.5rem] flex items-start pb-1">
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
