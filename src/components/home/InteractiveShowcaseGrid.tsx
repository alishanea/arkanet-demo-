"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Globe, Smartphone, Cloud } from "lucide-react";

export interface InteractiveShowcaseGridProps {
  onOpenBooking?: () => void;
}

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  return (
    <section
      id="showcase"
      className="relative w-full bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 select-none border-t border-slate-200/80 overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8">
          <div className="max-w-4xl space-y-3 text-left">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
              Full-Stack Engineering &amp; Applied AI Capabilities
            </h2>
            <p className="font-sans font-medium text-[#202B61]/75 text-sm sm:text-base leading-relaxed max-w-3xl">
              We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
            </p>
          </div>
        </div>

        {/* ── 2. ASYMMETRIC BENTO GRID (CLEAN, NO MICRO-ELEMENTS OR NESTED BOXES) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch w-full">
          
          {/* ═══════════════════════════════════════════════════════════════
             CARD 1: APPLIED AI & AUTOMATION (7-Col Feature Card)
          ═══════════════════════════════════════════════════════════════ */}
          <Link
            href="/capabilities/applied-ai-ml"
            className="group lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:border-slate-300"
          >
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                <Cpu className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight leading-snug">
                  Applied AI &amp; Automation Systems
                </h3>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#202B61]/70 leading-relaxed max-w-xl">
                  Custom machine learning models, document intelligence, conversational AI agents, and automated LLM workflows to scale operations.
                </p>
              </div>

              {/* Clean Output Highlight */}
              <div className="rounded-xl bg-[#f8fafc] border border-slate-200/80 p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61]">Sub-2s</p>
                  <p className="text-xs text-[#202B61]/70 font-medium pt-0.5">RAG Query Latency</p>
                </div>
                <div className="text-right text-xs text-[#202B61]/70 space-y-0.5">
                  <p className="font-bold text-[#202B61]">99.8% Precision</p>
                  <p>Zero Data Leakage</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#202B61]/60 group-hover:text-[#202B61] transition-colors">
              <span>View AI Capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* ═══════════════════════════════════════════════════════════════
             CARD 2: WEB APPLICATIONS & SAAS (5-Col Card)
          ═══════════════════════════════════════════════════════════════ */}
          <Link
            href="/capabilities/website-development"
            className="group lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:border-slate-300"
          >
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                <Globe className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug">
                  Web Applications &amp; SaaS
                </h3>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#202B61]/70 leading-relaxed">
                  Custom Next.js web applications, client portals, and cloud platforms engineered for conversion, speed, and enterprise scale.
                </p>
              </div>

              {/* Clean Metric Highlight */}
              <div className="rounded-xl bg-[#f8fafc] border border-slate-200/80 p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61]">100<span className="text-xs font-normal text-[#202B61]/60">/100</span></p>
                  <p className="text-xs text-[#202B61]/70 font-medium pt-0.5">Lighthouse Score</p>
                </div>
                <div className="text-right text-xs text-[#202B61]/70 space-y-0.5">
                  <p className="font-bold text-[#202B61]">Sub-second TTFB</p>
                  <p>Next.js Edge Runtime</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#202B61]/60 group-hover:text-[#202B61] transition-colors">
              <span>View Web Engineering</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* ═══════════════════════════════════════════════════════════════
             CARD 3: NATIVE MOBILE PLATFORMS (5-Col Card)
          ═══════════════════════════════════════════════════════════════ */}
          <Link
            href="/capabilities/mobile-app-development"
            className="group lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:border-slate-300"
          >
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                <Smartphone className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug">
                  Native Mobile Platforms
                </h3>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#202B61]/70 leading-relaxed">
                  High performance native iOS, Android, and React Native applications with real-time cloud sync and offline data support.
                </p>
              </div>

              {/* Clean Metric Highlight */}
              <div className="rounded-xl bg-[#f8fafc] border border-slate-200/80 p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61]">60 <span className="text-xs font-normal text-[#202B61]/60">FPS</span></p>
                  <p className="text-xs text-[#202B61]/70 font-medium pt-0.5">Native UI Thread</p>
                </div>
                <div className="text-right text-xs text-[#202B61]/70 space-y-0.5">
                  <p className="font-bold text-[#202B61]">Offline SQLite Sync</p>
                  <p>iOS &amp; Android</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#202B61]/60 group-hover:text-[#202B61] transition-colors">
              <span>View Mobile Engineering</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* ═══════════════════════════════════════════════════════════════
             CARD 4: CLOUD & DEVOPS INFRASTRUCTURE (7-Col Card)
          ═══════════════════════════════════════════════════════════════ */}
          <Link
            href="/capabilities/cloud-devops-hosting"
            className="group lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:border-slate-300"
          >
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                <Cloud className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight leading-snug">
                  Cloud &amp; DevOps System Architecture
                </h3>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#202B61]/70 leading-relaxed max-w-xl">
                  Production-ready AWS cloud architectures, container orchestration, automated deployment pipelines, and strict security.
                </p>
              </div>

              {/* Clean Metric Highlight */}
              <div className="rounded-xl bg-[#f8fafc] border border-slate-200/80 p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61]">99.99%</p>
                  <p className="text-xs text-[#202B61]/70 font-medium pt-0.5">Uptime Availability</p>
                </div>
                <div className="text-right text-xs text-[#202B61]/70 space-y-0.5">
                  <p className="font-bold text-[#202B61]">Zero-Downtime Deploy</p>
                  <p>AWS &amp; Kubernetes</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#202B61]/60 group-hover:text-[#202B61] transition-colors">
              <span>View Cloud Architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};
