"use client";

import React from "react";

export function AboutWhoWeAre() {
  return (
    <section
      id="about-story"
      className="w-full min-h-screen min-h-[100dvh] flex flex-col justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white text-[#202B61] border-b border-slate-200/80 text-left select-none overflow-hidden font-sans scroll-mt-28 sm:scroll-mt-36"
    >
      <div className="max-w-[1400px] w-full mx-auto my-auto">
        {/* Top 2-Column Split: Headline + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Headline + Core Intro */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-[#202B61] leading-[1.18] sm:leading-[1.15] tracking-tight text-balance">
              A passionate team of tech enthusiasts, creatives, and problem solvers
            </h2>
            <p className="font-sans text-base sm:text-lg lg:text-[19px] text-slate-600 leading-relaxed font-normal pt-1 text-pretty">
              Based in Kannur, Kerala with global presence in Business Bay, Dubai, Arkanet Technologies combines diverse backgrounds and deep engineering expertise to create a powerhouse of digital talent. From web development wizards to AI and digital marketing mavens, we have the skills to turn your vision into a digital masterpiece.
            </p>
          </div>

          {/* Right Story Paragraphs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 font-sans text-base sm:text-lg lg:text-[19px] text-slate-600 leading-[1.75] font-normal lg:pt-2">
            <p>
              Our mission is to empower businesses and individuals with innovative solutions that drive measurable success in an ever-evolving digital landscape. We are committed to delivering excellence through creativity, technology, and unwavering dedication to our clients — staying ahead of industry trends, working collaboratively on tailor-made architectures, and building long-term relationships with ongoing support after project launch.
            </p>
            <p>
              As part of a next-generation global technology group, our software, cloud, and artificial intelligence offerings are built on over 15 years of market expertise and enterprise engagements. With our India operations centered in Kelakam, Kannur, we provide agile delivery, transparent sprint reporting, and direct engineering access that modern businesses rely on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
