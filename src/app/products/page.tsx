"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { HomeFeaturedWorkCarousel } from "@/components/home/HomeFeaturedWorkCarousel";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";

export default function ProductsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans pt-16 sm:pt-20 lg:pt-24">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. FEATURED PRODUCTS COVERFLOW SHOWCASE (RADIUS < 5) ── */}
      <HomeFeaturedWorkCarousel onOpenBooking={openContact} />

      {/* ── 2. DEDICATED PRODUCTS CATALOG (ALL / FREE / PREMIUM TABS + COMPLETE CARD ACTIONS) ── */}
      <ProductsCatalog />

      {/* ── 3. CLOSING CTA & FOOTER ── */}
      <AboutCTA onOpenBooking={openContact} bgColor="bg-white" />
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
