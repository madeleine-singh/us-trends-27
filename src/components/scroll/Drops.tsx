"use client";

import { useCallback } from "react";
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

/** Outbound arrow used on the caption's source line and the link-only badge. */
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

  const setRefs = useCallback(
    (el: HTMLDivElement | null) => {
      parallaxRef.current = el;
      inViewRef.current = el;
    },
    [parallaxRef, inViewRef]
  );

  /* A drop flips only if the photo library gave it a caption. Two rows are
     marked "no caption needed, just direct navigation to hyperlink" — those
     link straight to the source with no caption to reveal, so hover/focus
     darkens the photo instead of flipping it. */
  const flippable = Boolean(spec.caption);
  const linked = Boolean(spec.source);

  const faces = (
    <span className="trs-drop__flip">
      <span className="trs-drop__face trs-drop__face--front">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spec.src} alt={spec.alt} loading="lazy" decoding="async" />
        {linked && !flippable && (
          <span className="trs-drop__overlay" aria-hidden="true">
            View source
            <Arrow />
          </span>
        )}
      </span>
      {flippable && (
        <span className="trs-drop__face trs-drop__face--back">
          <span className="trs-drop__caption">{spec.caption}</span>
          {linked && (
            <span className="trs-drop__source" aria-hidden="true">
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
        ["--trs-delay" as string]: `${index * 90}ms`,
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
          <span className="trs-sr"> (opens the source in a new tab)</span>
        </a>
      ) : (
        <span className="trs-drop__inner" tabIndex={flippable ? 0 : undefined}>
          {faces}
        </span>
      )}
    </div>
  );
}

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
        ["--trs-delay" as string]: `${index * 90}ms`,
      }}
    >
      <span
        className="trs-word__inner"
        data-font={spec.font}
        style={{
          color: spec.color,
          fontSize: `clamp(20px, ${(spec.size / 14.49).toFixed(2)}vw, ${spec.size}px)`,
        }}
      >
        {spec.text}
      </span>
    </div>
  );
}
