# Decisions — US Trends 2027 Microsite

Append-only log of notable scope, product, and design decisions. Newest at the bottom. Keep rows
short; link out to context/research/design files for detail. Don't rewrite past rows — supersede
them with a new row and mark the old one `Superseded`.

| Date | Decision | Why | Status |
|---|---|---|---|
| 2026-07-31 | Project scaffolded with `prez-proj` | Establish a repeatable structure | Active |
| 2026-07-31 | Flip cards chosen for brand/designer implications | Progressive reveal preferred over a list; keeps the section interactive in both live and async modes | Active |
| 2026-07-31 | Timeline tooltips (not inline text) for trend evolution | Keeps the timeline scannable; depth available on interaction without cluttering the layout | Active |
| 2026-07-31 | Accenture Song visual system (with Google Fonts substitutes for licensed typefaces) | Project is Accenture-internal; substitutes (Cormorant Garamond / DM Sans) match the visual roles of GT Sectra Fine / Graphik | Active |
| 2026-07-31 | Timeline and share dates are context-only — not shown on the site | Internal logistics; not relevant to the audience consuming the content | Active |
| 2026-08-05 | South has 3 regional trends (not 2); total is 11 not 10 | Confirmed by source PDF "Trends 2027 Pitches Combined" — South submitted Demise of the Monoculture, Neu-Urbanism and Agrario-Curiosity, and Technocratic Backlash and the Data Center War | Active |
| 2026-08-05 | Regional trend PDFs extracted to public/regional-trends/ as individual files | Gallery overlay on Methodology page displays each slide in an iframe on click | Active |
| 2026-08-13 | Scrollytelling Trend 1 built as a parallel route `/trend-1-scroll`; existing `/trend-1` and `/trend-2` left untouched | Requested as a copy so the current pages stay available for comparison and fallback | Active |
| 2026-08-13 | Alex Brush script typeface added for the Trend 1 scroll hero and watermark only | Figma frame 142:8559 specifies a script display face; user approved any similar script typeface, overriding the serif/sans pair in design.md for this one role | Active |
| 2026-08-13 | Word-drop accent palette introduced (`#05f2db`, `#60a5fa`, `#34d399`, `#ff50a0`, `#f87171`) | Taken from the Figma redesign; supersedes "purple is the only accent" from design.md for these annotation words. All five verified ≥5:1 on `#202020` | Active |
| 2026-08-13 | Purple gradient used as a large background fill on "What to expect in 2027" and "What this means" | Specified by the Figma redesign; supersedes design.md's "purple never a large background area" for these two sections | Active |
| 2026-08-13 | Three-node hover Timeline replaced on the scroll page by a self-signing SVG chart (Microtrend velocity vs Authorship signals, 2023–2027) | Figma annotation on node 110:29; y-axis is directional only, labelled "Not a measured index" | Active |
| 2026-08-13 | Signal images ported from Figma as provisional placeholders in `public/trend-1-scroll/` | Figma MCP asset URLs expire after 7 days; captions, source URLs and final files pending from the image spreadsheet | Active |
| 2026-08-13 | Section background changes cross-fade through full-width blend bands rather than cutting | User feedback: colour changes should happen gradually on scroll | Active |
| 2026-08-13 | Timeline curves generated as Catmull-Rom splines through the marker points; marker centres corrected to Figma dot centre (+4px, not the box corner) | Hand-drawn Béziers did not pass through the nodes, so PEAK/PATTERN/CROSSOVER floated off the lines. Now exact by construction, verified numerically | Active |
| 2026-08-13 | Chart line ends on an upward flick, not the "loop & tail" signature flourish | A self-intersecting loop reads as a rendering fault inside a plot area | Superseded |
| 2026-08-13 | Chart line ends in a cursive signature loop, generated parametrically and rotated onto the incoming stroke angle | Restores the "loop & tail" flourish in the Figma annotation (node 110:29). User reviewed three rendered alternatives and chose the small tight loop | Active |
| 2026-08-13 | Chart tooltip width set to 17% of the plot rather than a pixel value; cards moved into clear space with leader lines back to their markers | Markers sit 220 and 201 units apart in a 1060-unit viewBox, so any centred card under 19% cannot collide at any viewport size. Cards anchor on the edge nearest a curve so they grow away from it if text rewraps | Active |
| 2026-08-13 | Full-viewport sections use `calc(100svh - var(--nav-h))`, not `100vh` | `SiteShell` already offsets the fixed nav with `padding-top: var(--nav-h)`, so a `100vh` section overshoots by the nav height and clips its own bottom content. `svh` also protects against mobile browser chrome | Active |
| 2026-08-13 | Core thought and "What to expect in 2027" rebuilt as pinned scroll scenes | Both should reveal as the user scrolls through them rather than simply scrolling into view. Core thought builds word by word; the 2027 layers translate at the 0.05/0.12/0.2/0.3 rates from the Figma annotation | Active |
| 2026-08-13 | Chart markers and tooltips reveal individually as the drawing line reaches each one, keyed to arc-length fractions of each path | User feedback: nodes should appear one at a time as the line builds, not all at once at the end | Active |
