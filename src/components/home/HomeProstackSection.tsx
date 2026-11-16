"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layout,
  ShoppingBag,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface HomeProstackSectionProps {
  onOpenBooking?: () => void;
}

interface PillarItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PILLARS: PillarItem[] = [
  {
    icon: Layout,
    title: "Build with freedom.",
    description:
      "Assemble rich editorial pages with modular drag-and-drop ease, full revision history, and Shopify-compatible Liquid themes that give your engineering team complete code autonomy, Git workflows, and rapid deployment velocity across every digital storefront.",
  },
  {
    icon: ShoppingBag,
    title: "Transact without limits.",
    description:
      "Manage expansive product catalogs, live multi-warehouse inventory synchronization, and high-concurrency global checkouts with localized multi-currency processing, automated regional tax compliance, and modern resilient cloud architecture with zero arbitrary revenue or platform transaction penalties.",
  },
  {
    icon: Zap,
    title: "Scale at the edge.",
    description:
      "Deliver blazing sub-second international content distribution, automated 95+ Core Web Vitals performance, automated dynamic search indexation, and granular role-based access security out of the box with zero third-party plugin conflicts or fragile dependencies.",
  },
];

export const HomeProstackSection: React.FC<HomeProstackSectionProps> = () => {
  return (
    <section
      id="prostack"
      className="relative w-full bg-white text-[#202B61] select-none py-12 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 font-sans scroll-mt-24 border-t border-slate-200/80"
    >
      <div className="relative max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 text-left">
        
        {/* ── TOP: Prostack Brand Logo + Direct Narrative ── */}
        <div className="space-y-3 max-w-3xl text-left">
          <a
            href="https://prostack.arkanet.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <Image
              src="/assets/images/prostack-logo-navy.png"
              alt="Prostack Logo"
              width={200}
              height={38}
              className="h-7 sm:h-8 w-auto object-contain group-hover:opacity-85 transition-opacity"
              priority
            />
          </a>

          <p className="section-desc max-w-3xl text-pretty">
            A unified platform to build high-performance websites, manage headless commerce, and scale digital operations in one connected workspace without plugin chaos.
          </p>
        </div>

        {/* ── 3 CLEAN OPEN EDITORIAL COLUMNS (EXACT 4-LINE BALANCED FLOW & EQUAL WORD COUNT) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-left pt-2">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex flex-col justify-between">
                <div>
                  {/* Clean Line Icon */}
                  <div className="text-[#202B61] mb-4 sm:mb-5">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>

                  {/* Bold Title ending with a period */}
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Editorial Narrative Paragraph: Balanced 4 lines with increased breathing room */}
                  <div className="mt-4 sm:mt-4.5 min-h-[5.5rem] sm:min-h-[5.85rem] flex items-start">
                    <p className="font-sans text-[13.5px] sm:text-[14px] xl:text-[14.5px] text-slate-600 leading-[1.65] font-normal text-pretty">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM RIGHT: Simple Single Explore Arrow Link ── */}
        <div className="pt-4 sm:pt-6 flex justify-end">
          <a
            href="https://prostack.arkanet.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-[#202B61] hover:text-[#1740b3] transition-colors"
          >
            <span>Explore Prostack</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#202B61] group-hover:text-[#1740b3]" />
          </a>
        </div>

      </div>
    </section>
  );
};
