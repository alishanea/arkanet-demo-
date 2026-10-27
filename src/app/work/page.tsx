"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  LayoutGrid,
  List,
  Search,
  TrendingUp,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { WorkDetailModal } from "@/components/modals/WorkDetailModal";

interface WorkProject {
  id: string;
  category: "Websites" | "Mobile Apps & Portals" | "AI & Automation" | "Cloud & Platforms";
  title: string;
  client: string;
  description: string;
  image: string;
  year: string;
  services: string[];
  highlightMetric: string;
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
    client: "Marble Tile & Stone Ltd.",
    description: "Luxury e-commerce and interactive showroom platform designed for high-conversion architect and consumer sales.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["E-Commerce", "3D Room Visualizer"],
    highlightMetric: "+142% Sample Requests",
  },
  {
    id: "careflow-health",
    category: "Mobile Apps & Portals",
    title: "CareFlow Health Systems",
    client: "CareFlow Health Systems",
    description: "Patient portal and telehealth app streamlining clinical workflows, appointment booking, and instant record access.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    services: ["Mobile App", "Telehealth"],
    highlightMetric: "250k+ Active Patients",
  },
  {
    id: "neuraldesk-ai",
    category: "AI & Automation",
    title: "NeuralDesk AI Assistant",
    client: "NeuralDesk Technologies",
    description: "Enterprise document processing and conversational AI platform connected directly into customer support and operations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Conversational AI", "RAG Pipeline"],
    highlightMetric: "84% Auto Resolution",
  },
  {
    id: "aerologistics-cloud",
    category: "Cloud & Platforms",
    title: "AeroLogistics Global Cloud",
    client: "AeroLogistics Global Inc.",
    description: "Real-time freight tracking and automated supply chain portal supporting multi-country logistics monitoring.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Cloud Architecture", "IoT Tracking"],
    highlightMetric: "1.4M+ Shipments/Mo",
  },
  {
    id: "solara-energy",
    category: "Websites",
    title: "Solara Smart Grid",
    client: "Solara Clean Energy Co.",
    description: "Clean energy analytics dashboard and consumer web platform driving commercial solar adoption.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    services: ["Web Application", "Solar Analytics"],
    highlightMetric: "3.1x Qualified Leads",
  },
  {
    id: "pulsefit-coaching",
    category: "Mobile Apps & Portals",
    title: "PulseFit AI Coach",
    client: "PulseFit Fitness Labs",
    description: "Next gen wellness and fitness mobile application with personalized training feedback and biometric sync.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Mobile App", "Biometrics"],
    highlightMetric: "89% 90-Day Retention",
  },
  {
    id: "vesper-timepieces",
    category: "Websites",
    title: "Vesper Luxury Watches",
    client: "Vesper Horology Paris",
    description: "Interactive 3D e-commerce showcase featuring real-time product configurators and concierge booking.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["3D WebGL", "Luxury E-Commerce"],
    highlightMetric: "€3.8M Digital Sales",
  },
  {
    id: "fintech-sentinel",
    category: "AI & Automation",
    title: "FinTech Sentinel",
    client: "Sentinel Financial Group",
    description: "Automated fraud detection engine and compliance audit dashboard for scaling financial institutions.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Fraud Analytics", "AI Automation"],
    highlightMetric: "99.4% Detection Rate",
  },
  {
    id: "kratos-cybervision",
    category: "Cloud & Platforms",
    title: "Kratos CyberVision",
    client: "Kratos Security Corp",
    description: "Next generation cloud security and threat intelligence platform with automated anomaly resolution and live telemetry.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    services: ["Cloud Platform", "Threat Intel"],
    highlightMetric: "94% Alert Drop",
  },
  {
    id: "dummy-project",
    category: "Websites",
    title: "Project Nexus",
    client: "Nexus Labs",
    description: "A modular design system and component library enabling rapid UI development across multiple product lines.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Design System", "Component Library"],
    highlightMetric: "60% Faster Velocity",
  },
];

const CATEGORIES = ["All", "Websites", "Mobile Apps & Portals", "AI & Automation", "Cloud & Platforms"] as const;

