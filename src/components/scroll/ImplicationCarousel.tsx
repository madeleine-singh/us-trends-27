"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ImplicationCard } from "@/content/trends/types";
import { useReducedMotion } from "./motion";

/* ──────────────────────────────────────────────────────────────
   "What this means for brands and designers" — Figma card component
   node 356:683, laid out as the carousel in node 446:793.

   Built on a native scroll-snap container rather than a transformed
   track: swipe, trackpad, scrollbar and Tab-to-card all work without
   any extra code, and the browser owns the scroll physics. The arrows
   and the stepper just call scrollTo.

   The set repeats forever (arrows and swipe alike): the real cards render
   three times back to back — before / real / after — and the middle copy
   is what the page opens on. Scrolling or clicking past either end of the
   middle copy lets the native scroll glide smoothly into the neighbouring
   clone, then silently re-centers on the equivalent card in the middle
   copy the moment that scroll settles. Because every copy is pixel-identical,
   the jump is invisible — the run just appears to continue indefinitely.
   Only the middle copy is exposed to assistive tech; the clones are
   presentation-only duplicates.

   Every card's body copy is in the DOM at all times, so assistive tech
   reads the whole set. Hover, focus and tap only change what is
   visible, which is why there is no aria-expanded here to contradict.
   ────────────────────────────────────────────────────────────── */

