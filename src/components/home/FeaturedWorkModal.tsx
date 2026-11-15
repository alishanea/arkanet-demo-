"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowUpRight, ExternalLink } from "lucide-react";
import { ApplicationItem } from "@/lib/applicationsData";

interface FeaturedWorkModalProps {
  app: ApplicationItem | null;
  onClose: () => void;
  onOpenContact?: () => void;
}

export const FeaturedWorkModal: React.FC<FeaturedWorkModalProps> = ({
  app,
  onClose,
  onOpenContact,
}) => {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  if (!app) return null;

  const screenshots = app.screenshots?.length ? app.screenshots : [app.previewImage];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#202B61]/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-[4px] border border-slate-200/90 p-4 sm:p-7 space-y-5 sm:space-y-6 shadow-2xl max-h-[92dvh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button with radius < 5 */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#202B61] transition-colors cursor-pointer rounded-[4px] hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-8 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#202B61]/70 block font-heading">
            {app.client || app.category}
          </span>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61] leading-tight text-balance">
            {app.name}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-500 font-medium">
            {app.subCategory} • Delivered {app.year}
          </p>
        </div>

        {/* Interactive Screenshots Gallery */}
        <div className="space-y-3">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[4px] overflow-hidden bg-slate-100 border border-slate-200">
            <Image
              src={screenshots[activeScreenshotIdx] || app.previewImage}
              alt={`${app.name} screenshot ${activeScreenshotIdx + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Thumbnail switcher if multiple screenshots */}
          {screenshots.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {screenshots.map((shot, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveScreenshotIdx(idx)}
                  className={`relative w-20 sm:w-24 aspect-[16/10] rounded-[4px] overflow-hidden shrink-0 border transition-all cursor-pointer ${
                    activeScreenshotIdx === idx
                      ? "border-[#202B61] ring-2 ring-[#202B61]/20 scale-102"
                      : "border-slate-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={shot}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Key Metrics Bar (3 Clean Stats with rounded-[4px]) */}
        <div className="grid grid-cols-3 gap-3 py-3 px-4 rounded-[4px] bg-slate-50 border border-slate-200/90 text-center">
          <div>
            <div className="font-heading font-black text-lg sm:text-xl text-[#202B61] leading-tight">
              {app.metrics.stat1.value}
            </div>
            <div className="font-sans text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight line-clamp-1">
              {app.metrics.stat1.label}
            </div>
          </div>
          <div className="border-x border-slate-200/80 px-2">
            <div className="font-heading font-black text-lg sm:text-xl text-[#202B61] leading-tight">
              {app.metrics.stat2.value}
            </div>
            <div className="font-sans text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight line-clamp-1">
              {app.metrics.stat2.label}
            </div>
          </div>
          <div>
            <div className="font-heading font-black text-lg sm:text-xl text-[#202B61] leading-tight">
              {app.metrics.stat3.value}
            </div>
            <div className="font-sans text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight line-clamp-1">
              {app.metrics.stat3.label}
            </div>
          </div>
        </div>

        {/* Small Detail: Project Overview */}
        <div className="space-y-2 text-left">
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#202B61]">
            Project Overview
          </h4>
          <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
            {app.description}
          </p>
        </div>

        {/* Key Highlights */}
        {app.highlights && app.highlights.length > 0 && (
          <div className="space-y-2 text-left">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#202B61]">
              Architecture Highlights
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {app.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#202B61] font-bold">•</span>
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Chips with rounded-[4px] */}
        {app.techStack && app.techStack.length > 0 && (
          <div className="space-y-2 text-left pt-1">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]/70">
              Technology Stack
            </h4>
            <div className="flex flex-wrap items-center gap-1.5">
              {app.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-[4px] bg-slate-100 text-xs font-semibold text-[#202B61]/80 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Modal Bottom Actions with rounded-[4px] */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2.5 sm:gap-3">
          {app.liveUrl && (
            <a
              href={app.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[4px] border border-slate-200 hover:border-[#202B61] text-[#202B61] text-xs font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              <span>Visit Live Storefront</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {onOpenContact && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-[4px] bg-[#202B61] text-white hover:bg-[#151E48] text-xs font-bold shadow-xs transition-colors cursor-pointer w-full sm:w-auto"
            >
              <span>Request Custom Build</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
