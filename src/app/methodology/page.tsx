"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Trend {
  title: string;
  description: string;
}

interface Region {
  name: string;
  ambassadors: string;
  hasContent: boolean;
  trends: Trend[];
}

const regions: Region[] = [
  {
    name: "Northeast",
    ambassadors: "Melanie Kim, Audrey Cheng, Valerie Greene",
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
  {
    name: "Midwest",
    ambassadors: "Madeleine Singh & Sophia Ng",
    hasContent: true,
    trends: [
      {
        title: "Clocking Out of AI",
        description:
          `The personal-life rejection of AI tools runs parallel to workplace adoption. People are drawing harder lines between the domains where AI belongs and those where it doesn't — and the home, family, and leisure side is firmly in the "doesn't" column.`,
      },
      {
        title: "Copy-Paste Cities",
        description:
          "The cost of urban cultural convergence, framed around loss rather than documentation. The same brands, aesthetics, and experiences that define coastal cities are appearing in Midwest markets — often presented as local, never as imports. The city starts to look like everywhere, and nowhere at once.",
      },
    ],
  },
  {
    name: "South",
    ambassadors: "Alex Kim, Andy Simpson, Jacqueline Walsh",
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
  {
    name: "West",
    ambassadors: "Zoe McCloskey",
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
  {
    name: "DC",
    ambassadors: "Lauren Oliver, Patricia Huynh, Ashley Paulos",
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
];

export default function MethodologyPage() {
  const [overlay, setOverlay] = useState<{ region: string; trend: Trend } | null>(null);

  const openOverlay = (region: string, trend: Trend) => {
    if (!trend.description) return;
    setOverlay({ region, trend });
  };

  const closeOverlay = () => setOverlay(null);

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
          <span className="eyebrow">Process</span>
          <h1 className="h1-display" style={{ color: "#fff", maxWidth: 760, marginBottom: 28 }}>
            Methodology
          </h1>
          <p
            className="body-lead"
            style={{ color: "rgba(255,255,255,0.72)", maxWidth: 600 }}
          >
            These two national trends were not assumed from the top down. They were assembled from the
            bottom up — disaggregated from ten regional trends collected across five US regions, then
            reassembled where patterns converged.
          </p>
        </div>
      </section>

      {/* ── Three-step process ────────────────────────────────────── */}
      <section className="section-gray">
        <div className="container">
          <ScrollReveal>
            <div>
              <span className="eyebrow">Three Stages</span>
              <h2 className="h2-section">How the US Point of View Was Built</h2>
            </div>
          </ScrollReveal>

          {/* Step 01 */}
          <ScrollReveal delay={0}>
            <div className="step-card" style={{ marginTop: 48 }}>
              <span className="step-number" aria-hidden="true">01</span>
              <h3 className="h3-card" style={{ marginBottom: 16 }}>Regional Evidence Collection</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333" }}>
                Five US regions — Northeast, Southeast, Midwest, South, and West — each contributed two
                trend observations grounded in local research: qualitative fieldwork, cultural
                observation, behavioral evidence, and contemporary signal-tracking.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginTop: 14 }}>
                Each regional trend captured something specific to that geography: local behaviors,
                place-based dynamics, and community-level signals that national surveys typically
                flatten or miss entirely.
              </p>

              {/* Ambassador names */}
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 6 }}>
                {regions.filter(r => r.ambassadors).map((r) => (
                  <p key={r.name} style={{ fontSize: 13, lineHeight: 1.6, color: "#555" }}>
                    <strong style={{ color: "#000" }}>{r.name}:</strong> {r.ambassadors}
                  </p>
                ))}
              </div>

              {/* Regional evidence table */}
              <div style={{ marginTop: 40 }}>
                <span className="eyebrow" style={{ color: "#767676", marginBottom: 20 }}>Five Regions · Ten Trends</span>
                <div className="region-grid">
                  {regions.map((region, ri) => (
                    <ScrollReveal key={region.name} delay={ri * 60}>
                      <div className={`region-card ${region.hasContent ? "region-card-active" : "region-card-placeholder"}`}>
                        <h4
                          style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: region.hasContent ? "#000" : "#AAAAAA",
                            marginBottom: 4,
                          }}
                        >
                          {region.name}
                        </h4>

                        {region.hasContent ? (
                          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {region.trends.map((trend, ti) => (
                              <button
                                key={ti}
                                onClick={() => openOverlay(region.name, trend)}
                                style={{
                                  background: "none",
                                  border: "none",
                                  padding: "16px 0",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  width: "100%",
                                  borderBottom: ti < region.trends.length - 1 ? "1px solid #EBEBEB" : "none",
                                }}
                                aria-label={`Read trend: ${trend.title}`}
                              >
                                <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#A100FF", display: "block", marginBottom: 6 }}>
                                  {region.name} · 0{ti + 1}
                                </span>
                                <span style={{ fontSize: 15, fontWeight: 600, color: "#000", lineHeight: 1.3, display: "block" }}>
                                  {trend.title}
                                </span>
                                <span style={{ display: "block", fontSize: 11, color: "#AAAAAA", marginTop: 6 }}>
                                  Read →
                                </span>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <p style={{ fontSize: 13, fontStyle: "italic", color: "#AAAAAA", lineHeight: 1.6 }}>
                            Regional trend content forthcoming.
                          </p>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 02 */}
          <ScrollReveal delay={100}>
            <div className="step-card" style={{ marginTop: 2 }}>
              <span className="step-number" aria-hidden="true">02</span>
              <h3 className="h3-card" style={{ marginBottom: 16 }}>Disaggregation</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333" }}>
                To develop the US trends, the ten regional trends were disaggregated back into their
                underlying components — the individual behavioral and cultural observations and signals
                each region had gathered.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginTop: 14 }}>
                Representatives from each region met to discuss some initial groupings and talk about
                high level observations across our regions. Then, all of the individual signals were
                reviewed and similar signals were grouped together to form two new patterns. These
                patterns made up the basis of our US trends.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginTop: 14 }}>
                At this stage, we also differentiated signals that were specific to a particular region
                vs. signals that were traceable at a more national level, so we could better hone in
                on patterns that would resonate across all 5 regions.
              </p>
            </div>
          </ScrollReveal>

          {/* Step 03 */}
          <ScrollReveal delay={200}>
            <div className="step-card" style={{ marginTop: 2 }}>
              <span className="step-number" aria-hidden="true">03</span>
              <h3 className="h3-card" style={{ marginBottom: 16 }}>Reassembly into National Trends</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333" }}>
                Before finalizing the trends, both patterns went through a new round of sourcing, using
                both evidence from the original Life Trends work from each region, plus some additional
                sourcing done as needed.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginTop: 14 }}>
                Validating that our patterns were backed by fact transformed the patterns into the two
                US trends now presented here.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Overlay ───────────────────────────────────────────────── */}
      {overlay && (
        <div
          className="overlay-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="overlay-title"
          onClick={(e) => { if (e.target === e.currentTarget) closeOverlay(); }}
        >
          <div className="overlay-panel">
            <button
              className="overlay-close"
              onClick={closeOverlay}
              aria-label="Close trend detail"
            >
              ×
            </button>
            <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#A100FF", display: "block", marginBottom: 16 }}>
              {overlay.region}
            </span>
            <h2
              id="overlay-title"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, lineHeight: 1.15, marginBottom: 24, color: "#000" }}
            >
              {overlay.trend.title}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>
              {overlay.trend.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
