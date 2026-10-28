"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

function MagneticCloseButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.88 }}
      className="group absolute top-5 right-5 sm:top-7 sm:right-7 z-50 w-10 h-10 rounded-xl bg-white hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden shrink-0 shadow-md border border-slate-200/90"
      aria-label="Close modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-slate-600 group-hover:text-[#202B61] transition-colors duration-200"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}

export interface WorkProjectDetail {
  id: string;
  category: string;
  title: string;
  description: string;
  outerImage: string;
  innerImage: string;
  detail?: {
    client: string;
    year: string;
    services: string[];
    overview: string;
    challenge: string;
    solution: string;
    impact: string[];
    techStack: string[];
  };
}

export interface WorkDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: WorkProjectDetail | null;
  allProjects?: WorkProjectDetail[];
  onSelectProject?: (proj: WorkProjectDetail) => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  isOpen,
  onClose,
  project,
  allProjects = [],
  onSelectProject,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProject, setCurrentProject] = useState<WorkProjectDetail | null>(null);

  useEffect(() => {
    if (project) setCurrentProject(project);
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsScrolled(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 20) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  };

  if (!currentProject) return null;

  const details = currentProject.detail || {
    client: "Enterprise Partner",
    year: "2026",
    services: [currentProject.category, "Custom Software", "UI/UX Architecture"],
    overview: currentProject.description,
    challenge: "Operational friction and legacy tool silos restricted scalability and customer conversion.",
    solution: "Designed and engineered a high-performance modern web application built for speed, security, and effortless user adoption.",
    impact: [
      "+130% Measurable performance improvement",
      "Sub-second average loading latency",
      "99.9% System reliability under load",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel Enterprise"],
  };

  const currentIndex = allProjects.findIndex((p) => p.id === currentProject.id);
  const nextProject = allProjects.length > 0 && currentIndex !== -1
    ? allProjects[(currentIndex + 1) % allProjects.length]
    : null;

  const handleNextProject = () => {
    if (nextProject && onSelectProject) {
      onSelectProject(nextProject);
      const scrollEl = document.getElementById("work-modal-scroll");
      if (scrollEl) scrollEl.scrollTop = 0;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end font-sans">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#202B61]/40 backdrop-blur-xs z-40 cursor-pointer"
          />

          {/* Slide-Up Panel in Brand Palette (Ice-blue background, pristine white cards) */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`fixed bottom-0 z-50 bg-[#f4f6fb] text-[#202B61] border-t border-slate-200/90 shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? "inset-x-0 top-0 rounded-t-none"
                : "inset-x-0 sm:inset-x-6 xl:inset-x-[36px] top-[70px] sm:top-[100px] lg:top-[120px] rounded-t-2xl sm:rounded-t-3xl"
            }`}
          >
            {/* Magnetic Close (X) Button */}
            <MagneticCloseButton onClick={onClose} />

            {/* Scrollable Content Body */}
            <div
              id="work-modal-scroll"
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* TOP HERO SHOWCASE CARD */}
              <div className="px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 lg:pt-12 pb-0">
                <div className="max-w-[1350px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs">
                    
                    {/* Left: Project Hero Mockup Image (5 Columns) */}
                    <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[280px] lg:min-h-[420px] overflow-hidden bg-slate-100">
                      <img
                        src={currentProject.outerImage}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right: Title, Category, Year, Overview & Client (7 Columns) */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-5 p-7 sm:p-10 lg:p-12 bg-white">
                      
                      {/* Category & Year */}
                      <div className="flex items-center gap-2.5">
                        <span className="font-semibold text-xs text-[#1d4ed8] bg-blue-50 border border-blue-100 px-3 py-1 rounded-md">
                          {currentProject.category}
                        </span>
                        <span className="text-slate-400 font-medium text-xs font-sans">
                          {details.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight leading-tight">
                        {currentProject.title}
                      </h1>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                        {currentProject.description}
                      </p>

                      {/* Client Info Pill */}
                      <div className="flex items-center gap-3 pt-2 p-3 rounded-xl bg-[#f8fafc] border border-slate-200/80 max-w-md">
                        <div className="w-9 h-9 rounded-lg bg-[#202B61] text-white flex items-center justify-center font-heading font-bold text-xs shrink-0 shadow-2xs">
                          {details.client.charAt(0)}
                        </div>
                        <div className="text-xs sm:text-sm">
                          <p className="font-bold text-[#202B61]">{details.client}</p>
                          <p className="text-slate-500 font-sans text-xs">{details.services.join(" • ")}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* BODY CONTENT SECTIONS */}
              <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-12">
                <div className="max-w-[1350px] mx-auto space-y-8 sm:space-y-10">
                  
                  {/* OVERVIEW & CHALLENGE CARD */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-2xs space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                      <div className="space-y-3">
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                          Project Overview
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {details.overview}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                          The Challenge
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {details.challenge}
                        </p>
                      </div>
                    </div>

                    {/* ENGINEERING STRATEGY & SOLUTION */}
                    <div className="space-y-3 pt-6 border-t border-slate-100">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                        Engineering Strategy &amp; Solution
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-4xl">
                        {details.solution}
                      </p>
                    </div>
                  </div>

                  {/* IMPACT & RESULTS CARD */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-2xs space-y-8">
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                        Key Business Impact
                      </h3>
                    </div>

                    {/* Metrics Divider Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                      {details.impact.map((item, idx) => {
                        const parts = item.match(/^([\$\+]?[\d\.\,\%\/\★]+[a-zA-Z\+]?)\s+(.*)$/);
                        const stat = parts ? parts[1] : null;
                        const label = parts ? parts[2] : item;

                        return (
                          <div
                            key={idx}
                            className={`flex flex-col md:px-8 first:md:pl-0 ${
                              idx !== 0 ? "md:border-l md:border-slate-100" : ""
                            }`}
                          >
                            {stat ? (
                              <>
                                <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-none mb-3">
                                  {stat}
                                </div>
                                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                                  {label}
                                </p>
                              </>
                            ) : (
                              <p className="font-sans text-sm font-semibold text-[#202B61] leading-relaxed">
                                {item}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* TECH STACK CARD */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 shadow-2xs space-y-4">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                      Tech Stack &amp; Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {details.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#f8fafc] text-slate-700 text-xs sm:text-sm font-medium font-sans px-3.5 py-1.5 rounded-lg border border-slate-200/80 hover:border-[#202B61] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* NEXT PROJECT FOOTER BUTTON */}
                  {nextProject && (
                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextProject}
                        className="group inline-flex items-center gap-3 bg-[#202B61] hover:bg-[#1d4ed8] text-white px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                      >
                        <span>Next Project: {nextProject.title}</span>
                        <ArrowRight className="w-4 h-4 text-[white] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
