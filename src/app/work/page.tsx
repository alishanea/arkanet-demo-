"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { WorkDetailModal } from "@/components/modals/WorkDetailModal";

interface WorkProject {
  id: string;
  category: "Websites" | "Mobile Apps & Portals" | "AI & Automation" | "Cloud & Platforms";
  title: string;
  description: string;
  image: string;
  year?: string;
  services?: string[];
}

const PROJECT_DETAILS_MAP: Record<string, {
  client: string;
  year: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
}> = {
  "marble-tile-stone": {
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
    techStack: ["Next.js", "TypeScript", "Three.js / WebGL", "Tailwind CSS", "Shopify Storefront API", "Vercel"],
  },
  "careflow-health": {
    client: "CareFlow Health Systems",
    year: "2025",
    services: ["Mobile App Development", "Telehealth", "HIPAA Compliance", "Doctor Portal"],
    overview: "CareFlow provides continuous care management and digital patient encounters for multi-specialty healthcare networks.",
    challenge: "High patient drop-off during appointment scheduling and delayed access to lab diagnostics led to operational overhead.",
    solution: "Built a native iOS and Android application paired with a real-time doctor portal, supporting video consultations, automated prescription notifications, and instant lab report downloads.",
    impact: [
      "250,000+ Active monthly patient users",
      "68% Reduction in clinic phone queue volume",
      "4.9/5 Rating on Apple App Store & Google Play",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "GraphQL", "WebRTC Telehealth", "PostgreSQL", "HIPAA Vault"],
  },
  "neuraldesk-ai": {
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
  "aerologistics-cloud": {
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
  "solara-energy": {
    client: "Solara Clean Energy Co.",
    year: "2025",
    services: ["Web Application", "Smart Grid Analytics", "Conversion Rate Optimization"],
    overview: "A commercial solar estimation platform enabling facility managers to analyze roof solar density, ROI timelines, and clean energy storage capacity.",
    challenge: "Complex solar yield mathematics intimidated non-technical building owners, slowing down quote requests.",
    solution: "Created an intuitive interactive calculator leveraging high-res satellite imagery and automated sun exposure mapping to present clear financial proposals.",
    impact: [
      "3.1x Increase in qualified commercial solar leads",
      "Instant 60-second proposal generation for sales reps",
      "Featured in Clean Energy Design Quarterly",
    ],
    techStack: ["React", "TypeScript", "Google Solar API", "Tailwind CSS", "Vercel Enterprise"],
  },
  "pulsefit-coaching": {
    client: "PulseFit Fitness Labs",
    year: "2026",
    services: ["Mobile App Development", "Biometric Sync", "AI Motion Analysis"],
    overview: "A mobile coaching platform analyzing workout posture, heart-rate zones, and recovery metrics via wearable device sync.",
    challenge: "Users struggled to maintain consistent fitness routines without real-time form guidance during home workouts.",
    solution: "Integrated computer-vision posture checking with Apple Watch / HealthConnect data sync, delivering audio guidance during workouts.",
    impact: [
      "89% User retention after 90 days",
      "Over 500,000 completed workout sessions",
      "Best App Award Nominee in Health & Wellness",
    ],
    techStack: ["Swift / Kotlin", "TensorFlow Lite", "Apple HealthKit", "Node.js API", "Firebase"],
  },
  "vesper-timepieces": {
    client: "Vesper Horology Paris",
    year: "2025",
    services: ["3D WebGL Configurator", "Luxury E-Commerce", "Brand Strategy"],
    overview: "An ultra-luxury bespoke watch configurator allowing clients to customize timepiece bezels, movements, and leather straps in 3D.",
    challenge: "Bespoke watch customization relied on physical boutique visits, limiting international luxury buyer reach.",
    solution: "Built a photorealistic 3D WebGL watch visualizer with instant price calculations and private VIP concierge booking.",
    impact: [
      "€3.8M Direct digital sales in first 6 months",
      "Average session duration increased to 7m 40s",
      "Zero loading latency across mobile and desktop devices",
    ],
    techStack: ["Three.js", "WebGL", "Next.js App Router", "Stripe Connect", "Tailwind CSS"],
  },
  "fintech-sentinel": {
    client: "Sentinel Financial Group",
    year: "2026",
    services: ["Fraud Analytics", "AI Workflow Automation", "Compliance Dashboard"],
    overview: "An automated risk assessment and fraud detection platform monitoring high-frequency digital banking transactions.",
    challenge: "Manual compliance reviews caused processing delays for legitimate cross-border wire transfers.",
    solution: "Engineered an anomaly detection engine assessing risk factors in under 80 milliseconds, routing only high-risk flags to human auditors.",
    impact: [
      "99.4% Automated fraud detection precision",
      "92% Faster wire transfer approval time",
      "Compliant with SOC2 Type II & GDPR standards",
    ],
    techStack: ["Python", "FastAPI", "React Admin", "PostgreSQL", "Redis", "Docker"],
  },
  "kratos-cybervision": {
    client: "Kratos Security Corp",
    year: "2026",
    services: ["Threat Intelligence", "Cloud Platform", "Telemetry Dashboard"],
    overview: "A cloud-native threat intelligence dashboard monitoring multi-cloud infrastructure for real-time vulnerability mitigation.",
    challenge: "DevOps teams were overwhelmed by thousands of false-positive security alerts across AWS and Azure clusters.",
    solution: "Deployed an intelligent telemetry aggregator that prioritizes critical vulnerabilities and automates patch deployment scripts.",
    impact: [
      "94% Decrease in false-positive security alerts",
      "Average threat remediation time reduced from 4 hours to 3 minutes",
      "Monitors over 50,000 active cloud containers",
    ],
    techStack: ["Go", "React", "AWS GuardDuty", "Kubernetes", "Tailwind CSS", "Grafana API"],
  },
  "dummy-project": {
    client: "Nexus Labs",
    year: "2026",
    services: ["Design System", "Component Library", "Documentation", "Developer Tools"],
    overview: "A comprehensive design system and component library built to accelerate UI development across multiple product teams.",
    challenge: "Inconsistent UI patterns and duplicated code across product lines slowed down feature delivery and increased maintenance burden.",
    solution: "Created a unified design system with 200+ accessible React components, design tokens, and interactive documentation powered by Storybook.",
    impact: [
      "60% Faster feature development velocity",
      "Zero critical accessibility violations across products",
      "Adopted by 12 product teams within 3 months",
    ],
    techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Chromatic", "Vite"],
  },
};

const WORK_PROJECTS: WorkProject[] = [
  {
    id: "marble-tile-stone",
    category: "Websites",
    title: "Marble Tile & Stone",
    description: "Luxury e-commerce and interactive showroom platform designed for high-conversion architect and consumer sales.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["E-Commerce", "3D Room Visualizer"],
  },
  {
    id: "careflow-health",
    category: "Mobile Apps & Portals",
    title: "CareFlow Health Systems",
    description: "Patient portal and telehealth app streamlining clinical workflows, appointment booking, and instant record access.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    services: ["Mobile App", "Telehealth"],
  },
  {
    id: "neuraldesk-ai",
    category: "AI & Automation",
    title: "NeuralDesk AI Assistant",
    description: "Enterprise document processing and conversational AI platform connected directly into customer support and operations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Conversational AI", "RAG Pipeline"],
  },
  {
    id: "aerologistics-cloud",
    category: "Cloud & Platforms",
    title: "AeroLogistics Global Cloud",
    description: "Real-time freight tracking and automated supply chain portal supporting multi-country logistics monitoring.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Cloud Architecture", "IoT Tracking"],
  },
  {
    id: "solara-energy",
    category: "Websites",
    title: "Solara Smart Grid",
    description: "Clean energy analytics dashboard and consumer web platform driving commercial solar adoption.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    services: ["Web Application", "Solar Analytics"],
  },
  {
    id: "pulsefit-coaching",
    category: "Mobile Apps & Portals",
    title: "PulseFit AI Coach",
    description: "Next gen wellness and fitness mobile application with personalized training feedback and biometric sync.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Mobile App", "Biometrics"],
  },
  {
    id: "vesper-timepieces",
    category: "Websites",
    title: "Vesper Luxury Watches",
    description: "Interactive 3D e-commerce showcase featuring real-time product configurators and concierge booking.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["3D WebGL", "Luxury E-Commerce"],
  },
  {
    id: "fintech-sentinel",
    category: "AI & Automation",
    title: "FinTech Sentinel",
    description: "Automated fraud detection engine and compliance audit dashboard for scaling financial institutions.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Fraud Analytics", "AI Automation"],
  },
  {
    id: "kratos-cybervision",
    category: "Cloud & Platforms",
    title: "Kratos CyberVision",
    description: "Next generation cloud security and threat intelligence platform with automated anomaly resolution and live telemetry.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Cloud Platform", "Threat Intel"],
  },
  {
    id: "dummy-project",
    category: "Websites",
    title: "Project Nexus",
    description: "A modular design system and component library enabling rapid UI development across multiple product lines.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Design System", "Component Library"],
  },
];

