"use client";

import { useCallback, useRef } from "react";
import type { DropSpec, WordSpec } from "@/content/trends/types";
import { useInView, useParallax } from "./motion";

/** Aspect-locked positioning context for a signal's image composition.
    Children are placed as percentages of this box, so the whole collage
    scales with the viewport instead of pinning to the Figma artboard. */
export function Stage({
  width,
  height,
  children,
  className = "",
}: {
  width: number;
  height: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`trs-stage ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {children}
    </div>
  );
}

/** Outbound arrow used on the overlay's "View source" line. */
function Arrow() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path
        d="M3 9L9 3M9 3H4.2M9 3v4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function DropImage({
  spec,
  index = 0,
  controlled,
}: {
  spec: DropSpec;
  index?: number;
  /** When supplied, the parent drives position and reveal from its own scroll
      progress instead of the shared viewport-centre parallax loop. Used by
      pinned scenes, where the element does not move while it is stuck. */
  controlled?: { offsetY: number; shown: boolean };
}) {
  const parallaxRef = useParallax<HTMLDivElement>(spec.rate, !controlled);
  const { ref: inViewRef, inView } = useInView();
  const shown = controlled ? controlled.shown : inView;

  /* No drop flips — hover/focus darkens the photo and surfaces its caption
     (if the photo library gave it one) and a "View source" line (if it
     links out). A drop with neither sits inert: nothing to reveal, nothing
     to click. The overlay grows downward past the photo's bottom edge for
     long captions; no scaling of the photo itself. */
  const linked = Boolean(spec.source);
  const hasOverlay = Boolean(spec.caption) || linked;

  const setRefs = useCallback(
    (el: HTMLDivElement | null) => {
      parallaxRef.current = el;
      inViewRef.current = el;
    },
    [parallaxRef, inViewRef]
  );

  const faces = (
    <span className="trs-drop__frame">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={spec.src} alt={spec.alt} loading="lazy" decoding="async" />
      {hasOverlay && (
        <span
          className="trs-drop__overlay"
          data-source-only={!spec.caption ? "" : undefined}
          aria-hidden="true"
        >
          {spec.caption && <span className="trs-drop__caption">{spec.caption}</span>}
          {linked && (
            <span className="trs-drop__source">
              View source
              <Arrow />
            </span>
          )}
        </span>
      )}
    </span>
  );

  return (
    <div
      ref={setRefs}
      className="trs-drop"
      data-in={shown ? "" : undefined}
      style={{
        left: `${spec.x}%`,
        top: `${spec.y}%`,
        width: `${spec.w}%`,
        height: `${spec.h}%`,
        ["--trs-rot" as string]: `${spec.rotate ?? 0}deg`,
        ["--trs-delay" as string]: `${index * 110}ms`,
        ...(controlled
          ? { transform: `translate3d(0, ${controlled.offsetY.toFixed(1)}px, 0)` }
          : null),
      }}
    >
      {spec.source ? (
        <a
          className="trs-drop__inner"
          href={spec.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          {faces}
          <span className="trs-sr">
            {spec.caption ? ` ${spec.caption} ` : " "}
            (opens the source in a new tab)
          </span>
        </a>
      ) : (
        <span className="trs-drop__inner" tabIndex={hasOverlay ? 0 : undefined}>
          {faces}
          {spec.caption && <span className="trs-sr"> {spec.caption}</span>}
        </span>
      )}
    </div>
  );
}

/* The page's own content stops growing past --max-w (1280px) — see
   .trs-shell — but the artboard these sizes were measured against is 1449px
   wide. Above 1280px viewport, vw-based sizing would keep scaling the word
   up even though the stage it sits in has already stopped growing, so
   words start overflowing the stage at any viewport wider than 1280px.
   Capping the clamp's max at the size a word would actually reach right at
   1280px (rather than the raw Figma value) keeps the two in step. */
const CONTENT_MAX_W = 1280;
const ARTBOARD_W = 1449;

/**
 * A single piece of borrowed internet vocabulary dropping into the collage.
 * `spec.font` selects one of the display faces loaded in the root layout —
 * the deliberate typographic mismatch is the point of the treatment.
 * Sizes are Figma px at the 1449px artboard, scaled fluidly by vw and
 * floored at 20px so nothing lands under the readable minimum.
 */
export function WordDrop({ spec, index = 0 }: { spec: WordSpec; index?: number }) {
  const parallaxRef = useParallax<HTMLDivElement>(spec.rate);
  const { ref: inViewRef, inView } = useInView();
  const setRefs = useCallback(
    (el: HTMLDivElement | null) => {
      parallaxRef.current = el;
      inViewRef.current = el;
    },
    [parallaxRef, inViewRef]
  );

  return (
    <div
      ref={setRefs}
      className="trs-word"
      data-in={inView ? "" : undefined}
      data-anchor={spec.anchor ?? "left"}
      data-wrap={spec.wrapAt ? "" : undefined}
      style={{
        left: `${spec.x}%`,
        top: `${spec.y}%`,
        ...(spec.wrapAt ? { maxWidth: `${spec.wrapAt}%` } : null),
        ["--trs-rot" as string]: `${spec.rotate ?? 0}deg`,
        ["--trs-delay" as string]: `${index * 110}ms`,
      }}
    >
      <span
        className="trs-word__inner"
        data-font={spec.font}
        style={{
          color: spec.color,
          fontSize: `clamp(20px, ${(spec.size / 14.49).toFixed(2)}vw, ${((spec.size * CONTENT_MAX_W) / ARTBOARD_W).toFixed(1)}px)`,
        }}
      >
        {spec.text}
      </span>
    </div>
  );
}
