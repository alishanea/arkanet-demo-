import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arkanet Technologies | Websites, Apps, Cloud & AI Engineered to Perform",
  description:
    "Arkanet Technologies designs and builds high-performance web platforms, mobile apps, enterprise cloud infrastructure, and applied AI systems. Operating across Kerala (India HQ) and Business Bay, Dubai (UAE).",
  keywords: [
    "Arkanet Technologies",
    "Arkanet Technologies LLC",
    "arkanet.ae",
    "arkanet.in",
    "Software Engineering Dubai",
    "AI Development UAE",
    "Web and Mobile App Development"
  ],
  metadataBase: new URL("https://arkanet.ae"),
  alternates: {
    canonical: "https://arkanet.ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className={`${plusJakartaSans.className} font-sans min-h-screen flex flex-col antialiased`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
