import type { Metadata } from "next";
import DistrustScene from "@/components/scroll/DistrustScene";
import "./chart.css";

export const metadata: Metadata = {
  title: "Trend 2 Timeline — Test",
  robots: { index: false, follow: false },
};

export default function Trend2TimelineTestPage() {
  return (
    <div className="t2t">
      {/* Brief header so there's context before you start scrolling */}
      <header className="t2t-header">
        <div className="t2t-shell">
          <p className="t2t-header__kicker">Test page — not in nav</p>
          <h1 className="t2t-header__title">Give Me the Receipts — Timeline</h1>
          <p className="t2t-header__note">
            Scroll down to see the distrust line draw in. This module is a
            candidate for the Trend 2 page.
          </p>
        </div>
      </header>

      {/* Scrollytelling chart section */}
      <section aria-label="The timeline">
        <DistrustScene />
      </section>
    </div>
  );
}
