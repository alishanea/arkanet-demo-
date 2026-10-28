"use client";

import React, { useState } from "react";

import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/modals/BookingModal";
import { ContactFormModal } from "@/components/modals/ContactFormModal";

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">


      {/* Hero Contact Content */}
      <ContactSection />

      {/* Contact Page Clean Footer (Offices are prominently featured in the main contact stage) */}
      <Footer
        onOpenBooking={() => setContactModalOpen(true)}
        bgColor="bg-[#f4f6fb]"
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
