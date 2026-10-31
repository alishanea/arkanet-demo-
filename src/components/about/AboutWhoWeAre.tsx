"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Layers } from "lucide-react";

const STATS = [
  {
    number: "20+",
    label: "Years Combined Leadership",
    detail: "Decades of engineering leadership, product design, and cloud architecture expertise.",
  },
  {
    number: "1000+",
    label: "Projects & Releases Delivered",
    detail: "Successful releases delivered from consumer mobile apps to enterprise workflow automation.",
  },
  {
    number: "99.8%",
    label: "SLA Uptime & Reliability",
    detail: "Engineered with multi-region redundancy, automated failovers, and 24/7 monitoring.",
  },
  {
    number: "100%",
    label: "In-House Engineering",
    detail: "Zero third-party contracting with one unified in-house team owning your entire codebase.",
  },
];

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

export function AboutWhoWeAre() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80 text-left">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10 lg:space-y-10">
        
        {/* Section Heading & In-Depth Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-[1.15]">
              Engineering digital infrastructure that endures
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#202B61]/80 font-sans text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Arkanet Technologies was founded with a singular conviction: businesses deserve technology partners who think like software owners, not disconnected outsourced agencies. Too many digital initiatives stumble because discovery, design, development, and hosting are fragmented across disparate vendors.
            </p>
            <p>
              We operate across 6 specialized practices — custom web platforms, native mobile applications, applied artificial intelligence, cloud architecture, UI/UX systems, and business process automation. By unifying strategic advisory in Dubai with deep technical craftsmanship in India, we deliver software built around your exact commercial realities.
            </p>
          </div>
        </div>

        {/* 4 Stats Grid (Equal Word Length: exactly 10 words each) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
                            className="bg-[#f8fafc] rounded-[4px] shadow-none p-5 sm:p-6 flex flex-col justify-between h-full text-left space-y-3"
            >
              <div className="space-y-1.5">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#202B61] tracking-tight">
                  {stat.number}
                </div>
                <div className="h-10 sm:h-11 flex items-start">
                  <h3 className="font-heading font-bold text-base text-[#202B61] leading-snug">
                    {stat.label}
                  </h3>
                </div>
              </div>
              <div className="flex-1 flex items-start">
                <p className="font-sans text-sm text-[#202B61]/80 font-normal leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Operating Pillars (Equal Word Length: exactly 24 words each) */}
        <div className="space-y-6 pt-6 border-t border-slate-200/80">
          <div className="max-w-3xl space-y-3 text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
              Our Core Operating Principles
            </h3>
            <p className="font-sans text-base text-[#202B61]/80 leading-relaxed font-normal">
              How we approach every architectural decision, engineering sprint, and client commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[4px] p-5 sm:p-6 shadow-none bg-[#f8fafc] flex flex-col justify-between h-full space-y-3 text-left transition-all duration-300"
                >
                  <div className="space-y-3.5">
                    <div className="w-10 h-10 rounded-[4px] bg-[#202B61] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-[#202B61]/80 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
