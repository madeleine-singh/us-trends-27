"use client";

import { useReducedMotion } from "./motion";

/* X positions match the Trend-1 chart grid so the two pages feel consistent.
   ViewBox matches: 1060 wide × 410 tall. */
const YEARS = [
  { label: "2023", x: 26 },
  { label: "2024", x: 245 },
  { label: "2025", x: 465 },
  { label: "2026", x: 681 },
  { label: "2027", x: 901 },
];

/* Data: 0–100 scale. Source: Figma node 170:572 content annotation.
   Y = 390 − value × 3.7  (maps 0→390, 100→20 within the 410-unit viewBox)
   Curves generated as Catmull-Rom splines converted to cubic Bézier. */

const FINANCIAL_PATH =
  "M 26,309 C 99,286.7 171.8,265.5 245,242 C 318.2,218.5 392.3,194.5 465,168 C 537.7,141.5 608.3,102.7 681,83 C 753.7,63.3 827.7,61 901,50";

const BEHAVIOR_PATH =
  "M 26,346 C 99,330 171.8,318.3 245,298 C 318.2,277.7 392.3,256.8 465,224 C 537.7,191.2 608.3,128.8 681,101 C 753.7,73.2 827.7,71.7 901,57";

const SENTIMENT_PATH =
  "M 26,272 C 99,272 171.8,268.3 245,272 C 318.2,275.7 392.3,289.2 465,294 C 537.7,298.8 608.3,298 681,301 C 753.7,304 827.7,308.3 901,312";

/* The distrust line is the animated primary series (purple). It is a computed
   value: (financial pressure + consumer response + (100 − sentiment)) / 3.
   Values: 34, 44, 60, 79, 87 for 2023–2027. */
const DISTRUST_PATH =
  "M 26,264 C 99,251.7 171.8,243 245,227 C 318.2,211 392.3,189.5 465,168 C 537.7,146.5 608.3,114.7 681,98 C 753.7,81.3 827.7,78 901,68";

/* A value comfortably larger than the path's actual arc length (~900 SVG units).
   Used directly as stroke-dasharray / stroke-dashoffset so the animation does
   not rely on pathLength attribute scaling, which can be inconsistent. */
const DISTRUST_PATH_LEN = 1100;

/* `needs.distrust` is the arc-length fraction of DISTRUST_PATH at which the
   marker sits, estimated from chord lengths of the four cubic-Bézier segments.
   A marker reveals only once the drawing front has passed it. */
const MARKERS = [
  {
    id: "dissatisfaction",
    cx: 245,
    cy: 227,
    needs: { distrust: 0.26 },
    box: { x: 130, anchor: "bottom" as const, y: 210 },
    label: "Dissatisfaction in Moments",
    body: "Distrust is reactive — triggered by specific scandals, betrayals, and single bad decisions.",
  },
  {
    id: "baseline",
    cx: 681,
    cy: 98,
    needs: { distrust: 0.76 },
    box: { x: 540, anchor: "top" as const, y: 118 },
    label: "Baseline Distrust",
    body: "After sustained negative moments, distrust becomes the starting point, not the reaction.",
  },
  {
    id: "upfront",
    cx: 901,
    cy: 68,
    needs: { distrust: 0.99 },
    box: { x: 760, anchor: "top" as const, y: 100 },
    label: "Upfront Skepticism",
    body: "People approach systems from a position of baseline skepticism rather than baseline trust.",
  },
];

const VB_W = 1060;
const VB_H = 410;

function segment(p: number, from: number, to: number) {
  return Math.min(1, Math.max(0, (p - from) / (to - from)));
}

