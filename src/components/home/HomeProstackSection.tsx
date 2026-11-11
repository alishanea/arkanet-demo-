"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layout, ShoppingBag, Gauge, BarChart3, ShieldCheck } from "lucide-react";

interface HomeProstackSectionProps {
  onOpenBooking?: () => void;
}

const HIGHLIGHTS = [
  {
    title: "Website Builder & CMS",
    description: "Custom page layouts, blog management, and Liquid theme templates.",
    icon: Layout,
  },
  {
    title: "E-commerce & Order Management",
    description: "Product catalog, inventory tracking, variant control, and checkout.",
    icon: ShoppingBag,
  },
  {
    title: "SEO & Performance Tools",
    description: "Built-in metadata rules, redirect automation, and Edge speed checks.",
    icon: Gauge,
  },
  {
    title: "Analytics & Business Insights",
    description: "Real-time traffic telemetry, conversion metrics, and customer trends.",
    icon: BarChart3,
  },
  {
    title: "Security & Integrations",
    description: "Role-based access control, automated audit logs, and API extensions.",
    icon: ShieldCheck,
  },
];

export const HomeProstackSection: React.FC<HomeProstackSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="prostack"
      className="relative w-full bg-white text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-t border-slate-200/80 overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        
        {/* Top Header & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end text-left">
          
          {/* Left Column: Eyebrow, Logo, Heading & Narrative */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {/* 1. Eyebrow */}
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/70 font-sans">
              OUR PRODUCT • DIGITAL COMMERCE PLATFORM
            </p>

            {/* 2. Product Logo Asset */}
            <div className="pt-1 pb-1">
              <Link href="/prostack" className="inline-block group">
                <Image
                  src="/assets/images/prostack-logo.png"
                  alt="Prostack Logo"
                  width={220}
                  height={43}
                  className="h-9 sm:h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
                  priority
                />
              </Link>
            </div>

            {/* 3. Heading */}
            <h2 className="section-h2 text-balance">
              Meet Prostack
            </h2>

            {/* 4. Short Description */}
            <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal max-w-2xl text-pretty">
              A unified platform to build websites, manage content and run online businesses. Prostack brings website management, e-commerce, SEO and security tools together in one place.
            </p>
          </div>

          {/* Right Column: CTAs */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-3.5 pb-1">
            {/* 6. Primary CTA (Styled in Prostack Red with NEW Ribbon) */}
            <div className="relative inline-flex items-center">
              <span className="absolute -top-2.5 -right-1 z-10 px-1.5 py-0.5 rounded-full bg-white text-[#D61F28] border border-[#D61F28]/35 text-[8.5px] font-black uppercase tracking-wider shadow-sm flex items-center gap-0.5 pointer-events-none select-none">
                <span className="w-1 h-1 rounded-full bg-[#D61F28] animate-pulse" />
                NEW
              </span>
              <a
                href="https://prostack.arkanet.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore Prostack</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Dedicated Details Page Link */}
            <Link
              href="/prostack"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-[#202B61] font-sans font-semibold text-xs sm:text-sm transition-all"
            >
              <span>View Platform Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* 7. Optional Secondary CTA */}
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden xl:inline-flex items-center justify-center text-xs font-semibold text-[#202B61]/75 hover:text-[#202B61] px-2 py-3 transition-colors cursor-pointer"
              >
                Talk to Our Team
              </button>
            )}
          </div>

        </div>

        {/* 5. Capability Highlights Grid (5 Clean Architectural Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 pt-2 text-left">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-[#202B61]/35 hover:shadow-[0_8px_24px_rgba(32,43,97,0.05)] transition-all duration-200 group"
              >
                <div className="space-y-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#202B61]/5 border border-[#202B61]/10 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#202B61] leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#202B61]/70 leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

