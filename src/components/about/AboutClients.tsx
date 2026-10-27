"use client";

import React, { useState } from "react";
import { 
  Building2, 
  ShieldCheck, 
  Clock, 
  Users2, 
  Award, 
  Globe2, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

interface ClientItem {
  id: string;
  name: string;
  src: string;
  sector: string;
  region: string;
}

const ROW_1: ClientItem[] = [
  { id: "1", name: "Al Ras General Trading", src: "/assets/clinet-logo/1.png", sector: "Import & Export", region: "Dubai, UAE" },
  { id: "2", name: "Arbitralis Legal", src: "/assets/clinet-logo/2.png", sector: "Dispute & Compliance", region: "Dubai, UAE" },
  { id: "3", name: "B&G Store", src: "/assets/clinet-logo/3.png", sector: "Luxury Retail", region: "GCC" },
  { id: "4", name: "Decorpoint International", src: "/assets/clinet-logo/4.png", sector: "Architectural Interior", region: "Dubai, UAE" },
  { id: "5", name: "Dual Investments", src: "/assets/clinet-logo/5.png", sector: "Private Equity", region: "Abu Dhabi" },
  { id: "6", name: "Ebonite Sports", src: "/assets/clinet-logo/6.png", sector: "Retail & Equipment", region: "Middle East" },
  { id: "7", name: "Emirates National Holdings", src: "/assets/clinet-logo/7.png", sector: "Enterprise Group", region: "UAE" },
  { id: "8", name: "MCH Global", src: "/assets/clinet-logo/8.png", sector: "Brand Experience", region: "Dubai & Zurich" },
  { id: "9", name: "Filipino Institute", src: "/assets/clinet-logo/9.png", sector: "Higher Education", region: "Dubai & Bahrain" },
  { id: "10", name: "GDS Prestige", src: "/assets/clinet-logo/10.png", sector: "Concierge & Hospitality", region: "Dubai, UAE" },
  { id: "11", name: "Nexus Venture Partners", src: "/assets/clinet-logo/11.png", sector: "Venture Capital", region: "India & GCC" },
];

const ROW_2: ClientItem[] = [
  { id: "12", name: "Horizon Maritime", src: "/assets/clinet-logo/12.png", sector: "Maritime Fleet Telemetry", region: "Dubai, UAE" },
  { id: "13", name: "Al Futtaim Partner Entity", src: "/assets/clinet-logo/13.png", sector: "Automotive & Retail", region: "UAE & KSA" },
  { id: "14", name: "Apex Medical Systems", src: "/assets/clinet-logo/14.png", sector: "Healthcare Telehealth", region: "India" },
  { id: "15", name: "Lumina Technologies", src: "/assets/clinet-logo/15.png", sector: "Smart Grid Software", region: "GCC" },
  { id: "1-1", name: "Precision Diagnostics", src: "/assets/clinet-logo/1-1.png", sector: "Pathology & Lab Cloud", region: "Kerala, India" },
  { id: "2-1", name: "Solara Clean Energy", src: "/assets/clinet-logo/2-1.png", sector: "Commercial Solar", region: "UAE & India" },
  { id: "3-1", name: "Vesper Horology Paris", src: "/assets/clinet-logo/3-1.png", sector: "Luxury Timepieces", region: "France & Dubai" },
  { id: "4-1", name: "AeroLogistics Global", src: "/assets/clinet-logo/4-1.png", sector: "Supply Chain Cargo", region: "Global" },
  { id: "5-1", name: "CareFlow Health Systems", src: "/assets/clinet-logo/5-1.png", sector: "Clinical Portals", region: "Middle East" },
  { id: "6-1", name: "PulseFit Coaching Labs", src: "/assets/clinet-logo/6-1.png", sector: "Mobile Wellness", region: "India & UAE" },
  { id: "7-1", name: "Kratos CyberVision", src: "/assets/clinet-logo/7-1.png", sector: "Cloud Security", region: "GCC & Europe" },
];

const SECTORS = [
  "All Practices",
  "Enterprise SaaS",
  "FinTech & Wealth",
  "Healthcare & MedTech",
  "Logistics & Cargo",
  "Luxury Retail",
  "Education & Government"
];

const PARTNERSHIP_MODELS = [
  {
    title: "Dedicated Agile Engineering Squads",
    desc: "We embed full-stack engineering pods — senior architects, React/Next.js engineers, mobile specialists, and DevOps directors — directly into your product roadmaps for continuous, high-velocity output.",
    badge: "Agile Pods"
  },
  {
    title: "Transparent Bi-Weekly Milestone Sprints",
    desc: "Complete transparency at every step. Review working sprint demos, automated staging previews on Vercel and AWS, and direct Slack/WhatsApp channels with our solutions engineering team.",
    badge: "Zero Surprises"
  },
  {
    title: "Continuous Production SLAs & 24/7 Monitoring",
    desc: "Our involvement doesn&apos;t end on deployment day. We provide proactive uptime telemetry, automated cloud security patch cycles, and rapid response SLAs to ensure operational continuity.",
    badge: "Enterprise SLA"
  }
];

export function AboutClients() {
  const [selectedSector, setSelectedSector] = useState("All Practices");

  return (
    <section className="w-full py-20 sm:py-32 bg-[#f4f6fb] border-t border-slate-200/80 text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-block px-3 py-1 rounded-[4px] bg-[#0b1330] text-white text-[11px] font-bold uppercase tracking-wider">
              Client Ecosystem
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0b1330] tracking-tight leading-[1.12]">
              Trusted by regional leaders and global innovators
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl pt-1">
              From fast-scaling ventures in Dubai and Saudi Arabia to established enterprise conglomerates in India, ambitious organizations rely on Arkanet for mission-critical digital systems and engineering excellence.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 bg-white px-4 py-2.5 rounded-[4px] border border-slate-200/90 shadow-none">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Strict Mutual NDA Protected</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 bg-white px-4 py-2.5 rounded-[4px] border border-slate-200/90 shadow-none">
              <Globe2 className="w-4 h-4 text-slate-600 shrink-0" />
              <span>UAE · Saudi Arabia · Qatar · India · Europe</span>
            </div>
          </div>
        </div>

        {/* Sector Capability Tags */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
          {SECTORS.map((sec) => {
            const isActive = selectedSector === sec;
            return (
              <button
                key={sec}
                type="button"
                onClick={() => setSelectedSector(sec)}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0b1330] text-white"
                    : "bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-[#0b1330]"
                }`}
              >
                {sec}
              </button>
            );
          })}
        </div>

      </div>

      {/* ── EXPANSIVE CONTINUOUS MARQUEE SLIDERS WITH GLASS EDGE MASKS ── */}
      <div className="relative w-full mt-12 sm:mt-16 overflow-hidden py-4">
        {/* Left & Right Gradient Fade Masks for Luxury Editorial Depth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#f4f6fb] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#f4f6fb] to-transparent z-20" />

        {/* Track 1: Smooth Left Glide */}
        <div className="flex space-x-6 animate-marquee py-3">
          {[...ROW_1, ...ROW_1].map((client, idx) => (
            <div
              key={`r1-${client.id}-${idx}`}
              className="w-[240px] sm:w-[280px] h-[120px] sm:h-[130px] rounded-[5px] bg-white border border-slate-200/90 flex flex-col items-center justify-center p-6 group hover:border-[#0b1330] hover:scale-[1.02] transition-all duration-300 shadow-none cursor-pointer shrink-0"
            >
              <img
                src={client.src}
                alt={client.name}
                loading="eager"
                style={{ mixBlendMode: "multiply" }}
                className="max-h-12 sm:max-h-14 max-w-[170px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-[#0b1330] transition-colors mt-2 truncate max-w-full">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2: Smooth Reverse Right Glide */}
        <div className="flex space-x-6 animate-marquee-reverse py-3 mt-3">
          {[...ROW_2, ...ROW_2].map((client, idx) => (
            <div
              key={`r2-${client.id}-${idx}`}
              className="w-[240px] sm:w-[280px] h-[120px] sm:h-[130px] rounded-[5px] bg-white border border-slate-200/90 flex flex-col items-center justify-center p-6 group hover:border-[#0b1330] hover:scale-[1.02] transition-all duration-300 shadow-none cursor-pointer shrink-0"
            >
              <img
                src={client.src}
                alt={client.name}
                loading="eager"
                style={{ mixBlendMode: "multiply" }}
                className="max-h-12 sm:max-h-14 max-w-[170px] w-auto h-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-[#0b1330] transition-colors mt-2 truncate max-w-full">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CLIENT ENGAGEMENT & DELIVERY STANDARDS DECK ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-16 sm:mt-24 space-y-12">
        <div className="space-y-3 max-w-3xl text-left">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0b1330] tracking-tight">
            How we partner with clients
          </h3>
          <p className="font-sans text-base text-slate-600 leading-relaxed font-normal">
            Whether building zero-to-one digital products or modernizing high-transaction enterprise systems, we design engagement frameworks that guarantee speed and alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PARTNERSHIP_MODELS.map((model, idx) => (
            <div
              key={idx}
              className="rounded-[5px] p-7 sm:p-8 bg-white border border-slate-200/90 shadow-none flex flex-col justify-between text-left space-y-4 group hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-[3px] bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                  {model.badge}
                </span>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-[#0b1330] leading-snug">
                  {model.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Client Trust Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-200">
          <div className="text-left space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330]">
              94%
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
              Multi-Year Client Retention
            </p>
          </div>
          <div className="text-left space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330]">
              40+
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
              Enterprise Product Launches
            </p>
          </div>
          <div className="text-left space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330]">
              &lt; 2 hrs
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
              Priority Support SLA
            </p>
          </div>
          <div className="text-left space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b1330]">
              100%
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
              Client IP &amp; Code Ownership
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
