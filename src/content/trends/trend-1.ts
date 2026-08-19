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

   Captions and source links come from `materials/photos-library.md` (converted
   from photos-library.xlsx). Each drop is tied to its row by the Figma layer
   name, recorded in the `layer` field. Captions are quoted verbatim from
   column E; `source` is column I, the URL the image opens on click.

   Two rows are marked "no caption needed, just direct navigation to hyperlink"
   (s2-screens, s3-video), so those drops link without flipping. One image in
   the frame — the Sleaze Market poster, Figma layer "Screenshot 2026-08-17 at
   2.39.29 PM 1" — has no row in the spreadsheet at all, so it carries neither
   caption nor link until one is supplied.
   ────────────────────────────────────────────────────────────── */

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
        {
          id: "s1-different",
          layer: "so very different",
          src: `${S}/s1-so-very-different.webp`,
          alt: "“I'm so very different” starter pack meme — a grid of clothes, shoes and grooming products laid out as one interchangeable identity kit",
          x: 0, y: 6.47, w: 61.1, h: 23.46, rate: RATES.mid, rotate: -1.5,
          caption:
            "Since 2014, the starter pack meme has been a viral template for collapsing any subculture into a fixed, recognizable set of objects and behaviors — making niche identity instantly legible and endlessly replicable.",
          source: "https://www.vice.com/en/article/unpacking-the-meaning-of-the-starter-pack-meme/",
        },
        {
          id: "s1-sleaze",
          layer: "Screenshot 2026-08-17 at 2.39.29 PM 1",
          src: `${S}/s1-sleaze-market.webp`,
          alt: "Instagram post advertising Sleaze Market, an indie sleaze party at a Brooklyn hotel",
          x: -0.95, y: 32.72, w: 53.7, h: 28.16, rate: RATES.front, rotate: -2.5,
        },
        {
          id: "s1-ozempic",
          layer: "haberdoedas-TzKc7FGaL7Y-unsplash 1",
          src: `${S}/s1-ozempic-pen.webp`,
          alt: "GLP-1 injector pen shot as a clean product still on a pale background",
          x: 56.74, y: 32.72, w: 42.31, h: 12.28, rate: RATES.back, rotate: 2,
          caption:
            "Searches for “Ozempic face” surged 4,600% between 2021 and 2024. Looksmaxxing stopped being niche the moment it became a look anyone could buy.",
          source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12793942/",
        },
        {
          id: "s1-tradwife",
          layer: "tradwife",
          src: `${S}/s1-tradwife.webp`,
          alt: "Nara Smith photographed for GQ in a staged mid-century domestic scene",
          x: 0, y: 63.68, w: 71.35, h: 34.49, rate: RATES.fore, rotate: 1.5,
          caption:
            "Nara Smith built 12 million TikTok followers through elaborate from-scratch cooking videos and helped establish the tradwife aesthetic as a mainstream cultural reference point romanticizing slow living at scale.",
          source: "https://www.gq.com/story/lucky-blue-nara-aziza-smith-gq-hype",
        },
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
        {
          id: "s2-friend",
          layer: "image 385",
          src: `${S}/s2-friend-subway-ad.webp`,
          alt: "Defaced New York subway advertisement for the Friend AI necklace, its dictionary-style definition of “friend” covered in handwritten protest",
          x: 2.44, y: 2.32, w: 50.69, h: 16.06, rate: RATES.mid, rotate: -1.5,
          caption:
            "Friend’s NYC ads sparked such strong backlash that people began defacing them as a form of protest. The response spread online, where communities created websites to archive the graffiti and document the growing resistance.",
          source:
            "https://www.theverge.com/ai-artificial-intelligence/802697/friend-ai-device-subway-ad-protest-nyc",
        },
        {
          id: "s2-screens",
          layer: "Screenshot 2026-08-16 at 7.48.25 PM 1",
          src: `${S}/s2-la-screen-time.webp`,
          alt: "BBC News article: Los Angeles becomes the first major US school district to limit classroom screen time",
          x: 61.53, y: 2.32, w: 40.76, h: 16.58, rate: RATES.back, rotate: 1.5,
          source: "https://www.bbc.com/news/articles/c15d888ww39o",
        },
        {
          id: "s2-datacenter",
          layer: "image 389",
          src: `${S}/s2-atlanta-data-center.webp`,
          alt: "Local news segment on the Atlanta data center debate, residents holding placards outside a council meeting",
          x: 2.75, y: 20.84, w: 46.56, h: 11.1, rate: RATES.front, rotate: -1,
          caption:
            "Sustained residential pushback prompted Atlanta City Council members to introduce a formal bill to regulate data centers across the city, blocking a proposed $500M data center from being built.",
          source: "https://www.youtube.com/watch?v=MjyWlchIrbI",
        },
        {
          id: "s2-zara",
          layer: "image 391",
          src: `${S}/s2-zara-lisa-frank.webp`,
          alt: "Lisa Frank style illustration of a cartoon girl and dolphins in saturated rainbow colour",
          x: 60.31, y: 29.23, w: 39.69, h: 15.03, rate: RATES.fore, rotate: 2,
          caption:
            "Larsson’s pop resurgence started organically on TikTok when “Symphony” was paired with Lisa Frank dolphins. Leaning into the nostalgia, she became the face of the 2016 revival — a symbol of pre-pandemic innocence in an anxious present.",
          source:
            "https://www.yahoo.com/entertainment/music/article/a-pop-star-keeps-accidentally-going-viral-with-decade-old-songs-it-has-saved-her-career-190035257.html",
        },
        {
          id: "s2-chorecoat",
          layer: "palantir chore coat",
          src: `${S}/s2-palantir-chore-coat.webp`,
          alt: "Palantir-branded blue chore coat photographed close up",
          x: 0, y: 35.35, w: 51.45, h: 27.23, rate: RATES.back, rotate: -1.5,
          caption:
            "Palantir is selling a $239 chore coat, using fashion and cultural appeal to redirect attention from the controversies surrounding the company.",
          source:
            "https://www.theguardian.com/fashion/2026/may/08/why-is-silicon-valley-suddenly-obsessed-with-being-tasteful",
        },
        {
          id: "s2-bear",
          layer: "hans-jurgen-mager-KgRKlQXmHR0-unsplash 1",
          src: `${S}/s2-polar-bear.webp`,
          alt: "Polar bear walking along a bare shoreline",
          x: 59.54, y: 57.94, w: 40.46, h: 11.35, rate: RATES.mid, rotate: 1,
          caption:
            "73% of Gen Z report extreme climate anxiety, yet the same cohort are among the heaviest AI users, a technology with a significant energy footprint. The polar bear is the oldest symbol in that story. Taste-washing, the direct successor to greenwashing, is how tech companies are responding, closing the trust gap through borrowed aesthetics rather than genuine accountability.",
          source:
            "https://www.21stcentech.com/the-real-climate-threat-has-a-generation-stopping-believing-in-a-better-future/",
        },
        {
          id: "s2-sadman",
          layer: "image 386",
          src: `${S}/s2-ai-sad-man.webp`,
          alt: "AI-generated Studio Ghibli style portrait of a dejected man",
          x: -3.51, y: 70.45, w: 54.96, h: 23.23, rate: RATES.fore, rotate: -2,
          caption:
            "When ChatGPT’s image generation launch, Studio-Ghibli-style images went viral but also drew backlash and conversation. Critics called it tasteslop—mass-producing a distinctive style while stripping away its originality and intent.",
          source:
            "https://www.forbes.com/sites/danidiplacido/2025/03/27/the-ai-generated-studio-ghibli-trend-explained/",
        },
      ],
      words: [
        { id: "s2-w1", text: "nostalgia", x: 78, anchor: "center", y: 22.65, color: "#c2a3ff", size: 50, rate: RATES.front, font: "comic" },
        { id: "s2-w2", text: "taste-washing", x: 46, wrapAt: 51.6, y: 48.0, color: "#6e89ff", size: 35, rate: RATES.fore, font: "sixtyfour" },
        { id: "s2-w3", text: "taste slop", x: 22, y: 95, color: "#e1b98d", size: 40, rate: RATES.front, font: "silkscreen" },
        { id: "s2-w4", text: "ai guilt", x: 69.62, y: 76.13, color: "#ff83ec", size: 30, rate: RATES.mid, rotate: 18, font: "martian" },
        { id: "s2-w5", text: "techno-pessimism", x: 30, anchor: "center", y: 65.23, color: "#ffb218", size: 40, rate: RATES.back, font: "abhaya" },
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
        {
          id: "s3-video",
          layer: "Screenshot 2026-08-16 at 10.06.17 PM 1",
          src: `${S}/s3-video-store.webp`,
          alt: "LA Times article on Gen Z buying DVDs and Blu-rays, over a photograph of a neon-lit video store",
          x: 5.19, y: 1.64, w: 56.34, h: 19.14, rate: RATES.mid, rotate: -1.5,
          source:
            "https://www.latimes.com/entertainment-arts/business/story/2026-02-23/why-gen-z-wants-to-buy-rent-dvds-blu-rays-in-age-of-streaming",
        },
        {
          id: "s3-serenbe",
          layer: "6214ef8cff89df27b11b7184_serenbe_homepage-stables 1",
          src: `${S}/s3-serenbe-stables.webp`,
          alt: "Stables and pasture at Serenbe, the planned wellness community outside Atlanta",
          x: 39.85, y: 26.86, w: 60.15, h: 11.35, rate: RATES.back, rotate: 1.5,
          caption:
            "Serenbe is a master-planned wellness community on the edge of Atlanta — 25 acres of organic farmland, preserved forest, and nature trails connecting homes, restaurants, and arts venues.",
          source: "https://www.serenbe.com/",
        },
        {
          id: "s3-sauna",
          layer: "sauna",
          src: `${S}/s3-othership-sauna.webp`,
          alt: "Othership sauna session, arms raised in a red-lit room",
          x: 4.58, y: 35.88, w: 31.03, h: 17.23, rate: RATES.front, rotate: -2,
          caption:
            "Othership launches flagship NYC bathouse, representing a booming category of wellness third spaces designed for people who want to socialize without drinking.",
          source: "https://www.othership.us/",
        },
        {
          id: "s3-loveisblind",
          layer: "Screenshot 2026-08-16 at 10.01.15 PM 1",
          src: `${S}/s3-love-is-blind-irl.webp`,
          alt: "New York Post story on NYC singles playing Love is Blind in real life, blindfolded guests talking across a table",
          x: 45.34, y: 40.74, w: 43.51, h: 22.9, rate: RATES.fore, rotate: 2,
          caption:
            "Attendance at in-person singles events increased 42% year-over-year, as Gen Z and Millennials burn out on apps. The format mirrors Love is Blind.",
          source:
            "https://nypost.com/2026/01/14/lifestyle/nyc-singles-ditch-dating-apps-for-new-love-is-blind-style-irl-event/",
        },
        {
          id: "s3-bottega",
          layer: "image 390",
          src: `${S}/s3-bottega-hands.webp`,
          alt: "Bottega Veneta “Craft is Our Language” campaign image, two hands meeting in woven leather sleeves",
          x: 2.6, y: 66.23, w: 58.47, h: 32.74, rate: RATES.mid, rotate: -1,
          caption:
            "Bottega Veneta’s 2025 campaign “Craft is Our Language” was designed to draw attention to handmade craft, care and intention rather than branding.",
          source: "https://www.youtube.com/watch?v=U0sb6djcrVE",
        },
      ],
      words: [
        { id: "s3-w1", text: "analog", x: 80, anchor: "center", y: 18.93, color: "rgba(254,243,196,0.7)", size: 50, rate: RATES.fore, font: "azeret" },
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
