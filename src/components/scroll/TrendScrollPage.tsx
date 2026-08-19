import SectionProgressNav from "./SectionProgressNav";
import TimelineScene from "./TimelineScene";
import CoreThoughtScene from "./CoreThoughtScene";
import ExpectScene from "./ExpectScene";
import ImplicationCarousel from "./ImplicationCarousel";
import { ProseParagraph } from "./Prose";
import { DropImage, Stage, WordDrop } from "./Drops";
import Reveal from "./Reveal";
import { wordFontClass } from "./fonts";
import type { TrendContent } from "@/content/trends/types";
import "./scroll.css";

/* ──────────────────────────────────────────────────────────────
   The scrollytelling shell shared by both trend pages. Everything
   that differs between Trend 1 and Trend 2 lives in the
   TrendContent object, so the two pages scroll, reveal and behave
   identically by construction.
   ────────────────────────────────────────────────────────────── */

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
      className="trs-blend"
      aria-hidden="true"
      style={{ ["--from" as string]: from, ["--to" as string]: to, height }}
    />
  );
}

const INK_DARK = "#202020";
const INK_LIGHT = "#f1f1ef";
/* Bottom stop of the hero's lavender mesh — the blend into the core thought
   starts from this colour, so keep the two in step with `.trs-hero`. Photo
   heroes (Trend 2) are already dark, so they blend from ink instead and skip
   the light-zone the mesh hero needs for the rail to invert over it. */
const HERO_END = "#6f52d6";

export default function TrendScrollPage({ content }: { content: TrendContent }) {
  const { hero, coreThought, timeline, intro, signals, expect, implications, stops } = content;
  const heroEnd = hero.backdrop ? INK_DARK : HERO_END;

  return (
    <div className={`trs ${wordFontClass}`}>
      <SectionProgressNav
        stops={stops}
        lightZones={[
          ...(hero.backdrop ? [] : [{ fadeOutId: "blend-hero-out" }]),
          { fadeInId: "blend-to-light", fadeOutId: "blend-to-dark" },
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section id="hero" className={`trs-hero on-dark ${hero.backdrop ? "trs-hero--photo" : ""}`}>
        {hero.backdrop ? (
          <div className="trs-hero__backdrop trs-hero__backdrop--photo" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.backdrop} alt="" className="trs-hero__photo" />
            <span className="trs-hero__scrim" />
          </div>
        ) : (
          <div className="trs-hero__backdrop" aria-hidden="true">
            <span className="trs-orb trs-orb--a" />
            <span className="trs-orb trs-orb--b" />
            <span className="trs-orb trs-orb--c" />
            <span className="trs-hero__wash" />
          </div>
        )}

        <div className="trs-hero__content">
          <p className="trs-hero__presents">
            <span className="trs-hero__kicker">{hero.kicker}</span>
            {hero.presents}
          </p>
          <h1 className={`trs-hero__title ${hero.backdrop ? "trs-hero__title--mono" : ""}`}>
            {hero.title}
          </h1>
        </div>

        <a className="trs-jump" href="#core-thought">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 4v15m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </section>

      <Blend id="blend-hero-out" from={heroEnd} to={INK_DARK} height="90vh" />

      {/* ── Core thought ───────────────────────────────────────── */}
      <section id="core-thought" className="trs-core on-dark">
        <CoreThoughtScene paragraphs={coreThought} watermark={hero.title} mono={Boolean(hero.backdrop)} />
      </section>

      <Blend id="blend-to-light" from={INK_DARK} to={INK_LIGHT} height="120vh" />

      {/* ── The timeline ───────────────────────────────────────── */}
      <section id="timeline" className="trs-timeline">
        <TimelineScene timeline={timeline} />
      </section>

      <Blend id="blend-to-dark" from={INK_LIGHT} to={INK_DARK} height="120vh" />

      {/* ── What we saw across America ─────────────────────────── */}
      <section id="what-we-saw" className="trs-intro on-dark">
        <div
          className="trs-intro__bg"
          style={{ backgroundImage: `url(${intro.backdrop})` }}
          aria-hidden="true"
        />
        <div className="trs-shell trs-shell--narrow">
          <Reveal>
            <h2 className="trs-h2 trs-h2--display trs-center">{intro.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="trs-intro__lede">{intro.lede}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Signals ────────────────────────────────────────────── */}
      {signals.map((signal) => (
        <section key={signal.id} id={signal.id} className="trs-signal on-dark">
          <div className="trs-signal__grid">
            <header className="trs-signal__head">
              <p className="eyebrow">{signal.eyebrow}</p>
              <h2 className="trs-h2 trs-h2--display">{signal.title}</h2>
            </header>

            <div className="trs-signal__media">
              <Stage width={signal.stage.width} height={signal.stage.height}>
                {signal.drops.map((drop, i) => (
                  <DropImage key={drop.id} spec={drop} index={i} />
                ))}
                {signal.words.map((word, i) => (
                  <WordDrop key={word.id} spec={word} index={i} />
                ))}
              </Stage>
            </div>

            <div className="trs-signal__text">
              {signal.blocks.map((block, i) => (
                <div className="trs-signal__block" key={i}>
                  {block.map((para, j) => (
                    <ProseParagraph key={j} text={para} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Blend from={INK_DARK} to="#000000" height="70vh" />

      {/* ── What to expect in 2027 — pinned reveal ─────────────── */}
      <section id="expect-2027" className="trs-expect on-dark">
        <ExpectScene expect={expect} />
      </section>

      {/* ── Implications ───────────────────────────────────────── */}
      <section id="implications" className="trs-means on-dark">
        <div className="trs-shell">
          <h2 className="trs-h2 trs-h2--display trs-center trs-means__title">
            {implications.title}
          </h2>
          <p className="trs-means__hint">{implications.hint}</p>
        </div>
        <ImplicationCarousel cards={implications.cards} label={implications.title} />
      </section>
    </div>
  );
}
