"use client";

import React from "react";
import { Building2, Cpu, ShieldCheck, Compass, MapPin, CheckCircle2 } from "lucide-react";

export function AboutWhoWeAre() {
  return (
    <section
      id="about-story"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white text-[#202B61] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans scroll-mt-28 sm:scroll-mt-36"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-16">
        
        {/* ── SECTION HEADER & PILL ── */}
        <div className="space-y-3.5 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-slate-100 text-[#202B61] border border-slate-200/80">
            <Compass className="w-3.5 h-3.5 text-[#202B61]" />
            <span>Who We Are &amp; What Drives Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-extrabold text-[#202B61] leading-[1.18] sm:leading-[1.15] tracking-tight text-balance">
            Engineering excellence, architectural clarity, and unwavering execution.
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty">
            Headquartered in Dubai with a dedicated engineering center in Kerala, India — we design, build, and scale mission-critical digital systems for forward-thinking enterprises.
          </p>
        </div>

        {/* ── 2-COLUMN EDITORIAL SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column: Authoritative Narrative & Global Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 font-sans text-base sm:text-[17px] text-slate-600 leading-[1.7] font-normal">
              <p>
                Arkanet Technologies is a technology group built on engineering discipline rather than agency buzzwords. Over 15 years, we have evolved from bespoke software development into an end-to-end engineering partner trusted by enterprises across the UAE, GCC, and global markets.
              </p>
              <p>
                We bridge strategic commercial vision with rigorous technical execution — ensuring every application, platform, and infrastructure pipeline is engineered for high availability, security, and sustained competitive advantage.
              </p>
            </div>

            {/* Dual-Hub Footprint Cards */}
            <div className="pt-2 space-y-3">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 flex items-start gap-3.5 transition-all">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#202B61] shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-sm text-[#202B61]">Dubai Corporate Headquarters</h3>
                    <span className="text-[10px] font-bold px-2 py-0.2 bg-blue-50 text-blue-700 rounded border border-blue-200">UAE</span>
                  </div>
                  <p className="font-sans text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Client partnership, strategic technology advisory, enterprise solution scoping, and executive oversight.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 flex items-start gap-3.5 transition-all">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#202B61] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-sm text-[#202B61]">Kerala Engineering Hub</h3>
                    <span className="text-[10px] font-bold px-2 py-0.2 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">India</span>
                  </div>
                  <p className="font-sans text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Dedicated development campus in Kelakam, Kannur housing senior full-stack engineers, AI researchers, and DevOps specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Structured Engineering Pillars */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Card 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(32,43,97,0.03)] hover:border-[#202B61]/40 transition-all duration-200 space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#202B61] shrink-0">
                  <Cpu className="w-4 h-4 text-[#202B61]" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#202B61]">
                  Architecture-First Philosophy
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                We eliminate costly rewrites by designing scalable micro-services, strict data schemas, and WCAG-compliant design systems upfront. Every system is built to withstand real-world enterprise traffic from day one.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(32,43,97,0.03)] hover:border-[#202B61]/40 transition-all duration-200 space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#202B61]">
                  Dual-Hub Velocity &amp; Transparent Sprints
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                Clients receive the dual benefit of local Dubai senior advisory and high-velocity engineering squads in India. Real-time Jira telemetry, automated CI/CD staging environments, and weekly sprint demos ensure complete visibility.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(32,43,97,0.03)] hover:border-[#202B61]/40 transition-all duration-200 space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#202B61]" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#202B61]">
                  SLA-Backed Operational Ownership
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                Launch day is the beginning of software&apos;s lifecycle. We provide continuous 24/7 uptime monitoring, automated security patching, database performance tuning, and guaranteed contractual response times so systems remain robust.
              </p>
            </div>

          </div>
        </div>

        {/* ── BOTTOM ENTERPRISE STATS DOCK ── */}
        <div className="pt-4 sm:pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80">
            
            <div className="space-y-1 text-left">
              <p className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight">
                15+
              </p>
              <p className="font-sans text-xs sm:text-sm font-semibold text-slate-700">
                Years of Excellence
              </p>
              <p className="font-sans text-[11px] text-slate-500 leading-snug">
                Pioneering enterprise digital solutions across UAE &amp; global markets.
              </p>
            </div>

            <div className="space-y-1 text-left border-l border-slate-200/80 pl-4 sm:pl-6">
              <p className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight">
                200+
              </p>
              <p className="font-sans text-xs sm:text-sm font-semibold text-slate-700">
                Production Releases
              </p>
              <p className="font-sans text-[11px] text-slate-500 leading-snug">
                Web applications, mobile apps, SaaS, and custom ERP systems deployed.
              </p>
            </div>

            <div className="space-y-1 text-left border-l border-slate-200/80 pl-4 sm:pl-6">
              <p className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight">
                99.9%
              </p>
              <p className="font-sans text-xs sm:text-sm font-semibold text-slate-700">
                Uptime Reliability
              </p>
              <p className="font-sans text-[11px] text-slate-500 leading-snug">
                Strict enterprise SLAs backed by real-time telemetry and 24/7 on-call engineers.
              </p>
            </div>

            <div className="space-y-1 text-left border-l border-slate-200/80 pl-4 sm:pl-6">
              <p className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight">
                2 Hubs
              </p>
              <p className="font-sans text-xs sm:text-sm font-semibold text-slate-700">
                Dubai &amp; India
              </p>
              <p className="font-sans text-[11px] text-slate-500 leading-snug">
                Seamless collaboration between corporate leadership and engineering lab.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
