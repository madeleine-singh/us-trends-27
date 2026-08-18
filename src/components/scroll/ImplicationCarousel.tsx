"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ImplicationCard } from "@/content/trends/types";
import { useReducedMotion } from "./motion";

/* ──────────────────────────────────────────────────────────────
   "What this means for brands and designers" — Figma card component
   node 356:683, laid out as the carousel in node 446:793.

   Built on a native scroll-snap container rather than a transformed
   track: swipe, trackpad, scrollbar and Tab-to-card all work without
   any extra code, and the browser owns the scroll physics. The arrows
   and the stepper just call scrollTo.

   Every card's body copy is in the DOM at all times, so assistive tech
   reads the whole set. Hover, focus and tap only change what is
   visible, which is why there is no aria-expanded here to contradict.
   ────────────────────────────────────────────────────────────── */

function useCardMetrics(trackRef: React.RefObject<HTMLUListElement | null>) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const first = track.querySelector<HTMLElement>("[data-card]");
      if (!first) return;
      const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
      setStep(first.getBoundingClientRect().width + gap);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [trackRef]);

  return step;
}

export default function ImplicationCarousel({
  cards,
  label,
}: {
  cards: ImplicationCard[];
  label: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const reduced = useReducedMotion();
  const step = useCardMetrics(trackRef);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  /** Cards that are substantially inside the viewport read at full strength;
      the ones cropped at the edge sit back at 50%, per the Figma annotation. */
  const [visible, setVisible] = useState<Set<string>>(new Set());
  /** Tap-to-reveal for touch, where there is no hover. */
  const [pinned, setPinned] = useState<string | null>(null);

  /* Derive the active index and the two edge flags from real scroll position,
     so dragging the scrollbar or swiping keeps the controls honest. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !step) return;

    let raf = 0;
    const read = () => {
      raf = 0;
      const max = track.scrollWidth - track.clientWidth;
      setIndex(Math.min(cards.length - 1, Math.max(0, Math.round(track.scrollLeft / step))));
      setAtStart(track.scrollLeft <= 2);
      setAtEnd(track.scrollLeft >= max - 2);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };

    read();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [step, cards.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            const id = (entry.target as HTMLElement).dataset.card;
            if (!id) continue;
            if (entry.intersectionRatio >= 0.85) next.add(id);
            else next.delete(id);
          }
          return next;
        });
      },
      { root: track, threshold: [0, 0.85, 1] }
    );
    track.querySelectorAll<HTMLElement>("[data-card]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [cards.length]);

  const scrollTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track || !step) return;
      track.scrollTo({
        left: i * step,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [step, reduced]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollTo(Math.min(cards.length - 1, index + 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollTo(Math.max(0, index - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      scrollTo(cards.length - 1);
    }
  };

  return (
    <div className="trs-carousel" role="group" aria-roledescription="carousel" aria-label={label}>
      {/* The role sits on the wrapper, not here, so the track keeps its list
          semantics and screen readers still announce "5 items". */}
      <ul className="trs-carousel__track" ref={trackRef} tabIndex={-1} onKeyDown={onKeyDown}>
        {cards.map((card, i) => {
          const id = card.number;
          const isPinned = pinned === id;
          return (
            <li
              key={id}
              className="trs-card"
              data-card={id}
              data-fill={card.fill}
              data-inview={visible.has(id) ? "" : undefined}
              data-open={isPinned ? "" : undefined}
            >
              {/* Focusable so keyboard users reveal the body by tabbing, and
                  clickable so touch users (no hover) can too. Not a button:
                  the body copy is in the accessibility tree either way, so
                  nothing is being expanded — only the visual layer changes. */}
              <div
                className="trs-card__inner"
                role="group"
                aria-label={`Card ${i + 1} of ${cards.length}: ${card.title}`}
                tabIndex={0}
                onClick={() => setPinned(isPinned ? null : id)}
              >
                <span
                  className="trs-card__bg"
                  style={{ backgroundImage: `url(${card.background})` }}
                  aria-hidden="true"
                />
                <span className="trs-card__wash" aria-hidden="true" />
                <span className="trs-card__frost" aria-hidden="true" />

                <span className="trs-card__head">
                  <span className="trs-card__num">{card.number}</span>
                  <span className="trs-card__title">{card.title}</span>
                </span>
                <span className="trs-card__body">{card.body}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="trs-carousel__controls">
        <ol className="trs-carousel__steps">
          {cards.map((card, i) => (
            <li key={card.number}>
              <button
                type="button"
                className="trs-carousel__step"
                data-active={i === index ? "" : undefined}
                aria-current={i === index ? "true" : undefined}
                aria-label={`Show card ${i + 1} of ${cards.length}: ${card.title}`}
                onClick={() => scrollTo(i)}
              />
            </li>
          ))}
        </ol>

        <div className="trs-carousel__arrows">
          <button
            type="button"
            className="trs-carousel__arrow"
            onClick={() => scrollTo(Math.max(0, index - 1))}
            disabled={atStart}
            aria-label="Previous card"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M19 12H5m0 0l7-7m-7 7l7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            className="trs-carousel__arrow"
            onClick={() => scrollTo(Math.min(cards.length - 1, index + 1))}
            disabled={atEnd}
            aria-label="Next card"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
