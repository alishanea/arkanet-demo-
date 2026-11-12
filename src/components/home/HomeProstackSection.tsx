"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Layout,
  ShoppingBag,
  Gauge,
  ShieldCheck,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

interface HomeProstackSectionProps {
  onOpenBooking?: () => void;
}

interface ProstackStation {
  id: string;
  number: string;
  title: string;
  phase: string;
  oneLineDetail: string;
  icon: LucideIcon;
  linkLabel: string;
  href: string;
  flowTo: string;
}

const STATIONS: ProstackStation[] = [
  {
    id: "builder",
    number: "01",
    phase: "BUILD",
    title: "Website & CMS Builder",
    oneLineDetail: "Drag-and-drop page assembly, multi-author blogs, and Liquid theme templates.",
    icon: Layout,
    linkLabel: "Explore Builder & CMS",
    href: "/prostack#capabilities",
    flowTo: "Feeds storefront into E-Commerce",
  },
  {
    id: "ecommerce",
    number: "02",
    phase: "TRANSACT",
    title: "E-Commerce & Orders",
    oneLineDetail: "Product variants, real-time inventory tracking, and high-velocity checkout.",
    icon: ShoppingBag,
    linkLabel: "View E-Commerce Specs",
    href: "/prostack#capabilities",
    flowTo: "Routes traffic through Edge Speed",
  },
  {
    id: "speed",
    number: "03",
    phase: "ACCELERATE",
    title: "Edge Speed & SEO",
    oneLineDetail: "Sub-second edge caching, automated metadata rules, and dynamic sitemaps.",
    icon: Gauge,
    linkLabel: "Check Speed Architecture",
    href: "/prostack#capabilities",
    flowTo: "Hardened by Zero-Trust Security",
  },
  {
    id: "security",
    number: "04",
    phase: "PROTECT",
    title: "Security & Integrations",
    oneLineDetail: "Role-based permissions, automated audit logs, and enterprise REST APIs.",
    icon: ShieldCheck,
    linkLabel: "Read Security Overview",
    href: "/prostack#capabilities",
    flowTo: "Loops back to continuous site iteration",
  },
];

