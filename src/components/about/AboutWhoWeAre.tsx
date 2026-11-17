"use client";

import React from "react";
import Image from "next/image";

export function AboutWhoWeAre() {
  return (
    <section
      id="about-story"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white text-[#202B61] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans scroll-mt-28"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-16 sm:space-y-20">
        
        {/* ── 1. SECTION HEADER (CLEAN, EDITORIAL, NO MICRO BADGES) ── */}
        <div className="space-y-4 max-w-4xl text-left">
          <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#202B61]/70 font-sans">
            Our Foundation &amp; Standard
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-heading font-extrabold text-[#202B61] leading-[1.12] tracking-tight text-balance">
            Engineering excellence, architectural clarity, and unwavering execution.
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal text-pretty pt-1">
            Headquartered in Dubai with a dedicated engineering center in Kerala, India — we design, build, and scale mission-critical digital systems for forward-thinking enterprises across the globe.
          </p>
        </div>

        {/* ── 2. EDITORIAL STORY & WORKSPACE SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Manifesto Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
              A technology partner built on engineering discipline, not agency buzzwords.
            </h3>

            <div className="space-y-4 font-sans text-base sm:text-[17px] text-slate-600 leading-[1.75] font-normal">
              <p>
                Over the past 15 years, Arkanet Technologies has evolved from a boutique software lab into an enterprise engineering partner trusted by organizations across the UAE, GCC, and global markets.
              </p>
              <p>
                We bridge strategic commercial vision with rigorous technical execution. We reject temporary shortcuts and technical debt — ensuring every application, platform, and cloud topology is engineered for high availability, security, and sustained competitive advantage.
              </p>
              <p>
                From bespoke e-commerce flagships and multi-tenant SaaS platforms to applied AI pipelines and automated enterprise integrations, our systems are built to withstand real-world enterprise traffic from day one.
              </p>
            </div>
          </div>

          {/* Right Column: High-Resolution Engineering Workspace Photography */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm">
              <img
                src="/assets/images/capabilities/engineering-office-workstations.png"
                alt="Arkanet Engineering Center Workstations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202B61]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-xs sm:text-sm font-sans font-medium drop-shadow-sm">
                Arkanet Engineering Campus · Dedicated Pods for Full-Stack, AI &amp; Cloud Infrastructure
              </div>
            </div>
          </div>

        </div>

        {/* ── 3. DUAL GLOBAL FOOTPRINT (SPACIOUS 2-COLUMN EDITORIAL, NO TINY BADGES) ── */}
        <div className="pt-4 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            <div className="space-y-3 text-left">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#202B61]/60 font-sans">
                Corporate Headquarters · United Arab Emirates
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
                Dubai Leadership Center
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Anchoring our client partnerships, strategic technology advisory, enterprise architecture scoping, and executive governance across the UAE, GCC, and Middle Eastern markets.
              </p>
            </div>

            <div className="space-y-3 text-left md:border-l md:border-slate-200/80 md:pl-8 lg:pl-12">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 font-sans">
                Engineering Campus · India
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
                Kerala Technology Hub
              </h3>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our dedicated development center housing senior software engineers, applied AI researchers, and DevOps infrastructure specialists driving high-velocity sprint execution.
              </p>
            </div>

          </div>
        </div>

        {/* ── 4. THREE ARCHITECTURAL PILLARS (CLEAN OPEN EDITORIAL, ZERO BOXES) ── */}
        <div className="pt-4 border-t border-slate-200/80 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
              Our Architectural Commitments
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Principles guiding every technology decision, code review, and production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-left">
            
            <div className="space-y-3">
              <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61]">
                Architecture-First Engineering
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We eliminate costly rewrites by designing scalable distributed services, hardened data schemas, and WCAG-compliant design systems upfront. Every system is built to scale smoothly under real-world load.
              </p>
            </div>

            <div className="space-y-3 md:border-l md:border-slate-200/80 md:pl-8 lg:pl-10">
              <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61]">
                Dual-Hub Velocity
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Clients receive the combined benefit of local Dubai executive consultation and dedicated engineering squads in India. Automated CI/CD pipelines, live staging environments, and transparent sprint reporting ensure complete visibility.
              </p>
            </div>

            <div className="space-y-3 md:border-l md:border-slate-200/80 md:pl-8 lg:pl-10">
              <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61]">
                Contractual SLA Ownership
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Launch day marks the start of a system&apos;s lifecycle. We provide continuous 24/7 uptime monitoring, automated vulnerability patching, database tuning, and guaranteed contractual response times so systems stay resilient.
              </p>
            </div>

          </div>
        </div>

        {/* ── 5. ENTERPRISE SCALE METRICS (OPEN CLEAN ROW, NO TACKY BOXES) ── */}
        <div className="pt-6 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            
            <div className="space-y-1 text-left">
              <p className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight">
                15+
              </p>
              <p className="font-sans text-sm font-bold text-slate-800">
                Years of Excellence
              </p>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Pioneering enterprise digital solutions across UAE &amp; global markets.
              </p>
            </div>

            <div className="space-y-1 text-left md:border-l md:border-slate-200/80 md:pl-6 lg:pl-8">
              <p className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight">
                200+
              </p>
              <p className="font-sans text-sm font-bold text-slate-800">
                Production Releases
              </p>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                High-scale web applications, mobile platforms, and enterprise ERPs deployed.
              </p>
            </div>

            <div className="space-y-1 text-left md:border-l md:border-slate-200/80 md:pl-6 lg:pl-8">
              <p className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight">
                99.98%
              </p>
              <p className="font-sans text-sm font-bold text-slate-800">
                Uptime Reliability
              </p>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Strict enterprise SLAs backed by real-time telemetry and 24/7 on-call engineers.
              </p>
            </div>

            <div className="space-y-1 text-left md:border-l md:border-slate-200/80 md:pl-6 lg:pl-8">
              <p className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight">
                2 Hubs
              </p>
              <p className="font-sans text-sm font-bold text-slate-800">
                Dubai &amp; India
              </p>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Direct integration between corporate leadership and dedicated engineering campus.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
