"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { HomeFeaturedWorkCarousel } from "@/components/home/HomeFeaturedWorkCarousel";
import { ApplicationGrid } from "@/components/application/ApplicationGrid";
import { FeaturedWorkModal } from "@/components/home/FeaturedWorkModal";
import { ApplicationItem } from "@/lib/applicationsData";

export default function ProductsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);

  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans pt-16 sm:pt-20 lg:pt-24">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── 1. FEATURED PRODUCTS IN MOTION (THE EXACT OLD CAROUSEL MODEL) ── */}
      <HomeFeaturedWorkCarousel
        onOpenBooking={openContact}
        selectedApp={selectedApp}
        onSelectApp={setSelectedApp}
      />

      {/* ── 2. FULL PRODUCT & APPLICATION DIRECTORY (RADIUS < 5) ── */}
      <ApplicationGrid onSelectApp={setSelectedApp} />

      {/* ── 3. INTERACTIVE DETAIL MODAL WITH SCREENSHOTS GALLERY (RADIUS < 5) ── */}
      <FeaturedWorkModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
        onOpenContact={openContact}
      />

      {/* ── 4. CLOSING CTA & FOOTER ── */}
      <AboutCTA onOpenBooking={openContact} bgColor="bg-white" />
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
