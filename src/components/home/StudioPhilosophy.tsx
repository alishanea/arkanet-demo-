"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StudioPhilosophyProps {
  onOpenBooking?: () => void;
}

const STATS_DATA = [
  {
    number: "2023",
    label: "Founded as Digital Innovation Firm",
  },
  {
    number: "Dual-Hub",
    label: "Kerala HQ & Dubai Corporate Office",
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
      className="relative w-full bg-[#151E48] text-white select-none px-4 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28 border-t border-[#253272] overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* Top 2-Column Split: Headline + Narrative on Left, Clean Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 text-left">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-white leading-[1.18] tracking-[-0.025em]">
              Next-generation platforms, built to scale
            </h2>

            {/* Paragraph Copy */}
            <div className="max-w-xl space-y-3 font-sans text-base sm:text-[17px] text-slate-100 leading-relaxed font-normal">
              <p>
                Founded in 2023, Arkanet Technologies is a premier digital innovation and IT consulting firm dedicated to building next-generation software platforms. We specialize in transforming complex technological challenges into scalable, future-ready solutions for enterprises and ambitious brands worldwide.
              </p>
              <p className="text-slate-200/90">
                Operating at the intersection of emerging technology and business strategy, our core expertise spans Artificial Intelligence, Blockchain, AR/VR, IoT, and robust cloud infrastructure across hospitality, IT, eCommerce, and government sectors.
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 sm:pt-10 pb-2 sm:pb-4 border-t border-[#253272] max-w-full">
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
