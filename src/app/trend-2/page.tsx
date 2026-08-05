import Timeline from "@/components/Timeline";
import FlipCard from "@/components/FlipCard";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give Me the Receipts — US Trends 2027",
  description:
    "Consumers are re-evaluating their relationships with brands, institutions, and individuals. Trust isn't given anymore; it must be earned, with receipts, and re-proven over time.",
};

const timelineNodes = [
  {
    year: "2023–2025",
    sublabel: "Dissatisfaction in Moments",
    tooltip:
      "Distrust stays tied to individual issues and companies — not something people apply everywhere. When a cause resonates, people engage with that one thing, but aren't reacting to everything at once.",
  },
  {
    year: "2026",
    sublabel: "Baseline Distrust",
    tooltip:
      "Distrust becomes a baseline feeling as dissatisfaction intensifies across all facets of life at once — spending, jobs, dating, media, local communities. Institutions people used to default to no longer feel reliable.",
  },
  {
    year: "2027",
    sublabel: "Upfront Skepticism",
    tooltip:
      "People have learned to be skeptical upfront, discerning brands, individuals, and communities for trustworthiness. Trust isn't given anymore; it must be earned with receipts, and people will approach systems from a position of baseline skepticism.",
  },
];

const flipCards = [
  {
    number: "01",
    title: "Replace Authenticity Claims with Evidence",
    body: `If you claim "made by humans" or "no AI," be ready to prove it. Getting caught overstating that claim does more damage than never making it. The bigger the claim, the stronger the proof needs to be.`,
  },
  {
    number: "02",
    title: "Design for Continuous Re-evaluation",
    body: "Winning someone over isn't a one-time job. Build for ongoing renewal, not a single decision point. Loyalty should be treated as something renewed, not something permanently secured.",
  },
  {
    number: "03",
    title: "Make Value Impossible to Miss",
    body: "Keep reminding customers of the value they're getting. If it's easy to forget why they're paying, it's easy to cancel.",
  },
  {
    number: "04",
    title: "Design for Financial Reality",
    body: '"Empathizing with your audience" isn\'t specific enough. Brands need to show they understand real financial pressure through flexible tiers, transparent pricing, pause options, and lower-cost alternatives, while avoiding manipulative urgency, hidden fees, or features that lock people into overspending.',
  },
  {
    number: "05",
    title: "Respect Boundaries and Give Real Choice",
    body: "Don't force something new, especially AI, on people without a clear, easy opt-out. Introducing it without consent is often what triggers backlash, so refusal should never be confusing, punitive, or hard to reverse.",
  },
  {
    number: "06",
    title: "Strengthen the Relationship Beyond Transaction",
    body: "As trust shifts away from large institutions, brands should let customers see the people and communities behind the organization — through local participation, access to experts, or peer-learning spaces — to feel more accountable to the people it serves.",
  },
];

