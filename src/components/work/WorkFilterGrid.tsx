"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, List, LayoutGrid } from "lucide-react";
import {
  WORK_PROJECTS,
  WORK_CATEGORIES,
  PROJECT_DETAILS_MAP,
  type WorkProject,
} from "@/lib/workData";
import { WorkDetailModal } from "@/components/modals/WorkDetailModal";

export const WorkFilterGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof WORK_CATEGORIES[number]>("All");
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const filteredProjects = WORK_PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const selectedProjectDetails = selectedProject
    ? {
        ...selectedProject,
        aspectX: 16,
        aspectY: 10,
        outerImage: selectedProject.image,
        innerImage: selectedProject.image,
        detail: PROJECT_DETAILS_MAP[selectedProject.id] || {
          client: selectedProject.title,
          year: selectedProject.year || "2026",
          services: selectedProject.services || [],
          overview: selectedProject.description,
          challenge:
            "Architecting high-scale digital infrastructure that maintains sub-second responsiveness under peak global demand.",
          solution:
            "Implemented custom modular components, automated CI/CD pipelines, and robust cloud telemetry.",
          impact: [
            "Over 99.9% Production uptime",
            "Sub-second initial page load speeds",
            "Seamless enterprise integration",
          ],
          techStack: selectedProject.services || ["Next.js", "TypeScript", "Tailwind CSS"],
        },
      }
    : null;

  return (
    <section id="projects" className="relative w-full py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none font-sans scroll-mt-20">
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* ── TOP CONTROLS: Category Filter Tabs + View Mode Toggle ── */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          
          {/* Category Filter Pills with Item Count */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {WORK_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? WORK_PROJECTS.length
                  : WORK_PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 outline-none focus:outline-none select-none ${
                    isActive
                      ? "bg-[#202B61] text-white shadow-none"
                      : "bg-white text-[#202B61]/80 hover:text-[#202B61] border border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-[#202B61]/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle (Detailed Horizontal Rows vs Compact 3-Column Grid) */}
          <div className="flex items-center gap-1 bg-white border border-slate-200/90 rounded-xl p-1 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("detailed")}
              aria-label="Detailed List View"
              className={`p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold select-none ${
                viewMode === "detailed"
                  ? "bg-[#202B61] text-white"
                  : "text-[#202B61]/70 hover:text-[#202B61] hover:bg-slate-50"
              }`}
              title="Detailed List View"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">List</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("compact")}
              aria-label="Compact Grid View"
              className={`p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold select-none ${
                viewMode === "compact"
                  ? "bg-[#202B61] text-white"
                  : "text-[#202B61]/70 hover:text-[#202B61] hover:bg-slate-50"
              }`}
              title="Compact Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>
          </div>

        </div>

        {/* ── PROJECT LISTINGS (SWITCHABLE) ── */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            No projects found for category &quot;{activeCategory}&quot;.
          </div>
        ) : viewMode === "detailed" ? (

          /* ═══════════════════════════════════════════════════════════════
             LAYOUT A: DETAILED HORIZONTAL EDITORIAL ROWS (THE OLD STYLE)
          ═══════════════════════════════════════════════════════════════ */
          <div className="space-y-5 sm:space-y-6">
            {filteredProjects.map((project) => {
              const details = PROJECT_DETAILS_MAP[project.id];
              const techChips = details?.techStack?.slice(0, 4) || project.services || [];

              return (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 transition-all duration-300 p-5 sm:p-6 lg:p-7 cursor-pointer overflow-hidden text-left shadow-none select-none w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                    {/* Left Side: Thumbnail Preview */}
                    <div className="lg:col-span-4 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[220px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-slate-900/[0.04] group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                    </div>

                    {/* Right Side: Editorial Metadata & Description */}
                    <div className="lg:col-span-8 flex flex-col justify-between space-y-3">
                      
                      {/* Meta Row: Category & Year */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#202B61] text-[11px] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-slate-400 font-medium text-[11px] sm:text-xs">
                          {project.year || "2025"}
                        </span>
                      </div>

                      {/* Title & Arrow */}
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] group-hover:text-[#202B61] transition-colors leading-snug">
                            {project.title}
                          </h2>
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-[#202B61] transition-transform duration-200 group-hover:scale-125 shrink-0" />
                        </div>

                        <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed max-w-2xl line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="pt-2 border-t border-slate-100/90 flex flex-wrap items-center gap-1.5 text-xs">
                        {techChips.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-sans text-[10px] sm:text-[11px] font-medium text-[#202B61]/80 bg-slate-100/80 px-2 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        ) : (

          /* ═══════════════════════════════════════════════════════════════
             LAYOUT B: COMPACT 3-COLUMN EDITORIAL GRID
          ═══════════════════════════════════════════════════════════════ */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch w-full">
            {filteredProjects.map((project) => {
              const details = PROJECT_DETAILS_MAP[project.id];
              const techChips = details?.techStack?.slice(0, 3) || project.services?.slice(0, 3) || [];

              return (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 transition-all duration-300 p-5 cursor-pointer flex flex-col justify-between space-y-3 text-left shadow-none select-none h-full"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] max-h-[190px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#202B61] shadow-2xs group-hover:bg-[#202B61] group-hover:text-white transition-colors duration-200">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Metadata & Description */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#202B61]/70 mb-1">
                        <span className="font-semibold text-[#202B61] text-[11px] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="font-medium text-[11px]">{project.year || "2025"}</span>
                      </div>

                      <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61] group-hover:text-[#202B61] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                      {techChips.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-sans text-[10px] font-medium text-[#202B61]/80 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        )}

      </div>

      {/* Case Study Detail Modal */}
      {selectedProjectDetails && (
        <WorkDetailModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProjectDetails}
          allProjects={WORK_PROJECTS}
        />
      )}
    </section>
  );
};
