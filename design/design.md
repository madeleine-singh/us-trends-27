---
version: alpha
name: US Trends 2027 Microsite
description: Accenture Song editorial microsite — sharp, typographically confident, black-and-white canvas with purple as the sole accent
colors:
  primary: "#A100FF"         # Accenture brand purple — eyebrows, accents, CTAs, active states
  primary-dark: "#7500C0"    # Hover/pressed state for purple elements
  primary-light: "#E5B4FF"   # Sparingly, hover hints
  secondary: "#000000"       # Hero backgrounds, nav, footer, dark band sections
  neutral: "#FFFFFF"         # Default page background, card backgrounds
  surface-light: "#F5F5F5"   # Secondary sections, card grid backgrounds (gray-50)
  border: "#EBEBEB"          # Dividers, card borders (gray-100)
  border-subtle: "#D8D8D8"   # Inactive timeline dots, subtle borders (gray-200)
  text-muted: "#AAAAAA"      # Secondary labels (gray-400)
  text-body: "#767676"       # Body text on white, captions (gray-600)
  text-strong: "#333333"     # Body text in content sections (gray-800)
  on-primary: "#FFFFFF"
typography:
  h1:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(44px, 6.5vw, 88px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(32px, 4vw, 52px)"
    fontWeight: 600
    lineHeight: 1.08
  h3:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "clamp(16px, 1.5vw, 20px)"
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  eyebrow:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    textTransform: "uppercase"
    letterSpacing: "0.12em"
  label:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  sm: "0"    # No border-radius — Accenture's most distinctive pattern
  md: "0"
  lg: "0"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "80px"
  hero: "120px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "DM Sans, 13px, 700, uppercase, tracking 0.06em"
    rounded: "0"
    padding: "14px 28px"
    hover: "background {colors.primary-dark}"
  card:
    backgroundColor: "{colors.neutral}"
    rounded: "0"
    padding: "clamp(28px, 3.5vw, 44px)"
    borderTop: "3px solid {colors.border-subtle} → {colors.primary} on hover"
  flip-card:
    height: "300px"
    front: "background #000, eyebrow purple, h3 serif white"
    back: "background white, border 1px solid {colors.border}"
    transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)"
accessibility:
  contrast:
    body: "4.5:1"
    large-text: "3:1"
    ui-components: "3:1"
  typography:
    body-min: "1rem"
    label-min: "0.875rem"
  opacity-text:
    body-on-dark-min: "white/65"
    secondary-on-dark-min: "white/45"
    caption-on-dark-min: "white/30"
    decorative-only: "white/20"
---

<!--
This file follows the google-labs-code/design.md spec: YAML design tokens above + the canonical
sections below, in this order. It is the source of truth for visual identity.
The detailed CSS reference (all component values, exact rules) lives below in the "CSS Reference" section —
derived from live observation of accenture.com, July 2026.
When DESIGNING OR IMPLEMENTING UI, also invoke the project's design tooling
(see CLAUDE.md → "MANDATORY PRE-FLIGHT"): /high-end-visual-design, /ui-ux-pro-max,
/ui-animation, /accessibility, and the frontend-design plugin.
-->

## Overview

**Brand basis: Accenture Song** — the official Accenture visual system adapted for an editorial
microsite. This is not the standard Accenture.com template; it should feel like a Song studio
artifact: editorially confident, typographically precise, and distinctly not a slide deck.

The palette is near-monochromatic: black hero/nav/footer, white content sections, gray-50 utility
sections. Accenture purple (`#A100FF`) is the only accent — used on eyebrow labels, active nav
states, card hover borders, CTAs, and interactive elements. It never fills a large background area.
The typeface contrast — serif (Cormorant Garamond, standing in for GT Sectra Fine) for editorial
headlines and display; sans-serif (DM Sans, standing in for Graphik) for everything functional —
creates strong hierarchy without relying on color. No border-radius anywhere on the page.

The site serves two modes: live presentation and async reference. Design decisions support both —
flip cards and timeline tooltips reveal depth on interaction without demanding it.

**Inspiration:** Accenture.com (live site, observed July 2026).

**Avoid:** Rounded corners. Sans-serif hero headlines. Purple as a large background fill. Gray hex
values for text on dark backgrounds (use `rgba(255,255,255,x)` instead). Decorative animations that
don't serve navigation or comprehension.

## Colors

**Primary accent — Accenture purple**
- `#A100FF` — eyebrow labels, active nav underlines, CTA text, hover card borders, interactive elements, flip card eyebrows, timeline dot hover
- `#7500C0` — hover/pressed state for purple elements
- `#E5B4FF` — sparingly, hover hints only

