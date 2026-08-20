"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Stop } from "@/content/trends/types";
import { useActiveSection, useLightZone } from "./motion";

/** How far the user can scroll past a section's entry point before its
    auto-revealed label collapses back to just the tick. */
const PULSE_DISMISS_DISTANCE = 120;

/**
 * Persistent vertical section-progress rail ("sticky scroll" in the Figma).
 * This sits alongside the site nav rather than replacing it.
 *
 * The rail is fixed, so it has to survive passing over the pale stretches of
 * the page — the lavender hero and the light timeline section. Each entry in
 * `lightZones` names the blend bands either side of one such stretch, and the
 * rail flips to dark ink while it is over any of them. A zone with no
 * `fadeInId` starts at the top of the document.
 */
export default function SectionProgressNav({
  stops,
  lightZones = [],
}: {
  stops: Stop[];
  lightZones?: { fadeInId?: string; fadeOutId: string }[];
}) {
  const ids = useMemo(() => stops.map((s) => s.id), [stops]);
  const active = useActiveSection(ids);
  const activeIndex = Math.max(0, ids.indexOf(active));
  const light = useLightZone(lightZones);

  /* Auto-reveal the active label the moment a new section becomes active,
     then collapse it once the user has scrolled a bit further — so the
     name is announced on arrival without needing a hover, but doesn't sit
     open and cover content indefinitely. */
  const [pulsing, setPulsing] = useState(false);
  const enterScrollRef = useRef(0);
  const firstRunRef = useRef(true);

  useEffect(() => {
    // Skip the pulse on first mount — only real section changes should
    // trigger the "just arrived" reveal, not the initial render.
    if (firstRunRef.current) {
      firstRunRef.current = false;
      return;
    }
    enterScrollRef.current = window.scrollY;
    setPulsing(true);
  }, [active]);

  useEffect(() => {
    if (!pulsing) return;
    const onScroll = () => {
      if (Math.abs(window.scrollY - enterScrollRef.current) > PULSE_DISMISS_DISTANCE) {
        setPulsing(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pulsing]);

  return (
    <nav
      className="trs-rail"
      data-theme={light ? "light" : undefined}
      data-pulse={pulsing ? "" : undefined}
      aria-label="Section progress"
    >
      <ol className="trs-rail__list">
        {stops.map((stop, i) => {
          const isActive = stop.id === active;
          const isPast = i < activeIndex;
          return (
            <li key={stop.id} className="trs-rail__item">
              <a
                href={`#${stop.id}`}
                className="trs-rail__link"
                data-active={isActive ? "" : undefined}
                data-past={isPast ? "" : undefined}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="trs-rail__tick" aria-hidden="true" />
                <span className="trs-rail__label">{stop.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
