"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { ApplicationItem, FEATURED_SLIDES } from "@/lib/applicationsData";

interface ApplicationSpotlightProps {
  onSelectApp: (app: ApplicationItem) => void;
}

export const ApplicationSpotlight: React.FC<ApplicationSpotlightProps> = ({ onSelectApp }) => {
  const [activeDeckIdx, setActiveDeckIdx] = useState(0);

  const handlePrevDeck = () => {
    setActiveDeckIdx((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const handleNextDeck = () => {
    setActiveDeckIdx((prev) => (prev + 1) % FEATURED_SLIDES.length);
  };

  return (
    <section
      id="showcase"
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/90 scroll-mt-24 font-sans text-center overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* Top Centered Header Block */}
        <div className="max-w-xl mx-auto space-y-2 text-center">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/75 font-sans">
            Featured Work In Motion
          </p>
          <h2 className="section-h2 text-center text-balance">
            What We&apos;ve Built
          </h2>
        </div>

        {/* 3D Depth Card Carousel Stage */}
        <div className="relative w-full h-[560px] sm:h-[500px] md:h-[460px] lg:h-[480px] flex items-center justify-center">
          
          {/* Prev / Next Floating Circular Arrows */}
          <button
            type="button"
            onClick={handlePrevDeck}
            className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black text-white hover:bg-slate-800 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={handleNextDeck}
            className="absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black text-white hover:bg-slate-800 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Coverflow Depth Cards */}
          {FEATURED_SLIDES.map((slide, idx) => {
            let diff = idx - activeDeckIdx;
            const total = FEATURED_SLIDES.length;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isRightPeek = diff === 1;
            const isLeftPeek = diff === -1;
            const isVisible = isCenter || isRightPeek || isLeftPeek;

            return (
              <div
                key={slide.id}
                onClick={() => {
                  if (!isCenter) setActiveDeckIdx(idx);
                }}
                style={{
                  transform: isCenter
                    ? "translate(-50%, -50%) scale(1)"
                    : isRightPeek
                    ? "translate(calc(-50% + clamp(220px, 30vw, 420px)), -50%) scale(0.90)"
                    : isLeftPeek
                    ? "translate(calc(-50% - clamp(220px, 30vw, 420px)), -50%) scale(0.90)"
                    : `translate(calc(-50% + ${diff * 480}px), -50%) scale(0.75)`,
                  zIndex: isCenter ? 30 : isVisible ? 20 : 10,
                  opacity: isCenter ? 1 : isVisible ? 0.52 : 0,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
                className={`absolute left-1/2 top-1/2 w-[92%] sm:w-[760px] md:w-[860px] lg:w-[960px] xl:w-[1020px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  !isCenter ? "cursor-pointer select-none" : ""
                }`}
              >
                <div
                  className={`relative rounded-[28px] sm:rounded-[34px] bg-white border border-slate-200/90 p-5 sm:p-7 lg:p-8 shadow-[0_25px_70px_rgba(32,43,97,0.08)] flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-left transition-all ${
                    isCenter ? "ring-1 ring-[#202B61]/15" : ""
                  }`}
                >
                  {/* Left Side: Image Canvas */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (isCenter) onSelectApp(slide);
                    }}
                    className="relative aspect-[4/3] md:aspect-square w-full md:w-[280px] lg:w-[340px] xl:w-[380px] shrink-0 rounded-[22px] sm:rounded-[26px] overflow-hidden bg-slate-900 border border-slate-200/80 cursor-pointer group shadow-xs"
                  >
                    <Image
                      src={slide.previewImage}
                      alt={slide.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      priority={isCenter}
                    />
                  </div>

                  {/* Right Side: Editorial & Clean Metrics */}
                  <div className="flex-1 min-w-0 space-y-3.5 sm:space-y-4 py-1">
                    <div>
                      <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#202B61]/70">
                        {slide.client || slide.name}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-[#202B61] tracking-tight leading-snug text-balance">
                        {slide.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#202B61]/80 leading-relaxed line-clamp-2 sm:line-clamp-3 mt-1.5 text-pretty">
                        {slide.description}
                      </p>
                    </div>

                    <div className="pt-0.5">
                      <button
                        type="button"
                        onClick={() => onSelectApp(slide)}
                        className="inline-flex items-center gap-1.5 font-sans font-bold text-xs sm:text-sm text-[#202B61] hover:text-[#202B61]/75 transition-colors cursor-pointer group"
                      >
                        <span>Read More</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* 3-Column Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 mt-2 border-t border-slate-100">
                      <div>
                        <div className="font-heading font-black text-lg sm:text-xl lg:text-2xl text-[#202B61] tracking-tight leading-none text-balance">
                          {slide.metrics.stat1.value}
                        </div>
                        <div className="font-sans text-[11px] sm:text-xs text-[#202B61]/70 mt-1.5 leading-tight line-clamp-1">
                          {slide.metrics.stat1.label}
                        </div>
                      </div>
                      <div>
                        <div className="font-heading font-black text-lg sm:text-xl lg:text-2xl text-[#202B61] tracking-tight leading-none text-balance">
                          {slide.metrics.stat2.value}
                        </div>
                        <div className="font-sans text-[11px] sm:text-xs text-[#202B61]/70 mt-1.5 leading-tight line-clamp-1">
                          {slide.metrics.stat2.label}
                        </div>
                      </div>
                      <div>
                        <div className="font-heading font-black text-lg sm:text-xl lg:text-2xl text-[#202B61] tracking-tight leading-none text-balance">
                          {slide.metrics.stat3.value}
                        </div>
                        <div className="font-sans text-[11px] sm:text-xs text-[#202B61]/70 mt-1.5 leading-tight line-clamp-1">
                          {slide.metrics.stat3.label}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Pagination Indicators & Bottom CTA Button */}
        <div className="space-y-4 pt-2 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2">
            {FEATURED_SLIDES.map((_, i) => {
              const isActive = i === activeDeckIdx;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveDeckIdx(i)}
                  className={`transition-all duration-200 rounded-full cursor-pointer ${
                    isActive
                      ? "w-7 h-1.5 bg-[#202B61]"
                      : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>

          <div>
            <a
              href="#directory"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#202B61] text-white hover:bg-[#151E48] font-sans font-semibold text-xs sm:text-sm tracking-tight shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
            >
              Explore all Case Studies
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

