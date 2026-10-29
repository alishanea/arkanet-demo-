"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  Layers, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Clock, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Zap
} from "lucide-react";

interface ScopeOption {
  id: string;
  name: string;
  badge: string;
  desc: string;
}

interface PlatformOption {
  id: string;
  name: string;
  icon: React.ElementType;
}

const PLATFORMS: PlatformOption[] = [
  { id: "web-saas", name: "Web & SaaS Platform", icon: Layers },
  { id: "mobile-app", name: "Mobile Application", icon: Smartphone },
  { id: "applied-ai", name: "Applied AI & Automation", icon: Cpu },
  { id: "cloud-devops", name: "Cloud & DevOps Architecture", icon: Cloud },
];

const SCOPES: ScopeOption[] = [
  { id: "mvp", name: "Fast MVP Sprint", badge: "Speed to Market", desc: "Core feature set engineered for rapid user validation" },
  { id: "growth", name: "Scale & Growth Platform", badge: "Production Scale", desc: "Multi-tenant architecture built for heavy real-world traffic" },
  { id: "enterprise", name: "Enterprise Modernisation", badge: "High SLA & Security", desc: "Strict enterprise security, SOC2 readiness, and custom integrations" },
];

interface SpecOutput {
  timeline: string;
  cadence: string;
  stack: string[];
  team: string;
  sla: string;
  deliverables: string;
}

const SPECS_MATRIX: Record<string, Record<string, SpecOutput>> = {
  "web-saas": {
    mvp: {
      timeline: "4 - 6 Weeks",
      cadence: "Bi-weekly sprint releases",
      stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Vercel"],
      team: "1 Lead Architect + 2 Full-Stack Engineers",
      sla: "99.9% Uptime",
      deliverables: "Responsive web platform, authenticated user portal, Stripe/Payment gateway, admin dashboard."
    },
    growth: {
      timeline: "8 - 12 Weeks",
      cadence: "Weekly continuous deployment",
      stack: ["Next.js", "Node.js Microservices", "PostgreSQL", "Redis Cache", "AWS ECS", "Docker"],
      team: "1 Solutions Architect + 3 Full-Stack Engineers + 1 QA Specialist",
      sla: "99.95% Enterprise SLA",
      deliverables: "High-concurrency SaaS engine, multi-tenant billing, analytics telemetry, API gateway."
    },
    enterprise: {
      timeline: "14 - 18 Weeks",
      cadence: "Dedicated agile engineering pod",
      stack: ["Distributed Microservices", "Kubernetes", "AWS Multi-Region", "Terraform", "Kafka", "PostgreSQL"],
      team: "1 Principal Architect + 4 Senior Engineers + 1 DevOps Lead + 1 QA Lead",
      sla: "99.99% Strict SLA",
      deliverables: "Zero-downtime architecture, legacy system migration, SOC2/ISO compliance audit, 24/7 monitoring."
    }
  },
  "mobile-app": {
    mvp: {
      timeline: "6 - 8 Weeks",
      cadence: "Bi-weekly TestFlight builds",
      stack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase / Supabase"],
      team: "1 Lead Mobile Architect + 2 Native Engineers",
      sla: "60 FPS Fluid UI",
      deliverables: "Cross-platform iOS & Android app, push notifications, offline data caching, App Store submission."
    },
    growth: {
      timeline: "10 - 14 Weeks",
      cadence: "Weekly live sprint previews",
      stack: ["React Native / Flutter", "GraphQL", "PostgreSQL", "WebSockets", "AWS Amplify"],
      team: "1 Mobile Architect + 3 Senior Engineers + 1 QA Automation Lead",
      sla: "99.95% Crash-Free Users",
      deliverables: "Real-time chat/data sync, biometric authentication, deep linking, in-app purchases & analytics."
    },
    enterprise: {
      timeline: "16 - 20 Weeks",
      cadence: "Continuous integration & TestFlight",
      stack: ["Swift / Kotlin Native", "React Native Engine", "gRPC", "Encrypted SQLite", "AWS Mobile"],
      team: "1 Principal Mobile Lead + 4 Native Engineers + 1 Security Auditor",
      sla: "Enterprise MDM & HIPAA/PCI Ready",
      deliverables: "Hardware sensor integrations, banking-grade on-device encryption, automated device lab testing."
    }
  },
  "applied-ai": {
    mvp: {
      timeline: "4 - 6 Weeks",
      cadence: "Iterative prompt & model tuning",
      stack: ["Python", "OpenAI / Claude API", "LangChain", "Pinecone Vector DB", "FastAPI", "Next.js"],
      team: "1 AI Solutions Engineer + 1 Full-Stack Engineer",
      sla: "< 250ms Response Time",
      deliverables: "Custom RAG conversational agent, document intelligence pipeline, citation engine."
    },
    growth: {
      timeline: "8 - 12 Weeks",
      cadence: "Continuous evaluation benchmarks",
      stack: ["FastAPI", "LlamaIndex", "Qdrant / pgvector", "OpenAI / Mistral", "Celery", "Docker"],
      team: "1 Applied AI Architect + 2 ML Engineers + 1 Full-Stack Engineer",
      sla: "< 120ms Vector Search",
      deliverables: "Autonomous workflow agents, multi-modal vision extraction, automated enterprise data sync."
    },
    enterprise: {
      timeline: "14 - 18 Weeks",
      cadence: "Custom fine-tuning & red-teaming",
      stack: ["Self-Hosted LLMs (vLLM)", "HuggingFace", "Triton Server", "Kubernetes", "AWS SageMaker"],
      team: "1 Principal AI Scientist + 3 ML Engineers + 1 MLOps Engineer",
      sla: "Air-Gapped / Private Data Guarantee",
      deliverables: "Fine-tuned proprietary models, private on-premise VPC deployment, zero-retention compliance."
    }
  },
  "cloud-devops": {
    mvp: {
      timeline: "3 - 5 Weeks",
      cadence: "Infrastructure as Code sprints",
      stack: ["AWS ECS / Fargate", "Terraform", "GitHub Actions CI/CD", "PostgreSQL RDS", "CloudFront CDN"],
      team: "1 Cloud Architect + 1 DevOps Specialist",
      sla: "99.9% Uptime",
      deliverables: "Automated deployment pipeline, staging & production environments, automated SSL & DNS."
    },
    growth: {
      timeline: "6 - 10 Weeks",
      cadence: "Continuous zero-downtime deploys",
      stack: ["Kubernetes (EKS)", "Terraform", "ArgoCD", "Datadog / Prometheus", "AWS Multi-AZ"],
      team: "1 Senior Cloud Architect + 2 DevOps Engineers",
      sla: "99.95% High Availability",
      deliverables: "Auto-scaling cluster management, distributed caching, centralized log aggregation, disaster recovery."
    },
    enterprise: {
      timeline: "12 - 16 Weeks",
      cadence: "Multi-region active-active deployment",
      stack: ["Multi-Region AWS / Azure", "Istio Service Mesh", "Vault Secret Engine", "Chaos Engineering"],
      team: "1 Principal Cloud Architect + 3 Infrastructure Engineers + 1 SecOps Specialist",
      sla: "99.99% Global Fault Tolerance",
      deliverables: "Active-active multi-region failover, strict IAM zero-trust policy, SOC2/ISO 27001 hardening."
    }
  }
};

