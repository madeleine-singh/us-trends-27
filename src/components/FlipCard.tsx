"use client";

import { useState, useRef, useLayoutEffect } from "react";

interface FlipCardProps {
  number: string;
  title: string;
  body: string;
}

export default function FlipCard({ number, title, body }: FlipCardProps) {
  const [expanded, setExpanded] = useState(false);
  const bodyRevealRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  useLayoutEffect(() => {
    if (bodyRevealRef.current) {
      setBodyHeight(bodyRevealRef.current.scrollHeight);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpanded((prev) => !prev);
    }
  };

  return (
    <div
      className={`content-card${expanded ? " content-card--expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((prev) => !prev)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      aria-label={`${title} — ${expanded ? "activate to collapse" : "hover or activate to read"}`}
    >
      {/* Text panel — title always at top */}
      <div className="content-card-panel">
        <span className="content-card-number">{number}</span>
        <h3 className="content-card-title">{title}</h3>
        {/* Body slides in from the left; image area below compresses to absorb height */}
        <div
          ref={bodyRevealRef}
          className="content-card-body-reveal"
          style={{ maxHeight: expanded ? `${bodyHeight}px` : 0 }}
          aria-hidden={!expanded}
        >
          <p className="content-card-body">{body}</p>
        </div>
      </div>

      {/* Image placeholder — fills remaining space, compresses on reveal */}
      <div className="content-card-image" aria-hidden="true">
        <div className="content-card-image-inner" />
      </div>
    </div>
  );
}
