"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import { HeroSection } from "@/components/home/HeroSection";

const AgencyStatement = dynamic(
  () => import("@/components/home/AgencyStatement").then((m) => m.AgencyStatement),
  { ssr: true }
);
const InteractiveShowcaseGrid = dynamic(
  () => import("@/components/home/InteractiveShowcaseGrid").then((m) => m.InteractiveShowcaseGrid),
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
const HomeProstackSection = dynamic(
  () => import("@/components/home/HomeProstackSection").then((m) => m.HomeProstackSection),
  { ssr: true }
);
const AboutCTA = dynamic(
  () => import("@/components/about/AboutCTA").then((m) => m.AboutCTA),
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
    <div className="min-h-screen flex flex-col bg-white">


      {/* Main Homepage Flow */}
      <main className="flex-1 bg-white">
        {/* 1. Hero Title */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 1b. Agency Statement */}
        <AgencyStatement onOpenBooking={handleOpenBooking} />

        {/* 2. Full-Stack Engineering & AI Capabilities (Interactive 4-Pillar Grid) */}
        <InteractiveShowcaseGrid onOpenBooking={handleOpenBooking} />

        {/* 3. Engineering Process */}
        <OurProcess onOpenBooking={handleOpenBooking} />

        {/* 4. Selected Work & Case Studies (Work and Projects) */}
        <WhatsNewSection onOpenBooking={handleOpenBooking} />

        {/* 4b. Prostack Flagship Product Feature */}
        <HomeProstackSection onOpenBooking={handleOpenBooking} />

        {/* 5. Trusted By Client Logo Stage (Client Details) */}
        <ClientLogosSection onOpenBooking={handleOpenBooking} />

        {/* 6. Studio Philosophy & Team Stats (About Us at last) */}
        <StudioPhilosophy onOpenBooking={handleOpenBooking} />

        {/* 7. Closing Headline CTA */}
        <AboutCTA onOpenBooking={handleOpenBooking} bgColor="bg-white" />
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
