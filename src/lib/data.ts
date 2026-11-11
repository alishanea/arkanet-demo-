export interface ServiceItem {
  id: string;
  title: string;
  category: "Build" | "Design & Grow" | "AI Solutions";
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  result: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    category: "Build",
    description: "Arkanet designs and builds websites that convert visitors into leads, not just websites that look nice, every project starts with your customer's journey, not a template.",
    iconName: "Layout"
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    category: "Build",
    description: "From first wireframe to app-store listing, we build iOS and Android apps people actually keep on their phones.",
    iconName: "Smartphone"
  },
  {
    id: "portal-dev",
    title: "Portal Development",
    category: "Build",
    description: "Custom portals that give your team, partners, or customers one place to log in and get work done, replacing scattered spreadsheets and email threads.",
    iconName: "ShieldCheck"
  },
  {
    id: "graphic-design",
    title: "UI/UX & Graphic Design",
    category: "Design & Grow",
    description: "Visual identity, user experience research, intuitive interfaces, and brand assets that hold up across web, mobile, and print.",
    iconName: "Palette"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Design & Grow",
    description: "SEO, paid campaigns, and content strategy built around measurable outcomes, more qualified traffic, more leads.",
    iconName: "TrendingUp"
  },
  {
    id: "automation",
    title: "Business Automation",
    category: "Build",
    description: "We map manual, repetitive workflows and rebuild them as automated systems, freeing your team for work that needs a person.",
    iconName: "Cpu"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "ai-mobility-platform",
    title: "AI Mobility & Connected Parking Platform",
    client: "Dubai Smart Mobility Initiative",
    result: "Automated Parking Telemetry & Connected Vehicle Navigation",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "healthcare-bigdata-platform",
    title: "Healthcare Big Data & Hospital Analytics",
    client: "UAE Healthcare & Clinical Network",
    result: "Cardiovascular Risk Prediction & Unified Clinical Data Lake",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "conversational-ai-voicebots",
    title: "Enterprise Conversational AI & Voicebots",
    client: "Enterprise Customer Care & Telecom",
    result: "Multilingual Global Neural Voice & WhatsApp Agents",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "price-hunting-engine",
    title: "Dynamic Price Hunting & Scraping Engine",
    client: "Middle East E-Commerce Marketplace",
    result: "Real-Time Competitor Intelligence & Algorithmic Repricing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "blockchain-asset-tokenization",
    title: "Blockchain Real Estate & Asset Tokenization",
    client: "Dubai Real Estate & Asset Consortium",
    result: "Regulated Security Tokens & P2P Trading Marketplace",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "remote-workforce-management",
    title: "Remote Workforce Management (RWM) Platform",
    client: "Global IT Consulting & Distributed Teams",
    result: "Productivity Telemetry, Compliance & Sprint Workflows",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "We listen closely to your objectives, constraints, and the outcomes that matter most, discovery, not a sales conversation.",
    image: "/assets/images/bento-strategy.svg"
  },
  {
    step: "02",
    title: "Architect",
    description: "We translate that into a defined roadmap: scope, sequencing, and technical decisions.",
    image: "/assets/images/portfolio-1.svg"
  },
  {
    step: "03",
    title: "Deliver",
    description: "Our team executes with transparent, continuous reporting, so you always know where the work stands.",
    image: "/assets/images/portfolio-2.svg"
  },
  {
    step: "04",
    title: "Sustain",
    description: "Delivery starts the relationship; we stay engaged through ongoing support and optimisation.",
    image: "/assets/images/portfolio-3.svg"
  }
];

export const AI_CAPABILITIES = [
  {
    title: "Technology Strategy & Roadmapping",
    desc: "We help decide what to build and in what order, so spend maps to a business outcome."
  },
  {
    title: "Applied AI & Machine Learning",
    desc: "Custom models trained on your data, evaluated against your actual business metric."
  },
  {
    title: "Conversational AI & Virtual Agents",
    desc: "Language-model-based assistants that hold a real conversation and hand off to a human only when needed."
  },
  {
    title: "Data Engineering & Analytics",
    desc: "Pipelines and warehouses that turn scattered data into something your team can query and trust."
  },
  {
    title: "Legacy System Modernisation",
    desc: "Modernising ageing systems that still run your business, without a risky rip-and-replace."
  },
  {
    title: "Product & UI/UX Design",
    desc: "Interfaces designed around real user behaviour, tested before a line of production code is written."
  },
  {
    title: "Full-Stack App Development",
    desc: "Web, mobile, and desktop applications on a single, maintainable codebase wherever that's the right call."
  }
];

export const INDUSTRIES = [
  "Retail & E-commerce",
  "Healthcare",
  "Education",
  "Hospitality",
  "Public Sector & Government",
  "Transportation & Logistics",
  "Professional Services",
  "Consumer Products"
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much does a website or app cost?",
    answer: "Every plan starts with a free consultation and a written estimate, see Pricing for indicative ranges.",
    defaultOpen: true
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard website takes a few weeks; AI/app timelines are confirmed after Step 2 of Our Process."
  },
  {
    question: "One-off project or ongoing support?",
    answer: "Both, a one-time build, or a subscription plan with real engineering time, not a ticket queue."
  },
  {
    question: "Can you work with a business outside India?",
    answer: "Yes, pricing shown in INR and USD, consultations scheduled across time zones."
  },
  {
    question: "What happens after launch?",
    answer: "We stay on as your long-term technology partner for monitoring, maintenance, and improvements."
  }
];
