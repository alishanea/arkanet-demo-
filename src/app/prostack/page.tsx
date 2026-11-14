"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { ProstackHero } from "@/components/prostack/ProstackHero";
import { ProstackArchitecture } from "@/components/prostack/ProstackArchitecture";
import { ProstackDomains } from "@/components/prostack/ProstackDomains";
import { ProstackAudience } from "@/components/prostack/ProstackAudience";
import { ProstackAdvantages } from "@/components/prostack/ProstackAdvantages";
import { ProstackCTA } from "@/components/prostack/ProstackCTA";

export default function ProstackPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Hero with Interactive Platform Console Simulator */}
      <ProstackHero />

      {/* 4-Tier Connected System Architecture */}
      <ProstackArchitecture />

      {/* Clean 8-Domain Slider */}
      <ProstackDomains />

      {/* Audience & Enterprise Teams */}
      <ProstackAudience />

      {/* Enterprise Guarantees & Operational Advantages */}
      <ProstackAdvantages />

      {/* Closing CTA */}
      <ProstackCTA onOpenBooking={openContact} />

      {/* Unified Site Footer */}
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
