"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Article, articlesData } from "@/lib/blogData";

interface BlogFeedProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogFeed: React.FC<BlogFeedProps> = ({ onSelectArticle }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, articlesData.length));
  };

  return (
    <div className="pb-8 px-6 sm:px-8 lg:px-[40px] max-w-[1400px] min-[1800px]:max-w-[1600px] mx-auto w-full">
      {/* Articles Feed */}
      <div className="divide-y divide-black/10">
        {articlesData.slice(0, visibleCount).map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group grid grid-cols-1 sm:grid-cols-[280px_1fr] md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] xl:grid-cols-[400px_1fr] gap-6 sm:gap-10 lg:gap-12 items-center py-10 sm:py-11 lg:py-[50px] transition-colors cursor-pointer"
          >
            {/* Left Thumbnail Image */}
            <div className="relative w-full aspect-[1/1.05] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-slate-100 shadow-sm border-0 shrink-0 group-hover:shadow-md transition-all">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Right Content Column */}
            <div className="flex flex-col justify-center h-full space-y-5 my-auto">
              <div className="space-y-3.5">
                <h3 className="card-h3 text-[#202B61] group-hover:opacity-80 transition-opacity">
                  {article.title}
                </h3>

                <div className="flex items-center gap-2.5 text-sm sm:text-base lg:text-[17px] font-medium text-[#202B61]/60 pt-1">
                  <span className="font-semibold text-[#202B61]">{article.category}</span>
                  <span className="text-[#202B61]/30">•</span>
                  <span>{article.readTime}</span>
                </div>

                <p className="body-main text-[#202B61]/80 pt-1 line-clamp-4">
                  {article.description}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArticle(article);
                  }}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#202B61]/80 hover:text-[#202B61] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-slate-400 group-hover:text-[#202B61]" />
                </button>

                <div className="flex items-center gap-3 text-sm sm:text-base lg:text-[16px] font-medium text-[#202B61]/80">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative bg-slate-300 shrink-0">
                    <Image
                      src={article.avatar}
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{article.author}</span>
                  <span className="text-[#202B61]/40 ml-2">{article.date}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < articlesData.length && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="bg-[#202B61] hover:bg-[#161e47] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Load more</span>
          </button>
        </div>
      )}
    </div>
  );
};

