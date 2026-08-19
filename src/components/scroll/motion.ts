"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/* ──────────────────────────────────────────────────────────────
   Shared scroll engine.

   One scroll listener + one rAF loop drives every parallax layer
   on the page. Elements registered here own their `transform`
   outright — fall-in animation lives on a nested child so the two
   never fight over the same property.
   ────────────────────────────────────────────────────────────── */

type ParallaxEntry = { el: HTMLElement; rate: number };

const entries = new Set<ParallaxEntry>();
let frame = 0;
let listening = false;

function paint() {
  frame = 0;
  const vh = window.innerHeight;
  entries.forEach(({ el, rate }) => {
    const rect = el.getBoundingClientRect();
    // Distance of the element's centre from the viewport centre.
    // Zero when perfectly centred, so layers converge mid-screen.
    const delta = rect.top + rect.height / 2 - vh / 2;
    el.style.transform = `translate3d(0, ${(-delta * rate).toFixed(2)}px, 0)`;
  });
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(paint);
}

function ensureListening() {
  if (listening) return;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  listening = true;
}

/** Register an element to translate at `rate` × scroll delta. Returns a cleanup fn. */
export function registerParallax(el: HTMLElement, rate: number) {
  const entry: ParallaxEntry = { el, rate };
  entries.add(entry);
  ensureListening();
  schedule();
  return () => {
    entries.delete(entry);
    el.style.transform = "";
  };
}

/* ──────────────────────────────────────────────────────────── */

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false
  );
}

/** Attach parallax to a ref. Disabled entirely under reduced motion. */
export function useParallax<T extends HTMLElement>(rate: number, enabled = true) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !enabled || !rate) return;
    return registerParallax(el, rate);
  }, [rate, enabled, reduced]);
  return ref;
}

/**
 * One-shot "has entered the viewport" flag, used to trigger fall-in.
 * The positive bottom margin fires slightly before the element scrolls in, so
 * the long entrance transition has room to play out rather than snapping.
 */
export function useInView<T extends HTMLElement>(rootMargin = "0px 0px 8% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.01, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

/**
 * Shared plumbing for scroll-derived values: runs `read` on scroll and
 * resize, always off the effect body so mount never sets state synchronously.
 */
function useScrollValue<V>(read: () => V | undefined, initial: V, deps: unknown[]) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    let raf = 0;
    const calc = () => {
      raf = 0;
      const next = read();
      if (next !== undefined) setValue(next);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return value;
}

/**
 * Progress (0→1) through a tall "runway" element that holds a sticky child.
 * Lets an animation be paced by however much scroll length the runway has,
 * rather than by a single viewport pass.
 */
export function useRunwayProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const progress = useScrollValue<number>(
    () => {
      const el = ref.current;
      if (!el) return undefined;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const raw = travel <= 0 ? (rect.top <= 0 ? 1 : 0) : -rect.top / travel;
      return Math.min(1, Math.max(0, raw));
    },
    0,
    []
  );
  return { ref, progress };
}

/**
 * True while the viewport midpoint sits over a light-background stretch,
 * measured against the two blend bands that fade into and out of it.
 * Used to flip the fixed progress rail to dark ink.
 */
export function useLightZone(zones: { fadeInId?: string; fadeOutId: string }[]) {
  const key = zones.map((z) => `${z.fadeInId ?? ""}>${z.fadeOutId}`).join("|");
  return useScrollValue<boolean>(
    () => {
      const mid = window.innerHeight / 2;
      for (const zone of zones) {
        const b = document.getElementById(zone.fadeOutId);
        if (!b) continue;
        // A zone with no incoming band starts at the top of the document —
        // that is the hero, which is light from the first pixel.
        let start = -Infinity;
        if (zone.fadeInId) {
          const a = document.getElementById(zone.fadeInId);
          if (!a) continue;
          const ar = a.getBoundingClientRect();
          // Switch once the incoming fade is mostly light...
          start = ar.top + ar.height * 0.55;
        }
        // ...and back before the outgoing fade gets too dark.
        const end = b.getBoundingClientRect().top + b.getBoundingClientRect().height * 0.45;
        if (mid >= start && mid <= end) return true;
      }
      return false;
    },
    false,
    [key]
  );
}

/** Tracks which of several sections is currently active, for the progress nav. */
export function useActiveSection(ids: string[]) {
  const key = ids.join("|");
  return useScrollValue<string>(
    () => {
      const els = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));
      if (!els.length) return undefined;
      const line = window.innerHeight * 0.4;
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      return current;
    },
    ids[0] ?? "",
    [key]
  );
}
