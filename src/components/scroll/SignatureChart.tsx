"use client";

import { useReducedMotion } from "./motion";

/* Geometry is carried over from the Figma chart frame (node 142:8422).
   viewBox runs to 1000 so the signature flourish has room past 2027. */
const YEARS = [
  { label: "2023", x: 26 },
  { label: "2024", x: 245 },
  { label: "2025", x: 465 },
  { label: "2026", x: 681 },
  { label: "2027", x: 901 },
];

/* Marker centres, from the Figma dot positions (left/top of an 8px box, so
   the centre is +4 on each axis). Both curves are generated as Catmull-Rom
   splines through these points, so the nodes sit exactly on the lines and
   the two curves meet at the crossover. */
const PEAK = { cx: 245, cy: 143 };
const PATTERN = { cx: 465, cy: 287 };
const CROSSOVER = { cx: 666, cy: 213 };

/* Symmetric shoulder knots either side of PEAK force a horizontal tangent
   there, so the apex lands exactly on the node rather than overshooting it. */
const VELOCITY_PATH =
  "M 0,360 C 14.2,356.0 59.2,353.0 85.0,336.0 C 110.8,319.0 138.3,286.2 155.0,258.0 C 171.7,229.8 170.0,186.2 185.0,167.0 C 200.0,147.8 225.0,143.0 245.0,143.0 C 265.0,143.0 282.5,161.5 305.0,167.0 C 327.5,172.5 353.3,172.2 380.0,176.0 C 406.7,179.8 435.0,185.3 465.0,190.0 C 495.0,194.7 526.5,200.2 560.0,204.0 C 593.5,207.8 626.0,202.3 666.0,213.0 C 706.0,223.7 753.3,248.5 800.0,268.0 C 846.7,287.5 921.7,319.7 946.0,330.0";

/* One continuous path: the line rises, crosses velocity, then signs itself
   past 2027. The flourish is generated parametrically as a cursive loop
   (x = Lt/2π + A·sin t, y = -B(1 - cos t), rotated onto the incoming stroke
   angle) so it reads as handwriting rather than a circle stuck on the end. */
const AUTHORSHIP_PATH =
  "M 0,386 C 18.3,384.8 71.7,382.3 110.0,379.0 C 148.3,375.7 190.0,374.0 230.0,366.0 C 270.0,358.0 310.8,344.2 350.0,331.0 C 389.2,317.8 430.0,300.5 465.0,287.0 C 500.0,273.5 526.5,262.3 560.0,250.0 C 593.5,237.7 632.7,225.7 666.0,213.0 C 699.3,200.3 730.2,186.7 760.0,174.0 C 789.8,161.3 820.2,148.5 845.0,137.0 C 869.8,125.5 898.3,110.3 909.0,105.0 C 911.6,103.3 920.4,98.4 924.9,94.6 C 929.3,90.7 933.2,86.1 935.8,81.9 C 938.3,77.8 939.8,73.3 940.2,69.8 C 940.6,66.2 939.7,62.9 938.4,60.6 C 937.0,58.4 934.5,56.9 932.2,56.3 C 929.9,55.8 926.8,56.3 924.7,57.3 C 922.5,58.3 920.3,60.5 919.3,62.6 C 918.3,64.8 917.9,67.7 918.9,70.1 C 919.8,72.6 921.9,75.4 924.9,77.2 C 928.0,79.0 932.4,80.7 937.2,81.2 C 942.1,81.7 948.2,81.6 953.9,80.4 C 959.7,79.3 966.1,77.1 971.9,74.3 C 977.8,71.5 980.9,66.2 989.0,63.7 C 997.1,61.3 1009.2,59.5 1020.4,59.6 C 1031.5,59.7 1050.1,63.6 1056.1,64.4";

/* `needs` is the fraction of each path's arc length at which the marker sits,
   measured off the actual path geometry. A marker reveals the moment the
   drawing line reaches it, so the three appear in sequence as the chart
   builds rather than all together at the end. The crossover waits for both
   lines, since it only means anything once they actually meet. */
const MARKERS = [
  {
    id: "peak",
    ...PEAK,
    needs: { velocity: 0.328 },
    box: { x: 130, anchor: "bottom" as const, y: 133 },
    label: "Peak",
    body: "WGSN identifies a new “core” every few weeks at the height of the TikTok micro trend cycle.",
  },
  {
    id: "pattern",
    ...PATTERN,
    needs: { authorship: 0.401 },
    box: { x: 465, anchor: "bottom" as const, y: 168 },
    label: "Pattern identified",
    body: "Consumers move toward considered consumption.",
  },
  {
    id: "crossover",
    ...CROSSOVER,
    needs: { velocity: 0.722, authorship: 0.58 },
    box: { x: 666, anchor: "top" as const, y: 268 },
    label: "Crossover",
    body: "Authorship overtakes velocity.",
  },
];

