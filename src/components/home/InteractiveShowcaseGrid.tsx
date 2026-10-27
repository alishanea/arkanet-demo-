"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface InteractiveShowcaseGridProps {
 onOpenBooking?: () => void;
}

interface CapabilityPillar {
 id: string;
 title: string;
 desc: string;
 href: string;
}

const PILLARS: CapabilityPillar[] = [
 {
 id: "web-saas",
 title: "Web & SaaS Platforms",
 desc: "Custom Next.js web applications, client dashboards, and cloud-native digital platforms engineered for conversion, speed, and real enterprise scale.",
 href: "/capabilities/website-development",
 },
 {
 id: "applied-ai",
 title: "Applied AI & ML",
 desc: "Custom ML models, demand forecasting, conversational AI agents, and autonomous LLM workflows designed to streamline operations.",
 href: "/capabilities/applied-ai-ml",
 },
 {
 id: "mobile-apps",
 title: "Mobile Applications",
 desc: "High performance native iOS, Android, and cross-platform React Native apps with real-time cloud sync and offline data resilience.",
 href: "/capabilities/mobile-app-development",
 },
 {
 id: "cloud-devops",
 title: "Cloud & DevOps 99.9%",
 desc: "Production-ready cloud architecture on AWS, container orchestration, automated CI/CD pipelines, and enterprise security protocols.",
 href: "/capabilities/cloud-devops-hosting",
 },
];

export const InteractiveShowcaseGrid: React.FC<InteractiveShowcaseGridProps> = () => {
 return (
 <section
 id="showcase"
 className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-12 sm:py-16 select-none border-t border-slate-200/80 overflow-hidden"
 >
 <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center gap-10 sm:gap-14">
 
 {/* ── 1. SECTION HEADER ── */}
 <div className="max-w-4xl">
 <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0b1330] leading-tight tracking-tight">
 Full-Stack Engineering &amp; Applied AI Capabilities
 </h2>
 <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5 max-w-3xl">
 We identify where modern technology and AI create genuine value in your operation, then engineer scalable digital products built to perform.
 </p>
 </div>

 {/* ── 2. FULLY INTERACTIVE 4-COLUMN CAPABILITY GRID ── */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch w-full">
 {PILLARS.map((pillar) => {
 return (
 <Link
 key={pillar.id}
 href={pillar.href}
 className="group relative rounded-[5px] p-6 sm:p-8 flex flex-col justify-between bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#1d4ed8] transition-colors duration-200 cursor-pointer"
 >
 <div className="space-y-4">
 {/* Title & Expanding Underline Bar */}
 <div className="space-y-2">
 <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0b1330] group-hover:text-[#1d4ed8] tracking-tight leading-snug transition-colors duration-300">
 {pillar.title}
 </h3>
 <div className="h-0.5 w-4 group-hover:w-14 bg-[#1d4ed8] rounded-[2px] transition-all duration-300 opacity-60 group-hover:opacity-100" />
 </div>

 {/* Description */}
 <p className="font-sans font-medium text-slate-600 group-hover:text-[#0b1330] text-xs sm:text-sm leading-relaxed transition-colors duration-300">
 {pillar.desc}
 </p>
 </div>

 {/* Bottom Action Prompt with Small Arrow */}
 <div className="pt-4 mt-4 border-t border-slate-100 group-hover:border-slate-200 flex items-center gap-1.5 text-xs font-semibold font-sans text-slate-400 group-hover:text-[#1d4ed8] transition-colors duration-300">
 <span className="tracking-tight">Explore Capability</span>
 <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 " />
 </div>
 </Link>
 );
 })}
 </div>

 {/* Subtle navigation link with small arrow */}
 <div className="flex justify-start">
 <Link
 href="/capabilities"
 className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold font-sans text-slate-500 hover:text-[#0b1330] transition-colors"
 >
 <span>All Capabilities</span>
 <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 text-slate-400 group-hover:text-[#0b1330]" />
 </Link>
 </div>

 </div>
 </section>
 );
};
