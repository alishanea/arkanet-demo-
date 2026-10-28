"use client";

import React, { useState } from "react";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f6fb] flex flex-col justify-between selection:bg-[#202B61] selection:text-white">
      {/* 1. FULL-SCREEN 1ST PAGE MATCHING HOMEPAGE */}
      <ContactHero />

      {/* 2. Main Project Inquiry Form & Global Office Hubs */}
      <ContactSection hideHeroHeader={true} />

      {/* Clean Footer */}
      <Footer
        onOpenBooking={() => setContactModalOpen(true)}
        bgColor="bg-white"
        hideTopColumns={true}
        showAddresses={false}
      />

      {/* Standalone Full-Screen Slide-Up Brief Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
