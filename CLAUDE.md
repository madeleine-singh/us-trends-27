<!-- scaffolded by prez-proj v1.5.1 -->
# US Trends 2027 Microsite

A microsite presenting a US point of view on two national trends for 2027, produced by Accenture Song's D&DP practice. Runs as a live presentation and as an async reference artifact.

---

## ⚠ MANDATORY PRE-FLIGHT — run this before starting ANY task

This block is not optional. Before responding to any build, design, or implementation request,
complete every applicable step below. Do not skip steps because files look empty or placeholders
are present — read them anyway and note what's missing.

### 1. Read context files
- [ ] Read `context/CONTEXT.md` — understand the project problem, audience, goals, and constraints.
- [ ] Read `context/DECISIONS.md` — check what has already been decided; don't re-litigate it.

### 2. Read the design tokens
- [ ] **Read `design/design.md` in full.** This is the visual source of truth. All colors,
      typography, spacing, and component decisions must come from here, not from defaults or guesses.
      The file contains both the google-labs token schema (YAML front matter + canonical sections)
      and the full CSS reference derived from live observation of accenture.com (July 2026).

### 3. Scan & ingest new files
- [ ] **Detect newly added files.** Compare the files in the content folders (`context/`, `design/`,
      `research/`, `materials/`) against the rows in `context/INGESTION.md`. Any file not yet logged
      is new — **ingest it before doing the task:** convert documents to markdown (original →
      `<folder>/original/`, `.md` alongside), catalog media/assets in place, link existing markdown,
      then append a dated row per file to `context/INGESTION.md`. Run `/prez-proj ingest` if you'd
      rather do this as a standalone pass.
- [ ] List the contents of `materials/`. Check `materials/MATERIALS.md` for a catalog if it exists.
- [ ] **Read the converted `.md`, not the binary.** Documents (PDF/Word/PowerPoint/Excel/etc.) are
      converted to markdown; the original lives in `<folder>/original/` and the `.md` sits alongside.
      Read the `.md`.

### 4. Invoke design skills (UI/design/layout tasks only)
Before writing any UI code, layout, component, or animation, invoke the relevant skill:

| Task | Required skill |
|---|---|
| Visual craft, "feel", card structure, fonts, shadows | `/design-taste-frontend` |
| Layout, UX patterns, color system, type pairing | `/ui-ux-pro-max` |
| Motion, transitions, springs, micro-interactions | `/ui-animation` |
| Implementing frontend components | `/high-end-visual-design` |
| **Any UI work** — contrast, font size, ARIA, keyboard nav | `/accessibility` |

**Do not write a single line of UI code before invoking the relevant skill(s).** `/accessibility`
is required alongside every other design skill — it is not a separate pass done after the fact.
If a skill isn't installed, say so explicitly and ask the user before proceeding without it.

### 5. Accessibility hard constraints (non-negotiable)
These apply to every component, every time — no exceptions for aesthetics:

- **Font sizes:** Body copy ≥ 16px. Labels/captions ≥ 14px for informational text. Eyebrow labels
  (11px) and flip card body (13px) are acceptable per the design spec for their specific roles.
- **Contrast:** Normal text ≥ 4.5:1. Large text (≥24px or ≥18.67px bold) ≥ 3:1. UI components
  (focus rings, active borders) ≥ 3:1. On dark backgrounds: body text minimum `white/45`;
  `white/30` only for large/bold text; `white/28` is footer fine print only.
- **Focus styles:** Never `outline: none` without a visible replacement. All interactive elements
  (flip cards, timeline dots, nav links, CTAs) must have visible focus states.
- **Motion:** Flip card rotation and timeline tooltip animation must both check
  `prefers-reduced-motion`. Under reduced motion: show flip card back face immediately; skip
  tooltip translate.
- **Semantics:** One `<h1>` per page. Never skip heading levels. Flip cards are `<button>` elements
  with `aria-pressed` or `aria-expanded`. Timeline tooltips accessible via keyboard.

---

## Routing table

| When the task is about… | Read this file |
|---|---|
| Project background, scope, problem, audience, goals/non-goals, glossary | `context/CONTEXT.md` |
| Why a past choice was made / decision history | `context/DECISIONS.md` |
| What files were added / ingested and when | `context/INGESTION.md` |
| Colors, typography, spacing, components, visual identity, CSS values | `design/design.md` |
| Designing or implementing any UI, layout, screen, or motion | `design/design.md` + design skills above |
| Page content (Home, Trend 1, Trend 2, Methodology, Regional Trends) | `page-content/<page>.md` |
| Brand files, PDFs, images, exports, raw assets | `materials/MATERIALS.md` + scan `materials/` |

## Tech stack & deployment

- **Framework:** Next.js 15 (App Router, TypeScript, Tailwind CSS)
- **Local dev:** `npm run dev` → http://localhost:3000
- **Build:** `npm run build && npm start`
- **Repo:** GitHub — https://github.com/madeleine-singh/us-trends-27
- **Deploy:** _TBD_ (Vercel — not yet connected)

Environment:
- `.env.local` for local secrets (never committed)
- `vercel env` to manage production/preview env vars

> To finish deployment setup: create a GitHub repo and connect Vercel. Run `/prez-proj deploy` or ask Claude to walk through it.

## Rules

- `design/design.md` is the **source of truth for visual tokens and component CSS**. Don't introduce
  competing token definitions or override them with framework defaults.
- **Brand basis = Accenture Song visual system.** Apply the tokens and rules in `design/design.md`
  exactly. Key non-negotiables: no border-radius anywhere; serif for editorial/display, sans for
  functional; purple as accent only (never a large background fill); all text on dark backgrounds
  uses `rgba(255,255,255,x)`.
- **Trend names are proper nouns.** Always: "Signed by Yours Truly" and "Give Me the Receipts."
- **Do not display internal dates on the site.** The August 7 preview and August 13 share date are
  context only — they must not appear in any page content, footer, or metadata.
- **`_TBD_` means "not yet decided / needs info."** Never silently invent content to replace it —
  ask the user or flag the gap.
- Treat existing authored (non-`_TBD_`) content as authoritative; don't overwrite it without asking.
- When you make a notable scope or design decision, append a row to `context/DECISIONS.md`.
- New files dropped into `materials/` should be cataloged in `materials/MATERIALS.md`.
- **Document conversion.** When a document (PDF, Word `.docx`, PowerPoint `.pptx`, Excel `.xlsx`,
  RTF, HTML, etc.) is added to any content folder: convert it to markdown with **`/markdown-converter`**,
  move the original into that folder's `original/` subfolder, write the converted `<name>.md`
  alongside, and reference the `.md` everywhere — never the binary.
- **Log every ingested file.** Each converted/cataloged/linked file gets one dated row in
  `context/INGESTION.md`. Don't duplicate rows; don't re-convert when `.md` exists and original is
  unchanged.
- If you skipped the pre-flight, stop and do it now before continuing.
