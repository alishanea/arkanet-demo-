"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Search,
  X,
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/lib/productsData";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

type PricingCategory = "all" | "free" | "premium";

export const ProductsCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Tab definitions matching the user's exact specification
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
      subtitle: "Paid applications with subscription or one-time purchase",
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
    <section id="products-catalog" className="w-full py-10 sm:py-14 lg:py-18 px-4 sm:px-8 lg:px-12 bg-white text-left font-sans select-none">
      <div className="max-w-[1440px] w-full mx-auto space-y-8 sm:space-y-10">

        {/* ── 1. CLEAN SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/90 pb-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#202B61]/70 font-sans">
              Arkanet Software &amp; Platform Catalog
            </p>
            <h1 className="font-heading font-extrabold text-[#202B61] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Our Products
            </h1>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty">
              Explore proprietary platforms, team collaboration suites, and enterprise applications engineered by Arkanet.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products & features..."
              className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#202B61] focus:bg-white text-xs sm:text-sm text-[#202B61] placeholder-slate-400 rounded-[4px] pl-9 pr-8 py-2.5 transition-colors outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#202B61] p-1"
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
                className={`p-4 sm:p-5 rounded-[4px] border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#202B61] text-white border-[#202B61] shadow-md ring-1 ring-[#202B61]"
                    : "bg-white text-slate-700 border-slate-200/90 hover:border-[#202B61]/40 hover:bg-slate-50/80"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-heading font-extrabold text-base sm:text-lg ${isActive ? "text-white" : "text-[#202B61]"}`}>
                    {tab.title}
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-[4px] ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
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

        {/* ── 3. PRODUCT CARDS GRID (RADIUS < 5, NO MICRO ELEMENTS, FULL ACTIONS) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 pt-2">
          {filteredProducts.map((product) => {
            const isFree = product.pricingType === "free";
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-[4px] bg-white border border-slate-200/90 hover:border-[#202B61]/40 hover:shadow-[0_12px_32px_rgba(32,43,97,0.06)] transition-all duration-200 text-left p-5 sm:p-6"
              >
                <div className="space-y-4">
                  {/* Top Bar: Logo, Name & Pricing Badge (Radius < 5) */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-[4px] bg-slate-50 border border-slate-200/90 flex items-center justify-center p-2 shrink-0 shadow-2xs">
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61] leading-snug truncate">
                          {product.name}
                        </h3>
                        <p className="font-sans text-xs text-slate-500 truncate mt-0.5">
                          {product.category}
                        </p>
                      </div>
                    </div>

                    {/* Pricing Badge (Free / Paid) */}
                    <div className="shrink-0">
                      <span
                        className={`inline-block font-heading font-bold text-xs px-2.5 py-1 rounded-[4px] ${
                          isFree
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-[#202B61]/5 text-[#202B61] border border-[#202B61]/15"
                        }`}
                      >
                        {isFree ? "Free Product" : `Paid (${product.priceLabel}${product.billingPeriod || ""})`}
                      </span>
                    </div>
                  </div>

                  {/* Screenshots or Demo Visual (Click to view full screenshot gallery modal) */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedProduct(product)}
                    className="relative aspect-[16/10] w-full rounded-[4px] overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer shadow-2xs group/img"
                  >
                    <Image
                      src={product.previewImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover/img:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-[#202B61]/0 group-hover/img:bg-[#202B61]/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3 py-1.5 rounded-[4px] bg-white/95 text-[#202B61] font-heading font-bold text-xs shadow-md">
                        View Screenshots &amp; Details
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <div className="space-y-1">
                    <p className="font-sans text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Features (Checklist) */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="font-heading font-bold text-[11px] uppercase tracking-wider text-slate-400">
                      Features Included
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 line-clamp-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── DIRECT ACTION BUTTONS (LIVE DEMO, GET STARTED / PURCHASE, DETAILS) ── */}
                <div className="pt-4 mt-5 border-t border-slate-100 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Live Demo Button */}
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[4px] border border-[#202B61] text-[#202B61] hover:bg-slate-50 font-heading font-bold text-xs transition-colors shadow-2xs text-center"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Get Started / Purchase Button */}
                    <a
                      href={product.purchaseUrl || product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[4px] bg-[#202B61] hover:bg-[#151E48] text-white font-heading font-bold text-xs transition-all shadow-xs text-center"
                    >
                      <span>{isFree ? "Get Started" : "Purchase"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Full Details link */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="w-full text-center py-1 text-[11px] font-semibold text-slate-500 hover:text-[#202B61] transition-colors cursor-pointer"
                  >
                    View Screenshots Gallery &amp; Specifications →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ── 4. INTERACTIVE DETAIL MODAL WITH SCREENSHOTS GALLERY (RADIUS < 5) ── */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
