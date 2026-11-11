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
      className="relative w-full bg-[#202B61] text-white select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 font-sans scroll-mt-24 border-t border-b border-[#2d3a7c]"
    >
      <div className="relative max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
        
        {/* Top Header & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end text-left">
          
          {/* Left Column: Eyebrow, Logo, Heading & Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* 1. Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200 font-sans">
              OUR PRODUCT • DIGITAL COMMERCE PLATFORM
            </p>

            {/* 2. Official Prostack Logo */}
            <div className="pt-1 pb-1">
              <Link href="/prostack" className="inline-block group">
                <Image
                  src="/assets/images/prostack-logo.png"
                  alt="Prostack Logo"
                  width={240}
                  height={47}
                  className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-95 transition-opacity drop-shadow-sm"
                  priority
                />
              </Link>
            </div>

            {/* 3. Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-white tracking-tight leading-tight text-balance">
              Meet Prostack
            </h2>

            {/* 4. Short Description */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl text-pretty">
              A unified platform to build websites, manage content and run online businesses. Prostack brings website management, e-commerce, SEO and security tools together in one connected workspace.
            </p>
          </div>

          {/* Right Column: CTAs */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-3.5 pb-1">
            {/* 6. Primary CTA */}
            <a
              href="https://prostack.arkanet.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[4px] bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Prostack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Dedicated Details Page Link */}
            <Link
              href="/prostack"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-[4px] bg-white text-[#202B61] hover:bg-slate-100 font-sans font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>View Platform Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* 7. Optional Secondary CTA */}
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden xl:inline-flex items-center justify-center text-xs font-semibold text-slate-200 hover:text-white px-2 py-3.5 transition-colors cursor-pointer"
              >
                Talk to Our Team
              </button>
            )}
          </div>

        </div>

        {/* 5. Capability Highlights Grid (5 Clean Solid White Cards on Arkanet Navy) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 pt-2 text-left">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-[4px] bg-white text-[#202B61] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 group"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-[4px] bg-[#202B61]/5 border border-[#202B61]/10 flex items-center justify-center text-[#202B61] group-hover:bg-[#D61F28] group-hover:text-white group-hover:border-[#D61F28] transition-colors duration-200">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
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
