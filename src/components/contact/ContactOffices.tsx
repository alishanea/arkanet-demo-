import React from "react";
import { MessageCircle, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { OFFICE_LOCATIONS } from "@/lib/contactData";

export const ContactOffices: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#F8FAFC] border-b border-slate-200/90 text-left select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="w-full text-left space-y-2 max-w-3xl">
          <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#202B61]/70">
            Global Headquarters &amp; Operations
          </p>
          <h2 className="section-h2 leading-tight tracking-tight">
            Our Physical Presence
          </h2>
          <p className="body-main text-[#202B61]/80 leading-relaxed">
            Connect directly with our leadership and engineering teams in Dubai and India.
          </p>
        </div>

        {/* WhatsApp Quick Consultation Bar */}
        <div className="rounded-[4px] border border-slate-200/90 bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-none">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <h3 className="font-heading font-bold text-base text-[#202B61]">
                Quick Consultation on WhatsApp
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#202B61]/80 leading-relaxed">
              Need an immediate feasibility answer? Connect directly with our engineering team.
            </p>
          </div>

          <a
            href="https://wa.me/919074104372?text=Hi%20Arkanet%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#202B61] hover:bg-[#161e47] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-[4px] transition-all cursor-pointer shadow-none hover:shadow-none shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Chat on WhatsApp (+91 90741 04372)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
          </a>
        </div>

        {/* 2 Symmetrical Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {OFFICE_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="rounded-[4px] border border-slate-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-none text-left flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#202B61]" />
                    <h3 className="font-heading font-bold text-lg text-[#202B61]">
                      {loc.city}, {loc.country}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-[#202B61]/70 mt-1">
                    {loc.entity}
                  </p>
                </div>

                <p className="font-sans text-sm text-[#202B61]/80 leading-relaxed">
                  {loc.address}
                  {loc.poBox && <span className="block text-[#202B61]/60 text-xs mt-1">{loc.poBox}</span>}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={loc.phoneHref}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#202B61] hover:text-[#202B61]/70 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#202B61]/60" />
                    <span>{loc.phone}</span>
                  </a>

                  <a
                    href={loc.emailHref}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#202B61] hover:text-[#202B61]/70 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#202B61]/60" />
                    <span>{loc.email}</span>
                  </a>
                </div>

                <div className="flex items-center gap-1.5 text-[#202B61]/60 pt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

