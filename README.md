# US Trends 2027 Microsite

A microsite presenting a US point of view on two national trends for 2027, produced by Accenture Song's Design & Digital Products (D&DP) practice.

> **Type:** Web experience · **Started:** 2026-07-31

## Status

In progress — content written, site not yet built.

## Folder map

| Path | What lives here |
|---|---|
| `CLAUDE.md` | Agent routing — tells Claude which file to read for a given task |
| `context/CONTEXT.md` | Background, problem, audience, goals/non-goals, constraints, glossary |
| `context/DECISIONS.md` | Running log of key decisions and why |
| `context/INGESTION.md` | Dated log of files added to the project |
| `context/project-context.txt` | Original project brief |
| `design/design.md` | Visual identity, design tokens, and full CSS component reference |
| `materials/` | Drop zone for raw assets — brand files, PDFs, images, exports |
| `pages/` | Page content — Home, Trend 1, Trend 2, Methodology, Regional Trends |

## Site pages

| Page | File |
|---|---|
| Home | `pages/home.md` |
| Trend 1 — Signed by Yours Truly | `pages/trend-1.md` |
| Trend 2 — Give Me the Receipts | `pages/trend-2.md` |
| Methodology | `pages/methodology.md` |
| Regional Trends | `pages/regional-trends.md` |

## Tech stack

Framework not yet initialized. _TBD_ — run `/prez-proj deploy` to set up Next.js + GitHub + Vercel.

## Working with documents

Drop files (PDF, Word, PowerPoint, images, etc.) into any content folder (`context/`, `design/`,
`research/`, `materials/`) — then run `/prez-proj ingest` or just keep working (the next task picks
them up automatically via the CLAUDE.md pre-flight).

## Design tooling

This project is wired to consult these design skills/plugins before any UI work
(see `CLAUDE.md` → _MANDATORY PRE-FLIGHT_):
`/high-end-visual-design`, `/ui-ux-pro-max`, `/ui-animation`, `/accessibility`, and the `frontend-design` plugin.

All four skills are bundled with `prez-proj` at `~/.claude/skills/prez-proj/bundled-skills/` and can
be installed from there. Install the plugin with `/plugin install frontend-design@claude-plugins-official`.
Re-run `/prez-proj design-tools` any time to (re)wire this and check what's installed.

## Next steps

- [ ] Build the site — initialize framework (`/prez-proj deploy` or manually)
- [ ] Drop any brand assets or reference images into `materials/`
- [ ] Fill in stakeholders in `context/CONTEXT.md`
- [ ] Log build decisions in `context/DECISIONS.md`
- [ ] Install design tooling — `/prez-proj design-tools`

---
<sub>Scaffolded with the `prez-proj` skill.</sub>
