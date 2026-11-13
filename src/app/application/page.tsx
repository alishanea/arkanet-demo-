"use client";

import React, { useState } from "react";
import { ApplicationHero } from "@/components/application/ApplicationHero";
import { ApplicationSpotlight } from "@/components/application/ApplicationSpotlight";
import { ApplicationGrid } from "@/components/application/ApplicationGrid";
import { ApplicationModal } from "@/components/application/ApplicationModal";
import { HomeReviewsSection } from "@/components/home/HomeReviewsSection";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { ApplicationItem } from "@/lib/applicationsData";

export default function ApplicationPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<ApplicationItem | null>(null);

  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <ApplicationHero />
      <ApplicationSpotlight onSelectApp={setSelectedApp} />
      <ApplicationGrid onSelectApp={setSelectedApp} />
      <ApplicationModal
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
        onOpenContact={openContact}
      />

      <HomeReviewsSection />
      <AboutCTA onOpenBooking={openContact} bgColor="bg-white" />
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
