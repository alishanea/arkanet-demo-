"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  ExternalLink,
  ArrowUpRight,
  Star,
  CheckCircle2,
  SlidersHorizontal,
  X,
  Layers,
  Sparkles,
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem, ProductPricingType } from "@/lib/productsData";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

type PricingTab = "all" | "free" | "premium";

export const ProductsCatalog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricingTab>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"relevance" | "rating" | "price-asc" | "price-desc">("relevance");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS_DATA.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Compute counts for tabs
  const tabCounts = useMemo(() => {
    return {
      all: PRODUCTS_DATA.length,
      free: PRODUCTS_DATA.filter((p) => p.pricingType === "free").length,
      premium: PRODUCTS_DATA.filter((p) => p.pricingType === "premium").length,
    };
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // 1. Pricing Tab Filter
      if (activeTab === "free" && product.pricingType !== "free") return false;
      if (activeTab === "premium" && product.pricingType !== "premium") return false;

      // 2. Category Filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) return false;

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesTags = product.tags.some((t) => t.toLowerCase().includes(q));
        const matchesFeatures = product.features.some((f) => f.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTagline && !matchesTags && !matchesFeatures) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-asc") {
        if (a.pricingType === "free" && b.pricingType !== "free") return -1;
        if (b.pricingType === "free" && a.pricingType !== "free") return 1;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "price-desc") {
        if (a.pricingType === "premium" && b.pricingType !== "premium") return -1;
        if (b.pricingType === "premium" && a.pricingType !== "premium") return 1;
        return b.name.localeCompare(a.name);
      }
      return 0; // relevance / default
    });
  }, [activeTab, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products-catalog" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-[#F8FAFC]/70 border-b border-slate-200/80 text-left select-none font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* ── TOP CONTROLS: TABS + SEARCH + CATEGORY FILTER ── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-6 shadow-sm space-y-5">
          
          {/* Row 1: Pricing Segment Tabs (All Products / Free Products / Premium Products) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { key: "all", label: "All Products", count: tabCounts.all },
                { key: "free", label: "Free Products", count: tabCounts.free },
                { key: "premium", label: "Premium Products", count: tabCounts.premium },
              ].map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key as PricingTab)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 select-none outline-none ${
                      isActive
                        ? "bg-[#202B61] text-white shadow-sm"
                        : "bg-slate-50 text-[#202B61]/80 hover:bg-slate-100 hover:text-[#202B61] border border-slate-200/80"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-200/80 text-[#202B61]/70"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs sm:text-sm self-end sm:self-auto">
              <span className="text-slate-400 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 text-[#202B61] font-semibold text-xs sm:text-sm rounded-xl px-3 py-1.5 outline-none focus:border-[#202B61] cursor-pointer"
              >
                <option value="relevance">Relevance</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Free First</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Row 2: Search Input & Category Pills */}
          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, platforms, or tools by name, features, or stack..."
                className="w-full bg-slate-50/70 border border-slate-200 hover:border-slate-300 focus:border-[#202B61] focus:bg-white text-sm text-[#202B61] placeholder-slate-400 rounded-xl pl-11 pr-10 py-3 transition-colors outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#202B61] p-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Categories:</span>
              </span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#202B61] text-white"
                        : "bg-white text-slate-600 hover:bg-slate-100 hover:text-[#202B61] border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── PRODUCT CARDS GRID (INSPIRED BY MARKETPLACE REFERENCE) ── */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-3">
            <Layers className="w-10 h-10 mx-auto text-slate-300" />
            <h3 className="font-heading font-bold text-lg text-[#202B61]">No products found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any applications matching your current filter criteria. Try resetting your search or category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveTab("all");
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-[#202B61] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredProducts.map((product) => {
              const isFree = product.pricingType === "free";

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md text-left"
                >
                  {/* Top: Image Thumbnail + Floating Price Badge */}
                  <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100 shrink-0">
                    <Image
                      src={product.previewImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Floating Price Pill Badge in Top Right */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <div
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold shadow-sm backdrop-blur-md ${
                          isFree
                            ? "bg-emerald-600/95 text-white border border-emerald-400"
                            : "bg-[#202B61]/95 text-white border border-[#3B82F6]/50"
                        }`}
                      >
                        <span>{product.priceLabel}</span>
                        {product.billingPeriod && (
                          <span className="text-[10px] font-medium opacity-85">
                            {product.billingPeriod}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Flagship / Badge Pill in Top Left */}
                    {product.badge && (
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#202B61] border border-slate-200/80 shadow-xs">
                          <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                          <span>{product.badge}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Middle: Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      
                      {/* Tags Bar */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {product.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-[#202B61]/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title & Logo Row */}
                      <div className="flex items-start justify-between gap-3 pt-1">
                        <div>
                          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61] group-hover:text-[#202B61] transition-colors leading-snug">
                            {product.name}
                          </h3>
                          <p className="font-sans text-xs text-slate-500 font-medium pt-0.5">
                            {product.tagline}
                          </p>
                        </div>

                        {/* Product Logo Thumbnail */}
                        <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                          <img
                            src={product.logo}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                          <span className="ml-1 text-[#202B61] font-bold">{product.rating}</span>
                        </div>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">{product.reviewsCount}</span>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal text-pretty line-clamp-2">
                        {product.description}
                      </p>

                      {/* Key Features (Top 3 with Checkmarks) */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        {product.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1 leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Buttons: Live Demo + View Details / Purchase */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      {product.liveUrl && (
                        <a
                          href={product.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200/90 hover:border-[#202B61] text-[#202B61] font-heading font-bold text-xs bg-slate-50/60 hover:bg-slate-100 transition-colors"
                          title={`Open ${product.name} Live Demo`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#202B61] hover:bg-[#151E48] text-white font-heading font-bold text-xs shadow-xs transition-colors cursor-pointer"
                      >
                        <span>{isFree ? "Get Started" : "Details & Buy"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Interactive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
