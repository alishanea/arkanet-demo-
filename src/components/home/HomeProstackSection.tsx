"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Layout,
  ShoppingBag,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface HomeProstackSectionProps {
  onOpenBooking?: () => void;
}

interface ProstackPillar {
  title: string;
  oneLineDetail: string;
  icon: LucideIcon;
  linkLabel: string;
  href: string;
}

const PILLARS: ProstackPillar[] = [
  {
    title: "Website & CMS Builder",
    oneLineDetail: "Drag-and-drop page assembly, multi-author blogs, and Liquid theme templates.",
    icon: Layout,
    linkLabel: "Explore Builder & CMS",
    href: "/prostack#capabilities",
  },
  {
    title: "E-Commerce & Orders",
    oneLineDetail: "Product variants, real-time inventory tracking, and high-velocity checkout.",
    icon: ShoppingBag,
    linkLabel: "View E-Commerce Specs",
    href: "/prostack#capabilities",
  },
  {
    title: "Edge Speed & SEO",
    oneLineDetail: "Sub-second edge caching, automated metadata rules, and dynamic sitemaps.",
    icon: Gauge,
    linkLabel: "Check Speed Architecture",
    href: "/prostack#capabilities",
  },
  {
    title: "Security & Integrations",
    oneLineDetail: "Role-based permissions, automated audit logs, and enterprise REST APIs.",
    icon: ShieldCheck,
    linkLabel: "Read Security Overview",
    href: "/prostack#capabilities",
  },
];

export const HomeProstackSection: React.FC<HomeProstackSectionProps> = () => {
  return (
    <section
      id="prostack"
      className="relative w-full bg-white text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 font-sans scroll-mt-24 border-t border-b border-slate-200/80"
    >
      <div className="relative max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
        
        {/* Top Header Grid: Logo + One concise sentence on left, just an arrow Explore Prostack on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8 sm:pb-10 text-left">
          
          {/* Left Column: Official Prostack Logo + Crisp 1-sentence value statement */}
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

          {/* Right Side: Just an Arrow Explore Prostack Option */}
          <div className="shrink-0 pt-1 pb-1">
            <Link
              href="/prostack"
              className="group inline-flex items-center gap-2.5 font-sans font-bold text-sm sm:text-base text-[#202B61] hover:text-[#D61F28] transition-colors"
            >
              <span>Explore Prostack</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#D61F28]" />
            </Link>
          </div>

        </div>

        {/* ── 4 OPEN EDITORIAL CAPABILITY COLUMNS (ONE-LINE DETAILS, CISCO-STYLE DESIGN) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full text-left pt-2">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  {/* Frameless Thin-Line Editorial Icon */}
                  <div className="text-[#202B61] group-hover:text-[#D61F28] transition-colors">
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.4]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#202B61] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* One-Line Detail with Good Clean Design */}
                  <p className="font-sans text-xs sm:text-[13.5px] text-slate-600 leading-normal font-normal">
                    {pillar.oneLineDetail}
                  </p>
                </div>

                {/* Editorial Chevron Text Link to Detailed Prostack Page */}
                <div className="pt-2">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-bold text-[#202B61] group-hover:text-[#D61F28] transition-colors"
                  >
                    <span>{pillar.linkLabel}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
