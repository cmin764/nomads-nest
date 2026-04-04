# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Copy & Voice

Nomad's Nest is a warm, human-written property site. All content you write or edit must feel like it came from a person, not a language model.

**Never use em dashes (—) in any content you control.** This includes page copy, data files (`src/data/`), alt text, metadata titles, and descriptions. Use instead:
- Period + new sentence when two independent thoughts follow each other
- Colon to introduce a list or instruction
- Comma (or comma + "so"/"which") for closely related clauses
- Parentheses for incidental asides or definitions

Exception: verbatim third-party text (guest reviews, quoted messages) must not be altered.

Avoid other AI-flavoured patterns too: no "seamlessly", no "nestled", no "perfect blend of X and Y", no trailing summaries restating what was just said. Write with the restraint the design uses — one clear thought per sentence, no filler.

## Commands

```bash
bun run dev      # start dev server at http://localhost:3000 (also accessible on LAN, e.g. http://192.168.1.228:3000)
bun run build    # production build — always run this before committing to catch type/compile errors
bun run lint     # ESLint
```

Two non-obvious config details in `next.config.ts` — do not simplify either:
- **LAN access:** `allowedDevOrigins` uses `os.networkInterfaces()` to enumerate local IPs dynamically. Wildcards and hardcoded IPs both silently fail.
- **Image cache:** the correct key to raise the dev-mode image LRU limit is `images.maximumDiskCacheSize` (bytes). The key `experimental.imageCacheSizeLimit` does not exist in Next.js 16 and causes a build-time type error.

## Project context

Nomad's Nest is a short-term rental apartment in Ayia Napa, Cyprus. This site is a migration from Squarespace (150 EUR/year) to Vercel (free), hosted at `nomadsnest.live`.

The complete site comprises:
- **Marketing pages:** Home, Listing (property details + reviews), Gallery (index + per-room sub-pages), Book (links out to Airbnb / Booking.com / HomeExchange — no booking backend), Contact (static: address, email, WhatsApp, map — no form)
- **Guest pages:** Check-in (step-by-step arrival directions), Guide (in-stay house guide + farewell checklist)
- **Legal pages:** Privacy Policy, Terms & Conditions, Data Protection Notice

There is no CMS, no database, and no server-side logic. All content is typed TypeScript constants in `src/data/`.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — configured entirely in `src/app/globals.css` via `@theme inline`; there is no `tailwind.config.ts`
- **shadcn/ui** — `button` and `tabs` components in `src/components/ui/`; `components.json` is present for future additions
- **framer-motion** — used only through the `FadeIn` wrapper (`src/components/fade-in.tsx`)
- **lucide-react** — icons
- **Package manager**: bun only, never npm or yarn

## Coding rules

Applied during all development, not just at review time.

**Rendering**
- Server components are the default. Add `"use client"` only when a component genuinely needs browser APIs, event handlers, or stateful hooks. Push the directive to the smallest possible leaf — never put it on a parent that wraps server-renderable siblings.
- `params` and `searchParams` in pages and layouts are `Promise<...>` in Next.js 15/16. Always `await` them. Synchronous destructuring is a type error and a runtime warning.
- `notFound()` and `redirect()` work by throwing internally. Never wrap them in `try/catch` — the throw will be caught and both calls will silently do nothing.

**Navigation and links**
- `next/link` for all internal navigation. Never `<a href="...">` for same-origin paths.
- External links that open in a new tab need `rel="noopener noreferrer"`.

**Images**
- Above-fold and hero images need the `priority` prop on `<Image>`. Omitting it lazy-loads the LCP image and tanks Core Web Vitals.

