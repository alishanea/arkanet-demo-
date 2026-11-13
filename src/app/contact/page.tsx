"use client";

import React, { useState } from "react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactProjectForm } from "@/components/contact/ContactProjectForm";
import { ContactOffices } from "@/components/contact/ContactOffices";
import { Footer } from "@/components/layout/Footer";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

export default function ContactPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#202B61] selection:bg-[#202B61] selection:text-white font-sans overflow-x-hidden">
      <ContactFormModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

      {/* Hero Header */}
      <ContactHero />

      {/* Project Inquiry Details Form */}
      <ContactProjectForm />

      {/* Symmetrical Global Office Locations & Direct WhatsApp Consultation */}
      <ContactOffices />

      {/* Standard Site Footer */}
      <Footer onOpenBooking={() => setContactModalOpen(true)} />
    </main>
  );
}
