"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StudioPhilosophyProps {
  onOpenBooking?: () => void;
}

export const StudioPhilosophy: React.FC<StudioPhilosophyProps> = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-white text-[#202B61] select-none px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        
        {/* Symmetrical 2-Column Split: Headline + Narrative on Left, Workspace Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center text-left">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 text-left">
            <h2 className="section-h2 text-balance">
              Next Generation Platforms, Built to Scale
            </h2>

            {/* Paragraph Copy: Unified font size, solid brand navy color, balanced line wrapping */}
            <div className="max-w-xl space-y-3.5 font-sans text-sm sm:text-[15px] lg:text-base text-[#202B61]/85 leading-[1.65] font-normal text-pretty">
              <p>
                Backed by 15+ years of technology and engineering experience, Arkanet Technologies is a premier digital innovation firm dedicated to building next-generation software platforms. We specialize in transforming complex technological challenges into scalable, future-ready solutions for enterprises and ambitious brands&nbsp;worldwide.
              </p>
              <p>
                Operating at the intersection of emerging technology and business strategy, our core expertise spans Artificial Intelligence, Blockchain, AR/VR, IoT, and robust cloud infrastructure across hospitality, IT, eCommerce, and government&nbsp;sectors.
              </p>
            </div>

            {/* Clean CTA Link */}
            <div className="pt-2 sm:pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#202B61] hover:text-[#202B61]/75 transition-colors shrink-0 group"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Image with Symmetrical Radius & Aspect Ratio */}
          <div className="lg:col-span-6 w-full flex justify-end">
            <div className="relative aspect-[16/10.5] w-full rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm">
              <img
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
                alt="People in creative office workspace"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_25%]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
