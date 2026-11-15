"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";

export default function ProductsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-[#F4F6FB] text-slate-800 selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans pt-16 sm:pt-20 lg:pt-24">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Main Marketplace Catalog: Exact Inquisico Layout */}
      <ProductsCatalog />

      {/* Call to Action & Footer */}
      <AboutCTA onOpenBooking={openContact} bgColor="bg-white" />
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
