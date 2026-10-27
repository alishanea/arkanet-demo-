"use client";

import React, { useState } from "react";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Building2,
  HelpCircle
} from "lucide-react";

const SERVICES_LIST = [
  "Web & SaaS Platforms",
  "Mobile Applications",
  "Applied AI & Automation",
  "Cloud & DevOps",
  "UI/UX & Design Systems",
  "Custom Enterprise Software"
];

const BUDGET_OPTIONS = [
  "< $5,000",
  "$5k - $15k",
  "$15k - $30k",
  "$30k - $50k",
  "$50k+"
];

const FAQS = [
  {
    q: "How quickly can we kick off a new project?",
    a: "Following an initial discovery call and requirements review, we typically assemble the engineering team and begin Sprint 0 within 5 to 7 business days."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Yes, absolutely. We treat intellectual property and project concepts with strict confidentiality and execute mutual NDAs prior to in-depth technical discussions."
  },
  {
    q: "What engagement models do you offer?",
    a: "We offer fixed-scope milestone deliverables for defined projects, as well as dedicated agile engineering pods (monthly sprint retainer) for evolving products."
  },
  {
    q: "Can you audit or modernize an existing codebase?",
    a: "Yes. Our team conducts architectural code audits, performance profiling, and cloud optimization to refactor legacy stacks into modern Next.js, mobile, and cloud environments."
  }
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web & SaaS Platforms",
    budget: "$15k - $30k",
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
    }, 800);
  };

  return (
    <div className="w-full bg-[#f4f6fb] text-[#0b1330] pt-32 sm:pt-36 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-12 select-none text-left">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Top Hero Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block px-3 py-1 rounded-[4px] bg-[#0b1330] text-white text-[11px] font-bold uppercase tracking-wider">
              Contact Us
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0b1330] tracking-tight leading-[1.1] max-w-2xl">
              Something great <br />
              <span>starts here</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl pt-1">
              Have a project brief, an architectural challenge, or a business problem to solve? Share your requirements below, chat with our engineering team on WhatsApp, or connect with our offices in Dubai and India.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2 rounded-[4px] border border-slate-200/90 shadow-none">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2 rounded-[4px] border border-slate-200/90 shadow-none">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                <span>Mutual NDA Protected</span>
              </div>
            </div>
          </div>

          {/* Right Direct Callout Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full rounded-[5px] border border-slate-200/90 bg-white p-6 sm:p-7 space-y-4 text-left shadow-none">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700">Direct Connect</span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-[3px]">
                  Online Now
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Want immediate answers regarding team availability, tech stack suitability, or ballpark estimates? Chat with our solutions engineer directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/919074104372?text=Hi%20Arkanet%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-[4px] transition-all cursor-pointer shadow-none"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 90741 04372)</span>
              </a>

              <div className="pt-2 flex flex-col gap-2 text-xs text-slate-600 border-t border-slate-100">
                <a href="mailto:info@arkanet.ae" className="flex items-center gap-2 hover:text-[#0b1330] font-medium">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>General: info@arkanet.ae</span>
                </a>
                <a href="mailto:sales@arkanet.ae" className="flex items-center gap-2 hover:text-[#0b1330] font-medium">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Middle East Sales: sales@arkanet.ae</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Section: Interactive Form + Global Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Form: In-Page Full Brief Submission */}
          <div className="lg:col-span-7 bg-white rounded-[5px] border border-slate-200/90 shadow-none p-6 sm:p-10 text-left">
            {submitted ? (
              <div className="py-12 sm:py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#0b1330]">
                  Thank you! Your brief has been received.
                </h3>
                <p className="font-sans text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our solutions director will review your project requirements and email you back within 2 hours to coordinate next steps.
                </p>
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
                        budget: "$15k - $30k",
                        message: ""
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0b1330] hover:underline cursor-pointer"
                  >
                    <span>Submit another inquiry &rarr;</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0b1330]">
                    Project Inquiry &amp; Brief
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 font-normal mt-1">
                    Fill out the details below and we&apos;ll get back to you with timelines and feasibility.
                  </p>
                </div>

                {/* Service Interest Chips */}
                <div className="space-y-2">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-600">
                    What service do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_LIST.map((srv) => {
                      const isSelected = formData.service === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3 py-1.5 rounded-[3px] text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#0b1330] text-white"
                              : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-slate-700">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 focus:border-[#0b1330] focus:ring-1 focus:ring-[#0b1330] outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-slate-700">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 focus:border-[#0b1330] focus:ring-1 focus:ring-[#0b1330] outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-slate-700">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 focus:border-[#0b1330] focus:ring-1 focus:ring-[#0b1330] outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-slate-700">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 focus:border-[#0b1330] focus:ring-1 focus:ring-[#0b1330] outline-none text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Estimated Budget Chips */}
                <div className="space-y-2">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-600">
                    Estimated Project Budget (USD)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_OPTIONS.map((bg) => {
                      const isSelected = formData.budget === bg;
                      return (
                        <button
                          key={bg}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: bg })}
                          className={`px-3 py-1.5 rounded-[3px] text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#0b1330] text-white"
                              : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {bg}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-bold text-slate-700">
                    Project Goals &amp; Scope Overview <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the product you want to build, existing challenges, target timeline, or reference links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 focus:border-[#0b1330] focus:ring-1 focus:ring-[#0b1330] outline-none text-xs sm:text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b1330] hover:bg-[#15234d] text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-[4px] transition-all cursor-pointer shadow-none"
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit Project Brief"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <span className="font-sans text-xs text-slate-500 font-normal text-center sm:text-right">
                    Guaranteed response within 2 business hours.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Physical Offices & FAQ */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Dubai HQ Card */}
            <div className="bg-white rounded-[5px] border border-slate-200/90 shadow-none p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#0b1330]">
                <Building2 className="w-5 h-5 text-slate-700" />
                <h4 className="font-heading font-extrabold text-base sm:text-lg">
                  Dubai Headquarters (UAE)
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>The Binary by Omniyat, Business Bay, Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="tel:+97142406789" className="text-[#0b1330] font-semibold hover:underline">
                    +971 4 240 6789
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="mailto:sales@arkanet.ae" className="text-[#0b1330] font-semibold hover:underline">
                    sales@arkanet.ae
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-medium text-slate-400 border-t border-slate-100 flex items-center justify-between">
                <span>Working Hours: Mon - Fri</span>
                <span>09:00 AM - 06:00 PM GST</span>
              </div>
            </div>

            {/* India Delivery Hub Card */}
            <div className="bg-white rounded-[5px] border border-slate-200/90 shadow-none p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#0b1330]">
                <Building2 className="w-5 h-5 text-slate-700" />
                <h4 className="font-heading font-extrabold text-base sm:text-lg">
                  India Delivery &amp; R&amp;D Hub
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Infopark Kochi &amp; Cyberpark Calicut, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="tel:+919074104372" className="text-[#0b1330] font-semibold hover:underline">
                    +91 90741 04372
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href="mailto:info@arkanet.ae" className="text-[#0b1330] font-semibold hover:underline">
                    info@arkanet.ae
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-medium text-slate-400 border-t border-slate-100 flex items-center justify-between">
                <span>Working Hours: Mon - Sat</span>
                <span>09:00 AM - 06:00 PM IST</span>
              </div>
            </div>

            {/* Quick FAQ Box */}
            <div className="bg-white rounded-[5px] border border-slate-200/90 shadow-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#0b1330]">
                <HelpCircle className="w-4 h-4 text-slate-700" />
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700">
                  Frequently Asked Questions
                </h4>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, fIdx) => (
                  <div key={fIdx} className="space-y-1 text-xs">
                    <p className="font-bold text-[#0b1330]">{faq.q}</p>
                    <p className="font-sans text-slate-600 leading-relaxed font-normal">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
