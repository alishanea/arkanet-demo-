"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { HomeReviewsSection } from "@/components/home/HomeReviewsSection";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";

export default function ProductsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Hero Section */}
      <ProductsHero />

      {/* Main Marketplace Catalog: All / Free / Premium with Live Demos & Pricing */}
      <ProductsCatalog />

      {/* Reviews & Social Proof */}
      <HomeReviewsSection />

      {/* Call to Action & Footer */}
      <AboutCTA onOpenBooking={openContact} bgColor="bg-white" />
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