export default function Trend2Page() {
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
          <span className="eyebrow">2027 Trend · 02</span>
          <h1 className="h1-display" style={{ color: "#fff", marginBottom: 0, maxWidth: 820 }}>
            Give Me the Receipts
          </h1>
          <p className="core-thought">
            Consumers are re-evaluating their relationships with brands, institutions, and
            individuals — and deciding whether they still serve their needs. Trust isn't given
            anymore; it must be earned, with receipts, and re-proven over time.
          </p>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────── */}
      <section
        className="section-white"
        style={{ paddingTop: "var(--section-py)", paddingBottom: 0, overflow: "visible" }}
      >
        <div style={{ padding: "0 0 var(--section-py)", borderBottom: "1px solid #EBEBEB" }}>
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
                Our research across the United States revealed a population that stopped absorbing
                disappointment quietly and started acting on it, immediately and at scale. Before 2026,
                people mostly picked their battles. If a cause or a boycott resonated, they'd engage
                with that one thing, but they weren't reacting to everything at once.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#333", marginBottom: 20 }}>
                In 2026, that changed — not because people got more reactive, but because so much of
                what was affecting them became harder to ignore or opt out of. The causes weren't just
                political or occasional anymore; they were showing up in people's paychecks, their
                grocery bills, their job security, their relationships, their everyday routines, their
                neighborhoods and communities.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "#333" }}>
                Even when these problems weren't entirely new, they hit differently in 2026 — close
                enough to be personal, and that changed how people acted. The institutions, businesses,
                systems, and individuals they used to default to no longer felt reliable and made them
                wonder: is this still working for me?
              </p>
            </div>
          </ScrollReveal>

          <div style={{ marginTop: "clamp(48px, 7vw, 96px)", display: "flex", flexDirection: "column", gap: "clamp(40px, 6vw, 72px)" }}>
            <ScrollReveal>
              <div className="two-col-layout">
                <div>
                  <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 600, lineHeight: 1.2, color: "#000" }}>
                    Government Stopped Feeling Reliable
                  </h3>
                </div>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginBottom: 16 }}>
                    In 2026, Americans directly felt government institutions fail them, and started acting on that distrust themselves.
                  </p>
                  <ul className="bullet-list">
                    <li>A congressional funding standoff shut down Homeland Security operations, leaving TSA staff unpaid for weeks and airports in chaos.</li>
                    <li>Intensified immigration enforcement (350,000+ deportations) disrupted families and small businesses; 47% of small business owners reported reduced traffic, staffing, or revenue.</li>
                    <li>Communities fought data center projects: 75 projects worth roughly $130B were halted or delayed in Q1 2026 alone, as opposition groups more than quintupled.</li>
                    <li>Political movements outside the two major parties gained real traction, including Zohran Mamdani's NYC mayoral win and DSA membership more than doubling to 120,000+.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="two-col-layout">
                <div>
                  <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 600, lineHeight: 1.2, color: "#000" }}>
                    Financial Security Under New Pressure
                  </h3>
                </div>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginBottom: 16 }}>
                    Tariffs, housing costs, and job insecurity squeezed household finances in 2026, and people can now name exactly why.
                  </p>
                  <ul className="bullet-list">
                    <li>Tariffs pushed up prices on essentials: durable goods up 4.5%, clothing and groceries up 5.6%; gas prices also climbed.</li>
                    <li>Housing strain hit a record high: 49% of renters and 24% of homeowners were cost-burdened, with home insurance premiums rising for a 5th straight year.</li>
                    <li>Job market confidence collapsed (only 28% saw it as a good time to find a job, down from 70% in 2022), driving a rise in "job hugging" out of fear, not satisfaction.</li>
                    <li>People cut spending in response: 61% changed grocery habits and 41% canceled a streaming subscription in the past 6 months.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="two-col-layout">
                <div>
                  <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 600, lineHeight: 1.2, color: "#000" }}>
                    Rerouting Where Trust is Placed
                  </h3>
                </div>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginBottom: 16 }}>
                    As trust in online information collapsed, people rerouted who and what they trust instead.
                  </p>
                  <ul className="bullet-list">
                    <li>As bots and AI-generated content spread across social and dating apps, some people returned to meeting in person, while others leaned into AI companionship: 705M hours on AI companion apps in Q1 2026 vs. 280M on dating apps.</li>
                    <li>Trust in traditional news hit a near-record low (only 25% trust it most of the time), with 43% of adults and 57% of teens now turning to independent creators instead.</li>
                    <li>4 in 10 adults get health and wellness info from uncredentialed social media influencers or podcasts.</li>
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
                In 2027, people will approach systems and services from a position of baseline
                skepticism rather than baseline trust.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", marginBottom: 20 }}>
                Cultural relevance will no longer be enough to guarantee credibility or loyalty. In
                some cases, institutional scale may create even greater scrutiny as people question
                who benefits, how decisions are made, and whether the system is acting in their interest.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)" }}>
                Trust will become conditional and continuously reassessed. This will change how people
                evaluate nearly every relationship in their lives. In this environment, trust will not
                be earned through messaging alone. It will be built through visible proof, consistent
                value, and demonstrated accountability.
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
            <p style={{ fontSize: 13, color: "#AAAAAA" }}>
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
