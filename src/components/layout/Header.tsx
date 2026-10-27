"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
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
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomeActive = pathname === "/";
  const isCapabilitiesActive = pathname.startsWith("/capabilities") || pathname.startsWith("/services");
  const isAboutActive = pathname === "/about";
  const isWorkActive = pathname === "/work" || pathname.startsWith("/work");
  const isContactActive = pathname === "/contact";

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.dispatchEvent(new CustomEvent("open-booking"));
    }
    setMobileMenuOpen(false);
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
    { label: "Website Development", href: "/capabilities/website-development", icon: Layout, color: "text-cyan-500", glow: "rgba(6,182,212,0.35)" },
    { label: "Mobile App Development", href: "/capabilities/mobile-app-development", icon: Smartphone, color: "text-sky-500", glow: "rgba(14,165,233,0.35)" },
    { label: "SaaS Product Dev", href: "/capabilities/saas-product-development", icon: Layers, color: "text-blue-500", glow: "rgba(59,130,246,0.35)" },
    { label: "E-Commerce & Shopify", href: "/capabilities/ecommerce-shopify-development", icon: ShoppingBag, color: "text-emerald-500", glow: "rgba(16,185,129,0.35)" },
    { label: "Portal Development", href: "/capabilities/portal-development", icon: ShieldCheck, color: "text-teal-500", glow: "rgba(20,184,166,0.35)" },
    { label: "Cloud & DevOps", href: "/capabilities/cloud-devops-hosting", icon: Cloud, color: "text-cyan-600", glow: "rgba(8,145,178,0.35)" },
  ];

  const aiItems = [
    { label: "Applied AI & ML", href: "/capabilities/applied-ai-ml", icon: Brain, color: "text-violet-500", glow: "rgba(139,92,246,0.35)" },
    { label: "Conversational AI & Agents", href: "/capabilities/ai-chatbot-automation", icon: Bot, color: "text-fuchsia-500", glow: "rgba(217,70,239,0.35)" },
    { label: "Multilingual AI Solutions", href: "/capabilities/multilingual-ai-solutions", icon: Globe, color: "text-purple-500", glow: "rgba(168,85,247,0.35)" },
    { label: "Data Engineering", href: "/capabilities/data-engineering", icon: Database, color: "text-indigo-500", glow: "rgba(99,102,241,0.35)" },
    { label: "Voice AI & IVR Systems", href: "/capabilities/voice-ai-ivr-systems", icon: PhoneCall, color: "text-indigo-600", glow: "rgba(79,70,229,0.35)" },
  ];

  const designItems = [
    { label: "UI/UX & Graphic Design", href: "/capabilities/graphic-design", icon: Palette, color: "text-pink-500", glow: "rgba(236,72,153,0.35)" },
    { label: "Digital Marketing", href: "/capabilities/digital-marketing", icon: TrendingUp, color: "text-rose-500", glow: "rgba(244,63,94,0.35)" },
    { label: "Business Process Automation", href: "/capabilities/business-automation", icon: Cpu, color: "text-amber-500", glow: "rgba(245,158,11,0.35)" },
    { label: "WhatsApp Commerce", href: "/capabilities/whatsapp-social-commerce-automation", icon: MessageCircle, color: "text-emerald-500", glow: "rgba(16,185,129,0.35)" },
    { label: "ERP & Business Systems", href: "/capabilities/erp-business-management", icon: Boxes, color: "text-orange-500", glow: "rgba(249,115,22,0.35)" },
  ];

  const renderColumn = (
    title: string,
    items: { label: string; href: string; icon: React.ElementType; color: string; glow: string }[]
  ) => (
    <div className="space-y-0.5">
      <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-slate-400 mb-2 sm:mb-3.5 px-2.5">
        {title}
      </div>
      {items.map(({ label, href, icon: Icon, color, glow }) => (
        <Link
          key={label}
          href={href}
          onClick={handleNavClick}
          className="group relative flex items-center gap-3 px-2 sm:px-2.5 py-2 rounded-xl overflow-hidden transition-colors duration-300 hover:bg-slate-50"
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

          <span className="relative flex-1 text-[13.5px] font-semibold text-slate-800 group-hover:text-slate-950 transition-all duration-300 group-hover:translate-x-0.5">
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
            className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-[1px] cursor-pointer"
            onClick={() => setActiveMenu(null)}
            onTouchEnd={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* ── SLEEK, PREMIUM FLOATING PILL NAVBAR (ORGANIC, NOT BOXY) ── */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pointer-events-none">
        <LayoutGroup id="header-nav">
          <div
            onMouseLeave={() => setHoveredTab(null)}
            className="pointer-events-auto bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-full px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between gap-4 w-full"
          >
            {/* 1. BRAND LOGO & NAME (LEFT) */}
            <Link
              href="/"
              onClick={handleNavClick}
              className="flex items-center gap-2.5 shrink-0 group select-none"
            >
              <img
                src="/assets/images/arkanet-icon.png"
                alt="Arkanet Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="font-display font-black text-lg sm:text-xl text-[#202B61] tracking-tight group-hover:text-[#1d4ed8] transition-colors">
                ARKANET
              </span>
            </Link>

            {/* 2. NAVIGATION MENU (CENTER - DESKTOP) */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-3.5">
              {/* Home Link */}
              <Link
                href="/"
                onClick={handleNavClick}
                onMouseEnter={() => setHoveredTab("home")}
                className="relative px-4 py-2 rounded-full text-xs lg:text-sm font-semibold shrink-0 transition-colors flex items-center justify-center"
              >
                {isHomeActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredTab === "home" && !isHomeActive && (
                  <motion.div
                    layoutId="hover-nav-pill"
                    className="absolute inset-0 bg-slate-100/90 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isHomeActive ? "text-[#38bdf8]" : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  Home
                </span>
              </Link>

              {/* Work Link */}
              <Link
                href="/work"
                onClick={handleNavClick}
                onMouseEnter={() => setHoveredTab("work")}
                className="relative rounded-full font-sans font-semibold text-xs lg:text-sm px-4 py-2 transition-colors shrink-0 flex items-center justify-center"
              >
                {isWorkActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredTab === "work" && !isWorkActive && (
                  <motion.div
                    layoutId="hover-nav-pill"
                    className="absolute inset-0 bg-slate-100/90 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isWorkActive ? "text-[#38bdf8]" : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  Work
                </span>
              </Link>

              {/* About Link */}
              <Link
                href="/about"
                onClick={handleNavClick}
                onMouseEnter={() => setHoveredTab("about")}
                className="relative rounded-full font-sans font-semibold text-xs lg:text-sm px-4 py-2 transition-colors shrink-0 flex items-center justify-center"
              >
                {isAboutActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredTab === "about" && !isAboutActive && (
                  <motion.div
                    layoutId="hover-nav-pill"
                    className="absolute inset-0 bg-slate-100/90 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isAboutActive ? "text-[#38bdf8]" : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  About
                </span>
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={handleNavClick}
                onMouseEnter={() => setHoveredTab("contact")}
                className="relative rounded-full font-sans font-semibold text-xs lg:text-sm px-4 py-2 transition-colors shrink-0 flex items-center justify-center"
              >
                {isContactActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-[#0b1330] rounded-full shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {hoveredTab === "contact" && !isContactActive && (
                  <motion.div
                    layoutId="hover-nav-pill"
                    className="absolute inset-0 bg-slate-100/90 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isContactActive ? "text-[#38bdf8]" : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  Contact
                </span>
              </Link>
            </nav>

            {/* 3. RIGHT SIDE: CAPABILITIES BUTTON */}
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="hidden md:block relative"
                onMouseEnter={() => {
                  setHoveredTab("capabilities");
                  handleMenuEnter("services");
                }}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  type="button"
                  onClick={toggleCapabilities}
                  className={`group inline-flex items-center gap-2 rounded-full font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 transition-all duration-200 cursor-pointer select-none ${
                    activeMenu === "services"
                      ? "bg-[#0b1330] text-white shadow-xs font-bold"
                      : isCapabilitiesActive
                      ? "bg-[#0b1330] text-white shadow-xs font-bold"
                      : "bg-slate-100 hover:bg-slate-200/90 text-slate-800 hover:text-slate-950 border border-slate-200/80"
                  }`}
                >
                  <span>Capabilities</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === "services"
                        ? "rotate-180 text-white"
                        : isCapabilitiesActive
                        ? "text-[#38bdf8]"
                        : "text-slate-500 group-hover:text-slate-900"
                    }`}
                  />
                </button>
              </div>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </LayoutGroup>

        {/* ── DESKTOP CAPABILITIES MEGA-MENU (PERFECTLY CENTERED ON SCREEN & NAVBAR) ── */}
        <AnimatePresence>
          {activeMenu === "services" && (
            <div
              className="w-full flex justify-center pt-2 sm:pt-3 pointer-events-auto"
              onMouseEnter={() => handleMenuEnter("services")}
              onMouseLeave={handleMenuLeave}
            >
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-[96vw] max-w-[960px] bg-white rounded-[5px] border border-slate-200/90 shadow-[0_20px_50px_rgba(11,19,48,0.12)] p-6 lg:p-8 text-left"
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
      </header>

      {/* ── MOBILE MENU DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[76px] z-40 px-4 md:hidden pointer-events-auto"
          >
            <div className="bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-3xl p-5 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm ${
                    isHomeActive ? "bg-[#0b1330] text-[#38bdf8]" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/capabilities"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm ${
                    isCapabilitiesActive ? "bg-[#0b1330] text-[#38bdf8]" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Capabilities &amp; Services
                </Link>
                <Link
                  href="/work"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm ${
                    isWorkActive ? "bg-[#0b1330] text-[#38bdf8]" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Work &amp; Case Studies
                </Link>
                <Link
                  href="/about"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm ${
                    isAboutActive ? "bg-[#0b1330] text-[#38bdf8]" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-sm ${
                    isContactActive ? "bg-[#0b1330] text-[#38bdf8]" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  Contact
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="w-full flex items-center justify-center gap-2 bg-[#0b1330] text-white py-3 rounded-full font-semibold text-sm shadow-md"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#38bdf8]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};