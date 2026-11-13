"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  ApplicationItem,
  ApplicationCategory,
  APPLICATIONS,
  CATEGORIES,
} from "@/lib/applicationsData";

interface ApplicationGridProps {
  onSelectApp: (app: ApplicationItem) => void;
}

export const ApplicationGrid: React.FC<ApplicationGridProps> = ({ onSelectApp }) => {
  const [selectedCategory, setSelectedCategory] = useState<ApplicationCategory>("All");

  const filteredApps =
    selectedCategory === "All"
      ? APPLICATIONS
      : APPLICATIONS.filter((item) => item.category === selectedCategory);

  return (
    <section id="directory" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 text-left font-sans bg-white border-b border-slate-200/90 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto space-y-8">

        {/* Directory Header & Category Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200/90">
          <div className="space-y-1">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight text-balance">
              All Applications &amp; Storefronts
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#202B61]/70 text-pretty">
              Browse our complete catalog of verified mobile releases and e-commerce platforms.
            </p>
          </div>

          {/* Segmented Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#202B61] text-white shadow-xs"
                      : "bg-white text-[#202B61]/75 hover:text-[#202B61] hover:bg-slate-50 border border-slate-200/90"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Clean Release Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredApps.map((app) => {
            return (
              <div
                key={app.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelectApp(app)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectApp(app);
                  }
                }}
                className="group rounded-[24px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(32,43,97,0.03)] p-5 sm:p-6 hover:border-[#202B61]/40 hover:shadow-[0_16px_40px_rgba(32,43,97,0.08)] hover:-translate-y-1 cursor-pointer transition-all duration-300 flex flex-col justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]"
              >
                <div className="space-y-4">
                  {/* Clean Preview Image */}
                  <div className="relative aspect-[16/10] w-full rounded-[16px] overflow-hidden bg-slate-100 border border-slate-200/80">
                    <Image
                      src={app.previewImage}
                      alt={app.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Metadata & Title */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#202B61]/70 block">
                      {app.category} • {app.subCategory}
                    </span>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61] leading-snug group-hover:text-[#202B61]/80 transition-colors text-balance">
                      {app.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/80 leading-relaxed line-clamp-2 text-pretty">
                      {app.tagline}
                    </p>
                  </div>
                </div>

                {/* Clean Bottom Action Row */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[#202B61]/70 font-semibold text-[11px]">
                    {app.platformBadge}
                  </span>
                  <span className="inline-flex items-center gap-1 font-sans font-bold text-xs text-[#202B61] group-hover:translate-x-0.5 transition-transform">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

