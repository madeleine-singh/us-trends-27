import Link from "next/link";
import type { Metadata } from "next";
import LiveBackdrop from "@/components/LiveBackdrop";
import ScrollReveal from "@/components/ScrollReveal";
import "./landing.css";

export const metadata: Metadata = {
  title: "US Trends 2027 — Accenture Song D&DP",
  description:
    "Built from research across the US, these trends reveal how people's behaviors and attitudes are evolving alongside shifts in business, technology, and society.",
};

const WORDMARK = "Signed by Yours Truly";

/* Edge colours of each section's base background. A band picks up where the
   section above ends and hands off to the one below. */
const HERO_END = "#4a23a8";
const EXEC_TOP = "#241a4a";
const EXEC_END = "#201a44";
const INK_T1 = "#202020";
const INK_T2 = "#171717";
const PAPER = "#ffffff";

/** Full-width band that dissolves one section background into the next. */
function Blend({
  from,
  to,
  variant,
}: {
  from: string;
  to: string;
  variant?: "glow" | "short";
}) {
  return (
    <div
      className={`lp-blend${variant ? ` lp-blend--${variant}` : ""}`}
      aria-hidden="true"
      style={{ ["--from" as string]: from, ["--to" as string]: to }}
    />
  );
}

const profiles = [
  { name: "Audrey Cheng", role: "Initiative Lead", src: "/about/audrey-cheng.jpg" },
  { name: "Melanie Kim", role: "Trend Curator", src: "/about/melanie-kim.jpg" },
  { name: "Madeleine Singh", role: "Trend Curator", src: "/about/madeleine-singh.jpg" },
  { name: "Sophia Ng", role: "Designer", src: "/about/sophia-ng.jpg" },
  { name: "Alexandria Jackson", role: "Designer", src: "/about/alexandria-jackson.jpg" },
  { name: "Savannah Robinson", role: "News Sourcing Lead", src: "/about/savannah-robinson.jpg" },
];

export default function HomePage() {
  return (
    <div className="lp">
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="lp-section lp-hero on-dark">
        <LiveBackdrop>
          <span className="lp-orb lp-hero__orb--a" />
          <span className="lp-orb lp-hero__orb--b" />
          <span className="lp-orb lp-hero__orb--c" />
        </LiveBackdrop>

        <div className="lp-section__inner">
          <div className="container">
            <p className="lp-hero__eyebrow">U.S. Life Trends 2027</p>
            <h1 className="lp-display">The forces reshaping how we live</h1>

            <div className="lp-hero__scroll">
              <a href="#executive-summary" className="btn-primary lp-cta lp-cta--on-glow">
                Scroll
              </a>
            </div>
          </div>
        </div>
      </section>

      <Blend from={HERO_END} to={EXEC_TOP} variant="glow" />

      {/* ── 2. Executive summary ────────────────────────────────── */}
      <section id="executive-summary" className="lp-section lp-exec on-dark">
        <LiveBackdrop>
          <span className="lp-orb lp-exec__orb--a" />
          <span className="lp-orb lp-exec__orb--b" />
          <span className="lp-orb lp-exec__orb--c" />
          <span className="lp-orb lp-exec__orb--d" />
          <span className="lp-exec__veil" />
        </LiveBackdrop>

        <div className="lp-section__inner">
          <div className="container">
            <div className="lp-exec__split">
              <ScrollReveal>
                <h2 className="lp-h2">Executive Summary</h2>
              </ScrollReveal>
              <ScrollReveal delay={90}>
                <p className="lp-body-xl" style={{ color: "rgba(255,255,255,0.92)" }}>
                  Built from research across the US, these trends reveal how people&apos;s
                  behaviors and attitudes are evolving alongside shifts in business,
                  technology, and society.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Blend from={EXEC_END} to={INK_T1} />

      {/* ── 3. Trend 1 — core thought ───────────────────────────── */}
      <section id="trend-1" className="lp-section lp-t1 on-dark">
        <LiveBackdrop>
          <span className="lp-orb lp-t1__orb--b" />
          <span className="lp-orb lp-t1__orb--c" />
          <span className="lp-orb lp-t1__orb--a" />

          <div className="lp-mark lp-mark--top">
            <div className="lp-mark__track">
              <span>{WORDMARK}</span>
              <span>{WORDMARK}</span>
            </div>
          </div>
          <div className="lp-mark lp-mark--bottom">
            <div className="lp-mark__track">
              <span>{WORDMARK}</span>
              <span>{WORDMARK}</span>
            </div>
          </div>
        </LiveBackdrop>

        <div className="lp-section__inner">
          <div className="container">
            <div className="lp-trend__stack">
              <ScrollReveal>
                <p className="lp-trend-label">Trend 1</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="lp-h2">Signed by Yours Truly</h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="lp-body-xl lp-trend__body">
                  When every niche can be instantly identified, copied, and monetized,
                  access to culture is no longer scarce. A credible, self-authored point
                  of view is.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <Link href="/trend-1" className="btn-primary lp-cta">
                  Read Trend 1
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Blend from={INK_T1} to={INK_T2} variant="short" />

      {/* ── 4. Trend 2 ──────────────────────────────────────────── */}
      <section id="trend-2" className="lp-section lp-t2 on-dark">
        <LiveBackdrop>
          <span className="lp-photo" />
          <span className="lp-t2__wash" />
          <span className="lp-orb lp-t2__orb" />
        </LiveBackdrop>

        <div className="lp-section__inner">
          <div className="container">
            <div className="lp-trend__stack">
              <ScrollReveal>
                <p className="lp-trend-label">Trend 2</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="lp-h2">Give Me the Receipts</h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="lp-body-xl lp-trend__body">
                  Consumers are re-evaluating their relationships with brands,
                  institutions, and individuals, and deciding whether they still serve
                  their needs. Trust isn&apos;t given anymore; it must be earned, with
                  receipts, and re-proven over time.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <Link href="/trend-2" className="btn-primary lp-cta">
                  Read Trend 2
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Blend from={INK_T2} to={PAPER} />

      {/* ── 5. About us ─────────────────────────────────────────── */}
      <section id="about" className="lp-section lp-about">
        <LiveBackdrop>
          <span className="lp-orb lp-about__orb--a" />
          <span className="lp-orb lp-about__orb--b" />
        </LiveBackdrop>

        <div className="lp-section__inner">
          <div className="container">
            <ScrollReveal>
              <h2 className="lp-h2 lp-about__title">About us</h2>
              <p className="lp-body-lg lp-about__lede">
                D&amp;DP News and Trends is a design community of sense-makers who explore
                emerging ideas at the intersection of technology, design, and culture. We
                help teams stay curious, informed, and connected to the news and trends
                shaping our world.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="lp-section__inner">
          <div className="container">
            <ul className="lp-profiles">
              {profiles.map((person, i) => (
                <li key={person.name}>
                  <ScrollReveal delay={i * 60}>
                    <div className="lp-profile">
                      {/* Name and role sit directly below, so the portrait adds no
                          information a screen reader is missing. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={person.src}
                        alt=""
                        width={200}
                        height={200}
                        loading="lazy"
                        decoding="async"
                        className="lp-shot"
                      />
                      <div>
                        <h3 className="lp-profile__name">{person.name}</h3>
                        <p className="lp-profile__role">{person.role}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lp-section__inner">
          <div className="container">
            <ScrollReveal>
              <p className="lp-thanks">
                Special thanks to our Life Trends Ambassadors whose contributions helped
                bring this to life: Valerie Greene, Patricia Huynh, Alex Kim, Zoe
                McCloskey, Lauren Oliver, Ashley Paulos, and Andy Simpson.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
