import type { Metadata } from "next";
import FlipCard from "@/components/FlipCard";
import SectionProgressNav from "@/components/scroll/SectionProgressNav";
import TimelineScene from "@/components/scroll/TimelineScene";
import CoreThoughtScene from "@/components/scroll/CoreThoughtScene";
import ExpectScene from "@/components/scroll/ExpectScene";
import { DropImage, Stage, WordDrop } from "@/components/scroll/Drops";
import { implications, signals, stops } from "./content";
import "./scroll.css";

export const metadata: Metadata = {
  title: "Signed by Yours Truly — US Trends 2027",
  description:
    "When every niche can be instantly identified, copied, and monetized, access to culture is no longer scarce. A credible, self-authored point of view is.",
};

/** Full-width band that cross-fades one section's background into the next. */
function Blend({
  id,
  from,
  to,
  height = "48vh",
}: {
  id?: string;
  from: string;
  to: string;
  height?: string;
}) {
  return (
    <div
      id={id}
      className="t1s-blend"
      aria-hidden="true"
      style={{ ["--from" as string]: from, ["--to" as string]: to, height }}
    />
  );
}

const INK_DARK = "#202020";
const INK_LIGHT = "#f1f1ef";
const HERO_END = "#241033";

export default function Trend1ScrollPage() {
  return (
    <div className="t1s">
      <SectionProgressNav
        stops={stops}
        lightZone={{ fadeInId: "blend-to-light", fadeOutId: "blend-to-dark" }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section id="hero" className="t1s-hero on-dark">
        <div className="t1s-hero__backdrop" aria-hidden="true">
          <span className="t1s-orb t1s-orb--a" />
          <span className="t1s-orb t1s-orb--b" />
          <span className="t1s-orb t1s-orb--c" />
        </div>

        <div className="t1s-hero__content">
          <p className="t1s-hero__presents">D&amp;DP News &amp; Trends presents</p>
          <h1 className="t1s-hero__title">Signed by Yours Truly</h1>
        </div>

        <a className="t1s-jump" href="#core-thought">
          <span>Begin</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 4v15m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </section>

      <Blend from={HERO_END} to={INK_DARK} height="90vh" />

      {/* ── Core thought ───────────────────────────────────────── */}
      <section id="core-thought" className="t1s-core on-dark">
        <CoreThoughtScene />
      </section>

      <Blend id="blend-to-light" from={INK_DARK} to={INK_LIGHT} height="120vh" />

      {/* ── The timeline ───────────────────────────────────────── */}
      <section id="timeline" className="t1s-timeline">
        <TimelineScene />
      </section>

      <Blend id="blend-to-dark" from={INK_LIGHT} to={INK_DARK} height="120vh" />

      {/* ── What we saw across America ─────────────────────────── */}
      <section id="what-we-saw" className="t1s-intro on-dark">
        <div className="t1s-shell t1s-shell--narrow">
          <h2 className="t1s-h2 t1s-h2--display">What we saw across America</h2>
          <p className="t1s-intro__lede">
            Our research revealed a country that feels more culturally fragmented than ever, and
            expressions that vary sharply by region.
          </p>
        </div>
      </section>

      {/* ── Signals ────────────────────────────────────────────── */}
      {signals.map((signal) => (
        <section key={signal.id} id={signal.id} className="t1s-signal on-dark">
          <div className="t1s-signal__grid">
            <div className="t1s-signal__media">
              <Stage width={signal.stage.width} height={signal.stage.height}>
                {signal.drops.map((drop, i) => (
                  <DropImage key={drop.id} spec={drop} index={i} />
                ))}
                {signal.words.map((word, i) => (
                  <WordDrop key={word.id} spec={word} index={i} />
                ))}
              </Stage>
            </div>

            <div className="t1s-signal__text">
              <header className="t1s-signal__head">
                <p className="eyebrow">{signal.eyebrow}</p>
                <h2 className="t1s-h2 t1s-h2--display">{signal.title}</h2>
              </header>
              <div className="t1s-signal__prose">
                {signal.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Blend from={INK_DARK} to="#000000" height="70vh" />

      {/* ── What to expect in 2027 — parallax release ──────────── */}
      <section id="expect-2027" className="t1s-expect on-dark">
        <ExpectScene />
      </section>

      {/* ── Implications ───────────────────────────────────────── */}
      <section id="implications" className="t1s-means on-dark">
        <div className="t1s-shell">
          <p className="eyebrow">Implications</p>
          <h2 className="t1s-h2 t1s-h2--display t1s-center">
            What this means for brands and designers
          </h2>
          <p className="t1s-means__lede">
            The shift toward authorship specificity creates a clear challenge. Conviction, craft
            expertise, and genuine community become the new points of differentiation.
          </p>
          <p className="t1s-means__hint">Hover or focus any card to read more.</p>

          <div className="flip-grid">
            {implications.map((card) => (
              <FlipCard key={card.number} number={card.number} title={card.title} body={card.body} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
