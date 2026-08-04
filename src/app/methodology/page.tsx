import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology — US Trends 2027",
  description:
    "How regional signals were disaggregated and reassembled into the two national US trends for 2027.",
};

export default function MethodologyPage() {
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

          <div className="step-grid">
            <ScrollReveal delay={0}>
              <div className="step-card">
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
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="step-card">
                <span className="step-number" aria-hidden="true">02</span>
                <h3 className="h3-card" style={{ marginBottom: 16 }}>Disaggregation</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333" }}>
                  The ten regional trends were disaggregated into their underlying components — the
                  specific behavioral signals, cultural patterns, and human tensions they pointed to —
                  rather than treated as conclusions in themselves.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginTop: 14 }}>
                  This stage identified where signals were geographically specific and where they
                  pointed to something broader, ensuring that regional distinctiveness was preserved
                  rather than averaged away.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="step-card">
                <span className="step-number" aria-hidden="true">03</span>
                <h3 className="h3-card" style={{ marginBottom: 16 }}>Reassembly into National Trends</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333" }}>
                  Signals that recurred across regions — with enough geographic diversity to represent
                  a national pattern rather than a coastal export — were reassembled into the two
                  national trends presented here.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginTop: 14 }}>
                  The result is a US point of view that reflects actual geographic breadth, not a New
                  York and LA projection dressed up as national insight.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Note callout */}
          <ScrollReveal delay={150}>
            <aside className="note-callout" aria-label="Methodology note">
              Each regional trend that contributed to the national POV remains traceable in the
              evidence base. The regional origin of a signal informs how broadly it should be
              interpreted and where geographic nuance should be respected in brand or design
              applications.
            </aside>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
