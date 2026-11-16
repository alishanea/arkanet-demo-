"use client";

import React, { useState, useMemo } from "react";
import {
  ArrowUpRight,
  Search,
  X,
  ExternalLink,
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/lib/productsData";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

type PricingCategory = "all" | "free" | "premium";

export const ProductsCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // 3 Tabs strictly matching user specifications
  const TABS = [
    {
      id: "all" as PricingCategory,
      title: "All Products",
      subtitle: "Browse all Arkanet products",
      count: PRODUCTS_DATA.length,
    },
    {
      id: "free" as PricingCategory,
      title: "Free Products",
      subtitle: "Applications available at no cost",
      count: PRODUCTS_DATA.filter((p) => p.pricingType === "free").length,
    },
    {
      id: "premium" as PricingCategory,
      title: "Premium Products",
      subtitle: "Paid applications with subscription or one-time purchase options",
      count: PRODUCTS_DATA.filter((p) => p.pricingType === "premium").length,
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

        {/* ── 2. THREE SPECIFIED PRODUCT TABS (RADIUS < 5) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`p-4 sm:p-5 rounded-[4px] border text-left transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-[#202B61] text-white border-[#202B61] shadow-md ring-1 ring-[#202B61]"
                  : "bg-white text-slate-700 border-slate-200/90 hover:border-[#202B61]/40 hover:bg-slate-50/80"
                  }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-heading font-extrabold text-base sm:text-lg ${isActive ? "text-white" : "text-[#202B61]"}`}>
                    {tab.title}
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-[4px] ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {tab.count}
                  </span>
                </div>
                <p className={`font-sans text-xs sm:text-[13px] mt-1.5 leading-snug ${isActive ? "text-white/80" : "text-slate-500"}`}>
                  {tab.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* ── 3. COMPACT SMALL-BOX PRODUCT CARDS (NAME + SMALL DESCRIPTION + CLICK TO VIEW FULL DETAILS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-2">
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
                className="group flex flex-col justify-between rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61] hover:shadow-[0_8px_24px_rgba(32,43,97,0.08)] p-5 sm:p-6 transition-all duration-200 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#202B61]"
              >
                <div>
                  {/* Top Bar: Small Logo + Pricing Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200/90 flex items-center justify-center p-1.5 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <img
                        src={product.logo}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span
                      className={`font-heading font-bold text-[11px] px-2.5 py-0.5 rounded-[4px] ${isFree
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-[#202B61]/5 text-[#202B61] border border-[#202B61]/15"
                        }`}
                    >
                      {isFree ? "Free Product" : `Paid (${product.priceLabel}${product.billingPeriod || ""})`}
                    </span>
                  </div>

                  {/* Product Name & Category */}
                  <div className="mt-3.5">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61] leading-snug group-hover:text-[#151E48] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                      {product.category}
                    </p>
                  </div>

                  {/* Small Description (1-2 lines) */}
                  <p className="font-sans text-xs text-slate-600 line-clamp-2 mt-2.5 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Bar: Action Pill */}
                <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#202B61]">
                  <span className="text-[11px] text-slate-400 group-hover:text-slate-600 transition-colors">
                    Click to view screenshots
                  </span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
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