**Styling**
- When a component accepts a `className` prop or builds class strings conditionally, use `cn()` from `@/lib/utils`. Direct string concatenation silently drops a class when two utilities target the same CSS property.
- Prefer Tailwind utility classes over `style={{ ... }}` for design tokens. `globals.css` maps these custom tokens to Tailwind utilities via `@theme inline`:
  - **Text:** `text-gold`, `text-nn-text`, `text-nn-muted`, `text-cream`, `text-divider`, `text-navy`
  - **Background:** `bg-gold`, `bg-navy`, `bg-surface`, `bg-surface-alt`, `bg-divider`
  - **Border:** `border-gold`, `border-divider`
  - **Hover/conditional:** `hover:text-gold`, `hover:border-gold` etc. work because these map through `--color-*`
  - **shadcn tokens** (`text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`, etc.) are also mapped and available
- Three situations where inline `style` is legitimate and should stay:
  1. **Tint/opacity variants** with no utility: `--navy-lt`, `--gold-lt` (no `bg-navy-lt` class exists).
  2. **CSS functions** that can't be static utilities: `color-mix(in srgb, var(--cream) 70%, transparent)`.
  3. **Non-token CSS properties**: `opacity`, `font-size: clamp(...)`, `min-height`, `aspect-ratio`, `transition` timing strings, `backdrop-filter`, `box-shadow` with `rgba()`.
- **Split style pattern**: when a `style` object mixes a token (convertible) and a non-token (keep), move the token to `className` and leave only the non-token in `style`:
  ```tsx
  // Before
  style={{ color: "var(--gold)", opacity: 0.35, fontSize: "clamp(56px,7vw,80px)" }}
  // After
  className="text-gold"
  style={{ opacity: 0.35, fontSize: "clamp(56px,7vw,80px)" }}
  ```

**UI components**
- Before writing a custom UI primitive, check if an existing shadcn/ui component covers the need. Adding one is cheaper than maintaining a bespoke equivalent.

**TypeScript & quality**
- No `any`. If a type is genuinely unknown, use `unknown` and narrow it.
- No `console.log`, commented-out code, or dead imports committed. These are noise in a codebase this size.

---

## Architecture

`/` redirects to `/check-in`. The two real pages are `/check-in` and `/guide`.

### Data layer (`src/data/`)

All page content is typed TypeScript constants — no CMS, no API calls. **Edit content here, not in components.**

- `check-in-steps.ts`: `byCar: CheckInStep[]` (4 steps) and `byFoot: CheckInStep[]` (6 steps), consumed by `DirectionsTabs`.
- `guide-content.ts`: `guideSections: GuideSection[]` and `farewellChecklistItems: string[]`. `GuideItem` supports four flags: `heading` (h3), `highlight` (gold/bold — rules, warnings, fees), `note` (italic/muted), and `url` (link; external opens in new tab, internal uses Next.js `Link`).
- `book-content.ts`: `pricingSeasons`, `platformLinks` (Airbnb / Booking.com / HomeExchange), `fees`, `discounts`, `limits`, `contactEmail`.
- `listing-content.ts`: property stats, intro copy, amenity cards, reviews, and image references for the listing page.
- `gallery-content.ts`: `allRooms: GalleryRoom[]` keyed by `GalleryCategory` slug, drives both the gallery index and per-room sub-pages.
- `transport-content.ts`: typed constants for the "Bus Routes" modal on the check-in page. See **Transport data flow** below before editing.

### Theming

All color tokens are CSS custom properties in `:root` inside `globals.css`, mapped to Tailwind utility classes via `@theme inline`. The palette is warm light (cream `#faf9f6` background, gold `#C9A84C` primary, dark charcoal text). The `gold` button variant is a custom addition to `src/components/ui/button.tsx` — not part of the shadcn default set.

Font CSS variables (`--font-body` for Raleway, `--font-heading-var` for Cormorant) are injected by `next/font/google` in `layout.tsx` and consumed in `@theme inline` as `--font-sans` and `--font-heading`.

Hero `h1` headings use `<em className="italic text-primary">` to render accent words in gold italic (Cormorant italic at `#C9A84C`). This maps directly to the design spec's `.hero-h em` rule. Example: `Welcome to Your <em className="italic text-primary">Ayia Napa</em> Getaway!`

### Client components

These are the only `"use client"` components; everything else is a server component:

