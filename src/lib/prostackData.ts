import {
  Layout,
  ShoppingBag,
  Code2,
  Gauge,
  BarChart3,
  ShieldCheck,
  Users2,
  Plug,
  Building2,
  Store,
  Briefcase,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface DomainSpec {
  label: string;
  value: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  highlight: string;
  icon: LucideIcon;
  image: string;
  auraColor: string;
  specs: [DomainSpec, DomainSpec, DomainSpec];
}

export const PROSTACK_DOMAINS: CapabilityItem[] = [
  {
    number: "01",
    title: "Website & Content Management",
    shortTitle: "CMS & Editorial",
    tagline: "Headless Content Authoring",
    description:
      "A flexible headless CMS for marketing teams to author, schedule, and publish rich editorial pages, blog articles, and landing pages with complete revision history.",
    highlight: "Visual Page Builder & Headless CMS",
    icon: Layout,
    image: "/assets/images/web_showcase_bg.jpg",
    auraColor: "rgba(99, 102, 241, 0.22)",
    specs: [
      { label: "Templating", value: "Liquid + React" },
      { label: "Workflows", value: "Draft Approvals" },
      { label: "Global Reach", value: "Nested & i18n" },
    ],
  },
  {
    number: "02",
    title: "E-Commerce & Catalog Control",
    shortTitle: "Headless Commerce",
    tagline: "High-Velocity Transactions",
    description:
      "High-velocity digital storefront infrastructure managing unlimited SKUs, complex matrix variants, real-time inventory synchronization, and localized multi-currency pricing.",
    highlight: "Multi-Warehouse & Global Currencies",
    icon: ShoppingBag,
    image: "/assets/images/elixir-showcase.png",
    auraColor: "rgba(245, 158, 11, 0.22)",
    specs: [
      { label: "Inventory", value: "Multi-Warehouse" },
      { label: "Revenue Cut", value: "0% Penalty" },
      { label: "Checkout", value: "< 0.4s Edge Speed" },
    ],
  },
  {
    number: "03",
    title: "Visual Builder & Developer Tools",
    shortTitle: "Visual Builder",
    tagline: "No-Code Meets Full Code",
    description:
      "Bridging the divide between non-technical creators and senior engineers. Build visually using pre-tested components or take complete code control via Liquid templating.",
    highlight: "Shopify-Compatible Liquid Engine",
    icon: Code2,
    image: "/assets/images/webdevelopmentone.jpg",
    auraColor: "rgba(168, 85, 247, 0.22)",
    specs: [
      { label: "Visual Canvas", value: "Drag & Drop" },
      { label: "Code Engine", value: "Liquid Syntax" },
      { label: "Styling", value: "Tailwind & CSS" },
    ],
  },
  {
    number: "04",
    title: "Automated SEO & Edge Performance",
    shortTitle: "SEO & Speed",
    tagline: "Sub-Second Global Edge",
    description:
      "Engineered from the ground up to achieve 95+ Core Web Vitals out of the box. Eliminate SEO plugin conflicts with automated schema, sitemaps, and edge redirects.",
    highlight: "Sub-Second Global Edge Delivery",
    icon: Gauge,
    image: "/assets/images/webdevelopmenttwo.jpg",
    auraColor: "rgba(16, 185, 129, 0.22)",
    specs: [
      { label: "Core Vitals", value: "98/100 Benchmark" },
      { label: "Edge Latency", value: "< 50ms TTFB" },
      { label: "Automation", value: "Schema & XML" },
    ],
  },
  {
    number: "05",
    title: "Analytics & Telemetry Insights",
    shortTitle: "Analytics & Telemetry",
    tagline: "Zero Script Slowdown",
    description:
      "Real-time business telemetry and customer funnel tracking built directly into the platform without relying on third-party tracking scripts that slow down page loads.",
    highlight: "Zero Third-Party Script Overhead",
    icon: BarChart3,
    image: "/assets/images/digital-marketing-two.jpg",
    auraColor: "rgba(14, 165, 233, 0.22)",
    specs: [
      { label: "Overhead", value: "0 Script Drag" },
      { label: "Data Pipeline", value: "Server-Side Events" },
      { label: "Attribution", value: "Real-Time Funnel" },
    ],
  },
  {
    number: "06",
    title: "Enterprise Security & Governance",
    shortTitle: "Security & RBAC",
    tagline: "Zero-Trust Architecture",
    description:
      "Zero-compromise protection for transactions and business data with enterprise encryption, granular role-based access control, and automated compliance logging.",
    highlight: "Role-Based Access & Audit Logging",
    icon: ShieldCheck,
    image: "/assets/images/ai-chat-bots.jpg",
    auraColor: "rgba(32, 43, 97, 0.25)",
    specs: [
      { label: "Access Control", value: "Granular RBAC" },
      { label: "Compliance", value: "SOC2 & GDPR Ready" },
      { label: "Encryption", value: "TLS 1.3 / Rest" },
    ],
  },
  {
    number: "07",
    title: "Memberships & Marketplaces",
    shortTitle: "Marketplaces",
    tagline: "Recurring Subscriptions",
    description:
      "Turn your standard store into a recurring revenue engine or a full multi-vendor marketplace with vendor portals, gated content tiers, and automated commission splits.",
    highlight: "Subscription Engine & Vendor Portals",
    icon: Users2,
    image: "/assets/images/App-development-three.webp",
    auraColor: "rgba(225, 29, 72, 0.22)",
    specs: [
      { label: "Subscriptions", value: "Recurring Engine" },
      { label: "Vendor Split", value: "Multi-Vendor Hub" },
      { label: "Tiered Vaults", value: "Gated Content" },
    ],
  },
  {
    number: "08",
    title: "Open APIs & ERP Webhooks",
    shortTitle: "APIs & Webhooks",
    tagline: "High-Throughput Connectors",
    description:
      "Connect Prostack seamlessly into your existing enterprise software ecosystem. Integrate directly with SAP, Microsoft Dynamics, Salesforce, Zoho, and custom logistics providers.",
    highlight: "High-Throughput REST & GraphQL",
    icon: Plug,
    image: "/assets/images/mobile_showcase_bg.jpg",
    auraColor: "rgba(139, 92, 246, 0.22)",
    specs: [
      { label: "Protocols", value: "REST & GraphQL" },
      { label: "Webhooks", value: "< 35ms Dispatch" },
      { label: "ERP Integrations", value: "SAP, Zoho, SF" },
    ],
  },
];

export interface AudienceItem {
  role: string;
  description: string;
  benefits: string;
  icon: LucideIcon;
}

export const PROSTACK_AUDIENCES: AudienceItem[] = [
  {
    role: "Founders & Fast-Growing Brands",
    description:
      "Looking for rapid market launch without sacrificing custom engineering flexibility, SEO performance, or ownership.",
    benefits: "Faster time to revenue without developer bottleneck",
    icon: Store,
  },
  {
    role: "High-Volume E-Commerce Retailers",
    description:
      "Scaling complex SKU variants across multiple global territories, localized currencies, and warehouse logistics.",
    benefits: "Zero arbitrary revenue penalties on transaction volume",
    icon: Briefcase,
  },
  {
    role: "Digital Agencies & Web Studios",
    description:
      "Standardizing on an agile, robust framework that empowers non-technical marketing clients while offering developers full code control.",
    benefits: "Reusable components and faster client delivery cycles",
    icon: Layers,
  },
  {
    role: "Enterprise CTOs & IT Leaders",
    description:
      "Requiring strict role-based access control, single sign-on (SSO), automated security audits, and guaranteed high availability.",
    benefits: "Eliminates plugin vulnerabilities and dependency debt",
    icon: Building2,
  },
];

export interface BenefitItem {
  title: string;
  detail: string;
}

export const PROSTACK_ADVANTAGES: BenefitItem[] = [
  {
    title: "Single Unified Core Engine",
    detail: "Replaces 10+ disjointed plugins with one native, tightly-integrated code base.",
  },
  {
    title: "Zero Arbitrary Revenue Penalties",
    detail: "Keep 100% of your transaction revenue without unfair platform percentage cuts.",
  },
  {
    title: "Shopify-Compatible Liquid Syntax",
    detail: "Migrate or leverage industry-standard templating without re-training development teams.",
  },
  {
    title: "Automated Global Performance",
    detail: "Sub-second load times worldwide with edge caching, automated asset compression, and clean Core Web Vitals.",
  },
];
