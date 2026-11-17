"use client";

import React from "react";
import { 
  Rocket, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Globe2 
} from "lucide-react";

interface Objective {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const OBJECTIVES: Objective[] = [
  {
    number: "01",
    icon: Rocket,
    title: "Accelerate Enterprise Modernization",
    description:
      "Transform legacy monolithic systems and fragmented business workflows into unified, cloud-native microservices and high-velocity digital capabilities that reduce operational latency.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Deploy Applied AI for Measurable Commercial ROI",
    description:
      "Engineer production-grade machine learning pipelines, predictive telemetry, and autonomous virtual agents that automate high-friction operational workflows rather than chasing experimental novelty.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Architect for Zero Technical Debt",
    description:
      "Design modular, decoupled software architectures, strict data schemas, and automated CI/CD pipelines upfront — ensuring digital platforms scale reliably and eliminating costly future rewrites.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Guarantee Enterprise Security & High Availability",
    description:
      "Implement zero-trust security postures, end-to-end data encryption, and WCAG AA accessibility standards engineered to maintain 99.98% uptime across mission-critical enterprise environments.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Align Engineering Directly with Business Outcomes",
    description:
      "Measure success through tangible commercial impact — maximizing checkout conversions, reducing customer support overhead, and accelerating feature time-to-market for our enterprise partners.",
  },
  {
    number: "06",
    icon: Globe2,
    title: "Bridge Global Strategy with Dedicated Engineering Pods",
    description:
      "Unite executive technology leadership in Dubai with high-throughput engineering campuses in India to deliver premier enterprise digital solutions with rapid cadence and cost efficiency.",
  },
];

export function AboutObjectives() {
  return (
    <section
      id="objectives"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white text-[#202B61] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans scroll-mt-24"
    >
      <div className="max-w-[1400px] w-full mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl space-y-3 text-left">
          <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#202B61]/70 font-sans">
            Strategic Vision &amp; Purpose
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#202B61] tracking-tight">
            Objectives of Arkanet
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#202B61]/80 leading-relaxed font-normal text-pretty">
            The core strategic pillars that guide every architectural blueprint, engineering sprint, and client commitment we make.
          </p>
        </div>

        {/* Structured 2x3 Grid of Strategic Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {OBJECTIVES.map((obj) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.number}
                className="flex flex-col justify-between space-y-4 pt-6 border-t border-slate-200/90 text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#202B61]/50 tracking-wider">
                      {obj.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#202B61] stroke-[2]" />
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#202B61] leading-[1.3] tracking-tight">
                    {obj.title}
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-[15px] text-[#202B61]/75 leading-[1.7] font-normal">
                  {obj.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
