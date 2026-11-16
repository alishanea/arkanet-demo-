"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  Download,
  Star,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  FlaskConical,
  ShoppingCart,
  CreditCard,
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const images = product.screenshots?.length ? product.screenshots : [product.previewImage];
  const safeImageIdx = activeImageIdx >= images.length ? 0 : activeImageIdx;
  const currentImage = images[safeImageIdx] || product.previewImage || "/assets/images/prostack-preview-hd.jpg";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 font-sans"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#202B61]/60 backdrop-blur-sm cursor-pointer z-40"
      />

      {/* Modal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92dvh] bg-white rounded-[4px] border border-slate-200/90 shadow-2xl z-50 overflow-hidden flex flex-col text-left text-slate-800"
      >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200/80 bg-slate-50/80 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[4px] bg-white border border-slate-200/90 flex items-center justify-center p-1.5 sm:p-2 shadow-2xs shrink-0">
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <h3 className="font-heading font-black text-base sm:text-xl text-[#202B61] leading-tight truncate">
                    {product.name}
                  </h3>
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-[4px] ${product.pricingType === "free"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-[#202B61]/10 text-[#202B61] border border-[#202B61]/20"
                    }`}>
                    {product.pricingType === "free" ? "Free Product" : `Paid (${product.priceBadgeText})`}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5 text-[11px] sm:text-xs text-slate-500 truncate">
                  <span className="font-semibold text-slate-700 truncate">{product.category}</span>
                  <span>•</span>
                  <div className="flex items-center text-amber-500 font-bold shrink-0">
                    <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 stroke-amber-400 mr-0.5" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-[4px] text-slate-400 hover:text-[#202B61] hover:bg-slate-200/60 transition-colors cursor-pointer shrink-0 ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-7 space-y-5 sm:space-y-6">

            {/* Screenshots Gallery */}
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                <Image
                  src={currentImage}
                  alt={`${product.name} screenshot ${safeImageIdx + 1}`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 sm:w-24 aspect-[16/9] rounded-[4px] overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${safeImageIdx === idx
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

            {/* ── DEDICATED TEST & BUY SECTIONS (AS REQUESTED: TEST DETAILS & BUY DETAILS) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. TEST TYPE DETAILS CARD */}
              <div className="p-4 sm:p-5 rounded-[4px] bg-slate-50 border border-slate-200/90 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-[4px] bg-blue-100/70 border border-blue-200 flex items-center justify-center text-[#202B61]">
                        <FlaskConical className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-extrabold text-sm sm:text-base text-[#202B61]">
                        Test Drive &amp; Live Demo
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-[4px] bg-blue-50 text-blue-700 border border-blue-200">
                      FREE TEST
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Experience {product.name} in a live interactive sandbox environment with full UI workflows before making any commitment.
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700 font-sans pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Instant cloud sandbox with zero installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Pre-loaded with sample data &amp; interactive controls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>No credit card or registration needed to test</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] border border-[#202B61] text-[#202B61] bg-white hover:bg-slate-100 font-heading font-bold text-xs sm:text-sm transition-all shadow-2xs text-center cursor-pointer"
                >
                  <span>Test Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 2. BUY TYPE DETAILS CARD */}
              <div className="p-4 sm:p-5 rounded-[4px] bg-[#EBF2FE]/60 border border-[#D3E3FD] flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-[4px] bg-[#202B61] text-white flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-extrabold text-sm sm:text-base text-[#202B61]">
                        {product.pricingType === "free" ? "Free Download & License" : "Buy License & Deploy"}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-[4px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {product.pricingType === "free" ? "FREE PACKAGE" : "PRODUCTION"}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-black text-xl text-[#202B61]">
                      {product.priceBadgeText}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {product.freeTrial || "Production tier"}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 font-sans pt-1">
                    {product.pricingType === "free" ? (
                      <>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>100% Free for personal and commercial projects</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Direct download package &amp; npm / brew CLI access</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Open-source repository &amp; community support</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Commercial production license &amp; API keys</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>99.99% Uptime SLA with 24/7 priority engineer support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>14-day risk-free money-back guarantee</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {product.pricingType === "free" ? (
                  <a
                    href={product.downloadUrl || product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-xs text-center cursor-pointer"
                  >
                    <span>Download Free Package</span>
                    <Download className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href={product.purchaseUrl || product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] bg-[#202B61] hover:bg-[#151E48] text-white font-heading font-bold text-xs sm:text-sm transition-all shadow-xs text-center cursor-pointer"
                  >
                    <span>Buy License &amp; Deploy</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
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
                  <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-[4px] bg-slate-50 border border-slate-100">
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
                    className="px-3 py-1 rounded-[4px] bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200"
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
                className="px-4 py-2 rounded-[4px] border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>

              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] border border-[#202B61] text-[#202B61] bg-white hover:bg-slate-100 font-bold text-xs shadow-2xs transition-colors"
              >
                <span>Test Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {product.pricingType === "free" ? (
                <a
                  href={product.downloadUrl || product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[4px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>Download Free</span>
                  <Download className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href={product.purchaseUrl || product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-[4px] bg-[#202B61] hover:bg-[#151E48] text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <span>Buy &amp; Deploy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
  );
};
