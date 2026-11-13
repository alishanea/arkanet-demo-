"use client";

import React from "react";
import { PROSTACK_AUDIENCES } from "@/lib/prostackData";

export const ProstackAudience: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-slate-50/60 border-b border-slate-200/80 text-left select-none font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        {/* Section Header (No eyebrow text) */}
        <div className="max-w-2xl space-y-2.5 text-left">
          <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] tracking-tight leading-snug text-balance">
            Who Prostack is Built For
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            Engineered for organizations that have outgrown rigid templates and need enterprise-grade scale.
          </p>
        </div>

        {/* Clean Symmetrical Cards (Radius < 5px: rounded-[4px], No Micro Elements) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full pt-1">
          {PROSTACK_AUDIENCES.map((audience, idx) => {
            return (
              <div
                key={idx}
                className="rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="px-2.5 py-1 rounded-[3px] text-xs font-bold tracking-wider bg-[#202B61]/8 text-[#202B61]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61] text-balance">
                    {audience.role}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty">
                    {audience.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <p className="font-sans text-xs font-semibold text-[#202B61]">
                    Key advantage: <span className="font-normal text-slate-600">{audience.benefits}</span>
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
