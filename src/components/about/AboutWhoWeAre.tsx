"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Layers, Globe, CheckCircle2 } from "lucide-react";

const STATS = [
  {
    number: "20+",
    label: "Years Combined Leadership",
    detail: "Decades of engineering, product design, and cloud architecture experience.",
  },
  {
    number: "1000+",
    label: "Projects & Releases Delivered",
    detail: "From high-scale consumer mobile apps to enterprise workflow automation.",
  },
  {
    number: "99.8%",
    label: "SLA Uptime & Reliability",
    detail: "Engineered with redundancy, automated failovers, and robust cloud monitoring.",
  },
  {
    number: "100%",
    label: "In-House Engineering",
    detail: "Zero third-party sub-contracting; one unified team owns your entire code base.",
  },
];

const PILLARS = [
  {
    icon: Layers,
    title: "Dual-Hub Engineering Synergy",
    desc: "We combine strategic client advisory and discovery at our Dubai headquarters (Business Bay) with the rapid velocity of our dedicated engineering and R&D centers in India (Infopark Kochi & Cyberpark Calicut).",
  },
  {
    icon: Cpu,
    title: "Applied AI & Automation",
    desc: "We don't treat AI as a gimmick. We build production-ready RAG pipelines, fine-tuned domain models, intelligent document extraction, and autonomous agent workflows that directly integrate into your core databases.",
  },
  {
    icon: Zap,
    title: "Speed with Production Rigor",
    desc: "Two-week agile sprints, continuous integration/continuous deployment (CI/CD), strict TypeScript typing, and automated preview environments ensure fast delivery without technical debt.",
  },
  {
    icon: Shield,
    title: "Enterprise Security & IP Ownership",
    desc: "All client intellectual property belongs 100% to you. We enforce mutual NDAs, encrypted credentials, SOC2 compliance guidelines, and HIPAA-ready vaults for healthcare workloads.",
  },
];

export function AboutWhoWeAre() {
  return (
    <section className="w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-12 bg-white border-t border-slate-200/80 text-left">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Heading & In-Depth Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-[1.15]">
              Engineering digital infrastructure that endures
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-slate-600 font-sans text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Arkanet Technologies was founded with a singular conviction: businesses deserve technology partners who think like software owners, not disconnected outsourced agencies. Too many digital initiatives stumble because discovery, design, development, and hosting are fragmented across disparate vendors.
            </p>
            <p>
              We operate across 6 specialized practices — custom web platforms, native mobile applications, applied artificial intelligence, cloud architecture, UI/UX systems, and business process automation. By unifying strategic advisory in Dubai with deep technical craftsmanship in India, we deliver software built around your exact commercial realities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-semibold text-[#202B61]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>End-to-end technical accountability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero legacy vendor lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Continuous post-launch maintenance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated agile engineering squads</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="bg-[#f8fafc] rounded-[5px] p-6 sm:p-8 border border-slate-200/90 shadow-none flex flex-col justify-between text-left space-y-3"
            >
              <div>
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#202B61] tracking-tight mb-2">
                  {stat.number}
                </div>
                <h3 className="font-heading font-bold text-base text-[#202B61] leading-snug">
                  {stat.label}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4 Operating Pillars */}
        <div className="space-y-8 pt-4 border-t border-slate-100">
          <div className="max-w-3xl space-y-3 text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] tracking-tight">
              Our Core Operating Principles
            </h3>
            <p className="font-sans text-base text-slate-600 leading-relaxed font-normal">
              How we approach every architectural decision, engineering sprint, and client commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[5px] p-7 sm:p-8 border border-slate-200/90 bg-[#f8fafc] space-y-3.5 text-left shadow-none"
                >
                  <div className="w-10 h-10 rounded-[4px] bg-[#202B61] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
