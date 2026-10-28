"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  LayoutGrid, 
  Rows3
} from "lucide-react";

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
  "nexus-design-engine": {
    client: "Nexus Enterprise Systems",
    year: "2026",
    services: ["Design System", "Component Engine", "Tokens", "Storybook"],
    overview: "A scalable enterprise design system and headless component architecture powering multi-brand digital products.",
    challenge: "Fragmented UI codebases and styling inconsistencies across 12 distributed squads caused slow release cycles.",
    solution: "Engineered a unified design token engine and 200+ accessible React components with automated regression testing and interactive visual docs.",
    impact: [
      "60% Faster sprint feature delivery velocity",
      "Zero accessibility violations across product lines",
      "Unified design language across web and mobile surfaces",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Turborepo", "Vite"],
  },
};

const WORK_PROJECTS: WorkProject[] = [
  {
    id: "marble-tile-stone",
    category: "Websites",
    title: "Marble Tile & Stone",
    description: "High-performance digital showroom and interactive 3D WebGL room visualizer engineered for architect and consumer spec approvals.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["E-Commerce", "3D WebGL", "Custom CMS"],
  },
  {
    id: "careflow-health",
    category: "Mobile Apps & Portals",
    title: "CareFlow Health Systems",
    description: "Multi-specialty patient portal and telehealth mobile application streamlining clinician workflows, appointments, and lab diagnostics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["iOS & Android", "Telehealth", "HIPAA Vault"],
  },
  {
    id: "neuraldesk-ai",
    category: "AI & Automation",
    title: "NeuralDesk AI Assistant",
    description: "Enterprise RAG document intelligence pipeline and fine-tuned LLM assistant connected directly into customer helpdesk operations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Conversational AI", "RAG Pipeline", "FastAPI"],
  },
  {
    id: "aerologistics-cloud",
    category: "Cloud & Platforms",
    title: "AeroLogistics Global Cloud",
    description: "Cloud-native event-driven telemetry platform utilizing satellite IoT tracking and automated customs compliance across international ports.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Cloud Telemetry", "Kafka", "AWS Microservices"],
  },
  {
    id: "solara-energy",
    category: "Websites",
    title: "Solara Smart Grid",
    description: "Clean energy analytics platform and commercial solar calculator leveraging high-res satellite exposure data to drive adoption.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Analytics", "Google Solar API", "Next.js"],
  },
  {
    id: "pulsefit-coaching",
    category: "Mobile Apps & Portals",
    title: "PulseFit AI Coach",
    description: "Computer-vision biomechanical posture analyzer and personalized training mobile app with Apple Watch & HealthKit sync.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Mobile App", "TensorFlow Lite", "Biometrics"],
  },
  {
    id: "vesper-timepieces",
    category: "Websites",
    title: "Vesper Luxury Watches",
    description: "Bespoke 3D timepiece configurator allowing international luxury collectors to customize bezels, movements, and leather straps in real time.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["3D Configurator", "WebGL", "Stripe Connect"],
  },
  {
    id: "fintech-sentinel",
    category: "AI & Automation",
    title: "FinTech Sentinel",
    description: "High-frequency banking fraud anomaly detection engine assessing risk patterns in under 80ms with SOC2 automated compliance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Fraud Analytics", "Python", "PostgreSQL"],
  },
  {
    id: "kratos-cybervision",
    category: "Cloud & Platforms",
    title: "Kratos CyberVision",
    description: "Multi-cloud telemetry dashboard prioritizing critical infrastructure vulnerabilities and automating remediation scripts across AWS & Azure.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["DevOps", "Kubernetes", "AWS GuardDuty"],
  },
  {
    id: "nexus-design-engine",
    category: "Websites",
    title: "Nexus Design Engine",
    description: "Unified token architecture and component ecosystem enabling rapid, accessible UI engineering across multi-product squads.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Design System", "TypeScript", "Storybook"],
  },
];

const CATEGORIES = ["All", "Websites", "Mobile Apps & Portals", "AI & Automation", "Cloud & Platforms"] as const;

