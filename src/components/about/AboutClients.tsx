"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  X,
  TrendingUp,
  Cpu,
  Clock,
  Sparkles
} from "lucide-react";

interface ClientProfile {
  id: string;
  name: string;
  src: string;
  sector: "Enterprise" | "Retail & Luxury" | "Legal & Finance" | "Healthcare & Tech" | "Education & Public";
  location: string;
  overview: string;
  impactMetric: string;
  impactLabel: string;
  services: string[];
  featuredImage?: string;
}

const FEATURED_STORIES: ClientProfile[] = [
  {
    id: "7",
    name: "Emirates National Holdings",
    src: "/assets/clinet-logo/7.png",
    sector: "Enterprise",
    location: "Abu Dhabi & Dubai, UAE",
    overview: "Multi-subsidiary cloud consolidation and unified ERP telemetry architecture connecting regional operations across UAE and KSA.",
    impactMetric: "+45%",
    impactLabel: "Operational reporting efficiency across 12 business units",
    services: ["Cloud Infrastructure", "Custom ERP Integration", "Automated DevOps"],
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Arbitralis Legal & Dispute Group",
    src: "/assets/clinet-logo/2.png",
    sector: "Legal & Finance",
    location: "DIFC, Dubai, UAE",
    overview: "Encrypted enterprise contract intelligence portal with automated precedent indexing and multi-lingual discovery for commercial arbitration.",
    impactMetric: "Sub-2s",
    impactLabel: "AI clause retrieval across 450,000+ historical legal filings",
    services: ["Applied AI / RAG", "Document Intelligence", "HIPAA/SOC2 Security"],
    featuredImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Decorpoint International",
    src: "/assets/clinet-logo/4.png",
    sector: "Retail & Luxury",
    location: "Business Bay, Dubai, UAE",
    overview: "Photorealistic WebGL 3D architectural showroom enabling interior specifiers to customize premium stone textures and calculate real-time quotes.",
    impactMetric: "3.4x",
    impactLabel: "Faster contract closing cycle with international architectural firms",
    services: ["3D Room Configurator", "Next.js Web Platform", "Shopify Storefront API"],
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "MCH Global Experience",
    src: "/assets/clinet-logo/8.png",
    sector: "Enterprise",
    location: "Dubai & Zurich",
    overview: "Large-scale event telemetry dashboard and interactive mobile engagement portal monitoring real-time footfall and digital accreditation.",
    impactMetric: "250K+",
    impactLabel: "Live attendees managed across international mega-events",
    services: ["Mobile App Development", "Real-Time Telemetry", "High-Concurrency Cloud"],
    featuredImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
  }
];

