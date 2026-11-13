"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { ArticleDetailModal, ArticleItem } from "@/components/modals/ArticleDetailModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { BlogFeed } from "@/components/blog/BlogFeed";
import { Article, articlesData } from "@/lib/blogData";

export default function BlogPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  const outerSideMargin = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    isMobile ? [0, 0, 12] : [0, 0, 40]
  );

  return (
    <main className="min-h-screen bg-white text-[#202B61] flex flex-col justify-between selection:bg-[#202B61] selection:text-white select-none">
      <div className="relative w-full select-none bg-white">
        <div ref={spacerRef} className="relative min-h-[140vh] sm:min-h-[150vh]">
          <motion.div
            style={{ paddingLeft: outerSideMargin, paddingRight: outerSideMargin }}
            className="sticky top-0 z-10 w-full bg-white pt-0"
          >
            <div className="w-full bg-white text-[#202B61] border-none overflow-hidden pb-16 sm:pb-24 relative">
              <div className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden select-none border-b border-slate-200/80">
                <div className="w-full relative z-10 text-left">
                  <h1 className="hero-h1 text-left block">
                    Blog &amp; <br />
                    <span>Engineering Perspectives</span>
                  </h1>
                  <p className="mt-5 text-lg sm:text-xl md:text-2xl text-[#202B61] font-medium leading-relaxed max-w-3xl">
                    Practical thinking on websites, apps, and AI systems from the engineering team at Arkanet.
                  </p>
                </div>
              </div>

              <BlogFeed onSelectArticle={(article) => setSelectedArticle(article as unknown as ArticleItem)} />
            </div>
          </motion.div>
        </div>
      </div>

      <AboutCTA onOpenBooking={() => setContactModalOpen(true)} />
      <Footer onOpenBooking={() => setContactModalOpen(true)} bgColor="bg-white" />

      <ArticleDetailModal
        isOpen={!!selectedArticle}
        article={selectedArticle}
        allArticles={articlesData}
        onClose={() => setSelectedArticle(null)}
      />

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </main>
  );
}
