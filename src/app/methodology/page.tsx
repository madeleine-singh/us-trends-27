"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Trend {
  title: string;
  description: string;
  pdf: string;
}

interface Region {
  name: string;
  ambassadors: string;
  trends: Trend[];
}

const regions: Region[] = [
  {
    name: "Northeast",
    ambassadors: "Melanie Kim, Audrey Cheng, Valerie Greene",
    trends: [
      {
        title: "Big Fish Energy",
        description:
          "The shift away from mass visibility toward depth of presence in smaller, defined communities. Scale has flattened culture and left people feeling invisible — 2027 is about mattering somewhere specific over being seen everywhere.",
        pdf: "/regional-trends/northeast-01-big-fish-energy.pdf",
      },
      {
        title: "Proof of Personhood",
        description:
          "As AI-generated content saturates digital spaces, people are reaching for the unambiguously human — imperfect, physical, present. A turn toward experiences that carry irreducible proof that a person made them, was there, or meant them.",
        pdf: "/regional-trends/northeast-02-proof-of-personhood.pdf",
      },
    ],
  },
  {
    name: "Midwest",
    ambassadors: "Madeleine Singh, Sophia Ng",
    trends: [
      {
        title: "Clocking Out of AI",
        description:
          "Two AI adoption curves are running in parallel — one steep at work, one flat or declining at home. What people choose to do for themselves is increasingly defined as the opposite of what they do for their employer, and the gap between those two spheres is widening.",
        pdf: "/regional-trends/midwest-01-clocking-out-of-ai.pdf",
      },
      {
        title: "Copy-Paste Cities",
        description:
          "Urban cultural convergence is no longer a background condition — it's something people can see and name in real time. The same brands, aesthetics, and infrastructure are arriving in Midwest cities simultaneously, and residents are starting to ask what it costs to live somewhere that could be anywhere.",
        pdf: "/regional-trends/midwest-02-copy-paste-cities.pdf",
      },
    ],
  },
  {
    name: "West",
    ambassadors: "Zoe McCloskey, Matt Johnson, Stephanie Dunn, Sagar Sahoo, Liana Zorn, Celia Soller",
    trends: [
      {
        title: "Baller Engineers Falling into Precarity",
        description:
          "Tech's highest-paid workers are confronting the possibility that the skills they built entire identities around may be automated out of existence. The social contract that once made engineering a path to prestige and financial security is quietly dissolving.",
        pdf: "/regional-trends/west-01-baller-engineers-falling-into-precarity.pdf",
      },
      {
        title: "AI Media vs Polar Bears: Taste-Washing",
        description:
          "Gen Z is caught between consuming and condemning AI-generated media. Tech companies are co-opting artisanal and ecological aesthetics to appear trustworthy to an audience that knows better — a new form of greenwashing dressed in good taste.",
        pdf: "/regional-trends/west-02-ai-media-vs-polar-bears-taste-washing.pdf",
      },
    ],
  },
  {
    name: "DC / AFS",
    ambassadors: "Lauren Oliver, Patricia Huynh, Ashley Paulos",
    trends: [
      {
        title: "Subscription Fatigue — Ownership Renaissance",
        description:
          "Consumers are rejecting the role of perpetual digital tenants. Rising costs, forced obsolescence, and eroding trust are fueling a clear preference for ownership: perpetual licenses, physical formats, self-hosted media, and lasting control over what they pay for.",
        pdf: "/regional-trends/dc-01-subscription-fatigue-ownership-renaissance.pdf",
      },
      {
        title: `The "Authenticity Premium"`,
        description:
          "As legacy institutions shed seasoned voices and governments challenge traditional media, individuals — creators, specialists, independent voices — are becoming the primary discovery and trust channels. The institution is losing the premium it once charged for credibility.",
        pdf: "/regional-trends/dc-02-individuals-over-institutions-authenticity-premium.pdf",
      },
    ],
  },
  {
    name: "South",
    ambassadors: "Alex Kim, Andy Simpson, Jacqueline Walsh",
    trends: [
      {
        title: "Demise of the Monoculture",
        description:
          "The collapse of a shared cultural reality has fractured common ground into a constellation of niche subcultures. Community no longer forms around shared experience — it assembles around shared identity, with the civic costs of that atomization only now becoming visible.",
        pdf: "/regional-trends/south-01-demise-of-the-monoculture.pdf",
      },
      {
        title: "Neu-Urbanism and Agrario-Curiosity",
        description:
          "The vision of the sleek techno-city is out of favor. People want dense, walkable communities and connection to the natural world simultaneously. The solar-punk aesthetic and the rise of community gardens reflect a genuine desire to reconcile urban life with living things.",
        pdf: "/regional-trends/south-02-neu-urbanism-and-agrario-curiosity.pdf",
      },
      {
        title: "Technocratic Backlash and the Data Center War",
        description:
          "Growing hostility toward an unaccountable tech industry is coalescing around a concrete flashpoint: data centers. Hastily built, environmentally costly, and locally disruptive, they have become the symbol of tech's indifference to the communities it operates in.",
        pdf: "/regional-trends/south-03-technocratic-backlash-and-the-data-center-war.pdf",
      },
    ],
  },
];

