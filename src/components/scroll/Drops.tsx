"use client";

import { useCallback } from "react";
import { useInView, useParallax } from "./motion";

/* Positions are percentages of the parent stage box, so the whole
   composition scales with the viewport instead of pinning to Figma px. */
export type DropSpec = {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rate: number;
  rotate?: number;
  /** TODO: supplied from the image Excel. Enables the hover/focus flip. */
  caption?: string;
  /** TODO: supplied from the image Excel. Makes the drop a link to the source. */
  source?: string;
};

export type WordSpec = {
  id: string;
  text: string;
  x: number;
  y: number;
  color: string;
  size: number;
  rate: number;
  rotate?: number;
};

/** Aspect-locked positioning context for a signal's image composition. */
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
      className={`t1s-stage ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {children}
    </div>
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

  const flippable = Boolean(spec.caption);

  const faces = (
    <span className="t1s-drop__flip">
      <span className="t1s-drop__face t1s-drop__face--front">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spec.src} alt={spec.alt} loading="lazy" decoding="async" />
      </span>
      {flippable && (
        <span className="t1s-drop__face t1s-drop__face--back">
          <span className="t1s-drop__caption">{spec.caption}</span>
          {spec.source && <span className="t1s-drop__source">View source</span>}
        </span>
      )}
    </span>
  );

  return (
    <div
      ref={setRefs}
      className="t1s-drop"
      data-in={shown ? "" : undefined}
      style={{
        left: `${spec.x}%`,
        top: `${spec.y}%`,
        width: `${spec.w}%`,
        height: `${spec.h}%`,
        ["--t1s-rot" as string]: `${spec.rotate ?? 0}deg`,
        ["--t1s-delay" as string]: `${index * 90}ms`,
        ...(controlled
          ? { transform: `translate3d(0, ${controlled.offsetY.toFixed(1)}px, 0)` }
          : null),
      }}
    >
      {spec.source ? (
        <a
          className="t1s-drop__inner"
          href={spec.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          {faces}
        </a>
      ) : (
        <span className="t1s-drop__inner" tabIndex={flippable ? 0 : undefined}>
          {faces}
        </span>
      )}
    </div>
  );
}

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
      className="t1s-word"
      data-in={inView ? "" : undefined}
      style={{
        left: `${spec.x}%`,
        top: `${spec.y}%`,
        ["--t1s-rot" as string]: `${spec.rotate ?? 0}deg`,
        ["--t1s-delay" as string]: `${index * 90}ms`,
      }}
    >
      <span
        className="t1s-word__inner"
        style={{ color: spec.color, fontSize: `clamp(20px, ${spec.size / 14.49}vw, ${spec.size}px)` }}
      >
        {spec.text}
      </span>
    </div>
  );
}
