"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import {
  ChevronDown,
  ArrowUpRight,
  Layout,
  Smartphone,
  ShieldCheck,
  Palette,
  TrendingUp,
  Cpu,
  Brain,
  Bot,
  Database,
  Layers,
  ShoppingBag,
  Cloud,
  Globe,
  PhoneCall,
  Boxes,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomeActive = pathname === "/";
  const isCapabilitiesActive = pathname.startsWith("/capabilities") || pathname.startsWith("/services");
  const isAboutActive = pathname === "/about";
  const isWorkActive = pathname === "/work" || pathname.startsWith("/work");
  const isContactActive = pathname === "/contact";
  const isApplicationActive = pathname === "/application";
  const isProstackActive = pathname === "/prostack" || pathname.startsWith("/prostack");

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smart hide-on-scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 60) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> hide navbar smoothly so it never overlaps content
        setIsHeaderVisible(false);
        setActiveMenu(null);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> reveal navbar
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent("open-booking"));
      setContactModalOpen(true);
    }
  };

  const handleMenuEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleCapabilities = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setActiveMenu((prev) => (prev === "services" ? null : "services"));
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const engineeringItems = [
    { label: "Website Development", href: "/capabilities/website-development", icon: Layout, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Mobile App Development", href: "/capabilities/mobile-app-development", icon: Smartphone, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "SaaS Product Dev", href: "/capabilities/saas-product-development", icon: Layers, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "E-Commerce & Shopify", href: "/capabilities/ecommerce-shopify-development", icon: ShoppingBag, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Portal Development", href: "/capabilities/portal-development", icon: ShieldCheck, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Cloud & DevOps", href: "/capabilities/cloud-devops-hosting", icon: Cloud, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
  ];

  const aiItems = [
    { label: "Applied AI & ML", href: "/capabilities/applied-ai-ml", icon: Brain, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Conversational AI & Agents", href: "/capabilities/ai-chatbot-automation", icon: Bot, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Multilingual AI Solutions", href: "/capabilities/multilingual-ai-solutions", icon: Globe, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Data Engineering", href: "/capabilities/data-engineering", icon: Database, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Voice AI & IVR Systems", href: "/capabilities/voice-ai-ivr-systems", icon: PhoneCall, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
  ];

  const designItems = [
    { label: "UI/UX & Graphic Design", href: "/capabilities/graphic-design", icon: Palette, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Digital Marketing", href: "/capabilities/digital-marketing", icon: TrendingUp, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "Business Process Automation", href: "/capabilities/business-automation", icon: Cpu, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "WhatsApp Commerce", href: "/capabilities/whatsapp-social-commerce-automation", icon: MessageCircle, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
    { label: "ERP & Business Systems", href: "/capabilities/erp-business-management", icon: Boxes, color: "text-[#202B61]", glow: "rgba(32,43,97,0.12)" },
  ];

  const renderColumn = (
    title: string,
    items: { label: string; href: string; icon: React.ElementType; color: string; glow: string }[]
  ) => (
    <div className="space-y-0.5">
      <div className="font-prostack text-[11px] font-bold tracking-[0.16em] uppercase text-[#202B61]/50 mb-2 sm:mb-3.5 px-2.5">
        {title}
      </div>
      {items.map(({ label, href, icon: Icon, color, glow }) => (
        <Link
          key={label}
          href={href}
          onClick={handleNavClick}
          className="group relative flex items-center gap-3 px-2 sm:px-2.5 py-2 rounded-xl overflow-hidden transition-colors duration-300 hover:bg-[#202B61]/5 font-prostack"
        >
          <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-[2] transition-all duration-500"
              style={{ background: glow }}
            />
            <Icon
              className={`relative w-4 h-4 ${color} transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:-rotate-6`}
              strokeWidth={2}
            />
          </span>

          <span className="relative flex-1 text-[13.5px] font-medium text-[#202B61] group-hover:text-[#202B61] transition-all duration-300 group-hover:translate-x-0.5 font-prostack">
            {label}
          </span>

          <ArrowUpRight
            className={`w-3.5 h-3.5 ${color} opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
            strokeWidth={2.5}
          />
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-transparent cursor-default"
            onClick={() => setActiveMenu(null)}
            onTouchEnd={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* ── SLEEK, PREMIUM FLOATING PILL NAVBAR (ORGANIC, NOT BOXY, NO DROP SHADOW) ── */}
      <header className={`menu-bar fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full pointer-events-none transition-all duration-300 ease-in-out ${isHeaderVisible || mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0 pointer-events-none"}`}>
        <div
          className="pointer-events-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-none rounded-full px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between gap-4 w-full"
        >
          {/* 1. BRAND LOGO & NAME (LEFT) */}
          <div className="flex items-center flex-1">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0 group select-none"
            >
              <div className="flex items-center justify-center shrink-0">
                <img
                  src="/assets/images/arkanet-icon-clean.png"
                  alt="Arkanet Logo"
                  className="h-6 sm:h-[26px] w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="brand-logo-text font-display font-black text-lg sm:text-[19px] lg:text-xl text-[#202B61] tracking-tight leading-none group-hover:text-[#202B61] transition-colors flex items-center">
                ARKANET
              </span>
            </Link>
          </div>

          {/* 2. NAVIGATION MENU (CENTER - ALL BUTTONS TOGETHER WITH IDENTICAL SIZE & TYPOGRAPHY) */}
          <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-1.5">
            {/* Home Link */}
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`relative rounded-full font-prostack font-extrabold text-xs lg:text-[13.5px] tracking-normal leading-none h-8 sm:h-[34px] px-3.5 sm:px-4 shrink-0 inline-flex items-center justify-center transition-all duration-200 ease-out select-none ${
                isHomeActive && activeMenu !== "services"
                  ? "bg-[#202B61] text-white shadow-none"
                  : "text-[#202B61] hover:bg-[#202B61]/8 hover:text-[#202B61]"
              }`}
            >
              Home
            </Link>

            {/* Capabilities Button (Toggles strictly on CLICK, not on hover) */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={toggleCapabilities}
                className={`relative rounded-full font-prostack font-extrabold text-xs lg:text-[13.5px] tracking-normal leading-none h-8 sm:h-[34px] px-3.5 sm:px-4 shrink-0 inline-flex items-center justify-center gap-1.5 cursor-pointer select-none transition-all duration-200 ease-out ${
                  activeMenu === "services" || isCapabilitiesActive
                    ? "bg-[#202B61] text-white shadow-none"
                    : "text-[#202B61] hover:bg-[#202B61]/8 hover:text-[#202B61]"
                }`}
              >
                <span>Capabilities</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ease-out ${
                    activeMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Work Link */}
            <Link
              href="/work"
              onClick={handleNavClick}
              className={`relative rounded-full font-prostack font-extrabold text-xs lg:text-[13.5px] tracking-normal leading-none h-8 sm:h-[34px] px-3.5 sm:px-4 shrink-0 inline-flex items-center justify-center transition-all duration-200 ease-out select-none ${
                isWorkActive && activeMenu !== "services"
                  ? "bg-[#202B61] text-white shadow-none"
                  : "text-[#202B61] hover:bg-[#202B61]/8 hover:text-[#202B61]"
              }`}
            >
              Works
            </Link>

            {/* About Link */}
            <Link
              href="/about"
              onClick={handleNavClick}
              className={`relative rounded-full font-prostack font-extrabold text-xs lg:text-[13.5px] tracking-normal leading-none h-8 sm:h-[34px] px-3.5 sm:px-4 shrink-0 inline-flex items-center justify-center transition-all duration-200 ease-out select-none ${
                isAboutActive && activeMenu !== "services"
                  ? "bg-[#202B61] text-white shadow-none"
                  : "text-[#202B61] hover:bg-[#202B61]/8 hover:text-[#202B61]"
              }`}
            >
              About
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              onClick={handleNavClick}
              className={`relative rounded-full font-prostack font-extrabold text-xs lg:text-[13.5px] tracking-normal leading-none h-8 sm:h-[34px] px-3.5 sm:px-4 shrink-0 inline-flex items-center justify-center transition-all duration-200 ease-out select-none ${
                isContactActive && activeMenu !== "services"
                  ? "bg-[#202B61] text-white shadow-none"
                  : "text-[#202B61] hover:bg-[#202B61]/8 hover:text-[#202B61]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* 3. RIGHT SIDE: PROSTACK (WITH OFFICIAL BRAND LOGO & NEW RIBBON) + APPLICATIONS BUTTON + MOBILE TOGGLE */}
          <div className="flex items-center justify-end flex-1 gap-2 sm:gap-2.5">
            {/* Prostack Button with Modern Unfilled NEW Ribbon */}
            <div className="relative hidden sm:inline-flex items-center">
              <span className="absolute -top-1 -right-0.5 z-10 inline-flex items-center px-1 py-[0.5px] rounded-full border border-[#D61F28] bg-white text-[#D61F28] text-[6.5px] font-bold uppercase tracking-wider leading-none shadow-2xs pointer-events-none select-none font-prostack">
                NEW
              </span>
              <Link
                href="/prostack"
                onClick={handleNavClick}
                className={`prostack-btn inline-flex items-center justify-center h-8 sm:h-[34px] px-3 sm:px-3.5 rounded-full transition-all duration-200 cursor-pointer select-none bg-white shadow-none active:scale-95 group ${
                  isProstackActive
                    ? "border border-[#202B61] ring-2 ring-[#202B61]/20 bg-slate-50"
                    : "border border-slate-200/90 hover:border-[#202B61]/40 hover:bg-slate-50"
                }`}
              >
                <img
                  src="/assets/images/prostack-logo-navy.png"
                  alt="Prostack"
                  className="h-[13px] sm:h-[14px] w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            <Link
              href="/application"
              onClick={handleNavClick}
              className={`hidden md:inline-flex items-center justify-center h-8 sm:h-[34px] px-3.5 sm:px-4 rounded-full font-prostack font-extrabold text-xs lg:text-[13.5px] tracking-normal leading-none transition-all duration-200 shadow-none active:scale-95 cursor-pointer select-none ${
                isApplicationActive
                  ? "bg-[#202B61] text-white ring-2 ring-[#202B61] ring-offset-2"
                  : "bg-[#202B61] hover:bg-[#202B61]/90 text-white"
              }`}
            >
              Applications
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#202B61] hover:bg-[#202B61]/5 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ── DESKTOP CAPABILITIES MEGA-MENU (OPENED STRICTLY ON CLICK) ── */}
        <AnimatePresence>
          {activeMenu === "services" && (
            <div
              className="w-full flex justify-center pt-2 sm:pt-3 pointer-events-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-[96vw] max-w-[960px] bg-white rounded-2xl border border-slate-200/90 shadow-none p-6 lg:p-8 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
                  {renderColumn("Engineering", engineeringItems)}
                  {renderColumn("Artificial Intelligence", aiItems)}
                  {renderColumn("Design & Growth", designItems)}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {/* Global Application Modal */}
        <ContactFormModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </header>

      {/* ── MOBILE MENU DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-drawer fixed inset-x-0 top-[76px] z-40 px-4 md:hidden pointer-events-auto font-prostack"
          >
            <div className="bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-none rounded-3xl p-5 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto font-prostack">
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-extrabold text-sm font-prostack ${
                    isHomeActive ? "bg-[#202B61] text-white" : "text-[#202B61] hover:bg-[#202B61]/5"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/capabilities"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-extrabold text-sm font-prostack ${
                    isCapabilitiesActive ? "bg-[#202B61] text-white" : "text-[#202B61] hover:bg-[#202B61]/5"
                  }`}
                >
                  Capabilities &amp; Services
                </Link>
                <Link
                  href="/work"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-extrabold text-sm font-prostack ${
                    isWorkActive ? "bg-[#202B61] text-white" : "text-[#202B61] hover:bg-[#202B61]/5"
                  }`}
                >
                  Works &amp; Case Studies
                </Link>
                <Link
                  href="/about"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-extrabold text-sm font-prostack ${
                    isAboutActive ? "bg-[#202B61] text-white" : "text-[#202B61] hover:bg-[#202B61]/5"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-extrabold text-sm font-prostack ${
                    isContactActive ? "bg-[#202B61] text-white" : "text-[#202B61] hover:bg-[#202B61]/5"
                  }`}
                >
                  Contact
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <Link
                  href="/prostack"
                  onClick={handleNavClick}
                  className={`prostack-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-prostack font-extrabold text-xs transition-colors ${
                    isProstackActive
                      ? "bg-slate-100 border border-[#202B61] text-[#202B61]"
                      : "bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#202B61]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/prostack-logo-navy.png"
                      alt="Prostack Platform"
                      className="h-3.5 w-auto object-contain"
                    />
                    <span className="inline-flex items-center px-1.5 py-[0.5px] rounded-full border border-[#D61F28] bg-white text-[#D61F28] text-[6.5px] font-bold uppercase tracking-wider leading-none shadow-2xs font-prostack">
                      NEW
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#202B61]" />
                </Link>

                <Link
                  href="/application"
                  onClick={handleNavClick}
                  className="w-full flex items-center justify-center gap-2 bg-[#202B61] text-white py-3 rounded-full font-extrabold text-sm font-prostack shadow-md"
                >
                  <span>Application Showcase &amp; Downloads</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};