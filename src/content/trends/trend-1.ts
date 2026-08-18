import type { TrendContent } from "./types";

/* ──────────────────────────────────────────────────────────────
   Trend 1 — Signed by Yours Truly.

   Ported from the Figma frame node 142:8559 (Aug 2026 redesign) and the
   card component node 356:683.

   Drop coordinates are percentages of each signal's stage box. They come
   from the three absolutely-positioned "image drop" groups in the frame
   (nodes 144:8566, 144:8562, 144:8619), with the empty leading and
   trailing space trimmed off each group so the collage sits directly under
   its heading, then divided through by the trimmed box.

   IMAGE DATA IS PROVISIONAL. Captions and source URLs are pending from the
   image spreadsheet — until it lands every drop carries the _TBD_ caption
   below and no source link, so the hover/focus flip is demonstrable but
   obviously unfinished.
   ────────────────────────────────────────────────────────────── */

export const TBD_CAPTION = "_TBD_ caption pending";

const S = "/trend-1/signals";
const C = "/trend-1/cards";

/* Parallax rates from the Figma annotation on node 110:3067: 0.05/0.12/0.2/0.3 */
export const RATES = { back: 0.05, mid: 0.12, fore: 0.2, front: 0.3 } as const;

export const trend1: TrendContent = {
  slug: "trend-1",
  metaTitle: "Signed by Yours Truly — US Trends 2027",
  metaDescription:
    "People are reassessing how they express individuality in a culture where every niche is instantly accessible. What stands out now is not access, but authorship.",

  hero: {
    kicker: "D&DP News & Trends",
    presents: "presents",
    title: "Signed by Yours Truly",
  },

  coreThought: [
    "People are reassessing how they express individuality in a culture where every niche is instantly accessible.",
    "What stands out now is not access, but authorship.",
  ],

  timeline: {
    eyebrow: "How we got here",
    title: "The timeline",
    caption:
      "The line is the signature. It starts flat while microtrends do the work, gains weight as people begin choosing for themselves, and finishes with the flourish: a point of view someone is willing to put their name on.",
    disclaimer: "Not a measured index",
  },

  intro: {
    title: "What we saw across America",
    lede: "Our research revealed a country that feels more culturally fragmented than ever, and expressions that vary sharply by region.",
    backdrop: "/trend-1/what-we-saw-backdrop.webp",
  },

  signals: [
    {
      id: "signal-1",
      eyebrow: "Signal 1",
      title: "The rise of mass individuality",
      blocks: [
        [
          "Algorithmic culture is flattening these expressions of individuality, making complex experiences easier to name and participate in.",
          "At the height of TikTok's micro trend cycle, [WGSN](https://www.wgsn.com/en/blog/swinging-throwaway-microtrends-personal-styling) observed that a new “core” could appear every few weeks.",
          "By 2025, it was already seeing consumers move away from throwaway microtrends and toward more personal styling, considered consumption, and real-world contexts.",
        ],
        [
          "The result is a paradox. Culture looks more fragmented because there are endless niches and identity labels. But it also feels more homogenous because each niche gets quickly translated into the same set of products and behaviors. Millions of people trying to express their uniqueness end up with nearly identical wardrobes, feeds, and taste profiles.",
          "This isn't only an internet problem. Our regional research showed the same dynamic playing out physically: the same brands appearing in cities across the country, each time presented as a local original. [TrendLensAnalytics](https://thenarrativepost.com/culture-s-end-hyper-fragmentation-by-2027/) found a 35% decline since 2023 in people's exposure to content outside their existing algorithmic preferences.",
        ],
      ],
      stage: { width: 527, height: 1360 },
      drops: [
        { id: "s1-different", src: `${S}/s1-so-very-different.webp`, alt: "Product grid captioned “I'm so very different”", x: 0, y: 6.47, w: 61.1, h: 23.46, rate: RATES.mid, rotate: -1.5, caption: TBD_CAPTION },
        { id: "s1-sleaze", src: `${S}/s1-sleaze-market.webp`, alt: "Poster for an indie sleaze themed club night", x: -0.95, y: 32.72, w: 53.7, h: 28.16, rate: RATES.front, rotate: -2.5, caption: TBD_CAPTION },
        { id: "s1-inhaler", src: `${S}/s1-inhaler.webp`, alt: "Asthma inhaler shot as a product still", x: 56.74, y: 32.72, w: 42.31, h: 12.28, rate: RATES.back, rotate: 2, caption: TBD_CAPTION },
        { id: "s1-tradwife", src: `${S}/s1-tradwife.webp`, alt: "Staged mid-century family scene from tradwife content", x: 0, y: 63.68, w: 71.35, h: 34.49, rate: RATES.fore, rotate: 1.5, caption: TBD_CAPTION },
      ],
      words: [
        { id: "s1-w1", text: "sea of sameness", x: 21.35, anchor: "center", y: 2.35, color: "#60a5fa", size: 28, rate: RATES.front, font: "sans" },
        { id: "s1-w2", text: "NPC", x: 76.57, anchor: "center", y: 18.24, color: "#ff3d41", size: 50, rate: RATES.fore, font: "kokoro" },
        { id: "s1-w3", text: "-maxxing", x: 78.84, anchor: "center", y: 46.84, color: "#ffb218", size: 50, rate: RATES.front, font: "kokoro" },
        { id: "s1-w4", text: "cores", x: 56.74, y: 57.72, color: "#05f2db", size: 48, rate: RATES.fore, font: "sans" },
      ],
    },
    {
      id: "signal-2",
      eyebrow: "Signal 2",
      title: "Technology anxiety increases",
      blocks: [
        [
          "AI can instantly reproduce established cultural signals without understanding the human contexts and communities that gave them meaning. As those signals become easier to copy, style becomes increasingly detached from substance.",
        ],
        [
          "Trend forecaster Emily Segal calls this tasteslop: when the visible signs of taste are severed from their original context and redeployed as generic symbols of sophistication. Our research identified a related behavior, taste-washing. When companies borrow the surface codes of art or independent culture without a meaningful relationship to those fields, tasteslop becomes a tool for taste-washing.",
          "As AI-generated “slop” becomes more common, people are realizing that their supposedly niche preferences are being shaped by the same systems as millions of others. That realization is producing two very different responses.",
          "Some people are opting out. They're embracing slower, more social forms of discovery: physical media, word-of-mouth recommendations, local spaces, and experiences that require physical presence. Others are performing taste more aggressively. They're leaning into culturally approved signals to demonstrate that they're still discerning and original.",
        ],
      ],
      stage: { width: 655, height: 1550 },
      drops: [
        { id: "s2-friend", src: `${S}/s2-friend-subway-ad.webp`, alt: "Subway advertisement defining “friend” for an AI companion product", x: 2.44, y: 2.32, w: 50.69, h: 16.06, rate: RATES.mid, rotate: -1.5, caption: TBD_CAPTION },
        { id: "s2-screens", src: `${S}/s2-la-screen-time.webp`, alt: "News article on a school district limiting classroom screen time", x: 61.53, y: 2.32, w: 40.76, h: 16.58, rate: RATES.back, rotate: 1.5, caption: TBD_CAPTION },
        { id: "s2-datacenter", src: `${S}/s2-atlanta-data-center.webp`, alt: "Local news segment on a data center siting debate", x: 2.75, y: 20.84, w: 46.56, h: 11.1, rate: RATES.front, rotate: -1, caption: TBD_CAPTION },
        { id: "s2-anime", src: `${S}/s2-ai-anime-art.webp`, alt: "AI-generated illustration in a recognisable animation style", x: 60.31, y: 29.23, w: 39.69, h: 15.03, rate: RATES.fore, rotate: 2, caption: TBD_CAPTION },
        { id: "s2-chorecoat", src: `${S}/s2-palantir-chore-coat.webp`, alt: "Branded chore coat used as subculture signalling", x: 0, y: 35.35, w: 51.45, h: 27.23, rate: RATES.back, rotate: -1.5, caption: TBD_CAPTION },
        { id: "s2-bear", src: `${S}/s2-polar-bear.webp`, alt: "Polar bear on a shoreline, used as an offline-retreat motif", x: 59.54, y: 57.94, w: 40.46, h: 11.35, rate: RATES.mid, rotate: 1, caption: TBD_CAPTION },
        { id: "s2-sadman", src: `${S}/s2-ai-sad-man.webp`, alt: "AI-generated animation still of a dejected man", x: 2.75, y: 77.16, w: 49.62, h: 20.97, rate: RATES.fore, rotate: -2, caption: TBD_CAPTION },
      ],
      words: [
        { id: "s2-w1", text: "nostalgia", x: 84.81, anchor: "center", y: 22.65, color: "#c2a3ff", size: 50, rate: RATES.front, font: "comic" },
        { id: "s2-w2", text: "taste-washing", x: 49.31, wrapAt: 51.6, y: 48.0, color: "#6e89ff", size: 35, rate: RATES.fore, font: "sixtyfour" },
        { id: "s2-w3", text: "taste slop", x: 2.29, y: 72.39, color: "#e1b98d", size: 40, rate: RATES.front, font: "silkscreen" },
        { id: "s2-w4", text: "ai guilt", x: 69.62, y: 76.13, color: "#ff83ec", size: 30, rate: RATES.mid, rotate: 18, font: "martian" },
      ],
    },
    {
      id: "signal-3",
      eyebrow: "Signal 3",
      title: "Early proof of authorship",
      blocks: [
        [
          "The new marker of distinction is authorship: the ability to choose, reject, and stand by a decision long after its algorithmic validation has passed.",
          "This is a shift from taste as possession to taste as practice. Status no longer comes from knowing what's cool but from demonstrating discernment. True perspective requires boundaries.",
        ],
        [
          "These are rituals that only truly exist if you show up. Becoming a regular at a neighborhood space, learning a craft, or contributing to a local effort offers something a mere trend label never can: proof of participation. Participation must be sustained and repeated to become authorship.",
          "Luxury and fashion brands are already responding by making craft, material expertise, and human labor more visible. However, simply displaying craft will not be enough. As these signals are adopted at scale, they risk being reduced to just another aesthetic performance.",
          "What will matter most is whether a brand or an individual has a genuine, lived relationship with the practice, community, or idea they represent.",
        ],
      ],
      stage: { width: 655, height: 1463 },
      drops: [
        { id: "s3-video", src: `${S}/s3-video-store.webp`, alt: "Article on physical media revival above a neon-lit video store", x: 5.19, y: 1.64, w: 56.34, h: 19.14, rate: RATES.mid, rotate: -1.5, caption: TBD_CAPTION },
        { id: "s3-serenbe", src: `${S}/s3-serenbe-stables.webp`, alt: "Stables at an agrarian planned community", x: 39.85, y: 26.86, w: 60.15, h: 11.35, rate: RATES.back, rotate: 1.5, caption: TBD_CAPTION },
        { id: "s3-red", src: `${S}/s3-red-room.webp`, alt: "Crowd with raised arms in a red-lit room", x: 4.58, y: 35.88, w: 31.03, h: 17.23, rate: RATES.front, rotate: -2, caption: TBD_CAPTION },
        { id: "s3-loveisblind", src: `${S}/s3-love-is-blind-irl.webp`, alt: "News item on an in-person dating event modelled on a TV format", x: 45.34, y: 40.74, w: 43.51, h: 22.9, rate: RATES.fore, rotate: 2, caption: TBD_CAPTION },
        { id: "s3-bottega", src: `${S}/s3-bottega-hands.webp`, alt: "Luxury campaign image foregrounding woven leather craft", x: 2.6, y: 66.23, w: 58.47, h: 32.74, rate: RATES.mid, rotate: -1, caption: TBD_CAPTION },
      ],
      words: [
        { id: "s3-w1", text: "analog", x: 77.56, anchor: "center", y: 18.93, color: "rgba(254,243,196,0.7)", size: 50, rate: RATES.fore, font: "azeret" },
        { id: "s3-w2", text: "biophilic", x: 18.4, anchor: "center", y: 23.38, color: "#34d399", size: 50, rate: RATES.front, font: "diphylleia" },
        { id: "s3-w3", text: "third spaces", x: 18.32, anchor: "center", y: 58.3, color: "rgba(248,113,113,0.7)", size: 35, rate: RATES.front, font: "baloo" },
        { id: "s3-w4", text: "craft", x: 77.79, anchor: "center", y: 92.96, color: "#60a5fa", size: 50, rate: RATES.fore, font: "geom" },
      ],
    },
  ],

  expect: {
    title: "What to expect in 2027",
    paragraphs: [
      "Value moves away from chasing the next microtrend toward deciding which interests are meaningful enough to anchor a lasting point of view.",
      "The new status symbol will be a perspective that feels self-authored and specific. Ultimately, in a culture filled with instantly available identities, the most respected individuals will not be those who participate in everything, but rather those who demonstrate that they know what matters to them and why.",
    ],
  },

  implications: {
    title: "What this means for brands and designers",
    hint: "Hover, focus or tap a card to read more.",
    cards: [
      {
        number: "01",
        title: "Earn the Right to a Point of View",
        body: "Having a perspective isn't enough; it has to show up in what a brand turns down, not just what it pursues. The collaborations declined, the trends skipped: that restraint is the proof. Without it, a stated point of view is just positioning.",
        background: `${C}/01-image.webp`,
        fill: "image",
      },
      {
        number: "02",
        title: "Let Authorship Show in the Craft",
        body: "AI can now produce polished work at scale, so surface refinement alone no longer proves anything. What's harder to fake is the texture of real judgment: unexpected choices, decisions clearly not optimized for approval. Design should aim to be recognizable because it's distinctly authored, not just consistent.",
        background: `${C}/02-gradient.webp`,
        fill: "gradient",
      },
      {
        number: "03",
        title: "Build a Cultural Position, not a Cultural Presence",
        body: "Borrowing a subculture's surface codes without a real relationship to it is exactly what produces tasteslop. The fix isn't avoiding cultural reference; it's earning it through long-term investment in specific communities or practices, and being honest about where that relationship starts and stops.",
        background: `${C}/03-image.webp`,
        fill: "image",
      },
      {
        number: "04",
        title: "Treat Niche Specificity as a Creative Constraint, not a Targeting Strategy",
        body: "Brands got trained to spot and adopt emerging niches quickly, but authorship inverts that logic: specificity should be where the creative work starts, not a targeting tactic. A brand built from a genuinely specific place is harder to replicate than one just performing fluency in a niche.",
        background: `${C}/04-gradient.webp`,
        fill: "gradient",
      },
      {
        number: "05",
        title: "Resist the Pressure to be Legible to Everyone",
        body: "Algorithmic culture rewards content that can be immediately understood across contexts. Authored work often can't be, and that resistance is part of its value. Brands and designers should be willing to produce work that takes time to understand, rewards sustained attention, or requires some existing knowledge to fully appreciate. Being partially illegible to the wrong audience is not a failure.",
        background: `${C}/05-image.webp`,
        fill: "image",
      },
    ],
  },

  /* Rail labels use the signal's real name rather than "Signal 1", so the nav
     doubles as a summary of the argument. */
  stops: [
    { id: "hero", label: "Opening" },
    { id: "core-thought", label: "Core thought" },
    { id: "timeline", label: "The timeline" },
    { id: "what-we-saw", label: "What we saw" },
    { id: "signal-1", label: "The rise of mass individuality" },
    { id: "signal-2", label: "Technology anxiety increases" },
    { id: "signal-3", label: "Early proof of authorship" },
    { id: "expect-2027", label: "What to expect in 2027" },
    { id: "implications", label: "What this means" },
  ],
};

export default trend1;
