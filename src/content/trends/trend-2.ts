import type { TrendContent } from "./types";

/* ──────────────────────────────────────────────────────────────
   Trend 2 — Give Me the Receipts.

   Ported from the Figma frame node 170:557 (Aug 2026 redesign) and the
   card component node 356:683 (trend=trend 2 variants).

   Drop coordinates are percentages of each signal's stage box. Trend 2's
   collages aren't one contiguous group per signal like Trend 1's — Figma
   scatters each signal's photos across the signal's own "Images" sub-frame
   plus a couple of stray top-level rectangles (Signal 3 especially). Each
   drop's percentage is still computed the same way: absolute Figma position
   minus the leading gap reserved for the heading, divided by the trimmed
   collage box.

   Captions and source links come from `materials/photos-library.md`, joined
   by Figma layer name exactly as in Trend 1. One correction: the sheet lists
   "tech's mass layoffs" under layer `vitaly-gariev-PsV8ypwsd-0-unsplash`,
   but no such layer exists in the frame — the image actually placed there
   (`Screenshot 2026-08-17 at 3.40.17 PM 1`) is unmistakably that same
   headline screenshot, so it's wired to that row instead of left blank.
   The "Knicks win" photo (image 393) has a caption but the sheet's link
   field reads "source: Audrey's iPhone (no link necessary)" — not a URL, so
   that drop carries no `source` and doesn't flip its inner content to a link.
   ────────────────────────────────────────────────────────────── */

const S = "/trend-2/signals";
const C = "/trend-2/cards";

/* Parallax rates, reused from Trend 1's Figma annotation (node 110:3067). */
export const RATES = { back: 0.05, mid: 0.12, fore: 0.2, front: 0.3 } as const;