**Canvas**
- `#000000` — hero sections, nav, footer, dark band callout sections, flip card front faces
- `#FFFFFF` — default content sections, card backgrounds, flip card back faces

**Grays**
- `#F5F5F5` — secondary/utility sections, card grid backgrounds
- `#EBEBEB` — dividers, card borders (visible as 2px between grid cells)
- `#D8D8D8` — subtle borders, inactive timeline dots
- `#AAAAAA` — secondary labels
- `#767676` — body text on white, captions (≥4.5:1 on white ✓)
- `#333333` — body text in content sections

**On dark backgrounds:** always use `rgba(255,255,255,x)` — never a gray hex.
- `rgba(255,255,255,0.88)` — core thought / inline quote
- `rgba(255,255,255,0.75)` — section body text on dark band
- `rgba(255,255,255,0.65)` — hero body text
- `rgba(255,255,255,0.55)` — nav links (inactive), flip card hint text
- `rgba(255,255,255,0.45)` — footer sub-labels (minimum for informational text on dark ✓)
- `rgba(255,255,255,0.28)` — footer disclaimer (fine print only)

## Typography

**Serif — Cormorant Garamond** (substituting GT Sectra Fine)
Role: editorial — H1, H2, hero headlines, card titles in primary grids, pull quotes, blockquotes.

**Sans-serif — DM Sans** (substituting Graphik, the Accenture brand typeface)
Role: functional — body copy, H3, labels, eyebrows, nav, buttons, captions, CTA text.

Rule: serif for editorial, sans for functional. Never mix. Never a sans-serif H1 on a hero.

| Role | Family | Size | Weight | Line-height |
|---|---|---|---|---|
| Display H1 (hero) | Serif | `clamp(44px, 6.5vw, 88px)` | 600 | 1.05 |
| Home hero H1 | Serif | `clamp(52px, 8.5vw, 116px)` | 600 | 1.05 |
| H2 (section) | Serif | `clamp(32px, 4vw, 52px)` | 600 | 1.08 |
| H3 (subsection) | Sans | `clamp(16px, 1.5vw, 20px)` | 600 | 1.3 |
| Primary card title | Serif | `clamp(26px, 2.8vw, 36px)` | 600 | 1.2 |
| Standard card title | Serif | `22px` | 600 | 1.2 |
| Body | Sans | `16px` (fixed) | 400 | 1.65 |
| Body lead | Sans | `clamp(15px, 1.3vw, 18px)` | 400 | 1.65 |
| Eyebrow | Sans | `11px` | 600 | — |
| CTA / button | Sans | `11–13px` | 700 | — |
| Caption | Sans | `12–13px` | 400 | — |

Eyebrow always precedes a heading — purple, uppercase, 11px, tracking 0.12em. No exceptions.
Font smoothing always set: `-webkit-font-smoothing: antialiased` on `body`.

## Layout

Base unit: 8px. All spacing in multiples of 8.

- Content max-width: `1280px`, centered with `margin: 0 auto`
- Horizontal padding: `clamp(24px, 5.5vw, 80px)`
- Vertical section padding: `clamp(64px, 9vw, 120px)`
- Nav height: `64px` fixed. All pages need `padding-top: 64px`.
- Grid gaps: `2px` between cells (the section background shows through — not a gutter)
- 3-col flip cards fall to 2-col at <900px, 1-col at <640px

## Elevation & Depth

Depth is expressed through background contrast and border-top accents — not shadows.

- Standard card: `border-top: 3px solid #D8D8D8` → `#A100FF` on hover
- Primary/trend card: `border-top: 3px solid #A100FF` always
- Section separation: alternating white / gray-50 / black. No `box-shadow` on content cards.

## Shapes

**No border-radius anywhere.** Applies to: cards, buttons, inputs, images, tooltips, flip cards — everything. This is the most distinctive Accenture pattern and must not be broken.

## Components

See the **CSS Reference** section below for exact values on every component.

Summary of key components: nav (fixed black, 64px, z-index 900), hero (black bg, eyebrow → serif H1 → rgba body text), standard card (white, border-top → purple on hover), primary card (purple border always), flip card (black front / white back, rotateY on click), timeline (3-node horizontal, hover tooltip), pull quote (serif italic, purple left border), footer (black, rgba text).

## Accessibility

