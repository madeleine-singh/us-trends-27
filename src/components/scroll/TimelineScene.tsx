"use client";

import { useRunwayProgress } from "./motion";
import SignatureChart from "./SignatureChart";

/**
 * Tall scroll runway with a sticky pin. The chart draws across the whole
 * runway, so the signature builds gradually rather than in one viewport pass.
 */
export default function TimelineScene() {
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();

  return (
    <div className="t1s-timeline__runway" ref={ref}>
      <div className="t1s-timeline__pin">
        <div className="t1s-shell">
          <p className="eyebrow">How we got here</p>
          <h2 className="t1s-h2 t1s-h2--dark">The timeline</h2>
          <SignatureChart progress={progress} />
        </div>
      </div>
    </div>
  );
}
