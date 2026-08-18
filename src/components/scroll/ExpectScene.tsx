"use client";

import { useReducedMotion, useRunwayProgress } from "./motion";
import type { TrendContent } from "@/content/trends/types";

/* The Aug 2026 redesign (node 110:3067) sets this section as type only — the
   parallax photo layers the earlier version carried are gone. The pin stays,
   so the headline and the two paragraphs still arrive in sequence as the
   section is scrolled through rather than all at once. */
export default function ExpectScene({ expect }: { expect: TrendContent["expect"] }) {
  const reduced = useReducedMotion();
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();
  const p = reduced ? 1 : progress;

  return (
    <div className="trs-expect__runway" ref={ref}>
      <div className="trs-expect__pin">
        <div className="trs-shell trs-shell--narrow">
          <h2
            className="trs-h2 trs-h2--display trs-center trs-reveal"
            data-shown={p >= 0.08 ? "" : undefined}
          >
            {expect.title}
          </h2>
          {expect.paragraphs.map((para, i) => (
            <p
              key={i}
              className="trs-expect__lede trs-reveal"
              data-shown={p >= 0.2 + i * 0.14 ? "" : undefined}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
