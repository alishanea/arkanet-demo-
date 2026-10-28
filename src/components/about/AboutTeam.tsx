"use client";

import React from "react";
import { team } from "@/lib/aboutData";

export function AboutTeam() {
  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-12 bg-[#f4f6fb] border-t border-slate-200/80 text-left">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202B61] tracking-tight leading-snug">
            One team, start to finish
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Arkanet is a team of engineers, designers, and strategists working across web, mobile, AI, and digital infrastructure — one cohesive team, not fragmented handoffs between disparate vendors.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-[5px] overflow-hidden bg-white border border-slate-200/90 shadow-none flex flex-col justify-between group"
            >
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text Information Below */}
              <div className="p-4 sm:p-5 text-left border-t border-slate-100">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202B61] leading-tight">
                  {member.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
