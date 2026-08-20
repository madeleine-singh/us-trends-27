"use client";

import { Fragment } from "react";
import { useReducedMotion, useRunwayProgress } from "./motion";

/* Reveal window inside the runway — matches CoreThoughtScene's pattern
   exactly: a pinned scene that holds the section on screen while its words
   build in, then releases once the last one has landed, rather than
   letting the page scroll past mid-reveal. */
const FIRST_WORD = 0.12;
const LAST_WORD = 0.72;

export default function IntroReveal({
  title,
  lede,
  backdrop,
  strong,
}: {
  title: string;
  lede: string;
  backdrop: string;
  strong?: boolean;
}) {
  const reduced = useReducedMotion();
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();
  const p = reduced ? 1 : progress;

  const titleWords = title.split(" ");
  const ledeWords = lede.split(" ");
  const total = titleWords.length + ledeWords.length;

  const wordShown = (i: number) => p >= FIRST_WORD + ((LAST_WORD - FIRST_WORD) * i) / total;

  return (
    <div className="trs-intro__runway" ref={ref}>
      <div className="trs-intro__pin">
        <div
          className={`trs-intro__bg ${strong ? "trs-intro__bg--strong" : ""}`}
          style={{ backgroundImage: `url(${backdrop})` }}
          aria-hidden="true"
        />
        {strong && <div className="trs-intro__scrim" aria-hidden="true" />}
        <div className="trs-shell trs-shell--narrow">
          <h2 className="trs-h2 trs-h2--display trs-center">
            {titleWords.map((word, i) => (
              <Fragment key={i}>
                <span className="trs-intro__word" data-shown={wordShown(i) ? "" : undefined}>
                  {word}
                </span>{" "}
              </Fragment>
            ))}
          </h2>
          <p className="trs-intro__lede">
            {ledeWords.map((word, i) => (
              <Fragment key={i}>
                <span className="trs-intro__word" data-shown={wordShown(titleWords.length + i) ? "" : undefined}>
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
