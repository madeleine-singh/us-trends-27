import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "US Trends 2027 — Accenture Song D&DP",
  description:
    "A US point of view on the two forces reshaping how people relate to culture, brands, and each other.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="on-dark"
        style={{ background: "#000", padding: "clamp(80px, 12vw, 152px) 0 clamp(64px, 8vw, 112px)", position: "relative", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/Acc_GT_Solid_P1_RGB.svg" alt="" aria-hidden="true" className="hero-gt" />
        <div className="container">
          <span className="eyebrow">Accenture Song · Design &amp; Digital Products</span>
          <h1 className="h1-home" style={{ color: "#fff", marginBottom: 28 }}>
            US Trends 2027
          </h1>
          <p
            className="body-lead"
            style={{ color: "rgba(255,255,255,0.72)", maxWidth: 560, marginBottom: 20 }}
          >
            A US point of view on the two forces reshaping how people relate to culture, brands, and
            each other.
          </p>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 36,
            }}
          >
            US Research · 2026–2027
          </p>
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.28)",
              maxWidth: 560,
            }}
          >
            These trends were developed by Accenture Song's Design &amp; Digital Products practice
            based on original US regional research. They are inspired by but developed independently
            of Accenture's annual Life Trends report, which will be published separately later
            this year.
          </p>
        </div>
      </section>

      {/* ── Card grid ─────────────────────────────────────────────── */}
      {/* 2px gray gap between cards — parent bg shows through */}
      <section style={{ background: "#D8D8D8" }} aria-label="Site sections">
        <div className="home-card-grid">
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
                <span className="cta-label" style={{ color: "#A100FF", marginTop: 16 }}>
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
                    Give Me the Receipts!!!
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.65, maxWidth: 440 }}>
                    Consumers are re-evaluating their relationships with brands, institutions, and
                    individuals. Trust isn't given anymore; it must be earned, with receipts, and
                    re-proven over time.
                  </p>
                </div>
                <span className="cta-label" style={{ color: "#A100FF", marginTop: 16 }}>
                  Read trend →
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Methodology */}
          <ScrollReveal delay={140}>
            <Link href="/methodology" style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <div className="card-utility">
                <div>
                  <span className="eyebrow" style={{ color: "#AAAAAA" }}>Process</span>
                  <h2 className="h3-card" style={{ color: "#000", margin: "0 0 12px" }}>
                    Methodology
                  </h2>
                  <p style={{ color: "#767676", fontSize: 14, lineHeight: 1.65 }}>
                    How regional signals were disaggregated and reassembled into these national trends.
                  </p>
                </div>
                <span className="cta-label" style={{ marginTop: 16 }}>Explore →</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Regional Trends */}
          <ScrollReveal delay={200}>
            <Link href="/regional-trends" style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <div className="card-utility">
                <div>
                  <span className="eyebrow" style={{ color: "#AAAAAA" }}>Evidence Base</span>
                  <h2 className="h3-card" style={{ color: "#000", margin: "0 0 12px" }}>
                    Regional Trends
                  </h2>
                  <p style={{ color: "#767676", fontSize: 14, lineHeight: 1.65 }}>
                    The five US regions whose observations ground these national findings.
                  </p>
                </div>
                <span className="cta-label" style={{ marginTop: 16 }}>Explore →</span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
