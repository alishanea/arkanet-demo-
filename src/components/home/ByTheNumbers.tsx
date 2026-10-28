"use client";

import React from "react";

const STATS = [
  {
    number: "40+",
    title: "Projects Delivered",
    desc: "Shipped to production across global markets",
  },
  {
    number: "6 Domains",
    title: "Technology Domains",
    desc: "Web, mobile, portals, cloud, AI systems",
  },
  {
    number: "<2 hrs",
    title: "Average First Response",
    desc: "Direct technical support from senior engineers",
  },
  {
    number: "90%",
    title: "Client Retention Rate",
    desc: "Long-term recurring partnerships and ongoing expansion",
  },
];

export const ByTheNumbers: React.FC = () => {
  return (
    <section id="statsSection" className="py-16 sm:py-20 lg:py-24 bg-subtle border-y border-borderline px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B61] tracking-tight">
            By the Numbers
          </h2>
          <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed">
            Measurable engineering reliability, velocity, and proven commercial outcomes across engagements.
          </p>
        </div>

        {/* 4 Equal Balanced Stats Cards (Exact 6 words each) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center items-stretch">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between h-full space-y-4"
            >
              <div>
                <div className="font-heading font-extrabold text-4xl lg:text-5xl text-[#202B61] mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="font-heading font-bold text-[#202B61] text-base mb-1">
                  {stat.title}
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-500 font-medium">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
