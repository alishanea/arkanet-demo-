"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StudioPhilosophyProps {
  onOpenBooking?: () => void;
}

const STATS_DATA = [
  {
    number: "20+",
    label: "Years of combined technology expertise",
  },
  {
    number: "1000+",
    label: "Production digital software releases delivered",
  },
  {
    number: "100%",
    label: "Dedicated in-house full-stack engineering team",
  },
];

export const StudioPhilosophy: React.FC<StudioPhilosophyProps> = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#151E48] text-white select-none px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-t border-[#253272] overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* Top 2-Column Split: Headline + Narrative on Left, Clean Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 text-left">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-white leading-[1.18] tracking-[-0.025em]">
              Same team, start to finish
            </h2>

            {/* Paragraph Copy */}
            <div className="max-w-xl space-y-3 font-sans text-base sm:text-[17px] text-slate-100 leading-relaxed font-normal">
              <p>
                Arkanet is a team of engineers, designers, and strategists working across web, mobile, AI, and digital infrastructure: one cohesive unit, not four separate specialists handed off between projects.
              </p>
              <p className="text-slate-200/90">
                We measure success the way our clients do — not by what shipped, but by what kept working under real production load. Ongoing support, proactive monitoring, and performance tuning are built into how we work.
              </p>
            </div>

            {/* Clean CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold font-sans text-white hover:text-slate-200 transition-colors"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-slate-300 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Image */}
          <div className="lg:col-span-6 w-full flex justify-end">
            <div className="relative aspect-[16/10] max-h-[300px] sm:max-h-[340px] w-full rounded-xl overflow-hidden border border-[#253272] bg-[#1C2758] shadow-lg">
              <img
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
                alt="People in creative office workspace"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>

        </div>

        {/* Bottom: 3-Column Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-[#253272] max-w-full">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl leading-none text-white tracking-tight shrink-0">
                {stat.number}
              </div>
              {/* Exact 5 words each */}
              <div className="font-sans font-normal text-xs sm:text-sm leading-snug text-slate-200/90 text-left flex-1 max-w-[240px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
