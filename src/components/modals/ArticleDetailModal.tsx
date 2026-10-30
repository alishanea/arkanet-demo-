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
      className="group fixed top-5 right-5 sm:top-8 sm:right-8 z-50 w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden shrink-0"
      aria-label="Close article modal"
    >
      <motion.div
        animate={{ rotate: isHovered ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="text-[#202B61]/80 group-hover:text-[#202B61] transition-colors duration-200"
      >
        <X className="w-5 h-5" strokeWidth={2.5} />
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
  const [currentArticle, setCurrentArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    if (article) setCurrentArticle(article);
  }, [article]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!currentArticle) return null;

  const currentIndex = allArticles.findIndex((a) => a.id === currentArticle.id);
  const nextArticle =
    allArticles.length > 0 && currentIndex !== -1
      ? allArticles[(currentIndex + 1) % allArticles.length]
      : null;

  const handleNextArticle = () => {
    if (nextArticle) {
      setCurrentArticle(nextArticle);
      const scrollEl = document.getElementById("article-modal-scroll");
      if (scrollEl) scrollEl.scrollTop = 0;
    }
  };

  const renderParagraph = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
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
        <div className="fixed inset-0 z-50 font-sans">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#202B61]/40 backdrop-blur-xs z-40 cursor-pointer"
          />

          {/* Full-Screen Page Modal (Seamless white, no nested floating card boxes) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-50 bg-white text-[#202B61] flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <MagneticCloseButton onClick={onClose} />

            {/* Scrollable Content Body */}
            <div
              id="article-modal-scroll"
              className="flex-1 overflow-y-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20"
            >
              <div className="max-w-4xl mx-auto space-y-12 sm:space-y-14">
                
                {/* ── HEADER & META ── */}
                <div className="space-y-4">
                  {/* Category & Read Time (Unboxed clean text) */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#202B61]">
                    <span>{currentArticle.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[#202B61]/80 font-normal">{currentArticle.readTime}</span>
                  </div>

                  {/* Title */}
                  <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.1]">
                    {currentArticle.title}
                  </h1>

                  {/* Description Excerpt */}
                  <p className="font-sans text-lg sm:text-xl text-[#202B61]/80 font-normal leading-relaxed pt-2">
                    {currentArticle.description}
                  </p>

                  {/* Author Row (Unboxed clean text) */}
                  <div className="flex items-center gap-3 pt-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-slate-200 shrink-0">
                      <Image
                        src={currentArticle.avatar}
                        alt={currentArticle.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-[#202B61]">{currentArticle.author}</p>
                      <p className="text-[#202B61]/80 font-sans text-xs">{currentArticle.date}</p>
                    </div>
                  </div>
                </div>

                {/* ── FEATURED IMAGE ── */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-sm">
                  <Image
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* ── ARTICLE BODY CONTENT (Seamless typography, no card boxes) ── */}
                <div className="pt-6 border-t border-slate-200/80 space-y-8">
                  {/* Intro paragraphs */}
                  <div className="space-y-5 font-sans text-base sm:text-lg text-[#202B61]/80 leading-relaxed font-normal">
                    {(currentArticle.content?.intro ?? [currentArticle.description]).map((paragraph) => (
                      <p key={paragraph}>{renderParagraph(paragraph)}</p>
                    ))}
                  </div>

                  {currentArticle.content?.sections.map((section) => (
                    <div key={section.heading} className="space-y-4 pt-8 border-t border-slate-100">
                      <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202B61]">
                        {section.heading}
                      </h2>
                      <div className="space-y-4 font-sans text-base sm:text-lg text-[#202B61]/80 leading-relaxed font-normal">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{renderParagraph(paragraph)}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── UP NEXT ARTICLE ── */}
                {nextArticle && (
                  <div className="pt-12 border-t border-slate-200/80 space-y-6">
                    <div className="space-y-1">
                      <h2 className="font-heading font-bold text-2xl text-[#202B61]">
                        Up Next
                      </h2>
                      <p className="font-sans text-sm text-[#202B61]/80">
                        Continue exploring perspectives from our engineering leadership.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-6 items-center pt-2">
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/70">
                        <Image
                          src={nextArticle.image}
                          alt={nextArticle.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#202B61]">
                          <span>{nextArticle.category}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-[#202B61]/80 font-normal">{nextArticle.readTime}</span>
                        </div>

                        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202B61] leading-snug">
                          {nextArticle.title}
                        </h3>

                        <p className="font-sans text-sm text-[#202B61]/80 line-clamp-2 leading-relaxed">
                          {nextArticle.description}
                        </p>

                        <div>
                          <button
                            type="button"
                            onClick={handleNextArticle}
                            className="group inline-flex items-center gap-2 bg-[#202B61] hover:bg-[#161e47] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
