# Ravi Tomar — Personal Website

The professional website of **Ravi Tomar**, Founder, Chairman & Managing
Director of **CRL Diagnostics Pvt. Ltd.**

A light, editorial executive profile: warm ivory and white, charcoal and navy
type, a restrained gold accent, and very little motion.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS**
- **Cormorant Garamond** (headings) · **Inter** (body), via `next/font`
- **Lucide** icons, **next/image**, dynamic OpenGraph image, **Person** JSON-LD

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
src/
  app/                 layout (fonts, SEO, JSON-LD), page, og-image, robots, sitemap
  components/
    layout/            Navigation (sticky), Footer
    sections/          Hero · About · Journey · CrlDiagnostics · Philosophy ·
                       Recognition · Insights · Speaking · Contact
    ui/                Photo, SectionHeader, RevealObserver
  data/                profile · timeline · crl · awards · media · assets · sources
public/media/          hosted imagery + media-manifest.json (see media/README.md)
```

## Motion

Restrained and played once. Everything lives in `globals.css` (one easing curve,
`--ease-elegant`) plus two tiny client helpers.

- **Hero entrance** (CSS only): text rises in sequence, the portrait unveils
  upward, then the gold frame and credential card settle into place.
- **Scroll reveals**: `data-reveal` fades and rises 18px; groups stagger via
  `stagger(i)` from `src/lib/motion.ts`. Gold eyebrow rules draw in, and the
  timeline spine draws down (`data-reveal="line"`).
- **Figures** count up once when seen (`components/ui/CountUp.tsx`).
- **Hover**: cards lift 4px (`.lift`), button arrows nudge, the lead press photo
  zooms slightly, nav links get a gold underline.
- **Navigation**: thin gold reading-progress line and active-section highlight.

With `prefers-reduced-motion: reduce` none of this moves, and content stays
visible when JavaScript is off.

## Mobile

Designed phone-first where it matters; desktop layouts are unchanged.

- **Hero reading order** on phones: name and title → portrait → story and CTAs
  (a three-block grid that becomes two columns from `lg`).
- **Swipe rails** (`.rail` in `globals.css`) turn long card lists — awards and
  press stories — into snap-scrolling rows with a peek of the next card and a
  "Swipe" cue (`components/ui/SwipeHint.tsx`); they become grids from `sm` up.
- **Figures band** becomes compact rows; CRL pillars become icon rows.
- **Menu**: full-screen, numbered, current section marked, with contact CTAs.
  It sits outside the header because `backdrop-filter` would otherwise trap
  `position: fixed`.
- **Touch**: 44px+ tap targets, hover lifts only on hover-capable devices,
  press feedback on touch, safe-area padding (`viewport-fit=cover`), and a
  back-to-top button after 1.5 screens.

## Design tokens

| Token | Value | Use |
|---|---|---|
| `canvas` | `#F8F7F4` | Page background |
| `paper` | `#FFFFFF` | Alternate sections |
| `ink` | `#18202A` | Primary text |
| `slate` | `#5F6670` | Secondary text |
| `line` | `#E5E2DC` | Borders |
| `gold` | `#B08A45` | Rules, icons, small details |
| `bronze` | `#86672F` | Gold used as text (meets AA contrast) |
| `navy` | `#162433` | Primary button, footer |

## Content & integrity

Everything the site shows comes from the files in `src/data/`. Each factual
entry has a `verified` flag, and **only verified entries are shown**. Entries
that could not be confirmed stay in the files, hidden, so they can be turned on
once someone confirms them. `src/data/sources.ts` lists the public sources
behind the verified claims.

- **No fabricated imagery.** Until an approved photo is hosted, image slots
  show a plain ivory panel with a monogram. Add files under `public/media/`
  and set `image` in `src/data/assets.ts` (or on the matching data entry).
- **No invented dates.** Leave `date` / `year` empty when it isn't confirmed.
- **Contact email** is hidden until `links.email` in `src/data/profile.ts` is set.
