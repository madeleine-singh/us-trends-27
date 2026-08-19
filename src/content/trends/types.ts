/* ──────────────────────────────────────────────────────────────
   Shared content model for the two trend scroll pages.

   Both /trend-1 and /trend-2 render the same component tree
   (components/scroll/TrendScrollPage) from one of these objects, so
   the pages behave identically and only the copy, imagery and
   colour accents differ.
   ────────────────────────────────────────────────────────────── */

/** A rail stop in the fixed left-hand section nav. */
export type Stop = { id: string; label: string };

/**
 * A photo in a signal's falling composition. Positions are percentages of
 * the parent stage box, so the whole collage scales with the viewport
 * instead of pinning to the 1449px Figma artboard.
 */
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
  /**
   * The image's layer name in the Figma frame. This is the join key between the
   * design and column H of `materials/photos-library.md`, so a re-export from
   * Figma can be matched back to its caption and link without guesswork.
   */
  layer?: string;
  /**
   * Column E of `materials/photos-library.md`, verbatim. Present means the drop
   * flips on hover/focus to show the caption. Two rows in the sheet are marked
   * "no caption needed, just direct navigation to hyperlink" — those carry a
   * `source` but no caption, so they link without flipping.
   */
  caption?: string;
  /** Column I of the photo library — where the image navigates on click. */
  source?: string;
};

/**
 * Display faces for the word drops. Each word in the Figma composition is set
 * in a different typeface on purpose — the mismatch is the point, it reads as
 * a pile of borrowed internet vernacular rather than one designed voice.
 */
export type WordFont =
  | "sans"
  | "kokoro"
  | "comic"
  | "silkscreen"
  | "sixtyfour"
  | "martian"
  | "diphylleia"
  | "baloo"
  | "azeret"
  | "geom"
  | "abhaya";

export type WordSpec = {
  id: string;
  text: string;
  /**
   * Horizontal position as a percentage of the stage. `anchor` says what `x`
   * measures: "center" mirrors Figma's -translate-x-1/2 words, so a substituted
   * typeface grows symmetrically about the authored centre instead of pushing
   * the word off the right edge. Defaults to "left".
   */
  x: number;
  anchor?: "left" | "center";
  /** Set only for the words Figma deliberately breaks over two lines. */
  wrapAt?: number;
  y: number;
  color: string;
  /** Figma px at the 1449px artboard width; scaled fluidly at render time. */
  size: number;
  rate: number;
  rotate?: number;
  font: WordFont;
};

/**
 * One signal. `blocks` groups the prose into the screenfuls the Figma frame
 * splits it across (Sig1a / Sig1b and so on); the right-hand column spreads
 * those groups down the section so each lands beside its part of the collage.
 * Paragraph strings support inline `[label](https://…)` source links.
 */
export type Signal = {
  id: string;
  eyebrow: string;
  title: string;
  blocks: string[][];
  stage: { width: number; height: number };
  drops: DropSpec[];
  words: WordSpec[];
};

/**
 * A "what this means" card. `background` is a local webp — both the
 * photographic and the gradient card fills are stored as images in the repo,
 * since the gradients are authored artwork in Figma rather than CSS.
 */
export type ImplicationCard = {
  number: string;
  title: string;
  body: string;
  background: string;
  fill: "image" | "gradient";
};

export type TrendContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;

  hero: {
    kicker: string;
    presents: string;
    title: string;
    /** When set, the hero renders as a dark full-bleed photo (Trend 2, Figma
        node 170:559) instead of the light animated mesh (Trend 1). Also
        switches the title to the monospace display face. */
    backdrop?: string;
  };

  /** Revealed word by word as the pinned scene is scrolled through. */
  coreThought: string[];

  timeline: {
    eyebrow: string;
    title: string;
    caption: string;
    disclaimer: string;
    /** Selects which chart TimelineScene renders. Defaults to the hand-drawn
        signature line (Trend 1). Trend 2's Figma frame draws a different
        chart, so it opts into "trust" instead of adding new content fields. */
    chart?: "trust";
  };

  intro: { title: string; lede: string; backdrop: string };

  signals: Signal[];

  expect: { title: string; paragraphs: string[] };

  implications: { title: string; hint: string; cards: ImplicationCard[] };

  stops: Stop[];
};