function useCardMetrics(trackRef: React.RefObject<HTMLUListElement | null>) {
  const [step, setStep] = useState(0);

  // Layout effect, not a plain effect: the very first measurement has to
  // land before paint, or the initial "jump to the middle copy" below runs a
  // frame late and the clone group flashes at scrollLeft 0 first.
  useLayoutEffect(() => {
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

/** Wraps n into [0, total). */
function wrap(n: number, total: number) {
  return ((n % total) + total) % total;
}

export default function ImplicationCarousel({
  cards,
  label,
}: {
  cards: ImplicationCard[];
  label: string;
}) {
  const total = cards.length;
  const trackRef = useRef<HTMLUListElement>(null);
  const reduced = useReducedMotion();
  const step = useCardMetrics(trackRef);
  const [index, setIndex] = useState(0);
  /** Cards that are substantially inside the viewport read at full strength;
      the ones cropped at the edge sit back at 50%, per the Figma annotation. */
  const [visible, setVisible] = useState<Set<string>>(new Set());
  /** Tap-to-reveal for touch, where there is no hover. */
  const [pinned, setPinned] = useState<string | null>(null);

  /* The raw index the track is scrolled (or scrolling) to, across all three
     copies. Starts at `total` — the first card of the middle copy — and
     arrow clicks just keep incrementing/decrementing it, so a run of
     "next" clicks scrolls smoothly past the end of the middle copy into
     the "after" clone rather than snapping backwards. */
  const rawIndexRef = useRef(total);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToRaw = useCallback(
    (raw: number, behavior: ScrollBehavior) => {
      const track = trackRef.current;
      if (!track || !step) return;
      track.scrollTo({ left: raw * step, behavior });
    },
    [step]
  );

  // Jump to the middle copy the moment card width is known, before paint.
  const initialized = useRef(false);
  useLayoutEffect(() => {
    if (!step || initialized.current) return;
    initialized.current = true;
    rawIndexRef.current = total;
    scrollToRaw(total, "instant" as ScrollBehavior);
  }, [step, total, scrollToRaw]);

  /* Derive the active dot from real scroll position, so dragging the
     scrollbar or swiping keeps the controls honest — then, once scrolling
     has settled, silently re-center any position sitting in a clone copy
     back onto the equivalent card in the middle copy. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !step || !total) return;

    let raf = 0;
    const read = () => {
      raf = 0;
      const raw = Math.round(track.scrollLeft / step);
      setIndex(wrap(raw, total));

      if (settleTimer.current) clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(() => {
        const settledRaw = Math.round(track.scrollLeft / step);
        if (settledRaw < total || settledRaw >= total * 2) {
          const corrected = total + wrap(settledRaw, total);
          rawIndexRef.current = corrected;
          track.scrollTo({ left: corrected * step, behavior: "instant" as ScrollBehavior });
        } else {
          rawIndexRef.current = settledRaw;
        }
      }, 120);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };

    read();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (settleTimer.current) clearTimeout(settleTimer.current);
    };
  }, [step, total]);

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
    // Every copy is tracked, not just the middle one — a clone can sit front
    // and center during the brief window before a wrap-around scroll settles,
    // and it needs to read at full strength then too.
    track.querySelectorAll<HTMLElement>("[data-card]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [cards.length]);

  const next = useCallback(() => {
    const raw = rawIndexRef.current + 1;
    rawIndexRef.current = raw;
    scrollToRaw(raw, reduced ? ("auto" as ScrollBehavior) : "smooth");
  }, [scrollToRaw, reduced]);

  const prev = useCallback(() => {
    const raw = rawIndexRef.current - 1;
    rawIndexRef.current = raw;
    scrollToRaw(raw, reduced ? ("auto" as ScrollBehavior) : "smooth");
  }, [scrollToRaw, reduced]);

  /** Dot navigation jumps straight to the target card in the middle copy,
      rather than continuing the endless run — a direct pick, not a step. */
  const jumpTo = useCallback(
    (i: number) => {
      const raw = total + wrap(i, total);
      rawIndexRef.current = raw;
      scrollToRaw(raw, reduced ? ("auto" as ScrollBehavior) : "smooth");
    },
    [scrollToRaw, reduced, total]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Home") {
      e.preventDefault();
      jumpTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      jumpTo(total - 1);
    }
  };

  return (
    <div className="trs-carousel" role="group" aria-roledescription="carousel" aria-label={label}>
      {/* The role sits on the wrapper, not here, so the track keeps its list
          semantics and screen readers still announce "5 items" (the real
          copy's count — clones carry aria-hidden and are excluded). */}
      <ul className="trs-carousel__track" ref={trackRef} tabIndex={-1} onKeyDown={onKeyDown}>
        {[0, 1, 2].flatMap((copy) =>
          cards.map((card, i) => {
            const isReal = copy === 1;
            const copyId = `${copy}-${card.number}`;
            const isPinned = pinned === copyId;
            return (
              <li
                key={copyId}
                className="trs-card"
                data-card={copyId}
                data-copy={copy}
                data-fill={card.fill}
                data-inview={visible.has(copyId) ? "" : undefined}
                data-open={isPinned ? "" : undefined}
                aria-hidden={isReal ? undefined : "true"}
              >
                {/* Focusable so keyboard users reveal the body by tabbing, and
                    clickable so touch users (no hover) can too. Not a button:
                    the body copy is in the accessibility tree either way, so
                    nothing is being expanded — only the visual layer changes. */}
                <div
                  className="trs-card__inner"
                  role="group"
                  aria-label={`Card ${i + 1} of ${cards.length}: ${card.title}`}
                  tabIndex={isReal ? 0 : -1}
                  onClick={() => isReal && setPinned(isPinned ? null : copyId)}
                >
                  <span
                    className="trs-card__bg"
                    style={{ backgroundImage: `url(${card.background})` }}
                    aria-hidden="true"
                  />
                  <span className="trs-card__wash" aria-hidden="true" />
                  <span className="trs-card__frost" aria-hidden="true" />

                  <span className="trs-card__head">
                    <span className="trs-card__title">{card.title}</span>
                  </span>
                  <span className="trs-card__body">{card.body}</span>
                </div>
              </li>
            );
          })
        )}
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
                onClick={() => jumpTo(i)}
              />
            </li>
          ))}
        </ol>

        <div className="trs-carousel__arrows">
          <button type="button" className="trs-carousel__arrow" onClick={prev} aria-label="Previous card">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M19 12H5m0 0l7-7m-7 7l7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button type="button" className="trs-carousel__arrow" onClick={next} aria-label="Next card">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
