"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Trend {
  title: string;
  description: string;
}

interface Region {
  name: string;
  hasContent: boolean;
  trends: Trend[];
}

const regions: Region[] = [
  {
    name: "Northeast",
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
  {
    name: "Southeast",
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
  {
    name: "Midwest",
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
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
  {
    name: "West",
    hasContent: false,
    trends: [
      { title: "Regional trend coming soon", description: "" },
      { title: "Regional trend coming soon", description: "" },
    ],
  },
];

export default function RegionalTrendsPage() {
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
          <span className="eyebrow">Evidence Base</span>
          <h1 className="h1-display" style={{ color: "#fff", maxWidth: 760, marginBottom: 28 }}>
            Regional Trends
          </h1>
          <p className="body-lead" style={{ color: "rgba(255,255,255,0.72)", maxWidth: 600 }}>
            Ten trends across five US regions. Each pair of regional observations contributed signals,
            patterns, and tensions that were disaggregated and reassembled into the two national trends.
          </p>
        </div>
      </section>

      {/* ── Region grid ───────────────────────────────────────────── */}
      <section className="section-gray">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Five Regions · Ten Trends</span>
          </ScrollReveal>

          <div className="region-grid">
            {regions.map((region, ri) => (
              <ScrollReveal key={region.name} delay={ri * 60}>
                <div
                  className={`region-card ${region.hasContent ? "region-card-active" : "region-card-placeholder"}`}
                >
                  <h2
                    className="serif"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: region.hasContent ? "#000" : "#AAAAAA",
                      marginBottom: 4,
                    }}
                  >
                    {region.name}
                  </h2>

                  {region.hasContent ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {region.trends.map((trend, ti) => (
                        <button
                          key={ti}
                          onClick={() => openOverlay(region.name, trend)}
                          className="trend-item"
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
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              color: "#A100FF",
                              display: "block",
                              marginBottom: 6,
                            }}
                          >
                            {region.name} · 0{ti + 1}
                          </span>
                          <span
                            className="serif"
                            style={{ fontSize: 15, fontWeight: 600, color: "#000", lineHeight: 1.3 }}
                          >
                            {trend.title}
                          </span>
                          <span
                            style={{
                              display: "block",
                              fontSize: 11,
                              color: "#AAAAAA",
                              marginTop: 6,
                            }}
                          >
                            Read →
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p
                      style={{
                        fontSize: 13,
                        fontStyle: "italic",
                        color: "#AAAAAA",
                        lineHeight: 1.6,
                      }}
                    >
                      Regional trend content forthcoming.
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
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

            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#A100FF",
                display: "block",
                marginBottom: 16,
              }}
            >
              {overlay.region}
            </span>

            <h2
              id="overlay-title"
              className="serif"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 600, lineHeight: 1.15, marginBottom: 24, color: "#000" }}
            >
              {overlay.trend.title}
            </h2>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#333" }}>
              {overlay.trend.description}
            </p>

            <p
              style={{
                fontSize: 12,
                color: "#AAAAAA",
                marginTop: 32,
                fontStyle: "italic",
              }}
            >
              Source material: PLACEHOLDER — full research document will be linked here.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
