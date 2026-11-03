"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkDetailModal, WorkProjectDetail } from "@/components/modals/WorkDetailModal";

interface WhatsNewSectionProps {
  onOpenBooking?: () => void;
}

const FEATURED_PROJECTS: WorkProjectDetail[] = [
  {
    id: "marble-tile-stone",
    category: "Web & SaaS Platforms",
    title: "Marble Tile & Stone Digital Showroom",
    titleLine1: "Marble Tile & Stone",
    titleLine2: "Digital Showroom",
    description: "High performance digital showroom and interactive 3D visualizer engineered with WebGL for rapid architectural surface approvals.",
    outerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
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
    category: "Mobile Apps & Platforms",
    title: "CareFlow Enterprise Health Systems",
    titleLine1: "CareFlow Enterprise",
    titleLine2: "Health Systems",
    description: "Unified mobile telehealth platform paired with clinician portal, automated prescription alerts, and secure digital patient records.",
    outerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
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
    title: "NeuralDesk Enterprise AI Assistant",
    titleLine1: "NeuralDesk Enterprise",
    titleLine2: "AI Assistant",
    description: "Enterprise RAG pipeline and intelligent LLM assistant connected directly to helpdesks to automate complex technical query resolutions.",
    outerImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
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
    category: "Cloud & DevOps Systems",
    title: "AeroLogistics Global Cloud Platform",
    titleLine1: "AeroLogistics Global",
    titleLine2: "Cloud Platform",
    description: "Cloud native telemetry platform utilizing automated satellite monitoring and continuous compliance tracking for global shipping fleets.",
    outerImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    innerImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1000&auto=format&fit=crop",
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
    <section id="work" className="relative w-full bg-[#f4f6fb] py-18 sm:py-22 lg:py-26 px-4 sm:px-8 lg:px-12 select-none font-sans scroll-mt-24">
      <div className="max-w-[1536px] mx-auto space-y-10 sm:space-y-12">
        
        {/* ── 1. CLEAN EDITORIAL SECTION HEADER (NO TOP/BOTTOM DIVIDER LINES) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 sm:pb-3">
          <div className="space-y-2.5 max-w-2xl text-left">
            <h2 className="section-h2">
              Selected Work &amp; Case Studies
            </h2>
            <p className="section-desc max-w-2xl">
              Explore how we design, build, and deploy production digital systems that solve real operational friction.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#202B61] hover:text-[#202B61]/75 transition-colors shrink-0 group self-start sm:self-end pb-1"
          >
            <span>See all work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── 2. EXPANDED 4-COLUMN PROJECT GRID WITH ENLARGED BOXES AND CONTENT ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mx-4 sm:-mx-5 lg:-mx-6 gap-y-12 sm:gap-y-12 lg:gap-y-0 items-stretch">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between h-full w-full px-4 sm:px-5 lg:px-6 border-b-0 pb-0 ${
                /* Desktop (4-cols): pure centered vertical divider lines between columns */
                idx < 3 ? "lg:border-r lg:border-slate-200/80" : "lg:border-r-0"
              } ${
                /* Tablet (2-cols): vertical divider line between left and right column */
                idx % 2 === 0
                  ? "sm:border-r sm:border-slate-200/80"
                  : "sm:border-r-0"
              }`}
            >
              <div
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View case study: ${project.title}`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group flex flex-col justify-between h-full w-full cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-[#202B61] focus-visible:ring-offset-4 rounded-xl transition-transform duration-200"
              >
                {/* Substantially Larger Image Box with 4:3 Presence */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] shrink-0">
                  <Image
                    src={project.outerImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Enhanced Typography Stack: Larger Headings, Increased Body, Generous Spacing */}
                <div className="pt-5 sm:pt-6 flex flex-col flex-1">
                  {/* Category Label (Enlarged and Clear) */}
                  <div className="h-6 flex items-center mb-2">
                    <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.06em] text-[#202B61] font-sans">
                      {project.category}
                    </p>
                  </div>

                  {/* Project Headline (Larger font, calibrated 2-line baseline) */}
                  <div className="h-[3.25rem] sm:h-[3.6rem] lg:h-[3.9rem] flex items-start mb-2.5">
                    <h3 className="font-heading font-bold text-lg sm:text-[19px] lg:text-[21px] xl:text-[22px] text-[#202B61] leading-[1.24] tracking-tight">
                      <span className="block">{project.titleLine1 || project.title}</span>
                      <span className="block">{project.titleLine2}</span>
                    </h3>
                  </div>

                  {/* Body Description: Larger body font (15.5px), 16 words, balanced 3-line flow */}
                  <div className="h-[4.8rem] sm:h-[5.2rem] lg:h-[5.6rem] flex items-start">
                    <p className="font-sans text-[14px] sm:text-[14.5px] lg:text-[15.5px] text-[#202B61] leading-[1.62] font-normal text-pretty">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

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
