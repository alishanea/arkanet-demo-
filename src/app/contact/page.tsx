"use client";

import React, { useState } from "react";
import { 
  MessageCircle,  
  CheckCircle2, 
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight
} from "lucide-react";

import { ContactHero } from "@/components/contact/ContactHero";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

const OFFICE_LOCATIONS = [
  {
    city: "Kerala",
    country: "India (HQ)",
    entity: "Arkanet Technologies",
    address: "Room No: 227K, Benny complex, Kelakam, Kannur. Kerala 670674, India",
    poBox: null,
    phone: "+91 90741 04372",
    phoneHref: "tel:+919074104372",
    email: "info@arkanet.in",
    emailHref: "mailto:info@arkanet.in",
    hours: "Mon – Sat: 9:00 AM – 6:30 PM IST"
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    entity: "Arkanet Technologies LLC",
    address: "Suite 308, Capital Golden Tower, Business Bay, Dubai, UAE",
    poBox: "P.O. Box: 393317",
    phone: "+971 50 933 8430",
    phoneHref: "tel:+971509338430",
    email: "sales@arkanet.ae",
    emailHref: "mailto:sales@arkanet.ae",
    hours: "Sun – Thu: 9:00 AM – 6:00 PM GST"
  }
];

export default function ContactPage() {
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
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#f4f6fb] text-[#202B61] selection:bg-[#202B61] selection:text-white font-sans overflow-x-hidden">
      <ContactFormModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

      {/* ── PAGE 1: FIRST PAGE FIT AND PROPER (100VH FULL SCREEN) ── */}
      <ContactHero />

      {/* ── PAGE 2: PROJECT DETAILS - BALANCED FULL-WIDTH (ZERO EMPTY SPACES) ── */}
      <section className="relative w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-[#151E48] text-white border-t border-b border-[#253272] text-left select-none overflow-hidden font-sans">
        <div className="max-w-[1400px] mx-auto space-y-6 sm:space-y-8">
          
          {/* Section Header */}
          <div className="w-full text-left space-y-1.5 max-w-3xl pb-4 border-b border-white/10">
            <h2 className="section-h2 text-white !text-white leading-tight tracking-tight">
              Project Details
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed">
              Tell us about what you want to build. Our engineering leads will review your requirements and provide technical scope, timelines, and feasibility.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-[4px] border border-slate-200 p-8 sm:p-12 text-center max-w-xl mx-auto space-y-4 shadow-xl text-[#151E48]">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-none">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-heading font-extrabold text-2xl text-[#151E48]">
                  Project Details Received
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#151E48]">{formData.name}</span>. Our solutions team has received your project details and will follow up with <span className="font-semibold text-[#151E48]">{formData.email}</span> shortly.
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: "General Inquiry",
                      message: ""
                    });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#151E48] hover:bg-[#202B61] text-xs font-bold text-white transition-colors cursor-pointer shadow-none"
                >
                  <span>Submit another project</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full bg-white rounded-[4px] border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-2xl text-[#151E48]">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Contact Information: 4 Balanced Columns Filling 100% of 1400px Grid */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#151E48]">
                      Contact Information
                    </label>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Direct &amp; confidential
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-[4px] bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#151E48] focus:ring-1 focus:ring-[#151E48] outline-none text-xs sm:text-sm text-[#151E48] transition-all placeholder:text-slate-400 shadow-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-[4px] bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#151E48] focus:ring-1 focus:ring-[#151E48] outline-none text-xs sm:text-sm text-[#151E48] transition-all placeholder:text-slate-400 shadow-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-[4px] bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#151E48] focus:ring-1 focus:ring-[#151E48] outline-none text-xs sm:text-sm text-[#151E48] transition-all placeholder:text-slate-400 shadow-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold text-slate-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-[4px] bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#151E48] focus:ring-1 focus:ring-[#151E48] outline-none text-xs sm:text-sm text-[#151E48] transition-all placeholder:text-slate-400 shadow-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Project Description & Timeline: Full Width */}
                <div className="space-y-2">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#151E48]">
                    Project Description &amp; Timeline <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you are planning to build, target timeline, or existing systems to integrate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[4px] bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#151E48] focus:ring-1 focus:ring-[#151E48] outline-none text-xs sm:text-sm text-[#151E48] transition-all resize-none placeholder:text-slate-400 leading-relaxed shadow-none"
                  />
                </div>

                {/* 3. Action Row: Symmetrical Submit Button + Reassurance */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#151E48] hover:bg-[#202B61] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-[4px] transition-all cursor-pointer shadow-none hover:shadow-none disabled:opacity-70"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Submit Project Details"}</span>
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                  <p className="font-sans text-xs text-slate-500 text-center sm:text-right">
                    Direct review by senior engineering lead • Mutual NDA guaranteed
                  </p>
                </div>

              </form>
            </div>
          )}
        </div>
      </section>

      {/* ── PAGE 3: THIRD PAGE ADDRESS OF OFFICES & DIRECT CONTACT ── */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-t border-slate-200/80 text-left">
        <div className="max-w-[1400px] mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="space-y-3 text-left">
            <h2 className="section-h2">
              Our Offices
            </h2>
            <p className="section-desc max-w-2xl">
              Connect directly with our leadership and engineering teams in Dubai and India.
            </p>
          </div>

          {/* Direct WhatsApp Quick Contact Bar */}
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
                  {/* Location Title & Entity */}
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

                  {/* Physical Address */}
                  <p className="font-sans text-sm text-[#202B61]/80 leading-relaxed">
                    {loc.address}
                    {loc.poBox && <span className="block text-[#202B61]/60 text-xs mt-1">{loc.poBox}</span>}
                  </p>
                </div>

                {/* Contact Links & Working Hours */}
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

                  <div className="flex items-center gap-1.5 text-[11px] text-[#202B61]/60 pt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#202B61]/50" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer
        onOpenBooking={() => setContactModalOpen(true)}
        bgColor="bg-white"
        hideTopColumns={true}
        showAddresses={false}
      />
    </main>
  );
}
