"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/data";

interface PortfolioStripProps {
  onOpenBooking: () => void;
}

export const PortfolioStrip: React.FC<PortfolioStripProps> = ({ onOpenBooking }) => {
  return (
    <section id="portfolio-strip" className="py-16 sm:py-20 lg:py-24 bg-subtle border-y border-borderline px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B61] tracking-tight">
            Production Proof &amp; Selected Work
          </h2>
          <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Shipped digital products, web platforms, and mobile applications operating reliably at commercial scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={onOpenBooking}
              className="group cursor-pointer bg-white border border-slate-200/90 hover:border-[#202B61]/40 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-2xs flex flex-col justify-between h-full"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200/80 mb-4 bg-slate-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#202B61] leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs font-medium text-slate-500 mt-2">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
