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
      className="relative w-full bg-[#06070E] text-white select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans scroll-mt-24 border-t border-white/[0.08]"
    >
      {/* ── HIGH-END LUXURY ATMOSPHERIC AURA (SAPPHIRE & RUBY FILAMENTS) ── */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#202B61]/35 via-[#06070E]/60 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[420px] h-[280px] bg-gradient-to-br from-[#D61F28]/12 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-gradient-to-tl from-[#202B61]/25 to-transparent blur-[130px] pointer-events-none" />

      <div className="relative max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-14">
        
        {/* Top Header & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end text-left">
          
          {/* Left Column: Eyebrow, Logo, Heading & Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* 1. Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400 font-sans">
              OUR PRODUCT • DIGITAL COMMERCE PLATFORM
            </p>

            {/* 2. Official Prostack Logo (Luminous on Dark Canvas) */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Meet Prostack
            </h2>

            {/* 4. Short Description */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-pretty">
              A unified platform to build websites, manage content and run online businesses. Prostack brings website management, e-commerce, SEO and security tools together in one connected workspace.
            </p>
          </div>

          {/* Right Column: CTAs (Radius less than 5) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-3.5 pb-1">
            {/* 6. Primary CTA */}
            <a
              href="https://prostack.arkanet.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[4px] bg-[#D61F28] text-white hover:bg-[#B9151E] font-sans font-bold text-xs sm:text-sm tracking-tight shadow-[0_2px_16px_rgba(214,31,40,0.35)] active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Prostack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Dedicated Details Page Link */}
            <Link
              href="/prostack"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-[4px] bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.15] text-white font-sans font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all"
            >
              <span>View Platform Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* 7. Optional Secondary CTA */}
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden xl:inline-flex items-center justify-center text-xs font-semibold text-slate-300 hover:text-white px-2 py-3.5 transition-colors cursor-pointer"
              >
                Talk to Our Team
              </button>
            )}
          </div>

        </div>

        {/* 5. Capability Highlights Grid (5 Precision Luxury Cards with Radius Less Than 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 pt-2 text-left">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-[4px] bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.09] hover:border-white/[0.22] p-5 sm:p-6 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-[4px] bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-white group-hover:bg-[#D61F28] group-hover:border-[#D61F28] transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed text-pretty">
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
