import Timeline from "@/components/Timeline";
import FlipCard from "@/components/FlipCard";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signed by Yours Truly — US Trends 2027",
  description:
    "When every niche can be instantly identified, copied, and monetized, access to culture is no longer scarce. A credible, self-authored point of view is.",
};

const timelineNodes = [
  {
    year: "2023–2025",
    sublabel: "Microtrend Identity Packaging",
    tooltip:
      `Online culture proliferates into endlessly multiplying "cores." Identity becomes a product: named, searchable, and reproducible at algorithmic speed. A new aesthetic can appear and saturate in a matter of weeks.`,
  },
  {
    year: "2026",
    sublabel: "Mass Individuality & AI Anxiety",
    tooltip:
      "Millions attempt to express uniqueness through nearly identical culturally approved symbols. AI accelerates the cycle, reproducing cultural signals without the human context behind them. Two responses emerge: retreat into offline taste, or conspicuous display of discernment.",
  },
  {
    year: "2027",
    sublabel: "Authorship Specificity",
    tooltip:
      "The new status symbol is a perspective that feels self-authored and specific. People move from chasing microtrends toward deciding which interests are meaningful enough to anchor a lasting point of view.",
  },
];

const flipCards = [
  {
    number: "01",
    title: "Earn the Right to a Point of View",
    body: "Having a perspective isn't enough; it has to show up in what a brand turns down, not just what it pursues. The collaborations declined, the trends skipped: that restraint is the proof. Without it, a stated point of view is just positioning.",
  },
  {
    number: "02",
    title: "Let Authorship Show in the Craft",
    body: "AI can now produce polished work at scale, so surface refinement alone no longer proves anything. What's harder to fake is the texture of real judgment: unexpected choices, decisions clearly not optimized for approval. Design should aim to be recognizable because it's distinctly authored, not just consistent.",
  },
  {
    number: "03",
    title: "Build a Cultural Position, not a Cultural Presence",
    body: "Borrowing a subculture's surface codes without a real relationship to it is exactly what produces tasteslop. The fix isn't avoiding cultural reference; it's earning it through long-term investment in specific communities or practices, and being honest about where that relationship starts and stops.",
  },
  {
    number: "04",
    title: "Treat Niche Specificity as a Creative Constraint, not a Targeting Strategy",
    body: "Brands got trained to spot and adopt emerging niches quickly, but authorship inverts that logic: specificity should be where the creative work starts, not a targeting tactic. A brand built from a genuinely specific place is harder to replicate than one just performing fluency in a niche.",
  },
  {
    number: "05",
    title: "Resist the Pressure to be Legible to Everyone",
    body: "Algorithmic culture rewards content that can be immediately understood across contexts. Authored work often can't be, and that resistance is part of its value. Brands and designers should be willing to produce work that takes time to understand, rewards sustained attention, or requires some existing knowledge to fully appreciate. Being partially illegible to the wrong audience is not a failure.",
  },
];

