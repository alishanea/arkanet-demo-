"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github, ArrowUpRight, MessageCircle, ExternalLink } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
  bgColor?: string;
  hideTopColumns?: boolean;
  showAddresses?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  bgColor,
  hideTopColumns = false,
  showAddresses = true,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative text-white py-14 sm:py-16 overflow-hidden select-none border-t border-[#253272] ${
        bgColor && bgColor !== "bg-white" ? bgColor : "bg-[#151E48]"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-left font-sans">
        
        {/* Top Info Columns */}
        {!hideTopColumns && showAddresses && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 text-left">
            
            {/* Column 1: Brand & Global Reach (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5 font-display font-black text-xl text-white tracking-tight hover:opacity-85 transition-opacity">
                <img
                  src="/assets/images/arkanet-icon-dark.png"
                  alt="Arkanet Technologies"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
                <span>ARKANET</span>
              </Link>
              
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
                A Dubai-based digital innovation company blending AI, Cloud, IoT, and high-performance software engineering with our dedicated development center in Kerala, India. Backed by 15+ years of enterprise engineering excellence.
              </p>

              {/* Simple Prostack Button */}
              <div className="pt-1">
                <a
                  href="https://prostack.arkanet.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-heading font-semibold transition-all group"
                >
                  <img
                    src="/assets/images/prostack-logo-navy.png"
                    alt="Prostack"
                    className="h-3 w-auto object-contain brightness-0 invert opacity-90"
                  />
                  <ArrowUpRight className="w-3 h-3 text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Column 2: Capabilities (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
                <li>
                  <Link href="/capabilities/website-development" className="hover:text-white transition-colors">
                    Web &amp; SaaS Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/mobile-app-development" className="hover:text-white transition-colors">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/applied-ai-ml" className="hover:text-white transition-colors">
                    Applied AI &amp; Automation
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/cloud-devops-hosting" className="hover:text-white transition-colors">
                    Cloud &amp; DevOps Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products &amp; Tools
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Featured Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Our Firm
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Dubai HQ & India Development Center (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
                Offices
              </h4>

              {/* UAE Global Headquarters */}
              <div className="space-y-1 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white block">Global Headquarters</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-[4px] bg-white/10 text-slate-200 border border-white/10">Dubai, UAE</span>
                </div>
                <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
                  Arkanet Technologies LLC<br />
                  Suite 308, Capital Golden Tower,<br />
                  Business Bay, Dubai, UAE
                </p>
                <div className="space-y-0.5 pt-0.5">
                  <a href="tel:+97145572716" className="text-slate-300 hover:text-white block font-semibold transition-colors">
                    +971 4 557 2716
                  </a>
                  <a href="tel:+971509338430" className="text-slate-300 hover:text-white block font-semibold transition-colors">
                    +971 50 933 8430
                  </a>
                  <a href="mailto:sales@arkanet.ae" className="text-xs font-semibold text-slate-200 hover:text-white hover:underline block pt-0.5 transition-colors">
                    sales@arkanet.ae
                  </a>
                </div>
              </div>

              {/* India Development Center */}
              <div className="space-y-1 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white block">Development Center</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-[4px] bg-white/10 text-slate-200 border border-white/10">India</span>
                </div>
                <p className="leading-relaxed text-xs sm:text-sm text-slate-300">
                  Room No. 227K, Benny Complex,<br />
                  Kelakam, Kannur Dt, Kerala 670674
                </p>
                <div className="space-y-0.5 pt-0.5">
                  <a href="tel:+919074104372" className="text-slate-300 hover:text-white block font-semibold transition-colors">
                    +91 90741 04372
                  </a>
                  <a href="mailto:info@arkanet.in" className="text-xs font-semibold text-slate-200 hover:text-white hover:underline block pt-0.5 transition-colors">
                    info@arkanet.in
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Start a Project (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
                Engage
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Ready to engineer your next digital solution?
              </p>
              
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#151E48] text-xs font-bold py-2.5 px-4 rounded-[4px] transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Submit a Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#151E48]" />
                </button>

                <a
                  href="https://wa.me/919074104372?text=Hi%20Arkanet%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-bold py-2.5 px-4 rounded-[4px] border border-white/15 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="pt-1 space-y-1">
                <a href="mailto:sales@arkanet.ae" className="text-xs font-semibold text-slate-200 hover:text-white hover:underline block transition-colors">
                  sales@arkanet.ae (UAE)
                </a>
                <a href="mailto:info@arkanet.in" className="text-xs font-semibold text-slate-300 hover:text-white hover:underline block transition-colors">
                  info@arkanet.in (India)
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Hairline Divider */}
        <div className="w-full border-t border-[#253272] my-4" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400 pt-2">
          
          {/* Left: Brand, Copyright, Blog & Privacy */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs">
            <span>© {currentYear} Arkanet Technologies. All rights reserved.</span>
            <Link href="/blog" className="text-slate-300 hover:text-white font-semibold transition-colors">
              Blog &amp; Insights
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white font-semibold transition-colors">
              Contact
            </Link>
          </div>

          {/* Right: Clean Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Twitter className="w-3.5 h-3.5 text-slate-300 group-hover:scale-110 group-hover:text-white transition-all shrink-0" />
              <span>Twitter X</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Instagram className="w-3.5 h-3.5 text-slate-300 group-hover:scale-110 group-hover:text-white transition-all shrink-0" />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Linkedin className="w-3.5 h-3.5 text-slate-300 group-hover:scale-110 group-hover:text-white transition-all shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Github className="w-3.5 h-3.5 text-slate-300 group-hover:scale-110 group-hover:text-white transition-all shrink-0" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
