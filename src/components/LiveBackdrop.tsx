"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative animated section backdrop.
 *
 * Every looping animation inside is `animation-play-state: paused` until the
 * backdrop is near the viewport, so the five full-height landing sections never
 * all composite at once. Purely presentational, so it is hidden from the
 * accessibility tree.
 */
export default function LiveBackdrop({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.setAttribute("data-live", "");
        else el.removeAttribute("data-live");
      },
      { rootMargin: "15% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lp-backdrop ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}
