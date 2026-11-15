"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { ApplicationItem, FEATURED_SLIDES } from "@/lib/applicationsData";
import { FeaturedWorkModal } from "@/components/home/FeaturedWorkModal";

interface HomeFeaturedWorkCarouselProps {
  onOpenBooking?: () => void;
}

export const HomeFeaturedWorkCarousel: React.FC<HomeFeaturedWorkCarouselProps> = ({
  onOpenBooking,
}) => {
  const [activeDeckIdx, setActiveDeckIdx] = useState(0);
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrevDeck = () => {
    setActiveDeckIdx((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const handleNextDeck = () => {
    setActiveDeckIdx((prev) => (prev + 1) % FEATURED_SLIDES.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNextDeck();
    } else if (isRightSwipe) {
      handlePrevDeck();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="work"
      className="relative w-full pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-3 sm:px-6 lg:px-8 bg-white border-b border-slate-200/90 scroll-mt-24 font-sans text-center overflow-hidden select-none"
    >
      <div className="max-w-[1440px] w-full mx-auto space-y-6 sm:space-y-10">
        
        {/* Top Centered Header Block */}
        <div className="max-w-xl mx-auto space-y-1.5 sm:space-y-2 text-center px-2">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/70 font-sans">
            FEATURED WORK IN MOTION
          </p>
          <h2 className="font-heading font-extrabold text-[#202B61] text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-center text-balance">
            What We&apos;ve Built
          </h2>
        </div>

        {/* 3D Depth Card Carousel Stage with Mobile Swipe */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative w-full h-[520px] sm:h-[480px] md:h-[460px] lg:h-[480px] flex items-center justify-center touch-pan-y"
        >
          
          {/* Desktop & Tablet Floating Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrevDeck}
            className="hidden sm:flex absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-[4px] bg-black text-white hover:bg-slate-800 items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={handleNextDeck}
            className="hidden sm:flex absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-[4px] bg-black text-white hover:bg-slate-800 items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
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
                    ? "translate(calc(-50% + clamp(180px, 28vw, 420px)), -50%) scale(0.88)"
                    : isLeftPeek
                    ? "translate(calc(-50% - clamp(180px, 28vw, 420px)), -50%) scale(0.88)"
                    : `translate(calc(-50% + ${diff * 480}px), -50%) scale(0.70)`,
                  zIndex: isCenter ? 30 : isVisible ? 20 : 10,
                  opacity: isCenter ? 1 : isVisible ? 0.45 : 0,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
                className={`absolute left-1/2 top-1/2 w-[94%] sm:w-[740px] md:w-[840px] lg:w-[940px] xl:w-[1000px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  !isCenter ? "cursor-pointer select-none" : ""
                }`}
              >
                {/* Main Card with radius < 5 */}
                <div
                  className={`relative rounded-[4px] bg-white border border-slate-200/90 p-4 sm:p-6 lg:p-8 shadow-[0_15px_45px_rgba(32,43,97,0.08)] flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8 text-left transition-all ${
                    isCenter ? "ring-1 ring-[#202B61]/15" : ""
                  }`}
                >
                  {/* Left Side: Image Canvas with radius < 5 */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (isCenter) setSelectedApp(slide);
                    }}
                    className="relative aspect-[16/10] sm:aspect-square w-full md:w-[260px] lg:w-[320px] xl:w-[360px] shrink-0 rounded-[4px] overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer group shadow-2xs"
                  >
                    <Image
                      src={slide.previewImage}
                      alt={slide.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      priority={isCenter}
                    />
                  </div>

                  {/* Right Side: Editorial Narrative & Clean Key Metrics */}
                  <div className="flex-1 min-w-0 space-y-2.5 sm:space-y-3.5 py-0.5 sm:py-1 text-left w-full">
                    <div>
                      <span className="font-heading font-extrabold text-[11px] sm:text-xs tracking-wider uppercase text-[#202B61]/70 block">
                        {slide.client || slide.subCategory}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-black text-lg sm:text-2xl lg:text-3xl text-[#202B61] tracking-tight leading-snug line-clamp-1">
                        {slide.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mt-1 font-normal">
                        {slide.description}
                      </p>
                    </div>

                    <div className="pt-0.5">
                      <button
                        type="button"
                        onClick={() => setSelectedApp(slide)}
                        className="inline-flex items-center gap-1.5 font-sans font-bold text-xs sm:text-sm text-[#202B61] hover:text-[#1740b3] transition-colors cursor-pointer group"
                      >
                        <span>Read More</span>
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* 3-Column Clean Metrics without micro badges */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2.5 sm:pt-3 mt-1.5 border-t border-slate-100 text-left">
                      <div>
                        <div className="font-heading font-black text-base sm:text-xl lg:text-2xl text-[#202B61] tracking-tight leading-none">
                          {slide.metrics.stat1.value}
                        </div>
                        <div className="font-sans text-[10px] sm:text-xs text-slate-500 mt-1 leading-tight line-clamp-1">
                          {slide.metrics.stat1.label}
                        </div>
                      </div>
                      <div className="border-x border-slate-100 px-1.5 sm:px-3">
                        <div className="font-heading font-black text-base sm:text-xl lg:text-2xl text-[#202B61] tracking-tight leading-none">
                          {slide.metrics.stat2.value}
                        </div>
                        <div className="font-sans text-[10px] sm:text-xs text-slate-500 mt-1 leading-tight line-clamp-1">
                          {slide.metrics.stat2.label}
                        </div>
                      </div>
                      <div>
                        <div className="font-heading font-black text-base sm:text-xl lg:text-2xl text-[#202B61] tracking-tight leading-none">
                          {slide.metrics.stat3.value}
                        </div>
                        <div className="font-sans text-[10px] sm:text-xs text-slate-500 mt-1 leading-tight line-clamp-1">
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

        {/* Mobile Navigation Controls & Pagination */}
        <div className="space-y-4 pt-1 sm:pt-2 flex flex-col items-center">
          
          {/* Arrow Buttons for Mobile View + Pagination Indicators */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrevDeck}
              className="sm:hidden w-8 h-8 rounded-[4px] bg-black text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              {FEATURED_SLIDES.map((_, i) => {
                const isActive = i === activeDeckIdx;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveDeckIdx(i)}
                    className={`transition-all duration-200 rounded-[2px] cursor-pointer ${
                      isActive
                        ? "w-6 sm:w-7 h-1.5 bg-[#202B61]"
                        : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleNextDeck}
              className="sm:hidden w-8 h-8 rounded-[4px] bg-black text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-[4px] bg-[#202B61] text-white hover:bg-[#151E48] font-sans font-semibold text-xs sm:text-sm tracking-tight shadow-xs hover:shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore all Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Interactive Detail Modal with Screenshots Gallery and radius < 5 */}
      <FeaturedWorkModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
        onOpenContact={onOpenBooking}
      />
    </section>
  );
};
