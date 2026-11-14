"use client";

import React from "react";
import { PROSTACK_ADVANTAGES } from "@/lib/prostackData";

export const ProstackAdvantages: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Heading & Platform Guarantee (Open Editorial, No Box) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#202B61] text-[11px] font-bold tracking-wider uppercase">
                <span>Migration &amp; Advantages</span>
              </div>
              <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] leading-snug text-balance">
                Why Organizations Migrate to Prostack
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
              Engineered from the ground up to solve operational friction without bloated plugins, performance regressions, or arbitrary revenue cuts.
            </p>

            <div className="pt-6 border-t border-slate-200/80 space-y-2">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61] block">
                The Prostack Platform Guarantee
              </span>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero third-party runtime dependencies. Continuous automated regression tests ensure every deployment maintains 95+ Core Web Vitals and zero checkout interruptions.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Editorial Rows (No Boxes, No Numbers, Separated by Lines) */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80">
            {PROSTACK_ADVANTAGES.map((benefit, idx) => (
              <div
                key={idx}
                className="py-5 sm:py-6 first:pt-0 last:pb-0 space-y-1.5"
              >
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61]">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed text-pretty font-normal">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
