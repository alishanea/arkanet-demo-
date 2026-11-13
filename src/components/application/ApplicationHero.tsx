import React from "react";
import { Star } from "lucide-react";

export const ApplicationHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/90 text-left flex flex-col justify-center">
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 my-auto">
        
        {/* Main Hero Header Block: Two-Column Headline & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 text-left">
          <div>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#202B61]/75 font-sans mb-3">
              Architectural Production Releases
            </p>
            <p className="font-sans text-base sm:text-lg text-[#202B61]/70 font-medium mb-1 text-balance">
              Our focus is simple
            </p>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.05] text-balance">
              Design to convert
            </h1>
          </div>

          <div className="max-w-md lg:max-w-lg lg:pb-1">
            <p className="font-sans text-sm sm:text-[15px] text-[#202B61]/80 leading-relaxed font-normal text-pretty">
              We promise to deliver beyond your expectations for your business, engineering production applications that scale revenue.
            </p>
          </div>
        </div>

        {/* Elevated 3-Card Bento Proof Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 pt-2">
          
          {/* Card 1: Verified Releases & ROI */}
          <div className="lg:col-span-4 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(32,43,97,0.03)] min-h-[280px] sm:min-h-[300px]">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#059669] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                  CF
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d97706] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                  VH
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#202B61] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                  KP
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e11d48] text-white font-bold text-[10px] sm:text-[11px] ring-2 ring-white">
                  MA
                </div>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#202B61]/70">
                50+ GLOBAL RELEASES
              </span>
            </div>

            <div className="space-y-1">
              <span className="font-sans text-xs text-[#202B61]/70 font-medium block text-balance">
                Earn back on your investment within 30 days
              </span>
              <h3 className="font-heading font-black text-5xl sm:text-6xl text-[#202B61] tracking-tight leading-none text-balance">
                90%
              </h3>
              <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/70 pt-0.5 text-balance">
                Return on investment (ROI)
              </p>
            </div>
          </div>

          {/* Card 2: Transaction Volume & Availability */}
          <div className="lg:col-span-4 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(32,43,97,0.03)] min-h-[280px] sm:min-h-[300px]">
            <div>
              <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/75 font-normal leading-relaxed text-pretty">
                Through custom-tailored funnel &amp; e-commerce systems
              </p>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <h3 className="font-heading font-black text-5xl sm:text-6xl text-[#202B61] tracking-tight leading-none text-balance">
                  $45M<span className="text-emerald-500 font-bold">+</span>
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/70">
                  Revenue generated
                </p>
              </div>

              <div className="pt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-sans text-xs text-[#202B61]/70 font-medium uppercase tracking-wider text-[11px]">
                  Available for Q2
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Deep Navy Client Trust Card */}
          <div className="lg:col-span-4 rounded-[28px] bg-[#151E48] border border-[#253272] text-white p-7 sm:p-8 flex flex-col justify-between shadow-[0_20px_45px_rgba(21,30,72,0.18)] min-h-[280px] sm:min-h-[300px]">
            <div>
              <p className="font-sans text-xs sm:text-[13px] text-white/80 font-normal leading-relaxed text-pretty">
                We delivered 50+ projects worldwide, helping service-based companies secure more clients.
              </p>
            </div>

            <div className="pt-6 flex items-end justify-between">
              <div>
                <h4 className="font-heading font-black text-5xl sm:text-6xl text-white tracking-tight leading-none text-balance">
                  4.8<span className="text-white/45 text-2xl font-light">/5</span>
                </h4>
                <div className="flex items-center gap-1 text-amber-400 mt-2">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                </div>
              </div>

              <div className="text-right flex flex-col items-end">
                <svg viewBox="0 0 64 36" fill="none" className="w-16 h-9 stroke-[#38488f] stroke-[2.5] mb-2">
                  <path d="M4 28 L20 16 L32 24 L56 6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42 6 H56 V20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block leading-tight">
                  TRUSTED BY
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white block leading-tight">
                  CLIENTS WORLDWIDE
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

