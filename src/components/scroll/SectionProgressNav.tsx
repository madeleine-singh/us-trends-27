"use client";

import { useMemo } from "react";
import { useActiveSection, useLightZone } from "./motion";

export type Stop = { id: string; label: string };

/**
 * Persistent vertical section-progress rail ("sticky scroll" in the Figma).
 * This sits alongside the site nav rather than replacing it.
 *
 * The rail is fixed, so it has to survive passing over the light timeline
 * section: `lightZone` names the blend bands either side of that stretch and
 * flips the rail to dark ink and purple while it is over them.
 */
export default function SectionProgressNav({
  stops,
  lightZone,
}: {
  stops: Stop[];
  lightZone?: { fadeInId: string; fadeOutId: string };
}) {
  const ids = useMemo(() => stops.map((s) => s.id), [stops]);
  const active = useActiveSection(ids);
  const activeIndex = Math.max(0, ids.indexOf(active));
  const light = useLightZone(lightZone?.fadeInId ?? "", lightZone?.fadeOutId ?? "");

  return (
    <nav
      className="t1s-rail"
      data-theme={light ? "light" : undefined}
      aria-label="Section progress"
    >
      <ol className="t1s-rail__list">
        {stops.map((stop, i) => {
          const isActive = stop.id === active;
          const isPast = i < activeIndex;
          return (
            <li key={stop.id} className="t1s-rail__item">
              <a
                href={`#${stop.id}`}
                className="t1s-rail__link"
                data-active={isActive ? "" : undefined}
                data-past={isPast ? "" : undefined}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="t1s-rail__tick" aria-hidden="true" />
                <span className="t1s-rail__label">{stop.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