export default function WorkPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const openContact = () => setContactOpen(true);

  // Filter by category and search
  const filteredProjects = useMemo(() => {
    return WORK_PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: WORK_PROJECTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = WORK_PROJECTS.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

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
    <main className="min-h-screen bg-[#fcfdff] text-[#0b1330] selection:bg-[#0b1330] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── ELEVATED AGENCY HERO SECTION ── */}
      <section className="relative w-full bg-[#f4f6fb] pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-12 border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Ambient Tech Grid & Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-left">
          {/* Eyebrow Archive Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-slate-700">
              Production Archive • 2025–2026
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-[1.1] max-w-4xl">
            Real work, engineered to perform.
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            A curated portfolio of high-performance web applications, mobile platforms, enterprise cloud architectures, and autonomous AI systems built for industry leaders.
          </p>

          {/* Key Metrics Strip: High-Density Credibility */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-200/70 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-[5px] border border-slate-200/80 shadow-2xs">
              <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61]">100+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Production Deployments</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-[5px] border border-slate-200/80 shadow-2xs">
              <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61]">99.9%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Uptime Guarantee</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-[5px] border border-slate-200/80 shadow-2xs">
              <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61]">3.4x</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Average Client ROI</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-[5px] border border-slate-200/80 shadow-2xs">
              <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61]">12+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Global Markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE FILTER, SEARCH & VIEW TOGGLE CONTROLS ── */}
      <section className="w-full bg-white border-b border-slate-200/80 sticky top-[72px] z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills with Item Counts */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#202B61] text-white shadow-xs"
                      : "bg-slate-100/90 text-slate-700 hover:bg-slate-200/80 hover:text-slate-950"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Toolbar: Search & View Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Live Search */}
            <div className="relative w-44 sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, tech..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-[4px] focus:outline-hidden focus:border-[#202B61] focus:bg-white text-slate-800 placeholder:text-slate-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ×
                </button>
              )}
            </div>

            {/* Grid vs Editorial List Switcher */}
            <div className="inline-flex items-center p-0.5 bg-slate-100 rounded-[4px] border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                title="Refined Grid View"
                className={`p-1.5 rounded-[3px] text-xs font-medium transition-all flex items-center gap-1 cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-white text-[#202B61] shadow-2xs font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                title="Editorial Index View"
                className={`p-1.5 rounded-[3px] text-xs font-medium transition-all flex items-center gap-1 cursor-pointer ${
                  viewMode === "list"
                    ? "bg-white text-[#202B61] shadow-2xs font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Index</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS SHOWCASE (NO BIG BOXES, COMPACT & POLISHED) ── */}
      <section className="w-full py-12 sm:py-16 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center text-slate-500 text-sm font-normal bg-slate-50 rounded-[5px] border border-dashed border-slate-200">
              No projects found matching your search.
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="block mx-auto mt-3 text-xs text-[#202B61] font-bold underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* ── VIEW 1: REFINED 3-COLUMN COMPACT CARDS (NO GIANT BOXES) ── */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-[5px] border border-slate-200/90 hover:border-[#202B61]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div>
                    {/* Compact Image Container (Height capped, elegant aspect ratio) */}
                    <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top Bar on Image: Category Badge + Year */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 px-2 py-0.5 rounded-[3px] shadow-2xs backdrop-blur-xs">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-[3px] backdrop-blur-xs">
                          {project.year}
                        </span>
                      </div>

                      {/* Floating Key Impact Highlight */}
                      <div className="absolute bottom-3 left-3 pointer-events-none">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#202B61]/90 backdrop-blur-xs px-2.5 py-1 rounded-[3px] shadow-xs">
                          <TrendingUp className="w-3 h-3 text-[#38bdf8]" />
                          {project.highlightMetric}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 text-left">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {project.client}
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <h2 className="font-heading font-bold text-lg text-[#0b1330] group-hover:text-[#202B61] transition-colors leading-snug">
                          {project.title}
                        </h2>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#202B61] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
                      </div>

                      <p className="font-sans text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Clean Bottom Tags & Case Study Link */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.slice(0, 2).map((srv, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-sans text-[10.5px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-[3px] border border-slate-200/70"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#202B61] group-hover:underline shrink-0 flex items-center gap-0.5">
                      View Case Study
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* ── VIEW 2: EDITORIAL INDEX VIEW (ZERO BOXES, MAXIMUM ELEGANCE) ── */
            <div className="bg-white rounded-[5px] border border-slate-200/90 shadow-2xs divide-y divide-slate-200/80 overflow-hidden">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  onClick={() => setSelectedProject(project)}
                  className="group px-5 sm:px-7 py-4.5 hover:bg-slate-50/90 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer text-left"
                >
                  {/* Left: Index + Title + Client */}
                  <div className="flex items-center gap-4 sm:gap-6 min-w-[320px]">
                    <span className="text-xs font-bold text-slate-400 font-mono w-6 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Micro Thumbnail */}
                    <div className="w-14 h-11 rounded-[3px] overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-base text-[#0b1330] group-hover:text-[#202B61] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        {project.client}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Category & Services Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-[#202B61] bg-blue-50/80 px-2.5 py-1 rounded-[3px] border border-blue-200/60">
                      {project.category}
                    </span>
                    {project.services.slice(0, 2).map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="hidden lg:inline text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded-[3px]"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  {/* Right: Key Result Metric + Year + Action */}
                  <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-[3px] border border-emerald-200/60">
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        {project.highlightMetric}
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-400 font-mono">
                      {project.year}
                    </div>

                    <div className="w-7 h-7 rounded-[4px] bg-slate-100 group-hover:bg-[#202B61] group-hover:text-white flex items-center justify-center transition-colors text-slate-600 shrink-0">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PROJECT DETAIL MODAL ── */}
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

      {/* ── CLOSING CTA SECTION ── */}
      <AboutCTA onOpenBooking={openContact} />

      {/* ── FOOTER ── */}
      <Footer onOpenBooking={openContact} bgColor="bg-white" />
    </main>
  );
}
