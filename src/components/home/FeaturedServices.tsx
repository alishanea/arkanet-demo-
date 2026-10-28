"use client";

import React from "react";
import { FEATURED_SERVICES } from "@/lib/data";
import { Layout, Smartphone, ShieldCheck, Palette, TrendingUp, Cpu, ArrowRight } from "lucide-react";

interface FeaturedServicesProps {
  onOpenBooking: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-navy-bright" />,
  Smartphone: <Smartphone className="w-6 h-6 text-navy-bright" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-navy-bright" />,
  Palette: <Palette className="w-6 h-6 text-navy-bright" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-navy-bright" />,
  Cpu: <Cpu className="w-6 h-6 text-navy-bright" />,
};

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="featured-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#202B61]">
            Featured Engineering &amp; Growth Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-borderline hover:border-navy-mid rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-2xs"
            >
              <div>
                <h3 className="font-heading font-bold text-xl text-[#202B61] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1d4ed8] hover:text-[#1740b3] transition-colors group cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
