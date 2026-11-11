"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
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
  description: string;
  icon: LucideIcon;
  linkLabel: string;
  href: string;
  isExternal?: boolean;
}

const PILLARS: ProstackPillar[] = [
  {
    title: "Visual Page Builder & CMS",
    description:
      "Design custom page layouts, manage multi-author blogs, and deploy dynamic Liquid templates with instant live previews and zero build delays.",
    icon: Layout,
    linkLabel: "Explore Builder & CMS",
    href: "/prostack",
  },
  {
    title: "E-Commerce & Catalog Control",
    description:
      "Manage product variants, inventory tracking, multi-currency catalogs, and streamlined checkout workflows engineered for high conversion.",
    icon: ShoppingBag,
    linkLabel: "View E-Commerce Specs",
    href: "/prostack",
  },
  {
    title: "Edge Speed & Built-In SEO",
    description:
      "Global edge-rendered pages with 95+ Core Web Vitals, automated Schema.org metadata rules, dynamic XML sitemaps, and 301 redirect automation.",
    icon: Gauge,
    linkLabel: "Check Speed Architecture",
    href: "/prostack",
  },
  {
    title: "Enterprise Security & Integrations",
    description:
      "Granular role-based access control, automated audit logs, daily encrypted backups, and open webhooks to integrate with your enterprise ERP.",
    icon: ShieldCheck,
    linkLabel: "Read Security Overview",
    href: "/prostack",
  },
];

export const HomeProstackSection: React.FC<HomeProstackSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="prostack"
      className="relative w-full bg-white text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 font-sans scroll-mt-24 border-t border-b border-slate-200/80"
    >
      <div className="relative max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
        
        {/* Top Header & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end text-left border-b border-slate-200/80 pb-10 sm:pb-12">
          
          {/* Left Column: Eyebrow, Logo, Heading & Narrative */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {/* 1. Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D61F28] font-sans">
              OUR PRODUCT • DIGITAL COMMERCE PLATFORM
            </p>

            {/* 2. Official Prostack Logo (Navy on White) */}
            <div className="pt-1 pb-1">
              <Link href="/prostack" className="inline-block group">
                <Image
                  src="/assets/images/prostack-logo-navy.png"
                  alt="Prostack Logo"
                  width={240}
                  height={47}
                  className="h-9 sm:h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
                  priority
                />
              </Link>
            </div>

            {/* 3. Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#202B61] tracking-tight leading-tight text-balance">
              Meet Prostack
            </h2>

            {/* 4. Narrative */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl text-pretty">
              A unified platform to build websites, manage headless commerce, and run online businesses. Prostack consolidates page design, product catalogs, SEO automation, and security infrastructure together in one connected workspace.
            </p>
          </div>

          {/* Right Column: Clean CTAs */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-3.5 pb-1">
            {/* Primary Action */}
            <a
              href="https://prostack.arkanet.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[4px] bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Prostack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Dedicated Details Page Link */}
            <Link
              href="/prostack"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-[4px] bg-white text-[#202B61] hover:bg-slate-50 border border-slate-200/90 hover:border-[#202B61]/50 font-sans font-bold text-xs sm:text-sm shadow-2xs transition-all"
            >
              <span>Platform Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary CTA */}
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden xl:inline-flex items-center justify-center text-xs font-semibold text-slate-600 hover:text-[#202B61] px-2 py-3.5 transition-colors cursor-pointer"
              >
                Talk to Team
              </button>
            )}
          </div>

        </div>

        {/* ── 4 OPEN EDITORIAL CAPABILITY COLUMNS (CISCO-STYLE REFERENCE) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full text-left pt-2">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Frameless Thin-Line Editorial Icon (Cisco Reference Style) */}
                  <div className="text-[#202B61] group-hover:text-[#D61F28] transition-colors">
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 stroke-[1.4]" />
                  </div>

                  {/* Column Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#202B61] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Factual, High-Value Copy */}
                  <p className="font-sans text-sm sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Editorial Chevron Text Link */}
                <div className="pt-2">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1 text-xs sm:text-[13.5px] font-bold text-[#202B61] group-hover:text-[#D61F28] transition-colors"
                  >
                    <span>{pillar.linkLabel}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