export default function WorkPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");

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
    <main className="min-h-screen bg-[#f4f6fb] text-[#0b1330] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. ARCHITECTURAL HERO HEADER ── */}
      <section className="w-full bg-[#f4f6fb] pt-28 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto text-left space-y-6">
          
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.08]">
              Selected Work &amp; <br className="hidden sm:inline" />
              <span className="text-[#1d4ed8]">Engineering Case Studies</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              A curated index of production web platforms, mobile ecosystems, cloud architectures, and applied AI systems engineered for real-world traffic and business outcomes.
            </p>
          </div>

          {/* ── 2. FILTER & LAYOUT VIEW CONTROLS ── */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-slate-200/60">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count = cat === "All" 
                  ? WORK_PROJECTS.length 
                  : WORK_PROJECTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#0b1330] text-white shadow-2xs"
                        : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle: Side-by-Side Detailed vs Compact Grid */}
            <div className="hidden sm:inline-flex items-center p-1 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode("detailed")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "detailed"
                    ? "bg-[#0b1330] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Detailed Side-by-Side View"
              >
                <Rows3 className="w-3.5 h-3.5" />
                <span>Detailed Rows</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("compact")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "compact"
                    ? "bg-[#0b1330] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Compact Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Compact Grid</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. WORK SHOWCASE STAGE ── */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No projects found for category &quot;{activeCategory}&quot;.
            </div>
          ) : viewMode === "detailed" ? (
            
            /* ═══════════════════════════════════════════════════════════════
               LAYOUT A: DETAILED SIDE-BY-SIDE ROWS (Clean, not big bulky boxes)
            ═══════════════════════════════════════════════════════════════ */
            <div className="space-y-6 sm:space-y-8">
              {filteredProjects.map((project, idx) => {
                const indexFormatted = String(idx + 1).padStart(2, "0");
                const details = PROJECT_DETAILS_MAP[project.id];
                const techChips = details?.techStack?.slice(0, 4) || project.services || [];

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-[#1d4ed8]/50 shadow-2xs hover:shadow-md transition-all duration-300 p-5 sm:p-7 cursor-pointer overflow-hidden text-left"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                      
                      {/* Left Side: Crisp Photography Thumbnail (Span 5 - Clean, No Text Overlay) */}
                      <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>

                      {/* Right Side: Editorial Architecture & Metadata (Span 7) */}
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                        
                        {/* Meta Header Row */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2.5">
                            <span className="font-heading font-black text-slate-400 text-sm">
                              #{indexFormatted}
                            </span>
                            <span className="h-3 w-[1px] bg-slate-200" />
                            <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md text-[11px]">
                              {project.category}
                            </span>
                          </div>
                          <span className="text-slate-400 font-medium text-xs">
                            {project.year || "2025"}
                          </span>
                        </div>

                        {/* Title and Direct Click Prompt */}
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61] group-hover:text-[#1d4ed8] transition-colors leading-tight">
                              {project.title}
                            </h2>
                            <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#1d4ed8] group-hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 shrink-0">
                              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </div>

                          <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack Chips & Action Link */}
                        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {techChips.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-sans text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2.5 py-0.5 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <span className="text-xs font-semibold text-[#1d4ed8] group-hover:underline inline-flex items-center gap-1">
                            <span>View Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>

                      </div>

                    </div>
                  </motion.article>
                );
              })}
            </div>

          ) : (

            /* ═══════════════════════════════════════════════════════════════
               LAYOUT B: COMPACT 3-COLUMN PROFESSIONAL GRID (Clean Proportions)
            ═══════════════════════════════════════════════════════════════ */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredProjects.map((project, idx) => {
                const details = PROJECT_DETAILS_MAP[project.id];
                const techChips = details?.techStack?.slice(0, 3) || project.services?.slice(0, 3) || [];

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                    onClick={() => setSelectedProject(project)}
                    className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#1d4ed8]/50 shadow-2xs hover:shadow-md transition-all duration-300 p-4 sm:p-5 cursor-pointer flex flex-col justify-between space-y-4 text-left"
                  >
                    {/* Compact Image Frame (Clean, No Text Overlay) */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Metadata & Description */}
                    <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                          <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                            {project.category}
                          </span>
                          <span className="font-medium">{project.year || "2025"}</span>
                        </div>

                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-heading font-bold text-lg text-[#202B61] group-hover:text-[#1d4ed8] transition-colors leading-snug">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1d4ed8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-0.5" />
                        </div>

                        <p className="font-sans text-xs text-slate-600 line-clamp-2 leading-relaxed mt-1.5">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {techChips.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-sans text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

          )}
        </div>
      </section>

      {/* ── 4. PROJECT DETAIL MODAL ── */}
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

      {/* ── 5. CLOSING CTA SECTION ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── 6. FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
