"use client";

import React from "react";
import Link from "next/link";
import { Globe, Twitter, Instagram, Linkedin, Github, ArrowUpRight, MessageCircle } from "lucide-react";

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
      className={`relative text-[#202B61] pt-12 sm:pt-16 pb-10 overflow-hidden select-none border-t border-slate-200/80 ${
        bgColor && bgColor !== "bg-white" ? bgColor : "bg-[#f4f6fb]"
      }`}
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-left">
        
        {/* Top Info Columns */}
        {!hideTopColumns && showAddresses && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 text-left">
            
            {/* Column 1: Brand & Global Reach (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5 font-display font-black text-xl text-[#202B61] tracking-tight hover:opacity-85 transition-opacity">
                <img
                  src="/assets/images/arkanet-icon.png"
                  alt="Arkanet"
                  className="w-6 h-6 object-contain"
                />
                <span>ARKANET</span>
              </Link>
              
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-sm">
                Engineering high-performance web platforms, mobile applications, and intelligent AI automation systems for ambitious brands across the UAE, India, and worldwide.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Operating Globally (Dubai &amp; India)</span>
              </div>
            </div>

            {/* Column 2: Capabilities & Quick Links (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800">
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-600">
                <li>
                  <Link href="/capabilities/website-development" className="hover:text-[#1d4ed8] transition-colors">
                    Web &amp; SaaS Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/mobile-app-development" className="hover:text-[#1d4ed8] transition-colors">
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/applied-ai-ml" className="hover:text-[#1d4ed8] transition-colors">
                    Applied AI &amp; Automation
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/cloud-devops-hosting" className="hover:text-[#1d4ed8] transition-colors">
                    Cloud &amp; DevOps Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#1d4ed8] transition-colors">
                    Featured Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#1d4ed8] transition-colors">
                    About Our Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Dubai & India Offices (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800">
                Offices
              </h4>
              
              {/* Dubai */}
              <div className="space-y-1 text-xs sm:text-sm text-slate-600">
                <span className="font-bold text-[#202B61] block">Dubai (HQ)</span>
                <p className="leading-relaxed">
                  Capital Golden Tower, Suite 308,<br />
                  Business Bay, Dubai, UAE
                </p>
                <a href="tel:+97145572716" className="text-slate-700 hover:text-[#1d4ed8] block font-semibold pt-0.5">
                  +971 4 557 2716
                </a>
              </div>

              {/* India */}
              <div className="space-y-1 text-xs sm:text-sm text-slate-600 pt-1">
                <span className="font-bold text-[#202B61] block">India Office</span>
                <p className="leading-relaxed">
                  Room No. 227K, Benny Complex,<br />
                  Kelakam, Kannur Dt, Kerala
                </p>
                <a href="tel:+919074104372" className="text-slate-700 hover:text-[#1d4ed8] block font-semibold pt-0.5">
                  +91 90741 04372
                </a>
              </div>
            </div>

            {/* Column 4: Start a Project (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-800">
                Engage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Ready to engineer your next digital solution?
              </p>
              
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#202B61] hover:bg-[#1d4ed8] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-2xs hover:shadow-md cursor-pointer"
                >
                  <span>Submit a Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1d4ed8]" />
                </button>

                <a
                  href="https://wa.me/919074104372?text=Hi%20Arkanet%20Team,%20I'd%20like%20to%20discuss%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-[#202B61] text-xs font-bold py-2.5 px-4 rounded-xl border border-slate-200 transition-all cursor-pointer shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="pt-1">
                <a href="mailto:info@arkanet.in" className="text-xs font-semibold text-[#1d4ed8] hover:underline block">
                  info@arkanet.in
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Hairline Divider */}
        <div className="w-full border-t border-slate-200/80 my-4" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600 pt-2">
          
          {/* Left: Brand, Copyright, Blog & Privacy */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs">
            <span>© {currentYear} Arkanet Technologies. All rights reserved.</span>
            <Link href="/blog" className="text-slate-700 hover:text-[#1d4ed8] font-semibold transition-colors">
              Blog &amp; Insights
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-[#1d4ed8] font-semibold transition-colors">
              Contact
            </Link>
          </div>

          {/* Right: Clean Social Links with Cyan Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors group"
            >
              <Twitter className="w-3.5 h-3.5 text-[#1d4ed8] group-hover:scale-110 transition-transform shrink-0" />
              <span>Twitter X</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors group"
            >
              <Instagram className="w-3.5 h-3.5 text-[#1d4ed8] group-hover:scale-110 transition-transform shrink-0" />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors group"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#1d4ed8] group-hover:scale-110 transition-transform shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#1d4ed8] transition-colors group"
            >
              <Github className="w-3.5 h-3.5 text-[#1d4ed8] group-hover:scale-110 transition-transform shrink-0" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
