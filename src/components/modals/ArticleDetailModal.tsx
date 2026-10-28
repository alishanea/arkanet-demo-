"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

function MagneticCloseButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.88 }}
      className="group absolute top-5 right-5 sm:top-7 sm:right-7 z-50 w-10 h-10 rounded-xl bg-white hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden shrink-0 shadow-md border border-slate-200/90"
      aria-label="Close modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-slate-600 group-hover:text-[#202B61] transition-colors duration-200"
      >
        <X className="w-4 h-4" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  );
}

export interface ArticleItem {
  id: number;
  title: string;
  category: string;
  readTime: string;
  description: string;
  author: string;
  date: string;
  image: string;
  avatar: string;
  content?: {
    intro: string[];
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export interface ArticleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: ArticleItem | null;
  allArticles?: ArticleItem[];
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  isOpen,
  onClose,
  article,
  allArticles = [],
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<ArticleItem | null>(null);

  // Sync current article when prop changes
  useEffect(() => {
    if (article) setCurrentArticle(article);
  }, [article]);

  // Lock body scroll while modal is open & reset scroll state
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsScrolled(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Expand to full screen on scroll (same as ContactFormModal)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 20) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  };

  if (!currentArticle) return null;

  // Find next article
  const currentIndex = allArticles.findIndex((a) => a.id === currentArticle.id);
  const nextArticle = allArticles[(currentIndex + 1) % allArticles.length] ?? null;

  const handleNextArticle = () => {
    if (nextArticle) {
      setCurrentArticle(nextArticle);
      // scroll back to top
      const scrollEl = document.getElementById("article-modal-scroll");
      if (scrollEl) scrollEl.scrollTop = 0;
    }
  };

  const renderParagraph = (paragraph: string) => {
    const parts = paragraph.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={`${part}-${index}`} className="font-heading font-bold text-[#202B61]">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end font-sans">

          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#202B61]/40 backdrop-blur-xs z-40 cursor-pointer"
          />

          {/* Slide-Up Panel in Brand Palette */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`fixed bottom-0 z-50 bg-[#f4f6fb] text-[#202B61] border-t border-slate-200/90 shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? "inset-x-0 top-0 rounded-t-none"
                : "inset-x-0 sm:inset-x-6 xl:inset-x-[36px] top-[70px] sm:top-[100px] lg:top-[120px] rounded-t-2xl sm:rounded-t-3xl"
            }`}
          >
            {/* Magnetic Close (X) Button */}
            <MagneticCloseButton onClick={onClose} />

            {/* Scrollable Content Body */}
            <div
              id="article-modal-scroll"
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >

              {/* ── TOP HERO SHOWCASE CARD ── */}
              <div className="px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 lg:pt-12 pb-0">
                <div className="max-w-[1350px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs">

                    {/* Left: Article Image */}
                    <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[260px] lg:min-h-[380px] overflow-hidden bg-slate-100">
                      <Image
                        src={currentArticle.image}
                        alt={currentArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right: Title + Category/ReadTime + Description */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-5 p-7 sm:p-10 lg:p-12 bg-white">

                      {/* Category & Read Time */}
                      <div className="flex items-center gap-2.5">
                        <span className="font-semibold text-xs text-[#1d4ed8] bg-blue-50 border border-blue-100 px-3 py-1 rounded-md">
                          {currentArticle.category}
                        </span>
                        <span className="text-slate-400 font-sans text-xs">
                          {currentArticle.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#202B61] tracking-tight leading-tight">
                        {currentArticle.title}
                      </h1>

                      {/* Description excerpt */}
                      <p className="font-sans text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                        {currentArticle.description}
                      </p>

                      {/* Author row */}
                      <div className="flex items-center gap-3 pt-2 p-3 rounded-xl bg-[#f8fafc] border border-slate-200/80 max-w-md">
                        <div className="w-9 h-9 rounded-full overflow-hidden relative bg-slate-200 shrink-0">
                          <Image
                            src={currentArticle.avatar}
                            alt={currentArticle.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-xs sm:text-sm">
                          <p className="font-bold text-[#202B61]">{currentArticle.author}</p>
                          <p className="text-slate-500 font-sans text-xs">{currentArticle.date}</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* ── ARTICLE BODY CONTENT ── */}
              <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-12">
                <div className="max-w-[1350px] mx-auto space-y-8 sm:space-y-10">

                  <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-2xs space-y-8">
                    {/* Intro paragraphs */}
                    <div className="space-y-5 font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {(currentArticle.content?.intro ?? [currentArticle.description]).map((paragraph) => (
                        <p key={paragraph}>{renderParagraph(paragraph)}</p>
                      ))}
                    </div>

                    {currentArticle.content?.sections.map((section) => (
                      <div key={section.heading} className="space-y-4 pt-6 border-t border-slate-100">
                        <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                          {section.heading}
                        </h2>
                        <div className="space-y-4 font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{renderParagraph(paragraph)}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── UP NEXT ARTICLE CARD ── */}
                  {nextArticle && (
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 shadow-2xs space-y-6">
                      <div className="space-y-1 border-b border-slate-100 pb-4">
                        <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                          Up Next
                        </h2>
                        <p className="font-sans text-xs sm:text-sm text-slate-500">
                          Continue exploring perspectives from our engineering leadership.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-6 sm:gap-8 items-center">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                          <Image
                            src={nextArticle.image}
                            alt={nextArticle.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-col justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-[#1d4ed8]">
                              <span>{nextArticle.category}</span>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-500 font-normal">{nextArticle.readTime}</span>
                            </div>

                            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] leading-snug">
                              {nextArticle.title}
                            </h3>

                            <p className="font-sans text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                              {nextArticle.description}
                            </p>
                          </div>

                          <div>
                            <button
                              type="button"
                              onClick={handleNextArticle}
                              className="group inline-flex items-center gap-2 bg-[#202B61] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
                            >
                              <span>Read Next Article</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
