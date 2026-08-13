import type { Metadata } from "next";
import { Alex_Brush, DM_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Script face for the Trend 1 scrollytelling hero and watermark only.
const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
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
      className={`${dmSans.variable} ${alexBrush.variable}`}
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