const ALL_CLIENTS: ClientProfile[] = [
  { id: "1", name: "Al Ras General Trading", src: "/assets/clinet-logo/1.png", sector: "Enterprise", location: "Dubai, UAE", overview: "Automated logistics documentation and customs clearance tracking portal.", impactMetric: "+65%", impactLabel: "Faster freight transit clearance", services: ["Logistics Portal", "Cloud API"] },
  { id: "2", name: "Arbitralis Legal", src: "/assets/clinet-logo/2.png", sector: "Legal & Finance", location: "DIFC, Dubai", overview: "Encrypted legal discovery and contract indexing pipeline.", impactMetric: "Sub-2s", impactLabel: "AI clause retrieval speed", services: ["Applied AI", "Security Vault"] },
  { id: "3", name: "B&G Store", src: "/assets/clinet-logo/3.png", sector: "Retail & Luxury", location: "GCC Region", overview: "High-conversion luxury fashion e-commerce platform.", impactMetric: "+128%", impactLabel: "Mobile checkout conversions", services: ["E-Commerce", "UI/UX"] },
  { id: "4", name: "Decorpoint International", src: "/assets/clinet-logo/4.png", sector: "Retail & Luxury", location: "Dubai, UAE", overview: "3D architectural visualizer and interior materials catalog.", impactMetric: "3.4x", impactLabel: "Commercial sales acceleration", services: ["3D WebGL", "Showroom"] },
  { id: "5", name: "Dual Investments", src: "/assets/clinet-logo/5.png", sector: "Legal & Finance", location: "Abu Dhabi", overview: "Private equity portfolio analytics and asset monitoring system.", impactMetric: "$1.4B", impactLabel: "Tracked portfolio assets", services: ["FinTech Dashboard", "Security"] },
  { id: "6", name: "Ebonite Sports", src: "/assets/clinet-logo/6.png", sector: "Retail & Luxury", location: "Middle East", overview: "Wholesale B2B distribution and dealer inventory ordering engine.", impactMetric: "-80%", impactLabel: "Order processing manual errors", services: ["B2B Portal", "ERP Sync"] },
  { id: "7", name: "Emirates National Holdings", src: "/assets/clinet-logo/7.png", sector: "Enterprise", location: "UAE", overview: "Consolidated enterprise multi-subsidiary cloud platform.", impactMetric: "+45%", impactLabel: "Efficiency gain across units", services: ["Cloud DevOps", "ERP"] },
  { id: "8", name: "MCH Global", src: "/assets/clinet-logo/8.png", sector: "Enterprise", location: "Dubai & Zurich", overview: "High-concurrency live event telemetry and visitor credentials.", impactMetric: "250K+", impactLabel: "Live attendees supported", services: ["Mobile Apps", "Cloud"] },
  { id: "9", name: "Filipino Institute", src: "/assets/clinet-logo/9.png", sector: "Education & Public", location: "Dubai & Bahrain", overview: "Learning management system and live virtual classroom portal.", impactMetric: "50,000+", impactLabel: "Active student certifications", services: ["LMS Cloud", "Video Streaming"] },
  { id: "10", name: "GDS Prestige", src: "/assets/clinet-logo/10.png", sector: "Retail & Luxury", location: "Dubai, UAE", overview: "Private VIP concierge booking and luxury fleet scheduling app.", impactMetric: "99.9%", impactLabel: "Reservation booking reliability", services: ["Mobile App", "Concierge API"] },
  { id: "11", name: "Nexus Venture Partners", src: "/assets/clinet-logo/11.png", sector: "Legal & Finance", location: "India & GCC", overview: "Deal-flow telemetry pipeline and automated founder pitch portal.", impactMetric: "6x", impactLabel: "Faster diligence document review", services: ["Custom Web App", "Analytics"] },
  { id: "12", name: "Horizon Maritime", src: "/assets/clinet-logo/12.png", sector: "Enterprise", location: "Dubai, UAE", overview: "Satellite vessel tracking and cargo arrival prediction portal.", impactMetric: "-38%", impactLabel: "Unexpected port docking delay", services: ["IoT Telemetry", "Kafka"] },
  { id: "13", name: "Al Futtaim Partner Entity", src: "/assets/clinet-logo/13.png", sector: "Retail & Luxury", location: "UAE & KSA", overview: "Omnichannel customer warranty and scheduled maintenance app.", impactMetric: "4.8/5", impactLabel: "Customer satisfaction rating", services: ["Mobile Portal", "API Hub"] },
  { id: "14", name: "Apex Medical Systems", src: "/assets/clinet-logo/14.png", sector: "Healthcare & Tech", location: "India", overview: "HIPAA-ready telehealth platform and electronic lab report delivery.", impactMetric: "200K+", impactLabel: "Monthly patient consultations", services: ["Telehealth", "HIPAA Vault"] },
  { id: "15", name: "Lumina Technologies", src: "/assets/clinet-logo/15.png", sector: "Healthcare & Tech", location: "GCC", overview: "Smart grid analytics and power telemetry software for facilities.", impactMetric: "+31%", impactLabel: "Energy conservation achieved", services: ["Cloud Platform", "Analytics"] },
  { id: "1-1", name: "Precision Diagnostics", src: "/assets/clinet-logo/1-1.png", sector: "Healthcare & Tech", location: "Kerala, India", overview: "Automated pathology testing laboratory results distribution.", impactMetric: "15 mins", impactLabel: "Diagnostic turnaround from lab", services: ["Laboratory Cloud", "SMS API"] },
  { id: "2-1", name: "Solara Clean Energy", src: "/assets/clinet-logo/2-1.png", sector: "Enterprise", location: "UAE & India", overview: "Solar density mapping and commercial lease financial calculator.", impactMetric: "3.1x", impactLabel: "Qualified commercial solar leads", services: ["Solar Mapping", "Web App"] },
  { id: "3-1", name: "Vesper Horology Paris", src: "/assets/clinet-logo/3-1.png", sector: "Retail & Luxury", location: "France & Dubai", overview: "Bespoke watch visualizer with 3D dial and leather strap configurator.", impactMetric: "€3.8M", impactLabel: "Direct bespoke sales in 6 months", services: ["Three.js 3D", "E-Commerce"] },
  { id: "4-1", name: "AeroLogistics Global", src: "/assets/clinet-logo/4-1.png", sector: "Enterprise", location: "Global", overview: "Cross-border air freight tracking and automated manifest checks.", impactMetric: "1.4M", impactLabel: "Monthly international packages", services: ["Cloud Architecture", "IoT"] },
  { id: "5-1", name: "CareFlow Health Systems", src: "/assets/clinet-logo/5-1.png", sector: "Healthcare & Tech", location: "Middle East", overview: "Continuous patient monitoring and multi-clinic doctor scheduling.", impactMetric: "68%", impactLabel: "Reduction in clinic phone queues", services: ["React Native", "PostgreSQL"] },
  { id: "6-1", name: "PulseFit Coaching Labs", src: "/assets/clinet-logo/6-1.png", sector: "Healthcare & Tech", location: "India & UAE", overview: "Computer-vision workout posture checking and biometric sync app.", impactMetric: "89%", impactLabel: "90-day active user retention", services: ["iOS / Android", "ML Motion"] },
  { id: "7-1", name: "Kratos CyberVision", src: "/assets/clinet-logo/7-1.png", sector: "Healthcare & Tech", location: "GCC & Europe", overview: "Real-time threat intelligence and vulnerability patching dashboard.", impactMetric: "-94%", impactLabel: "Reduction in false-positive alerts", services: ["Kubernetes", "AWS GuardDuty"] },
];

