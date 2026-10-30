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
      className="group fixed top-5 right-5 sm:top-8 sm:right-8 z-50 w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden shrink-0"
      aria-label="Close modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-[#202B61]/80 group-hover:text-[#202B61] transition-colors duration-200"
      >
        <X className="w-5 h-5" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}

export interface WorkProjectDetail {
  id: string;
  category: string;
  title: string;
  titleLine1?: string;
  titleLine2?: string;
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
  const [currentProject, setCurrentProject] = useState<WorkProjectDetail | null>(null);

  useEffect(() => {
    if (project) setCurrentProject(project);
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
  const nextProject =
    allProjects.length > 0 && currentIndex !== -1
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
        <div className="fixed inset-0 z-50 font-sans">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#202B61]/40 backdrop-blur-xs z-40 cursor-pointer"
          />

          {/* Full-Screen Page Modal (Seamless white, no nested floating card boxes) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-50 bg-white text-[#202B61] flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <MagneticCloseButton onClick={onClose} />

            {/* Scrollable Content Body */}
            <div
              id="work-modal-scroll"
              className="flex-1 overflow-y-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20"
            >
              <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
                
                {/* ── HEADER & META ── */}
                <div className="space-y-4">
                  {/* Category & Year (Unboxed clean text) */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#202B61]">
                    <span>{currentProject.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[#202B61]/80 font-normal">{details.year}</span>
                  </div>

                  {/* Title */}
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.1]">
                    {currentProject.title}
                  </h1>

                  {/* Description */}
                  <p className="font-sans text-lg sm:text-xl text-[#202B61]/80 font-normal leading-relaxed max-w-3xl pt-2">
                    {currentProject.description}
                  </p>

                  {/* Client Info (Unboxed clean text) */}
                  <div className="pt-2 text-sm space-y-0.5">
                    <p className="font-bold text-[#202B61]">{details.client}</p>
                    <p className="text-[#202B61]/80 font-sans text-xs sm:text-sm">{details.services.join(" • ")}</p>
                  </div>
                </div>

                {/* ── HERO IMAGE (Clean frame, not enclosed in a white card box) ── */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-none">
                  <img
                    src={currentProject.outerImage}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ── OVERVIEW & CHALLENGE (Seamless sections) ── */}
                <div className="pt-8 border-t border-slate-200/80 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
                    <div className="space-y-3">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                        Project Overview
                      </h3>
                      <p className="font-sans text-base text-[#202B61]/80 leading-relaxed font-normal">
                        {details.overview}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                        The Challenge
                      </h3>
                      <p className="font-sans text-base text-[#202B61]/80 leading-relaxed font-normal">
                        {details.challenge}
                      </p>
                    </div>
                  </div>

                  {/* ENGINEERING STRATEGY & SOLUTION */}
                  <div className="space-y-3 pt-8 border-t border-slate-100">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                      Engineering Strategy &amp; Solution
                    </h3>
                    <p className="font-sans text-base text-[#202B61]/80 leading-relaxed font-normal max-w-4xl">
                      {details.solution}
                    </p>
                  </div>
                </div>

                {/* ── KEY BUSINESS IMPACT (Clean metric columns) ── */}
                <div className="pt-10 border-t border-slate-200/80 space-y-8">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                    Key Business Impact
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
                    {details.impact.map((item, idx) => {
                      const parts = item.match(/^([\$\+]?[\d\.\,\%\/\★]+[a-zA-Z\+]?)\s+(.*)$/);
                      const stat = parts ? parts[1] : null;
                      const label = parts ? parts[2] : item;

                      return (
                        <div
                          key={idx}
                          className={`flex flex-col sm:px-6 first:sm:pl-0 ${
                            idx !== 0 ? "pt-6 sm:pt-0" : ""
                          }`}
                        >
                          {stat ? (
                            <>
                              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#202B61] tracking-tight leading-none mb-3">
                                {stat}
                              </div>
                              <p className="font-sans text-sm text-[#202B61]/80 leading-relaxed">
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

                {/* ── TECH STACK & ARCHITECTURE (Clean inline list) ── */}
                <div className="pt-10 border-t border-slate-200/80 space-y-4">
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#202B61]/80">
                    Tech Stack &amp; Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {details.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 text-xs sm:text-sm font-medium font-sans px-3.5 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── NEXT PROJECT FOOTER BUTTON ── */}
                {nextProject && (
                  <div className="pt-12 border-t border-slate-200/80 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextProject}
                      className="group inline-flex items-center gap-3 bg-[#202B61] hover:bg-[#161e47] text-white px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-200 cursor-pointer shadow-none hover:shadow-none"
                    >
                      <span>Next Project: {nextProject.title}</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