### Contrast
- Body/label/caption text: **4.5:1 minimum** — `#767676` on white = 4.48:1 (borderline; prefer `#757575` or darker for pure body copy)
- Large text (≥24px or ≥18.67px bold): **3:1 minimum**
- UI components (focus rings, active borders): **3:1 minimum**
- On dark: `rgba(255,255,255,0.45)` on `#000` ≈ 7:1 ✓ minimum for informational text; `rgba(255,255,255,0.28)` is fine print only

### Font sizes
- Body copy: **16px minimum**
- Labels, captions: **14px minimum** for informational text
- Flip card back body: 13px acceptable (short descriptive content in known component)
- Eyebrow: 11px acceptable as structural label (not the sole conveyor of critical information)

### Focus styles
- Never remove `:focus-visible` without a visible replacement
- All interactive elements (flip cards, timeline dots, nav links, CTAs) need visible focus states
- Flip cards: each is a `<button>` with `aria-pressed` or `aria-expanded`; back-face text must be screen-reader accessible
- Timeline: tooltip content accessible via keyboard (focus on node → tooltip visible)

### Motion
- Flip card rotation: disable under `prefers-reduced-motion`, show back face immediately
- Timeline tooltip: skip translate animation under `prefers-reduced-motion`

### Semantics
- One `<h1>` per page; never skip heading levels
- `<nav>`, `<main>`, `<footer>` landmark elements for screen-reader navigation
- Icon-only buttons need `aria-label`

## Do's and Don'ts

**Do:**
- Use serif (Cormorant Garamond) for all editorial/display text — H1, H2, card titles, pull quotes
- Use `rgba(255,255,255,x)` for all text on dark backgrounds
- Apply purple border to primary cards always; standard cards only on hover
- Keep purple as accent only — eyebrows, borders, CTAs, active states
- Set generous bottom padding (80–120px) on timeline sections for tooltip height
- Use `clamp()` for fluid typography throughout
- Set font smoothing on `body`
- Use 2px grid gap (section background shows through)

**Don't:**
- Use border-radius anywhere
- Use a sans-serif H1 on any hero
- Use purple as a large background area
- Use gray hex values for text on dark backgrounds
- Exceed 1280px content width
- Use `transition: all`
- Skip the eyebrow before a section heading
- Display internal preview / share dates on the site

---

## CSS Reference

*All values below are derived from live observation of accenture.com (July 2026). These are the
authoritative component-level CSS values for this project.*

### Fonts

| Accenture font | Role | Substitute | Use for |
|---|---|---|---|
| GT Sectra Fine | Display / editorial serif | Cormorant Garamond | H1, H2, hero headlines, blockquotes |
| Graphik | UI / body sans-serif | DM Sans | Body, H3, H4, labels, nav, buttons |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-sans:  'DM Sans', -apple-system, system-ui, sans-serif;
```

### CSS color variables

```css
--purple:     #A100FF;
--purple-dk:  #7500C0;
--purple-lt:  #E5B4FF;
--black:      #000000;
--white:      #FFFFFF;
--gray-50:    #F5F5F5;
--gray-100:   #EBEBEB;
--gray-200:   #D8D8D8;
--gray-400:   #AAAAAA;
--gray-600:   #767676;
--gray-800:   #333333;
```

### CSS layout variables

```css
--max-w:      1280px;
--pad-x:      clamp(24px, 5.5vw, 80px);
--section-py: clamp(64px, 9vw, 120px);
--nav-h:      64px;
--ease:       0.28s cubic-bezier(0.4, 0, 0.2, 1);
```

```css
.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--pad-x);
}
body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: var(--black);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Navigation

```
Fixed, full-width, background: #000, border-bottom: 1px solid #1c1c1c
Height: 64px, z-index: 900
Brand name: left, white, font-weight: 700, font-size: 14px
Nav links: right, font-size: 11px, font-weight: 600, uppercase, letter-spacing: 0.08em, color: rgba(255,255,255,0.55)
Active: white text, border-bottom: 2px solid var(--purple)
Hover: white text
All pages: padding-top: var(--nav-h)
```

### Hero sections

```
Standard:
  background: #000
  padding: clamp(80px,11vw,148px) 0 clamp(64px,8vw,96px)
  eyebrow: purple, uppercase, 11px, 600, letter-spaced
  headline: serif, clamp(44px,6.5vw,88px), white, 600
  body: rgba(255,255,255,0.65), max-width: 580px, clamp(15px,1.3vw,18px)

Home (larger):
  padding: clamp(96px,13vw,180px) 0 clamp(64px,8vw,96px)
  headline: clamp(52px,8.5vw,116px)
```

### Section types

