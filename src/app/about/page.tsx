"use client";

import { useState } from "react";

import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutArkanet } from "@/components/about/AboutArkanet";
import { AboutObjectives } from "@/components/about/AboutObjectives";
import { AboutClients } from "@/components/about/AboutClients";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white overflow-x-hidden font-sans">
      <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* 1. Hero Page with Good Title */}
      <AboutHero />

      {/* 2. About Arkanet (Pure text manifesto, no images) */}
      <AboutArkanet />

      {/* 3. Objectives of Arkanet */}
      <AboutObjectives />

      {/* 4. Client (Enterprise Client Logos) */}
      <AboutClients />

      {/* 5. Feedback (Client Testimonials & Reviews) */}
      <AboutTestimonials />

      {/* 6. Footer */}
      <Footer onOpenBooking={openContact} />
    </main>
  );
}
