"use client";

import React from "react";
import { MessageSquare, Phone, Clock } from "lucide-react";

export const MidPageCtaBand: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f6fb] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 select-none border-t border-slate-200/80">
      <div className="max-w-[1400px] mx-auto bg-white border border-slate-200/90 rounded-2xl shadow-sm px-6 sm:px-10 lg:px-12 py-12 sm:py-14 lg:py-16">
        
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Column: Headline + Live Status Pill */}
          <div className="text-left space-y-6 max-w-4xl">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-[#202B61]">
              Have a brief? Send it over, 
              <br className="hidden sm:block" />
              we&apos;ll tell you what it takes.
            </h3>
            
            {/* Response Status Pill */}
            <div className="inline-flex items-center gap-2.5 bg-slate-100 rounded-full px-4 py-2 border border-slate-200/80">
              <Clock className="w-4 h-4 text-[#202B61] shrink-0" />
              <p className="font-sans text-xs sm:text-sm text-slate-700 font-medium tracking-normal">
                Usually reply in under 15 min <span className="text-slate-300 mx-1.5">|</span> 9 AM – 10 PM IST
              </p>
            </div>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919074104372"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#202B61] hover:bg-[#161e47] text-white font-sans text-base font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-sm cursor-pointer w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>

            {/* Call Button */}
            <a
              href="tel:+919074104372"
              className="group inline-flex items-center justify-center gap-3 bg-white border border-slate-200/90 hover:bg-slate-50 text-[#202B61] font-sans text-base font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#202B61]" />
              <span>Call us</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
