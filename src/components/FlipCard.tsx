"use client";

import { useState } from "react";

interface FlipCardProps {
  number: string;
  title: string;
  body: string;
}

export default function FlipCard({ number, title, body }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  return (
    <div
      className="flip-card-wrapper"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={flipped ? `${title} — activate to flip back` : `${title} — hover or activate to read`}
      style={{ cursor: "pointer", outline: "none" }}
    >
      <div className={`flip-card-inner${flipped ? " flipped" : ""}`}>
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
              fontSize: 14,
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
              color: "rgba(255,255,255,0.65)",
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Hover to read →
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
              marginBottom: 12,
              display: "block",
            }}
          >
            {number}
          </span>
          <h3
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#000",
              lineHeight: 1.3,
              marginBottom: 14,
            }}
          >
            {title}
          </h3>
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
        </div>
      </div>
    </div>
  );
}
