"use client";

import React from "react";

export function AboutHero() {
  return (
    <section className="relative w-full h-[100vh] h-[100dvh] flex flex-col justify-center items-center bg-[#eaeaea] text-[#202B61] select-none py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 border-b border-slate-200/80 overflow-hidden font-sans">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85"
          alt="Arkanet Team & Engineering Workspace"
          className="w-full h-full object-cover opacity-50 brightness-105 saturate-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eaeaea]/80 via-[#eaeaea]/60 to-[#eaeaea]/90 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <h1 className="hero-h1 text-[#202B61] text-center">
            The Digital Innovation<br />
            Company
          </h1>

          <p className="hero-sub font-medium text-[#202B61] leading-[1.65] max-w-2xl sm:max-w-3xl text-center mx-auto text-pretty">
            With 15+ years of technology and enterprise engineering experience, Arkanet Technologies blends AI, Blockchain, IoT, AR/VR, and cloud infrastructure to architect next-generation digital platforms for enterprises and ambitious brands worldwide.
          </p>
        </div>
      </div>

    </section>
  );
}
