"use client";

import LiveBackdrop from "@/components/LiveBackdrop";
import { useReducedMotion, useRunwayProgress } from "@/components/scroll/motion";

/* Figma node 114:13 — Executive Summary.
   Three visual paragraphs (the Figma compound first-para is split here so each
   thought gets its own reveal beat). Em-dashes removed per CLAUDE.md. */
const PARAS = [
  "Every year, Accenture Life Trends examines the interplay between people, culture, and the shifts defining how we live.",
  "This year, we turned the lens inward. Building a consolidated point of view on what's happening across the United States.",
  "We convened D&DP brand ambassadors and regional leads through a series of workshops to gather ground-level signals from practitioners embedded in their local contexts.",
  "This microsite captures where the US is moving together and where it's pulling apart, to help us show up better for the clients navigating it alongside their customers.",
];

const EYEBROW_AT = 0.04;
const SHOWN_AT = [0.10, 0.32, 0.54, 0.74];

export default function ExecSummaryScene() {
  const reduced = useReducedMotion();
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();
  const p = reduced ? 1 : progress;

  return (
    <div className="lp-exec__runway" ref={ref}>
      <div className="lp-exec__pin">
        <LiveBackdrop>
          <span className="lp-orb lp-exec__orb--a" />
          <span className="lp-orb lp-exec__orb--b" />
          <span className="lp-orb lp-exec__orb--c" />
          <span className="lp-orb lp-exec__orb--d" />
          <span className="lp-exec__veil" />
        </LiveBackdrop>

        <div className="lp-section__inner">
          <div className="lp-exec__inner">
            <p
              className="lp-exec__eyebrow lp-exec__reveal"
              data-shown={p >= EYEBROW_AT ? "" : undefined}
            >
              Executive Summary
            </p>
            {PARAS.map((text, i) => (
              <p
                key={i}
                className="lp-exec__text lp-exec__reveal"
                data-shown={p >= SHOWN_AT[i] ? "" : undefined}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
