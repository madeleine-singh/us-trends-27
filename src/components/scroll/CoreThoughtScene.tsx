"use client";

import { Fragment } from "react";
import { useReducedMotion, useRunwayProgress } from "./motion";

const CORE_THOUGHT =
  "When every niche can be instantly identified, copied, and monetized, access to culture is no longer scarce. A credible, self-authored point of view is.";

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
export default function CoreThoughtScene() {
  const reduced = useReducedMotion();
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();

  const words = CORE_THOUGHT.split(" ");
  const p = reduced ? 1 : progress;

  const wordShown = (i: number) => {
    const threshold = FIRST_WORD + ((LAST_WORD - FIRST_WORD) * i) / words.length;
    return p >= threshold;
  };

  return (
    <div className="t1s-core__runway" ref={ref}>
      <div className="t1s-core__pin">
        <div className="t1s-core__mark" aria-hidden="true">
          <span>Signed by Yours Truly</span>
          <span>Signed by Yours Truly</span>
        </div>

        <div className="t1s-core__inner">
          <p className="eyebrow t1s-reveal" data-shown={p >= 0.05 ? "" : undefined}>
            Core thought
          </p>
          <p className="t1s-core__text">
            {words.map((word, i) => (
              <Fragment key={i}>
                <span className="t1s-core__word" data-shown={wordShown(i) ? "" : undefined}>
                  {word}
                </span>{" "}
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
