"use client";

import React from "react";

export function AboutArkanet() {
  return (
    <section
      id="about-arkanet"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white text-[#202B61] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-14 sm:space-y-16 lg:space-y-20">
        
        {/* ── 1. SECTION TITLE & LEAD STATEMENT ── */}
        <div className="space-y-4 max-w-4xl text-left">
          <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#202B61]/70 font-sans">
            Who We Are
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-heading font-extrabold text-[#202B61] leading-[1.14] tracking-tight text-balance">
            What is Arkanet?
          </h2>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-[#202B61]/90 leading-relaxed font-normal text-pretty pt-1">
            Arkanet Technologies is a global enterprise engineering and digital technology group built on engineering discipline rather than agency buzzwords. Over the past 15 years, we have designed, architected, and scaled mission-critical digital systems for forward-thinking enterprises across the UAE, GCC, and international markets.
          </p>
        </div>

        {/* ── 2. EDITORIAL ESSAY (PURE TEXT, ZERO IMAGES) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pt-2">
          
          {/* Left Column: Architectural Foundation */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#202B61] tracking-tight">
              A technology partner committed to architectural longevity.
            </h3>

            <div className="space-y-4 font-sans text-base sm:text-[16.5px] text-[#202B61]/80 leading-[1.8] font-normal">
              <p>
                At Arkanet, we bridge strategic commercial ambition with rigorous technical execution. We reject superficial shortcuts, disposable prototypes, and accumulated technical debt. Instead, we approach every engagement as an architectural commitment — designing scalable micro-services, strict data models, and WCAG-compliant design systems that perform reliably from day one.
              </p>
              <p>
                Whether modernizing complex legacy ERPs, deploying sub-second luxury e-commerce flagships, or engineering automated AI data lakes, our solutions are engineered to withstand real-world enterprise traffic, peak transaction volumes, and evolving security mandates.
              </p>
            </div>
          </div>

          {/* Right Column: Strategic Commercial Vision */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#202B61] tracking-tight">
              Engineering systems that create tangible business advantage.
            </h3>

            <div className="space-y-4 font-sans text-base sm:text-[16.5px] text-[#202B61]/80 leading-[1.8] font-normal">
              <p>
                Technology only matters when it drives measurable operational impact. Our multidisciplinary engineering teams work directly alongside executive stakeholders, product owners, and operations leads to eliminate operational friction, automate manual workflows, and unlock new digital revenue channels.
              </p>
              <p>
                With dual operating hubs in Dubai and India, we provide our clients with high-touch executive technology governance combined with world-class, high-velocity engineering pods — ensuring rapid sprint cadence without compromising quality or compliance.
              </p>
            </div>
          </div>

        </div>

        {/* ── 3. DUAL GLOBAL OPERATING HUBS ── */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Dubai Center */}
            <div className="space-y-3 text-left">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#202B61]/60 font-sans">
                Corporate Headquarters · United Arab Emirates
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
                Dubai Leadership Center
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal">
                Anchoring strategic technology advisory, client governance, enterprise solution architecture, and commercial partnerships across the UAE, GCC, and broader Middle East region.
              </p>
            </div>

            {/* Kerala Center */}
            <div className="space-y-3 text-left md:border-l md:border-slate-200/80 md:pl-8 lg:pl-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 font-sans">
                Engineering &amp; Research Campus · India
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
                Kerala Technology Hub
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal">
                Our specialized development campus housing senior software architects, applied machine learning researchers, and cloud DevOps specialists driving continuous, agile sprint delivery.
              </p>
            </div>

          </div>
        </div>

        {/* ── 4. ENTERPRISE CAPABILITY METRICS (NUMERIC EDITORIAL) ── */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1.5 text-left">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#202B61] tracking-tight">
                15+
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#202B61]/70 font-sans">
                Years of Engineering
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Continuous software delivery since 2011.
              </p>
            </div>

            <div className="space-y-1.5 text-left">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#202B61] tracking-tight">
                250+
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#202B61]/70 font-sans">
                Production Systems
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Platforms deployed across diverse sectors.
              </p>
            </div>

            <div className="space-y-1.5 text-left">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#202B61] tracking-tight">
                99.98%
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#202B61]/70 font-sans">
                System Availability
              </p>
              <p className="text-xs text-slate-500 font-sans">
                High-availability enterprise architecture.
              </p>
            </div>

            <div className="space-y-1.5 text-left">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#202B61] tracking-tight">
                2 Hubs
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#202B61]/70 font-sans">
                Dubai &amp; Kerala
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Global governance and engineering reach.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
