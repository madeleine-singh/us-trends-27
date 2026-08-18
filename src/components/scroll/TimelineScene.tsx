"use client";

import { useRunwayProgress } from "./motion";
import SignatureChart from "./SignatureChart";
import type { TrendContent } from "@/content/trends/types";

/**
 * Tall scroll runway with a sticky pin. The chart draws across the whole
 * runway, so the signature builds gradually rather than in one viewport pass.
 */
export default function TimelineScene({ timeline }: { timeline: TrendContent["timeline"] }) {
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();

  return (
    <div className="trs-timeline__runway" ref={ref}>
      <div className="trs-timeline__pin">
        <div className="trs-shell">
          <p className="eyebrow">{timeline.eyebrow}</p>
          <h2 className="trs-h2 trs-h2--dark">{timeline.title}</h2>
          <SignatureChart
            progress={progress}
            caption={timeline.caption}
            disclaimer={timeline.disclaimer}
          />
        </div>
      </div>
    </div>
  );
}
