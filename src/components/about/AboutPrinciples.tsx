"use client";

import React from "react";
import { Shield, Cpu, Zap, Layers } from "lucide-react";

const PILLARS = [
  {
    icon: Layers,
    title: "Dual-Hub Innovation Synergy",
    desc: "With our strategic headquarters in Kelakam, Kerala, and a dedicated corporate presence in Business Bay, Dubai, we seamlessly bridge regional insights with global technological standards.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence & Big Data",
    desc: "Harness the power of predictive analytics, automated intelligence, custom virtual agents, and enterprise-grade big data infrastructure designed to optimize operational efficiency.",
  },
  {
    icon: Zap,
    title: "AR/VR & Metaverse Architecture",
    desc: "Redefine user engagement through immersive digital environments, interactive 3D spaces, augmented reality, and secure blockchain integrations at the digital frontier.",
  },
  {
    icon: Shield,
    title: "Cloud Solutions & Cybersecurity",
    desc: "Architecting secure, highly scalable cloud environments that ensure continuous deployment, robust cybersecurity, and agile performance across all enterprise operations.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl space-y-3 text-left">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#202B61] tracking-tight leading-tight">
            Our Core Operating Principles
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#202B61]/80 leading-relaxed font-normal">
            How we approach every architectural decision, engineering sprint, and client commitment.
          </p>
        </div>

        {/* Frameless Editorial Grid (No Boxes, Seamless from Header) */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isLeftColumn = idx % 2 === 0;
              const isTopRow = idx < 2;

              return (
                <div
                  key={pillar.title}
                  className={`space-y-3 text-left ${
                    isTopRow ? "pt-2 sm:pt-4 pb-8 sm:pb-10" : "py-8 sm:py-10"
                  } ${
                    isLeftColumn
                      ? "md:pr-10 lg:pr-14 md:border-r md:border-slate-200/80"
                      : "md:pl-10 lg:pl-14"
                  } ${
                    isTopRow
                      ? "border-b border-slate-200/80"
                      : idx === 2
                      ? "border-b md:border-b-0 border-slate-200/80"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#202B61] stroke-[2] shrink-0" />
                    <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#202B61] tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[15px] sm:text-base text-[#202B61]/80 leading-relaxed font-normal pl-8">
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