- `Header` — hamburger menu toggle state
- `TableOfContents` — scroll listener for active section tracking; smooth-scrolls with a 96px offset to clear the sticky header
- `FarewellChecklist` — checkbox state persisted to `localStorage` under key `nomads-nest-farewell-checklist`; uses a `mounted` flag to prevent hydration mismatch
- `DirectionsTabs` — Radix UI Tabs wrapping the check-in step cards
- `PhotoGrid` — lightbox/zoom interaction on gallery pages
- `ReviewsCarousel` — touch/drag carousel on the listing page
- `FadeIn` — framer-motion scroll-triggered fade wrapper used across all pages

### Images

Always use `next/image`, never raw `<img>`. For local files in `public/images/`, prefer static imports over string paths — Next.js then automatically provides width, height, and a blur placeholder, removing the need to record dimensions manually:

```tsx
import heroImg from "@/public/images/gallery/bedroom/photo.jpg";
<Image src={heroImg} alt="..." />
```

For every image change, follow this checklist in order:

**1. Store the file**
- Place it under `public/images/` in the appropriate subfolder (`gallery/{room}/`, `contact/`, `check-in/`, etc.)
- `public/images/gallery/` is the canonical source — other pages reference images from there rather than duplicating files
- Source photos live in `/Users/cmin/Pictures/NomadsNest/` (subdirs: `Home/`, `Listing/`, `Around/`)

**2. Optimise before committing**
- Hard limit: **500 KB per file** — Git is not an image store
- Batch compress: `bash scripts/compress-images.sh`
- Single file: `sips -Z 2000 path/to/file.jpg --setProperty formatOptions 80 --out path/to/file.jpg`

**3. Record dimensions in `src/data/gallery-content.ts`**
- Add `width` and `height` (EXIF-corrected px) to each image entry
- **Never use `sips`** for this — it ignores EXIF rotation tags and reports wrong dimensions for camera-rotated photos
- Use Python/Pillow instead: `cd public/images && python3 -c "from PIL import Image, ImageOps; from pathlib import Path; [print(f, *ImageOps.exif_transpose(Image.open(f)).size) for f in sorted(Path('gallery').rglob('*.JPG'))]"`

**4. Use own photos only**
- No third-party or stock images — they carry attribution and licensing obligations
- If unavoidable, display credit in the UI

**5. Set alt text at the point of use**
- Alt text belongs in `src/data/*.ts` or inline in the page component — not in `media.yaml`
- Write specific descriptions (`"Terrace dining table with palm tree at dusk"`, not `"terrace"`)
- Purely decorative/background images with no informational value use `alt=""`
- Alt text is contextual: the same file in two places may need different descriptions

**6. No duplication**
- Each photo should appear in exactly one place on the site
- When multiple flows share a step, define a single shared constant and reference it — never copy-paste image entries
- Audit dead files: cross-reference `src/` references against `public/images/` (see `docs/image-management.md`)

Full step-by-step scenarios (add, replace, reorder, remove) for every image placement: `docs/image-management.md`.

When removing an image: delete the file, and every reference in `src/`.

### Transport data flow

Three-layer pipeline: `docs/transport-routes.md` (authoritative research) → `src/data/transport-content.ts` (guest-facing typed constants) → `src/components/check-in/transport-modal.tsx` (Dialog UI, reads data only).

To update (e.g. price change): edit the doc first, reflect in the data file, run `bun run build`. Full source list and pipeline details are in `docs/transport-routes.md`.

### Custom commands

`.claude/commands/frontend-review.md` — run `/frontend-review` before merging any branch. Performs a structured 7-step code review covering React/Next.js App Router patterns, TypeScript, Tailwind v4, caching, Server Actions, security (incl. CVE-2025-29927), accessibility, and project conventions.

## Deployment

GitHub repo: `github.com:cmin764/nomads-nest.git`. Vercel is connected to `main` — every push deploys automatically. Domain: `nomadsnest.live` (DNS on Squarespace, A record → `216.198.79.1`, www CNAME → `5fb214831078e66e.vercel-dns-017.com`).
