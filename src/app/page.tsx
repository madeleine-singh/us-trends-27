import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "US Trends 2027 — Accenture Song D&DP",
  description:
    "Built from research across the US, these trends reveal how people's behaviors and attitudes are evolving alongside shifts in business, technology, and society.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero — full viewport ───────────────────────────────────── */}
      <section
        className="on-dark hero-gradient"
        style={{
          minHeight: "100vh",
          paddingTop: "var(--nav-h)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/Acc_GT_Solid_P1_RGB.svg" alt="" aria-hidden="true" className="hero-gt" />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(48px, 8vw, 100px) 0 clamp(32px, 5vw, 64px)",
          }}
        >
          <div className="container">
            <span className="eyebrow">D&amp;DP News &amp; Trends · US Life Trends POV 2027</span>
            <h1 className="h1-home" style={{ color: "#fff", marginBottom: 28, maxWidth: 1000 }}>
              The forces reshaping how people live, choose, and connect
            </h1>
            <p
              className="body-lead"
              style={{ color: "rgba(255,255,255,0.72)", maxWidth: 680 }}
            >
              Built from research across the US, these trends reveal how people&apos;s behaviors
              and attitudes are evolving alongside shifts in business, technology, and society.
            </p>
          </div>
        </div>

        {/* Jumplink */}
        <div className="container" style={{ paddingBottom: "clamp(40px, 5vw, 60px)" }}>
          <a href="#trends" className="jumplink">
            Explore the trends ↓
          </a>
        </div>
      </section>

      {/* ── Trend cards ───────────────────────────────────────────── */}
      <section id="trends" style={{ background: "#D8D8D8", paddingTop: "clamp(40px, 5vw, 64px)", paddingBottom: "clamp(40px, 5vw, 64px)" }}>
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow" style={{ color: "#767676" }}>US POV</span>
          </ScrollReveal>
          <div className="home-card-grid" style={{ marginTop: 24 }}>
            {/* Trend 01 */}
            <ScrollReveal delay={0}>
              <Link href="/trend-1" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="card-trend on-dark">
                  <div>
                    <span className="eyebrow">Trend 01</span>
                    <h2 className="h3-card-large" style={{ color: "#fff", margin: "0 0 16px" }}>
                      Signed by Yours Truly
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.65, maxWidth: 440 }}>
                      When every niche can be instantly identified, copied, and monetized, access to
                      culture is no longer scarce. A credible, self-authored point of view is.
                    </p>
                  </div>
                  <span className="btn-primary" style={{ marginTop: 24, alignSelf: "flex-start" }}>
                    Read trend →
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Trend 02 */}
            <ScrollReveal delay={80}>
              <Link href="/trend-2" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="card-trend on-dark">
                  <div>
                    <span className="eyebrow">Trend 02</span>
                    <h2 className="h3-card-large" style={{ color: "#fff", margin: "0 0 16px" }}>
                      Give Me the Receipts
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.65, maxWidth: 440 }}>
                      Consumers are re-evaluating their relationships with brands, institutions, and
                      individuals. Trust isn&apos;t given anymore; it must be earned, with receipts, and
                      re-proven over time.
                    </p>
                  </div>
                  <span className="btn-primary" style={{ marginTop: 24, alignSelf: "flex-start" }}>
                    Read trend →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