interface SprintEstimatorWidgetProps {
  onOpenBooking?: () => void;
}

export const SprintEstimatorWidget: React.FC<SprintEstimatorWidgetProps> = ({ onOpenBooking }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("web-saas");
  const [selectedScope, setSelectedScope] = useState<string>("growth");

  const currentSpec = SPECS_MATRIX[selectedPlatform]?.[selectedScope] || SPECS_MATRIX["web-saas"]["growth"];
  const platformData = PLATFORMS.find((p) => p.id === selectedPlatform);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#edf2f9] text-[#202B61] select-none border-t border-b border-slate-200/90 overflow-hidden px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header with Wise-style Clarity */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/90 pb-6 sm:pb-8">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>Interactive Architecture Planner</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight leading-tight">
              Instant Scope, Timeline &amp; Tech Stack Estimator
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Explore delivery timelines, team composition, and production-ready tech stacks for your next digital product.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Pricing &amp; Timeline Transparency
            </span>
          </div>
        </div>

        {/* 2-Column Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start text-left">
          
          {/* LEFT COLUMN: CONTROLS (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step 1: Select Platform */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3.5 shadow-none">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                  1. Choose Architecture Domain
                </span>
                <span className="text-[11px] font-semibold text-[#202B61] bg-slate-100 px-2 py-0.5 rounded">
                  Required
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PLATFORMS.map((platform) => {
                  const Icon = platform.icon;
                  const isSelected = selectedPlatform === platform.id;
                  return (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                        isSelected
                          ? "bg-[#202B61] text-white border-[#202B61]"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400" : "text-slate-500 group-hover:text-[#202B61]"}`} />
                        <span className="text-xs sm:text-[13px] font-semibold">{platform.name}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Scope & Tier */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3.5 shadow-none">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Select Project Scope &amp; Scale
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  Flexible
                </span>
              </div>

              <div className="space-y-2.5">
                {SCOPES.map((scope) => {
                  const isSelected = selectedScope === scope.id;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setSelectedScope(scope.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-[#202B61] text-white border-[#202B61]"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80 hover:border-slate-300"
                      }`}
                    >
                      <div className="space-y-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs sm:text-sm font-bold ${isSelected ? "text-white" : "text-slate-900"}`}>
                            {scope.name}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30" : "bg-slate-200/70 text-slate-600"
                          }`}>
                            {scope.badge}
                          </span>
                        </div>
                        <p className={`text-xs ${isSelected ? "text-white/70" : "text-slate-500"} line-clamp-1`}>
                          {scope.desc}
                        </p>
                      </div>

                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#202B61] stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-300 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: WISE-STYLE REAL-TIME SPECIFICATION CARD (Span 6) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-none">
            
            {/* Header of the Spec Card */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Calculated Specification
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                  {platformData?.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Delivery SLA</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {currentSpec.sla}
                </span>
              </div>
            </div>

            {/* Numerical Grid (Like Wise fee breakdown) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedPlatform}-${selectedScope}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {/* 2 Big Numerical Truth Points */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#edf2f9] border border-slate-200/80">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#202B61]" />
                      Estimated Timeline
                    </span>
                    <p className="font-heading font-black text-xl sm:text-2xl text-[#202B61]">
                      {currentSpec.timeline}
                    </p>
                  </div>
                  <div className="space-y-1 border-l border-slate-200/80 pl-3">
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#202B61]" />
                      Sprint Release
                    </span>
                    <p className="font-sans font-bold text-xs sm:text-sm text-slate-800 pt-1">
                      {currentSpec.cadence}
                    </p>
                  </div>
                </div>

                {/* Team Pod */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    Dedicated Engineering Pod
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/70">
                    {currentSpec.team}
                  </p>
                </div>

                {/* Recommended Production Stack */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Production-Grade Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSpec.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200/80 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables Summary */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Architectural Scope
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentSpec.deliverables}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Action CTA Button */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#202B61] hover:bg-[#161e47] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Request Architecture Scoping Call</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
              <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap text-center">
                Free 30-min technical review
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

