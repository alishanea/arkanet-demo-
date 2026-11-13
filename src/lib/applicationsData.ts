export type ApplicationCategory = "All" | "Mobile Apps" | "Shopify Stores" | "Web & SaaS";

export interface ApplicationItem {
  id: string;
  name: string;
  category: "Mobile Apps" | "Shopify Stores" | "Web & SaaS";
  subCategory: string;
  tagline: string;
  rating: number;
  reviewsCount: string;
  platformBadge: string;
  previewImage: string;
  screenshots: string[];
  liveUrl?: string;
  description: string;
  metrics: {
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    stat3: { label: string; value: string };
  };
  highlights: string[];
  techStack: string[];
  client: string;
  year: string;
  platforms: string;
  downloads: {
    primaryLabel: string;
    primaryType: "apple" | "shopify" | "cloud";
    secondaryLabel?: string;
    secondaryType?: "android" | "web" | "docs";
  };
}

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: "elixir-luxury-perfumes",
    name: "Elixir Luxury Perfumes",
    category: "Shopify Stores",
    subCategory: "Artistic & Arabic Perfumery",
    tagline: "High-conversion bilingual Arabic & English Shopify Plus flagship for Dubai's premier luxury perfume boutique.",
    rating: 5.0,
    reviewsCount: "1,240 reviews",
    platformBadge: "Shopify Plus",
    previewImage: "/assets/images/elixir-hero.png",
    screenshots: [
      "/assets/images/elixir-hero.png",
      "/assets/images/elixir-showcase.png",
      "/assets/images/elixir-perfume.png",
    ],
    liveUrl: "https://www.elixirbeauty.com",
    description:
      "Bespoke Shopify Plus storefront engineered for Dubai's luxury fragrance house, featuring bilingual Arabic (RTL) & English, Tabby installment payments, Apple Pay, and sub-1.2s edge loads.",
    metrics: {
      stat1: { label: "Sales Lift", value: "+168%" },
      stat2: { label: "Edge Page Load", value: "<1.2s" },
      stat3: { label: "Bilingual Parity", value: "100%" },
    },
    highlights: [
      "Custom Shopify Plus Liquid architecture with bilingual Arabic RTL support",
      "Integrated regional UAE payment gateways including Apple Pay and Tabby",
      "Dynamic fragrance notes discovery and localized GCC currencies (AED, SAR, QAR)",
    ],
    techStack: ["Shopify Plus", "Liquid OS 2.0", "Next.js 15", "Tailwind CSS", "Apple Pay / Tabby", "Cloudflare Edge"],
    client: "Elixir Beauty Dubai",
    year: "2025",
    platforms: "Web / Mobile Safari & Chrome",
    downloads: {
      primaryLabel: "Visit Live Store",
      primaryType: "shopify",
      secondaryLabel: "Explore Case Study",
      secondaryType: "web",
    },
  },
  {
    id: "vesper-horology",
    name: "Vesper Luxury Horology",
    category: "Shopify Stores",
    subCategory: "Luxury Watches & Jewelry",
    tagline: "60fps WebGL 3D watch customizer with sub-second edge checkout delivery.",
    rating: 4.9,
    reviewsCount: "860 reviews",
    platformBadge: "Shopify Plus",
    previewImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://vesper.demo.arkanet.com",
    description:
      "High-conversion bespoke Shopify Plus storefront featuring a 60fps WebGL 3D watch customizer, sub-second edge page loads, and localized international checkout.",
    metrics: {
      stat1: { label: "Conversion Lift", value: "+34%" },
      stat2: { label: "Edge Page Load", value: "480ms" },
      stat3: { label: "Avg. Cart Value", value: "3.2x" },
    },
    highlights: [
      "Real-time 3D watch strap, bezel, and dial material visualizer",
      "Multi-currency conversion with duty and tax calculation at checkout",
      "High-speed edge caching with 98+ Google Lighthouse performance",
      "VIP private client appointment scheduler for flagship boutiques",
    ],
    techStack: ["Shopify Plus", "Next.js 15", "Three.js / WebGL", "Tailwind CSS"],
    client: "Vesper Timepieces Geneva",
    year: "2025",
    platforms: "Shopify Online Store 2.0 • Headless Next.js",
    downloads: {
      primaryLabel: "Visit Live Shopify Store",
      primaryType: "shopify",
      secondaryLabel: "Explore 3D Configurator",
      secondaryType: "web",
    },
  },
  {
    id: "careflow-health",
    name: "CareFlow Telehealth",
    category: "Mobile Apps",
    subCategory: "Medical & Telehealth",
    tagline: "Encrypted patient portal with live WebRTC video visits and diagnostic report routing.",
    rating: 4.9,
    reviewsCount: "1.2k reviews",
    platformBadge: "iOS & Android",
    previewImage:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://careflow.demo.arkanet.com",
    description:
      "A patient-first healthcare mobile application engineered with encrypted WebRTC video encounters, instant diagnostic report delivery, and direct prescription routing.",
    metrics: {
      stat1: { label: "Queue Efficiency", value: "+42%" },
      stat2: { label: "Encounter Video Latency", value: "<250ms" },
      stat3: { label: "HIPAA Compliant", value: "100%" },
    },
    highlights: [
      "Sub-second WebRTC video consultations with zero buffering",
      "Biometric patient authentication with HIPAA-compliant data vault",
      "Instant laboratory report push notifications & automated reminders",
      "Integration with hospital Electronic Health Records (EHR) databases",
    ],
    techStack: ["React Native", "TypeScript", "WebRTC", "HIPAA Vault", "GraphQL"],
    client: "CareFlow Health Group",
    year: "2026",
    platforms: "iOS 17+ • Android 14+ • iPadOS",
    downloads: {
      primaryLabel: "Download on App Store",
      primaryType: "apple",
      secondaryLabel: "Get on Google Play",
      secondaryType: "android",
    },
  },
  {
    id: "kinetics-movement",
    name: "Kinetics Athlete Coach",
    category: "Mobile Apps",
    subCategory: "Health & Fitness",
    tagline: "On-device neural computer vision for real-time 30fps athletic movement analysis.",
    rating: 4.8,
    reviewsCount: "2.4k reviews",
    platformBadge: "iOS & watchOS",
    previewImage:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://kinetics.demo.arkanet.com",
    description:
      "Athletic performance app utilizing on-device Apple Neural Engine pose estimation to provide 30fps joint tracking, repetition count, and instant audio feedback.",
    metrics: {
      stat1: { label: "Processing FPS", value: "30fps" },
      stat2: { label: "Form Accuracy", value: "99.4%" },
      stat3: { label: "User Retention", value: "88%" },
    },
    highlights: [
      "Private on-device CoreML computer vision with zero server latency",
      "Audible posture warnings and barbell velocity tracking",
      "Seamless bi-directional sync with Apple Health and Google Fit",
      "Weekly athletic progress telemetry with fatigue prediction",
    ],
    techStack: ["Swift", "CoreML", "TensorFlow Lite", "HealthKit", "watchOS"],
    client: "Kinetics Pro Labs",
    year: "2025",
    platforms: "iOS 17+ • Apple Watch • HealthKit",
    downloads: {
      primaryLabel: "Download for iOS",
      primaryType: "apple",
      secondaryLabel: "Get for Android",
      secondaryType: "android",
    },
  },
  {
    id: "moda-atelier",
    name: "Moda Atelier Milano",
    category: "Shopify Stores",
    subCategory: "Luxury Fashion",
    tagline: "Interactive runway video shopping and invitation-gated private client salon.",
    rating: 4.8,
    reviewsCount: "1.9k reviews",
    platformBadge: "Shopify Plus",
    previewImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://moda.demo.arkanet.com",
    description:
      "Editorial digital flagship for an Italian luxury fashion house, featuring full-screen runway video integration, virtual styling appointments, and private VIP collection access.",
    metrics: {
      stat1: { label: "VIP Engagement", value: "4.5x" },
      stat2: { label: "Shoppable Video CTR", value: "28%" },
      stat3: { label: "Global Currencies", value: "32+" },
    },
    highlights: [
      "Seamless runway video playback paired with interactive shoppable tags",
      "VIP private client shopping room gated by invitation code",
      "Integrated concierge chat and global white-glove courier tracking",
      "Express global delivery calculation and multi-warehouse fulfillment",
    ],
    techStack: ["Shopify Plus", "Storefront API", "Tailwind CSS", "Vimeo Pro"],
    client: "Moda Atelier S.p.A.",
    year: "2025",
    platforms: "Shopify Plus • Liquid OS 2.0 • Global Multi-Currency",
    downloads: {
      primaryLabel: "Visit Shopify Store",
      primaryType: "shopify",
      secondaryLabel: "Watch Runway Stream",
      secondaryType: "web",
    },
  },
  {
    id: "parkease-mobility",
    name: "ParkEase Smart Mobility",
    category: "Mobile Apps",
    subCategory: "Navigation & Transit",
    tagline: "Connected Apple CarPlay transit navigator with live telemetry across 42,000+ bays.",
    rating: 4.9,
    reviewsCount: "5.8k reviews",
    platformBadge: "iOS & Android",
    previewImage:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://parkease.demo.arkanet.com",
    description:
      "Smart city mobility application connecting drivers to real-time in-ground IoT sensors across urban parking garages, enabling automated bay reservations and contact-free gate exit.",
    metrics: {
      stat1: { label: "Search Time Reduction", value: "38%" },
      stat2: { label: "Connected Bays", value: "42,000+" },
      stat3: { label: "Telemetry Uptime", value: "99.9%" },
    },
    highlights: [
      "Sub-second sensor telemetry across 42,000+ monitored parking bays",
      "Turn-by-turn guidance directly into open spots via Apple CarPlay",
      "Automated license plate recognition and frictionless mobile billing",
      "Transit traffic prediction model reducing search latency by 38%",
    ],
    techStack: ["Flutter", "TensorFlow Edge", "MQTT IoT", "Apple CarPlay", "AWS"],
    client: "Dubai Smart Mobility Initiative",
    year: "2026",
    platforms: "iOS 17+ • Android 14+ • Apple CarPlay",
    downloads: {
      primaryLabel: "Download on iOS",
      primaryType: "apple",
      secondaryLabel: "Get on Android",
      secondaryType: "android",
    },
  },
  {
    id: "stonecraft-surfaces",
    name: "StoneCraft Surfaces",
    category: "Shopify Stores",
    subCategory: "Home & Architecture",
    tagline: "Architectural stone sampling, 2K slab inspector, and contractor wholesale portal.",
    rating: 4.9,
    reviewsCount: "430 reviews",
    platformBadge: "Shopify Plus",
    previewImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://stonecraft.demo.arkanet.com",
    description:
      "Modern e-commerce platform for architectural stone and marble suppliers. Includes high-resolution slab inspection, sample request cart, and wholesale trade pricing.",
    metrics: {
      stat1: { label: "Sample Orders", value: "+110%" },
      stat2: { label: "Texture Zoom", value: "2K Quad" },
      stat3: { label: "Trade Wholesale", value: "Active" },
    },
    highlights: [
      "2K texture zoom on natural marble, granite, and quartz slabs",
      "Physical architectural sample checkout with real-time courier tracking",
      "Verified contractor wholesale login with tiered quantity discounting",
      "Direct ERP integration for warehouse slab bundle availability",
    ],
    techStack: ["Shopify Liquid", "Tailwind CSS", "Storefront API", "Edge CDN"],
    client: "StoneCraft Natural Surfaces",
    year: "2025",
    platforms: "Shopify Plus • Custom Liquid Architecture",
    downloads: {
      primaryLabel: "Open Live Storefront",
      primaryType: "shopify",
      secondaryLabel: "Trade Portal Demo",
      secondaryType: "web",
    },
  },
  {
    id: "aura-botanicals",
    name: "Aura Living Botanicals",
    category: "Shopify Stores",
    subCategory: "Beauty & Wellness",
    tagline: "Clean organic skincare with personalized regimens and subscription replenishment.",
    rating: 4.8,
    reviewsCount: "3.1k reviews",
    platformBadge: "Shopify Store",
    previewImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1608248597359-577770868f05?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://aura.demo.arkanet.com",
    description:
      "Minimalist Shopify storefront engineered for a clean beauty brand, combining editorial product storytelling, personalized skincare quiz, and recurring subscriptions.",
    metrics: {
      stat1: { label: "Subscription Rate", value: "+45%" },
      stat2: { label: "Quiz Completion", value: "76%" },
      stat3: { label: "Mobile Speed", value: "98/100" },
    },
    highlights: [
      "Dynamic 6-step skin diagnostic quiz recommending custom regimens",
      "1-click recurring subscription discount and automated replenishment",
      "Mobile-first sticky add-to-bag with sliding upsell drawer",
      "Localized multicurrency checkout with instant Apple Pay and Shop Pay",
    ],
    techStack: ["Shopify OS 2.0", "Recharge Subscriptions", "Klaviyo", "Liquid"],
    client: "Aura Living Organics",
    year: "2025",
    platforms: "Shopify Online Store 2.0 • Recharge Subscriptions",
    downloads: {
      primaryLabel: "Visit Shopify Store",
      primaryType: "shopify",
      secondaryLabel: "Take Skincare Quiz",
      secondaryType: "web",
    },
  },
  {
    id: "neuraldesk-ai",
    name: "NeuralDesk Enterprise",
    category: "Web & SaaS",
    subCategory: "Productivity & AI",
    tagline: "Private enterprise knowledge retrieval and departmental AI workflow assistant.",
    rating: 4.9,
    reviewsCount: "640 reviews",
    platformBadge: "Web & Cloud",
    previewImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "https://neuraldesk.demo.arkanet.com",
    description:
      "Self-hosted enterprise AI intelligence system indexing corporate repositories, legal contracts, and ERP data with role-based access control and strict data privacy.",
    metrics: {
      stat1: { label: "Internal Ticket Drop", value: "-84%" },
      stat2: { label: "Citation Accuracy", value: "99.8%" },
      stat3: { label: "Data Leakage", value: "0%" },
    },
    highlights: [
      "Semantic vector indexing across PDF documents, spreadsheets, and databases",
      "Granular departmental access controls ensuring zero unapproved data leaks",
      "Instant citation verification linking every AI answer to exact source pages",
      "Zero telemetry export, fully deployable inside private corporate VPCs",
    ],
    techStack: ["FastAPI", "Python", "pgvector", "LangChain", "Docker", "Next.js"],
    client: "Global Financial Advisory Network",
    year: "2026",
    platforms: "Cloud SaaS • Docker VPC • Web & Mobile",
    downloads: {
      primaryLabel: "Deploy SaaS Instance",
      primaryType: "cloud",
      secondaryLabel: "Explore API Docs",
      secondaryType: "docs",
    },
  },
];

export const FEATURED_SLIDES = APPLICATIONS.slice(0, 5);

export const APPLICATION_CATEGORIES: ApplicationCategory[] = [
  "All",
  "Mobile Apps",
  "Shopify Stores",
  "Web & SaaS",
];

export const CATEGORIES = APPLICATION_CATEGORIES;


