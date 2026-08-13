import type { DropSpec, WordSpec } from "@/components/scroll/Drops";
import type { Stop } from "@/components/scroll/SectionProgressNav";

/* ──────────────────────────────────────────────────────────────
   Trend 1 — scrollytelling content model.

   Layout coordinates are ported from the Figma frame (node 142:8559)
   and normalised to percentages of each signal's stage box, so the
   composition scales rather than pinning to the 1449px artboard.

   IMAGE DATA IS PROVISIONAL. Captions and source URLs are pending
   from the image spreadsheet. Until that lands every drop carries the
   _TBD_ caption below and no source link, so the hover/focus flip is
   demonstrable but obviously unfinished.
   ────────────────────────────────────────────────────────────── */

export const TBD_CAPTION = "_TBD_ caption pending";

const P = "/trend-1-scroll";

export const stops: Stop[] = [
  { id: "hero", label: "Opening" },
  { id: "core-thought", label: "Core thought" },
  { id: "timeline", label: "The timeline" },
  { id: "what-we-saw", label: "What we saw" },
  { id: "signal-1", label: "Signal 1" },
  { id: "signal-2", label: "Signal 2" },
  { id: "signal-3", label: "Signal 3" },
  { id: "expect-2027", label: "2027" },
  { id: "implications", label: "Implications" },
];

/* Parallax rates from the Figma annotation: 0.05 / 0.12 / 0.2 / 0.3 */
export const RATES = { back: 0.05, mid: 0.12, fore: 0.2, front: 0.3 } as const;

type Signal = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  stage: { width: number; height: number };
  drops: DropSpec[];
  words: WordSpec[];
};

