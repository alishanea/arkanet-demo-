"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, LayoutGrid, Layers, CheckCircle2 } from "lucide-react";
import { AboutCTA } from "@/components/about/AboutCTA";
import { WorkDetailModal, WorkProjectDetail } from "@/components/modals/WorkDetailModal";

interface WhatsNewSectionProps {
  onOpenBooking?: () => void;
}

const FEATURED_PROJECTS: WorkProjectDetail[] = [
  {
    id: "marble-tile-stone",
    category: "Web & SaaS Platforms",
    title: "Marble Tile & Stone",
    description: "High-conversion digital showroom and real-time 3D room visualization platform engineered with Next.js and WebGL for interior architects.",
    outerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    detail: {
      client: "Marble Tile & Stone Ltd.",
      year: "2025",
      services: ["E-Commerce", "3D Room Visualizer", "UI/UX Design", "Custom CMS"],
      overview: "Marble Tile & Stone needed a high-performance digital showroom capable of showcasing high-resolution stone textures and real-time 3D room visualization for interior architects.",
      challenge: "Traditional stone sampling requires long shipping turnarounds, causing friction in architectural spec approvals. The client needed an immersive digital alternative.",
      solution: "We designed and built a fast Next.js e-commerce application integrated with a WebGL room visualizer, allowing customers to preview marble patterns on floors and walls instantly.",
      impact: [
        "+142% Increase in architectural sample requests",
        "3.4x Faster contract closing cycle for commercial clients",
        "99.8% System uptime under heavy international traffic",
      ],
      techStack: ["Next.js", "TypeScript", "Three.js / WebGL", "Tailwind CSS", "Shopify Plus API", "AWS CloudFront"],
    },
  },
  {
    id: "careflow-health",
    category: "Mobile Applications",
    title: "CareFlow Health Systems",
    description: "Unified iOS and Android telehealth application paired with a real-time clinician portal, automated prescriptions, and lab report sync.",
    outerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    detail: {
      client: "CareFlow Healthcare Group",
      year: "2025",
      services: ["Mobile App", "Patient Portal", "HIPAA Compliance", "Telehealth UI"],
      overview: "CareFlow is a multi-specialty clinical network aiming to replace fragmented patient phone queues with a unified mobile health app and clinical admin dashboard.",
      challenge: "High patient drop-off during appointment scheduling and delayed access to lab diagnostics led to operational overhead.",
      solution: "Built a native iOS and Android application paired with a real-time doctor portal, supporting video consultations, automated prescription notifications, and instant lab report downloads.",
      impact: [
        "250,000+ Active monthly patient users",
        "68% Reduction in clinic phone queue volume",
        "4.9/5 Rating on Apple App Store & Google Play",
      ],
      techStack: ["React Native", "TypeScript", "Node.js", "GraphQL", "WebRTC Telehealth", "PostgreSQL", "HIPAA Vault"],
    },
  },
  {
    id: "neuraldesk-ai",
    category: "Applied AI & Automation",
    title: "NeuralDesk AI Assistant",
    description: "Enterprise RAG pipeline and fine-tuned LLM assistant connected directly into customer helpdesks, resolving technical inquiries in seconds.",
    outerImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    detail: {
      client: "NeuralDesk Technologies",
      year: "2026",
      services: ["Conversational AI", "LLM Fine-Tuning", "Document Intelligence", "Helpdesk Integration"],
      overview: "An enterprise AI platform designed to ingest millions of internal technical documents and automate complex customer enquiry resolution.",
      challenge: "Customer support agents spent up to 25 minutes per ticket locating obscure technical documentation across legacy databases.",
      solution: "Implemented a RAG (Retrieval-Augmented Generation) pipeline powered by fine-tuned LLMs, integrating seamlessly into Zendesk, WhatsApp Business, and internal Slack channels.",
      impact: [
        "84% First-contact automated resolution rate",
        "Sub-2 second average AI response latency",
        "$1.2M Annual operational savings in support escalation costs",
      ],
      techStack: ["Python", "PyTorch", "LangChain / LlamaIndex", "Vector Database (Pinecone)", "FastAPI", "Next.js Admin UI"],
    },
  },
  {
    id: "aerologistics-cloud",
    category: "Cloud & DevOps",
    title: "AeroLogistics Global Cloud",
    description: "Cloud-native event-driven platform utilizing IoT satellite telemetry and automated customs compliance for international cargo tracking.",
    outerImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    detail: {
      client: "AeroLogistics Global Inc.",
      year: "2025",
      services: ["Cloud Architecture", "IoT Tracking", "Supply Chain Portal", "DevOps"],
      overview: "A global freight tracking portal connecting air, maritime, and land transit data into a live telemetry dashboard for international cargo shippers.",
      challenge: "Data silos across regional customs authorities caused unexpected transit delays and lack of cargo location visibility.",
      solution: "Engineered a cloud-native event-driven platform utilizing IoT satellite telemetry, automated customs documentation checks, and real-time delay predictive analytics.",
      impact: [
        "Over 1.4 Million cargo shipments tracked monthly",
        "45% Reduction in unexpected logistics port delays",
        "Real-time GPS accuracy within 15 meters globally",
      ],
      techStack: ["AWS Lambda & ECS", "Kafka Streaming", "React Dashboard", "Go Microservices", "Docker / Kubernetes"],
    },
  },
];

