"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
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
    titleLine1: "Marble Tile & Stone",
    titleLine2: "Showroom Platform",
    description: "High-conversion digital showroom and real-time 3D room visualizer engineered with WebGL for modern interior architects.",
    outerImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
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
      techStack: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Shopify API", "AWS"],
    },
  },
  {
    id: "careflow-health",
    category: "Mobile Applications",
    title: "CareFlow Health Systems",
    titleLine1: "CareFlow Health",
    titleLine2: "Telehealth Systems",
    description: "Unified mobile telehealth application paired with clinician portal, automated prescription alerts, and instant lab report downloads.",
    outerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
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
      techStack: ["React Native", "TypeScript", "Node.js", "GraphQL", "WebRTC", "PostgreSQL"],
    },
  },
  {
    id: "neuraldesk-ai",
    category: "Applied AI & Automation",
    title: "NeuralDesk AI Assistant",
    titleLine1: "NeuralDesk AI",
    titleLine2: "Enterprise Assistant",
    description: "Enterprise RAG pipeline and fine-tuned LLM assistant connected to customer helpdesks, resolving complex technical inquiries instantly.",
    outerImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
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
      techStack: ["Python", "PyTorch", "LangChain", "Vector DB", "FastAPI", "Next.js"],
    },
  },
  {
    id: "aerologistics-cloud",
    category: "Cloud & DevOps",
    title: "AeroLogistics Global Cloud",
    titleLine1: "AeroLogistics Global",
    titleLine2: "Cloud Fleet Platform",
    description: "Cloud-native event-driven platform utilizing IoT satellite telemetry and automated customs compliance for global freight fleets.",
    outerImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
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
      techStack: ["AWS ECS", "Kafka", "React", "Go Services", "Docker", "Kubernetes"],
    },
  },
];

const CATEGORIES = ["All", "Web & SaaS Platforms", "Mobile Applications", "Applied AI & Automation", "Cloud & DevOps"];

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<WorkProjectDetail | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full bg-[#f4f6fb] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 select-none border-t border-slate-200/80">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12">
        
        {/* ── 1. SECTION HEADER & CATEGORY FILTER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
              Selected Work &amp; Case Studies
            </h2>
            <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how we design, build, and deploy production digital systems that solve real operational friction.
            </p>
          </div>

          {/* Minimal Category Selector */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#202B61] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-[#202B61] border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── 2. 4-COLUMN BALANCED PROJECT GRID (PERFECT SYMMETRY, NO IMAGE THEME) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch w-full">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full bg-white hover:bg-slate-50/80 border border-slate-200/90 transition-all duration-300 cursor-pointer text-left outline-none"
            >
              <div className="space-y-5 flex-1 flex flex-col">
                {/* Category Pill Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#202B61]/80 bg-[#202B61]/5 px-2.5 py-1 rounded-md w-fit font-sans">
                    {project.category}
                  </span>
                </div>

                {/* Title & Expanding Underline Bar (Guaranteed identical 2-line height) */}
                <div className="space-y-2.5">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug min-h-[3.25rem] sm:min-h-[3.75rem] flex flex-col justify-start">
                    <span className="block">{project.titleLine1 || project.title}</span>
                    <span className="block">{project.titleLine2 || ""}</span>
                  </h3>
                  <div className="h-0.5 w-6 group-hover:w-14 bg-[#202B61] rounded-full transition-all duration-300 opacity-60 group-hover:opacity-100" />
                </div>

                {/* Description (Guaranteed identical height & word count across all 4 cards) */}
                <p className="font-sans font-medium text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[5.25rem] sm:min-h-[5.5rem] flex-1 flex items-start">
                  {project.description}
                </p>
              </div>

              {/* Bottom Action Prompt with 3 Tech Chips & Right-Facing Arrow */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.detail?.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium font-sans bg-slate-100 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-slate-400 group-hover:text-[#202B61] transition-colors duration-200 shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

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
