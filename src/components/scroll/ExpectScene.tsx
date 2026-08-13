"use client";

import { DropImage, Stage } from "./Drops";
import { useReducedMotion, useRunwayProgress } from "./motion";
import { expectLayers } from "@/app/trend-1-scroll/content";

/* Figma annotation (node 110:3067): "Parallax release. stage 5 un-pins.
   four layers translate at 0.05 / 0.12 / 0.2 / 0.3 of scroll delta."
   Those rates live on each layer in content.ts; this scales them into a
   pixel travel so the four layers arrive at visibly different speeds. */
const TRAVEL = 1100;
const LAYERS_START = 0.3;
const LAYERS_END = 0.92;

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

export default function ExpectScene() {
  const reduced = useReducedMotion();
  const { ref, progress } = useRunwayProgress<HTMLDivElement>();
  const p = reduced ? 1 : progress;

  const layerT = clamp01((p - LAYERS_START) / (LAYERS_END - LAYERS_START));

  return (
    <div className="t1s-expect__runway" ref={ref}>
      <div className="t1s-expect__pin">
        <div className="t1s-shell t1s-shell--narrow">
          <h2
            className="t1s-h2 t1s-h2--display t1s-center t1s-reveal"
            data-shown={p >= 0.06 ? "" : undefined}
          >
            What to expect in 2027
          </h2>
          <p className="t1s-expect__lede t1s-reveal" data-shown={p >= 0.14 ? "" : undefined}>
            Value moves away from chasing the next microtrend toward deciding which interests are
            meaningful enough to anchor a lasting point of view.
          </p>
          <p className="t1s-expect__lede t1s-reveal" data-shown={p >= 0.22 ? "" : undefined}>
            The new status symbol will be a perspective that feels self-authored and specific.
            Ultimately, in a culture filled with instantly available identities, the most respected
            individuals will not be those who participate in everything, but rather those who
            demonstrate that they know what matters to them and why.
          </p>
        </div>

        <div className="t1s-expect__field">
          <Stage width={1000} height={250}>
            {expectLayers.map((layer, i) => (
              <DropImage
                key={layer.id}
                spec={layer}
                index={i}
                controlled={{
                  offsetY: reduced ? 0 : (1 - layerT) * layer.rate * TRAVEL,
                  shown: p >= LAYERS_START + i * 0.04,
                }}
              />
            ))}
          </Stage>
        </div>
      </div>
    </div>
  );
}
