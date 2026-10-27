"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OurProcessProps {
  onOpenBooking?: () => void;
}

interface Deliverable {
  label: string;
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
    body: "We listen closely to your objectives, constraints, and the outcomes that matter most: discovery, not a sales conversation.",
    image: "/assets/images/undestand.webp",
    deliverables: [
      { label: "Goals & scope, on paper" },
      { label: "A look at what you already have" },
      { label: "Who this is actually for" },
    ],
  },
  {
    key: "architect",
    stepNumber: "02",
    title: "Architect",
    body: "We translate that into a defined roadmap: scope, sequencing, and technical decisions made before writing code.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    deliverables: [
      { label: "Something you can click through" },
      { label: "The technical decisions made upfront" },
      { label: "What gets built first, and why" },
    ],
  },
  {
    key: "deliver",
    stepNumber: "03",
    title: "Deliver",
    body: "Our team executes with transparent, continuous reporting, so you always know where the work stands.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop",
    deliverables: [
      { label: "You see it as it's built" },
      { label: "Checked before it ships" },
      { label: "Live, and actually working" },
    ],
  },
  {
    key: "sustain",
    stepNumber: "04",
    title: "Sustain",
    body: "Delivery starts the relationship; we stay engaged through ongoing support, monitoring, and optimization.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=900&auto=format&fit=crop",
    deliverables: [
      { label: "We keep an eye on it" },
      { label: "Room to grow" },
      { label: "Still here after launch" },
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
        className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-10 xl:gap-12 items-center rounded-[5px] bg-white text-[#0b1330] p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm origin-top"
      >
        {/* Left Column */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col justify-between space-y-5 sm:space-y-7"
        >
          {/* Top: Large Step Number */}
          <div>
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#94a3b8] select-none leading-none tracking-tight block">
              {step.stepNumber}
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#202B61] tracking-tight">
              {step.title}
            </h3>
            <p className="font-sans text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {step.body}
            </p>
          </div>

          {/* Key Deliverables Section */}
          <div className="space-y-3.5 pt-3 sm:pt-5">
            <span className="font-sans text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#3377a2] block">
              KEY DELIVERABLES
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#dbe6f0] pt-1">
              {step.deliverables.map((d, itemIdx) => {
                return (
                  <div
                    key={d.label}
                    className={`flex flex-col items-start gap-2 py-2.5 sm:py-0 ${
                      itemIdx === 0
                        ? "sm:pr-6 lg:pr-8 first:pt-0"
                        : itemIdx === 1
                        ? "sm:px-6 lg:px-8"
                        : "sm:pl-6 lg:pl-8 last:pb-0"
                    }`}
                  >
                    <span className="font-sans text-xs sm:text-[13px] lg:text-sm font-semibold text-[#14233c] leading-snug tracking-tight sm:whitespace-pre-line">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <div className="relative aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-slate-100 shadow-sm border border-slate-100">
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
      className="relative w-full bg-[#f4f6fb] text-[#0b1330] py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-[40px] select-none"
    >
      <div className="w-full space-y-8 sm:space-y-16">
        {/* Section Heading - Standardized to Brand Typography */}
        <div className="w-full text-left space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight leading-tight">
            Our Process
          </h2>
          <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5 max-w-3xl">
            We build technology partnerships designed to last, not projects designed to end at handoff. Every engagement is shaped around one principle: the right technology environment is secure, dependable, and built to your specifications.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="mt-8 sm:mt-20 flex flex-col gap-5 sm:gap-14 relative">
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
