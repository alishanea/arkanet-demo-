"use client";

import React, { useState, useMemo } from "react";
import {
  ArrowUpRight,
  Search,
  X,
  Star,
  CreditCard,
  Bookmark,
  ExternalLink,
  Layers,
  Gift,
  Crown,
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/lib/productsData";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

type PricingCategory = "all" | "free" | "premium";

export const ProductsCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // 3 Beautified Tabs with icons, badges and active accent themes
  const TABS = [
    {
      id: "all" as PricingCategory,
      title: "All Products",
      badge: "FULL SUITE",
      subtitle: "Browse all Arkanet products & platforms",
      count: PRODUCTS_DATA.length,
      icon: Layers,
      accentColor: "sky",
    },
    {
      id: "free" as PricingCategory,
      title: "Free Products",
      badge: "OPEN ACCESS",
      subtitle: "Applications available at no cost",
      count: PRODUCTS_DATA.filter((p) => p.pricingType === "free").length,
      icon: Gift,
      accentColor: "emerald",
    },
    {
      id: "premium" as PricingCategory,
      title: "Premium Products",
      badge: "PAID / ENTERPRISE",
      subtitle: "Paid apps with subscription or one-time options",
      count: PRODUCTS_DATA.filter((p) => p.pricingType === "premium").length,
      icon: Crown,
      accentColor: "amber",
    },
  ];

  // Filter products by tab & search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // 1. Pricing Type Filter
      if (activeCategory === "free" && product.pricingType !== "free") return false;
      if (activeCategory === "premium" && product.pricingType !== "premium") return false;

      // 2. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesFeature = product.features.some((f) => f.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTagline && !matchesCategory && !matchesFeature) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products-catalog" className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12 bg-white text-left font-sans select-none">
      <div className="max-w-[1440px] w-full mx-auto space-y-8 sm:space-y-10">

        {/* ── 1. CLEAN APP STORE HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/90 pb-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#202B61]/70 font-sans">
              Arkanet App Store &amp; Platform Repository
            </p>
            <h1 className="font-heading font-extrabold text-[#202B61] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Our Products
            </h1>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Official applications, cloud platforms, and developer utilities engineered by Arkanet. Select any product to inspect screenshots and full capabilities.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products &amp; tools..."
              className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#202B61] focus:bg-white text-xs sm:text-sm text-[#202B61] placeholder-slate-400 rounded-[4px] pl-9 pr-8 py-2.5 transition-colors outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#202B61] p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ── 2. BEAUTIFIED PRODUCT CATEGORY TABS (RADIUS < 5) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
          {TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`group relative p-4 sm:p-5 rounded-[4px] border text-left transition-all duration-200 cursor-pointer overflow-hidden ${isActive
                  ? "bg-gradient-to-br from-[#202B61] via-[#1A2454] to-[#12193D] text-white border-[#202B61] shadow-[0_10px_25px_rgba(32,43,97,0.18)] ring-1 ring-[#202B61]"
                  : "bg-white text-slate-700 border-slate-200/90 hover:border-[#202B61]/50 hover:shadow-md hover:bg-slate-50/70"
                  }`}
              >
                {/* Top Subtle Active Accent Bar */}
                {isActive && (
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] ${tab.accentColor === "emerald"
                      ? "bg-emerald-400"
                      : tab.accentColor === "amber"
                        ? "bg-amber-400"
                        : "bg-sky-400"
                      }`}
                  />
                )}

                {/* Top Row: Icon + Badge + Count */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-[4px] flex items-center justify-center transition-all ${isActive
                        ? "bg-white/12 text-white border border-white/20 shadow-xs"
                        : tab.accentColor === "emerald"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-105"
                          : tab.accentColor === "amber"
                            ? "bg-amber-50 text-amber-600 border border-amber-100 group-hover:scale-105"
                            : "bg-slate-100 text-[#202B61] border border-slate-200/80 group-hover:scale-105"
                        }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-[4px] ${isActive
                        ? "bg-white/10 text-white/90 border border-white/15"
                        : "bg-slate-100 text-slate-500 border border-slate-200/60"
                        }`}
                    >
                      {tab.badge}
                    </span>
                  </div>

                  {/* Count Pill */}
                  <span
                    className={`font-heading font-black text-xs px-2.5 py-1 rounded-[4px] border transition-all ${isActive
                      ? "bg-white/20 text-white border-white/30 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 group-hover:bg-[#202B61] group-hover:text-white group-hover:border-[#202B61]"
                      }`}
                  >
                    {tab.count}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3
                    className={`font-heading font-extrabold text-base sm:text-lg leading-snug transition-colors ${isActive ? "text-white" : "text-[#202B61] group-hover:text-[#151E48]"
                      }`}
                  >
                    {tab.title}
                  </h3>
                  <p
                    className={`font-sans text-xs sm:text-[13px] mt-1.5 leading-relaxed font-normal transition-colors ${isActive ? "text-slate-200" : "text-slate-500"
                      }`}
                  >
                    {tab.subtitle}
                  </p>
                </div>

                {/* Bottom subtle indicator line */}
                <div className="mt-3.5 pt-2.5 border-t border-current/10 flex items-center justify-between text-[11px] font-semibold">
                  <span className={isActive ? "text-slate-300" : "text-slate-400"}>
                    {isActive ? "Currently viewing" : "Click to filter"}
                  </span>
                  <span
                    className={`transition-transform duration-200 ${isActive ? "translate-x-0 text-white" : "text-slate-400 group-hover:translate-x-1 group-hover:text-[#202B61]"
                      }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── 3. PRODUCT CARDS (BASED ON REFERENCE: IMAGE BANNER, FLOATING PRICE, TAGS, RATING, ONE VIEW DETAILS BUTTON) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
          {filteredProducts.map((product) => {
            const isFree = product.pricingType === "free";
            return (
              <div
                key={product.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProduct(product)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProduct(product);
                  }
                }}
                className="group flex flex-col justify-between rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61] hover:shadow-[0_12px_32px_rgba(32,43,97,0.08)] overflow-hidden transition-all duration-200 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]"
              >
                {/* Top Media / Preview Banner */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={product.previewImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Floating Pricing Badge (Top Right) */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/95 backdrop-blur-xs border border-slate-200/90 shadow-xs text-[11px] font-bold text-[#202B61]">
                    <CreditCard className="w-3 h-3 text-[#202B61]" />
                    <span>{product.priceBadgeText}</span>
                  </div>

                  {/* Floating Bookmark Icon (Bottom Right of Media) */}
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-[4px] bg-white/90 backdrop-blur-xs border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-400 group-hover:text-[#202B61] transition-colors">
                    <Bookmark className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div className="space-y-2.5">
                    {/* Tags / Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {product.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-[4px] text-[10px] font-extrabold uppercase tracking-wide bg-slate-100 text-[#202B61] border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100">
                        {product.category}
                      </span>
                    </div>

                    {/* Product Title & Rating */}
                    <div className="flex items-start justify-between gap-2 pt-0.5">
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#202B61] leading-snug group-hover:text-[#151E48] transition-colors truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs shrink-0 pt-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                        <span>{product.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Short Description (1-2 lines) */}
                    <p className="font-sans text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Developer / Verified Pod */}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <img
                        src={product.developer.avatar}
                        alt={product.developer.name}
                        className="w-5 h-5 rounded-[4px] object-cover shrink-0 border border-slate-200"
                      />
                      <span className="text-[11px] font-medium text-slate-600 truncate">
                        {product.developer.name}
                      </span>
                    </div>
                  </div>

                  {/* Single Clean "View details" Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="w-full mt-4 py-2.5 rounded-[4px] border border-slate-200 hover:border-[#202B61] hover:bg-slate-50 text-xs font-bold text-[#202B61] text-center transition-all duration-150 shadow-2xs cursor-pointer group-hover:border-[#202B61]"
                  >
                    View details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ── 4. FULL PRODUCT DETAILS MODAL (SCREENSHOTS GALLERY + SPECS + LIVE DEMO + DOWNLOAD/PURCHASE) ── */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
