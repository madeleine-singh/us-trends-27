"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "./motion";

/* Trend 2's timeline chart (Figma frame 170:572 / "Line and bar chart" 429:848).
   Unlike Trend 1's single hand-drawn signature, this one plots four real
   series on a 0-100 scale — three reference lines that render in full as
   soon as the chart is in view, and one computed Distrust line that draws
   left to right as the runway scrolls, per the Figma interaction note. */

const YEARS = [2023, 2024, 2025, 2026, 2027];

/* 0-100 scale, read off the Figma frame's data annotation. */
const FINANCIAL_PRESSURE = [22, 40, 60, 83, 92];
const BEHAVIOR_SHIFTS = [12, 25, 45, 78, 90];
const SENTIMENT = [32, 32, 26, 24, 21];
/* Distrust = (financial pressure + behavior shifts + (100 - sentiment)) / 3, rounded. */
const DISTRUST = FINANCIAL_PRESSURE.map((fp, i) =>
  Math.round((fp + BEHAVIOR_SHIFTS[i] + (100 - SENTIMENT[i])) / 3)
);

/* Matches the aspect-ratio baked into the shared `.trs-chart__plot` CSS
   (authored for Trend 1's 1060x410 viewBox). The two charts have to share
   that box's aspect ratio exactly, or the SVG's default preserveAspectRatio
   letterboxes the content — scaling and centering it inside the box —
   while the HTML axis labels below (positioned by percentage of the full
   box width) stay spread edge to edge, throwing the two out of alignment. */
const VB_W = 1060;
const VB_H = 410;
const X_PAD = 20;
const xAt = (i: number) => X_PAD + (i * (VB_W - X_PAD * 2)) / (YEARS.length - 1);
const yAt = (v: number) => 400 - (v / 100) * 390;

type Pt = [number, number];
const toPoints = (values: number[]): Pt[] => values.map((v, i) => [xAt(i), yAt(v)]);

/** Uniform Catmull-Rom through the data points, converted to cubic beziers,
    so four independently-plotted series still read as one hand-finished
    chart rather than a raw polyline. */
function smoothPath(points: Pt[]): string {
  const d = [`M ${points[0][0]},${points[0][1]}`];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d.push(`C ${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2[0]},${p2[1]}`);
  }
  return d.join(" ");
}

const FINANCIAL_PATH = smoothPath(toPoints(FINANCIAL_PRESSURE));
const BEHAVIOR_PATH = smoothPath(toPoints(BEHAVIOR_SHIFTS));
const SENTIMENT_PATH = smoothPath(toPoints(SENTIMENT));
const DISTRUST_PATH = smoothPath(toPoints(DISTRUST));
const DISTRUST_POINTS = toPoints(DISTRUST);

/* Markers sit on the Distrust line at the three eras the left-hand list
   calls out. `t` is that year's fraction of the x-axis (index / 4), used
   both to reveal the marker as the draw reaches it and to switch the
   active era in the list. */
const MARKERS = [
  {
    id: "flashpoints",
    t: 0,
    label: "FLASHPOINTS",
    body: "Distrust is felt in isolated moments",
    anchor: "left" as const,
  },
  {
    id: "normalized",
    t: 0.75,
    label: "NORMALIZED",
    body: "Moments of distrust build into a norm",
    anchor: "center" as const,
  },
  {
    id: "baseline",
    t: 1,
    label: "BASELINE",
    body: "Distrust is the default state of mind",
    anchor: "right" as const,
  },
];

const ERAS = ["2023–2025", "2026", "2027"];

const FALLBACK_LENGTH = 3000;

function segment(p: number, from: number, to: number) {
  return Math.min(1, Math.max(0, (p - from) / (to - from)));
}

/* Dash = the path's real length; gap = 3x that. The renderer's internal arc
   length for the stroke disagrees slightly with getTotalLength() on a path
   this long, so an exactly-matched dash/gap pair still leaks a sliver at
   the seam — a generous gap keeps that residual comfortably hidden instead
   of landing right on the boundary. See SignatureChart.tsx for the same fix. */
function dashArrayFor(len: number) {
  return `${len} ${len * 3}`;
}