const CATEGORIES = ["All", "Websites", "Mobile Apps & Portals", "AI & Automation", "Cloud & Platforms"] as const;

export default function WorkPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const openContact = () => setContactOpen(true);

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
        detail: PROJECT_DETAILS_MAP[selectedProject.id],
      }
    : null;

  return (
    <main className="min-h-screen bg-white text-[#0b1330] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* HEADER SECTION WITH GENEROUS BREATHING ROOM */}
      <section className="w-full bg-[#f4f6fb] pt-32 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto text-left">
          <div className="inline-block px-3 py-1 rounded-[4px] bg-[#0b1330] text-white text-[11px] font-bold uppercase tracking-wider mb-5">
            Portfolio
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0b1330] tracking-tight leading-[1.1] max-w-4xl">
            Real work, engineered to perform
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
            Explore our recent web applications, mobile platforms, and AI systems built for ambitious brands worldwide.
          </p>

          {/* Clean minimal category filter bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0b1330] text-white border border-[#0b1330]"
                      : "bg-white text-slate-600 hover:text-[#0b1330] border border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPACT & ELEGANT WORK GRID */}
      <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center text-slate-500 text-base font-normal">
              No projects found for &quot;{activeCategory}&quot;.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group rounded-[5px] border border-slate-200/90 bg-white overflow-hidden cursor-pointer hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Clean Photography Frame */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Editorial Content Below Image */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between text-left space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
                        <span>{project.category}</span>
                        <span>{project.year || "2025"}</span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#0b1330] group-hover:text-slate-700 transition-colors leading-snug">
                          {project.title}
                        </h2>
                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#0b1330] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 mt-1" />
                      </div>

                      <p className="font-sans text-sm text-slate-600 leading-relaxed mt-2.5">
                        {project.description}
                      </p>
                    </div>

                    {/* Clean Tech/Service Tags */}
                    {project.services && project.services.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                        {project.services.map((srv, sIdx) => (
                          <span
                            key={sIdx}
                            className="font-sans text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-[3px] border border-slate-200/60"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <WorkDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProjectDetails}
        allProjects={WORK_PROJECTS.map((p) => ({
          ...p,
          aspectX: 16,
          aspectY: 10,
          outerImage: p.image,
          innerImage: p.image,
          detail: PROJECT_DETAILS_MAP[p.id],
        }))}
        onSelectProject={(proj) => {
          const match = WORK_PROJECTS.find((p) => p.id === proj.id);
          if (match) setSelectedProject(match);
        }}
      />

      {/* CLOSING CTA SECTION */}
      <AboutCTA onOpenBooking={openContact} />

      {/* FOOTER */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
