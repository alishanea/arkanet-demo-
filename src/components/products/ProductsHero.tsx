"use client";

import React from "react";
import Image from "next/image";

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative w-full sm:min-h-[50vh] pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 bg-white border-b border-slate-200/80 text-left select-none overflow-hidden font-sans flex flex-col justify-center">
      {/* ── CINEMATIC AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/assets/images/work-hero-studio.webp"
          alt="Arkanet Products & Software Ecosystem"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center sm:object-right-top opacity-55 sm:opacity-65 brightness-[1.03] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-white/40 sm:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto sm:my-auto space-y-4">
        <div className="max-w-3xl space-y-3 text-left">
          <h1 className="hero-h1 font-heading font-extrabold text-[#202B61] text-4xl sm:text-6xl lg:text-[64px] tracking-tight leading-[1.05] text-balance">
            Products &amp; Platforms
          </h1>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl text-pretty pt-1">
            Browse our suite of proprietary production applications, developer tools, and enterprise cloud software—available as free open utilities or enterprise subscriptions.
          </p>
        </div>
      </div>
    </section>
  );
};