const CATEGORIES = ["All", "Web & SaaS Platforms", "Mobile Applications", "Applied AI & Automation", "Cloud & DevOps"];

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<WorkProjectDetail | null>(null);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");

  const filteredProjects = selectedCategory === "All"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  const activeProject = filteredProjects[activeProjectIndex] || filteredProjects[0] || FEATURED_PROJECTS[0];

  return (
    <section id="featured-work" className="w-full bg-[#f4f6fb] text-[#0b1330] border-t border-slate-200/80">
      <div className="w-full max-w-[1400px] xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1d4ed8] text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work &amp; Case Studies</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0b1330] tracking-tight">
              Engineered for real-world impact
            </h2>
            <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how we design and engineer scalable web platforms, high-performance mobile applications, and custom AI systems for forward-thinking organizations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-end">
            {/* View Mode Switcher */}
            <div className="hidden sm:inline-flex items-center p-1 bg-white rounded-full border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode("spotlight")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === "spotlight"
                    ? "bg-[#0b1330] text-white shadow-2xs"
                    : "text-slate-600 hover:text-[#0b1330]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Interactive View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#0b1330] text-white shadow-2xs"
                    : "text-slate-600 hover:text-[#0b1330]"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Compact Deck</span>
              </button>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 bg-[#0b1330] hover:bg-[#15234d] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Clean Filter Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveProjectIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0b1330] text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-[#0b1330]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* VIEW 1: Sleek Interactive Split-Screen Spotlight (Default Clean View) */}
        {viewMode === "spotlight" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Clean Interactive Project List */}
            <div className="lg:col-span-7 flex flex-col gap-3.5 text-left">
              {filteredProjects.map((project, index) => {
                const isActive = activeProject.id === project.id;
                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setActiveProjectIndex(index)}
                    onClick={() => {
                      setActiveProjectIndex(index);
                      setSelectedProject(project);
                    }}
                    className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer select-none text-left ${
                      isActive
                        ? "bg-white border-[#1d4ed8]/60 shadow-md ring-1 ring-[#1d4ed8]/20"
                        : "bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1 min-w-0">
                        {/* Top row: Index, Category & Key Metric */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-400">
                            0{index + 1}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            {project.category}
                          </span>
                          {project.detail?.impact[0] && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#1d4ed8] border border-blue-100">
                              {project.detail.impact[0]}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                          isActive ? "text-[#1d4ed8]" : "text-[#0b1330] group-hover:text-[#1d4ed8]"
                        }`}>
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {project.detail?.techStack.slice(0, 3).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Arrow Icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "bg-[#0b1330] text-white"
                          : "bg-slate-50 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-800"
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Live Visual Spotlight */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg p-5 sm:p-6 text-left space-y-4">
                
                {/* Visual Preview */}
                <div
                  onClick={() => setSelectedProject(activeProject)}
                  className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group"
                >
                  <Image
                    src={activeProject.outerImage}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#0b1330]">
                    {activeProject.detail?.client}
                  </div>
                  
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white">
                    {activeProject.detail?.year}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-sky-300">
                      {activeProject.detail?.impact[0]}
                    </p>
                  </div>
                </div>

                {/* Spotlight Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-extrabold text-lg text-[#0b1330]">
                      {activeProject.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {activeProject.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeProject.detail?.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Key Outcomes:
                    </p>
                    {activeProject.detail?.impact.slice(0, 2).map((imp, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(activeProject)}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#0b1330] hover:bg-[#15234d] text-white py-3 rounded-xl text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#38bdf8]" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: Clean Compact Card Deck (Structured & Proportional) */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#1d4ed8]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={project.outerImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-[#0b1330] shadow-2xs">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="inline-block text-[10.5px] font-bold text-[#1d4ed8]">
                      {project.detail?.impact[0]}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-[#0b1330] group-hover:text-[#1d4ed8] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1d4ed8]">
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ROTATING-WORD CLOSING HEADLINE */}
      <AboutCTA onOpenBooking={() => onOpenBooking?.()} />

      {/* Interactive Case Study Modal */}
      <WorkDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        allProjects={FEATURED_PROJECTS}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </section>
  );
};
