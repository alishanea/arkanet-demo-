"use client";

import React, { useState } from "react";
import { 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Check,
  Clock,
  Mail
} from "lucide-react";

const SERVICES_LIST = [
  "Web & SaaS Platforms",
  "Mobile Applications",
  "Applied AI & Automation",
  "Cloud & DevOps",
  "Custom Software",
  "UI/UX & Product Design"
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
    <section className="relative w-full bg-[#f4f6fb] text-[#202B61] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-12 selection:bg-[#202B61] selection:text-white">
      <div className="max-w-[1200px] mx-auto space-y-8 sm:space-y-10">
        
        {/* Optional Hero Header when used standalone */}
        {!hideHeroHeader && (
          <div className="w-full border-b border-slate-200/80 pb-6 sm:pb-8 max-w-3xl space-y-3 text-left">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202B61] tracking-tight leading-[1.08]">
              Let&apos;s build something <br className="hidden sm:inline" />
              <span className="text-[#202B61]">exceptional together</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Have a product concept or an engineering challenge? Share your project details with our team.
            </p>
          </div>
        )}

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start text-left">
          
          {/* Main Inquiry Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-sm transition-all">
            {submitted ? (
              <div className="py-14 sm:py-20 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-[#202B61] flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#202B61]">
                    Inquiry Received!
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our solutions team has received your inquiry and will reach out to <span className="font-semibold text-[#202B61]">{formData.email}</span> within 2 hours.
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
                  >
                    <span>Send another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                
                {/* Form Header */}
                <div className="space-y-1 border-b border-slate-100 pb-4">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#202B61]">
                    Project Inquiry
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-500">
                    Tell us what you need and our engineers will get back to you with timelines and feasibility.
                  </p>
                </div>

                {/* 1. What are you looking to engineer? */}
                <div className="space-y-2.5">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-700">
                    1. What are you looking to engineer? <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICES_LIST.map((srv) => {
                      const isSelected = formData.service === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer border flex items-center justify-between ${
                            isSelected
                              ? "bg-[#202B61] text-white border-[#202B61] shadow-2xs"
                              : "bg-[#f8fafc] hover:bg-white text-slate-700 border-slate-200/90 hover:border-slate-300"
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
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Your Contact Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-slate-900 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Project Details */}
                <div className="space-y-1.5">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-700">
                    3. Project Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you would like to build, any key features or references, and your desired launch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-200 focus:bg-white focus:border-[#202B61] focus:ring-1 focus:ring-[#202B61] outline-none text-xs sm:text-sm text-slate-900 transition-all resize-none placeholder:text-slate-400 leading-relaxed"
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

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#202B61]" />
                    <span>Protected by strict confidentiality &amp; NDA</span>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Connect & Fast Response (Span 5 - No Physical Addresses) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Connect Box */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-5 shadow-sm text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-slate-800">
                    Quick Connect
                  </span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                  Online Now
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prefer an immediate conversation? Reach our engineering and solutions team directly on WhatsApp or email for rapid guidance.
              </p>

              <a
                href="https://wa.me/919074104372?text=Hi%20Arkanet%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 90741 04372)</span>
              </a>

              <div className="pt-3 flex flex-col gap-2.5 text-xs text-slate-600 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> General:
                  </span>
                  <a href="mailto:info@arkanet.in" className="font-semibold text-slate-900 hover:text-[#202B61]">
                    info@arkanet.in
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> Middle East Sales:
                  </span>
                  <a href="mailto:sales@arkanet.ae" className="font-semibold text-slate-900 hover:text-[#202B61]">
                    sales@arkanet.ae
                  </a>
                </div>
              </div>
            </div>

            {/* Fast Response Assurance */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm text-left flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#202B61] shrink-0 border border-slate-200/70">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#202B61]">
                  Guaranteed 2-Hour Response
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Every inquiry is reviewed directly by a technical director. We will assess requirements and schedule a focused scoping call.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
