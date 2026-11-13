export const PRACTICE_METRICS: Record<string, Array<{ stat: string; label: string; desc: string }>> = {
  "graphic-design": [
    {
      stat: "100%",
      label: "WCAG 2.1 AA Accessibility",
      desc: "Every component, color token, and contrast ratio tested and compliant for universal accessibility.",
    },
    {
      stat: "3x",
      label: "Faster Engineering Velocity",
      desc: "Modular design tokens and atomic Figma components mapped 1:1 to production code for instant handoffs.",
    },
    {
      stat: "+185%",
      label: "Usability Score Lift",
      desc: "Validated user flows and rapid interactive prototypes that eliminate user hesitation before coding.",
    },
  ],
  "digital-marketing": [
    {
      stat: "4.2x",
      label: "Average Client ROAS",
      desc: "High-intent paid search, targeted social acquisition, and audience segmentation that maximize budget efficiency.",
    },
    {
      stat: "-38%",
      label: "Customer Acquisition Cost",
      desc: "Data-driven creative iterations, landing page split-testing, and automated audience bid optimization.",
    },
    {
      stat: "99.4%",
      label: "Attribution Accuracy",
      desc: "Server-side GA4 and Meta Conversions API implementations ensuring clean, reliable event tracking.",
    },
  ],
  "business-automation": [
    {
      stat: "85%",
      label: "Manual Effort Eliminated",
      desc: "End-to-end event-driven workflows connecting CRMs, invoicing, notifications, and operational databases.",
    },
    {
      stat: "0.01%",
      label: "Error Rate Tolerance",
      desc: "Rigid schema validation, automated exception handling, and self-healing retry queues for mission-critical jobs.",
    },
    {
      stat: "10x",
      label: "Data Processing Speed",
      desc: "Instant asynchronous webhook execution eliminating delays and human bottlenecks in daily operations.",
    },
  ],
  "whatsapp-social-commerce-automation": [
    {
      stat: "98%",
      label: "WhatsApp Message Open Rate",
      desc: "Unmatched mobile open rates with verified official WhatsApp Business API broadcasts and customer notifications.",
    },
    {
      stat: "+64%",
      label: "Direct In-Chat Conversions",
      desc: "Interactive product catalogues, automatic order placement, and frictionless checkout payment links right in chat.",
    },
    {
      stat: "< 15s",
      label: "Average Response Time",
      desc: "24/7 automated routing, instant catalogue search, and seamless human agent handover when needed.",
    },
  ],
  "erp-business-management": [
    {
      stat: "99.9%",
      label: "Inventory & Ledger Accuracy",
      desc: "Real-time synchronization across warehouses, purchasing, sales channels, and financial ledgers.",
    },
    {
      stat: "70%",
      label: "Faster Month-End Closing",
      desc: "Automated journal entries, multi-currency reconciliations, and instant executive financial statements.",
    },
    {
      stat: "100%",
      label: "Audit & Compliance Readiness",
      desc: "Tamper-proof event audit logging, strict role-based access control (RBAC), and tax compliance reporting.",
    },
  ],
};

export const DEFAULT_METRICS = [
  {
    stat: "< 0.8s",
    label: "Average First Contentful Paint",
    desc: "Global Edge network deployment ensures sub-second page delivery and instant responsiveness for visitors worldwide.",
  },
  {
    stat: "+140%",
    label: "Inbound Conversion Rate Lift",
    desc: "User-tested conversion funnels, friction-free forms, and strategic value triggers engineered into every page layout.",
  },
  {
    stat: "100 / 100",
    label: "SEO & Technical Best Practices",
    desc: "Clean semantic HTML5, automated JSON-LD schemas, open graph assets, and XML sitemaps built right from day one.",
  },
];

export const PRACTICE_TECH: Record<string, string[]> = {
  "graphic-design": [
    "Figma",
    "Design Tokens",
    "Adobe CC",
    "Principle",
    "Tailwind CSS",
    "Storybook",
    "WCAG 2.1 AA",
    "Design Systems",
  ],
  "digital-marketing": [
    "Google Ads",
    "Meta Ads Manager",
    "Google Analytics 4",
    "Conversions API",
    "Semrush",
    "Looker Studio",
    "HubSpot",
    "Klaviyo",
  ],
  "business-automation": [
    "Python",
    "Node.js",
    "REST & GraphQL",
    "Webhooks",
    "Redis / Celery",
    "PostgreSQL",
    "Make / Zapier",
    "Docker",
  ],
  "whatsapp-social-commerce-automation": [
    "WhatsApp Business API",
    "Meta Cloud API",
    "Webhooks",
    "Stripe / Telr",
    "Node.js Microservices",
    "Redis Cache",
    "CRM Sync",
    "Tamara / Tabby",
  ],
  "erp-business-management": [
    "PostgreSQL",
    "Odoo ERP",
    "SAP Integration",
    "REST APIs",
    "Role-Based Access (RBAC)",
    "Docker",
    "Power BI",
    "Automated Backups",
  ],
};

export const DEFAULT_TECH = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Vercel Edge",
  "Sanity CMS",
  "Shopify Storefront",
  "Supabase",
];

