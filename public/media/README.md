# Media — Ravi Tomar

All imagery on this site is served from this directory (or a managed image CDN).
**Never hotlink Google Images or paste copied Google image addresses.**

## Directory map

```
public/media/
  ravi-tomar/
    portraits/     Editorial + close leadership portraits
    awards/        ET NOW, Healthcare Summit, etc. ceremony photos
    events/        Summits, panels, speaking engagements
    media/         Interview stills (ET HealthWorld, CEO Insights, CII)
  crl/
    laboratories/  CRL facility / equipment photography
```

## Approval workflow

1. Download the approved asset from a credible source (CRL official social,
   Ravi Tomar's public professional profiles, published interviews, event
   organisers, credible media publications).
2. Optimise (max ~2400px longest edge, WebP/AVIF where possible).
3. Drop it into the correct folder.
4. Add an entry to `media-manifest.json` with `source`, `event`, `year`, `alt`
   and set `usageStatus` to `approved`.
5. Wire the path into the matching entry in `src/data/*.ts` (e.g. `image:
   "/media/ravi-tomar/portraits/hero-portrait.jpg"`).

Until an asset is added, the UI renders a branded, clearly-labelled placeholder —
it never fabricates a photograph, certificate, or award logo.

## Priority order

1. Editorial portrait photographs
2. ET NOW award ceremony photographs
3. Healthcare summit photographs
4. Panel discussion photographs
5. CRL laboratory photographs
6. Speaking / interview photographs
7. CRL company event photographs
