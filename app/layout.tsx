import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Salt & Sky Travel | Between the Ocean and the Horizon",
  description: "Creating experiences worth remembering. Specializing in family reunions, milestone celebrations, group getaways, cruises, and unforgettable journeys.",
  keywords: "luxury travel advisor, group travel, family reunion cruise, milestone celebration travel, couples travel, faith-based group travel",
  openGraph: {
    title: "Salt & Sky Travel",
    description: "Between the ocean and the horizon are the moments that matter.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="min-h-screen" style={{ backgroundColor: "var(--sand)", color: "var(--navy)" }}>
        {children}
      </body>
    </html>
  );
}