export default function MethodologyPage() {
  const [overlay, setOverlay] = useState<{ region: string; trend: Trend } | null>(null);

  const openOverlay = (region: string, trend: Trend) => setOverlay({ region, trend });
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
            bottom up — disaggregated from eleven regional trends collected across five US regions, then
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
                Five US regions — Northeast, Midwest, South, West, and DC / AFS — each contributed
                trend observations grounded in local research: qualitative fieldwork, cultural
                observation, behavioral evidence, and contemporary signal-tracking.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginTop: 14 }}>
                Each regional trend captured something specific to that geography: local behaviors,
                place-based dynamics, and community-level signals that national surveys typically
                flatten or miss entirely.
              </p>

              {/* Regional evidence table */}
              <div style={{ marginTop: 40 }}>
                <div className="region-grid">
                  {regions.map((region, ri) => (
                    <ScrollReveal key={region.name} delay={ri * 60}>
                      <div className="region-card region-card-active">
                        <div>
                          <h4 style={{ fontSize: 18, fontWeight: 600, color: "#000", marginBottom: 6 }}>
                            {region.name}
                          </h4>
                          <p style={{ fontSize: 12, color: "#767676", lineHeight: 1.5, margin: 0 }}>
                            {region.ambassadors}
                          </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {region.trends.map((trend, ti) => (
                            <button
                              key={ti}
                              onClick={() => openOverlay(region.name, trend)}
                              className="region-trend-btn"
                              style={{
                                background: "none",
                                border: "none",
                                padding: "14px 8px",
                                margin: "0 -8px",
                                cursor: "pointer",
                                textAlign: "left",
                                width: "calc(100% + 16px)",
                                borderTop: "1px solid #EBEBEB",
                                transition: "background 0.2s var(--ease)",
                              }}
                              aria-label={`View trend: ${trend.title}`}
                            >
                              <span style={{ fontSize: 14, fontWeight: 600, color: "#000", lineHeight: 1.3, display: "block" }}>
                                {trend.title}
                              </span>
                              <span style={{ display: "block", fontSize: 11, color: "#A100FF", marginTop: 6 }}>
                                View Pitch →
                              </span>
                            </button>
                          ))}
                        </div>
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
                To develop the US trends, the regional trends were disaggregated back into their
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

              {/* Disaggregation process images */}
              <div className="region-grid" style={{ marginTop: 40 }}>
                {[
                  { src: "/methodology/disagg-1.png", alt: "Regional signals spread and organized" },
                  { src: "/methodology/disagg-2.png", alt: "Signals grouped into emerging patterns" },
                  { src: "/methodology/disagg-3.png", alt: "Patterns consolidated into national trends" },
                ].map((img, i) => (
                  <ScrollReveal key={i} delay={i * 150}>
                    <div style={{
                      borderTop: "3px solid var(--purple)",
                      overflow: "hidden",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
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

              {/* Reassembly process images */}
              <div className="region-grid" style={{ marginTop: 40 }}>
                {[
                  { src: "/methodology/reassembly-1.png", alt: "Trend sourcing and evidence review" },
                  { src: "/methodology/reassembly-2.png", alt: "Pattern validation against research" },
                  { src: "/methodology/reassembly-3.png", alt: "Final national trends assembled" },
                ].map((img, i) => (
                  <ScrollReveal key={i} delay={i * 150}>
                    <div style={{
                      borderTop: "3px solid var(--purple)",
                      overflow: "hidden",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PDF Gallery Overlay ───────────────────────────────────── */}
      {overlay && (
        <div
          className="overlay-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="overlay-title"
          onClick={(e) => { if (e.target === e.currentTarget) closeOverlay(); }}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div
            className="overlay-panel"
            style={{
              width: "min(1080px, 96vw)",
              maxWidth: "none",
              maxHeight: "calc(100vh - var(--nav-h) - 48px)",
              display: "flex",
              flexDirection: "column",
              padding: 0,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{ padding: "20px 28px 16px", borderBottom: "1px solid #EBEBEB", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
              <div>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#A100FF", display: "block", marginBottom: 6 }}>
                  {overlay.region}
                </span>
                <h2
                  id="overlay-title"
                  style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 600, lineHeight: 1.15, color: "#000", margin: 0 }}
                >
                  {overlay.trend.title}
                </h2>
              </div>
              <button
                className="overlay-close"
                onClick={closeOverlay}
                aria-label="Close trend detail"
                style={{ flexShrink: 0, marginTop: 2 }}
              >
                ×
              </button>
            </div>

            {/* PDF viewer */}
            <div style={{ flex: 1, minHeight: 0 }}>
              <iframe
                src={overlay.trend.pdf}
                title={overlay.trend.title}
                style={{ width: "100%", height: "100%", minHeight: "60vh", border: "none", display: "block" }}
              />
            </div>

            {/* Description footer */}
            <div style={{ padding: "16px 28px", borderTop: "1px solid #EBEBEB", background: "#FAFAFA" }}>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#444", margin: 0 }}>
                <strong>Summary:</strong> {overlay.trend.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
