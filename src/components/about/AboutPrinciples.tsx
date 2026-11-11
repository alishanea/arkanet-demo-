"use client";

import React from "react";
import { Shield, Cpu, Zap, Layers } from "lucide-react";

const PILLARS = [
  {
    icon: Layers,
    title: "Dual-Hub Innovation Synergy",
    desc: "Strategic headquarters in Kelakam paired with Dubai corporate office, bridging regional engineering talent with demanding global enterprise technology standards.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence & Big Data",
    desc: "Harness predictive analytics, automated intelligence, custom virtual agents, and scalable big data infrastructure engineered to maximize operational business efficiency.",
  },
  {
    icon: Zap,
    title: "AR/VR & Metaverse Architecture",
    desc: "Redefine digital engagement through immersive 3D spatial environments, augmented reality applications, and secure blockchain integrations at the digital frontier.",
  },
  {
    icon: Shield,
    title: "Cloud Solutions & Cybersecurity",
    desc: "Architect secure, resilient cloud environments ensuring continuous integration pipelines, enterprise cybersecurity protocols, and high availability performance across critical operations.",
  },
];

export function AboutPrinciples() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl space-y-2.5 text-left">
          <h2 className="section-h2">
            Our Core Operating Principles
          </h2>
          <p className="section-desc max-w-2xl">
            How we approach every architectural decision, engineering sprint, and client commitment
          </p>
        </div>

        {/* Frameless Editorial Grid */}
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
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm sm:text-[15px] text-[#202B61]/85 leading-[1.65] font-normal pl-8">
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
