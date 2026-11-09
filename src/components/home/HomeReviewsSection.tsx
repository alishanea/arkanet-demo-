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
  source: string;
  bgColor: string;
  textColor: string;
  subTextColor: string;
  iconBg: string;
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
    source: "Google Play",
    bgColor: "bg-[#0d2818]", // Deep forest green like the Wise screenshot
    textColor: "text-[#d8f3dc]",
    subTextColor: "text-[#b7e4c7]/80",
    iconBg: "bg-white",
  },
  {
    id: "review-2",
    quote:
      "The 3D WebGL watch configurator and headless Shopify Plus storefront they built increased our international high-ticket conversions by 34%. Fast, reliable, and easily the best engineering team we have partnered with.",
    author: "Marcella Vane",
    role: "Head of Digital Commerce",
    company: "Vesper Horology Geneva",
    rating: 5,
    source: "Google Play",
    bgColor: "bg-[#9fe870]", // Signature vibrant lime green like the Wise screenshot
    textColor: "text-[#163300]",
    subTextColor: "text-[#163300]/80",
    iconBg: "bg-white",
  },
  {
    id: "review-3",
    quote:
      "Their distributed IoT parking telemetry pipeline handles 42,000 live bays across Dubai with sub-second accuracy and 99.9% uptime. Arkanet is the most technically disciplined software partner in the region.",
    author: "Rashid Al-Falasi",
    role: "Director of Smart Mobility",
    company: "Dubai Smart City Initiative",
    rating: 5,
    source: "Google Play",
    bgColor: "bg-[#202B61]", // Arkanet deep brand navy
    textColor: "text-white",
    subTextColor: "text-slate-300",
    iconBg: "bg-white",
  },
  {
    id: "review-4",
    quote:
      "Our self-hosted AI knowledge assistant was deployed directly inside our private corporate VPC with strict zero data leakage. It reduced repetitive operational inquiries across 6 departments by 84%.",
    author: "David Sterling",
    role: "VP of Enterprise Technology",
    company: "Global Financial Advisory",
    rating: 5,
    source: "Google Play",
    bgColor: "bg-[#1f2937]", // Slate charcoal
    textColor: "text-slate-100",
    subTextColor: "text-slate-300",
    iconBg: "bg-white",
  },
  {
    id: "review-5",
    quote:
      "Arkanet completely modernized our architectural stone catalog into an ultra-fast headless sampling store. Online trade sample requests and contractor orders doubled within the first 90 days.",
    author: "Elena Rossi",
    role: "Managing Director",
    company: "StoneCraft Surfaces Milan",
    rating: 5,
    source: "Google Play",
    bgColor: "bg-[#2d4a22]", // Muted olive forest
    textColor: "text-[#ecf39e]",
    subTextColor: "text-[#ecf39e]/75",
    iconBg: "bg-white",
  },
];

// Google Play multicolor icon
const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M3.609 1.814L13.792 12 3.61 22.186c-.372-.379-.61-.908-.61-1.492V3.306c0-.584.238-1.113.609-1.492z"
      fill="#4285F4"
    />
    <path
      d="M15.215 13.421l-1.423-1.421L3.609 22.186c.355.361.944.409 1.458.118l10.148-8.883z"
      fill="#EA4335"
    />
    <path
      d="M15.215 10.579L5.067 1.696C4.553 1.405 3.964 1.453 3.609 1.814l10.183 10.186 1.423-1.421z"
      fill="#FBBC04"
    />
    <path
      d="M18.626 12l-3.411-1.927-1.423 1.421 1.423 1.421L18.626 12c.708-.403.708-1.291 0-1.694z"
      fill="#34A853"
    />
  </svg>
);

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
          
          {/* ── LEFT COLUMN: RATING, MASSIVE HEADING, SUBTITLE & ARROWS ── */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Rating Eyebrow with Google Play Icon */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <GooglePlayIcon className="w-4.5 h-4.5" />
              </div>
              <span className="font-sans font-bold text-xs sm:text-[13px] text-[#202B61] tracking-tight">
                4.9 ★ on Google Play &amp; Enterprise Platforms
              </span>
            </div>

            {/* Massive Bold Heading (2 Lines, High Impact like EXCELLENT EVERYWHERE) */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[0.98] uppercase">
              EXCELLENT
              <br />
              EVERYWHERE
            </h2>

            {/* Subheading */}
            <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal max-w-sm">
              See the stories of founders, product leaders, and enterprises worldwide choosing Arkanet.
            </p>

            {/* Interactive Circular Navigation Arrow Controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleScrollLeft}
                className="w-12 h-12 rounded-full bg-[#9fe870] hover:bg-[#8fd860] active:scale-95 text-[#163300] flex items-center justify-center transition-all cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={handleScrollRight}
                className="w-12 h-12 rounded-full bg-[#9fe870] hover:bg-[#8fd860] active:scale-95 text-[#163300] flex items-center justify-center transition-all cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

          </div>

          {/* ── RIGHT COLUMN: HORIZONTAL SLIDING REVIEW CARDS ── */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 pr-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className={`w-[290px] sm:w-[330px] lg:w-[350px] shrink-0 ${review.bgColor} rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Top Row: Circular Icon Badge */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                      <GooglePlayIcon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Middle: Customer Review Quote */}
                  <div className="flex-1 mb-8">
                    <p
                      className={`font-sans font-medium text-sm sm:text-[15px] ${review.textColor} leading-[1.65]`}
                    >
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bottom: Author Name & Company Details */}
                  <div className="space-y-1 pt-4 border-t border-white/10">
                    <h4 className={`font-heading font-bold text-base ${review.textColor}`}>
                      {review.author}
                    </h4>
                    <p className={`font-sans text-xs ${review.subTextColor} leading-snug`}>
                      {review.role} • {review.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

