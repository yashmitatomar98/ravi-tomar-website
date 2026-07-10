# Ravi Tomar — Precision & Purpose

An ultra-premium personal portfolio for **Ravi Tomar**, Founder, Chairman &
Managing Director of **CRL Diagnostics Pvt. Ltd.**

> Quality is not a benchmark. It is a responsibility.

A dark, cinematic, editorial experience — Forbes leadership editorial × premium
global CEO brand × luxury annual report × advanced diagnostic laboratory.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** — custom "laboratory" design system
- **GSAP + ScrollTrigger** — pinned/horizontal scroll, timeline, scrubbed reveals
- **Lenis** — smooth scrolling
- **Framer Motion**, **Lucide** — available where needed
- **next/image**, dynamic **OpenGraph** artwork, **Person** JSON-LD

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Experience

Cinematic preloader (`CALIBRATING PRECISION` → `RT` → `RAVI TOMAR`) · custom
precision cursor (VIEW / WATCH / READ) · subtle grain, scan lines and
microscopic particle fields · slow, deliberate motion. All effects respect
`prefers-reduced-motion` and scale down on low-power devices.

## Structure

```
src/
  app/            layout (fonts, SEO, JSON-LD), page, og-image, robots, sitemap
  components/
    layout/       Navigation, Footer, SmoothScroll
    fx/           Preloader, CustomCursor, Grain, ScanLine, Particles
    ui/           MediaFrame (image or branded placeholder)
    hero/ story/ timeline/ building/ philosophy/ recognition/
    media/ gallery/ press/ personal/ legacy/ journal/ contact/
  data/           timeline · awards · media · press · gallery · crl
  lib/            animations (GSAP helpers) · smooth-scroll (Lenis)
public/media/     hosted imagery + media-manifest.json (see media/README.md)
```

## Content & integrity

This is content-driven — edit the files in `src/data/` (they read like a CMS).
Guardrails built in per the brief:

- **No fabricated imagery.** Missing assets render a clearly-labelled placeholder;
  never a fake photo, certificate, or award logo. Add approved files under
  `public/media/` and set the `image` field in the matching data file.
- **`verified` flags** on data entries and **`usageStatus`** in
  `media-manifest.json` gate anything not yet source-confirmed.
- **No invented dates.** Press dates are omitted where unconfirmed.
- **Soft founding timeline** — public profiles differ; specifics stay
  CMS-configurable until verified.
- **CRL statistics and lab locations are placeholders** — verify against official
  company material before production.
- **No private contact details** are exposed.
- Journal articles are marked **Draft** — no quotes/authorship published until approved.

## Design tokens

| Token | Value | Use |
|---|---|---|
| `lab-black` | `#07110F` | Primary background |
| `lab-deep` | `#0D1B18` | Secondary background |
| `ivory` | `#F3F0E8` | Primary text |
| `muted` | `#9BA8A3` | Muted text |
| `accent` | `#B7FF4A` | Accent — used extremely sparingly |
| `champagne` | `#B89B5E` | Premium secondary accent |
| `sci` | `#79C7B5` | Scientific interface accent |

Type: **Instrument Serif** (display) · **Inter** (interface).
