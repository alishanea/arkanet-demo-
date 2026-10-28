"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

interface AboutHowWeWorkProps {
  onOpenBooking?: () => void;
}

const STEPS = [
  {
    step: "01",
    title: "Understand",
    icon: Search,
    description:
      "We listen closely to your objectives, constraints, and the outcomes that matter most: discovery, not a sales conversation.",
    deliverable: "Goals, user journeys & technical baseline",
  },
  {
    step: "02",
    title: "Architect",
    icon: Compass,
    description:
      "We translate your goals into a defined roadmap: clear scope, sequencing, and solid technical decisions made upfront.",
    deliverable: "Wireframes, technical spec & delivery roadmap",
  },
  {
    step: "03",
    title: "Deliver",
    icon: Rocket,
    description:
      "Our team executes with transparent, continuous reporting and rigorous testing, so you always know where the work stands.",
    deliverable: "Production-ready build, tested & deployed",
  },
  {
    step: "04",
    title: "Sustain",
    icon: ShieldCheck,
    description:
      "Delivery starts the relationship. We stay engaged through ongoing support, monitoring, performance tuning, and scaling.",
    deliverable: "Long-term monitoring, fixes & optimisation",
  },
];

export function AboutHowWeWork({ onOpenBooking }: AboutHowWeWorkProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] select-none border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Heading & Sub-Content */}
        <div className="w-full text-left space-y-3 max-w-4xl">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-tight">
            How We Work
          </h2>

          <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            We build technology partnerships designed to last, not projects designed to end at handoff. Every engagement is shaped around one principle: the right technology environment is secure, dependable, and built to your specifications.
          </p>
        </div>

        {/* 4 Columns (Clean, No Boxes, Line Separation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/90 w-full pt-2">
          {STEPS.map((step, idx) => {
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex flex-col justify-between py-6 sm:py-0 transition-all duration-300 ${
                  idx === 0
                    ? "sm:pr-6 lg:pr-8"
                    : idx === 3
                    ? "sm:pl-6 lg:pl-8"
                    : "sm:px-6 lg:px-8"
                }`}
              >
                <div className="space-y-4">
                  {/* Top row: step number */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl sm:text-3xl font-black text-[#202B61]/25 select-none">
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#202B61] tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  {/* Description (Exact 17 words in each card) */}
                  <p className="text-xs sm:text-sm text-slate-600 font-sans font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverable Footer (Exact 6 words in each card) */}
                <div className="pt-4 mt-6 border-t border-slate-200/70">
                  <p className="text-xs font-heading font-semibold text-[#202B61] leading-snug">
                    {step.deliverable}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle link with small arrow */}
        {onOpenBooking && (
          <div className="pt-2 flex items-center">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold font-sans text-slate-500 hover:text-[#202B61] transition-colors cursor-pointer"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-slate-400 group-hover:text-[#202B61]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
