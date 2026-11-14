"use client";

import React from "react";

interface AudienceCard {
  number: string;
  role: string;
  description: string;
  advantage: string;
}

const AUDIENCE_CARDS: AudienceCard[] = [
  {
    number: "01",
    role: "Founders & Growing Brands",
    description:
      "Launch custom high-performance storefronts quickly without sacrificing engineering flexibility, SEO rankings, or platform ownership.",
    advantage: "Faster time to revenue with zero developer bottleneck.",
  },
  {
    number: "02",
    role: "High-Volume Commerce Brands",
    description:
      "Scale complex SKU catalogs across multiple global regions, local currencies, and real-time multi-warehouse inventory logistics.",
    advantage: "Zero arbitrary revenue penalties on transaction volume.",
  },
  {
    number: "03",
    role: "Digital Agencies & Web Studios",
    description:
      "Standardize on an agile, robust framework that empowers non-technical clients while offering engineers full source code control.",
    advantage: "Reusable components with accelerated client delivery.",
  },
  {
    number: "04",
    role: "Enterprise CTOs & IT Leaders",
    description:
      "Enforce granular role-based access control, automated security audits, and zero-trust infrastructure with 99.9% guaranteed uptime.",
    advantage: "Eliminates third-party plugin vulnerabilities completely.",
  },
];

export const ProstackAudience: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-slate-50/60 border-b border-slate-200/80 text-left select-none font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2.5 text-left">
          <h2 className="section-h2 text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#202B61] leading-snug">
            Built for High-Growth Teams &amp; Modern Enterprises
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
            Engineered for organizations that have outgrown rigid templates and demand enterprise-grade scalability.
          </p>
        </div>

        {/* Clean Symmetrical Cards (Radius < 5px: rounded-[4px], Identical Height & Typography) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full pt-1">
          {AUDIENCE_CARDS.map((card) => {
            return (
              <div
                key={card.number}
                className="rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group h-full"
              >
                <div>
                  {/* Sequence Badge (01 / 02 / 03 / 04) */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <span className="px-2.5 py-0.5 rounded-[3px] text-xs font-bold tracking-wider bg-[#202B61]/8 text-[#202B61]">
                      {card.number}
                    </span>
                  </div>

                  {/* Symmetrical Card Heading (Uniform 2-Line Height) */}
                  <div className="h-[2.85rem] sm:h-[3.25rem] flex items-start mb-3">
                    <h3 className="font-heading font-bold text-base sm:text-[17px] text-[#202B61] leading-snug">
                      {card.role}
                    </h3>
                  </div>

                  {/* Symmetrical Body Copy (Uniform Font Size, Uniform Line Count, No Alternate Sizes) */}
                  <div className="h-[4.75rem] sm:h-[5.25rem] flex items-start">
                    <p className="font-sans text-[13.5px] sm:text-sm text-slate-600 leading-relaxed font-normal text-pretty">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Symmetrical Bottom Key Advantage Box */}
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <p className="font-sans text-xs text-[#202B61] leading-relaxed">
                    <span className="font-bold">Key advantage:</span>{" "}
                    <span className="font-normal text-slate-600">{card.advantage}</span>
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
