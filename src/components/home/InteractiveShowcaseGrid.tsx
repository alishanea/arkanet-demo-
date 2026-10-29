"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Globe, Smartphone, Cloud, CheckCircle2, Zap, Shield, Terminal } from "lucide-react";

export interface InteractiveShowcaseGridProps {
  onOpenBooking?: () => void;
}

interface AIQueryPreset {
  id: string;
  label: string;
  query: string;
  response: string;
  latency: string;
  metric: string;
}

const AI_PRESETS: AIQueryPreset[] = [
  {
    id: "rag",
    label: "Enterprise RAG Pipeline",
    query: "Extract customs transit clauses and verify supplier SLA compliance...",
    response: "Processed 1,420 regulatory pages. 0 discrepancies detected. Automated clearance token issued.",
    latency: "38ms vector retrieval",
    metric: "99.8% precision",
  },
  {
    id: "agent",
    label: "Autonomous Business Agents",
    query: "Synthesize weekly telemetry logs and schedule preventive maintenance...",
    response: "Port telemetry analyzed across 18 vessels. 2 maintenance alerts routed to engineering teams.",
    latency: "64ms task resolution",
    metric: "Sub-2s end-to-end",
  },
  {
    id: "doc",
    label: "Document Intelligence",
    query: "Parse commercial invoice batches and auto-reconcile ERP entries...",
    response: "500 invoices validated against purchase orders. 100% field extraction match with zero errors.",
    latency: "12ms OCR latency",
    metric: "Zero manual data entry",
  },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
  const [activePreset, setActivePreset] = useState<AIQueryPreset>(AI_PRESETS[0]);

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

        {/* ── 2. ASYMMETRIC BENTO GRID (WISE & STRIPE STYLE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch w-full">
          
          {/* ═══════════════════════════════════════════════════════════════
             CARD 1: APPLIED AI & AUTOMATION (Large 7-Col Anchor Card)
          ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:shadow-xs">
            <div className="space-y-4">
              
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/60">
                    Intelligent Systems
                  </span>
                </div>

                <Link
                  href="/capabilities/applied-ai-ml"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#202B61] hover:text-[#161e47] transition-colors"
                >
                  <span>Explore AI</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight leading-snug">
                  Applied AI &amp; Automation Systems
                </h3>
                <p className="font-sans font-medium text-xs sm:text-sm text-[#202B61]/70 leading-relaxed max-w-xl">
                  Custom machine learning models, document intelligence, conversational agents, and automated LLM workflows engineered to eliminate manual operational drag.
                </p>
              </div>

              {/* Interactive AI Query Simulator Widget */}
              <div className="pt-2 space-y-3">
                {/* Preset Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  {AI_PRESETS.map((preset) => {
                    const isSelected = activePreset.id === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setActivePreset(preset)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-[#202B61] text-white border-[#202B61]"
                            : "bg-[#f8fafc] text-[#202B61]/80 border-slate-200/80 hover:bg-slate-100"
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>

                {/* Simulated Console Stream Box */}
                <div className="rounded-xl bg-[#0b1330] p-4 sm:p-5 text-white font-mono text-xs space-y-3 border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>RAG Runtime Kernel</span>
                    </div>
                    <span className="text-emerald-400 font-sans font-semibold">{activePreset.latency}</span>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-slate-400">
                      <span className="text-emerald-400 font-bold">&gt;</span> {activePreset.query}
                    </p>
                    <p className="text-white font-sans font-medium text-xs sm:text-sm leading-relaxed pt-1">
                      {activePreset.response}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-sans text-slate-400 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-300">{activePreset.metric}</span>
                    </div>
                    <span>Zero Data Leakage / SOC2</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#202B61]/60">
              <span>Fine-tuned LLMs &amp; Vector Databases</span>
              <span className="font-semibold text-[#202B61]">FastAPI • PyTorch • LangChain</span>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
             CARD 2: WEB APPLICATIONS & SAAS (5-Col Performance Card)
          ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:shadow-xs">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/60">
                    SaaS &amp; Web Platforms
                  </span>
                </div>

                <Link
                  href="/capabilities/website-development"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#202B61] hover:text-[#161e47] transition-colors"
                >
                  <span>Explore Web</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl text-[#202B61] tracking-tight leading-snug">
                  Web Applications &amp; SaaS
                </h3>
                <p className="font-sans font-medium text-xs sm:text-sm text-[#202B61]/70 leading-relaxed">
                  Next.js enterprise portals, customer dashboards, and high-conversion e-commerce engines engineered for speed and conversion.
                </p>
              </div>

              {/* Lighthouse Speed & Architecture Widget */}
              <div className="rounded-xl bg-[#f8fafc] border border-slate-200/90 p-4 space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold font-heading text-[#202B61]">Performance Benchmark</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    100 / 100
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                    <p className="text-[10px] uppercase font-bold text-slate-400">FCP</p>
                    <p className="text-sm font-black font-heading text-[#202B61]">0.4s</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                    <p className="text-[10px] uppercase font-bold text-slate-400">LCP</p>
                    <p className="text-sm font-black font-heading text-[#202B61]">0.8s</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/70">
                    <p className="text-[10px] uppercase font-bold text-slate-400">CLS</p>
                    <p className="text-sm font-black font-heading text-[#202B61]">0.00</p>
                  </div>
                </div>

                <p className="text-[11px] text-[#202B61]/70 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Next.js App Router • Edge APIs • Sub-second TTFB</span>
                </p>
              </div>

            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#202B61]/60">
              <span>Stack: Next.js 15 • TypeScript • Three.js</span>
              <ArrowRight className="w-4 h-4 text-[#202B61]" />
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
             CARD 3: NATIVE MOBILE PLATFORMS (5-Col Card)
          ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:shadow-xs">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/60">
                    iOS &amp; Android
                  </span>
                </div>

                <Link
                  href="/capabilities/mobile-app-development"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#202B61] hover:text-[#161e47] transition-colors"
                >
                  <span>Explore Mobile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl text-[#202B61] tracking-tight leading-snug">
                  Native Mobile Platforms
                </h3>
                <p className="font-sans font-medium text-xs sm:text-sm text-[#202B61]/70 leading-relaxed">
                  Smooth iOS and Android mobile applications featuring offline-first data sync, hardware telemetry, and native UI responsiveness.
                </p>
              </div>

              {/* Mobile Capability Highlights */}
              <div className="rounded-xl bg-[#f8fafc] border border-slate-200/90 p-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#202B61] pb-1.5 border-b border-slate-200/60">
                  <span>Architecture Highlights</span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 font-bold">
                    60 FPS Guaranteed
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-[#202B61]/80">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#202B61]" />
                    <span>Cross-platform sync: React Native &amp; Swift</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#202B61]" />
                    <span>Offline-first SQLite local store caching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#202B61]" />
                    <span>Biometric FaceID &amp; push alert automation</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#202B61]/60">
              <span>React Native • Swift • Kotlin</span>
              <ArrowRight className="w-4 h-4 text-[#202B61]" />
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
             CARD 4: CLOUD & DEVOPS INFRASTRUCTURE (7-Col Card)
          ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-300 shadow-none hover:shadow-xs">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#202B61]/5 flex items-center justify-center text-[#202B61]">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/60">
                    Infrastructure &amp; Scale
                  </span>
                </div>

                <Link
                  href="/capabilities/cloud-devops-hosting"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#202B61] hover:text-[#161e47] transition-colors"
                >
                  <span>Explore Cloud</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight leading-snug">
                  Cloud &amp; DevOps System Architecture
                </h3>
                <p className="font-sans font-medium text-xs sm:text-sm text-[#202B61]/70 leading-relaxed max-w-xl">
                  Resilient cloud topology with continuous uptime telemetry, container orchestration, zero-downtime CI/CD deployments, and enterprise security.
                </p>
              </div>

              {/* Live Infrastructure Telemetry Console */}
              <div className="rounded-xl bg-[#f8fafc] border border-slate-200/90 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold font-heading text-[#202B61]">All Workload Clusters Operational</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    99.99% SLA
                  </span>
                </div>

                {/* Pipeline Progression Steps */}
                <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                  <div className="p-2 rounded-lg bg-white border border-slate-200/70 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Automated CI/CD</p>
                    <p className="font-bold text-[#202B61] text-xs">Zero Downtime</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200/70 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Edge Latency</p>
                    <p className="font-bold text-[#202B61] text-xs">&lt; 18ms Global</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200/70 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Compliance</p>
                    <p className="font-bold text-[#202B61] text-xs">SOC2 &amp; HIPAA</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#202B61]/60">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#202B61]" />
                <span>AWS ECS • Docker • Kubernetes • Terraform</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#202B61]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