export default function TrustChart({
  progress,
  caption,
  disclaimer,
}: {
  progress: number;
  caption: string;
  disclaimer: string;
}) {
  const reduced = useReducedMotion();
  const p = reduced ? 1 : progress;
  const draw = segment(p, 0.08, 0.92);

  const distrustRef = useRef<SVGPathElement>(null);
  const [distrustLen, setDistrustLen] = useState(FALLBACK_LENGTH);
  useLayoutEffect(() => {
    if (distrustRef.current) setDistrustLen(distrustRef.current.getTotalLength());
  }, []);

  const activeEra = draw < 0.625 ? 0 : draw < 0.875 ? 1 : 2;

  return (
    <div className="trs-chart trs-tchart">
      <div className="trs-chart__legend">
        <span className="trs-chart__key trs-tchart__key--distrust">Distrust</span>
        <span className="trs-chart__key trs-tchart__key--financial">Financial pressure</span>
        <span className="trs-chart__key trs-tchart__key--behavior">Behavior shifts</span>
        <span className="trs-chart__key trs-tchart__key--sentiment">Sentiment</span>
      </div>

      <div className="trs-tchart__body">
        <ul className="trs-tchart__eras" aria-hidden="true">
          {ERAS.map((era, i) => (
            <li key={era} data-active={i === activeEra ? "" : undefined}>
              {era}
            </li>
          ))}
        </ul>

        <figure className="trs-chart__figure trs-tchart__figure">
          <div className="trs-chart__stage">
            <div className="trs-chart__plot">
              <svg
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                className="trs-chart__svg"
                role="img"
                aria-labelledby="trs-tchart-title trs-tchart-desc"
              >
                <title id="trs-tchart-title">
                  Financial pressure, behavior shifts, sentiment, and computed distrust, 2023 to
                  2027
                </title>
                <desc id="trs-tchart-desc">
                  Financial pressure and behavior shifts both climb steadily, from roughly 20 and
                  10 in 2023 to over 90 by 2027. Sentiment declines gently across the same span.
                  Distrust, a blend of the three, tracks the two rising lines upward and finishes
                  highest of all in 2027. Directional only; there is no measured index.
                </desc>

                {YEARS.map((y, i) => (
                  <line
                    key={y}
                    x1={xAt(i)}
                    y1={0}
                    x2={xAt(i)}
                    y2={400}
                    className="trs-chart__grid"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}

                <path d={FINANCIAL_PATH} className="trs-tchart__line trs-tchart__line--financial" vectorEffect="non-scaling-stroke" />
                <path d={BEHAVIOR_PATH} className="trs-tchart__line trs-tchart__line--behavior" vectorEffect="non-scaling-stroke" />
                <path d={SENTIMENT_PATH} className="trs-tchart__line trs-tchart__line--sentiment" vectorEffect="non-scaling-stroke" />
                <path
                  ref={distrustRef}
                  d={DISTRUST_PATH}
                  className="trs-tchart__line trs-tchart__line--distrust"
                  style={{
                    strokeDasharray: dashArrayFor(distrustLen),
                    strokeDashoffset: distrustLen * (1 - draw),
                  }}
                  vectorEffect="non-scaling-stroke"
                />

                {MARKERS.map((m) => {
                  const [cx, cy] = DISTRUST_POINTS[Math.round(m.t * (YEARS.length - 1))];
                  return (
                    <circle
                      key={m.id}
                      cx={cx}
                      cy={cy}
                      r={5}
                      className="trs-chart__marker trs-tchart__marker"
                      data-shown={draw >= m.t - 0.02 ? "" : undefined}
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
              </svg>
            </div>

            <div className="trs-chart__tips">
              {MARKERS.map((m) => {
                const [cx, cy] = DISTRUST_POINTS[Math.round(m.t * (YEARS.length - 1))];
                return (
                  <div
                    key={m.id}
                    className="trs-chart__tip trs-tchart__tip"
                    data-anchor={m.anchor}
                    data-shown={draw >= m.t - 0.02 ? "" : undefined}
                    style={{
                      left: `${(cx / VB_W) * 100}%`,
                      bottom: `${((VB_H - cy) / VB_H) * 100}%`,
                    }}
                  >
                    <span className="trs-chart__tip-label">{m.label}</span>
                    <span className="trs-chart__tip-body">{m.body}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="trs-chart__axis" aria-hidden="true">
            {YEARS.map((y, i) => (
              <span key={y} style={{ left: `${(xAt(i) / VB_W) * 100}%` }}>
                {y}
              </span>
            ))}
          </div>

          <figcaption className="trs-chart__caption">
            <p>{caption}</p>
            <p className="trs-chart__disclaimer">{disclaimer}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
