# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # start dev server at http://localhost:3000 (also accessible on LAN, e.g. http://192.168.1.228:3000)
bun run build    # production build — always run this before committing to catch type/compile errors
bun run lint     # ESLint
```

## Project context

Nomad's Nest is a short-term rental apartment in Ayia Napa, Cyprus. This site is a migration from Squarespace (150 EUR/year) to Vercel (free), hosted at `nomadsnest.live`.

The complete site comprises:
- **Marketing pages:** Home, Listing (property details + reviews), Gallery (index + per-room sub-pages), Book (links out to Airbnb / Booking.com / HomeExchange — no booking backend), Contact (sends an email via an API route)
- **Guest pages:** Check-in (step-by-step arrival directions), Guide (in-stay house guide + farewell checklist)
- **Legal pages:** Privacy Policy, Terms & Conditions, Cookie Policy

There is no CMS and no database. All content is typed TypeScript constants in `src/data/`. The only server-side logic is the contact form email route.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — configured entirely in `src/app/globals.css` via `@theme inline`; there is no `tailwind.config.ts`
- **shadcn/ui** — `button` and `tabs` components in `src/components/ui/`; `components.json` is present for future additions
- **framer-motion** — used only through the `FadeIn` wrapper (`src/components/fade-in.tsx`)
- **lucide-react** — icons
- **Package manager**: bun only, never npm or yarn

## Architecture

`/` redirects to `/check-in`. The two real pages are `/check-in` and `/guide`.

### Data layer (`src/data/`)

All page content is typed TypeScript constants — no CMS, no API calls. **Edit content here, not in components.**

- `check-in-steps.ts`: `byCar: CheckInStep[]` (4 steps) and `byFoot: CheckInStep[]` (6 steps), consumed by `DirectionsTabs`.
- `guide-content.ts`: `guideSections: GuideSection[]` and `farewellChecklistItems: string[]`. `GuideItem` supports four flags: `heading` (h3), `highlight` (gold/bold — rules, warnings, fees), `note` (italic/muted), and `url` (link; external opens in new tab, internal uses Next.js `Link`).
- `book-content.ts`: `pricingSeasons`, `platformLinks` (Airbnb / Booking.com / HomeExchange), `fees`, `discounts`, `limits`, `contactEmail`.
- `listing-content.ts`: property stats, intro copy, amenity cards, reviews, and image references for the listing page.
- `gallery-content.ts`: `allRooms: GalleryRoom[]` keyed by `GalleryCategory` slug, drives both the gallery index and per-room sub-pages.

### Theming

All color tokens are CSS custom properties in `:root` inside `globals.css`, mapped to Tailwind utility classes via `@theme inline`. The palette is warm light (cream `#faf9f6` background, gold `#C9A84C` primary, dark charcoal text). The `gold` button variant is a custom addition to `src/components/ui/button.tsx` — not part of the shadcn default set.

Font CSS variables (`--font-body` for Inter, `--font-heading-var` for Playfair Display) are injected by `next/font/google` in `layout.tsx` and consumed in `@theme inline` as `--font-sans` and `--font-heading`.

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

All images live in `public/images/`. Check-in step photos are in `public/images/check-in/`. The logo is `public/images/logo-nn-gold-crop.webp`. Always use `next/image` for runtime optimisation. Compress photos to under 500KB before committing — Git is not an image store.

### Custom commands

`.claude/commands/frontend-review.md` — run `/frontend-review` before merging any branch. Performs a structured 7-step code review covering React/Next.js App Router patterns, TypeScript, Tailwind v4, caching, Server Actions, security (incl. CVE-2025-29927), accessibility, and project conventions.

## Deployment

GitHub repo: `github.com:cmin764/nomads-nest.git`. Vercel is connected to `main` — every push deploys automatically. Domain: `nomadsnest.live` (DNS on Squarespace, A record → `216.198.79.1`, www CNAME → `5fb214831078e66e.vercel-dns-017.com`).
