export type ProductPricingType = "free" | "premium";

export interface ProductItem {
  id: string;
  name: string;
  badge?: string;
  pricingType: ProductPricingType;
  priceLabel: string;
  billingPeriod?: string;
  priceBadgeText: string;
  freeTrial?: string;
  category: "E-Commerce" | "Team Workspace" | "Applied AI" | "Developer Tools" | "Security & Cloud" | "Analytics";
  tags: string[];
  tagline: string;
  description: string;
  rating: number;
  reviewsCount: string;
  developer?: {
    name: string;
    avatar: string;
  };
  logo: string;
  previewImage: string;
  screenshots: string[];
  features: string[];
  liveUrl: string;
  purchaseUrl?: string;
  downloadUrl?: string;
  docsUrl?: string;
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
    badge: "FLAGSHIP PLATFORM",
    pricingType: "premium",
    priceLabel: "$99",
    billingPeriod: "/mo",
    priceBadgeText: "$990/yr or $99/mo",
    freeTrial: "14-Day Free Trial",
    category: "E-Commerce",
    tags: ["COMMERCE", "HEADLESS CMS", "INFRASTRUCTURE"],
    tagline: "Digital Commerce & Headless Web Operating Platform",
    description: "A unified platform to build high-performance websites, manage headless commerce, and scale digital operations in one connected workspace with full Liquid code autonomy.",
    rating: 5.0,
    reviewsCount: "2,480+ active stores",
    developer: {
      name: "Arkanet Software Team",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/prostack-logo-navy.png",
    previewImage: "/assets/images/prostack-preview-hd.jpg",
    screenshots: [
      "/assets/images/prostack-hd.png",
      "/assets/images/prostack-preview-hd.jpg",
      "/assets/images/prostack-showcase-banner.jpg",
    ],
    features: [
      "Liquid OS 2.0 theme engine with modular drag-and-drop page assembly",
      "Multi-store localized inventory, tax, and automated GCC currency checkout",
      "Sub-second Cloudflare edge page delivery with automated 95+ Core Web Vitals",
      "Zero arbitrary transaction fees or fragile third-party plugin conflicts",
      "Unified REST, GraphQL and webhook developer APIs for ERP integrations",
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    docsUrl: "https://prostack.arkanet.ae/",
    techStack: ["Next.js 15", "Liquid OS 2.0", "Cloudflare Edge", "GraphQL", "Tailwind CSS"],
    stats: {
      stat1: { label: "Edge Speed", value: "< 420ms" },
      stat2: { label: "Uptime SLA", value: "99.99%" },
    },
  },
  {
    id: "orbit",
    name: "Orbit by Arkanet",
    badge: "POPULAR SUITE",
    pricingType: "premium",
    priceLabel: "$12",
    billingPeriod: "/user/mo",
    priceBadgeText: "$120/yr or $12/user/mo",
    freeTrial: "Free Starter Tier Available",
    category: "Team Workspace",
    tags: ["COLLABORATION", "MESSAGING", "TASK MANAGEMENT"],
    tagline: "Unified Team Workspace & Project Collaboration Suite",
    description: "The connected workspace designed to eliminate tool sprawl. Orbit centralizes corporate messaging, Microsoft Outlook mail sync, sprint task boards, review workflows, and client approval rooms into one cohesive interface.",
    rating: 4.9,
    reviewsCount: "1,890+ teams",
    developer: {
      name: "Arkanet Enterprise Pod",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "/assets/images/orbit-preview-hd.jpg",
    screenshots: [
      "/assets/images/orbit-hd.png",
      "/assets/images/orbit-preview-hd.jpg",
      "/assets/images/orbit-showcase-banner.jpg",
      "/assets/images/orbit-tasks-banner.jpg",
      "/assets/images/orbit-dashboard-mockup.jpg",
    ],
    features: [
      "Real-time team messaging channels, direct messages & threaded discussions",
      "Native Microsoft Outlook 365 and Exchange bi-directional mail integration",
      "Grouped Kanban task boards with customizable sprint workflows",
      "Client approval workspaces for frictionless deliverable sign-offs",
      "End-to-end audit logging, file encryption & role-based access matrices",
    ],
    liveUrl: "https://orbit.arkanet.ae/",
    purchaseUrl: "https://orbit.arkanet.ae/",
    docsUrl: "https://orbit.arkanet.ae/",
    techStack: ["React 19", "TypeScript", "WebSockets", "Outlook API", "Tailwind CSS"],
    stats: {
      stat1: { label: "Team Velocity", value: "+46%" },
      stat2: { label: "Context Switching", value: "0" },
    },
  },
  {
    id: "neuraldesk-ai",
    name: "NeuralDesk AI",
    badge: "ENTERPRISE AI",
    pricingType: "premium",
    priceLabel: "$149",
    billingPeriod: "/mo",
    priceBadgeText: "$1,490/yr or $149/mo",
    freeTrial: "30-Day Guided Pilot",
    category: "Applied AI",
    tags: ["ENTERPRISE AI", "KNOWLEDGE BASE", "RAG"],
    tagline: "Private Enterprise Knowledge Engine & Document Intelligence",
    description: "Self-hosted generative intelligence platform indexing corporate PDF manuals, ERP databases, and contracts with strict zero data leakage and role-based access control.",
    rating: 4.9,
    reviewsCount: "480+ organizations",
    developer: {
      name: "Arkanet AI Research Labs",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/arkanet-icon.png",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    ],
    features: [
      "Semantic hybrid vector search across multi-format documents (PDF, Excel, SQL)",
      "Instant citations linking every answer to exact highlighted source paragraphs",
      "Granular departmental access controls ensuring confidential data boundaries",
      "Deployable inside private corporate VPCs or on-premises Kubernetes clusters",
    ],
    liveUrl: "https://orbit.arkanet.ae/",
    purchaseUrl: "https://orbit.arkanet.ae/",
    techStack: ["Python", "FastAPI", "pgvector", "LangChain", "Docker", "Next.js"],
    stats: {
      stat1: { label: "Citation Accuracy", value: "99.8%" },
      stat2: { label: "Ticket Deflection", value: "-84%" },
    },
  },
  {
    id: "arkcloud-gateway",
    name: "ArkCloud Zero-Trust Gateway",
    badge: "SECURITY",
    pricingType: "premium",
    priceLabel: "$49",
    billingPeriod: "/mo",
    priceBadgeText: "$490/yr or $49/mo",
    freeTrial: "14-Day Free Trial",
    category: "Security & Cloud",
    tags: ["ZERO TRUST", "API GATEWAY", "INFRASTRUCTURE"],
    tagline: "High-Throughput Edge API Gateway & Zero-Trust Access Proxy",
    description: "Enterprise multi-cloud ingress controller and identity-aware proxy providing automated mutual TLS, DDoS mitigation, rate limiting, and zero-trust employee authentication.",
    rating: 4.8,
    reviewsCount: "740 engineering teams",
    developer: {
      name: "Arkanet Cloud Ops",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/arkanet-icon-dark.png",
    previewImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Automated SSL termination, certificate rotations, and DDoS mitigation",
      "Role-based Single Sign-On (SSO) with Okta, Google Workspace, and Azure AD",
      "Distributed rate limiting and token bucket protection across global edge nodes",
      "Real-time audit log streaming to Datadog, Splunk, and AWS CloudWatch",
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    techStack: ["Go", "Envoy", "eBPF", "Kubernetes", "Prometheus"],
    stats: {
      stat1: { label: "Latency Added", value: "< 1.4ms" },
      stat2: { label: "Uptime SLA", value: "99.999%" },
    },
  },
  {
    id: "devstream-cicd",
    name: "DevStream CI/CD",
    badge: "DEV TOOLS",
    pricingType: "premium",
    priceLabel: "$29",
    billingPeriod: "/mo",
    priceBadgeText: "$290/yr or $29/mo",
    freeTrial: "Free for Small Projects",
    category: "Developer Tools",
    tags: ["CI/CD", "AUTOMATION", "GITOPS"],
    tagline: "Automated Build, Containerization & Edge Deployment Pipeline",
    description: "Fast, reproducible developer pipelines with pre-configured Docker build caching, multi-environment preview staging, and one-click rollback capabilities.",
    rating: 4.9,
    reviewsCount: "1,120 developers",
    developer: {
      name: "Arkanet Tooling Pod",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Sub-2-minute container builds with smart layer caching and dependency hashing",
      "Ephemeral pull-request preview environments generated on every commit",
      "Zero-downtime blue/green deployments with automatic health-check rollbacks",
      "Seamless integrations with GitHub, GitLab, Docker Hub, and AWS ECR",
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    techStack: ["Rust", "Docker", "Kubernetes", "Webhooks", "GitHub API"],
    stats: {
      stat1: { label: "Build Speed Gain", value: "3.8x" },
      stat2: { label: "Deploy Time", value: "< 90s" },
    },
  },
  {
    id: "arkmetrics-studio",
    name: "ArkMetrics Studio",
    badge: "ANALYTICS",
    pricingType: "premium",
    priceLabel: "$39",
    billingPeriod: "/mo",
    priceBadgeText: "$390/yr or $39/mo",
    freeTrial: "14-Day Free Trial",
    category: "Analytics",
    tags: ["ANALYTICS", "STREAMING", "TELEMETRY"],
    tagline: "Real-Time Application Telemetry & Commerce Analytics",
    description: "Sub-50ms streaming business telemetry platform tracking user funnels, revenue conversions, server response times, and edge error rates in one dashboard.",
    rating: 4.8,
    reviewsCount: "620 enterprises",
    developer: {
      name: "Arkanet Data Engine Pod",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/arkanet-icon.png",
    previewImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Real-time event streaming pipeline processing up to 100,000 events/sec",
      "No-code visual query builder with instant export to executive PDF dashboards",
      "Automated alerting via Slack, WhatsApp, and PagerDuty on conversion drops",
      "Privacy-first GDPR & CCPA compliance with automatic IP anonymization",
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    techStack: ["ClickHouse", "Kafka", "TypeScript", "Next.js", "Tailwind CSS"],
    stats: {
      stat1: { label: "Query Speed", value: "< 45ms" },
      stat2: { label: "Throughput", value: "100k evt/s" },
    },
  },
  {
    id: "ark-validator-cli",
    name: "ArkValidator CLI",
    badge: "FREE & OPEN SOURCE",
    pricingType: "free",
    priceLabel: "Free",
    billingPeriod: "Open Source",
    priceBadgeText: "Free Forever",
    freeTrial: "Free Download",
    category: "Developer Tools",
    tags: ["OPEN SOURCE", "CLI", "CORE WEB VITALS", "SEO"],
    tagline: "Automated Core Web Vitals, SEO & Accessibility Audit CLI",
    description: "Lightweight command-line utility for engineers to audit web performance, accessibility contrast, broken links, and SEO tags locally and in CI/CD pipelines.",
    rating: 4.9,
    reviewsCount: "14.2k downloads",
    developer: {
      name: "Arkanet Open Source Pod",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/arkanet-icon-dark.png",
    previewImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "One-command terminal audit: npx @arkanet/validator https://yoursite.com",
      "Calculates accurate LCP, CLS, INP, and TTFB scores against Google thresholds",
      "Detects accessibility WCAG 2.1 AA violations and missing ARIA attributes",
      "Generates lightweight markdown and JSON reports for GitHub Actions CI/CD",
    ],
    liveUrl: "https://github.com",
    downloadUrl: "https://github.com",
    purchaseUrl: "https://github.com",
    docsUrl: "https://github.com",
    techStack: ["Node.js", "TypeScript", "Puppeteer", "Lighthouse Core"],
    stats: {
      stat1: { label: "Audit Time", value: "< 12s" },
      stat2: { label: "Check Rules", value: "120+" },
    },
  },
  {
    id: "liquid-devtools",
    name: "Liquid Theme DevTools",
    badge: "FREE EXTENSION",
    pricingType: "free",
    priceLabel: "Free",
    billingPeriod: "Open Source",
    priceBadgeText: "Free Forever",
    freeTrial: "Free Download",
    category: "Developer Tools",
    tags: ["BROWSER EXTENSION", "SHOPIFY", "LIQUID", "DEV TOOLS"],
    tagline: "Browser Inspector & Live Reloader for Shopify & Liquid Developers",
    description: "Official browser extension that inspects Liquid schema tags, highlights nested section variables, and enables instant hot-module reload for local Shopify and Prostack themes.",
    rating: 5.0,
    reviewsCount: "8,900+ developers",
    developer: {
      name: "Arkanet Tooling Pod",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/prostack-logo-navy.png",
    previewImage: "/assets/images/prostack-showcase-banner.jpg",
    screenshots: [
      "/assets/images/prostack-showcase-banner.jpg",
      "/assets/images/prostack-preview-hd.jpg",
    ],
    features: [
      "Inspect nested Liquid templates, section drops, and schema settings live in browser",
      "Instant WebSocket hot-reload without clearing browser cookies or session state",
      "Detects rendering bottlenecks and un-cached Liquid collection loops",
      "Available for Google Chrome, Brave, and Microsoft Edge",
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    downloadUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    docsUrl: "https://prostack.arkanet.ae/",
    techStack: ["TypeScript", "Chrome Extensions API", "Liquid Syntax Parser"],
    stats: {
      stat1: { label: "Reload Speed", value: "< 150ms" },
      stat2: { label: "Active Devs", value: "8.9k+" },
    },
  },
  {
    id: "gitaudit-scanner",
    name: "GitAudit Secret Scanner",
    badge: "FREE SECURITY UTILITY",
    pricingType: "free",
    priceLabel: "Free",
    billingPeriod: "Open Source",
    priceBadgeText: "Free Forever",
    freeTrial: "Free Download",
    category: "Security & Cloud",
    tags: ["SECURITY", "GIT", "OPEN SOURCE", "DEV TOOLS"],
    tagline: "High-Speed Git Secret & Private Credential Leak Scanner",
    description: "Fast cryptographic CLI tool that prevents private keys, AWS tokens, database passwords, and API secrets from ever entering your git commits or remote repositories.",
    rating: 4.9,
    reviewsCount: "6,400+ stars",
    developer: {
      name: "Arkanet Security Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Scans 600+ token formats with active cryptographic checksum verification",
      "Pre-commit hook installation with zero false-alarm development interruptions",
      "Deep historical git commit back-scanning across all branches and tags",
      "Zero telemetry collection, runs entirely offline on developer machines",
    ],
    liveUrl: "https://github.com",
    downloadUrl: "https://github.com",
    purchaseUrl: "https://github.com",
    docsUrl: "https://github.com",
    techStack: ["Go", "Git Hooks", "Docker", "Regex AST Engine"],
    stats: {
      stat1: { label: "Scan Speed", value: "12k commits/s" },
      stat2: { label: "Accuracy", value: "99.9%" },
    },
  },
];
