"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Layers, 
  Smartphone, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Activity,
  Globe2
} from "lucide-react";

interface WiseBentoCapabilitiesProps {
  onOpenBooking?: () => void;
}

export const WiseBentoCapabilities: React.FC<WiseBentoCapabilitiesProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<"all" | "startups" | "enterprise">("all");

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#f4f6fb] text-[#202B61] select-none border-t border-slate-200/80 overflow-hidden px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12">
        
        {/* Header with Segmented Intent Switcher (Wise-Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6 sm:pb-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B61]/5 border border-[#202B61]/15 text-[#202B61] text-[11px] font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-[#202B61]" />
              <span>Full-Stack Engineering &amp; AI Capabilities</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-[1.1]">
              Architected for Speed.<br />
              Engineered for Enterprise Scale.
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We eliminate technical bloat. Delivering production-ready web platforms, native mobile ecosystems, applied AI systems, and cloud architectures.
            </p>
          </div>

          {/* Segmented Audience Filter (Wise Personal vs Business Pattern) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-slate-200/90 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#202B61] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Capabilities
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("startups")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "startups"
                  ? "bg-[#202B61] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Startups &amp; MVPs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("enterprise")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "enterprise"
                  ? "bg-[#202B61] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Enterprise Systems
            </button>
          </div>
        </div>

        {/* ── BENTO GRID LAYOUT (4 ASYMMETRIC MODULAR TILES) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left">
          
          {/* CARD 1: Web & SaaS Platforms (Span 7) */}
          <Link
            href="/capabilities/website-development"
            className="lg:col-span-7 group relative rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer overflow-hidden shadow-none"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                    0.38s LCP · 100% Core Web Vitals
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#202B61] group-hover:scale-125 transition-transform" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                  Web Applications &amp; SaaS Platforms
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  High-performance web applications, client portals, and multi-tenant SaaS platforms engineered with Next.js 15, TypeScript, and edge-distributed caching.
                </p>
              </div>
            </div>

            {/* Micro-UI Code Visual */}
            <div className="rounded-xl bg-[#0d1326] p-4 text-xs font-mono text-slate-300 space-y-2 border border-slate-800">
              <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Telemetry · Edge Gateway</span>
                </div>
                <span className="text-emerald-400 font-bold">200 OK (24ms)</span>
              </div>
              <div className="space-y-1 text-[11px]">
                <p className="text-slate-400">$ curl -X POST https://api.arkanet.cloud/v1/workspaces</p>
                <p className="text-emerald-300">&#123; status: &quot;active&quot;, region: &quot;me-central-1&quot;, latency_ms: 24 &#125;</p>
              </div>
            </div>
          </Link>

          {/* CARD 2: Native Mobile Ecosystems (Span 5) */}
          <Link
            href="/capabilities/mobile-app-development"
            className="lg:col-span-5 group relative rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer overflow-hidden shadow-none"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                    60 FPS Native
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#202B61] group-hover:scale-125 transition-transform" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                  Native Mobile Platforms
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Smooth iOS and Android mobile applications built with React Native and Swift/Kotlin, featuring offline-first local SQLite sync and instant biometric login.
                </p>
              </div>
            </div>

            {/* Micro-UI Mobile Sync Card */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  Real-Time Offline Data Sync
                </span>
                <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  SQLite
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Automatic background synchronization when network reconnects. Zero lost user data.
              </p>
            </div>
          </Link>

          {/* CARD 3: Applied AI & Automation (Span 5) */}
          <Link
            href="/capabilities/applied-ai-ml"
            className="lg:col-span-5 group relative rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer overflow-hidden shadow-none"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                    &lt; 120ms RAG Search
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#202B61] group-hover:scale-125 transition-transform" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                  Applied AI &amp; LLM Automation
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enterprise document intelligence, autonomous workflow agents, and custom fine-tuned models that automate repetitive back-office operations.
                </p>
              </div>
            </div>

            {/* Micro-UI AI Pipeline Visual */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  RAG Pipeline Architecture
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Private VPC
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-600 font-mono overflow-x-auto">
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Doc Chunk</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Vector Embed</span>
                <span>→</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Cited LLM</span>
              </div>
            </div>
          </Link>

          {/* CARD 4: Cloud Infrastructure & 99.99% SLAs (Span 7) */}
          <Link
            href="/capabilities/cloud-devops-hosting"
            className="lg:col-span-7 group relative rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer overflow-hidden shadow-none"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#202B61] group-hover:bg-[#202B61] group-hover:text-white transition-colors">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                    99.99% Strict SLA
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#202B61] group-hover:scale-125 transition-transform" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                  Cloud Architectures &amp; DevOps
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Enterprise AWS and multi-cloud infrastructure managed with Terraform, Docker containers, automated CI/CD pipelines, and zero-downtime rolling deployments.
                </p>
              </div>
            </div>

            {/* Micro-UI Cloud Health Bar */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#202B61]" />
                  Multi-Region Infrastructure Health
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  All Systems Operational
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                <div className="bg-white p-2 rounded border border-slate-200 text-center">
                  <span className="text-slate-400 block text-[9px]">AWS DUBAI (ME-CENTRAL-1)</span>
                  <span className="font-bold text-slate-800">12ms latency</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center">
                  <span className="text-slate-400 block text-[9px]">AWS MUMBAI (AP-SOUTH-1)</span>
                  <span className="font-bold text-slate-800">18ms latency</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center">
                  <span className="text-slate-400 block text-[9px]">FAILOVER AUTOMATION</span>
                  <span className="font-bold text-emerald-600">Active-Active</span>
                </div>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

