"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowUpRight, ExternalLink } from "lucide-react";
import { ProductItem } from "@/lib/productsData";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenContact?: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenContact,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const images = product.screenshots?.length ? product.screenshots : [product.previewImage];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#202B61]/50 backdrop-blur-xs cursor-pointer z-40"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl z-50 overflow-hidden flex flex-col text-left text-[#202B61]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 bg-slate-50/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center p-1.5 shadow-2xs">
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#202B61] leading-tight">
                    {product.name}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      product.pricingType === "free"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-[#202B61]/10 text-[#202B61] border border-[#202B61]/20"
                    }`}
                  >
                    {product.priceLabel} {product.billingPeriod || ""}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {product.category}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-[#202B61] hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* Screenshots Gallery */}
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <Image
                  src={images[activeImageIdx]}
                  alt={`${product.name} screenshot ${activeImageIdx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {images.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImageIdx === idx
                          ? "border-[#202B61] ring-2 ring-[#202B61]/20 scale-102"
                          : "border-slate-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt="Thumbnail"
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tagline & Overview */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-lg sm:text-xl text-[#202B61]">
                {product.tagline}
              </h4>
              <p className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-3">
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
                Key Product Features &amp; Architecture
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                {product.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2 pt-2">
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
                Technology Stack
              </h5>
              <div className="flex flex-wrap items-center gap-1.5">
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-[#202B61]/80 border border-slate-200/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                <span className="text-xs font-bold text-[#202B61] ml-1">{product.rating}</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {product.freeTrial || "Production Ready"}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 hover:border-[#202B61] text-[#202B61] font-heading font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href={product.purchaseUrl || product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-[#202B61] hover:bg-[#151E48] text-white font-heading font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <span>{product.pricingType === "free" ? "Get Started Free" : "Purchase & Launch"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
