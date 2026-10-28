"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface AgencyStatementProps {
 onOpenBooking?: () => void;
}

export const AgencyStatement: React.FC<AgencyStatementProps> = ({ onOpenBooking }) => {
 return (
 <section id="what-is-arkanet" className="relative w-full min-h-[100vh] min-h-[100dvh] flex flex-col justify-center items-center bg-[#f4f6fb] px-4 sm:px-8 lg:px-12 py-10 sm:py-14 select-none border-t border-slate-200/80 overflow-hidden">
 <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col justify-center gap-8 sm:gap-10">
 
 {/* -- 1. WIDE BALANCED SECTION HEADER -- */}
 <div className="max-w-4xl">
 <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
 Engineering Enterprise Software, Intelligent AI &amp; Cloud Systems
 </h2>
 <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5 max-w-3xl">
 We deliver custom digital products, web &amp; mobile applications, and applied artificial intelligence engineered to perform under real traffic and strict enterprise SLAs.
 </p>
 </div>

 {/* -- 2. THREE-CARD HIGHLIGHT GRID (EXPANDED TO FULL WIDTH, NO VACANT SIDES) -- */}
 <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch w-full">
 
 {/* CARD 1: Wide Feature Card (6 cols) � Web, Mobile & Software Development */}
 <div className="md:col-span-12 lg:col-span-6 rounded-[5px] bg-white border border-slate-200/90 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
 <div>
 <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug">
 Web &amp; Mobile Engineering
 </h3>
 <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-xl">
 Custom Next.js web applications, cross-platform mobile apps (iOS &amp; Android), and scalable digital platforms engineered for conversion, speed, and real enterprise scale.
 </p>
 </div>

 <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold font-sans text-slate-500">
 <div className="flex items-center gap-1.5">
 <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
 <span>Next.js &amp; Mobile Native</span>
 </div>
 <div className="flex items-center gap-1.5">
 <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
 <span>High Performance &amp; SEO</span>
 </div>
 <div className="flex items-center gap-1.5">
 <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
 <span>100% IP Ownership</span>
 </div>
 </div>
 </div>

 {/* CARD 2: Dark Navy Card (3 cols) � AI & Data Intelligence */}
 <div className="md:col-span-6 lg:col-span-3 rounded-[5px] bg-[#202B61] text-white p-7 sm:p-8 flex flex-col justify-start border border-slate-800">
 <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug">
 Applied AI &amp;<br />Data Intelligence
 </h3>
 <p className="font-sans font-medium text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
 Machine learning models, conversational AI agents, and intelligent automated workflows built to scale operations.
 </p>
 </div>

 {/* CARD 3: Dark Navy Card (3 cols) � Cloud & Cybersecurity */}
 <div className="md:col-span-6 lg:col-span-3 rounded-[5px] bg-[#202B61] text-white p-7 sm:p-8 flex flex-col justify-start border border-slate-800">
 <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug">
 Cloud, DevOps &amp;<br />Cybersecurity
 </h3>
 <p className="font-sans font-medium text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
 Production-grade cloud architecture with 99.9% uptime, zero memory leaks, and enterprise-grade security protocols.
 </p>
 </div>

 </div>

 {/* Subtle navigation link with small arrow */}
 <div className="flex justify-start">
 <Link
 href="/work"
 className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold font-sans text-slate-500 hover:text-[#202B61] transition-colors"
 >
 <span>Explore Work</span>
 <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-400 group-hover:text-[#202B61]" />
 </Link>
 </div>

 </div>
 </section>
 );
};
