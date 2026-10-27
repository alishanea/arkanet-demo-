"use client";

import React from "react";

export function AboutHero() {
  return (
    <>
      {/* ══ HERO SECTION ══ */}
      <section className="w-full bg-[#f4f6fb] text-[#0b1330] pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-12 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-[4px] bg-[#0b1330] text-white text-[11px] font-bold uppercase tracking-wider mb-5">
            About Arkanet
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0b1330] tracking-tight leading-[1.1] max-w-4xl">
            Powerful products, <br />
            <span>genuine impact</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
            Passionate tech enthusiasts and engineers crafting websites, applications, and AI systems built for real performance.
          </p>
        </div>
      </section>

      {/* ══ SINGLE FULL-WIDTH HERO IMAGE BANNER ══ */}
      <section className="w-full bg-[#f4f6fb] px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] min-h-[260px] sm:min-h-[380px] lg:min-h-[440px] rounded-[5px] overflow-hidden border border-slate-200/90 shadow-none group bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85"
              alt="Arkanet Team & Engineering Workspace"
              loading="eager"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </section>
    </>
  );
}
