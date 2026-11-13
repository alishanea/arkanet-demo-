"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Star, ArrowUpRight, Check, Download, ExternalLink } from "lucide-react";
import { ApplicationItem } from "@/lib/applicationsData";

const AppleLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1 .08 2.01-.49 2.63-1.24z" />
  </svg>
);

const PlayLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.215 2.215 0 0 1-.61-.318c-.645-.487-1-1.296-1-2.222V4.354c0-.926.355-1.735 1-2.222.19-.144.402-.255.609-.318zm11.558 11.558l2.585 2.586-12.39 7.072 9.805-9.658zm0-2.744L5.362.97l12.39 7.072-2.585 2.586zm1.375 1.372l3.856 2.2-3.856 2.2V12z" />
  </svg>
);

const ShopifyLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.33 2.17a.64.64 0 0 0-.58.37L12.5 7.55 10.4 3.08a.64.64 0 0 0-.58-.37.66.66 0 0 0-.62.43L6.2 11.85a.65.65 0 0 0 .19.74l6.11 4.75a.65.65 0 0 0 .8 0l6.11-4.75a.65.65 0 0 0 .19-.74L16.6 3.14a.66.66 0 0 0-.62-.43z" />
  </svg>
);

interface ApplicationModalProps {
  app: ApplicationItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  app,
  onClose,
  onOpenContact,
}) => {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  if (!app) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-[24px] border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xl max-h-[92vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#202B61] transition-colors cursor-pointer rounded-full hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pr-8">
          <div className="space-y-1 min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#202B61]/70 block">
              {app.category} • {app.subCategory}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] leading-tight text-balance">
              {app.name}
            </h3>
            <p className="font-sans text-xs text-[#202B61]/70">
              {app.client} • Released {app.year}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm hover:bg-[#151E48] transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <span>Request Custom Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-50 border border-slate-200/90 text-center text-xs">
          <div>
            <span className="block text-[10.5px] text-[#202B61]/70 uppercase tracking-wider font-semibold">
              Customer Rating
            </span>
            <span className="font-bold text-[#202B61] text-sm flex items-center justify-center gap-1 mt-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
              {app.rating}
            </span>
            <span className="block text-[10px] text-[#202B61]/70 mt-0.5">
              {app.reviewsCount}
            </span>
          </div>

          <div className="border-x border-slate-200/90">
            <span className="block text-[10.5px] text-[#202B61]/70 uppercase tracking-wider font-semibold">
              Platform
            </span>
            <span className="font-bold text-[#202B61] text-sm block mt-0.5 truncate px-1">
              {app.platformBadge}
            </span>
            <span className="block text-[10px] text-emerald-600 font-semibold mt-0.5">
              Live in Production
            </span>
          </div>

          <div>
            <span className="block text-[10.5px] text-[#202B61]/70 uppercase tracking-wider font-semibold">
              Architecture
            </span>
            <span className="font-bold text-[#202B61] text-sm block mt-0.5 truncate px-1">
              {app.category}
            </span>
            <span className="block text-[10px] text-[#202B61]/70 mt-0.5">
              Arkanet Verified
            </span>
          </div>
        </div>

        {/* Download & Access Options */}
        <div className="space-y-2 pt-1">
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70 block">
            Download &amp; Store Access Options
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 hover:bg-slate-50 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                {app.downloads.primaryType === "apple" ? (
                  <AppleLogo className="w-5 h-5 text-[#202B61]" />
                ) : app.downloads.primaryType === "shopify" ? (
                  <ShopifyLogo className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Download className="w-5 h-5 text-[#202B61]" />
                )}
                <div className="text-left">
                  <span className="block font-sans font-bold text-xs text-[#202B61]">
                    {app.downloads.primaryLabel}
                  </span>
                  <span className="block font-sans text-[10.5px] text-[#202B61]/70">
                    Official Storefront Link
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#202B61]/70 group-hover:text-[#202B61] transition-colors" />
            </button>

            {app.downloads.secondaryLabel && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-[#202B61]/40 hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  {app.downloads.secondaryType === "android" ? (
                    <PlayLogo className="w-5 h-5 text-[#202B61]" />
                  ) : (
                    <ExternalLink className="w-4.5 h-4.5 text-[#202B61]" />
                  )}
                  <div className="text-left">
                    <span className="block font-sans font-bold text-xs text-[#202B61]">
                      {app.downloads.secondaryLabel}
                    </span>
                    <span className="block font-sans text-[10.5px] text-[#202B61]/70">
                      Direct Access &amp; Demo
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#202B61]/70 group-hover:text-[#202B61] transition-colors" />
              </button>
            )}
          </div>
        </div>

        {/* Screenshots Gallery with Thumbnails */}
        <div className="space-y-2 pt-1">
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70 block">
            Interface Screenshots Preview
          </span>

          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90">
            <Image
              src={app.screenshots[activeScreenshotIdx] || app.previewImage}
              alt={app.name}
              fill
              className="object-cover transition-all duration-300"
            />
          </div>

          {app.screenshots.length > 1 && (
            <div className="flex items-center gap-2 pt-1">
              {app.screenshots.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveScreenshotIdx(idx)}
                  className={`relative w-20 h-12 rounded-lg overflow-hidden border cursor-pointer transition-all ${
                    activeScreenshotIdx === idx
                      ? "border-[#202B61] ring-2 ring-[#202B61]/20 scale-102"
                      : "border-slate-200/90 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* About Description */}
        <div className="space-y-1.5 pt-1">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
            About The Application
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#202B61]/80 leading-relaxed text-pretty">
            {app.description}
          </p>
        </div>

        {/* Key Deliverables & Features */}
        <div className="space-y-2 pt-1 border-t border-slate-100">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
            Key Features &amp; Deliverables
          </h4>
          <div className="space-y-1.5">
            {app.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#202B61]/85">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-1.5 pt-1 border-t border-slate-100">
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
            Engineered With
          </h4>
          <div className="flex flex-wrap items-center gap-1.5">
            {app.techStack.map((tech) => (
              <span
                key={tech}
                className="font-sans text-[11px] font-medium text-[#202B61] bg-white border border-slate-200/90 px-2.5 py-0.5 rounded-[4px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom Inquire */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <span className="font-sans text-[11px] text-[#202B61]/70">
            Compatibility: {app.platforms}
          </span>
          
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#202B61] text-white font-sans font-bold text-xs hover:bg-[#151E48] transition-all cursor-pointer shadow-xs ml-auto"
          >
            <span>Request Custom Build &amp; Source</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