export default function DistrustChart({ progress }: { progress: number }) {
  const reduced = useReducedMotion();
  const p = reduced ? 1 : progress;

  /* All lines start from the beginning of the runway (p=0) and are fully
     revealed by p=0.88, giving a comfortable scroll window before the end. */
  const distrustDraw = segment(p, 0, 0.88);

  const isShown = (needs: { distrust?: number }) =>
    needs.distrust === undefined || distrustDraw >= needs.distrust;

  return (
    <div className="t2t-chart">
      <div className="t2t-chart__legend">
        <span className="t2t-chart__key t2t-chart__key--distrust">Distrust</span>
        <span className="t2t-chart__key t2t-chart__key--financial">Financial pressure</span>
        <span className="t2t-chart__key t2t-chart__key--behavior">Behavior shifts</span>
        <span className="t2t-chart__key t2t-chart__key--sentiment">Public sentiment</span>
      </div>

      <figure className="t2t-chart__figure">
        <div className="t2t-chart__stage">
          <div className="t2t-chart__plot">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="t2t-chart__svg"
              role="img"
              aria-labelledby="t2t-chart-title t2t-chart-desc"
            >
              <title id="t2t-chart-title">
                Distrust, financial pressure, behavior shifts, and public sentiment, 2023 to 2027
              </title>
              <desc id="t2t-chart-desc">
                Distrust rises from 34 in 2023 to 87 in 2027, driven by rising financial pressure
                and consumer behavior shifts while public sentiment declines. Directional only; there
                is no measured index.
              </desc>

              {/* Horizontal grid lines at value 0, 25, 50, 75, 100 */}
              {[0, 25, 50, 75, 100].map((v) => (
                <line
                  key={v}
                  x1={0}
                  y1={390 - v * 3.7}
                  x2={VB_W}
                  y2={390 - v * 3.7}
                  className="t2t-chart__grid"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {/* Vertical year guides */}
              {YEARS.map((yr) => (
                <line
                  key={yr.label}
                  x1={yr.x}
                  y1={0}
                  x2={yr.x}
                  y2={VB_H}
                  className="t2t-chart__grid t2t-chart__grid--vert"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {/* Supporting series — always visible as context */}
              <path
                d={FINANCIAL_PATH}
                className="t2t-chart__line t2t-chart__line--financial"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={BEHAVIOR_PATH}
                className="t2t-chart__line t2t-chart__line--behavior"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={SENTIMENT_PATH}
                className="t2t-chart__line t2t-chart__line--sentiment"
                vectorEffect="non-scaling-stroke"
              />

              {/* Distrust — draws left-to-right using explicit dasharray/dashoffset
                  (avoids pathLength attribute scaling inconsistencies). */}
              <path
                d={DISTRUST_PATH}
                className="t2t-chart__line t2t-chart__line--distrust"
                style={{
                  strokeDasharray: DISTRUST_PATH_LEN,
                  strokeDashoffset: DISTRUST_PATH_LEN * (1 - distrustDraw),
                }}
                vectorEffect="non-scaling-stroke"
              />

              {/* Leaders tie annotation cards to their data-point dots */}
              {MARKERS.map((m) => (
                <line
                  key={`${m.id}-leader`}
                  x1={m.box.x}
                  y1={m.box.y}
                  x2={m.cx}
                  y2={m.cy}
                  className="t2t-chart__leader"
                  data-shown={isShown(m.needs) ? "" : undefined}
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {/* Marker dots on the distrust line */}
              {MARKERS.map((m) => (
                <circle
                  key={m.id}
                  cx={m.cx}
                  cy={m.cy}
                  r={5}
                  className="t2t-chart__marker"
                  data-shown={isShown(m.needs) ? "" : undefined}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          </div>

          {/* Annotation cards positioned in chart-space coordinates */}
          <div className="t2t-chart__tips">
            {MARKERS.map((m) => (
              <div
                key={m.id}
                className="t2t-chart__tip"
                data-shown={isShown(m.needs) ? "" : undefined}
                style={{
                  left: `${(m.box.x / VB_W) * 100}%`,
                  ...(m.box.anchor === "top"
                    ? { top: `${(m.box.y / VB_H) * 100}%` }
                    : { bottom: `${((VB_H - m.box.y) / VB_H) * 100}%` }),
                }}
              >
                <span className="t2t-chart__tip-label">{m.label}</span>
                <span className="t2t-chart__tip-body">{m.body}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="t2t-chart__axis" aria-hidden="true">
          {YEARS.map((yr) => (
            <span key={yr.label} style={{ left: `${(yr.x / VB_W) * 100}%` }}>
              {yr.label}
            </span>
          ))}
        </div>

        <figcaption className="t2t-chart__caption">
          <p>
            Distrust used to be something felt in response to specific moments: a scandal, a
            betrayal, a single bad decision. Now, after so many negative moments, distrust has
            become the default.
          </p>
          <p className="t2t-chart__disclaimer">Not a measured index</p>
        </figcaption>
      </figure>
    </div>
  );
}
