"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  WORK_PROJECTS,
  WORK_CATEGORIES,
  PROJECT_DETAILS_MAP,
  type WorkProject,
} from "@/lib/workData";
import { WorkDetailModal } from "@/components/modals/WorkDetailModal";

export const WorkFilterGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof WORK_CATEGORIES[number]>("All");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const filteredProjects = WORK_PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const selectedProjectDetails = selectedProject
    ? {
        ...selectedProject,
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
    <section id="projects" className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none font-sans scroll-mt-20">
      <div className="max-w-[1400px] w-full mx-auto space-y-10 sm:space-y-12">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#202B61] text-white shadow-none"
                  : "bg-slate-50 text-[#202B61]/80 hover:bg-slate-100 hover:text-[#202B61]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Symmetrical Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9 items-stretch w-full">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 p-5 sm:p-6 transition-all duration-200 shadow-none hover:shadow-xs cursor-pointer h-full text-left"
            >
              <div>
                {/* Media Image Showcase */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#202B61] shadow-2xs group-hover:bg-[#202B61] group-hover:text-white transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                  </div>
                </div>

                {/* Category & Year */}
                <div className="flex items-center justify-between text-xs font-semibold text-[#202B61]/60 mb-2">
                  <span>{project.category}</span>
                  {project.year && <span>{project.year}</span>}
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-bold text-lg sm:text-[19px] text-[#202B61] tracking-tight leading-snug mb-2.5 group-hover:text-[#202B61] transition-colors">
                  {project.title}
                </h3>

                {/* Project Narrative */}
                <p className="font-sans text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal text-pretty">
                  {project.description}
                </p>
              </div>

              {/* Service Badges */}
              {project.services && (
                <div className="pt-4 mt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {project.services.slice(0, 3).map((service, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-50 text-[11px] font-medium text-slate-600 border border-slate-100"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProjectDetails && (
        <WorkDetailModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProjectDetails}
        />
      )}
    </section>
  );
};

