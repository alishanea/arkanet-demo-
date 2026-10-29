"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import { HeroSection } from "@/components/home/HeroSection";

const AgencyStatement = dynamic(
  () => import("@/components/home/AgencyStatement").then((m) => m.AgencyStatement),
  { ssr: true }
);
const SprintEstimatorWidget = dynamic(
  () => import("@/components/home/SprintEstimatorWidget").then((m) => m.SprintEstimatorWidget),
  { ssr: true }
);
const WiseBentoCapabilities = dynamic(
  () => import("@/components/home/WiseBentoCapabilities").then((m) => m.WiseBentoCapabilities),
  { ssr: true }
);
const OurProcess = dynamic(
  () => import("@/components/home/OurProcess").then((m) => m.OurProcess),
  { ssr: true }
);
const StudioPhilosophy = dynamic(
  () => import("@/components/home/StudioPhilosophy").then((m) => m.StudioPhilosophy),
  { ssr: true }
);
const ClientLogosSection = dynamic(
  () => import("@/components/home/ClientLogosSection").then((m) => m.ClientLogosSection),
  { ssr: true }
);
const WhatsNewSection = dynamic(
  () => import("@/components/home/WhatsNewSection").then((m) => m.WhatsNewSection),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/layout/Footer").then((m) => m.Footer),
  { ssr: true }
);
const ContactFormModal = dynamic(
  () => import("@/components/modals/ContactFormModal").then((m) => m.ContactFormModal),
  { ssr: false }
);
const BookingModal = dynamic(
  () => import("@/components/modals/BookingModal").then((m) => m.BookingModal),
  { ssr: false }
);

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenBooking = () => setContactModalOpen(true);

  React.useEffect(() => {
    const onOpen = () => handleOpenBooking();
    window.addEventListener("open-booking", onOpen);
    return () => window.removeEventListener("open-booking", onOpen);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6fb]">

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* 1. Hero Title */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 1b. Agency Statement */}
        <AgencyStatement onOpenBooking={handleOpenBooking} />

        {/* 2. Interactive Architecture & Sprint Estimator (Wise-Style Instant Utility) */}
        <SprintEstimatorWidget onOpenBooking={handleOpenBooking} />

        {/* 3. Full-Stack Engineering & AI Capabilities (Wise-Style Modular Bento Grid) */}
        <WiseBentoCapabilities onOpenBooking={handleOpenBooking} />

        {/* 4. Engineering Process */}
        <OurProcess onOpenBooking={handleOpenBooking} />

        {/* 5. Studio Philosophy & Team Stats */}
        <StudioPhilosophy onOpenBooking={handleOpenBooking} />

        {/* 5b. Trusted By Client Logo Stage */}
        <ClientLogosSection onOpenBooking={handleOpenBooking} />

        {/* 6. Selected Work & Case Studies */}
        <WhatsNewSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Standalone Full-Screen Slide-Up Brief Modal */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
