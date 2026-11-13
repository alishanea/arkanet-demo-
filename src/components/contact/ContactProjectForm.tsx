"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export const ContactProjectForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
                    message: "",
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
              {/* 1. Contact Information */}
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
                    <label className="block font-sans text-xs font-bold text-[#151E48]">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-xs sm:text-sm text-[#151E48] placeholder-slate-400 focus:outline-none focus:border-[#151E48] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-bold text-[#151E48]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-xs sm:text-sm text-[#151E48] placeholder-slate-400 focus:outline-none focus:border-[#151E48] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-bold text-[#151E48]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-xs sm:text-sm text-[#151E48] placeholder-slate-400 focus:outline-none focus:border-[#151E48] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-bold text-[#151E48]">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Innovations"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-xs sm:text-sm text-[#151E48] placeholder-slate-400 focus:outline-none focus:border-[#151E48] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Primary Service */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#151E48]">
                    Primary Engineering Focus
                  </label>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Select the main discipline
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
                  {[
                    "Website Development",
                    "Mobile App Engineering",
                    "Applied AI & ML",
                    "Custom Software",
                    "Cloud & DevOps",
                    "General Inquiry",
                  ].map((service) => {
                    const isSelected = formData.service === service;
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({ ...formData, service })}
                        className={`p-3 rounded-[4px] text-xs font-semibold text-center transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-[#151E48] text-white border-[#151E48] shadow-xs"
                            : "bg-slate-50 text-[#151E48] border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Project Scope & Architecture Notes */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#151E48]">
                    Project Overview &amp; Specifications
                  </label>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Include timelines, target platforms, or goals
                  </span>
                </div>

                <textarea
                  required
                  rows={4}
                  placeholder="Provide an overview of what you are aiming to build, key objectives, existing tech stack, and any target milestones..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-[4px] border border-slate-300 text-xs sm:text-sm text-[#151E48] placeholder-slate-400 focus:outline-none focus:border-[#151E48] transition-colors resize-y leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-sans text-[11px] text-slate-500 text-center sm:text-left">
                  Guaranteed confidential. Under NDA upon initial review.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[4px] bg-[#151E48] hover:bg-[#202B61] text-white font-sans font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Submit Project For Review</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

