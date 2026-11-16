"use client";

import React, { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
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
    <section id="products-catalog" className="w-full pt-2 sm:pt-4 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 bg-white text-left font-sans select-none">
      <div className="max-w-[1440px] w-full mx-auto space-y-5 sm:space-y-6">

        {/* ── MODERN CAPSULE DOCK SITUATED CLEANLY ABOVE THE PRODUCTS ── */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(32,43,97,0.06)] transition-all">
          {/* Clean Segmented Dock */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-100/70 border border-slate-200/50 overflow-x-auto scrollbar-none shrink-0">
            {TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#202B61] text-white shadow-xs"
                      : "text-slate-600 hover:text-[#202B61] hover:bg-white/60"
                  }`}
                >
                  <IconComponent className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${
                    isActive
                      ? "text-white"
                      : tab.accentColor === "emerald"
                      ? "text-emerald-600"
                      : tab.accentColor === "amber"
                      ? "text-amber-600"
                      : "text-[#202B61]"
                  }`} />
                  <span>{tab.title}</span>
                  <span
                    className={`text-[11px] font-mono font-medium ${
                      isActive ? "text-white/70" : "text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Minimalist Floating Search Input */}
          <div className="relative w-full sm:w-72 lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, tools & stacks..."
              className="w-full bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-200/80 hover:border-slate-300 focus:border-[#202B61] focus:ring-2 focus:ring-[#202B61]/10 text-xs sm:text-sm text-[#202B61] placeholder-slate-400 rounded-full pl-9 pr-8 py-2 transition-all outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#202B61] p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ── 3-COLUMN PRODUCT CARDS WITH SCREENSHOT PREVIEW & FULL ACTIONS (ROUNDED CARD & ACTION) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-[#202B61] hover:shadow-[0_12px_32px_rgba(32,43,97,0.08)] transition-all duration-200 text-left cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]"
              >
                {/* Image Banner Container with Clean Aspect Ratio */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200/80">
                  <img
                    src={product.previewImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                  {/* Price Badge on Top Right */}
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs border border-slate-200/90 text-[#202B61] font-heading font-bold text-[11px] px-2.5 py-1 rounded-lg shadow-xs flex items-center gap-1.5">
                    <CreditCard className="w-3 h-3 text-[#202B61]" />
                    <span>{product.priceBadgeText}</span>
                  </div>

                  {/* Bookmark Button on Bottom Right */}
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-xs border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-400 group-hover:text-[#202B61] transition-colors">
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
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide bg-slate-100 text-[#202B61] border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100">
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
                  </div>

                  {/* Single Clean "View details" Action Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="w-full mt-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#202B61] hover:bg-slate-50 text-xs font-bold text-[#202B61] text-center transition-all duration-150 shadow-2xs cursor-pointer group-hover:border-[#202B61]"
                  >
                    View details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State when no products match filters or search */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 space-y-3">
            <p className="font-heading font-bold text-base text-[#202B61]">
              No products found
            </p>
            <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto">
              No applications or developer tools match &ldquo;{searchQuery}&rdquo;. Try clearing your search query or selecting another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-4 py-2 rounded-xl bg-[#202B61] text-white font-heading font-bold text-xs hover:bg-[#151E48] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* ── 4. FULL PRODUCT DETAILS MODAL (SCREENSHOTS GALLERY + SPECS + LIVE DEMO + DOWNLOAD/PURCHASE) ── */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
