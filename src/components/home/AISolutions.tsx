"use client";

import React from "react";
import { AI_CAPABILITIES } from "@/lib/data";
import { Sparkles, Bot, BrainCircuit, Cpu, Workflow, MessageSquare, Database, ArrowRight } from "lucide-react";

interface AISolutionsProps {
  onOpenBooking: () => void;
}

const AI_CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  "Custom Machine Learning Models": <BrainCircuit className="w-5 h-5 text-navy-bright" />,
  "Conversational AI & Chatbots": <MessageSquare className="w-5 h-5 text-navy-bright" />,
  "Intelligent Workflow Automation": <Workflow className="w-5 h-5 text-navy-bright" />,
  "Predictive Analytics & Forecasting": <TrendingUpIcon className="w-5 h-5 text-navy-bright" />,
  "Computer Vision & Document AI": <Cpu className="w-5 h-5 text-navy-bright" />,
  "Enterprise LLM Integration": <Database className="w-5 h-5 text-navy-bright" />,
};

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

export const AISolutions: React.FC<AISolutionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      <section id="ai-capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#202B61] mb-4">
              AI Solutions Built for Real Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From custom ML models to conversational agents that actually understand context. We design, build, and deploy AI systems that integrate with your stack, learn from your data, and deliver measurable ROI, not demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {AI_CAPABILITIES.map((cap, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white border border-borderline rounded-xl p-6 transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="font-heading font-bold text-xl text-[#202B61] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ai-chatbot" className="py-16 bg-[#f4f6fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#202B61] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-200/90 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
                AI Chatbot &amp; Virtual Agents
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
                Arkanet&apos;s chatbot platform handles real conversations, not decision trees. Built on modern language models, it understands intent, holds context, and hands off to a human only when it genuinely needs to. Deploy it on your website, WhatsApp, or as an internal helpdesk assistant, and cut response times without growing your support headcount.
              </p>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#202B61] hover:bg-[#161e47] text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Request Chatbot Demo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
