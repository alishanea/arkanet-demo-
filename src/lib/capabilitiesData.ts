/**
 * CAPABILITIES_DATA - Comprehensive Services & Capabilities Catalog
 * Grounded in Arkanet Technologies Services & Capabilities Specification
 * (33 Services across 6 Practice Areas + Technology Stack)
 */

export interface CapabilityDetail {
  slug: string;
  badge: string;
  title: string;
  highlightText: string;
  subtitle: string;
  section2Headline: string;
  section2Subtitle: string;
  heroImages: {
    left: string;
    center: string;
    right: string;
  };
  highlights: {
    icon: string;
    title: string;
    desc: string;
  }[];
  featureRows: {
    title: string;
    description: string;
    image: string;
    imagePosition: "left" | "right";
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    image: string;
    bgColor: string;
    textColor: string;
  }[];
  techShowcase: {
    badge: string;
    title: string;
    description: string;
    image: string;
  };
  finalCtaText: string;
}

const PLACEHOLDER_TESTIMONIAL_NOTE = "[Awaiting approved client quote]";

export const CAPABILITIES_DATA: Record<string, CapabilityDetail> = {
  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 1: ENGINEERING (10 Services)
  // ═══════════════════════════════════════════════════════════════

  // 1.1 Custom Software Engineering
  "custom-software-engineering": {
    slug: "custom-software-engineering",
    badge: "CUSTOM SOFTWARE ENGINEERING",
    title: "Software built around your business,",
    highlightText: "not the other way around.",
    subtitle: "We design and build bespoke systems for organisations whose operations don't fit a template: logistics chains, multi-branch retail, field services, and regulated industries.",
    section2Headline: "When off-the-shelf software fails,\nwe build your own.",
    section2Subtitle: "Every build starts with a discovery phase that maps your actual operational workflow before a line of code is written, ensuring software that holds up under real production load.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Compass",
        title: "Discovery Phase",
        desc: "Operational workflow mapping and requirements validation before engineering begins, ensuring software built to fit.",
      },
      {
        icon: "Database",
        title: "Architecture Design",
        desc: "Clean domain-driven schemas, relational databases, and decoupled service architectures built for heavy concurrency.",
      },
      {
        icon: "Layers",
        title: "Full-Stack Build",
        desc: "Modern, maintainable stacks using Next.js, Node.js, and TypeScript, delivering robust APIs with intuitive interfaces.",
      },
      {
        icon: "ShieldCheck",
        title: "Automated QA",
        desc: "End-to-end automated testing, continuous integration pipelines, and monitored rollouts ensuring stable releases.",
      }
    ],
    featureRows: [
      {
        title: "Bespoke Enterprise Systems",
        description: "Custom software tailored for logistics chains, multi-branch operations, and complex business workflows that rigid off-the-shelf platforms cannot support.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Database Modeling & API Architecture",
        description: "High-throughput data modeling and REST/GraphQL APIs engineered to handle high concurrency, data integrity, and fast response times.",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Automated Testing & Release Pipelines",
        description: "Comprehensive CI/CD pipelines with automated unit, integration, and load testing ensuring stable production deployments.",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Team Handover & Long-Term Documentation",
        description: "Thorough documentation, developer-ready APIs, and team training ensuring your software is easy to maintain and extend.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCTION SOFTWARE",
      title: "Bespoke Systems Engineered for Real Scale",
      description: "Custom enterprise software built to run your business today and scale effortlessly for the load you'll have in three years.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build software built for your business →",
  },

  // 1.2 Web Design & Development
  "website-development": {
    slug: "website-development",
    badge: "WEBSITE DEVELOPMENT",
    title: "Websites engineered to",
    highlightText: "convert, not just impress.",
    subtitle: "We design and build fast, mobile-first websites, static, dynamic, eCommerce, or portfolio, each crafted with precision and shaped around your customer's journey, not a template.",
    section2Headline: "Built with purpose,\nnot just polish.",
    section2Subtitle: "A site that performs is one built with a purpose behind every page, optimised for both search engines and real visitors, where layout, content, and code all serve the same goal: getting the right person to take the next step.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Award",
        title: "Expertise",
        desc: "Full-stack engineering delivering high-performance corporate websites and digital platforms built to scale.",
      },
      {
        icon: "Settings",
        title: "Customization",
        desc: "Bespoke web architectures tailored to your business workflows and brand identity with zero generic templates.",
      },
      {
        icon: "UserCheck",
        title: "User Experience",
        desc: "Interfaces structured around frictionless user journeys and proven conversion funnels to maximize retention.",
      },
      {
        icon: "Search",
        title: "SEO Optimization",
        desc: "Built with clean semantic markup, fast Core Web Vitals, and technical SEO foundations for organic reach.",
      }
    ],
    featureRows: [
      {
        title: "Websites built for performance & speed",
        description: "High-speed corporate sites and campaign landing pages engineered with sub-second Edge delivery, Core Web Vitals optimization, and clean semantic code.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Web applications & customer dashboards",
        description: "Interactive web applications built on React and Next.js, featuring real-time data visualization, user authentication, and smooth micro-animations.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "CMS builds with editor-friendly models",
        description: "Custom content management systems enabling marketing teams to create, edit, and publish content quickly without developer intervention.",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Multilingual & RTL-ready builds",
        description: "Full Arabic right-to-left layout support and multi-currency internationalization built directly into the site architecture.",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCTION WEB PLATFORMS",
      title: "Fast, Accessible Websites That Convert",
      description: "From corporate sites to complex web applications, we build responsive, SEO-ready experiences that load fast on real-world connections.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build a website that converts →",
  },

  // 1.3 Mobile App Development
  "mobile-app-development": {
    slug: "mobile-app-development",
    badge: "MOBILE APP DEVELOPMENT",
    title: "Apps people actually",
    highlightText: "keep on their phones.",
    subtitle: "Native and cross-platform apps for iOS and Android, from first wireframe to App Store listing, built around the handful of things your users open the app to do, not a feature checklist.",
    section2Headline: "How we build apps\nthat stick.",
    section2Subtitle: "Most apps get deleted within the first week because they try to do too much, too slowly. We start by identifying the two or three core tasks your users actually came for, then make those fast, obvious, and worth opening again.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Smartphone",
        title: "Modern Platforms",
        desc: "Native iOS, Android, and cross-platform apps built with modern frameworks to keep your product ahead.",
      },
      {
        icon: "Sparkles",
        title: "Intuitive UX",
        desc: "Frictionless mobile flows engineered around core customer tasks for higher daily engagement and retention.",
      },
      {
        icon: "Shield",
        title: "Robust Security",
        desc: "Enterprise-grade encryption, secure token storage, and biometric authentication safeguarding user privacy.",
      },
      {
        icon: "TrendingUp",
        title: "High Scalability",
        desc: "Cloud-connected mobile architectures engineered to support growing concurrency with zero performance loss.",
      }
    ],
    featureRows: [
      {
        title: "iOS and Android cross-platform builds",
        description: "High-performance React Native and Flutter applications delivering native look, feel, and 60fps responsiveness across both Apple App Store and Google Play.",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Offline-first sync & background tasks",
        description: "Built for real-world connectivity. Local data caching, background syncing, and offline queueing so field teams and mobile users never lose data.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Push notifications & in-app payments",
        description: "Engaging push notification triggers, deep linking, biometric login, and secure payment gateway integrations built as standard features.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Store submission & post-launch CI/CD",
        description: "Full Apple App Store and Google Play Store submission management, release pipelines, crash reporting, and analytics tracking.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MOBILE ENGINE",
      title: "One Codebase, Two App Stores, Zero Compromise",
      description: "Cross-platform and native mobile apps with offline capability, push notifications, and payments handled as standard.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your mobile app →",
  },

  // 1.4 SaaS Product Development
  "saas-product-development": {
    slug: "saas-product-development",
    badge: "SAAS PRODUCT DEVELOPMENT",
    title: "Multi-tenant platforms",
    highlightText: "built to scale.",
    subtitle: "From first customer to thousandth on the same architecture. We build multi-tenant SaaS products with the hard parts solved upfront: tenant isolation, subscription billing, RBAC, and usage metering.",
    section2Headline: "SaaS architecture solved\nfrom day one.",
    section2Subtitle: "Whether you're launching a new software platform or rebuilding one that's buckling under scale, we bring proven SaaS architectural patterns that protect security and revenue.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Server",
        title: "Tenant Isolation",
        desc: "Complete multi-tenant database isolation, custom workspace domains, and enterprise security boundaries.",
      },
      {
        icon: "CreditCard",
        title: "Billing & Payments",
        desc: "Integrated Stripe and Merchant-of-Record billing with recurring subscriptions and automated invoicing.",
      },
      {
        icon: "Lock",
        title: "Role Permissions",
        desc: "Granular role-based access control, fine-grained team permissions, and detailed organization administration.",
      },
      {
        icon: "BarChart3",
        title: "Usage Analytics",
        desc: "Real-time tenant usage tracking, automated metered billing triggers, and comprehensive platform telemetry.",
      }
    ],
    featureRows: [
      {
        title: "Multi-tenant data isolation",
        description: "Robust database schema strategies, tenant scoping middleware, and row-level security ensuring strict multi-tenant isolation.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Subscription billing & usage metering",
        description: "Automated subscription lifecycle management, usage-based pricing models, upgraded seats, and prorated billing.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "White-label & custom domains",
        description: "Custom domain mapping, SSL provisioning, and custom branding allowing your enterprise customers to white-label your SaaS.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Admin consoles & onboarding flows",
        description: "Internal admin control panels, tenant management tools, and friction-free onboarding workflows that increase activation.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SAAS PLATFORM",
      title: "Scalable Multi-Tenant SaaS Architecture",
      description: "Built from first customer to thousandth on the same solid architecture, with tenant isolation and billing solved upfront.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your SaaS platform →",
  },

  // 1.5 E-Commerce & Shopify Development
  "ecommerce-shopify-development": {
    slug: "ecommerce-shopify-development",
    badge: "E-COMMERCE & SHOPIFY DEVELOPMENT",
    title: "Storefronts engineered",
    highlightText: "to generate revenue.",
    subtitle: "Beautiful stores are common. Stores that convert are engineered. We build and optimize e-commerce experiences on Shopify, WooCommerce, and headless custom stacks.",
    section2Headline: "Commerce built for speed,\nscale, and conversion.",
    section2Subtitle: "From catalogue architecture and checkout optimization to multi-currency payment gateways and seamless ERP integrations, we build online stores that scale.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Layout",
        title: "Custom Storefronts",
        desc: "Custom Shopify Liquid and headless storefronts engineered for fast catalog browsing, checkout ease, and sales.",
      },
      {
        icon: "Zap",
        title: "Checkout Tuning",
        desc: "Optimized single-page checkout flows, localized multi-currency support, regional gateways, and cart recovery.",
      },
      {
        icon: "RefreshCw",
        title: "Inventory & ERP",
        desc: "Seamless real-time synchronization between digital storefronts, multi-warehouse stock levels, and POS systems.",
      },
      {
        icon: "Search",
        title: "Catalog Migration",
        desc: "Frictionless platform migrations preserving historical customer records, product catalogs, and SEO ranking.",
      }
    ],
    featureRows: [
      {
        title: "Custom Shopify Liquid & Headless storefronts",
        description: "Tailored Shopify Plus themes and Next.js Hydrogen storefronts designed for extreme speed and high mobile conversion rates.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Product catalogue & inventory architecture",
        description: "Scalable variant structures, complex matrix bundling, dynamic pricing rules, and real-time multi-warehouse stock management.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Regional payment gateways & BNPL setup",
        description: "Seamless integration of Stripe, Razorpay, Telr, Network International, plus Buy-Now-Pay-Later (Tabby, Tamara).",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Platform migration with zero SEO loss",
        description: "Expert migration from WooCommerce or legacy engines to Shopify Plus with full SEO redirect mapping and zero downtime.",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "E-COMMERCE ENGINE",
      title: "Storefronts Engineered to Convert & Scale",
      description: "Commerce platforms covering catalogue architecture, checkout performance, payment gateways, and post-purchase flows.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's engineer your e-commerce store →",
  },

  // 1.6 Marketplace & Directory Platforms
  "marketplace-directory-platforms": {
    slug: "marketplace-directory-platforms",
    badge: "MARKETPLACE PLATFORMS",
    title: "Two-sided marketplaces,",
    highlightText: "built for high volume.",
    subtitle: "Two-sided platforms have twice the complexity. We handle vendor onboarding, commission logic, split payouts, moderation, and discovery search experiences.",
    section2Headline: "End-to-end multi-vendor\nplatform engineering.",
    section2Subtitle: "Whether building a retail marketplace, service directory, or property listing platform, we build the vendor verification, escrow, search, and payout tools needed to succeed.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Users",
        title: "Vendor Portals",
        desc: "Streamlined vendor registration, self-serve catalog management, automated verification, and dedicated portals.",
      },
      {
        icon: "CreditCard",
        title: "Commission Payouts",
        desc: "Automated multi-party split payouts, platform commission calculations, escrow handling, and tax engines.",
      },
      {
        icon: "MapPin",
        title: "Advanced Discovery",
        desc: "Lightning-fast elastic search, multi-facet product filtering, interactive map geolocation, and instant queries.",
      },
      {
        icon: "ShieldCheck",
        title: "Trust & Moderation",
        desc: "Automated dispute resolution workflows, verified customer reviews, fraud detection rules, and quality control.",
      }
    ],
    featureRows: [
      {
        title: "Vendor onboarding & verification portals",
        description: "Self-service seller portals with document verification, listing creation tools, inventory management, and real-time earnings analytics.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Automated commission & split payouts",
        description: "Flexible marketplace monetization models: percentage commissions, fixed listing fees, subscription tiers, and automated multi-party bank payouts.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Geo-location & faceted search discovery",
        description: "Instant faceted search, interactive map clustering, proximity filtering, and AI-assisted listing recommendations.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Dispute resolution & review moderation",
        description: "Built-in buyer/seller messaging, review verification algorithms, escrow holds, and admin dispute handling workflows.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MARKETPLACE ENGINE",
      title: "Scalable Two-Sided Marketplace Architecture",
      description: "Marketplaces, directories, and multi-vendor platforms handling onboarding, commission split payouts, and fast discovery.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your marketplace platform →",
  },

  // 1.7 Custom Portals
  "custom-portals": {
    slug: "custom-portals",
    badge: "ENTERPRISE PORTALS",
    title: "Give every stakeholder",
    highlightText: "their own front door.",
    subtitle: "Role-aware portals that put the right information in front of the right people: customers checking orders, partners submitting claims, employees filing requests.",
    section2Headline: "Secure, role-based portals\nbuilt for real adoption.",
    section2Subtitle: "Most internal portals fail because they feel clunky or slow. We design role-aware portals with modern UX, granular access control, and seamless database sync.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Shield",
        title: "Granular Access",
        desc: "Zero-trust authentication, multi-factor verification, and strict role permissions protecting sensitive files.",
      },
      {
        icon: "Users",
        title: "Unified Hubs",
        desc: "Dedicated user views for customers, external suppliers, and internal staff consolidating inquiries and tickets.",
      },
      {
        icon: "FileText",
        title: "Digital Workflows",
        desc: "Self-service document uploads, automated digital signature workflows, and instant task alerts for users.",
      },
      {
        icon: "History",
        title: "Compliance Trails",
        desc: "Complete immutable audit trails, comprehensive activity logging, and exportable regulatory reporting suites.",
      }
    ],
    featureRows: [
      {
        title: "Customer & Client Portals",
        description: "Self-service portals enabling clients to track project statuses, view invoices, download deliverables, and communicate securely.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Vendor & Partner Ecosystem Portals",
        description: "Collaborative portals for suppliers and partners to manage inventory claims, submit compliance docs, and track payouts.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Employee & Operations Portals",
        description: "Internal team portals streamlining HR requests, expense approvals, document repositories, and operational workflows.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Audit Logging & Compliance Dashboards",
        description: "SOC2/GDPR compliance-ready audit trails, granular permissions, and automated activity log reporting.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "ENTERPRISE PORTAL",
      title: "Secure, Scalable Portal Architecture",
      description: "Built to handle real concurrent users and sensitive data from day one, with security hardening and monitoring out of the box.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your enterprise portal →",
  },

  // 1.8 API & Systems Integration
  "api-systems-integration": {
    slug: "api-systems-integration",
    badge: "API & SYSTEMS INTEGRATION",
    title: "Make your software systems",
    highlightText: "talk to each other.",
    subtitle: "Most companies don't need new software; they need their existing tools connected. We integrate ERPs, CRMs, payment providers, and databases into a coherent flow.",
    section2Headline: "Eliminate duplicate data entry\nand manual handoffs.",
    section2Subtitle: "We build reliable webhook pipelines, middleware bridges, and REST/GraphQL API layers so information moves automatically between all your business platforms.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Code",
        title: "API Engineering",
        desc: "RESTful and GraphQL API architectures built with clean OpenAPI specs, strict type validation, and docs.",
      },
      {
        icon: "Network",
        title: "System Bridges",
        desc: "Bi-directional data synchronization between modern web apps, legacy ERPs, payment gateways, and third-party tools.",
      },
      {
        icon: "Zap",
        title: "Event Pipelines",
        desc: "High-throughput webhook infrastructure, message queue brokers, and asynchronous event streams for real-time sync.",
      },
      {
        icon: "CheckCircle",
        title: "Data Integrity",
        desc: "Automated payload validation, schema consistency checks, robust retry policies, and scheduled reconciliations.",
      }
    ],
    featureRows: [
      {
        title: "ERP, CRM & Finance System Integrations",
        description: "Seamless integration between core enterprise platforms, updating accounting, inventory, and customer records instantly.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Webhook & Event Pipeline Architecture",
        description: "Real-time event processing pipelines that trigger multi-system updates the moment a customer action occurs.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Legacy System Middleware Bridges",
        description: "Custom API layers wrapping legacy database servers, making old software accessible to modern mobile and web apps.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Data Synchronization & Reconciliation",
        description: "Automated verification routines ensuring all integrated systems maintain identical data without manual auditing.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "API ENGINE",
      title: "Connected Systems Architecture",
      description: "We connect ERPs, CRMs, logistics tools, and internal databases into a coherent flow, eliminating duplicate data entry.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's connect your systems →",
  },

  // 1.9 Cloud, DevOps & Hosting
  "cloud-devops-hosting": {
    slug: "cloud-devops-hosting",
    badge: "CLOUD & DEVOPS ENGINEERING",
    title: "Infrastructure that stays up,",
    highlightText: "whatever the traffic.",
    subtitle: "Shipping is easy. Staying live under load is the job. We architect, deploy, and maintain cloud infrastructure on AWS, GCP, Azure, and Vercel.",
    section2Headline: "Zero-downtime CI/CD\nand auto-scaling infrastructure.",
    section2Subtitle: "We build continuous integration pipelines, automated monitoring, and backup strategies from day one, auditing and hardening your existing servers.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Cloud",
        title: "Cloud Architecture",
        desc: "Scalable cloud provisioning on AWS, Google Cloud, and Azure using Infrastructure-as-Code for rapid deployment.",
      },
      {
        icon: "GitBranch",
        title: "CI/CD Pipelines",
        desc: "Automated build, test, and release pipelines ensuring zero-downtime rollouts and continuous delivery cycles.",
      },
      {
        icon: "Activity",
        title: "System Monitoring",
        desc: "Real-time metrics, server health telemetry, log aggregation, and automated incident alerts keeping sites up.",
      },
      {
        icon: "Shield",
        title: "Disaster Recovery",
        desc: "Automated database backups, multi-region failover strategies, and ongoing cloud cost optimization reviews.",
      }
    ],
    featureRows: [
      {
        title: "Multi-cloud architecture & provisioning",
        description: "Cloud infrastructure setup tailored for performance and cost efficiency across AWS, Google Cloud, and Azure environments.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Automated CI/CD & container deployments",
        description: "Docker containerization, Kubernetes orchestration, and automated CI/CD pipelines deploying production updates safely.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Real-time monitoring & log aggregation",
        description: "Centralized logging, APM telemetry tracking, and automated alerts catching performance bottlenecks before users do.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Security hardening & cost optimization",
        description: "Comprehensive cloud security audits, DDoS mitigation, compliance hardening, and infrastructure cost optimization.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "CLOUD ENGINE",
      title: "Infrastructure Built to Stay Live Under Load",
      description: "Cloud architecture, CI/CD deployment pipelines, monitoring, and disaster recovery strategies in place from day one.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's harden your cloud infrastructure →",
  },

  // 1.10 Legacy Modernization
  "legacy-modernization": {
    slug: "legacy-modernization",
    badge: "LEGACY MODERNIZATION",
    title: "Bring old systems",
    highlightText: "into the modern era.",
    subtitle: "The system still works. It just can't do anything new. We modernize aging applications without stopping the business, migrating in phases with non-negotiable data integrity.",
    section2Headline: "Refactor, replace, and extend\nwithout business downtime.",
    section2Subtitle: "We assess your legacy codebase and infrastructure to build phased migration roadmaps that preserve business logic while giving your team modern speed and mobile capabilities.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Search",
        title: "System Audit",
        desc: "In-depth legacy codebase and database auditing identifying architecture bottlenecks and technical debt.",
      },
      {
        icon: "GitCommit",
        title: "Phased Roadmaps",
        desc: "Step-by-step modular migration strategies replacing legacy core services incrementally with zero downtime.",
      },
      {
        icon: "Database",
        title: "Data Migration",
        desc: "Reliable ETL migration scripts, automated data transformation pipelines, and thorough integrity audits.",
      },
      {
        icon: "Smartphone",
        title: "Modern Frontends",
        desc: "Creating intuitive web and mobile interfaces that unlock legacy database potential with modern usability.",
      }
    ],
    featureRows: [
      {
        title: "Codebase & infrastructure audits",
        description: "Thorough architectural evaluation of legacy monoliths, identifying what to keep, what to refactor, and what to rebuild.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Phased migration with zero downtime",
        description: "Deconstructing legacy applications into modular micro-services or modern Next.js frontends without interrupting active operations.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "API wrappers over legacy databases",
        description: "Building modern REST/GraphQL API layers over legacy SQL/Oracle databases without requiring full core rewrites.",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Interface modernization & mobile enablement",
        description: "Replacing outdated desktop user interfaces with responsive web and mobile apps that employees love to use.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MODERNIZATION ENGINE",
      title: "Bring Legacy Systems Into the Modern Era",
      description: "We modernize aging applications without stopping the business, assessing what to refactor or replace in seamless phases.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's modernize your legacy software →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 2: ARTIFICIAL INTELLIGENCE (8 Services)
  // ═══════════════════════════════════════════════════════════════

  // 2.1 Applied AI & ML
  "applied-ai-ml": {
    slug: "applied-ai-ml",
    badge: "APPLIED AI & ML",
    title: "Custom models, built & evaluated",
    highlightText: "against your actual business metric.",
    subtitle: "Not generic \"we do AI\", real engineering across the full stack a production system needs, from raw data through to the interface people actually use.",
    section2Headline: "AI that earns its keep\nin production.",
    section2Subtitle: "We identify where AI creates genuine value in your operation, then build and deploy models for forecasting, classification, recommendation, and anomaly detection.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "LineChart",
        title: "Feasibility Study",
        desc: "Analyzing your datasets and business metrics upfront so you understand the exact ROI before model development.",
      },
      {
        icon: "Brain",
        title: "Predictive Models",
        desc: "Custom machine learning models for demand forecasting, customer churn prediction, and anomaly detection.",
      },
      {
        icon: "Eye",
        title: "Computer Vision",
        desc: "Document classification, automated image inspection, and high-speed OCR pipelines processing business data.",
      },
      {
        icon: "Cpu",
        title: "Production MLOps",
        desc: "Continuous telemetry monitoring, concept drift detection, and automated retraining pipelines in production.",
      }
    ],
    featureRows: [
      {
        title: "Predictive models for demand & risk",
        description: "Tailored machine learning algorithms trained on your historical data to forecast inventory needs, detect fraud, and reduce churn.",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Personalization & recommendation engines",
        description: "Real-time recommendation systems driving higher average order value and customer engagement across web and mobile platforms.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Computer vision & document OCR",
        description: "High-accuracy visual classification and automated OCR document extraction processing invoices, IDs, and forms.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Production MLOps & model retraining",
        description: "Robust MLOps infrastructure ensuring your models stay accurate over time with automated drift alerts and continuous retraining.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCTION ML",
      title: "Applied Machine Learning That Delivers Outcomes",
      description: "We deploy machine learning and language models against specific business problems with measurable outcomes, not demos.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's scope your AI model →",
  },

  // 2.2 Conversational AI & Agents
  "ai-chatbot-automation": {
    slug: "ai-chatbot-automation",
    badge: "CONVERSATIONAL AI & AGENTS",
    title: "Agents that act,",
    highlightText: "not just answer.",
    subtitle: "A chatbot answers questions. An agent completes the task. We build LLM-powered assistants grounded in your knowledge base and connected to your live business systems.",
    section2Headline: "Intelligent agents that check inventory,\nbook meetings & raise tickets.",
    section2Subtitle: "Rather than reciting generic FAQ text, our AI agents execute actions inside your CRM, ERP, and databases with built-in guardrails and human escalation paths.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "BookOpen",
        title: "RAG Architecture",
        desc: "Retrieval-Augmented Generation indexing your entire internal product library, PDFs, and documentation accurately.",
      },
      {
        icon: "Bot",
        title: "Autonomous Agents",
        desc: "Task-oriented AI agents capable of querying live databases, looking up order statuses, and scheduling bookings.",
      },
      {
        icon: "Share2",
        title: "Omnichannel Deploy",
        desc: "Seamless deployment across web chat widgets, mobile apps, WhatsApp Business, and internal Slack channels.",
      },
      {
        icon: "ShieldAlert",
        title: "Human Escalation",
        desc: "Strict conversational guardrails, automated hallucination detection, and smooth real-time handoff to staff.",
      }
    ],
    featureRows: [
      {
        title: "Retrieval-augmented AI grounded in your data",
        description: "Secure RAG pipelines that index your internal documentation, knowledge base, and product specs for accurate, hallucination-free answers.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Action-oriented autonomous agents",
        description: "AI assistants with function-calling capabilities that interact directly with your APIs to complete tasks, book schedules, and process requests.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "WhatsApp, Web & Omnichannel deployment",
        description: "Omnichannel AI agents that maintain full conversation history whether a customer chats on your website or WhatsApp.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Analytics, guardrails & continuous tuning",
        description: "Comprehensive conversation analytics dashboards, sentiment tracking, and prompt optimization tooling.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "AI AGENT ENGINE",
      title: "LLM Agents Grounded in Your Systems",
      description: "LLM-powered assistants connected to your live business systems that check inventory, book appointments, or raise tickets.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's deploy your AI agents →",
  },

  // 2.3 AI Commerce Assistants
  "ai-commerce-assistants": {
    slug: "ai-commerce-assistants",
    badge: "AI COMMERCE ASSISTANTS",
    title: "A personal shopper on",
    highlightText: "every single product page.",
    subtitle: "Most abandoned carts are unanswered questions. Embed an AI assistant into your storefront that understands your catalogue and guides shoppers to the right purchase.",
    section2Headline: "Recover sales that generic\nFAQ pages always lose.",
    section2Subtitle: "Our AI commerce assistants handle sizing questions, product comparisons, compatibility objections, and cross-selling in the exact moment queries arise.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "ShoppingBag",
        title: "Catalog Discovery",
        desc: "Deep catalog integration enabling natural language product recommendations, compatibility checks, and search.",
      },
      {
        icon: "HelpCircle",
        title: "Objection Handling",
        desc: "Accurate, instant answers regarding shipping timelines, return policies, sizing dimensions, and payment options.",
      },
      {
        icon: "Zap",
        title: "Checkout Recovery",
        desc: "Intelligent abandoned cart recovery prompts, timely stock alerts, and personalized incentives boosting orders.",
      },
      {
        icon: "Globe",
        title: "Global Shopping",
        desc: "Fluent multi-language shopping guidance across English, Arabic, and regional dialects for all shoppers.",
      }
    ],
    featureRows: [
      {
        title: "Catalogue-aware product discovery",
        description: "Natural-language product discovery engines that understand customer preferences and recommend exact product matches.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Sizing & compatibility guidance",
        description: "Instant guidance on size, compatibility, ingredients, and specs, removing pre-purchase doubt.",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Cart recovery & intelligent upsells",
        description: "AI shopper prompts that re-engage hesitant buyers before they drop off, boosting conversion rate.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Multilingual shopping experiences",
        description: "Bilingual shopping in Arabic and English, tailored for GCC e-commerce growth.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "COMMERCE AI",
      title: "AI Personal Shoppers for E-Commerce",
      description: "Embedded AI assistants that understand your catalogue and guide shoppers to the right purchase in real time.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's add AI to your online store →",
  },

  // 2.4 Hybrid AI Support Desk
  "hybrid-ai-support-desk": {
    slug: "hybrid-ai-support-desk",
    badge: "HYBRID AI SUPPORT DESK",
    title: "AI handles volume.",
    highlightText: "Humans handle nuance.",
    subtitle: "Fully automated support frustrates customers. Fully human support doesn't scale. The answer is both: AI resolves routine queries, instantly handing off complex tickets with full context.",
    section2Headline: "Speed up ticket resolution\nwithout sacrificing human care.",
    section2Subtitle: "Agents get AI-drafted replies and instant internal knowledge retrieval, making every human interaction faster and better informed.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Route",
        title: "Intelligent Triage",
        desc: "Confidence-based query routing resolving repetitive customer inquiries instantly while escalating complex tickets.",
      },
      {
        icon: "UserCheck",
        title: "Human Handoff",
        desc: "Instant transition to human support agents complete with full transcripts, detected sentiment, and summaries.",
      },
      {
        icon: "Sparkles",
        title: "Agent Copilot",
        desc: "Real-time AI suggested replies, auto-generated ticket summaries, and relevant knowledge base lookup for agents.",
      },
      {
        icon: "Inbox",
        title: "Unified Inbox",
        desc: "Consolidated customer service hub streaming incoming email, web chat, WhatsApp, and social media tickets.",
      }
    ],
    featureRows: [
      {
        title: "Confidence-based AI routing",
        description: "AI resolves routine queries and intelligently routes edge cases to the right human specialist.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Seamless human handoff with full context",
        description: "Human agents receive a concise AI summary of the issue the second they take over a ticket.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "AI Copilot for human agents",
        description: "Drafting suggested responses, searching knowledge bases, and auto-filling resolution codes.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Unified omnichannel inbox",
        description: "Managing tickets across Web chat, WhatsApp Business, email, and social media from a single queue.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SUPPORT AI",
      title: "Hybrid AI Support Desk Infrastructure",
      description: "AI resolves routine queries instantly and hands off to human agents with full conversation context.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's scale your support desk →",
  },

  // 2.5 Document Intelligence & Automated Reporting
  "document-intelligence": {
    slug: "document-intelligence",
    badge: "DOCUMENT INTELLIGENCE",
    title: "Turn documents into data,",
    highlightText: "and data into documents.",
    subtitle: "If your team is retyping information from PDFs, that's an automation waiting to happen. We extract structured data from invoices and generate pixel-perfect reports automatically.",
    section2Headline: "Extract, generate, and typeset\ndocuments in seconds.",
    section2Subtitle: "Two directions, one capability: automated OCR data extraction from scanned contracts and forms, plus automated generation of brand-consistent PDF proposals.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "FileSearch",
        title: "OCR Extraction",
        desc: "High-accuracy text and tabular data extraction from invoices, purchase orders, IDs, and scanned compliance files.",
      },
      {
        icon: "FileText",
        title: "Document Creation",
        desc: "Produce pixel-perfect PDF agreements, proposals, invoices, and certificates populated directly from records.",
      },
      {
        icon: "CheckSquare",
        title: "Data Verification",
        desc: "Automated business logic rules cross-checking tax numbers, signature lines, mathematical totals, and fields.",
      },
      {
        icon: "Clock",
        title: "Automated Reports",
        desc: "Scheduled daily, weekly, and monthly PDF analytical summaries generated and distributed automatically to teams.",
      }
    ],
    featureRows: [
      {
        title: "Automated invoice & contract data extraction",
        description: "Intelligent document processing pipelines converting PDF invoices and contracts into structured database JSON.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Dynamic PDF proposal & report generation",
        description: "Generates custom typeset PDF quotes, proposals, and certificates automatically from your CRM input.",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "OCR for scanned & handwritten forms",
        description: "Advanced OCR pipelines processing historical physical paperwork, legal records, and handwritten forms.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Scheduled multi-language reporting",
        description: "Automated scheduled reporting pipelines producing branded multilingual PDFs in seconds.",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "DOCUMENT AI",
      title: "Automated Document Processing & Reporting",
      description: "Extract structured data from invoices and contracts, or generate pixel-perfect proposals automatically from live data.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's automate your document workflow →",
  },

  // 2.6 Multilingual AI Solutions
  "multilingual-ai-solutions": {
    slug: "multilingual-ai-solutions",
    badge: "MULTILINGUAL AI SOLUTIONS",
    title: "Arabic, Malayalam, & beyond,",
    highlightText: "done with true cultural fluency.",
    subtitle: "Machine translation isn't localization. We build AI systems that work correctly in languages most vendors treat as an afterthought, with proper RTL layout and cultural adaptation.",
    section2Headline: "Genuine regional fluency,\nnot literal translation.",
    section2Subtitle: "Built for GCC-facing businesses and Indian regional market platforms, with correct font pipelines, script rendering, and culturally adapted content generation.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "AlignRight",
        title: "Bilingual Design",
        desc: "Native Arabic right-to-left layout engineering, bidirectional font optimization, and cultural alignment for Gulf.",
      },
      {
        icon: "Languages",
        title: "Regional Support",
        desc: "Comprehensive localization and natural language processing across Hindi, Malayalam, Tamil, and Asian tongues.",
      },
      {
        icon: "Bot",
        title: "Multilingual Chat",
        desc: "AI assistants capable of seamlessly switching between languages mid-conversation while maintaining accuracy.",
      },
      {
        icon: "Globe",
        title: "Content Adaptation",
        desc: "Culturally nuanced copy adaptation, localized currency formatting, and region-specific regulatory adherence.",
      }
    ],
    featureRows: [
      {
        title: "Arabic RTL layout & bilingual web experiences",
        description: "Proper right-to-left design systems ensuring Arabic interfaces look native and beautiful.",
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Malayalam & Indian regional language NLP",
        description: "Natural language processing tailored for regional Indian languages and multi-script input.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Multilingual voice & chatbot agents",
        description: "Voice and text AI agents that switch languages fluidly based on user speech input.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Embedded font & script rendering pipelines",
        description: "Specialized font engineering preventing script distortion or rendering glitches across devices.",
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "MULTILINGUAL AI",
      title: "Regional AI Solutions Built for Genuine Fluency",
      description: "AI systems built with proper right-to-left layout, correct script rendering, and cultural adaptation.",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your multilingual AI solution →",
  },

  // 2.7 Data Engineering
  "data-engineering": {
    slug: "data-engineering",
    badge: "DATA ENGINEERING & DATA SCIENCE",
    title: "Turn messy data into",
    highlightText: "answers you can trust.",
    subtitle: "We turn scattered, siloed data into something your team can query, trust, and act on using applied data science and custom dashboards to help you predict outcomes.",
    section2Headline: "Data you can\nactually rely on.",
    section2Subtitle: "The only thing worse than no data is data you can't trust. We build systems with quality checks and governance built in, so your reports work from a single source of truth.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "HelpCircle",
        title: "Discovery Scoping",
        desc: "Identifying core business questions and operational KPIs first to architect clean, purposeful data pipelines.",
      },
      {
        icon: "GitCommit",
        title: "ETL/ELT Pipelines",
        desc: "Automated extraction and transformation pipelines streaming data from databases, SaaS tools, and APIs reliably.",
      },
      {
        icon: "Database",
        title: "Modern Lakehouse",
        desc: "Centralized, query-optimized storage architectures supporting both real-time analytical reporting and AI models.",
      },
      {
        icon: "BarChart3",
        title: "Executive Reports",
        desc: "Interactive business intelligence dashboards providing live metrics, trend projections, and automated alerts.",
      }
    ],
    featureRows: [
      {
        title: "ETL & ELT data pipeline engineering",
        description: "Automated data ingestion pipelines that extract data from all your SaaS tools and consolidate it securely.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Data warehouse & lakehouse architecture",
        description: "Structuring BigQuery, Snowflake, or PostgreSQL warehouses for lightning-fast analytical queries.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Data cleansing & quality monitoring",
        description: "Automated deduplication, data cleaning, and anomaly detection ensuring high data integrity.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "BI dashboards & real-time streaming",
        description: "Interactive real-time dashboards giving executives clarity on KPIs and operations.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "DATA PIPELINES",
      title: "Data Engineering & Analytics Architecture",
      description: "We build pipelines and warehouses that consolidate data from every system into a single trustworthy source.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let me clean up your data architecture →",
  },

  // 2.8 Voice AI & IVR Systems
  "voice-ai-ivr-systems": {
    slug: "voice-ai-ivr-systems",
    badge: "VOICE AI & IVR SYSTEMS",
    title: "Phone support without",
    highlightText: "the hold music.",
    subtitle: "Callers hang up on queues. They don't hang up on answers. Intelligent voice systems that answer inbound calls, understand natural speech in multiple languages, and resolve requests.",
    section2Headline: "Replace rigid press-one menus\nwith real natural conversation.",
    section2Subtitle: "Our voice AI agents understand natural speech in English, Arabic, and Malayalam, resolving routine requests outright and routing complex calls with context already gathered.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "PhoneCall",
        title: "Conversational IVR",
        desc: "Replace rigid touch-tone phone trees with natural voice interactions understanding spoken intent and context.",
      },
      {
        icon: "Mic",
        title: "Multilingual Voice",
        desc: "Accurate voice synthesis and recognition in natural English, Arabic, and regional dialects with brand tone.",
      },
      {
        icon: "GitFork",
        title: "Smart Call Routing",
        desc: "Intelligent routing that directs high-priority callers to specialized agents while resolving common inquiries.",
      },
      {
        icon: "FileText",
        title: "CRM Auto-Logging",
        desc: "Automated call recording, transcription, key takeaway summaries, and direct CRM ticket updates post-call.",
      }
    ],
    featureRows: [
      {
        title: "Conversational IVR with natural speech recognition",
        description: "Inbound call processing that lets callers speak naturally and receive immediate automated assistance.",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Multilingual voice AI in Arabic & Malayalam",
        description: "Fluent voice interactions tailored for GCC healthcare, logistics, and regional service desks.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Intelligent routing & callback scheduling",
        description: "Zero hold times: automated callback scheduling when queue volumes spike during peak hours.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "CRM integration & call transcription",
        description: "Transcribes phone conversations, extracts key action items, and syncs summaries to customer records.",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "VOICE AI ENGINE",
      title: "Intelligent Multilingual Voice AI Systems",
      description: "Intelligent voice systems that answer calls, understand natural speech, and route everything with context gathered.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's automate your phone support →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 3: AUTOMATION (3 Services)
  // ═══════════════════════════════════════════════════════════════

  // 3.1 Business Process Automation
  "business-automation": {
    slug: "business-automation",
    badge: "BUSINESS AUTOMATION",
    title: "We map the manual work.",
    highlightText: "Then we make it disappear.",
    subtitle: "We identify repetitive, manual workflows and rebuild them as automated systems, freeing your team for work that actually needs a person.",
    section2Headline: "Automation built on\nhow you actually work.",
    section2Subtitle: "Generic automation templates break the moment your process doesn't fit the template. We document how your team works first, then build the system around that.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Map",
        title: "Process Discovery",
        desc: "Comprehensive workflow mapping before development begins, identifying manual bottlenecks and automation areas.",
      },
      {
        icon: "Users",
        title: "End-to-End Build",
        desc: "One dedicated engineering team handling database architecture, integrations, user interfaces, and notifications.",
      },
      {
        icon: "Wrench",
        title: "Best-Fit Tooling",
        desc: "Purpose-built combinations of custom code, enterprise webhooks, and robust queue workers designed for stability.",
      },
      {
        icon: "Cpu",
        title: "Ecosystem Wiring",
        desc: "Seamless integration into your existing email systems, ERPs, accounting platforms, and databases smoothly.",
      }
    ],
    featureRows: [
      {
        title: "Workflow mapping before any build",
        description: "We document the actual process, every handoff, every spreadsheet someone maintains by hand, so the automation replaces the real workflow.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Built into the tools you already use",
        description: "Automations that live inside your existing CRM, email, or internal systems, instead of forcing your team onto a new platform.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Freeing your team for real work",
        description: "The goal isn't fewer people, it's less time spent on copy-paste tasks and more time on decisions that actually move the business.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Long-term partnership & support",
        description: "As your business grows, so do your workflows. We stay on to extend the automation as new needs come up.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "WORKFLOW ENGINE",
      title: "Automation Built Around Your Actual Workflow",
      description: "Not off-the-shelf recipes, automations mapped to how your team genuinely works, then built to fit.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's find out what's eating your team's time →",
  },

  // 3.2 Workflow & Integration Automation
  "workflow-integration-automation": {
    slug: "workflow-integration-automation",
    badge: "WORKFLOW AUTOMATION",
    title: "Connect your SaaS tools",
    highlightText: "into one seamless flow.",
    subtitle: "Your tools are fine. The gaps between them are the problem. We wire your existing applications together so information moves automatically without copying and pasting.",
    section2Headline: "Bridging the gaps\nbetween your software.",
    section2Subtitle: "A new lead in your CRM triggers the onboarding sequence, updates the finance system, and notifies the account manager automatically with full monitoring.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Zap",
        title: "Automated Triggers",
        desc: "Event-driven workflows linking marketing platforms, sales funnels, and customer databases into automated operations.",
      },
      {
        icon: "Network",
        title: "Deep System Wiring",
        desc: "Bi-directional data sync bridging Salesforce, HubSpot, SAP, NetSuite, and internal databases with sub-second speed.",
      },
      {
        icon: "AlertTriangle",
        title: "Failure Resilience",
        desc: "Automated exception handling, intelligent retry policies, and real-time engineer alerting preventing lost records.",
      },
      {
        icon: "Activity",
        title: "Flow Monitoring",
        desc: "Centralized execution telemetry dashboard displaying transaction volumes, processing latencies, and statuses.",
      }
    ],
    featureRows: [
      {
        title: "Cross-application automated handoffs",
        description: "Connecting your sales, operations, and accounting software into automated trigger pipelines.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "CRM, ERP & accounting integration",
        description: "Eliminating manual data transfer between customer records, invoice creation, and inventory updates.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Custom automation logic beyond no-code limits",
        description: "When Zapier or Make hit complexity limits, we build custom Python/Node.js micro-services.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Failure alerting & retry mechanisms",
        description: "Resilient integration architecture ensuring no lead or transaction is ever lost due to API downtime.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "INTEGRATION ENGINE",
      title: "Workflow & Integration Automation",
      description: "We wire your existing applications together so information moves automatically between all your business platforms.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's connect your SaaS tools →",
  },

  // 3.3 WhatsApp & Social Commerce Automation
  "whatsapp-social-commerce-automation": {
    slug: "whatsapp-social-commerce-automation",
    badge: "WHATSAPP & SOCIAL COMMERCE",
    title: "Sell and serve where your",
    highlightText: "customers already are.",
    subtitle: "In this region, business happens on WhatsApp. Your systems should too. We build automated commerce and messaging on WhatsApp Business API, Instagram, and Facebook.",
    section2Headline: "Catalogue browsing, orders & payments\ndirectly inside WhatsApp chat.",
    section2Subtitle: "Turn social channels into sales engines: automated catalogue browsing, order placement, payment links, and broadcast re-engagement campaigns connected to live CRM.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "CheckCircle",
        title: "Meta Verification",
        desc: "Official WhatsApp Business API provisioning, green checkmark verification support, and template management.",
      },
      {
        icon: "ShoppingBag",
        title: "In-Chat Commerce",
        desc: "Interactive product catalogs, instant cart creation, and secure in-chat payment links enabling quick checkout.",
      },
      {
        icon: "Bell",
        title: "Delivery Updates",
        desc: "Automated order confirmations, real-time shipment tracking alerts, and scheduled reminder messages on mobile.",
      },
      {
        icon: "Send",
        title: "Audience Broadcasts",
        desc: "Targeted marketing broadcasts, automated customer support funnels, and lead qualification sequences for high open rates.",
      }
    ],
    featureRows: [
      {
        title: "WhatsApp Business API & green tick setup",
        description: "Official Meta API integration allowing high-volume message throughput and multi-agent customer support.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "In-chat product catalogues & payment links",
        description: "Interactive product carousels and instant payment gateway links right inside chat conversations.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Automated order confirmation & delivery updates",
        description: "Triggering automated shipping alerts, tracking links, and feedback requests when orders update in your ERP.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Instagram DM & broadcast marketing",
        description: "Converting Instagram comments into private DM sales conversations and sending targeted broadcast offers.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "CHAT COMMERCE",
      title: "WhatsApp & Social Commerce Automation Engine",
      description: "Automated commerce on WhatsApp API, Instagram, and Facebook: catalogue browsing, order placement, and payments.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's automate your WhatsApp commerce →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 4: PLATFORMS & SOLUTIONS (6 Services)
  // ═══════════════════════════════════════════════════════════════

  // 4.1 Learning Management & Live Classrooms
  "learning-management-systems": {
    slug: "learning-management-systems",
    badge: "LEARNING MANAGEMENT SYSTEMS",
    title: "Teach, assess, and certify",
    highlightText: "in one complete platform.",
    subtitle: "Recorded video is a library. Live teaching is a school. Complete learning platforms combining course delivery, live virtual classrooms, assessment, and certification.",
    section2Headline: "Built for institutions running\nreal academic & corporate cohorts.",
    section2Subtitle: "Engineered for training institutes, universities, coaching centres, and corporate teams needing attendance tracking, proctored exams, grading, and parent portals.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "BookOpen",
        title: "Course Authoring",
        desc: "Intuitive video lesson builders, structured curriculum modules, rich multimedia embeds, and resource downloads.",
      },
      {
        icon: "Video",
        title: "Virtual Classrooms",
        desc: "Embedded WebRTC live video classrooms, collaborative whiteboards, breakout rooms, and presentation suites.",
      },
      {
        icon: "FileText",
        title: "Testing & Exams",
        desc: "Automated quiz grading, randomized question banks, timed examination windows, and anti-cheating protocols.",
      },
      {
        icon: "Award",
        title: "Student Portals",
        desc: "Automated course certificate generation, gamified progress tracking, grade reports, and parent communications.",
      }
    ],
    featureRows: [
      {
        title: "Course authoring & video delivery",
        description: "Structured lesson modules, video streaming with adaptive bitrate, and interactive quiz checkpoints.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Live interactive virtual classrooms",
        description: "High-definition live video classes with breakout rooms, digital whiteboards, and auto-archived recordings.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Assignments, quizzes & automated grading",
        description: "Comprehensive testing engine supporting multiple choice, essay submissions, and automated gradebook sync.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Fee collection & parent portals",
        description: "Integrated online tuition fee collection, attendance notifications, and parent monitoring portals.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "EDTECH PLATFORM",
      title: "Complete Learning Management Architecture",
      description: "Complete learning platforms combining course delivery, live virtual classrooms, assessment, and certification.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your learning platform →",
  },

  // 4.2 Video Conferencing & Meeting Platforms
  "video-conferencing-platforms": {
    slug: "video-conferencing-platforms",
    badge: "VIDEO CONFERENCING PLATFORMS",
    title: "Your own branded meeting rooms,",
    highlightText: "on your own infrastructure.",
    subtitle: "Not every organisation wants its conversations on somebody else's servers. White-label and self-hosted video conferencing built on proven WebRTC infrastructure.",
    section2Headline: "Compliance, data residency & zero\nper-seat licensing fees.",
    section2Subtitle: "Embed custom WebRTC video conferencing directly into your SaaS product, telehealth portal, or public institution with full data residency control.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Video",
        title: "Custom Video Rooms",
        desc: "Fully branded, zero-install WebRTC video meeting spaces running seamlessly on web browsers and mobile apps.",
      },
      {
        icon: "Monitor",
        title: "Collaboration Tools",
        desc: "HD screen sharing, shared digital whiteboards, private chat threads, cloud recording, and breakout rooms.",
      },
      {
        icon: "Users",
        title: "Large Webinars",
        desc: "High-capacity streaming architecture supporting thousands of concurrent attendees with polls and Q&A tools.",
      },
      {
        icon: "Shield",
        title: "Data Sovereignty",
        desc: "Deployable on dedicated private cloud clusters or on-premise servers ensuring complete data residency control.",
      }
    ],
    featureRows: [
      {
        title: "Branded WebRTC video rooms",
        description: "Custom video rooms embedded inside your web app or client portal without external third-party branding.",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Screen sharing, recording & breakout rooms",
        description: "Feature-rich WebRTC infrastructure supporting interactive whiteboards, cloud recordings, and sub-group breakouts.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Self-hosted deployment & data residency",
        description: "Full server control ensuring sensitive telehealth or corporate video streams stay strictly within your private cloud.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Webinar mode with audience controls",
        description: "Large-scale broadcast webinar streams with presenter controls, polls, hand-raising, and live chat.",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "WEBRTC ENGINE",
      title: "Self-Hosted WebRTC Video Platforms",
      description: "White-label video conferencing built on WebRTC carrying your branding, access rules, and data residency.",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your video conferencing platform →",
  },

  // 4.3 Event Management & Ticketing
  "event-management-ticketing": {
    slug: "event-management-ticketing",
    badge: "EVENT TICKETING PLATFORMS",
    title: "From registration,",
    highlightText: "straight to the entrance gate.",
    subtitle: "Every event is judged at the door before anything else has started. End-to-end event platforms covering registration, ticket sales, QR check-in, and self-service kiosks.",
    section2Headline: "Live attendance data & entrance queues\nthat actually move.",
    section2Subtitle: "Engineered for conference organizers, expos, concerts, and stadium events needing reliable offline QR scanning, badge printing, and exhibitor tools.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Tag",
        title: "Tiered Ticketing",
        desc: "Custom ticket sales tiers, dynamic early-bird discounts, promotional codes, and instant digital PDF deliveries.",
      },
      {
        icon: "QrCode",
        title: "Fast QR Check-In",
        desc: "High-speed mobile QR scanning apps with offline syncing capability, eliminating venue entrance bottlenecks.",
      },
      {
        icon: "Printer",
        title: "Badge Printing",
        desc: "Self-service kiosk integrations providing automated attendee badge printing and fast-track admissions easily.",
      },
      {
        icon: "BarChart3",
        title: "Live Analytics",
        desc: "Real-time gate scan telemetry, attendee demographic breakdowns, capacity tracking, and post-event reports.",
      }
    ],
    featureRows: [
      {
        title: "Tiered ticket sales & payment gateways",
        description: "Branded event registration portals with instant ticket sales, seat allocation, and promo code support.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Fast QR & NFC gate check-in scanner app",
        description: "Mobile check-in scanner apps processing over 30 scans per minute per gate with offline backup.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Self-service badge printing kiosks",
        description: "Integration with thermal badge printers for automated attendee check-in and custom badge printing.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Exhibitor lead retrieval & analytics",
        description: "Empowering event exhibitors to scan attendee badges for instant lead capture and follow-up.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "EVENT PLATFORM",
      title: "End-to-End Event Ticketing & Gate Infrastructure",
      description: "End-to-end event platforms covering registration, ticket sales, QR check-in, and on-site self-service kiosks.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's power your event ticketing →",
  },

  // 4.4 ERP & Business Management Systems
  "erp-business-management": {
    slug: "erp-business-management",
    badge: "ERP & BUSINESS MANAGEMENT",
    title: "One unified system for",
    highlightText: "your entire operation.",
    subtitle: "When finance, inventory, and sales each keep their own version of the truth, none of them are right. Integrated ERP covering accounting, inventory, procurement, and CRM.",
    section2Headline: "Configured around how your business\nactually runs.",
    section2Subtitle: "We build bespoke ERP systems where needed and extend established platforms like Odoo or SAP, configuring software to fit your operational reality.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "FileText",
        title: "Financial Accounts",
        desc: "Integrated general ledger, automated invoicing, regional tax compliance, and multi-currency reporting.",
      },
      {
        icon: "Boxes",
        title: "Inventory Control",
        desc: "Real-time stock tracking, multi-branch transfers, automated reorder triggers, and centralized SKU control.",
      },
      {
        icon: "Briefcase",
        title: "Procurement Flows",
        desc: "Comprehensive vendor management, automated purchase orders, approval workflows, and invoice matching.",
      },
      {
        icon: "Clock",
        title: "Executive Reports",
        desc: "Real-time KPI dashboards providing leadership visibility into operational revenue, margins, and workloads.",
      }
    ],
    featureRows: [
      {
        title: "Accounting & VAT-compliant invoicing",
        description: "Automated billing pipelines tailored for UAE/GCC VAT regulations, multi-currency invoicing, and regional tax compliance.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Multi-branch inventory & warehouse control",
        description: "Real-time inventory tracking across multiple warehouses with barcode scanning, reorder triggers, and stock transfer logs.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Procurement & vendor approval workflows",
        description: "Comprehensive procurement workflows with vendor scorecards, automated purchase orders, and multi-tier approval rules.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Sales CRM & customer account management",
        description: "Centralized sales CRM unifying lead funnels, quotation generation, automated contracts, and customer account records.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "ERP ENGINE",
      title: "Integrated Business Management Systems",
      description: "Integrated ERP covering accounting, inventory, procurement, and reporting, configured around your business.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build your ERP system →",
  },

  // 4.5 HR, Attendance & Access Control
  "hr-attendance-access-control": {
    slug: "hr-attendance-access-control",
    badge: "HR & ACCESS CONTROL",
    title: "Attendance data is only useful",
    highlightText: "if payroll can read it.",
    subtitle: "Workforce systems connecting physical access control and biometric attendance directly to HR records, leave management, and automated payroll calculations.",
    section2Headline: "Hardware and software integrated\nso gate and salary sheet agree.",
    section2Subtitle: "Built for factories, hospitals, campuses, and multi-site offices needing biometric, RFID, and face-recognition attendance integrated directly into statutory payroll.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Fingerprint",
        title: "Biometric Tracking",
        desc: "Hardware integration with biometric fingerprint scanners, face recognition terminals, and RFID keycards.",
      },
      {
        icon: "Calendar",
        title: "Shift Rostering",
        desc: "Automated shift planning, rotational schedule management, overtime approvals, and employee mobile leave flows.",
      },
      {
        icon: "Lock",
        title: "Access Control",
        desc: "Zone-based security access permissions, automated visitor badge logs, emergency evacuation lists, and controls.",
      },
      {
        icon: "CreditCard",
        title: "Payroll Processing",
        desc: "Direct calculation of attendance records, overtime hours, leave deductions, and statutory compliance for payroll.",
      }
    ],
    featureRows: [
      {
        title: "Biometric & RFID attendance hardware sync",
        description: "Real-time attendance capture connecting door turnstiles and biometric terminals directly to HR database logs.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Leave management & shift rostering",
        description: "Flexible shift allocation, employee self-service leave requests, approval flows, and automated overtime rules.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "WPS payroll integration & reporting",
        description: "Automated WPS file creation and statutory payroll calculations matching exact gate attendance logs.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Visitor & contractor check-in management",
        description: "Digital visitor logging, badge printing, host notifications, and contractor site access management.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "WORKFORCE PLATFORM",
      title: "Integrated HR & Physical Access Control",
      description: "Workforce systems connecting physical access control and biometric attendance directly to HR records and payroll.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's connect your HR & attendance system →",
  },

  // 4.6 Retail & Mall Automation
  "retail-mall-automation": {
    slug: "retail-mall-automation",
    badge: "RETAIL & MALL AUTOMATION",
    title: "Thousands of store decisions,",
    highlightText: "made automatically.",
    subtitle: "A hypermarket generates thousands of small decisions a day. Connected systems combining AI video analytics, self-service kiosks, and real-time floor operations management.",
    section2Headline: "Live footfall analytics, queue alerts\nand automated stock detection.",
    section2Subtitle: "Surface footfall, queue spikes, empty shelves, and safety events as they happen rather than waiting for next week's manual reports.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Camera",
        title: "Footfall Analytics",
        desc: "AI computer vision analytics tracking shopper foot traffic patterns, dwell times, and peak hours across malls.",
      },
      {
        icon: "Eye",
        title: "Stock-Out Alerts",
        desc: "Automated camera shelf monitoring detecting missing merchandise, inventory stock-outs, and misplaced goods.",
      },
      {
        icon: "Compass",
        title: "Interactive Kiosks",
        desc: "Interactive 3D digital mall wayfinding directories, self-service food court ordering, and promotional screens.",
      },
      {
        icon: "Bell",
        title: "Floor Management",
        desc: "Instant mobile notifications dispatching retail floor managers, customer service associates, and restock crews.",
      }
    ],
    featureRows: [
      {
        title: "AI CCTV footfall & queue length analytics",
        description: "Converting existing store security cameras into real-time operational analytics engines.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Shelf-gap & planogram stock-out detection",
        description: "Visual AI monitoring that alerts inventory teams the second popular items run empty on shelves.",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Self-service information & wayfinding kiosks",
        description: "Interactive touchscreen kiosks guiding mall visitors to store locations and promotional deals.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Tenant & promotion management portals",
        description: "Centralized dashboards for mall operators to manage tenant leases, footfall reporting, and campaign displays.",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "RETAIL AI ENGINE",
      title: "Intelligent Retail & Mall Automation",
      description: "Connected systems for hypermarkets and malls combining AI video analytics, kiosks, and real-time floor ops.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's automate your retail operations →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 5: DESIGN & GROWTH (4 Services)
  // ═══════════════════════════════════════════════════════════════

  // 5.1 UI/UX & Graphic Design
  "graphic-design": {
    slug: "graphic-design",
    badge: "UI/UX & GRAPHIC DESIGN",
    title: "Interfaces people understand",
    highlightText: "instantly, without a manual.",
    subtitle: "Good engineering deserves to be seen. If users need a manual, the design failed. We design digital products from user research through to production-ready design systems.",
    section2Headline: "User research, wireframes & developer-ready\ndesign systems.",
    section2Subtitle: "We craft interfaces testable against real user goals: wireframes, interactive prototypes, WCAG accessibility reviews, and developer-ready component specs.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Users",
        title: "User Research",
        desc: "In-depth user research, customer journey mapping, and usability testing guiding every single UI decision.",
      },
      {
        icon: "Layout",
        title: "Rapid Wireframing",
        desc: "Interactive Figma wireframes and clickable prototypes allowing rapid stakeholder testing before coding.",
      },
      {
        icon: "Palette",
        title: "Design Systems",
        desc: "Comprehensive component libraries, shared color tokens, and modular typography systems built for React.",
      },
      {
        icon: "CheckCircle",
        title: "WCAG Compliance",
        desc: "Strict adherence to WCAG 2.1 AA contrast and accessibility standards ensuring inclusive user experiences.",
      }
    ],
    featureRows: [
      {
        title: "User research & journey mapping",
        description: "Understanding user behavior through persona creation, stakeholder interview insights, and customer clickpath mapping.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Interactive Figma prototypes & testing",
        description: "Interactive Figma prototypes that test user journeys and validate conversion hypotheses before engineering begins.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Production design systems & component libraries",
        description: "Comprehensive design systems mapped directly to modular Tailwind CSS tokens for 1:1 production developer handoffs.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Developer-ready specs & WCAG reviews",
        description: "Pixel-perfect handoffs with strict spacing rules, responsive breakpoints, micro-animations, and WCAG accessibility.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "DESIGN SYSTEM",
      title: "Interfaces People Understand Instantly",
      description: "We design digital products from research through to production-ready design systems that engineering can build directly.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's design your product interface →",
  },

  // 5.2 Brand Identity & Creative
  "brand-identity-creative": {
    slug: "brand-identity-creative",
    badge: "BRAND IDENTITY & CREATIVE",
    title: "Credibility is visual",
    highlightText: "long before it's verbal.",
    subtitle: "We develop complete brand identities: naming direction, logo, color, typography, and brand guidelines that keep everything consistent across every customer touchpoint.",
    section2Headline: "A brand system built to outlast\na single campaign.",
    section2Subtitle: "We produce the real collateral your team needs to use day to day: pitch decks, social media templates, marketing collateral, packaging, and digital guidelines.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Palette",
        title: "Visual Identity",
        desc: "Memorable logo design, customized typography rules, color psychology palettes, and style guides for brands.",
      },
      {
        icon: "BookOpen",
        title: "Brand Guidelines",
        desc: "Comprehensive brand book covering logo usage boundaries, typography hierarchies, photographic art, and tone.",
      },
      {
        icon: "FileText",
        title: "Marketing Decks",
        desc: "Executive pitch decks, corporate sales presentations, case study layouts, and digital brochures built to sell.",
      },
      {
        icon: "Share2",
        title: "Digital Collateral",
        desc: "Social media design kits, print collateral, trade show booth graphics, and premium product packaging designs.",
      }
    ],
    featureRows: [
      {
        title: "Logo design & visual identity systems",
        description: "Crafting iconic brand logos and cohesive visual language systems tailored to your industry scale.",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Brand guidelines & asset libraries",
        description: "Detailed brand guidelines ensuring brand consistency across web, print, mobile, and advertising.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Marketing decks & investor collateral",
        description: "High-impact presentation decks and sales collateral that convey enterprise credibility.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Packaging & environmental design",
        description: "Physical packaging design, retail signage, and event booth visual assets.",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "BRAND SYSTEM",
      title: "A Complete Brand Identity System",
      description: "Guidelines and visual assets built to outlast a single campaign, so every piece of marketing looks like it belongs to the same company.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's build a brand that holds up →",
  },

  // 5.3 Digital Marketing
  "digital-marketing": {
    slug: "digital-marketing",
    badge: "DIGITAL MARKETING",
    title: "Marketing that grows",
    highlightText: "your revenue, not your reports.",
    subtitle: "SEO, paid campaigns, and content strategy built around measurable outcomes, not vanity metrics like impressions or followers.",
    section2Headline: "Marketing that earns\nits budget back.",
    section2Subtitle: "Impressions and follower counts are easy to grow. Qualified leads and revenue are harder, and that's exactly what we optimise for, from day one of every campaign.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "TrendingUp",
        title: "Data Strategies",
        desc: "Performance marketing strategies driven by verified analytics, high-intent audience segmentation, and testing.",
      },
      {
        icon: "Layers",
        title: "Full-Funnel Reach",
        desc: "Multi-channel advertising campaigns across Google Search, Meta, LinkedIn, and display networks built for ROI.",
      },
      {
        icon: "Target",
        title: "Targeted Campaigns",
        desc: "Hyper-focused audience targeting reaching decision-makers, qualified B2B buyers, and high-lifetime customers.",
      },
      {
        icon: "BarChart3",
        title: "Live Attribution",
        desc: "Transparent multi-touch attribution dashboards connecting ad expenditure directly to customer conversions.",
      }
    ],
    featureRows: [
      {
        title: "Paid search & social performance ads",
        description: "Precision PPC campaigns on Google Search, LinkedIn Ads, Meta, and TikTok optimized for customer acquisition cost.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Landing page conversion rate tuning",
        description: "A/B testing landing pages, copy tuning, and user friction removal to double lead conversion rates.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Email marketing & lifecycle automation",
        description: "Automated email nurture sequences, lead scoring, re-engagement flows, and newsletter campaigns.",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Attribution setup & performance analytics",
        description: "GA4, server-side tracking, and multi-touch attribution models showing exact ROAS.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "REVENUE MARKETING",
      title: "Marketing Tied to Revenue, Not Vanity Metrics",
      description: "Every campaign measured against qualified leads and sales pipeline, reported transparently every month.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's get you more qualified leads →",
  },

  // 5.4 SEO & Performance Marketing
  "seo-performance-marketing": {
    slug: "seo-performance-marketing",
    badge: "SEO & PERFORMANCE MARKETING",
    title: "Be found online when",
    highlightText: "it matters most.",
    subtitle: "Ranking is compounding. Start late, pay more. We handle technical SEO, content strategy, and authority building to grow your organic visibility across multi-region search.",
    section2Headline: "Grow your organic traffic\nand lower acquisition costs.",
    section2Subtitle: "We pair technical site architecture fixes and high-intent keyword strategy with performance paid search when speed matters more than waiting for organic growth.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Search",
        title: "Technical Audits",
        desc: "Resolving crawlability bottlenecks, Core Web Vitals performance, XML sitemaps, structured schemas, and indexing.",
      },
      {
        icon: "Key",
        title: "Keyword Strategy",
        desc: "Researching high-converting, commercially viable keywords capturing qualified customer search intent online.",
      },
      {
        icon: "MapPin",
        title: "Localized Search",
        desc: "Google Business Profile optimization, local citation building, and multi-region search rankings capturing local intent.",
      },
      {
        icon: "Link2",
        title: "Authority Building",
        desc: "High-authority editorial link acquisition, thought leadership content placement, and brand mentions building trust.",
      }
    ],
    featureRows: [
      {
        title: "Technical SEO audits & site speed fixes",
        description: "Eliminating technical errors, optimizing JavaScript rendering, and achieving top Core Web Vitals scores.",
        image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "High-intent content & keyword strategy",
        description: "Creating authoritative content hubs targeting high-value commercial search terms.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Local & multi-region international SEO",
        description: "Optimizing Google Business profiles and multi-language hreflang structures for regional search dominance.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Authority building & monthly ranking reports",
        description: "White-hat link building and monthly keyword ranking reports showing clear organic growth.",
        image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SEO ENGINE",
      title: "Compounding Organic Search Visibility",
      description: "Technical SEO, content strategy, and authority building to grow organic visibility and cut acquisition costs.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's boost your search rankings →",
  },


  // ═══════════════════════════════════════════════════════════════
  // PRACTICE 6: ADVISORY & SUPPORT (2 Services)
  // ═══════════════════════════════════════════════════════════════

  // 6.1 Product Strategy & Consulting
  "product-strategy-consulting": {
    slug: "product-strategy-consulting",
    badge: "PRODUCT STRATEGY & CONSULTING",
    title: "Get the plan right",
    highlightText: "before you write a line of code.",
    subtitle: "The most expensive code is the code that shouldn't have been written. We help you decide what to build, in what order, and whether it's worth building through discovery workshops.",
    section2Headline: "Scope the problem before\nproposing a solution.",
    section2Subtitle: "Useful before a project starts, and equally useful when one has stalled. We provide architecture assessments, MVP scoping, vendor evaluation, and cost estimates.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Compass",
        title: "Product Discovery",
        desc: "Structured stakeholder workshops translating complex business concepts into prioritized feature roadmaps.",
      },
      {
        icon: "CheckSquare",
        title: "Feasibility Audits",
        desc: "Evaluating technical feasibility, system architecture risks, third-party API dependencies, and bottlenecks.",
      },
      {
        icon: "Map",
        title: "MVP Roadmapping",
        desc: "Defining lean Minimum Viable Products that balance rapid speed-to-market with core feature functionality and UX.",
      },
      {
        icon: "DollarSign",
        title: "Cost Estimation",
        desc: "Transparent infrastructure cost projections, sprint schedules, resource allocations, and realistic milestones.",
      }
    ],
    featureRows: [
      {
        title: "Discovery workshops & requirements definition",
        description: "Turning vague product ideas into technical specs and actionable user stories.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Technical feasibility & architecture assessment",
        description: "Assessing system architecture options to prevent costly rework down the line.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "MVP scoping & phased release planning",
        description: "Prioritizing high-impact features for launch v1 while mapping clear v2/v3 expansion roadmaps.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Vendor evaluation & cost estimation",
        description: "Unbiased technical advisory, team scoping, and cost/timeline risk assessment.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "PRODUCT ADVISORY",
      title: "Get the Plan Right Before You Build",
      description: "We help you decide what to build, in what order, and whether it's worth building at all.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's scope your product strategy →",
  },

  // 6.2 Maintenance & Support Retainers
  "maintenance-support-retainers": {
    slug: "maintenance-support-retainers",
    badge: "MAINTENANCE & SUPPORT RETAINERS",
    title: "Someone on call",
    highlightText: "when it matters most.",
    subtitle: "Launch day is the beginning of software's life, not the end. Ongoing retainers covering 24/7 monitoring, security patching, dependency updates, and bug fixes.",
    section2Headline: "SLA-backed retainers for systems\nwe built or inherited.",
    section2Subtitle: "We keep your applications online, secure, and updated with defined response times, regular health reports, and incremental feature enhancements.",
    heroImages: {
      left: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      center: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
      right: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
    highlights: [
      {
        icon: "Activity",
        title: "Uptime Monitoring",
        desc: "24/7 automated server telemetry monitoring, health checks, and rapid incident response protocols for uptime.",
      },
      {
        icon: "Shield",
        title: "Security Patching",
        desc: "Scheduled framework updates, vulnerability scanning, security audits, and zero-day dependency patching.",
      },
      {
        icon: "Wrench",
        title: "Feature Updates",
        desc: "Dedicated monthly engineering hours for feature iterations, performance tuning, UI refinements, and updates.",
      },
      {
        icon: "Clock",
        title: "SLA Guarantees",
        desc: "Strict contractual response times, priority support ticketing, dedicated technical account leads, and reviews.",
      }
    ],
    featureRows: [
      {
        title: "24/7 uptime monitoring & alerting",
        description: "Continuous infrastructure monitoring ensuring 99.9% uptime with automated error logging.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Security patching & framework updates",
        description: "Routine dependency updates, security vulnerability patching, and database maintenance.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
      {
        title: "Bug fixes & incremental feature enhancements",
        description: "Monthly allocated engineering sprints for continuous product improvements and UI refinements.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "left",
      },
      {
        title: "Regular health reports & SLA guarantees",
        description: "Monthly system health reports, performance metrics, and guaranteed response SLAs.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
        imagePosition: "right",
      },
    ],
    testimonials: [
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-white",
        textColor: "text-[#202B61]",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#6c6ce5]",
        textColor: "text-white",
      },
      {
        quote: PLACEHOLDER_TESTIMONIAL_NOTE,
        author: "[Client Name]",
        role: "[Role, Company]",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        bgColor: "bg-[#202B61]",
        textColor: "text-white",
      },
    ],
    techShowcase: {
      badge: "SUPPORT RETAINER",
      title: "SLA-Backed Support & Maintenance",
      description: "Launch day is the beginning of software's life. We support systems we built and systems we inherit.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    },
    finalCtaText: "Let's secure your maintenance retainer →",
  },
};

// ═══════════════════════════════════════════════════════════════
// ROUTE ALIASES (Ensures 100% clean resolution for all URL patterns)
// ═══════════════════════════════════════════════════════════════
CAPABILITIES_DATA["web-development"] = CAPABILITIES_DATA["website-development"];
CAPABILITIES_DATA["app-development"] = CAPABILITIES_DATA["mobile-app-development"];
CAPABILITIES_DATA["portal-development"] = CAPABILITIES_DATA["custom-portals"];
CAPABILITIES_DATA["chatbots-virtual-agents"] = CAPABILITIES_DATA["ai-chatbot-automation"];
CAPABILITIES_DATA["conversational-ai"] = CAPABILITIES_DATA["ai-chatbot-automation"];
CAPABILITIES_DATA["ml-development"] = CAPABILITIES_DATA["applied-ai-ml"];
CAPABILITIES_DATA["automation"] = CAPABILITIES_DATA["business-automation"];
CAPABILITIES_DATA["ui-ux-design"] = CAPABILITIES_DATA["graphic-design"];
CAPABILITIES_DATA["ui-ux"] = CAPABILITIES_DATA["graphic-design"];
CAPABILITIES_DATA["shopify-development"] = CAPABILITIES_DATA["ecommerce-shopify-development"];
CAPABILITIES_DATA["marketplace-platforms"] = CAPABILITIES_DATA["marketplace-directory-platforms"];
CAPABILITIES_DATA["cloud-devops"] = CAPABILITIES_DATA["cloud-devops-hosting"];
CAPABILITIES_DATA["learning-management"] = CAPABILITIES_DATA["learning-management-systems"];
CAPABILITIES_DATA["erp-systems"] = CAPABILITIES_DATA["erp-business-management"];
CAPABILITIES_DATA["hr-access-control"] = CAPABILITIES_DATA["hr-attendance-access-control"];
CAPABILITIES_DATA["seo-marketing"] = CAPABILITIES_DATA["seo-performance-marketing"];
CAPABILITIES_DATA["brand-identity"] = CAPABILITIES_DATA["brand-identity-creative"];
CAPABILITIES_DATA["strategy-consulting"] = CAPABILITIES_DATA["product-strategy-consulting"];
