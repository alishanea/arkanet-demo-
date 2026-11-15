export type ProductPricingType = "free" | "premium";

export interface ProductItem {
  id: string;
  name: string;
  badge?: string;
  pricingType: ProductPricingType;
  priceLabel: string;
  billingPeriod?: string;
  priceBadgeText: string; // e.g. "$100/yr or $11/mo"
  freeTrial?: string;
  category: "E-Commerce" | "Team Workspace" | "Applied AI" | "Developer Tools" | "Security & Cloud" | "Analytics" | "CRM & SaaS";
  tags: string[];
  tagline: string;
  description: string;
  rating: number;
  reviewsCount: string;
  developer: {
    name: string;
    avatar: string;
  };
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
    badge: "FLAGSHIP PLATFORM",
    pricingType: "premium",
    priceLabel: "$99",
    billingPeriod: "/mo",
    priceBadgeText: "$990/yr or $99/mo",
    freeTrial: "14-Day Free Trial",
    category: "E-Commerce",
    tags: ["E-COMMERCE", "HEADLESS CMS", "INFRASTRUCTURE"],
    tagline: "Digital Commerce & Headless Web Operating Platform",
    description: "A unified platform to build high-performance websites, manage headless commerce, and scale digital operations in one connected workspace without plugin chaos.",
    rating: 5.0,
    reviewsCount: "2,480+ enterprises",
    developer: {
      name: "Prostack Core Team",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
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
    priceBadgeText: "$120/yr or $12/mo",
    freeTrial: "Free Starter Tier Available",
    category: "Team Workspace",
    tags: ["CRM", "ANALYTICS", "BUSINESS"],
    tagline: "Unified Team Workspace & Project Collaboration Suite",
    description: "The all-in-one unified workspace bringing team messaging, Microsoft Outlook mail sync, grouped sprint task boards, review workflows, and client approval rooms together.",
    rating: 4.9,
    reviewsCount: "1,890+ teams",
    developer: {
      name: "Orbit Team",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
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
    id: "wordpress-enterprise",
    name: "Wordpress Cloud",
    pricingType: "premium",
    priceLabel: "$11",
    billingPeriod: "/mo",
    priceBadgeText: "$100/yr or $11/mo",
    freeTrial: "Free Migration Included",
    category: "Developer Tools",
    tags: ["SECURITY", "INFRASTRUCTURE SOFTWARE"],
    tagline: "Optimized Enterprise Headless WordPress Engine",
    description: "Physiological respiration involves the mechanisms that ensure high-speed cached WordPress rendering with enterprise isolation and automated security patching.",
    rating: 4.9,
    reviewsCount: "12.4k installs",
    developer: {
      name: "CoolAppsDev",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
    },
    logo: "/assets/images/arkanet-icon.png",
    previewImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Automatic Redis object cache & global Cloudflare edge synchronization",
      "Headless GraphQL endpoint ready for Next.js and mobile app consumption",
      "One-click staging sandbox and automated SSL certificate provisioning"
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    techStack: ["PHP 8.3", "MySQL", "Redis", "Cloudflare", "GraphQL"],
    stats: {
      stat1: { label: "Speed Gain", value: "4.8x" },
      stat2: { label: "Cache Hit Rate", value: "99.4%" }
    }
  },
  {
    id: "clickup-sync",
    name: "ClickUp Integration",
    pricingType: "premium",
    priceLabel: "$10",
    billingPeriod: "/mo",
    priceBadgeText: "$88/yr or $10/mo",
    freeTrial: "14-Day Trial",
    category: "CRM & SaaS",
    tags: ["SECURITY", "ANALYTICS", "CRM", "BUSINESS"],
    tagline: "Bi-Directional Task & Sprint Synchronization Engine",
    description: "The mechanisms that ensure that the composition of functional sprint backlogs and CRM leads sync seamlessly between ClickUp, Orbit, and Slack.",
    rating: 4.8,
    reviewsCount: "4,320 teams",
    developer: {
      name: "CatanaCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Instant webhook listener capturing task updates and status transitions",
      "Automated time tracking rollups and developer velocity reporting",
      "Zero API quota overflow with intelligent request rate batching"
    ],
    liveUrl: "https://orbit.arkanet.ae/",
    purchaseUrl: "https://orbit.arkanet.ae/",
    techStack: ["TypeScript", "ClickUp API v2", "Node.js", "Redis"],
    stats: {
      stat1: { label: "Sync Latency", value: "< 200ms" },
      stat2: { label: "Time Saved", value: "8hrs/wk" }
    }
  },
  {
    id: "trufflehog-oss",
    name: "TruffleHog OSS",
    pricingType: "free",
    priceLabel: "Free",
    billingPeriod: "Open Source",
    priceBadgeText: "$90/yr or $11/mo",
    freeTrial: "Free Forever",
    category: "Security & Cloud",
    tags: ["ANALYTICS", "BUSINESS", "SECURITY"],
    tagline: "Automated Git Secret & Credential Leak Scanner",
    description: "Plaire n'est pas pour moi un puissant appui. Parvenue a un certain pretre intrigant et qui inspects commit histories for live verified cloud secrets.",
    rating: 4.8,
    reviewsCount: "8,900+ stars",
    developer: {
      name: "Amelini Cooper",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    logo: "/assets/images/arkanet-icon-dark.png",
    previewImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Scans 800+ credential formats with active cryptographic verification",
      "Integrates directly into GitHub Actions, GitLab CI, and Bitbucket",
      "Historical commit back-scanning with zero false-alarm noise"
    ],
    liveUrl: "https://github.com",
    purchaseUrl: "https://github.com",
    techStack: ["Go", "Docker", "Git", "Cryptographic Verifiers"],
    stats: {
      stat1: { label: "Accuracy", value: "99.8%" },
      stat2: { label: "Scan Speed", value: "10k commits/s" }
    }
  },
  {
    id: "syncdepot",
    name: "SyncDepot",
    pricingType: "premium",
    priceLabel: "$11",
    billingPeriod: "/mo",
    priceBadgeText: "$90/yr or $11/mo",
    freeTrial: "30-Day Free Trial",
    category: "CRM & SaaS",
    tags: ["CRM", "BUSINESS", "INFRASTRUCTURE"],
    tagline: "Cloud Asset & Document Distribution Storage",
    description: "It consisted of a Physical space is often conceived in three linear dimensions, although high-throughput enterprise file distribution operates globally.",
    rating: 5.0,
    reviewsCount: "640 enterprises",
    developer: {
      name: "Developer John",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Multi-region S3 object replication with zero egress latency",
      "Role-based expirable download links and DRM watermarking",
      "Automated image & video compression pipelines upon upload"
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    techStack: ["AWS S3", "Cloudflare", "TypeScript", "Node.js"],
    stats: {
      stat1: { label: "Download Speed", value: "< 80ms" },
      stat2: { label: "Reliability", value: "99.999%" }
    }
  },
  {
    id: "metrical-analytics",
    name: "Metrical",
    badge: "ENTERPRISE",
    pricingType: "premium",
    priceLabel: "$15",
    billingPeriod: "/mo",
    priceBadgeText: "$126/yr or $15/mo",
    freeTrial: "30-Day Guided Trial",
    category: "Analytics",
    tags: ["ANALYTICS", "INFRASTRUCTURE SOFTWARE"],
    tagline: "High-Throughput Streaming Analytics & Supply BI",
    description: "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-50ms query lake powering commerce analytics.",
    rating: 4.6,
    reviewsCount: "190+ enterprises",
    developer: {
      name: "Robert Fox",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    logo: "/assets/images/arkanet-icon-dark.png",
    previewImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
    ],
    features: [
      "Real-time Kafka and ClickHouse streaming pipelines handling 100k+ events/sec",
      "Visual query builder with instant export to executive PDF and Excel reports",
      "Role-based security masks for sensitive financial and PII fields"
    ],
    liveUrl: "https://prostack.arkanet.ae/",
    purchaseUrl: "https://prostack.arkanet.ae/",
    techStack: ["ClickHouse", "Kafka", "Next.js", "Python"],
    stats: {
      stat1: { label: "Throughput", value: "100k evt/s" },
      stat2: { label: "Query Speed", value: "< 50ms" }
    }
  },
  {
    id: "bansir-cloud",
    name: "Bansir Cloud",
    pricingType: "premium",
    priceLabel: "$12",
    billingPeriod: "/mo",
    priceBadgeText: "$134/yr or $12/mo",
    freeTrial: "14-Day Free Trial",
    category: "Security & Cloud",
    tags: ["SECURITY", "CRM", "BUSINESS"],
    tagline: "Automated Multi-Cloud Infrastructure & Cluster Provisioning",
    description: "Enterprise multi-cloud Kubernetes orchestration tool delivering automated zero-downtime rollouts, ingress load balancing, and regional failover.",
    rating: 4.9,
    reviewsCount: "820 DevOps teams",
    developer: {
      name: "Bansir Core",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
    },
    logo: "/assets/images/arkanet-icon-clean.png",
    previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
    ],
    features: [
      "Automated Terraform and Pulumi cloud cluster deployment",
      "Automated SSL termination, DDOS mitigation, and global DNS routing",
      "Live container metric telemetry and predictive auto-scaling triggers"
    ],
    liveUrl: "https://orbit.arkanet.ae/",
    purchaseUrl: "https://orbit.arkanet.ae/",
    techStack: ["Kubernetes", "Terraform", "Go", "Prometheus"],
    stats: {
      stat1: { label: "Deploy Time", value: "< 4 mins" },
      stat2: { label: "Uptime SLA", value: "99.99%" }
    }
  },
  {
    id: "taskify-workflow",
    name: "Taskify Workflow",
    pricingType: "premium",
    priceLabel: "$11.5",
    billingPeriod: "/mo",
    priceBadgeText: "$96/yr or $11.5/mo",
    freeTrial: "Free Starter Plan",
    category: "Team Workspace",
    tags: ["SECURITY", "ANALYTICS", "CRM", "BUSINESS"],
    tagline: "Automated Sprint & Approval Workflow Board",
    description: "Drag-and-drop collaborative workspace with built-in client review cycles, time-tracking telemetry, and automated calendar sync.",
    rating: 4.8,
    reviewsCount: "1,420 companies",
    developer: {
      name: "Taskify Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    logo: "/assets/images/arkanet-icon.png",
    previewImage: "/assets/images/orbit-dashboard-mockup.jpg",
    screenshots: [
      "/assets/images/orbit-dashboard-mockup.jpg",
      "/assets/images/orbit-tasks-banner.jpg"
    ],
    features: [
      "Kanban boards with automated conditional WIP limits",
      "Interactive client deliverable approvals with cryptographic audit logs",
      "Seamless bi-directional sync with Google Calendar and Apple iCal"
    ],
    liveUrl: "https://orbit.arkanet.ae/",
    purchaseUrl: "https://orbit.arkanet.ae/",
    techStack: ["React 19", "Node.js", "PostgreSQL", "WebSockets"],
    stats: {
      stat1: { label: "Cycle Speed", value: "+34%" },
      stat2: { label: "Sign-off Time", value: "< 2hrs" }
    }
  },
  {
    id: "elixir-commerce-engine",
    name: "Elixir Boutique Engine",
    badge: "BESTSELLER",
    pricingType: "premium",
    priceLabel: "$129",
    billingPeriod: "/mo",
    priceBadgeText: "$126/yr or $15/mo",
    freeTrial: "Live Demo Available",
    category: "E-Commerce",
    tags: ["ANALYTICS", "BUSINESS", "INFRASTRUCTURE SOFTWARE"],
    tagline: "Bespoke 3D WebGL & Shopify Plus Storefront Engine",
    description: "High-conversion flagship storefront platform engineered for luxury retail, featuring interactive 60fps WebGL product customizers and GCC checkouts.",
    rating: 5.0,
    reviewsCount: "320+ luxury brands",
    developer: {
      name: "Elixir Boutique Labs",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
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
      "Integrated Tabby installments, Apple Pay, and local GCC payment switches"
    ],
    liveUrl: "https://www.elixirbeauty.com",
    purchaseUrl: "https://www.elixirbeauty.com",
    techStack: ["Shopify Plus", "Next.js", "Three.js / WebGL", "Tailwind CSS"],
    stats: {
      stat1: { label: "Sales Lift", value: "+168%" },
      stat2: { label: "Load Time", value: "1.1s" }
    }
  }
];
