"use client";

import React from "react";
import { PROSTACK_ADVANTAGES } from "@/lib/prostackData";

export const ProstackAdvantages: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Heading & Platform Guarantee (No Eyebrow) */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
              Why Organizations Migrate to Prostack
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
              Engineered from the ground up to solve operational friction without bloated plugins, performance regressions, or arbitrary revenue cuts.
            </p>

            <div className="p-6 rounded-[4px] bg-[#F4F6FB] border border-slate-200/90 space-y-2">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61] block">
                The Prostack Platform Guarantee
              </span>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero third-party runtime dependencies. Continuous automated regression tests ensure every deployment maintains 95+ Core Web Vitals and zero checkout interruptions.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Advantage Rows (Radius < 5px: rounded-[4px], No Micro Elements) */}
          <div className="lg:col-span-7 space-y-3.5">
            {PROSTACK_ADVANTAGES.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-[4px] bg-slate-50/60 border border-slate-200/90 hover:border-[#202B61]/40 transition-all"
              >
                <span className="px-2.5 py-1 rounded-[3px] text-xs font-bold tracking-wider bg-[#202B61]/10 text-[#202B61] shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#202B61] text-balance">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty font-normal">
                    {benefit.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
