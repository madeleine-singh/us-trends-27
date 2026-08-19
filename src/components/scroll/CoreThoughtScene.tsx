"use client";

import { Fragment } from "react";
import { useReducedMotion, useRunwayProgress } from "./motion";

/* Reveal window inside the runway: a lead-in before the first word so the
   section settles under the nav, and a tail after the last so the finished
   sentence holds on screen before the pin releases. */
const FIRST_WORD = 0.12;
const LAST_WORD = 0.72;

/**
 * The core thought builds word by word as you scroll through it, rather than
 * simply scrolling into view. Words go 0 -> 1 opacity (never a dimmed
 * in-between state), so no text is ever rendered below contrast minimums.
 */
export default function CoreThoughtScene({
  paragraphs,
  watermark,
  mono = false,
}: {
  paragraphs: string[];
  watermark: string;
  /** Trend 2's watermark repeats the typed-receipt hero face instead of
      Trend 1's script, so it doesn't clash with the photo hero above it. */
  mono?: boolean;
}) {
  const reduced = useReducedMotion();
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();

  /* Word thresholds run across the whole thought, not per paragraph, so the
     reveal keeps a single cadence over the paragraph break — which is where
     the thought turns. `offsets` gives each block its starting word index. */
  const blocks = paragraphs.map((para) => para.split(" "));
  const total = blocks.reduce((n, words) => n + words.length, 0);
  const offsets = blocks.map((_, b) =>
    blocks.slice(0, b).reduce((n, words) => n + words.length, 0)
  );
  const p = reduced ? 1 : progress;

  const wordShown = (block: number, i: number) =>
    p >= FIRST_WORD + ((LAST_WORD - FIRST_WORD) * (offsets[block] + i)) / total;

  return (
    <div className="trs-core__runway" ref={ref}>
      <div className="trs-core__pin">
        <div className={`trs-core__mark ${mono ? "trs-core__mark--mono" : ""}`} aria-hidden="true">
          <span>{watermark}</span>
          <span>{watermark}</span>
        </div>

        <div className="trs-core__inner">
          <p className="eyebrow trs-core__eyebrow trs-reveal" data-shown={p >= 0.05 ? "" : undefined}>
            Core thought
          </p>
          {blocks.map((words, b) => (
            <p className="trs-core__text" key={b}>
              {words.map((word, i) => (
                <Fragment key={i}>
                  <span className="trs-core__word" data-shown={wordShown(b, i) ? "" : undefined}>
                    {word}
                  </span>{" "}
                </Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
