"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
 techStack: ["Next.js", "TypeScript", "Three.js / WebGL", "Tailwind CSS", "Shopify Plus API", "AWS CloudFront"],
 },
 },
 {
 id: "careflow-health",
 category: "Mobile Applications",
 title: "CareFlow Health Systems",
 description: "Unified iOS and Android telehealth application paired with a real-time clinician portal, automated prescriptions, and lab report sync.",
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
 techStack: ["React Native", "TypeScript", "Node.js", "GraphQL", "WebRTC Telehealth", "PostgreSQL", "HIPAA Vault"],
 },
 },
 {
 id: "neuraldesk-ai",
 category: "Applied AI & Automation",
 title: "NeuralDesk AI Assistant",
 description: "Enterprise RAG pipeline and fine-tuned LLM assistant connected directly into customer helpdesks, resolving technical inquiries in seconds.",
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
 techStack: ["Python", "PyTorch", "LangChain / LlamaIndex", "Vector Database (Pinecone)", "FastAPI", "Next.js Admin UI"],
 },
 },
 {
 id: "aerologistics-cloud",
 category: "Cloud & DevOps",
 title: "AeroLogistics Global Cloud",
 description: "Cloud-native event-driven platform utilizing IoT satellite telemetry and automated customs compliance for international cargo tracking.",
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
 techStack: ["AWS Lambda & ECS", "Kafka Streaming", "React Dashboard", "Go Microservices", "Docker / Kubernetes"],
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
 <section id="featured-work" className="w-full bg-[#f4f6fb] text-[#0b1330] border-t border-slate-200/80">
 <div className="w-full max-w-[1400px] xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
 
 {/* Section Header */}
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
 <div className="space-y-3 max-w-2xl text-left">
 <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0b1330] tracking-tight">
 Engineered for real-world impact
 </h2>
 <p className="font-sans font-medium text-slate-600 text-sm sm:text-base leading-relaxed">
 Explore how we design and engineer scalable web platforms, high-performance mobile applications, and custom AI systems for forward-thinking organizations.
 </p>
 </div>
 </div>

 {/* Clean Category Filter Chips Bar (Cap radius to <= 5px) */}
 <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
 {CATEGORIES.map((cat) => {
 const isSelected = selectedCategory === cat;
 return (
 <button
 key={cat}
 type="button"
 onClick={() => setSelectedCategory(cat)}
 className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold font-sans transition-all cursor-pointer ${
 isSelected
 ? "bg-[#0b1330] text-white "
 : "bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-[#0b1330]"
 }`}
 >
 {cat}
 </button>
 );
 })}
 </div>

 {/* 4-Column Grid with Precision <=5px Edge Architecture */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white hover:bg-slate-50/60 rounded-[5px] border border-slate-200/80 hover:border-slate-300/80 overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer text-left outline-none focus:outline-none focus:ring-0 active:outline-none select-none"
            >
              <div className="flex flex-col flex-1">
                {/* Pure Photography Frame: Clean, No Writing, No Overlays on Image */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden shrink-0 rounded-t-[4px]">
                  <Image
                    src={project.outerImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Card Body: Title with Simple Arrow, Description, Tech Chips */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    {/* Title with Simple Unfocused Arrow (No box, no 'view full case study' text) */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0b1330] group-hover:text-black transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5" />
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Tech Chips */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.detail?.techStack.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-[3px] text-[10.5px] font-semibold font-sans bg-slate-50 text-slate-600 border border-slate-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
