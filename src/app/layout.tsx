import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "US Trends 2027 — Accenture Song D&DP",
  description:
    "A US point of view on the two forces reshaping how people relate to culture, brands, and each other. Produced by Accenture Song's Design & Digital Products practice.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable}`}
    >
      <body>
        {/* Skip to main content — first focusable element */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:text-sm focus:font-semibold"
          style={{ outline: "2px solid #A100FF" }}
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1} style={{ paddingTop: "var(--nav-h)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
