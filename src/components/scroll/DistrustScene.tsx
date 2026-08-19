"use client";

import { useRunwayProgress } from "./motion";
import DistrustChart from "./DistrustChart";

export default function DistrustScene() {
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();

  return (
    <div className="t2t-timeline__runway" ref={ref}>
      <div className="t2t-timeline__pin">
        <div className="t2t-shell">
          <p className="eyebrow">How we got here</p>
          <h2 className="t2t-h2">The timeline</h2>
          <DistrustChart progress={progress} />
        </div>
      </div>
    </div>
  );
}
