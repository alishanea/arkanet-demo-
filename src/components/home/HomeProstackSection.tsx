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
      "Assemble rich editorial pages with drag-and-drop ease, full revision history, and Shopify-compatible Liquid themes that give your engineering team complete code\u00A0control.",
  },
  {
    icon: ShoppingBag,
    title: "Transact without limits.",
    description:
      "Manage SKU catalogs, real-time multi-warehouse inventory sync, and high-concurrency checkouts globally with zero arbitrary revenue\u00A0penalties.",
  },
  {
    icon: Zap,
    title: "Scale at the edge.",
    description:
      "Achieve sub-second edge distribution, automated 95+ Core Web Vitals, dynamic SEO, and role-based security out of the box without plugin\u00A0conflicts.",
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

        {/* ── 3 CLEAN OPEN EDITORIAL COLUMNS (STANDARDIZED BODY TEXT & TITLES) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-left">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="space-y-3">
                {/* Clean Line Icon */}
                <div className="text-[#202B61]">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Bold Title ending with a period */}
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                {/* Editorial Narrative Paragraph */}
                <div>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-pretty">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM RIGHT: Simple Single Explore Arrow Link ── */}
        <div className="pt-2 flex justify-end">
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
