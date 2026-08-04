"use client";

import { useState, useRef, useCallback } from "react";

interface FlipCardProps {
  number: string;
  title: string;
  body: string;
}

export default function FlipCard({ number, title, body }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);

  const toggle = useCallback(() => setFlipped((f) => !f), []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="flip-card-wrapper">
      <button
        ref={cardRef}
        className={`flip-card-inner${flipped ? " flipped" : ""}`}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-pressed={flipped}
        aria-label={flipped ? `${title} — press to flip back` : `${title} — press to reveal`}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer", width: "100%", textAlign: "left" }}
      >
        {/* Front face */}
        <div
          className="flip-card-face"
          aria-hidden={flipped}
          style={{
            background: "#000",
            padding: "32px 28px",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#A100FF",
              marginBottom: 16,
              display: "block",
            }}
          >
            {number}
          </span>
          <h3
            className="serif"
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.25,
              margin: 0,
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.45)",
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Click to read →
          </p>
        </div>

        {/* Back face */}
        <div
          className="flip-card-face flip-card-back"
          aria-hidden={!flipped}
          style={{
            background: "#fff",
            border: "1px solid #EBEBEB",
            padding: "28px",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#A100FF",
              marginBottom: 16,
              display: "block",
            }}
          >
            {number}
          </span>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.7,
              color: "#333333",
              margin: 0,
            }}
          >
            {body}
          </p>
          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#AAAAAA",
              marginTop: "auto",
              paddingTop: 16,
            }}
          >
            Click to flip back
          </p>
        </div>
      </button>
    </div>
  );
}
