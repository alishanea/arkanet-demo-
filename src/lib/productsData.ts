export type ProductPricingType = "free" | "premium";

export interface ProductItem {
  id: string;
  name: string;
  badge?: string;
  pricingType: ProductPricingType;
  priceLabel: string;
  billingPeriod?: string; // e.g. "/mo", "/yr", "One-time"
  freeTrial?: string;
  category: "E-Commerce" | "Team Workspace" | "Applied AI" | "Developer Tools" | "Security & Cloud" | "Analytics";
  tags: string[];
  tagline: string;
  description: string;
  rating: number;
  reviewsCount: string;
  logo: string;
  previewImage: string;
  screenshots: string[];
  features: string[];
  liveUrl: string;
  purchaseUrl?: string;
  docsUrl?: string;
  demoVideoUrl?: string;
  techStack: string[];
  stats?: {
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
  };
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prostack",
    name: "Prostack",
    badge: "FLAGSHIP",
    pricingType: "premium",
    priceLabel: "$99",
    billingPeriod: "/mo or $990/yr",
    freeTrial: "14-Day Free Trial",
    category: "E-Commerce",
    tags: ["E-Commerce", "Headless CMS", "Liquid OS 2.0"],
    tagline: "Digital Commerce & Headless Web Operating Platform",
    description: "A unified platform to build high-performance websites, manage headless commerce, and scale digital operations in one connected workspace without plugin chaos.",
    rating: 5.0,
    reviewsCount: "2,480+ enterprises",
    logo: "/assets/images/prostack-logo-navy.png",
    previewImage: "/assets/images/prostack-preview-hd.jpg",
    screenshots: [
      "/assets/images/prostack-hd.png",
      "/assets/images/prostack-preview-hd.jpg",
      "/assets/images/prostack-showcase-banner.jpg",
    ],
    features: [
      "Liquid OS 2.0 Theme Engine with drag-and-drop page assembly",
      "Multi-warehouse SKU sync, inventory allocations, and catalog management",
      "High-concurrency global checkout with GCC payment gateways (Tabby, Apple Pay)",
      "Automated 95+ Core Web Vitals with sub-second Cloudflare edge distribution",
      "Zero arbitrary revenue transaction fees or fragile third-party plugin conflicts",
      "Unified REST, GraphQL and event-driven webhook developer APIs"
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    docsUrl: "https://prostack.arkanet.ae/",
    techStack: ["Next.js 15", "Liquid OS 2.0", "Cloudflare Edge", "GraphQL", "Tailwind CSS"],
    stats: {
      stat1: { label: "Edge Speed", value: "< 420ms" },
      stat2: { label: "Uptime SLA", value: "99.99%" }
    }
  },
  {
    id: "orbit",
    name: "Orbit by Arkanet",
    badge: "NEW RELEASE",
    pricingType: "premium",
    priceLabel: "$12",
    billingPeriod: "/user/mo",
    freeTrial: "Free Starter Tier Available",
    category: "Team Workspace",
    tags: ["Workspace", "Task Management", "Mail Sync"],
    tagline: "Unified Team Workspace & Project Collaboration Suite",
    description: "The all-in-one unified workspace bringing team messaging, Microsoft Outlook mail sync, grouped sprint task boards, review workflows, and client approval rooms together.",
    rating: 4.9,
    reviewsCount: "1,890+ teams",
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "/assets/images/orbit-preview-hd.jpg",
    screenshots: [
      "/assets/images/orbit-hd.png",
      "/assets/images/orbit-preview-hd.jpg",
      "/assets/images/orbit-showcase-banner.jpg",
      "/assets/images/products-showcase-ui.jpg",
    ],
    features: [
      "Real-time team communication channels, direct messaging & threaded discussions",
      "Native Microsoft Outlook & Exchange bi-directional mail integration",
      "Grouped Kanban task boards, custom workflows & sprint planning",
      "Task detail inspect view with multi-stage review workflows & status tracking",
      "Client approval workspaces for frictionless deliverable sign-offs",
      "End-to-end audit logging, file attachments & permission role matrices"
    ],
    liveUrl: "https://orbit.arkanet.ae/",
    purchaseUrl: "https://orbit.arkanet.ae/",
    docsUrl: "https://orbit.arkanet.ae/",
    techStack: ["React 19", "TypeScript", "WebSockets", "Outlook API", "Tailwind CSS"],
    stats: {
      stat1: { label: "Team Productivity", value: "+46%" },
      stat2: { label: "Task Turnaround", value: "2.4x" }
    }
  },
  {
    id: "arkanet-pulse",
    name: "Arkanet Pulse",
    badge: "POPULAR FREE",
    pricingType: "free",
    priceLabel: "Free",
    billingPeriod: "Forever",
    freeTrial: "No Credit Card Required",
    category: "Developer Tools",
    tags: ["Developer Tools", "Core Web Vitals", "Telemetry"],
    tagline: "Real-Time Web Vitals & Edge Latency Telemetry",
    description: "Lightweight, zero-config telemetry agent for modern Next.js and cloud applications. Monitors real user Core Web Vitals, API response latency, and triggers automated Slack alerts.",
    rating: 4.8,
    reviewsCount: "3,120 developers",
    logo: "/assets/images/arkanet-icon-dark.png",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Zero-config npm SDK for Next.js, Remix, Vite, and Astro",
      "Real user Core Web Vitals tracking (LCP, FID, CLS, INP) across 60+ countries",
      "Real-time alert webhooks to Slack, Discord, and PagerDuty",
      "Privacy-first telemetry compliant with GDPR and CCPA with zero cookie tracking"
    ],
    liveUrl: "https://pulse.demo.arkanet.ae",
    purchaseUrl: "https://pulse.demo.arkanet.ae",
    techStack: ["TypeScript", "ClickHouse", "Web Vitals API", "Cloudflare Workers"],
    stats: {
      stat1: { label: "SDK Footprint", value: "< 1.4kB" },
      stat2: { label: "Data Ingestion", value: "< 15ms" }
    }
  },
  {
    id: "voicebot-ai",
    name: "Arkanet VoiceBot AI",
    badge: "ENTERPRISE AI",
    pricingType: "premium",
    priceLabel: "$49",
    billingPeriod: "/mo or $0.05/min",
    freeTrial: "500 Free Minutes",
    category: "Applied AI",
    tags: ["Applied AI", "Voice AI", "IVR Automation"],
    tagline: "Autonomous Multilingual Conversational Voice Agent",
    description: "Ultra-low-latency voice AI system for customer support, call dispatching, and automated appointment booking in English, Arabic, and regional dialects.",
    rating: 4.9,
    reviewsCount: "420+ businesses",
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Sub-400ms end-to-end conversational turn latency via WebSockets",
      "Bilingual Arabic and English native vocal cadence and accents",
      "Direct bi-directional sync with HubSpot, Salesforce, and Zoho CRM",
      "Automated post-call summary transcription and sentiment tagging"
    ],
    liveUrl: "https://voice.demo.arkanet.ae",
    purchaseUrl: "https://voice.demo.arkanet.ae",
    techStack: ["WebSockets", "Deepgram", "OpenAI / Claude", "Twilio SIP", "Node.js"],
    stats: {
      stat1: { label: "Call Latency", value: "< 380ms" },
      stat2: { label: "Resolution Rate", value: "88%" }
    }
  },
  {
    id: "secure-vault",
    name: "Arkanet SecureVault",
    badge: "FREE SECURITY",
    pricingType: "free",
    priceLabel: "Free",
    billingPeriod: "Community Edition",
    freeTrial: "100% Free & Open",
    category: "Security & Cloud",
    tags: ["Security", "DevOps", "Secret Management"],
    tagline: "Zero-Knowledge Secret & API Key Orchestrator",
    description: "Client-side encrypted secret management tool for engineering teams. Protects Git repositories from credential leaks with pre-commit scanners and automated cloud syncing.",
    rating: 4.7,
    reviewsCount: "1,540 developers",
    logo: "/assets/images/arkanet-icon-dark.png",
    previewImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Client-side AES-256-GCM encryption before secrets leave the terminal",
      "Git pre-commit hooks that halt commits containing exposed tokens",
      "Automated injection into Kubernetes Secrets and Docker Compose",
      "Audit trail logging tracking whenever a teammate accesses or rotates keys"
    ],
    liveUrl: "https://vault.demo.arkanet.ae",
    purchaseUrl: "https://vault.demo.arkanet.ae",
    techStack: ["Rust", "TypeScript", "AES-256-GCM", "CLI", "Docker"],
    stats: {
      stat1: { label: "Encryption", value: "AES-256" },
      stat2: { label: "Leak Prevention", value: "100%" }
    }
  },
  {
    id: "elixir-commerce-engine",
    name: "Elixir Luxury Commerce Engine",
    badge: "BESTSELLER",
    pricingType: "premium",
    priceLabel: "$129",
    billingPeriod: "/mo or $1,200/yr",
    freeTrial: "Live Demo Available",
    category: "E-Commerce",
    tags: ["Shopify Plus", "3D WebGL", "Bilingual RTL"],
    tagline: "Bespoke 3D WebGL & Shopify Plus Storefront Engine",
    description: "High-conversion flagship storefront platform engineered for luxury retail, featuring interactive 60fps WebGL product customizers, bilingual Arabic (RTL) parity, and GCC checkouts.",
    rating: 5.0,
    reviewsCount: "320+ luxury brands",
    logo: "/assets/images/elixir-logo.png",
    previewImage: "/assets/images/elixir-hero.png",
    screenshots: [
      "/assets/images/elixir-hero.png",
      "/assets/images/elixir-showcase.png",
      "/assets/images/elixir-perfume.png"
    ],
    features: [
      "Interactive 60fps WebGL 3D model customizer and texture visualizer",
      "Full Arabic (RTL) layout switching with zero layout shifts",
      "Integrated Tabby installments, Apple Pay, and local GCC payment switches",
      "Sub-1.2s page load speed across UAE and international shopper traffic"
    ],
    liveUrl: "https://www.elixirbeauty.com",
    purchaseUrl: "https://www.elixirbeauty.com",
    techStack: ["Shopify Plus", "Next.js", "Three.js / WebGL", "Tailwind CSS"],
    stats: {
      stat1: { label: "Sales Lift", value: "+168%" },
      stat2: { label: "Load Time", value: "1.1s" }
    }
  },
  {
    id: "arkanet-flow",
    name: "Arkanet Flow",
    badge: "FREE TIER",
    pricingType: "free",
    priceLabel: "Free",
    billingPeriod: "Up to 10k events/mo",
    freeTrial: "No Card Required",
    category: "Developer Tools",
    tags: ["Automation", "Webhooks", "Serverless"],
    tagline: "Visual Webhook Orchestrator & API Middleware",
    description: "Visual pipeline builder to connect disparate ERPs, CRMs, e-commerce stores, and databases with reliable automated retry queues and live payload debugging.",
    rating: 4.8,
    reviewsCount: "980 engineers",
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Drag-and-drop visual event graph connecting 120+ webhooks and APIs",
      "Automatic exponential backoff retries with zero lost payloads",
      "TypeScript code transformations executed on edge serverless functions",
      "Instant webhook inspection and replay with one-click payload mock tests"
    ],
    liveUrl: "https://flow.demo.arkanet.ae",
    purchaseUrl: "https://flow.demo.arkanet.ae",
    techStack: ["Node.js", "Redis", "TypeScript", "Tailwind CSS"],
    stats: {
      stat1: { label: "Free Events", value: "10,000" },
      stat2: { label: "Delivery SLA", value: "99.99%" }
    }
  },
  {
    id: "metrical-analytics",
    name: "Metrical Enterprise Data Lake",
    badge: "ENTERPRISE",
    pricingType: "premium",
    priceLabel: "$199",
    billingPeriod: "/mo or $1,990/yr",
    freeTrial: "30-Day Guided Trial",
    category: "Analytics",
    tags: ["Big Data", "Analytics", "Inventory BI"],
    tagline: "High-Throughput Streaming Analytics & Supply BI",
    description: "Unified enterprise data platform for real-time telemetry, retail inventory velocity, and automated multi-warehouse reconciliation across global locations.",
    rating: 4.9,
    reviewsCount: "190+ enterprises",
    logo: "/assets/images/arkanet-icon-dark.png",
    previewImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Real-time Kafka and ClickHouse streaming pipelines handling 100k+ events/sec",
      "Visual query builder with instant export to executive PDF and Excel reports",
      "Role-based security masks for sensitive financial and PII fields",
      "Built-in predictive replenishment alerts preventing retail stockouts"
    ],
    liveUrl: "https://data.demo.arkanet.ae",
    purchaseUrl: "https://data.demo.arkanet.ae",
    techStack: ["ClickHouse", "Kafka", "Next.js", "Python", "Apache Superset"],
    stats: {
      stat1: { label: "Throughput", value: "100k evt/s" },
      stat2: { label: "Query Speed", value: "< 50ms" }
    }
  }
];