```
White:      background: #fff,         padding: var(--section-py) 0
Gray:       background: var(--gray-50), padding: var(--section-py) 0
Dark band:  background: #000, color: #fff, padding: var(--section-py) 0
            eyebrow: var(--purple), headline: white, body: rgba(255,255,255,0.75)

Section pattern (always in this order):
  1. <span class="eyebrow">Label</span> — purple, uppercase, 11px
  2. <h2>Headline</h2> — serif
  3. Body text — max-width: 760px
```

### Cards

```
Standard card:
  background: white, padding: clamp(28px, 3.5vw, 44px)
  border-top: 3px solid var(--gray-200) → purple on hover
  Inside: eyebrow, h3 (serif 22px), p (14px gray-600), CTA (11px uppercase black → purple on hover)

Primary card (trend / featured):
  Same + border-top: 3px solid var(--purple) always
  h3: clamp(26px, 2.8vw, 36px), CTA: always purple

Flip card:
  height: 300px, perspective: 1200px, cursor: pointer
  transition: transform 0.55s cubic-bezier(0.4,0,0.2,1)
  toggle class 'flipped' on click → rotateY(180deg)
  Front: background: #000, padding: 32px 28px, justify-content: flex-end
         eyebrow: purple 10px, h3: serif 22px white, hint: rgba(255,255,255,0.55) uppercase 10px
  Back:  background: white, border: 1px solid var(--gray-100)
         transform: rotateY(180deg), justify-content: flex-start
         eyebrow: purple 10px, p: 13px gray-800
Grid: repeat(3,1fr) → 2-col at <900px → 1-col at <640px
```

### Buttons

```
Primary:  background: var(--purple), color: white, padding: 14px 28px
          font-size: 13px, font-weight: 700, uppercase, letter-spacing: 0.06em
          hover: background var(--purple-dk)
Outline:  transparent, white text, border: 1px solid rgba(255,255,255,0.3), hover: border-color white
Dark:     background: #000, color: white, hover: background #333
Rule: no border-radius anywhere
```

### Timeline

```
Layout: horizontal flex, 3 nodes, connecting line between dots
Dot: 28px circle, border: 2px solid gray-200 → purple + filled on hover
Year label: 13px, 700, gray-600 → purple on hover
Sublabel: 12px, gray-400 (always visible, short descriptor)
Tooltip: appears below dot on hover
  background: #000, color: white, padding: 18px 20px, width: 280px
  pointer triangle: border-bottom-color #000, positioned above tooltip
  animation: opacity 0→1, translateY 4px→0, 0.2s ease
Section padding-bottom: 80–120px to accommodate tooltip height
```

### Pull quote / blockquote

```
font-family: serif, font-size: clamp(24px, 3vw, 42px), font-style: italic
font-weight: 400, line-height: 1.35, color: white (on dark bg)
border-left: 3px solid var(--purple), padding-left: 32px, max-width: 820px
```

### Core thought (inline in hero)

```
Same as blockquote but font-size: clamp(18px, 2vw, 26px)
color: rgba(255,255,255,0.88)
margin-top: 32px, padding-top: 28px
border-top: 1px solid rgba(255,255,255,0.14)
No left border
```

### Footer

```
background: #000, border-top: 1px solid #1c1c1c
padding: clamp(40px, 5vw, 64px) 0
Inner: flex, space-between, align flex-end, flex-wrap
Brand name: white, 13px, font-weight 700
Sub-label: rgba(255,255,255,0.45)
Copyright: rgba(255,255,255,0.45), text-align right
Disclaimer: border-top: 1px solid #1c1c1c, margin-top: 20px, padding-top: 16px
            font-size: 11px, color: rgba(255,255,255,0.28), max-width: 680px
```

### Transitions

```css
--ease: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
/* Apply to: color, background, border-color, transform, opacity, letter-spacing */
/* Do NOT apply to layout properties: width, height, padding */
```

### Key rules (non-negotiable)

1. No border-radius anywhere — not on cards, buttons, inputs, or images
2. 2px grid gaps — not gutters (section background shows through)
3. Serif for editorial, sans for functional — never mix
4. Purple as accent only — never a large background area
5. Eyebrow always precedes a heading — purple, uppercase, 11px, 600
6. Gray text on black — always `rgba(255,255,255,x)`, never a gray hex
7. Max content width 1280px — always centered with `margin: 0 auto`
8. Font smoothing — always `-webkit-font-smoothing: antialiased` on `body`
9. Fixed nav — always `position: fixed`, z-index 900+, pages always have `padding-top: 64px`
10. Transition all interactive states — never instant
