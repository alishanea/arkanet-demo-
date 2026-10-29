"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    description: "Enterprise RAG pipeline and fine-tuned LLM assistant connected to customer helpdesks, resolving complex technical inquiries instantly.",
    outerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
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

export const WhatsNewSection: React.FC<WhatsNewSectionProps> = ({ onOpenBooking }) => {
  const [selectedProject, setSelectedProject] = useState<WorkProjectDetail | null>(null);

  return (
    <section className="relative w-full bg-[#f4f6fb] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 select-none border-t border-slate-200/80 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* ── 1. SECTION HEADER ── */}
        <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8">
          <div className="space-y-3 max-w-3xl text-left">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] leading-tight tracking-tight">
              Selected Work &amp; Case Studies
            </h2>
            <p className="font-sans font-medium text-[#202B61]/75 text-sm sm:text-base leading-relaxed">
              Explore how we design, build, and deploy production digital systems that solve real operational friction.
            </p>
          </div>
        </div>

        {/* ── 2. 4-COLUMN BALANCED PROJECT GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white hover:bg-slate-50/80 rounded-xl border border-slate-200/90 overflow-hidden transition-all duration-300 flex flex-col justify-between h-full cursor-pointer text-left outline-none"
            >
              <div className="flex flex-col flex-1">
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden shrink-0 border-b border-slate-100">
                  <Image
                    src={project.outerImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2.5">
                    {/* Title Row */}
                    <div className="flex items-start justify-between gap-3 min-h-[3rem] sm:min-h-[3.25rem]">
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61] leading-snug tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-[#202B61]/40 group-hover:text-[#202B61] transition-transform duration-200 group-hover:translate-x-1 shrink-0 mt-1" />
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#202B61]/70 leading-relaxed font-normal min-h-[4.5rem] sm:min-h-[4.75rem] flex items-start">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5 min-h-[32px]">
                    {project.detail?.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium font-sans bg-slate-100 text-[#202B61]/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
