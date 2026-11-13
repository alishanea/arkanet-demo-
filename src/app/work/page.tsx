"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutCTA } from "@/components/about/AboutCTA";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkFilterGrid } from "@/components/work/WorkFilterGrid";

export default function WorkPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <WorkHero />
      <WorkFilterGrid />
      <AboutCTA onOpenBooking={openContact} />

      <Footer onOpenBooking={openContact} />
    </main>
  );
}