export const HomeProstackSection: React.FC<HomeProstackSectionProps> = () => {
  const [activeStation, setActiveStation] = useState<string | null>(null);

  return (
    <section
      id="prostack"
      className="relative w-full bg-white text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 font-sans scroll-mt-24 border-t border-b border-slate-200/80 overflow-hidden"
    >
      <div className="relative max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-16">
        
        {/* Top Header: Official Prostack Logo + Crisp 1-sentence value statement + Arrow Explore Prostack */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8 sm:pb-10 text-left">
          
          {/* Left Column: Official Prostack Logo + Value Statement */}
          <div className="space-y-4 max-w-2xl text-left">
            <Link href="/prostack" className="inline-block group">
              <Image
                src="/assets/images/prostack-logo-navy.png"
                alt="Prostack Logo"
                width={220}
                height={42}
                className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-85 transition-opacity"
                priority
              />
            </Link>

            <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal text-pretty">
              A unified platform to build websites, manage headless commerce, and scale digital operations in one connected workspace.
            </p>
          </div>

          {/* Right Side: Arrow Explore Prostack Option */}
          <div className="shrink-0 pt-1 pb-1">
            <Link
              href="/prostack"
              className="group inline-flex items-center gap-2.5 font-prostack font-bold text-sm sm:text-base text-[#202B61] hover:text-[#D61F28] transition-colors"
            >
              <span>Explore Prostack</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#D61F28]" />
            </Link>
          </div>

        </div>

        {/* ── DESKTOP VIEW: CIRCULAR ROAD FLOW DIAGRAM ── */}
        <div className="hidden lg:block relative w-full pt-4 pb-8">
          
          {/* Flow Direction Indicator Banner */}
          <div className="flex items-center justify-between pb-6 text-xs text-slate-400 font-prostack uppercase tracking-wider">
            <div className="flex items-center gap-2 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#D61F28] animate-pulse" />
              <span>Unified Circular Flow Lifecycle</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Continuous Clockwise Delivery</span>
              <RefreshCw className="w-3.5 h-3.5 text-[#202B61]/60" />
            </div>
          </div>

          {/* Circular Roadway Canvas */}
          <div className="relative w-full max-w-[1240px] mx-auto min-h-[580px] flex items-center justify-center">

            {/* SVG Road Network: Outer Loop Road, Central Roundabout & Connecting Spokes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1200 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Marker for Roadway Direction Arrows */}
                <marker
                  id="roadArrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#202B61" />
                </marker>
                <marker
                  id="roadArrowRed"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D61F28" />
                </marker>
              </defs>

              {/* 1. OUTER ROAD TRACK: Rounded Rectangular Highway Connecting All 4 Stations */}
              {/* Outer boundary */}
              <rect
                x="80"
                y="50"
                width="1040"
                height="520"
                rx="60"
                stroke="#E2E8F0"
                strokeWidth="24"
                strokeLinejoin="round"
              />
              {/* Road surface */}
              <rect
                x="80"
                y="50"
                width="1040"
                height="520"
                rx="60"
                stroke="#F8FAFC"
                strokeWidth="20"
                strokeLinejoin="round"
              />
              {/* Center dashed road lane */}
              <rect
                x="80"
                y="50"
                width="1040"
                height="520"
                rx="60"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="10 12"
                strokeLinejoin="round"
              />

              {/* Directional Highway Flow Arrows along Outer Circuit */}
              {/* Top road lane: Left to Right (Station 01 -> Station 02) */}
              <line
                x1="450"
                y1="50"
                x2="750"
                y2="50"
                stroke="#202B61"
                strokeWidth="2.5"
                markerEnd="url(#roadArrowRed)"
              />
              {/* Right road lane: Top to Bottom (Station 02 -> Station 03) */}
              <line
                x1="1120"
                y1="230"
                x2="1120"
                y2="390"
                stroke="#202B61"
                strokeWidth="2.5"
                markerEnd="url(#roadArrowRed)"
              />
              {/* Bottom road lane: Right to Left (Station 03 -> Station 04) */}
              <line
                x1="750"
                y1="570"
                x2="450"
                y2="570"
                stroke="#202B61"
                strokeWidth="2.5"
                markerEnd="url(#roadArrowRed)"
              />
              {/* Left road lane: Bottom to Top (Station 04 -> Station 01) */}
              <line
                x1="80"
                y1="390"
                x2="80"
                y2="230"
                stroke="#202B61"
                strokeWidth="2.5"
                markerEnd="url(#roadArrowRed)"
              />

              {/* 2. CENTRAL ROUNDABOUT ROAD RING */}
              {/* Outer circle of roundabout */}
              <circle
                cx="600"
                cy="310"
                r="165"
                stroke="#E2E8F0"
                strokeWidth="18"
              />
              {/* Roundabout inner surface */}
              <circle
                cx="600"
                cy="310"
                r="165"
                stroke="#F8FAFC"
                strokeWidth="14"
              />
              {/* Roundabout center dashed road lane */}
              <circle
                cx="600"
                cy="310"
                r="165"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="8 8"
              />

              {/* 3. RADIAL HIGHWAY CONNECTORS (Connecting Stations to Center Roundabout) */}
              {/* Top-Left Spoke (Station 01 to Center) */}
              <line
                x1="280"
                y1="160"
                x2="475"
                y2="225"
                stroke="#E2E8F0"
                strokeWidth="12"
              />
              <line
                x1="280"
                y1="160"
                x2="475"
                y2="225"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Top-Right Spoke (Station 02 to Center) */}
              <line
                x1="920"
                y1="160"
                x2="725"
                y2="225"
                stroke="#E2E8F0"
                strokeWidth="12"
              />
              <line
                x1="920"
                y1="160"
                x2="725"
                y2="225"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Bottom-Right Spoke (Station 03 to Center) */}
              <line
                x1="920"
                y1="460"
                x2="725"
                y2="395"
                stroke="#E2E8F0"
                strokeWidth="12"
              />
              <line
                x1="920"
                y1="460"
                x2="725"
                y2="395"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Bottom-Left Spoke (Station 04 to Center) */}
              <line
                x1="280"
                y1="460"
                x2="475"
                y2="395"
                stroke="#E2E8F0"
                strokeWidth="12"
              />
              <line
                x1="280"
                y1="460"
                x2="475"
                y2="395"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Station Waypoint Dots on Roadway */}
              <circle cx="80" cy="120" r="7" fill="#D61F28" stroke="#FFFFFF" strokeWidth="3" />
              <circle cx="1120" cy="120" r="7" fill="#D61F28" stroke="#FFFFFF" strokeWidth="3" />
              <circle cx="1120" cy="500" r="7" fill="#D61F28" stroke="#FFFFFF" strokeWidth="3" />
              <circle cx="80" cy="500" r="7" fill="#D61F28" stroke="#FFFFFF" strokeWidth="3" />
            </svg>

            {/* ── 4 CORNER ROAD STATIONS (INTERACTIVE HTML CARDS OVER THE ROAD NETWORK) ── */}
            <div className="relative z-10 w-full grid grid-cols-2 gap-x-44 gap-y-36 p-6">
              
              {STATIONS.map((station) => {
                const Icon = station.icon;
                const isHovered = activeStation === station.id;

                return (
                  <div
                    key={station.id}
                    onMouseEnter={() => setActiveStation(station.id)}
                    onMouseLeave={() => setActiveStation(null)}
                    className="relative bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-[4px] p-6 text-left shadow-[0_2px_12px_rgba(32,43,97,0.03)] hover:shadow-[0_8px_24px_rgba(32,43,97,0.08)] hover:border-[#202B61]/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    {/* Top Row: Milestone Road Badge + Phase + Icon */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <span className="font-prostack font-bold text-xs text-white bg-[#202B61] px-2 py-0.5 rounded-[3px]">
                          {station.number}
                        </span>
                        <span className="font-prostack text-[11px] font-bold text-[#D61F28] uppercase tracking-wider">
                          {station.phase}
                        </span>
                      </div>
                      <div className="text-[#202B61] group-hover:text-[#D61F28] transition-colors">
                        <Icon className="w-5 h-5 stroke-[1.7]" />
                      </div>
                    </div>

                    {/* Middle: Title & One-Line Detail */}
                    <div className="py-3.5 space-y-1.5">
                      <h3 className="font-prostack font-bold text-lg text-[#202B61] tracking-tight group-hover:text-[#202B61] transition-colors">
                        {station.title}
                      </h3>
                      <p className="font-sans text-[13.5px] text-slate-600 leading-relaxed font-normal">
                        {station.oneLineDetail}
                      </p>
                    </div>

                    {/* Bottom: Next Route + Action Link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-sans text-slate-400">
                        {station.flowTo}
                      </span>
                      <Link
                        href={station.href}
                        className="inline-flex items-center gap-1 font-prostack text-xs font-bold text-[#202B61] group-hover:text-[#D61F28] transition-colors"
                      >
                        <span>{station.linkLabel}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* ── CENTER HUB: PROSTACK CORE ROUNDABOUT ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
              <Link
                href="/prostack"
                className="group w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(32,43,97,0.06)] hover:border-[#D61F28] hover:shadow-[0_12px_40px_rgba(214,31,40,0.12)] transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer"
              >
                {/* Prostack Red Mark */}
                <div className="mb-2 relative">
                  <Image
                    src="/assets/images/prostack-mark-red.png"
                    alt="Prostack Core Mark"
                    width={40}
                    height={40}
                    className="w-9 h-9 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Prostack Name in exact Inter logo font */}
                <span className="font-prostack font-black text-xl text-[#202B61] tracking-tight">
                  PROSTACK CORE
                </span>

                <span className="font-prostack text-[11px] font-bold text-[#D61F28] uppercase tracking-wider mt-1">
                  Unified Connected Engine
                </span>

                <p className="font-sans text-[11.5px] text-slate-500 leading-snug mt-2 px-3">
                  All 4 modules communicate on one shared data layer with zero external plugin lag.
                </p>

                <div className="mt-3.5 inline-flex items-center gap-1 text-xs font-prostack font-bold text-[#202B61] group-hover:text-[#D61F28] transition-colors border border-slate-200 rounded-full px-3 py-1 bg-slate-50 group-hover:bg-white">
                  <span>Explore Engine</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

          </div>

          {/* Flow Direction Bottom Legend */}
          <div className="flex items-center justify-center gap-6 pt-4 text-xs font-sans text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-6 h-0.5 border-t-2 border-dashed border-slate-400 inline-block" />
              Circular Continuous Roadway
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D61F28] inline-block" />
              Integrated Road Junction
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px] font-bold text-[#202B61]">
                CORE
              </span>
              Shared Database &amp; Auth
            </span>
          </div>

        </div>

        {/* ── MOBILE / TABLET VIEW: CONNECTED ROADMAP FLOWCHART ── */}
        <div className="block lg:hidden w-full space-y-6 pt-2">
          
          {/* Mobile Central Hub Card */}
          <div className="bg-white border-2 border-slate-200/90 rounded-[4px] p-5 text-center space-y-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-200 mx-auto">
              <Image
                src="/assets/images/prostack-mark-red.png"
                alt="Prostack Mark"
                width={28}
                height={28}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h3 className="font-prostack font-black text-lg text-[#202B61]">
                PROSTACK CORE ENGINE
              </h3>
              <p className="font-prostack text-xs font-bold text-[#D61F28] uppercase tracking-wide">
                Unified Connected Circular Lifecycle
              </p>
            </div>
            <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              All 4 capabilities connect seamlessly into a continuous, self-reinforcing digital commerce engine.
            </p>
          </div>

          {/* Mobile Vertical Flowchart Road Track */}
          <div className="relative pl-6 sm:pl-8 space-y-6">
            
            {/* Vertical Road Track Line */}
            <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 border-l-2 border-dashed border-slate-300" />

            {STATIONS.map((station, idx) => {
              const Icon = station.icon;
              return (
                <div key={station.id} className="relative group text-left">
                  {/* Road Waypoint Dot */}
                  <div className="absolute -left-6 sm:-left-8 top-4 w-4 h-4 rounded-full bg-white border-2 border-[#D61F28] ring-4 ring-white flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D61F28]" />
                  </div>

                  {/* Station Card */}
                  <div className="bg-white border border-slate-200 rounded-[4px] p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-prostack font-bold text-xs text-white bg-[#202B61] px-2 py-0.5 rounded-[3px]">
                          {station.number}
                        </span>
                        <span className="font-prostack text-[11px] font-bold text-[#D61F28] uppercase tracking-wider">
                          {station.phase}
                        </span>
                      </div>
                      <Icon className="w-5 h-5 text-[#202B61] stroke-[1.6]" />
                    </div>

                    <div>
                      <h4 className="font-prostack font-bold text-base text-[#202B61]">
                        {station.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-600 leading-normal mt-1">
                        {station.oneLineDetail}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-sans">
                        Next: {station.flowTo}
                      </span>
                      <Link
                        href={station.href}
                        className="inline-flex items-center gap-1 font-prostack text-xs font-bold text-[#202B61] hover:text-[#D61F28]"
                      >
                        <span>{station.linkLabel}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loop Back Indicator at Bottom of Mobile Track */}
            <div className="relative pl-0 pt-2 text-center sm:text-left flex items-center gap-2 text-xs font-prostack font-bold text-[#202B61]">
              <RefreshCw className="w-3.5 h-3.5 text-[#D61F28]" />
              <span>Loops continuously back to Website &amp; CMS iteration</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
