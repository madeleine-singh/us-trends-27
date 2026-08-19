"use client";

import { useInView } from "./motion";

/** Generic scroll-into-view fade-up, reusing the `.trs-reveal` treatment
    already applied to the core thought's eyebrow. */
export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="trs-reveal"
      data-shown={inView ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