export const signals: Signal[] = [
  {
    id: "signal-1",
    eyebrow: "Signal 1",
    title: "The rise of mass individuality",
    paragraphs: [
      "Algorithmic culture is flattening these expressions of individuality, making complex experiences easier to name and participate in. At the height of TikTok's micro trend cycle, WGSN observed that a new core could appear every few weeks.",
      "By 2025, it was already seeing consumers move away from throwaway microtrends and toward more personal styling, considered consumption, and real-world contexts.",
      "The result is a paradox. Culture looks more fragmented because there are endless niches and identity labels. But it also feels more homogenous because each niche gets quickly translated into the same set of products and behaviors. Millions of people trying to express their uniqueness end up with nearly identical wardrobes, feeds, and taste profiles.",
      "This isn't only an internet problem. Our regional research showed the same dynamic playing out physically: the same brands appearing in cities across the country, each time presented as a local original. TrendLens Analytics found a 35% decline since 2023 in people's exposure to content outside their existing algorithmic preferences.",
    ],
    stage: { width: 540, height: 1260 },
    drops: [
      { id: "s1-tiktok", src: `${P}/tiktok.jpg`, alt: "TikTok feed of near-identical styling videos", x: 2.41, y: 0, w: 50.19, h: 14.37, rate: RATES.mid, rotate: -2, caption: TBD_CAPTION },
      { id: "s1-luthfi", src: `${P}/luthfi-alfarizi-unsplash.jpg`, alt: "Crowd photographed from above", x: 27.22, y: 16.35, w: 72.59, h: 17.54, rate: RATES.back, rotate: 1.5, caption: TBD_CAPTION },
      { id: "s1-different", src: `${P}/so-very-different.jpg`, alt: "Social post captioned so very different", x: 0, y: 35.71, w: 44.44, h: 18.89, rate: RATES.fore, rotate: -3, caption: TBD_CAPTION },
      { id: "s1-tradwife", src: `${P}/tradwife.jpg`, alt: "Tradwife content still", x: 49.63, y: 43.57, w: 44.44, h: 23.73, rate: RATES.front, rotate: 2.5, caption: TBD_CAPTION },
    ],
    words: [
      { id: "s1-w1", text: "sea of sameness", x: 57.78, y: 47.78, color: "#60a5fa", size: 28, rate: RATES.front },
      { id: "s1-w2", text: "cores", x: 0, y: 93.41, color: "#05f2db", size: 48, rate: RATES.fore },
    ],
  },
  {
    id: "signal-2",
    eyebrow: "Signal 2",
    title: "Technology anxiety increases",
    paragraphs: [
      "AI can instantly reproduce established cultural signals without understanding the human contexts and communities that gave them meaning. As those signals become easier to copy, style becomes increasingly detached from substance.",
      "Trend forecaster Emily Segal calls this tasteslop: when the visible signs of taste are severed from their original context and redeployed as generic symbols of sophistication. Our research identified a related behavior, taste-washing. When companies borrow the surface codes of art or independent culture without a meaningful relationship to those fields, tasteslop becomes a tool for taste-washing.",
      "As AI-generated slop becomes more common, people are realizing that their supposedly niche preferences are being shaped by the same systems as millions of others. That realization is producing two very different responses.",
      "Some people are opting out. They're embracing slower, more social forms of discovery: physical media, word-of-mouth recommendations, local spaces, and experiences that require physical presence. Others are performing taste more aggressively. They're leaning into culturally approved signals to demonstrate that they're still discerning and original.",
    ],
    stage: { width: 736, height: 1500 },
    drops: [
      { id: "s2-ghibli", src: `${P}/ghibli.jpg`, alt: "AI-generated image in a recognisable animation style", x: 11.01, y: 2, w: 53.67, h: 16.13, rate: RATES.mid, rotate: 1.5, caption: TBD_CAPTION },
      { id: "s2-slop", src: `${P}/ai-slop-sign.jpg`, alt: "Hand-lettered sign reading no AI slop", x: 0, y: 20.2, w: 33.97, h: 10.73, rate: RATES.front, rotate: -4, caption: TBD_CAPTION },
      { id: "s2-shirt", src: `${P}/trendy-shirt.jpg`, alt: "Trend-cycle shirt product shot", x: 62.64, y: 37.33, w: 19.16, h: 11.6, rate: RATES.fore, rotate: -0.43, caption: TBD_CAPTION },
      { id: "s2-chorecoat", src: `${P}/palantir-chore-coat.jpg`, alt: "Branded chore coat as subculture signalling", x: 9.78, y: 42.73, w: 45.79, h: 28.2, rate: RATES.back, rotate: 2, caption: TBD_CAPTION },
      { id: "s2-385", src: `${P}/image-385.jpg`, alt: "Performative taste display", x: 53.4, y: 72.33, w: 46.6, h: 17.13, rate: RATES.fore, rotate: -2, caption: TBD_CAPTION },
      { id: "s2-bear", src: `${P}/hans-jurgen-mager-unsplash.jpg`, alt: "Polar bear, used as an offline-retreat motif", x: 11.01, y: 85.4, w: 38.59, h: 12.6, rate: RATES.mid, rotate: 1, caption: TBD_CAPTION },
    ],
    words: [
      { id: "s2-w1", text: "tasteslop", x: 41.03, y: 22, color: "#05f2db", size: 48, rate: RATES.front },
      { id: "s2-w2", text: "taste-washing", x: 51.77, y: 65.33, color: "#ff50a0", size: 48, rate: RATES.fore, rotate: 33.75 },
      { id: "s2-w3", text: "offline", x: 14.13, y: 75.47, color: "#34d399", size: 48, rate: RATES.front },
    ],
  },
  {
    id: "signal-3",
    eyebrow: "Signal 3",
    title: "Early proof of authorship",
    paragraphs: [
      "The new marker of distinction is authorship: the ability to choose, reject, and stand by a decision long after its algorithmic validation has passed.",
      "This is a shift from taste as possession to taste as practice. Status no longer comes from knowing what's cool but from demonstrating discernment. True perspective requires boundaries.",
      "These are rituals that only truly exist if you show up. Becoming a regular at a neighborhood space, learning a craft, or contributing to a local effort offers something a mere trend label never can: proof of participation. Participation must be sustained and repeated to become authorship.",
      "Luxury and fashion brands are already responding by making craft, material expertise, and human labor more visible. However, simply displaying craft will not be enough. As these signals are adopted at scale, they risk being reduced to just another aesthetic performance.",
      "What will matter most is whether a brand or an individual has a genuine, lived relationship with the practice, community, or idea they represent.",
    ],
    stage: { width: 752, height: 1580 },
    drops: [
      { id: "s3-steve", src: `${P}/steve-adams-unsplash.jpg`, alt: "Analog craft still life", x: 12.9, y: 0, w: 45.42, h: 14.43, rate: RATES.back, rotate: -175.73, caption: TBD_CAPTION },
      { id: "s3-white", src: `${P}/white.jpg`, alt: "Studio practice documentation", x: 12.9, y: 3.1, w: 52.79, h: 14.11, rate: RATES.mid, rotate: 1.5, caption: TBD_CAPTION },
      { id: "s3-printmaking", src: `${P}/printmaking.jpg`, alt: "Printmaking workshop in progress", x: 0, y: 20.38, w: 49.34, h: 10.63, rate: RATES.front, rotate: -2.5, caption: TBD_CAPTION },
      { id: "s3-duck", src: `${P}/duck-library.jpg`, alt: "Community duck library", x: 13.83, y: 37.03, w: 21.81, h: 12.47, rate: RATES.fore, rotate: 3, caption: TBD_CAPTION },
      { id: "s3-run", src: `${P}/sunday-run.jpg`, alt: "Neighbourhood Sunday run club", x: 17.02, y: 57.09, w: 33.78, h: 21.46, rate: RATES.mid, rotate: -1.5, caption: TBD_CAPTION },
      { id: "s3-sauna", src: `${P}/sauna.jpg`, alt: "Community sauna and wellness club", x: 55.05, y: 64.11, w: 25.8, h: 15.25, rate: RATES.front, rotate: 2, caption: TBD_CAPTION },
      { id: "s3-386", src: `${P}/image-386.jpg`, alt: "Community garden plot", x: 12.9, y: 80.25, w: 32.71, h: 8.16, rate: RATES.fore, rotate: -2, caption: TBD_CAPTION },
    ],
    words: [
      { id: "s3-w1", text: "third spaces", x: 14.36, y: 51.46, color: "#60a5fa", size: 48, rate: RATES.front },
      { id: "s3-w2", text: "human craft", x: 52.93, y: 57.09, color: "#f87171", size: 48, rate: RATES.fore },
      { id: "s3-w3", text: "wellness social clubs", x: 42.82, y: 80.7, color: "#05f2db", size: 36, rate: RATES.front },
    ],
  },
];

