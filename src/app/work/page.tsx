"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, List, LayoutGrid } from "lucide-react";

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
  "elixir-luxury-perfumery": {
    client: "Elixir Beauty Dubai",
    year: "2025",
    services: [
      "Bespoke Shopify Plus Storefront",
      "Bilingual Arabic (RTL) & English",
      "UAE Payment Gateway (Tabby / Apple Pay)",
      "Fragrance Notes Discovery Engine",
      "Cloudflare Edge Optimization"
    ],
    overview: "Elixir (elixirbeauty.com) is Dubai's luxury fragrance house retailing elite niche perfumes including Amouage, Maison Crivelli, Nishane, and Marc-Antoine Barrois. Arkanet engineered an ultra-fast, bespoke bilingual Shopify Plus storefront with seamless local payments.",
    challenge: "High-end luxury fragrances require an immersive, high-elegance digital showcase, lightning-fast product filtering by olfactory notes, full Arabic RTL layout support, and frictionless regional checkout with Tabby installments and Apple Pay.",
    solution: "We designed and deployed a custom Shopify Plus architecture featuring bespoke Liquid OS 2.0 components, smooth RTL layout transitions, dynamic fragrance discovery filters, localized GCC currencies (AED, SAR, QAR, KWD), and sub-1.2s page loads.",
    impact: [
      "+168% Online sales conversion growth within 90 days",
      "Sub-1.2s Page load speeds across UAE, GCC, and international traffic",
      "Seamless bilingual Arabic (RTL) & English switching with 100% catalog parity",
    ],
    techStack: ["Shopify Plus", "Liquid OS 2.0", "Next.js", "Tailwind CSS", "Apple Pay / Tabby", "Cloudflare Edge"],
  },
  "ai-mobility-platform": {
    client: "Dubai Smart Mobility Initiative",
    year: "2026",
    services: ["AI Mobility Intelligence", "Computer Vision Parking", "Sensor Telemetry", "IoT Integration"],
    overview: "Arkanet engineered an automated mobility intelligence platform connecting in-ground IoT sensors, computer vision feeds, and driver navigation apps across high-density urban zones.",
    challenge: "Urban drivers spend up to 20 minutes locating available parking, generating traffic bottlenecks, unnecessary fuel burn, and transit friction.",
    solution: "Deployed real-time edge computer vision paired with IoT sensors and mobile telemetry to detect, predict, and guide drivers to vacant parking bays with sub-second accuracy.",
    impact: [
      "38% Reduction in parking search transit time",
      "Over 42,000 Connected parking bays monitored live",
      "99.6% Sensor accuracy across outdoor and indoor garages",
    ],
    techStack: ["Python", "TensorFlow", "Edge IoT", "MQTT", "Next.js", "AWS IoT Core"],
  },
  "healthcare-bigdata-platform": {
    client: "UAE Healthcare & Clinical Network",
    year: "2025",
    services: ["Big Data Engineering", "Hospital Data Lake", "Cardiovascular AI", "Clinical Decision Support"],
    overview: "A mission-critical healthcare big data infrastructure designed to unify electronic health records (EHR), lab feeds, and vital metrics into a single high-security clinical data lake.",
    challenge: "Fragmented hospital data systems and delayed risk identification in cardiovascular diseases caused high clinical latency and treatment delays.",
    solution: "Engineered a scalable big data pipeline that normalizes hospital records into an encrypted data lake, applying predictive machine learning to flag cardiovascular indicators early.",
    impact: [
      "1.2M+ Patient records indexed and unified",
      "42% Earlier detection of critical cardiac risk factors",
      "100% Compliance with UAE Ministry of Health clinical data regulations",
    ],
    techStack: ["Apache Spark", "Kafka", "Python", "PostgreSQL", "Next.js", "Docker"],
  },
  "conversational-ai-voicebots": {
    client: "Enterprise Customer Care & Telecom",
    year: "2026",
    services: ["Conversational AI", "Voicebot Development", "Global Multilingual NLU", "Omnichannel Integration"],
    overview: "An enterprise-grade conversational AI suite engineered to handle high-concurrency customer enquiries across phone lines, web chat, and WhatsApp Business API.",
    challenge: "Peak season support queues overwhelmed human support desks, resulting in 15+ minute wait times and inconsistent multilingual customer service.",
    solution: "Trained and deployed neural voicebots and generative chat assistants with real-time speech recognition, automated ticket resolution, and seamless human agent handoffs.",
    impact: [
      "86% First-contact automated resolution rate",
      "Sub-1.2s Average neural voice response latency",
      "Fluid real-time switching across multiple global languages",
    ],
    techStack: ["Python", "FastAPI", "Speech-to-Text NLU", "LangChain", "WebRTC", "WhatsApp API"],
  },
  "price-hunting-engine": {
    client: "Middle East E-Commerce Marketplace",
    year: "2025",
    services: ["Price Hunting Algorithm", "High-Scale Web Scraper", "Dynamic Repricing", "Market Intelligence"],
    overview: "An automated price monitoring and competitive intelligence platform scraping competitor portals at scale to dynamically optimize retail margins.",
    challenge: "Manual price audits across dozens of e-commerce platforms took days, leaving retailers vulnerable to undercutting and lost market share.",
    solution: "Built a distributed crawler cluster capable of scraping over 8 million product pages daily with automatic proxy rotation, anti-bot handling, and instant repricing APIs.",
    impact: [
      "8.5M+ Daily product prices tracked dynamically",
      "+22% Improvement in average retailer profit margin",
      "Sub-minute price fluctuation alert generation",
    ],
    techStack: ["Python / Scrapy", "Redis Queue", "Elasticsearch", "Next.js Dashboard", "Go Workers"],
  },
  "blockchain-asset-tokenization": {
    client: "Dubai Real Estate & Asset Consortium",
    year: "2026",
    services: ["Asset Tokenization", "Smart Contracts", "Crypto Wallet Integration", "dApp Engineering"],
    overview: "A regulated real-world asset (RWA) tokenization platform enabling fractional ownership of high-value commercial real estate and commodities.",
    challenge: "High entry barriers and multi-week settlement times for commercial real estate limited liquidity and international investor participation.",
    solution: "Built legally compliant ERC-3643 / Hyperledger security token contracts, investor onboarding with automated KYC/AML, and an institutional custodial wallet.",
    impact: [
      "$180M+ In tokenized real estate assets issued",
      "Instant cross-border investor settlement",
      "Zero smart-contract vulnerabilities verified across 3 audits",
    ],
    techStack: ["Solidity", "Hyperledger Fabric", "Next.js", "ethers.js", "Hardhat", "PostgreSQL"],
  },
  "remote-workforce-management": {
    client: "Global IT Consulting & Distributed Teams",
    year: "2025",
    services: ["RWM Platform", "Productivity Telemetry", "Process Automation", "Enterprise Portals"],
    overview: "Unified digital workspace designed to coordinate cross-border remote teams, track project deliverables, and automate administrative workflows.",
    challenge: "Fragmented messaging apps, disconnected Jira boards, and manual payroll calculations caused management opacity and billing errors.",
    solution: "Architected an enterprise operations portal with role-based access, automated sprint hour verification, real-time activity metrics, and international invoicing.",
    impact: [
      "3,500+ Remote engineers and contractors managed daily",
      "70% Reduction in monthly billing and payroll disputes",
      "Unified dashboard replacing 6 disparate SaaS tools",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "AWS ECS"],
  },
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
    id: "elixir-luxury-perfumery",
    category: "Websites",
    title: "Elixir Luxury Artistic Fragrances",
    description: "High-conversion bilingual Arabic & English Shopify Plus flagship for Dubai's premier luxury perfume boutique, featuring Tabby, Apple Pay, and sub-second edge speeds.",
    image: "/assets/images/elixir-hero.png",
    year: "2025",
    services: ["Shopify Plus", "Bilingual Arabic/RTL", "UAE Payment Gateway", "Edge Caching"],
  },
  {
    id: "ai-mobility-platform",
    category: "AI & Automation",
    title: "AI Mobility & Connected Parking Intelligence",
    description: "Connected vehicle navigation, sensor telemetry, and AI-driven automated parking space allocation for modern smart cities.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["AI Mobility Intelligence", "Computer Vision Parking", "IoT Telemetry"],
  },
  {
    id: "healthcare-bigdata-platform",
    category: "Cloud & Platforms",
    title: "Healthcare Big Data & Hospital Analytics",
    description: "High-throughput data engineering pipeline and predictive analytics for hospital networks and cardiovascular clinical decision support.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Big Data Engineering", "Hospital Data Lake", "Cardiovascular AI"],
  },
  {
    id: "conversational-ai-voicebots",
    category: "AI & Automation",
    title: "Conversational AI & Multilingual Voicebots",
    description: "Enterprise conversational voicebots automating customer care across web, phone, and WhatsApp across global languages.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Conversational AI", "Voicebot Development", "Global Multilingual NLU"],
  },
  {
    id: "price-hunting-engine",
    category: "Websites",
    title: "Dynamic Price Hunting & Scraping Engine",
    description: "Distributed market crawler monitoring millions of product listings, competitor reviews, ratings, and delivery terms in real time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Price Hunting Algorithm", "High-Scale Web Scraper", "Dynamic Repricing"],
  },
  {
    id: "blockchain-asset-tokenization",
    category: "Cloud & Platforms",
    title: "Blockchain Real Estate & Asset Tokenization",
    description: "Regulated real-world asset (RWA) tokenization platform enabling fractional ownership of high-value commercial real estate and commodities.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    services: ["Asset Tokenization", "Smart Contracts", "Crypto Wallet"],
  },
  {
    id: "remote-workforce-management",
    category: "Mobile Apps & Portals",
    title: "Remote Workforce Management (RWM) Platform",
    description: "End-to-end management platform for distributed teams, integrating communications, automated workflow tracking, compliance, and productivity telemetry.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["RWM Platform", "Productivity Telemetry", "Process Automation"],
  },
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
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["iOS & Android", "Telehealth", "HIPAA Vault"],
  },
  {
    id: "neuraldesk-ai",
    category: "AI & Automation",
    title: "NeuralDesk AI Enterprise Assistant",
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
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
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
    <main className="min-h-screen bg-[#eaeaea] text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. CINEMATIC WORK HERO (MATCHING CONTACT & ABOUT PAGES FULL-BLEED AMBIENT STYLE) ── */}
      <section className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#eaeaea] text-[#202B61] select-none py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80 overflow-hidden font-sans">
        
        {/* Cinematic Ambient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400&auto=format&fit=crop"
            alt="Arkanet Engineering Case Studies & Work"
            className="w-full h-full object-cover opacity-55 brightness-105 saturate-110"
            loading="eager"
          />

          {/* Consistent full-bleed gradient overlay matching Contact & About */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#eaeaea]/75 via-[#eaeaea]/55 to-[#eaeaea]/85 pointer-events-none" />
        </div>

        {/* Hero Content (Centered, 100% matched to Contact page type) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="hero-h1 text-[#202B61] text-center max-w-4xl sm:max-w-5xl mx-auto">
            Selected Work &amp;<br />
            Engineering Case Studies
          </h1>

          <p className="hero-sub font-medium text-[#202B61] leading-relaxed max-w-2xl sm:max-w-3xl text-center mx-auto mt-5 sm:mt-6">
            A curated index of production AI mobility systems, healthcare big data platforms, conversational voicebots, and enterprise software engineered for measurable business impact across Dubai, the UAE, and global markets.
          </p>
        </div>
      </section>

      {/* ── 2. WORK SHOWCASE STAGE & FILTER CONTROLS (SECOND PAGE) ── */}
      <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10">
          
          {/* Filter & Layout View Controls: Restored to Second Page */}
          <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count = cat === "All"
                  ? WORK_PROJECTS.length
                  : WORK_PROJECTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 outline-none focus:outline-none focus:ring-0 select-none ${
                      isActive
                        ? "bg-[#202B61] text-white"
                        : "bg-white text-[#202B61]/80 hover:text-[#202B61] border border-slate-200/90 hover:border-slate-300"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-[#202B61]/70"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle Controls */}
            <div className="flex items-center gap-1 bg-white border border-slate-200/90 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode("detailed")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${viewMode === "detailed" ? "bg-[#202B61] text-white" : "text-[#202B61]/70 hover:text-[#202B61]"}`}
                title="Detailed List View"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("compact")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${viewMode === "compact" ? "bg-[#202B61] text-white" : "text-[#202B61]/70 hover:text-[#202B61]"}`}
                title="Compact Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No projects found for category &quot;{activeCategory}&quot;.
            </div>
          ) : viewMode === "detailed" ? (

            /* ═══════════════════════════════════════════════════════════════
               LAYOUT A: COMPACT ROWS (Slightly reduced size, soft transparent image)
            ═══════════════════════════════════════════════════════════════ */
            <div className="space-y-5 sm:space-y-6">
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
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative rounded-xl bg-white border border-slate-200/90 transition-all duration-300 p-5 sm:p-6 lg:p-7 cursor-pointer overflow-hidden text-left shadow-none hover:shadow-none focus:outline-none focus:ring-0 active:outline-none select-none w-full"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                      {/* Left Side: Soft Transparent Thumbnail (Span 4 - Reduced compact size) */}
                      <div className="lg:col-span-4 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[220px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-80 sm:opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-slate-900/[0.04] group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                      </div>

                      {/* Right Side: Editorial Architecture & Metadata (Span 8) */}
                      <div className="lg:col-span-8 flex flex-col justify-between space-y-3">

                        {/* Meta Header Row */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-heading font-black text-slate-400 text-xs sm:text-sm">
                              #{indexFormatted}
                            </span>
                            <span className="h-3 w-[1px] bg-slate-200" />
                            <span className="font-semibold text-[#202B61] text-[11px]">
                              {project.category}
                            </span>
                          </div>
                          <span className="text-slate-400 font-medium text-[11px] sm:text-xs">
                            {project.year || "2025"}
                          </span>
                        </div>

                        {/* Title and Arrow */}
                        <div className="space-y-1.5">
                          <div className="flex items-start justify-between gap-3">
                            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] group-hover:text-[#202B61] transition-colors leading-snug">
                              {project.title}
                            </h2>
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-[#202B61] transition-transform duration-200 group-hover:scale-125 shrink-0" />
                          </div>

                          <p className="font-sans text-sm text-[#202B61]/80 font-normal leading-relaxed max-w-2xl line-clamp-2">
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
                  </motion.article>
                );
              })}
            </div>

          ) : (

            /* ═══════════════════════════════════════════════════════════════
               LAYOUT B: COMPACT 3-COLUMN PROFESSIONAL GRID (Clean Proportions)
            ═══════════════════════════════════════════════════════════════ */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                    className="group rounded-xl bg-white border border-slate-200/90 transition-all duration-300 p-4 cursor-pointer flex flex-col justify-between space-y-3 text-left shadow-none hover:shadow-none focus:outline-none focus:ring-0 active:outline-none select-none"
                  >
                    {/* Compact Image Frame */}
                    <div className="relative aspect-[16/10] max-h-[180px] rounded-lg overflow-hidden bg-slate-100 border border-slate-200/70">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-80 sm:opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-slate-900/[0.04] group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                    </div>

                    {/* Metadata & Description */}
                    <div className="space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-[#202B61]/70 mb-1">
                          <span className="font-semibold text-[#202B61] text-[11px]">
                            {project.category}
                          </span>
                          <span className="font-medium text-[11px]">{project.year || "2025"}</span>
                        </div>

                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61] group-hover:text-[#202B61] transition-colors leading-snug">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#202B61] transition-transform duration-200 group-hover:scale-125 shrink-0 mt-0.5" />
                        </div>

                        <p className="font-sans text-sm text-[#202B61]/80 line-clamp-2 leading-relaxed mt-1">
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
      <Footer onOpenBooking={openContact}  />
    </main>
  );
}