export default function Trend1Page() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="on-dark"
        style={{ background: "#000", padding: "clamp(80px, 12vw, 152px) 0 clamp(64px, 8vw, 96px)", position: "relative", overflow: "hidden" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/Acc_GT_Solid_P1_RGB.svg" alt="" aria-hidden="true" className="hero-gt" />
        <div className="container">
          <span className="eyebrow">2027 Trend · 01</span>
          <h1 className="h1-display" style={{ color: "#fff", marginBottom: 0, maxWidth: 820 }}>
            Signed by Yours Truly
          </h1>
          <p className="core-thought">
            When every niche can be instantly identified, copied, and monetized, access to culture
            is no longer scarce. A credible, self-authored point of view is.
          </p>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────── */}
      <section
        className="section-white"
        style={{ paddingTop: "var(--section-py)", paddingBottom: 0, overflow: "visible" }}
      >
        <div
          style={{
            padding: "0 0 var(--section-py)",
            borderBottom: "1px solid #EBEBEB",
          }}
        >
          <div className="container" style={{ marginBottom: 48 }}>
            <ScrollReveal>
              <span className="eyebrow">How We Got Here</span>
              <h2 className="h2-section" style={{ marginBottom: 0 }}>Timeline</h2>
            </ScrollReveal>
          </div>
          <Timeline nodes={timelineNodes} />
        </div>
      </section>

      {/* ── 2026: What We Saw ─────────────────────────────────────── */}
      <section className="section-white">
        <div className="container">
          <ScrollReveal>
            <h2 className="h2-section" style={{ marginBottom: 28, maxWidth: 760 }}>
              2026: What We Saw Across America
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="prose-col">
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 20 }}>
                Our research across the United States revealed a culture that feels more fragmented than
                ever. People are organizing themselves around increasingly specific subcultures.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 20 }}>
                We saw Bushwick indie sleaze on the East Coast, the codes of San Francisco tech culture
                and "tastewashing" in the West, and highly hyped coastal concepts — such as PopUp Bagels
                — being imported into Midwestern cities. At the same time, phenomena such as looksmaxxing,
                bedrotting, tradwife culture, and the male-loneliness discourse were spreading nationally
                through online platforms.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#333" }}>
                These are not equivalent cultural movements. Some are aesthetics, some are lifestyle
                scripts, some are ideological identities, and others are ways of describing social
                conditions. Yet online, they serve a similar purpose: they compress a complicated feeling
                or worldview into a recognizable identity.
              </p>
            </div>
          </ScrollReveal>

          {/* Subsections */}
          <div style={{ marginTop: "clamp(48px, 7vw, 96px)", display: "flex", flexDirection: "column", gap: "clamp(40px, 6vw, 72px)" }}>
            <ScrollReveal>
              <div className="two-col-layout">
                <div>
                  <h3
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 600, lineHeight: 1.2, color: "#000" }}
                  >
                    The Rise of Mass Individuality
                  </h3>
                </div>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginBottom: 16 }}>
                    Algorithmic culture turns individuality into a mass-produced, easily replicated experience.
                  </p>
                  <ul className="bullet-list">
                    <li>Platforms, influencers, and AI got highly effective at telling people what to own, wear, and believe, collapsing into recognizable "cores" (WGSN).</li>
                    <li>Result is a paradox: culture feels more fragmented (endless niches) but more homogenous (same products and behaviors within each niche).</li>
                    <li>Plays out physically too: the same brands appear across cities, each pitched as a local original.</li>
                    <li>Analytics found a 35% decline since 2023 in exposure to content outside people's existing algorithmic preferences (TrendLens Analytics).</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="two-col-layout">
                <div>
                  <h3
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 600, lineHeight: 1.2, color: "#000" }}
                  >
                    Technology Anxiety
                  </h3>
                </div>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginBottom: 16 }}>
                    AI is accelerating "tasteslop," pushing people to either retreat offline or perform taste harder.
                  </p>
                  <ul className="bullet-list">
                    <li>AI reproduces cultural signals without the human context that gave them meaning, so people feel they're losing control over how they're represented.</li>
                    <li>Emily Segal's "tasteslop" concept: taste signals stripped of context and redeployed as generic sophistication, a tool for "tastewashing" when brands borrow subculture codes without real ties to them.</li>
                    <li>Realizing their "niche" tastes are algorithmically mass-produced, people are splitting into two camps: retreating to offline, hands-on taste (vinyl, zines, word-of-mouth), or doubling down on performing culturally-approved taste.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="two-col-layout">
                <div>
                  <h3
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 600, lineHeight: 1.2, color: "#000" }}
                  >
                    Early Proof of Authorship
                  </h3>
                </div>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginBottom: 16 }}>
                    Authorship — sustained lived participation rather than just knowing what's cool — is becoming the new marker of status.
                  </p>
                  <ul className="bullet-list">
                    <li>Status is shifting from taste as possession to taste as practice, demonstrated through action, including what you choose to decline.</li>
                    <li>Early proof is showing up in analog hobbies and third spaces: printmaking workshops, community gardens, "duck libraries," plus highly coded participatory events (Brat, Cowboy Carter, Shrek raves).</li>
                    <li>These rituals only count if sustained and repeated; showing up once isn't proof of participation.</li>
                    <li>Luxury and fashion brands are already making craft and human labor visible, but that alone risks becoming just another aesthetic performance at scale. What matters is whether a brand or individual has a genuine, lived relationship with what they represent.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What to Expect in 2027 ─────────────────────────────────── */}
      <section className="section-dark on-dark">
        <div className="container">
          <ScrollReveal>
            <h2 className="h2-section" style={{ color: "rgba(255,255,255,0.95)", marginBottom: 32, maxWidth: 760 }}>
              What to Expect in 2027
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="prose-col">
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", marginBottom: 20 }}>
                In 2027, value will move away from chasing the next microtrend toward deciding which
                interests are meaningful enough to anchor a lasting point of view.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", marginBottom: 20 }}>
                People will not necessarily reject trends or niche identities outright; instead, they
                will become far more selective about which ones they adopt, how they interpret them,
                and whether they continue to participate after the initial excitement fades.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)" }}>
                The new status symbol will be a perspective that feels self-authored and specific.
                Ultimately, in a culture filled with instantly available identities, the most respected
                individuals will not be those who participate in everything, but rather those who
                demonstrate that they know what matters to them and why.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Implications — flip cards ──────────────────────────────── */}
      <section className="section-gray">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Implications</span>
            <h2 className="h2-section" style={{ marginBottom: 20 }}>
              What This Means for Brands and Designers
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", maxWidth: 620 }}>
              The shift toward authorship specificity creates a clear challenge. Conviction, craft
              expertise, and genuine community become the new points of differentiation.
            </p>
            <p style={{ fontSize: 13, color: "#AAAAAA", marginTop: 16 }}>
              Hover any card to read more.
            </p>
          </ScrollReveal>

          <div className="flip-grid">
            {flipCards.map((card, i) => (
              <ScrollReveal key={card.number} delay={i * 60}>
                <FlipCard number={card.number} title={card.title} body={card.body} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
