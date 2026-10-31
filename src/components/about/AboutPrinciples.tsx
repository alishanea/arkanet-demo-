"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Layers } from "lucide-react";

const PILLARS = [
  {
    icon: Layers,
    title: "Dual-Hub Engineering Synergy",
    desc: "We combine strategic client discovery at our Dubai headquarters with the rapid velocity of our dedicated engineering and R&D centers located across India.",
  },
  {
    icon: Cpu,
    title: "Applied AI & Automation",
    desc: "We build production-ready retrieval pipelines, fine-tuned domain models, and intelligent workflows that integrate directly into core enterprise databases.",
  },
  {
    icon: Zap,
    title: "Speed with Production Rigor",
    desc: "Two-week agile sprints, continuous integration pipelines, strict TypeScript typing, and preview environments guarantee fast delivery with zero technical debt.",
  },
  {
    icon: Shield,
    title: "Enterprise Security & IP",
    desc: "All client intellectual property belongs entirely to you. We enforce mutual confidentiality, encrypted credential vaults, and SOC2-ready protocols.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl space-y-3 text-left">
          <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#202B61]/65">
            Operating Framework
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#202B61] tracking-tight leading-tight">
            Our Core Operating Principles
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#202B61]/80 leading-relaxed font-normal">
            How we approach every architectural decision, engineering sprint, and client commitment.
          </p>
        </div>

        {/* 4 Operating Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 shadow-none flex flex-col justify-between h-full space-y-4 text-left hover:border-slate-300 transition-colors duration-200"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-[#202B61]/5 border border-[#202B61]/10 text-[#202B61] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-sans text-sm sm:text-[15px] text-[#202B61]/80 leading-relaxed font-normal pt-2 border-t border-slate-100">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

