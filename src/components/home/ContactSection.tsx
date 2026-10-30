"use client";

import React, { useState } from "react";
import { 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Check,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight
} from "lucide-react";

const SERVICES_LIST = [
  "Web & SaaS Platforms",
  "Mobile Applications",
  "Applied AI & Automation",
  "Cloud & DevOps",
  "Custom Software",
  "UI/UX & Product Design"
];

const OFFICE_LOCATIONS = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    badge: "Regional Headquarters",
    entity: "Arkanet Technologies LLC",
    address: "Suite 308, Capital Golden Tower, Business Bay, Dubai, UAE",
    poBox: "P.O. Box: 393317",
    phone: "+971 50 933 8430",
    phoneHref: "tel:+971509338430",
    email: "sales@arkanet.ae",
    emailHref: "mailto:sales@arkanet.ae",
    hours: "Sun – Thu: 9:00 AM – 6:00 PM GST"
  },
  {
    city: "Kerala",
    country: "India",
    badge: "Engineering & R&D Hub",
    entity: "Arkanet Technologies",
    address: "Kelakam, Kannur, Kerala 670674, India",
    poBox: null,
    phone: "+91 90741 04372",
    phoneHref: "tel:+919074104372",
    email: "info@arkanet.in",
    emailHref: "mailto:info@arkanet.in",
    hours: "Mon – Sat: 9:00 AM – 6:30 PM IST"
  }
];

interface ContactSectionProps {
  hideHeroHeader?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ hideHeroHeader = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web & SaaS Platforms",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative w-full bg-[#f4f6fb] text-[#202B61] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 selection:bg-[#202B61] selection:text-white font-sans">
      <div className="max-w-[1320px] mx-auto space-y-10 sm:space-y-12">
        
        {/* Optional Section Header */}
        {!hideHeroHeader && (
          <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8 max-w-3xl space-y-3 text-left">
            <h2 className="section-h2 whitespace-pre-line">
              Let&apos;s build something{"\n"}exceptional together
            </h2>
            <p className="section-desc max-w-2xl">
              Have a product concept or an engineering challenge? Reach our leadership in Dubai and India directly, or share your requirements below.
            </p>
          </div>
        )}

        {/* 2-Column Balanced Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start text-left">
          
          {/* ── LEFT COLUMN: PROJECT INQUIRY FORM (Span 7) ── */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-sm transition-all">
            {submitted ? (
              <div className="py-14 sm:py-20 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-[#202B61] flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61]">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#202B61]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#202B61]">{formData.name}</span>. Our solutions leadership has received your message and will respond to <span className="font-semibold text-[#202B61]">{formData.email}</span> within 2 hours.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "Web & SaaS Platforms",
                        message: ""
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#202B61] transition-colors cursor-pointer"
                  >
                    <span>Send another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                
                {/* Form Header */}
                <div className="space-y-1.5 border-b border-slate-100 pb-4">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                    Project Inquiry
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#202B61]/80 leading-relaxed">
                    Tell us about your product goals. Our engineering leads will review technical scope, feasibility, and timelines.
                  </p>
                </div>

                {/* 1. Practice / Service Selection */}
                <div className="space-y-2.5">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#202B61]">
                    1. Practice Area <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICES_LIST.map((srv) => {
                      const isSelected = formData.service === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer border flex items-center justify-between ${
                            isSelected
                              ? "bg-[#202B61] text-white border-[#202B61] shadow-2xs"
                              : "bg-[#f8fafc] hover:bg-white text-[#202B61]/80 border-slate-200/90 hover:border-slate-300"
                          }`}
                        >
                          <span className="truncate">{srv}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-1.5" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Contact Details */}
                <div className="space-y-2.5">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#202B61]">
                    2. Contact Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-[#202B61]/90">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-[#202B61] transition-all placeholder:text-[#202B61]/40"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-[#202B61]/90">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-[#202B61] transition-all placeholder:text-[#202B61]/40"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-[#202B61]/90">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-[#202B61] transition-all placeholder:text-[#202B61]/40"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-[#202B61]/90">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Enterprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-[#202B61] transition-all placeholder:text-[#202B61]/40"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Project Requirements */}
                <div className="space-y-1.5">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#202B61]">
                    3. Project Scope &amp; Timeline <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe what you're planning to build, target launch milestones, or any existing system you need to modernize..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-[#202B61] transition-all resize-none placeholder:text-[#202B61]/40 leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#202B61] hover:bg-[#161e47] text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Sending Inquiry..." : "Submit Project Inquiry"}</span>
                    <Send className="w-3.5 h-3.5 text-white/80" />
                  </button>

                  <div className="flex items-center gap-2 text-xs text-[#202B61]/70">
                    <ShieldCheck className="w-4 h-4 text-[#202B61]" />
                    <span>Protected by strict mutual NDA</span>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* ── RIGHT COLUMN: OFFICES & INSTANT CHANNELS (Span 5) ── */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp & Fast Connect Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-4 shadow-sm text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]">
                    Direct Engineering Connect
                  </span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                  Live Response
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#202B61]/80 leading-relaxed">
                Need an immediate technical consultation or project feasibility answer? Connect directly with our engineering team on WhatsApp or phone.
              </p>

              <a
                href="https://wa.me/919074104372?text=Hi%20Arkanet%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#202B61] hover:bg-[#161e47] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chat on WhatsApp (+91 90741 04372)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
              </a>
            </div>

            {/* Official Global Hubs: Dubai & Kerala */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#202B61]">
                  Official Global Offices
                </span>
                <span className="font-sans text-[11px] text-[#202B61]/60">
                  UAE &amp; India
                </span>
              </div>

              {OFFICE_LOCATIONS.map((loc) => (
                <div
                  key={loc.city}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 space-y-3.5 shadow-sm text-left transition-all hover:border-slate-300"
                >
                  {/* Location Header */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#202B61]" />
                        <h4 className="font-heading font-bold text-base text-[#202B61]">
                          {loc.city}, {loc.country}
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-[#202B61]/70 mt-0.5">
                        {loc.entity}
                      </p>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#202B61] bg-[#f4f6fb] border border-slate-200 px-2 py-0.5 rounded-md shrink-0">
                      {loc.badge}
                    </span>
                  </div>

                  {/* Physical Address */}
                  <p className="font-sans text-xs sm:text-[13px] text-[#202B61]/80 leading-relaxed">
                    {loc.address}
                    {loc.poBox && <span className="block text-[#202B61]/60 text-xs mt-0.5">{loc.poBox}</span>}
                  </p>

                  {/* Contact Links & Working Hours */}
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
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

                    <div className="flex items-center gap-1.5 text-[11px] text-[#202B61]/60 pt-0.5">
                      <Clock className="w-3 h-3 text-[#202B61]/50" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