/* Wider than the 954px Figma plot so the signature flourish has room to run
   past 2027 without crowding the right edge. */
const VB_W = 1060;
const VB_H = 410;

/** Maps a 0→1 scroll value onto a sub-range, clamped. */
function segment(p: number, from: number, to: number) {
  return Math.min(1, Math.max(0, (p - from) / (to - from)));
}

export default function SignatureChart({ progress }: { progress: number }) {
  const reduced = useReducedMotion();

  const p = reduced ? 1 : progress;
  // Spread across most of the runway so the draw stays slow and legible.
  const velocityDraw = segment(p, 0.06, 0.52);
  const authorshipDraw = segment(p, 0.2, 0.86);

  const isShown = (needs: { velocity?: number; authorship?: number }) =>
    (needs.velocity === undefined || velocityDraw >= needs.velocity) &&
    (needs.authorship === undefined || authorshipDraw >= needs.authorship);

  return (
    <div className="t1s-chart">
      <div className="t1s-chart__legend">
        <span className="t1s-chart__key t1s-chart__key--velocity">Microtrend velocity</span>
        <span className="t1s-chart__key t1s-chart__key--authorship">Authorship signals</span>
      </div>

      <figure className="t1s-chart__figure">
        <div className="t1s-chart__stage">
        <div className="t1s-chart__plot">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="t1s-chart__svg"
            role="img"
            aria-labelledby="t1s-chart-title t1s-chart-desc"
          >
            <title id="t1s-chart-title">
              Microtrend velocity and authorship signals, 2023 to 2027
            </title>
            <desc id="t1s-chart-desc">
              Microtrend velocity rises sharply to a peak in 2024, then declines through 2027.
              Authorship signals start flat, rise steadily from 2025, overtake microtrend velocity
              in 2026, and finish highest in 2027. Directional only; there is no measured index.
            </desc>

            {YEARS.map((y) => (
              <line
                key={y.label}
                x1={y.x}
                y1={0}
                x2={y.x}
                y2={400}
                className="t1s-chart__grid"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            <path
              d={VELOCITY_PATH}
              className="t1s-chart__line t1s-chart__line--velocity"
              pathLength={1}
              style={{ strokeDashoffset: 1 - velocityDraw }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={AUTHORSHIP_PATH}
              className="t1s-chart__line t1s-chart__line--authorship"
              pathLength={1}
              style={{ strokeDashoffset: 1 - authorshipDraw }}
              vectorEffect="non-scaling-stroke"
            />

            {/* Leaders tie each card back to its dot, since the cards sit off
                in clear space rather than next to the markers. */}
            {MARKERS.map((m) => (
              <line
                key={`${m.id}-leader`}
                x1={m.box.x}
                y1={m.box.y}
                x2={m.cx}
                y2={m.cy}
                className="t1s-chart__leader"
                data-shown={isShown(m.needs) ? "" : undefined}
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {MARKERS.map((m) => (
              <circle
                key={m.id}
                cx={m.cx}
                cy={m.cy}
                r={5}
                className="t1s-chart__marker"
                data-shown={isShown(m.needs) ? "" : undefined}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
        </div>

        {/* Sibling of the plot rather than a child, so it can drop out of
            absolute positioning and stack below the chart on narrow screens. */}
        <div className="t1s-chart__tips">
          {MARKERS.map((m) => (
            <div
              key={m.id}
              className="t1s-chart__tip"
              data-shown={isShown(m.needs) ? "" : undefined}
              style={{
                left: `${(m.box.x / VB_W) * 100}%`,
                ...(m.box.anchor === "top"
                  ? { top: `${(m.box.y / VB_H) * 100}%` }
                  : { bottom: `${((VB_H - m.box.y) / VB_H) * 100}%` }),
              }}
            >
              <span className="t1s-chart__tip-label">{m.label}</span>
              <span className="t1s-chart__tip-body">{m.body}</span>
            </div>
          ))}
        </div>
        </div>

        <div className="t1s-chart__axis" aria-hidden="true">
          {YEARS.map((y) => (
            <span key={y.label} style={{ left: `${(y.x / VB_W) * 100}%` }}>
              {y.label}
            </span>
          ))}
        </div>

        <figcaption className="t1s-chart__caption">
          <p>
            The line is the signature. It starts flat while microtrends do the work, gains weight as
            people begin choosing for themselves, and finishes with the flourish: a point of view
            someone is willing to put their name on.
          </p>
          <p className="t1s-chart__disclaimer">Not a measured index</p>
        </figcaption>
      </figure>
    </div>
  );
}