export const trend2: TrendContent = {
  slug: "trend-2",
  metaTitle: "Give Me the Receipts — US Trends 2027",
  metaDescription:
    "Consumers are reassessing who and what still serves them. Trust is no longer given. It must be earned, proven, and continually reinforced.",

  hero: {
    kicker: "D&DP News & Trends",
    presents: "presents",
    /* Figma (node 170:563) sets this "Give me the receipts!!!" in a typed,
       lowercase display face — but CLAUDE.md pins the trend name as a proper
       noun everywhere on the site, so the copy here stays "Give Me the
       Receipts" and only the typeface/treatment follow the frame. */
    title: "Give Me the Receipts",
    backdrop: "/trend-2/hero-receipts.webp",
  },

  /* Copy matches Figma node 170:571 exactly (em dash swapped for a period
     per the no-em-dash house rule), replacing the earlier page-content
     draft — the redesign tightened it. */
  coreThought: [
    "Consumers are reassessing who and what still serves them.",
    "Trust is no longer given. It must be earned, proven, and continually reinforced.",
  ],

  timeline: {
    eyebrow: "How we got here",
    title: "The timeline",
    caption:
      "Distrust used to be something felt in response to specific moments: a scandal, a betrayal, a single bad decision. Now, after so many negative moments, distrust has become the default.",
    disclaimer: "Not a measured index",
    chart: "trust",
  },

  /* Copy and photo (an aerial shot of a 2026 immigration-enforcement protest)
     both match Figma node 170:581 exactly. */
  intro: {
    title: "What we saw across America",
    lede: "Our research across the United States revealed a population compelled to act on issues that had become too embedded in the fabric of daily life to ignore or opt out of.",
    backdrop: "/trend-2/what-we-saw-backdrop.webp",
    strong: true,
  },

  signals: [
    {
      id: "signal-1",
      eyebrow: "Signal 1",
      title: "Institutional trust bottoms out",
      blocks: [
        [
          "Americans in every state started the year directly feeling the negative effects of government institutional failures. The cracks showed up in ordinary moments. Travelers stood in hours-long airport security lines, the result of a congressional funding standoff that left TSA officers working without pay for weeks. Intensified immigration enforcement disrupted families and businesses in neighborhoods across the country, with more than 65,000 people in ICE detention as of July and more than 356,000 deportations estimated so far. Business owners reported lost revenue directly because of ICE activity, and city police budgets were strained by enforcement-related overtime.",
        ],
        [
          "People pushed back where they could. Communities across the US protested local data center development, halting or delaying roughly 75 projects worth roughly $130 billion in just the first three months of the year. And Democratic Socialists of America more than doubled its membership to over 120,000 by July, partially fueled by the actions and popularity of NYC mayor Zohran Mamdani demonstrating that viable, effective leadership is possible outside of the two major political parties. These are just some of the national-level events that really convinced people they can no longer assume that large institutions are competent, neutral, or acting in their interest. Beyond that, they have unified people in common causes and built solidarity that people feel compelled to act on.",
        ],
      ],
      stage: { width: 527, height: 1379 },
      drops: [
        {
          id: "s1-govt-shutdown",
          layer: "Screenshot 2026-08-17 at 3.18.39 PM 1",
          src: `${S}/s1-govt-shutdown-headline.webp`,
          alt: "Washington Post headline on the longest government shutdown in US history",
          x: 0, y: 0, w: 43.83, h: 20.96, rate: RATES.back, rotate: -1.5,
          source: "https://www.washingtonpost.com/business/2025/11/05/longest-government-shutdown-trump-us-history/",
        },
        {
          id: "s1-knicks",
          layer: "image 393",
          src: `${S}/s1-knicks-win.webp`,
          alt: "New Yorkers celebrating a Knicks win, climbing onto parked buses amid confetti",
          x: 3.04, y: 23.14, w: 39.85, h: 23.28, rate: RATES.fore, rotate: 2,
          caption:
            "Caught mid-celebration, New Yorkers climbing onto parked buses and scaling any surface that would hold people. With so much of the news cycle stuck on the negative, a Knicks win became a rare, uncomplicated moment uniting people together. (Photo: Audrey Cheng)",
        },
        {
          id: "s1-ice-protest",
          layer: "colin-lloyd-Nr9Q-EwlQkY-unsplash 1",
          src: `${S}/s1-ice-protest.webp`,
          alt: "Crowd holding signs at a protest against immigration enforcement",
          x: 53.51, y: 7.40, w: 42.51, h: 21.32, rate: RATES.mid, rotate: -2,
          caption:
            "Thousands filled Foley Square in late January 2026 as part of a nationwide “no work, no school, no shopping” strike against the administration's immigration crackdown. Businesses across the country closed for the day in solidarity.",
          source: "https://abc7ny.com/post/ice-national-shutdown-protests-expected-nyc-amid-calls-strike-trumps-immigration-policies/18508369/",
        },
        {
          id: "s1-travel-hell",
          layer: "Screenshot 2026-08-17 at 3.14.42 PM 1",
          src: `${S}/s1-travel-hell-headline.webp`,
          alt: "New York Post headline on travelers stuck in “travel hell” during the shutdown",
          x: 50.09, y: 34.81, w: 49.15, h: 21.61, rate: RATES.front, rotate: 1.5,
          source: "https://nypost.com/2025/11/10/us-news/passengers-across-the-country-stuck-in-travel-hell-as-government-shutdown-takes-toll-on-airports/#1",
        },
        {
          id: "s1-quitgpt",
          layer: "nathan-kuczmarski-TGUOuWKenfA-unsplash 1",
          src: `${S}/s1-quitgpt-protest.webp`,
          alt: "Protest signs reading “AI sucks ass” and “quit GPT”",
          x: 3.04, y: 53.52, w: 39.66, h: 10.44, rate: RATES.back, rotate: -1,
          caption:
            "The #QuitGPT boycott gathered more than a million pledges within days of OpenAI's February 2026 Pentagon deal, turning a single contract into a referendum on which AI companies deserve public trust.",
          source: "https://www.technologyreview.com/2026/02/10/1132577/a-quitgpt-campaign-is-urging-people-to-cancel-chatgpt-subscriptions/",
        },
        {
          id: "s1-tsa",
          layer: "Screenshot 2026-08-17 at 3.22.17 PM 1",
          src: `${S}/s1-tsa-quitting-headline.webp`,
          alt: "Headline: TSA officers are quitting as a funding standoff forces them to staff airports without pay",
          x: 50.09, y: 58.74, w: 52.75, h: 5.51, rate: RATES.fore, rotate: 1,
          source: "https://apnews.com/article/tsa-lines-airport-wait-times-shutdown-5b1abfe9f0ec32475fe2bdad88dd9174",
        },
        {
          id: "s1-mamdani",
          layer: "mamdani",
          src: `${S}/s1-mamdani.webp`,
          alt: "Zohran Mamdani waving beside a companion amid confetti at his inauguration",
          x: 0, y: 72.66, w: 100, h: 27.34, rate: RATES.mid, rotate: -1.5,
          caption:
            "Zohran Mamdani was sworn in as New York City's mayor at midnight on January 1, 2026, becoming its first Muslim mayor. He took office promising to govern “expansively and audaciously” for a city that elected a democratic socialist.",
          source: "https://www.bbc.com/news/articles/czd782pjgq3o",
        },
      ],
      words: [
        { id: "s1-w1", text: "disillusionment", x: 3, y: 64.5, color: "#ff83ec", size: 22, rate: RATES.fore, font: "martian" },
        { id: "s1-w2", text: "protests", x: 12.33, y: 48.59, color: "#ff3d41", size: 44, rate: RATES.front, font: "kokoro" },
        { id: "s1-w3", text: "reactive feelings", x: 21.63, y: 67.08, color: "#60a5fa", size: 36, rate: RATES.back, font: "sans" },
      ],
    },
    {
      id: "signal-2",
      eyebrow: "Signal 2",
      title: "Financial security slips",
      blocks: [
        [
          "Financial strain had a different texture in 2026 than in previous years. People were uniquely aware that cost increases were caused by political action. Tariffs pushed prices onto consumers in ways that were hard to ignore: appliances and durable goods up an estimated 4.5%, clothing and groceries up around 5.6%. When gas prices climbed due to US military action affecting global oil supply, about 20% of drivers changed their routines just to avoid paying more. Housing affordability continued to worsen, with a record 49% of renters and 24% of homeowners being cost-burdened, spending more than 30% of their income on rent and utilities. Home insurance premiums are on track for a fifth consecutive year of increases, projected to rise another 4% after jumping 12% in 2025.",
        ],
        [
          "The job market added its own anxiety. Just 28% of workers believed it was a good time to find a quality job, down from 70% only a few years earlier. By mid-year, 57% described themselves as “job hugging,” staying put out of fear rather than satisfaction. Many worry that AI will replace their role. The response to financial strain was methodical: 61% of consumers changed how much food they bought because of rising prices, with cuts concentrated in snacks, beef, and alcohol. 41% canceled a streaming subscription in the past six months. These are just some of the ways that consumers are making every spending decision count.",
        ],
      ],
      stage: { width: 527, height: 1277 },
      drops: [
        {
          id: "s2-tariffs-word",
          layer: "rising tariffs",
          src: `${S}/s2-gas-prices.webp`,
          alt: "Gas station price sign",
          x: 70.59, y: 10.89, w: 32.26, h: 25.06, rate: RATES.mid, rotate: 2,
          caption:
            "The national average price of gas topped $4.50 a gallon in May 2026, the highest since 2022, after the U.S.-Iran conflict disrupted oil supply. Drivers in California paid over $6 a gallon.",
          source: "https://www.newsweek.com/us-gas-prices-rise-above-4-50-dollars-map-shows-price-per-state-11917261",
        },
        {
          id: "s2-housing-bill",
          layer: "Screenshot 2026-08-17 at 3.50.48 PM 1",
          src: `${S}/s2-housing-bill-headline.webp`,
          alt: "PBS headline: the new housing bill is historic, experts say it may fall short for renters most in need",
          x: 0, y: 5.25, w: 65.28, h: 25.06, rate: RATES.front, rotate: -1.5,
          source: "https://www.pbs.org/newshour/nation/the-new-housing-bill-is-historic-experts-say-it-may-fall-short-for-renters-most-in-need",
        },
        {
          id: "s2-bay-area-layoffs",
          layer: "Screenshot 2026-08-17 at 3.57.27 PM 1",
          src: `${S}/s2-bay-area-layoffs-headline.webp`,
          alt: "ABC7 headline on Bay Area layoffs leading unemployed people on a hiking journey",
          x: -1.33, y: 37.75, w: 76.66, h: 18.95, rate: RATES.back, rotate: 1,
          source: "https://abc7news.com/post/unpto-bay-area-layoffs-lead-unemployed-people-new-hiking-journey-search-community-tough-job-market/19038940/",
        },
        {
          id: "s2-tech-layoffs",
          layer: "Screenshot 2026-08-17 at 3.40.17 PM 1",
          src: `${S}/s2-tech-layoffs-headline.webp`,
          alt: "Headline: tech's mass layoffs are hiding a much scarier problem, and AI is uncovering it",
          x: 18.03, y: 59.59, w: 81.98, h: 13.47, rate: RATES.fore, rotate: -1,
          source: "https://fortune.com/2026/03/25/workers-anxious-scared-insecure-ai-adp-global-survey/",
        },
        {
          id: "s2-underconsumption",
          layer: "Screenshot 2026-08-17 at 4.00.27 PM 1",
          src: `${S}/s2-underconsumption-headline.webp`,
          alt: "Article on underconsumption core challenging consumer culture",
          x: 0, y: 82.77, w: 75.33, h: 17.23, rate: RATES.mid, rotate: 1.5,
          source: "https://theconversation.com/understanding-underconsumption-core-how-a-new-trend-is-challenging-consumer-culture-235417",
        },
      ],
      words: [
        { id: "s2-w1", text: "rising tariffs", x: 50.09, y: 0, color: "#ffb218", size: 34, rate: RATES.front, font: "kokoro" },
        { id: "s2-w2", text: "tech layoffs", x: 0.95, y: 32.34, color: "#05f2db", size: 38, rate: RATES.back, font: "sans" },
        { id: "s2-w3", text: "underconsumption core", x: 22.96, wrapAt: 55, y: 76.74, color: "#e1b98d", size: 32, rate: RATES.fore, font: "silkscreen" },
      ],
    },
    {
      id: "signal-3",
      eyebrow: "Signal 3",
      title: "Rerouting where trust is placed",
      blocks: [
        [
          "Amidst declining trust in institutions, a flood of AI-generated content, and an increasingly noisy information landscape, people continue to feel skeptical about what they see and read online. Trust in traditional news media has been declining for years, and in 2026, it fell to one of its lowest points on record: only 25% of Americans said they trusted the news most of the time. Today, 43% of adults and 57% of teens get news from independent creators alongside traditional sources. In health specifically, 4 in 10 adults, and half of adults under 50, turn to influencers or podcasts for wellness information, most with no formal credentials. Part of this stems from declining trust in government health agencies, but beyond that, they are drawn in by a sense of relatability, perceived authenticity and transparency that they don't feel traditional outlets provide.",
        ],
        [
          "In the dating world, the search for authentic human connection has become harder: one in four Americans say they've encountered a fake profile or an AI-generated bot while dating online. Many singles have gravitated toward in-person dating and matchmaking, reflected in Tinder and Bumble both launching in-person event formats in 2026. Others have embraced AI companionship instead, drawn by relationships that are always available, never judge, and never demand anything in return. In the first quarter of 2026, Americans spent roughly 705 million hours on AI companion apps, compared to about 280 million on dating apps, a sign of just how many people are looking for connection wherever they can find it. With people and information being harder to verify, trust had to move toward independent voices, in-person spaces, and AI companions, wherever people felt it is earned rather than assumed.",
        ],
      ],
      stage: { width: 527, height: 1537 },
      drops: [
        {
          id: "s3-ai-fake-news",
          layer: "Screenshot 2026-08-17 at 4.20.06 PM 1",
          src: `${S}/s3-ai-fake-news.webp`,
          alt: "Placeholder frame for an AI-generated fake news clip",
          x: 0, y: 0, w: 27.32, h: 12.49, rate: RATES.back, rotate: -1.5,
          caption:
            "Within the first week of 2026, AI-generated images and videos were already reshaping how people processed breaking news, from Venezuela to Minneapolis. Researchers warn it may soon be impossible to tell real footage from fake.",
        },
        {
          id: "s3-media-trust",
          layer: "Screenshot 2026-08-17 at 4.34.28 PM 1",
          src: `${S}/s3-media-trust-headline.webp`,
          alt: "Gallup headline on Americans' trust in mass media hitting a new low",
          x: 34.72, y: 0, w: 62.81, h: 19.26, rate: RATES.fore, rotate: 1.5,
          source: "https://news.gallup.com/poll/695762/trust-media-new-low.aspx",
        },
        {
          id: "s3-eva-ai-cafe",
          layer: "eva-ai-cafe-1",
          src: `${S}/s3-eva-ai-cafe.webp`,
          alt: "EVA AI pop-up cafe for people to bring AI companions on a date",
          x: 23.91, y: 27.07, w: 75.33, h: 17.31, rate: RATES.mid, rotate: -1,
          caption:
            "EVA AI hosted a pop-up where human users could take their AI companions on a date ahead of Valentine's Day.",
          source: "https://www.usatoday.com/story/life/health-wellness/2026/02/14/theyre-dating-ai-characters-they-have-big-valentines-day-plans/88663687007/",
        },
        {
          id: "s3-tiktok",
          layer: "collabstr-0Vk7HEjWLDE-unsplash 1",
          src: `${S}/s3-tiktok.webp`,
          alt: "Phone showing the TikTok app propped against a stand",
          x: 0, y: 67.92, w: 44.97, h: 10.28, rate: RATES.front, rotate: 2,
          caption:
            "1 in 5 U.S. adults now regularly get news from TikTok, up from just 3% in 2020. Among adults under 30, that figure is 43%, more than YouTube or Facebook. Trust hasn't disappeared, it's just moved platforms.",
          source: "https://www.pewresearch.org/short-reads/2025/09/25/1-in-5-americans-now-regularly-get-news-on-tiktok-up-sharply-from-2020/",
        },
        {
          id: "s3-news-influencers",
          layer: "Screenshot 2026-08-17 at 4.27.42 PM 1",
          src: `${S}/s3-news-influencers-headline.webp`,
          alt: "Infographic on the rise of news influencers",
          x: 49.53, y: 61.42, w: 50.47, h: 17.37, rate: RATES.back, rotate: -2,
          source: "https://apnews.com/article/poll-social-media-politics-teenagers-influencers-ai-1d610a09ca6f929c53351c4522d67f14",
        },
        {
          id: "s3-tinder",
          layer: "Screenshot 2026-08-17 at 4.18.07 PM 1",
          src: `${S}/s3-tinder-headline.webp`,
          alt: "Headline on Tinder wanting users to meet people offline",
          x: 0, y: 53.61, w: 100, h: 5.99, rate: RATES.mid, rotate: 1,
          source: "https://www.businessinsider.com/tinder-ceo-interview-astrology-mode-irl-events-ai-chemistry-safety-2026-3",
        },
        {
          id: "s3-bernie",
          layer: "image 382",
          src: `${S}/s3-bernie-sanders.webp`,
          alt: "Bernie Sanders being interviewed on camera",
          x: 0, y: 80.68, w: 100, h: 19.32, rate: RATES.fore, rotate: -1.5,
          caption:
            "As trust in traditional outlets keeps falling, politicians are reaching voters through new formats, from podcasts to on-camera interviews with AI. Bernie Sanders tried this with Anthropic's Claude, but the exchange became a case study in AI sycophancy instead, the chatbot reversing its answer the moment he pushed back.",
          source: "https://www.youtube.com/watch?v=h3AtWdeu_G0&t=48s",
        },
      ],
      words: [
        { id: "s3-w1", text: "swipe fatigue", x: 1.13, y: 20.5, color: "rgba(248,113,113,0.7)", size: 34, rate: RATES.front, font: "baloo" },
        { id: "s3-w2", text: "AI companionship", x: 0, wrapAt: 55, y: 45.74, color: "#c2a3ff", size: 32, rate: RATES.back, font: "comic" },
      ],
    },
  ],

  expect: {
    title: "What to expect in 2027",
    paragraphs: [
      "In 2027, people will approach systems and services from a position of baseline skepticism rather than baseline trust.",
      "Cultural relevance will no longer be enough to guarantee credibility or loyalty. In some cases, institutional scale may create even greater scrutiny as people question who benefits, how decisions are made, and whether the system is acting in their interest.",
      "Trust will become conditional and continuously reassessed. This will change how people evaluate nearly every relationship in their lives. In this environment, trust will not be earned through messaging alone. It will be built through visible proof, consistent value, and demonstrated accountability.",
    ],
  },

  implications: {
    title: "What this means for brands and designers",
    hint: "Hover, focus or tap a card to read more.",
    cards: [
      {
        number: "01",
        title: "Replace Authenticity Claims with Evidence",
        body: `If you claim "made by humans" or "no AI," be ready to prove it. Getting caught overstating that claim does more damage than never making it. The bigger the claim, the stronger the proof needs to be.`,
        background: `${C}/01-image.webp`,
        fill: "image",
      },
      {
        number: "02",
        title: "Design for Continuous Re-evaluation",
        body: "Winning someone over isn't a one-time job. Build for ongoing renewal, not a single decision point. Loyalty should be treated as something renewed, not something permanently secured.",
        background: `${C}/02-gradient.webp`,
        fill: "gradient",
      },
      {
        number: "03",
        title: "Make Value Impossible to Miss",
        body: "Keep reminding customers of the value they're getting. If it's easy to forget why they're paying, it's easy to cancel.",
        background: `${C}/03-image.webp`,
        fill: "image",
      },
      {
        number: "04",
        title: "Design for Financial Reality",
        body: `"Empathizing with your audience" isn't specific enough. Brands need to show they understand real financial pressure through flexible tiers, transparent pricing, pause options, and lower-cost alternatives, while avoiding manipulative urgency, hidden fees, or features that lock people into overspending.`,
        background: `${C}/04-gradient.webp`,
        fill: "gradient",
      },
      {
        number: "05",
        title: "Respect Boundaries and Give Real Choice",
        body: "Don't force something new, especially AI, on people without a clear, easy opt-out. Introducing it without consent is often what triggers backlash, so refusal should never be confusing, punitive, or hard to reverse.",
        background: `${C}/05-image.webp`,
        fill: "image",
      },
      {
        number: "06",
        title: "Strengthen the Relationship Beyond Transaction",
        body: "As trust shifts away from large institutions, brands should let customers see the people and communities behind the organization, through local participation, access to experts, or peer-learning spaces, to feel more accountable to the people it serves.",
        background: `${C}/06-gradient.webp`,
        fill: "gradient",
      },
    ],
  },

  stops: [
    { id: "hero", label: "Opening" },
    { id: "core-thought", label: "Core thought" },
    { id: "timeline", label: "The timeline" },
    { id: "what-we-saw", label: "What we saw" },
    { id: "signal-1", label: "Institutional trust bottoms out" },
    { id: "signal-2", label: "Financial security slips" },
    { id: "signal-3", label: "Rerouting where trust is placed" },
    { id: "expect-2027", label: "What to expect in 2027" },
    { id: "implications", label: "What this means" },
  ],
};

export default trend2;
