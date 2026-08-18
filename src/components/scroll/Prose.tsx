import { Fragment } from "react";

/* Signal prose carries inline source citations — the Figma frame links WGSN
   and TrendLensAnalytics out of the body copy. Rather than store JSX in the
   content files, paragraphs keep a `[label](https://…)` marker and are parsed
   here. Only absolute http(s) URLs are linked; anything else renders as text,
   so a malformed marker can never produce a live link. */

const LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

export function ProseParagraph({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(LINK)) {
    const [raw, label, href] = match;
    const at = match.index ?? 0;
    if (at > cursor) parts.push(text.slice(cursor, at));
    parts.push(
      <a key={`${at}-${href}`} className="trs-link" href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
    cursor = at + raw.length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));

  return (
    <p>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </p>
  );
}