/* Three layers for the "What to expect in 2027" parallax release. The Figma
   annotation lists four rates (0.05 / 0.12 / 0.2 / 0.3); with three images the
   outer three are used so the release keeps its full speed range.
   Stage is 1000x250 so the images fill it with no dead band beneath. */
export const expectLayers: DropSpec[] = [
  { id: "e-jung", src: `${P}/jung.jpg`, alt: "Reading and reflection", x: 12, y: 13.6, w: 17, h: 62.4, rate: RATES.back, rotate: -3, caption: TBD_CAPTION },
  { id: "e-gardening", src: `${P}/gardening.jpg`, alt: "Sustained gardening practice", x: 40, y: 2.4, w: 20, h: 73.6, rate: RATES.front, rotate: 2, caption: TBD_CAPTION },
  { id: "e-glaze", src: `${P}/glaze-notes.jpg`, alt: "Handwritten ceramic glaze notes", x: 68, y: 20.8, w: 18, h: 62.4, rate: RATES.fore, rotate: -2, caption: TBD_CAPTION },
];

export const implications = [
  {
    number: "01",
    title: "Earn the Right to a Point of View",
    body: "Having a perspective isn't enough; it has to show up in what a brand turns down, not just what it pursues. The collaborations declined, the trends skipped: that restraint is the proof. Without it, a stated point of view is just positioning.",
  },
  {
    number: "02",
    title: "Let Authorship Show in the Craft",
    body: "AI can now produce polished work at scale, so surface refinement alone no longer proves anything. What's harder to fake is the texture of real judgment: unexpected choices, decisions clearly not optimized for approval. Design should aim to be recognizable because it's distinctly authored, not just consistent.",
  },
  {
    number: "03",
    title: "Build a Cultural Position, not a Cultural Presence",
    body: "Borrowing a subculture's surface codes without a real relationship to it is exactly what produces tasteslop. The fix isn't avoiding cultural reference; it's earning it through long-term investment in specific communities or practices, and being honest about where that relationship starts and stops.",
  },
  {
    number: "04",
    title: "Treat Niche Specificity as a Creative Constraint, not a Targeting Strategy",
    body: "Brands got trained to spot and adopt emerging niches quickly, but authorship inverts that logic: specificity should be where the creative work starts, not a targeting tactic. A brand built from a genuinely specific place is harder to replicate than one just performing fluency in a niche.",
  },
  {
    number: "05",
    title: "Resist the Pressure to be Legible to Everyone",
    body: "Algorithmic culture rewards content that can be immediately understood across contexts. Authored work often can't be, and that resistance is part of its value. Brands and designers should be willing to produce work that takes time to understand, rewards sustained attention, or requires some existing knowledge to fully appreciate. Being partially illegible to the wrong audience is not a failure.",
  },
];