const SECTOR_OPTIONS = ["All Sectors", "Enterprise", "Retail & Luxury", "Legal & Finance", "Healthcare & Tech", "Education & Public"] as const;

export function AboutClients() {
  const [selectedSector, setSelectedSector] = useState<typeof SECTOR_OPTIONS[number]>("All Sectors");
  const [activeClientModal, setActiveClientModal] = useState<ClientProfile | null>(null);

  const filteredClients = ALL_CLIENTS.filter(
    (c) => selectedSector === "All Sectors" || c.sector === selectedSector
  );

  return (
    <section className="w-full py-24 sm:py-36 bg-[#f4f6fb] border-t border-slate-200/80 text-left select-none relative overflow-hidden">
      
      {/* ── 1. GRAND HERO HEADER WITH MASSIVE TYPOGRAPHY ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        <div className="inline-block px-3.5 py-1.5 rounded-[4px] bg-[#0b1330] text-white text-xs font-bold uppercase tracking-wider">
          Enterprise Client Ecosystem
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <div className="lg:col-span-8 space-y-5">
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#0b1330] tracking-tight leading-[1.05]">
              Trusted by market leaders across the Middle East &amp; India
            </h2>

            <p className="font-sans text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
              From prominent sovereign wealth affiliates and luxury houses in Dubai to fast-scaling healthcare networks and logistics giants, our engineering powers mission-critical revenue operations.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-end lg:items-end">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white px-4 py-3 rounded-[4px] border border-slate-200/90 shadow-none">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Strict Mutual NDA Protected</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white px-4 py-3 rounded-[4px] border border-slate-200/90 shadow-none">
              <Globe2 className="w-4 h-4 text-slate-600 shrink-0" />
              <span>UAE · Saudi Arabia · Qatar · India · Europe</span>
            </div>
          </div>
        </div>

        {/* Sector Navigation Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4">
          {SECTOR_OPTIONS.map((sec) => {
            const isActive = selectedSector === sec;
            return (
              <button
                key={sec}
                type="button"
                onClick={() => setSelectedSector(sec)}
                className={`px-4 py-2 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0b1330] text-white shadow-none"
                    : "bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-[#0b1330]"
                }`}
              >
                {sec}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 2. FEATURED CLIENT CASE SPOTLIGHTS (BIG CARDS WITH METRICS) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16 sm:mt-24 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0b1330]">
              Featured Client Transformations
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Deep dives into complex digital products engineered for long-term scalability.
            </p>
          </div>
          <span className="hidden sm:inline-block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">
            Verified Outcomes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_STORIES.map((client) => (
            <div
              key={client.id}
              onClick={() => setActiveClientModal(client)}
              className="group rounded-[5px] bg-white border border-slate-200/90 overflow-hidden cursor-pointer hover:border-[#0b1330] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Visual Showcase */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={client.featuredImage}
                  alt={client.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-[4px] border border-slate-200 shadow-sm flex items-center gap-2.5">
                  <img src={client.src} alt={client.name} className="h-6 w-auto object-contain" />
                  <span className="font-heading font-bold text-xs text-[#0b1330]">{client.name}</span>
                </div>
              </div>

              {/* Bottom Editorial Content */}
              <div className="p-6 sm:p-8 space-y-5 text-left">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <span>{client.sector}</span>
                  <span>{client.location}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-heading font-bold text-xl sm:text-2xl text-[#0b1330] group-hover:text-slate-700 transition-colors">
                    {client.overview}
                  </h4>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#0b1330] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 mt-1" />
                </div>

                {/* Big Impact Number Box */}
                <div className="p-4 rounded-[4px] bg-[#f8fafc] border border-slate-200/80 flex items-baseline gap-3">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0b1330]">
                    {client.impactMetric}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-medium text-slate-600">
                    {client.impactLabel}
                  </span>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                  {client.services.map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-sans text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-[3px] border border-slate-200/60"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. EXPANSIVE DUAL-TRACK CONTINUOUS LOGO MARQUEE STREAM ── */}
      <div className="relative w-full mt-20 sm:mt-28 py-6 overflow-hidden">
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#f4f6fb] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#f4f6fb] to-transparent z-20" />

        {/* Track 1: Smooth Left Glide */}
        <div className="flex space-x-6 animate-marquee py-3">
          {[...ALL_CLIENTS.slice(0, 11), ...ALL_CLIENTS.slice(0, 11)].map((client, idx) => (
            <div
              key={`tr1-${client.id}-${idx}`}
              onClick={() => setActiveClientModal(client)}
              className="w-[280px] sm:w-[320px] h-[140px] sm:h-[155px] rounded-[5px] bg-white border border-slate-200/90 flex flex-col items-center justify-center p-6 group hover:border-[#0b1330] hover:scale-[1.02] transition-all duration-300 shadow-none cursor-pointer shrink-0"
            >
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                style={{ mixBlendMode: "multiply" }}
                className="max-h-12 sm:max-h-14 max-w-[170px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="mt-2.5 text-center">
                <span className="font-heading font-bold text-xs text-slate-800 block truncate max-w-[240px]">
                  {client.name}
                </span>
                <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mt-0.5">
                  {client.sector} · {client.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2: Smooth Right Glide */}
        <div className="flex space-x-6 animate-marquee-reverse py-3 mt-3">
          {[...ALL_CLIENTS.slice(11), ...ALL_CLIENTS.slice(11)].map((client, idx) => (
            <div
              key={`tr2-${client.id}-${idx}`}
              onClick={() => setActiveClientModal(client)}
              className="w-[280px] sm:w-[320px] h-[140px] sm:h-[155px] rounded-[5px] bg-white border border-slate-200/90 flex flex-col items-center justify-center p-6 group hover:border-[#0b1330] hover:scale-[1.02] transition-all duration-300 shadow-none cursor-pointer shrink-0"
            >
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                style={{ mixBlendMode: "multiply" }}
                className="max-h-12 sm:max-h-14 max-w-[170px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="mt-2.5 text-center">
                <span className="font-heading font-bold text-xs text-slate-800 block truncate max-w-[240px]">
                  {client.name}
                </span>
                <span className="font-sans text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mt-0.5">
                  {client.sector} · {client.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. DETAILED CLIENT ROSTER GRID (FILTERABLE & EXPANDABLE) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16 sm:mt-24 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0b1330]">
              Full Client Directory ({filteredClients.length})
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Select any client below to inspect engagement scope, deliverables, and measured outcomes.
            </p>
          </div>
          <span className="font-sans text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-[3px] border border-slate-200">
            {selectedSector}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredClients.map((client) => (
            <motion.div
              key={client.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveClientModal(client)}
              className="p-6 rounded-[5px] bg-white border border-slate-200/90 hover:border-[#0b1330] cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-24 flex items-center">
                    <img
                      src={client.src}
                      alt={client.name}
                      style={{ mixBlendMode: "multiply" }}
                      className="max-h-9 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                    />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-[2px] border border-slate-100">
                    {client.location}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-[#0b1330] group-hover:text-slate-700 transition-colors leading-snug">
                    {client.name}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0b1330] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 mt-0.5" />
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                  {client.overview}
                </p>
              </div>

              {/* Impact Micro Metric */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-heading font-extrabold text-sm sm:text-base text-[#0b1330]">
                  {client.impactMetric}
                </span>
                <span className="font-sans text-[11px] text-slate-500 font-medium truncate max-w-[180px]">
                  {client.impactLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 5. ENTERPRISE PROOF POINTS & PARTNERSHIP STANDARDS ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-20 sm:mt-28 space-y-12">
        <div className="p-8 sm:p-12 lg:p-16 rounded-[5px] bg-[#0b1330] text-white border border-slate-800 space-y-10">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="inline-block px-3 py-1 rounded-[3px] bg-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider">
              Engagement Framework
            </span>
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Enterprise engineering rigor with startup velocity
            </h3>
            <p className="font-sans text-base text-slate-300 font-normal leading-relaxed">
              Every client engagement is managed through dedicated sprint pods, strict milestone tracking, and transparent continuous deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-white/15">
            <div className="text-left space-y-1">
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
                94%
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                Multi-Year Client Retention
              </p>
            </div>
            <div className="text-left space-y-1">
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
                1000+
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                Production Releases Delivered
              </p>
            </div>
            <div className="text-left space-y-1">
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
                &lt; 2 hrs
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                Solution Director Response SLA
              </p>
            </div>
            <div className="text-left space-y-1">
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
                100%
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                Code Base &amp; IP Ownership Transferred
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 6. INTERACTIVE CLIENT DETAIL SLIDE-UP MODAL ── */}
      <AnimatePresence>
        {activeClientModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm select-text">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white rounded-[5px] border border-slate-200 p-6 sm:p-10 text-left space-y-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-24 flex items-center">
                    <img src={activeClientModal.src} alt={activeClientModal.name} className="max-h-9 max-w-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#0b1330]">{activeClientModal.name}</h4>
                    <span className="font-sans text-xs text-slate-500 font-medium">{activeClientModal.sector} · {activeClientModal.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveClientModal(null)}
                  className="w-9 h-9 rounded-[4px] border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0b1330] hover:bg-slate-50 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <h5 className="font-heading font-extrabold text-xl text-[#0b1330]">Project &amp; Technical Scope</h5>
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeClientModal.overview}
                </p>

                <div className="p-4 rounded-[4px] bg-[#f8fafc] border border-slate-200 flex items-baseline gap-3">
                  <span className="font-heading font-extrabold text-3xl text-[#0b1330]">{activeClientModal.impactMetric}</span>
                  <span className="font-sans text-xs sm:text-sm font-medium text-slate-600">{activeClientModal.impactLabel}</span>
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-600">Technologies &amp; Services</span>
                  <div className="flex flex-wrap gap-2">
                    {activeClientModal.services.map((srv, sIdx) => (
                      <span key={sIdx} className="font-sans text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-[3px]">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Enterprise NDA Protected Case Study</span>
                <button
                  type="button"
                  onClick={() => setActiveClientModal(null)}
                  className="px-5 py-2 rounded-[4px] bg-[#0b1330] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#15234d] cursor-pointer"
                >
                  Close Detail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
