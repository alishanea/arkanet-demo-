"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { CapabilitiesHero } from "@/components/capabilities/CapabilitiesHero";
import { CapabilitiesGrid } from "@/components/capabilities/CapabilitiesGrid";

export default function CapabilitiesIndexPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <CapabilitiesHero />
      <CapabilitiesGrid />
      <AboutCTA onOpenBooking={openContact} />

      <Footer onOpenBooking={openContact} />
    </main>
  );
}
