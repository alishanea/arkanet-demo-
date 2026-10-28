"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OurProcessProps {
  onOpenBooking?: () => void;
}

interface Deliverable {
  line1: string;
  line2: string;
}

interface ProcessStep {
  key: string;
  stepNumber: string;
  title: string;
  body: string;
  image: string;
  deliverables: Deliverable[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    key: "understand",
    stepNumber: "01",
    title: "Understand",
    body: "We listen closely to your commercial objectives, technical constraints, and key user outcomes before writing any line of code.",
    image: "/assets/images/undestand.webp",
    deliverables: [
      { line1: "Project Goals & Scope", line2: "Documented on Paper" },
      { line1: "Current Architecture", line2: "And Systems Baseline" },
      { line1: "Target User Audience", line2: "And Product Journeys" },
    ],
  },
  {
    key: "architect",
    stepNumber: "02",
    title: "Architect",
    body: "We translate your goals into a definitive technical roadmap with scope, component hierarchy, and systems architecture decisions made upfront.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    deliverables: [
      { line1: "Interactive Wireframes", line2: "And Prototype Flows" },
      { line1: "Technical Specifications", line2: "And Systems Roadmap" },
      { line1: "Sprint Milestones", line2: "And Delivery Schedule" },
    ],
  },
  {
    key: "deliver",
    stepNumber: "03",
    title: "Deliver",
    body: "Our engineering team executes with transparent two-week sprints, continuous integration pipelines, and rigorous automated quality assurance testing protocols.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop",
    deliverables: [
      { line1: "Live Preview Builds", line2: "In Continuous Sprints" },
      { line1: "Automated QA Testing", line2: "And Code Verification" },
      { line1: "Production Deployment", line2: "With Zero Downtime" },
    ],
  },
  {
    key: "sustain",
    stepNumber: "04",
    title: "Sustain",
    body: "Delivery marks the beginning of the partnership as we stay continuously engaged through monitoring, infrastructure maintenance, and optimization.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=900&auto=format&fit=crop",
    deliverables: [
      { line1: "24/7 Live Telemetry", line2: "And System Monitoring" },
      { line1: "Infrastructure Scaling", line2: "And Security Updates" },
      { line1: "Dedicated Engineering", line2: "Ongoing Team Support" },
    ],
  },
];

const ProcessCard: React.FC<{ step: ProcessStep; index: number; total: number }> = ({ step, index }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.96 + index * 0.01, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <div
      ref={containerRef}
      className="sticky transition-all duration-300"
      style={{ top: isMobile ? `calc(4rem + ${index * 0.75}rem)` : `calc(5.5rem + ${index * 1.5}rem)` }}
    >
      <motion.div
        style={{ scale: cardScale }}
        className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-10 xl:gap-12 items-center rounded-xl bg-white text-[#202B61] p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-none origin-top"
      >
        {/* Left Column */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col justify-between space-y-5 sm:space-y-7"
        >
          {/* Top: Large Step Number */}
          <div>
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202B61]/25 select-none leading-none tracking-tight block">
              {step.stepNumber}
            </span>
          </div>

          {/* Title & Description (Exact 18 words each) */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#202B61] tracking-tight">
              {step.title}
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {step.body}
            </p>
          </div>

          {/* Key Deliverables Section (Strict 2-Line Typographic Symmetry) */}
          <div className="space-y-3.5 pt-3 sm:pt-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 pt-1">
              {step.deliverables.map((d, itemIdx) => {
                return (
                  <div
                    key={itemIdx}
                    className={`flex flex-col items-start justify-start py-2.5 sm:py-0 ${
                      itemIdx === 0
                        ? "sm:pr-6 lg:pr-8 first:pt-0"
                        : itemIdx === 1
                        ? "sm:px-6 lg:px-8"
                        : "sm:pl-6 lg:pl-8 last:pb-0"
                    }`}
                  >
                    <div className="font-sans text-xs sm:text-sm font-semibold text-[#202B61] leading-snug tracking-tight min-h-[2.5rem] sm:min-h-[2.75rem] flex flex-col justify-start">
                      <span className="block">{d.line1}</span>
                      <span className="block">{d.line2}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <div className="relative aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/80">
          <img
            src={step.image}
            alt={step.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const OurProcess: React.FC<OurProcessProps> = () => {
  return (
    <section
      id="our-process"
      className="relative w-full bg-[#f4f6fb] text-[#202B61] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 select-none border-t border-slate-200/80"
    >
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Section Heading */}
        <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8">
          <div className="w-full text-left space-y-3 max-w-4xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight leading-tight">
              Our Process
            </h2>
            <p className="font-sans font-normal text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              We build technology partnerships designed to last, not projects designed to end at handoff. Every engagement is shaped around one principle: the right technology environment is secure, dependable, and built to your specifications.
            </p>
          </div>
        </div>

        {/* Stacked Cards Container */}
        <div className="flex flex-col gap-6 sm:gap-10 relative">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard
              key={step.key}
              step={step}
              index={index}
              total={PROCESS_STEPS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
