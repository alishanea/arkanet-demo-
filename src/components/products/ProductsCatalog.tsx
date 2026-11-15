"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Star,
  Heart,
  RotateCcw,
  CreditCard,
  Layers,
} from "lucide-react";
import { PRODUCTS_DATA, ProductItem } from "@/lib/productsData";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";

export const ProductsCatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All categories");
  const [selectedSort, setSelectedSort] = useState<"relevance" | "rating" | "price-low" | "price-high">("relevance");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [likedApps, setLikedApps] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS_DATA.forEach((p) => set.add(p.category));
    return ["All categories", ...Array.from(set)];
  }, []);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedApps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedCategory("All categories");
    setSelectedSort("relevance");
    setMinPrice("");
    setMaxPrice("");
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category filter
      if (selectedCategory !== "All categories" && product.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesTags = product.tags.some((t) => t.toLowerCase().includes(q));
        const matchesDev = product.developer.name.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesTagline && !matchesTags && !matchesDev) {
          return false;
        }
      }

      // Min/Max price filter
      const numericPrice = parseFloat(product.priceLabel.replace(/[^0-9.]/g, "")) || 0;
      if (minPrice && numericPrice < parseFloat(minPrice)) return false;
      if (maxPrice && numericPrice > parseFloat(maxPrice)) return false;

      return true;
    }).sort((a, b) => {
      if (selectedSort === "rating") return b.rating - a.rating;
      const priceA = parseFloat(a.priceLabel.replace(/[^0-9.]/g, "")) || 0;
      const priceB = parseFloat(b.priceLabel.replace(/[^0-9.]/g, "")) || 0;
      if (selectedSort === "price-low") return priceA - priceB;
      if (selectedSort === "price-high") return priceB - priceA;
      return 0; // relevance / default
    });
  }, [selectedCategory, searchQuery, selectedSort, minPrice, maxPrice]);

  return (
    <section id="marketplace-catalog" className="w-full py-6 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-10 bg-[#F4F6FB] text-left select-none font-sans min-h-screen">
      <div className="max-w-[1520px] w-full mx-auto space-y-5 sm:space-y-7">

        {/* ── ONE-LINER HEADER: DIRECTLY SHOW PRODUCTS ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-4 text-left">
          <div>
            <h1 className="font-heading font-extrabold text-[#202B61] text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
              Our Products
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Explore proprietary platforms, team collaboration suites, and enterprise applications engineered by Arkanet.
            </p>
          </div>
          <div className="text-xs font-semibold text-slate-400 shrink-0">
            {filteredProducts.length} Applications Available
          </div>
        </div>

        {/* ── SEARCH & FILTER HERO BAR (LIGHT BLUE INQUISICO BANNER) ── */}
        <div className="bg-[#EBF2FE] border border-[#D3E3FD] rounded-2xl p-3 sm:p-5 shadow-xs space-y-3">

          {/* Row 1: Search Input + Search Button + Category Dropdown */}
          <div className="flex flex-col md:flex-row items-center gap-2.5 sm:gap-3">
            <div className="relative flex-1 w-full flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for the app..."
                className="w-full bg-white border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 rounded-xl pl-10 pr-22 py-2.5 outline-none focus:border-[#202B61] transition-all shadow-2xs"
              />
              <button
                type="button"
                className="absolute right-1.5 bg-[#202B61] hover:bg-[#151E48] text-white text-xs font-bold px-3 sm:px-4 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="w-full md:w-64 shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-700 rounded-xl px-3 py-2.5 outline-none focus:border-[#202B61] transition-all shadow-2xs cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Price Filter + Sort by + Clear all + Results Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1 text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Price Range */}
              <div className="flex items-center gap-1 text-slate-600 font-semibold">
                <span className="uppercase text-[9.5px] tracking-wider text-slate-500 font-bold">PRICE:</span>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Min"
                  className="w-14 sm:w-16 bg-white border border-slate-200 text-xs text-slate-800 rounded-lg px-2 py-1 outline-none focus:border-[#202B61]"
                />
                <span className="text-slate-400">-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Max"
                  className="w-14 sm:w-16 bg-white border border-slate-200 text-xs text-slate-800 rounded-lg px-2 py-1 outline-none focus:border-[#202B61]"
                />
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1 text-slate-600 font-semibold">
                <span className="uppercase text-[9.5px] tracking-wider text-slate-500 font-bold">SORT BY:</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value as any)}
                  className="bg-white border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg px-2 py-1 outline-none focus:border-[#202B61] cursor-pointer"
                >
                  <option value="relevance">Relevance</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Clear All Button */}
              {(searchQuery || selectedCategory !== "All categories" || minPrice || maxPrice || selectedSort !== "relevance") && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-2 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-slate-500" />
                  <span>Clear all</span>
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 self-end sm:self-auto">
              {filteredProducts.length} RESULTS
            </div>
          </div>

        </div>

        {/* ── 5-COLUMN PRODUCT CARDS GRID (RESPONSIVE 1 -> 2 -> 3 -> 4 -> 5 COLS) ── */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-3">
            <Layers className="w-9 h-9 mx-auto text-slate-300" />
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61]">No applications found</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any applications matching your current filter criteria.
            </p>
            <button
              type="button"
              onClick={handleClearAll}
              className="px-4 py-2 rounded-xl bg-[#202B61] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
            {filteredProducts.map((product) => {
              const isLiked = likedApps[product.id] || false;

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-md cursor-pointer text-left"
                >
                  {/* Top Image Preview Area */}
                  <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100 shrink-0">
                    <Image
                      src={product.previewImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    />

                    {/* Floating Price Badge (Top-Right) */}
                    <div className="absolute top-2.5 right-2.5 z-10 max-w-[85%]">
                      <div className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-white/95 text-[#202B61] border border-blue-300 shadow-2xs backdrop-blur-xs truncate">
                        <CreditCard className="w-3 h-3 text-[#3B82F6] shrink-0" />
                        <span className="truncate">{product.priceBadgeText}</span>
                      </div>
                    </div>

                    {/* Heart / Favorite Button (Bottom-Right) */}
                    <button
                      type="button"
                      onClick={(e) => toggleLike(product.id, e)}
                      className={`absolute bottom-2.5 right-2.5 z-10 w-6 h-6 rounded-full bg-white/95 border border-slate-200 flex items-center justify-center transition-transform hover:scale-110 shadow-2xs cursor-pointer ${isLiked ? "text-rose-500" : "text-slate-400 hover:text-rose-500"
                        }`}
                      aria-label="Save to favorites"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-500" : ""}`} />
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                    <div className="space-y-2">

                      {/* Category Colored Pills */}
                      <div className="flex flex-wrap items-center gap-1">
                        {product.tags.slice(0, 3).map((tag, tIdx) => {
                          const tagStyles = [
                            "bg-[#FFE8D6] text-[#C2541C]",
                            "bg-[#E0F2FE] text-[#0369A1]",
                            "bg-[#EDE9FE] text-[#6D28D9]",
                            "bg-[#FCE7F3] text-[#BE185D]",
                          ];
                          const style = tagStyles[tIdx % tagStyles.length];
                          return (
                            <span
                              key={tIdx}
                              className={`text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded ${style}`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>

                      {/* Title & Star Rating */}
                      <div className="flex items-start justify-between gap-1.5 pt-0.5">
                        <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-[#202B61] transition-colors leading-snug line-clamp-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center text-amber-500 shrink-0 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400 mr-0.5" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      {/* Description (2 Lines) */}
                      <p className="font-sans text-[11px] sm:text-[11.5px] text-slate-500 leading-relaxed font-normal line-clamp-2">
                        {product.description}
                      </p>

                      {/* Developer Avatar & Name */}
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <img
                          src={product.developer.avatar}
                          alt={product.developer.name}
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-slate-200 shrink-0"
                        />
                        <span className="text-[10.5px] sm:text-[11px] text-slate-600 font-medium line-clamp-1">
                          {product.developer.name}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Action Button: View details */}
                    <div className="pt-1.5 sm:pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="w-full py-2 rounded-xl border border-slate-200/90 group-hover:border-[#202B61] bg-white group-hover:bg-[#202B61] text-[#202B61] group-hover:text-white font-heading font-bold text-xs transition-colors shadow-2xs text-center"
                      >
                        View details
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* ── SHOW MORE DETAILS MODAL ── */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
