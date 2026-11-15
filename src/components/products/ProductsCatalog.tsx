"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  ExternalLink,
  ArrowUpRight,
  X,
  Layers,
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/lib/productsData";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

type PricingTab = "all" | "free" | "premium";

export const ProductsCatalog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricingTab>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // 1. Pricing Tab Filter
      if (activeTab === "free" && product.pricingType !== "free") return false;
      if (activeTab === "premium" && product.pricingType !== "premium") return false;

      // 2. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesFeatures = product.features.some((f) => f.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTagline && !matchesFeatures) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="products-catalog" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-[#F8FAFC]/70 border-b border-slate-200/80 text-left select-none font-sans">
      <div className="max-w-[1400px] w-full mx-auto space-y-8 sm:space-y-10">
        
        {/* ── TOP CONTROLS: TABS + SEARCH ── */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Pricing Segment Tabs (All Products / Free Products / Premium Products) */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { key: "all", label: "All Products" },
                { key: "free", label: "Free Products" },
                { key: "premium", label: "Premium Products" },
              ].map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key as PricingTab)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer select-none outline-none ${
                      isActive
                        ? "bg-[#202B61] text-white shadow-sm"
                        : "bg-slate-50 text-[#202B61]/80 hover:bg-slate-100 hover:text-[#202B61] border border-slate-200/80"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Clean Search Input */}
            <div className="relative w-full sm:w-80 md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-slate-50/70 border border-slate-200 hover:border-slate-300 focus:border-[#202B61] focus:bg-white text-sm text-[#202B61] placeholder-slate-400 rounded-xl pl-10 pr-9 py-2.5 transition-colors outline-none"
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
        </div>

        {/* ── PRODUCT CARDS GRID ── */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-3">
            <Layers className="w-10 h-10 mx-auto text-slate-300" />
            <h3 className="font-heading font-bold text-lg text-[#202B61]">No products found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any products matching your current search.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveTab("all");
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
                  {/* Top: Image Thumbnail + Clean Price Badge */}
                  <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100 shrink-0">
                    <Image
                      src={product.previewImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Clean Price Badge in Top Right */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold shadow-sm backdrop-blur-md ${
                          isFree
                            ? "bg-emerald-600/95 text-white border border-emerald-400"
                            : "bg-[#202B61]/95 text-white border border-[#3B82F6]/50"
                        }`}
                      >
                        <span>{product.priceLabel}</span>
                        {product.billingPeriod && (
                          <span className="text-[10px] font-medium opacity-85 ml-1">
                            {product.billingPeriod}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Title & Logo Row */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#202B61] leading-snug">
                            {product.name}
                          </h3>
                          <p className="font-sans text-xs text-slate-500 font-medium pt-0.5">
                            {product.tagline}
                          </p>
                        </div>

                        {/* Product Logo Thumbnail */}
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                          <img
                            src={product.logo}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal text-pretty line-clamp-2">
                        {product.description}
                      </p>

                      {/* Key Features (Clean bullet list) */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                        {product.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <span className="text-[#202B61] font-bold">•</span>
                            <span className="line-clamp-1 leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Buttons: Live Demo + Purchase / Get Started */}
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
                        <span>{isFree ? "Get Started" : "Purchase"}</span>
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
