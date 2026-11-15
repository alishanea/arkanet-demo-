"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  Star,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
} from "lucide-react";
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#202B61]/60 backdrop-blur-xs cursor-pointer z-40"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl border border-slate-200/90 shadow-2xl z-50 overflow-hidden flex flex-col text-left text-slate-800"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 bg-slate-50/80">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center p-2 shadow-2xs shrink-0">
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading font-black text-lg sm:text-xl text-[#202B61] leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#202B61]/10 text-[#202B61] border border-[#202B61]/20">
                    {product.priceBadgeText}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-0.5 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{product.developer.name}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                  <span>•</span>
                  <div className="flex items-center text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400 mr-0.5" />
                    <span>{product.rating}</span>
                  </div>
                </div>
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
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                <Image
                  src={images[activeImageIdx]}
                  alt={`${product.name} screenshot ${activeImageIdx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain object-center"
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
                      className={`relative w-24 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
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

            {/* Quick Action Bar inside Modal */}
            <div className="p-4 rounded-2xl bg-[#EBF2FE]/60 border border-[#D3E3FD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#202B61]/80 block">
                  Pricing &amp; Availability
                </span>
                <div className="text-lg font-black text-[#202B61]">
                  {product.priceBadgeText}
                  <span className="text-xs font-normal text-slate-600 ml-2">
                    {product.freeTrial || "Production tier"}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#202B61] text-[#202B61] bg-white hover:bg-slate-50 font-heading font-bold text-xs sm:text-sm transition-colors shadow-2xs"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={product.purchaseUrl || product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#202B61] hover:bg-[#151E48] text-white font-heading font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>{product.pricingType === "free" ? "Get Started Free" : "Purchase & Deploy"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Detailed Overview */}
            <div className="space-y-2">
              <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#202B61]">
                {product.tagline}
              </h4>
              <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            {/* Key Features & Architecture Checklist */}
            <div className="space-y-3">
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                Key Features &amp; Capabilities
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                {product.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2 pt-1">
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
                Technology Stack &amp; Compatibility
              </h5>
              <div className="flex flex-wrap items-center gap-1.5">
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-medium">Verified by Arkanet Architecture Review Board</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>

              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#202B61] hover:bg-[#151E48] text-white font-bold text-xs shadow-xs transition-colors"
              >
                <span>Direct Access</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
