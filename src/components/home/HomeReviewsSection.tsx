"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  isDark?: boolean;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    quote:
      "Arkanet engineered our patient telehealth portal from wireframe to production in under 4 months. The WebRTC video visits are sub-second with zero buffering, and clinical queue efficiency improved by 42%.",
    author: "Dr. Tariq Al-Mansoor",
    role: "Chief Medical Officer",
    company: "CareFlow Telehealth Network",
    rating: 5,
  },
  {
    id: "review-2",
    quote:
      "The 3D WebGL watch configurator and headless Shopify Plus storefront they built increased our international high-ticket conversions by 34%. Fast, reliable, and easily the best engineering team we have partnered with.",
    author: "Marcella Vane",
    role: "Head of Digital Commerce",
    company: "Vesper Horology Geneva",
    rating: 5,
    isDark: true, // Elevated dark contrast card like reference bento
  },
  {
    id: "review-3",
    quote:
      "Their distributed IoT parking telemetry pipeline handles 42,000 live bays across Dubai with sub-second accuracy and 99.9% uptime. Arkanet is the most technically disciplined software partner in the region.",
    author: "Rashid Al-Falasi",
    role: "Director of Smart Mobility",
    company: "Dubai Smart City Initiative",
    rating: 5,
  },
  {
    id: "review-4",
    quote:
      "Our self-hosted AI knowledge assistant was deployed directly inside our private corporate VPC with strict zero data leakage. It reduced repetitive operational inquiries across 6 departments by 84%.",
    author: "David Sterling",
    role: "VP of Enterprise Technology",
    company: "Global Financial Advisory",
    rating: 5,
  },
  {
    id: "review-5",
    quote:
      "Arkanet completely modernized our architectural stone catalog into an ultra-fast headless sampling store. Online trade sample requests and contractor orders doubled within the first 90 days.",
    author: "Elena Rossi",
    role: "Managing Director",
    company: "StoneCraft Surfaces Milan",
    rating: 5,
  },
];

export const HomeReviewsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScrollLeft = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  const handleScrollRight = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <section
      id="reviews"
      className="relative w-full bg-[#eaeaea] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-t border-[#d8d8d8] overflow-hidden font-sans select-none scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: HEADING, SUBTITLE & ARROWS ── */}
          <div className="lg:col-span-4 space-y-6 text-left">
            {/* Massive Bold Heading */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[0.98] uppercase">
              EXCELLENT
              <br />
              EVERYWHERE
            </h2>

            {/* Subheading */}
            <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal max-w-sm">
              See the stories of founders, product leaders, and enterprises worldwide choosing Arkanet.
            </p>

            {/* Clean Circular Navigation Arrow Controls */}
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleScrollLeft}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-[#d8d8d8] text-[#202B61] flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2]" />
              </button>

              <button
                type="button"
                onClick={handleScrollRight}
                className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-[#d8d8d8] text-[#202B61] flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5 stroke-[2]" />
              </button>
            </div>

          </div>

          {/* ── RIGHT COLUMN: CLEAN HORIZONTAL SLIDING REVIEW CARDS ── */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex items-stretch gap-5 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {REVIEWS.map((review) => {
                const isDark = review.isDark;

                return (
                  <div
                    key={review.id}
                    className={`w-[290px] sm:w-[330px] lg:w-[360px] shrink-0 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isDark
                        ? "bg-[#161E44] text-white shadow-[0_12px_36px_rgba(22,30,68,0.22)] border border-[#161E44]"
                        : "bg-white text-[#202B61] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#d8d8d8] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
                    }`}
                    style={{ scrollSnapAlign: "start" }}
                  >
                    {/* Top: 5 Stars */}
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 stroke-amber-400"
                        />
                      ))}
                    </div>

                    {/* Middle: Customer Review Quote */}
                    <div className="flex-1 mb-8">
                      <p
                        className={`font-sans font-normal text-sm sm:text-[15px] leading-[1.65] ${
                          isDark ? "text-slate-200" : "text-[#202B61]/85"
                        }`}
                      >
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    {/* Bottom: Author Name & Company Details */}
                    <div
                      className={`space-y-1 pt-4 border-t ${
                        isDark ? "border-white/10" : "border-slate-100"
                      }`}
                    >
                      <h4
                        className={`font-heading font-bold text-base ${
                          isDark ? "text-white" : "text-[#202B61]"
                        }`}
                      >
                        {review.author}
                      </h4>
                      <p
                        className={`font-sans text-xs leading-snug ${
                          isDark ? "text-slate-300" : "text-[#202B61]/65"
                        }`}
                      >
                        {review.role} • {review.company}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


