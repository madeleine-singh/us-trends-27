"use client";

import { useState } from "react";

interface TimelineNode {
  year: string;
  sublabel: string;
  tooltip: string;
}

interface TimelineProps {
  nodes: TimelineNode[];
}

export default function Timeline({ nodes }: TimelineProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: 120,
      }}
      role="list"
      aria-label="Trend timeline"
    >
      {/* Connecting line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 14,
          left: "calc(var(--pad-x) + 14px)",
          right: "calc(var(--pad-x) + 14px)",
          height: 1,
          background: "#D8D8D8",
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        {nodes.map((node, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              role="listitem"
              style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* Dot */}
              <button
                aria-label={`${node.year}: ${node.sublabel}. ${isActive ? "Hide" : "Show"} details`}
                aria-describedby={isActive ? `tooltip-${i}` : undefined}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  width: 28,
                  height: 28,
                  background: isActive ? "#A100FF" : "#fff",
                  border: `2px solid ${isActive ? "#A100FF" : "#D8D8D8"}`,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.28s cubic-bezier(0.4,0,0.2,1), border-color 0.28s cubic-bezier(0.4,0,0.2,1)",
                  padding: 0,
                  flexShrink: 0,
                }}
              />

              {/* Year label */}
              <span
                aria-hidden="true"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: isActive ? "#A100FF" : "#555",
                  marginTop: 12,
                  transition: "color 0.28s cubic-bezier(0.4,0,0.2,1)",
                  whiteSpace: "nowrap",
                }}
              >
                {node.year}
              </span>

              {/* Sublabel */}
              <span
                style={{
                  fontSize: 12,
                  color: "#555",
                  marginTop: 4,
                  textAlign: "center",
                  maxWidth: 140,
                }}
              >
                {node.sublabel}
              </span>

              {/* Tooltip */}
              <div
                id={`tooltip-${i}`}
                role="tooltip"
                style={{
                  position: "absolute",
                  top: "calc(100% + 16px)",
                  left: "50%",
                  transform: `translateX(-50%) translateY(${isActive ? 0 : 4}px)`,
                  width: 280,
                  background: "#000",
                  color: "#fff",
                  padding: "18px 20px",
                  fontSize: 13,
                  lineHeight: 1.65,
                  opacity: isActive ? 1 : 0,
                  pointerEvents: "none",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  zIndex: 10,
                }}
              >
                {/* Triangle */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -6,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderBottom: "6px solid #000",
                  }}
                />
                {node.tooltip}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
