# Nomad's Nest — Site Blueprint
> Single source of truth for all development. Supersedes `nomadsnest-design-spec.md` and `nomadsnest-rebuild-spec.md`. The design HTML (`nomadsnest-design.html`) remains as an interactive visual reference.
>
> Last updated: March 2026

---

## 1. Vision & Identity

### What We're Building

A brochure site for a short-term rental apartment in Ayia Napa, Cyprus. No backend, no CMS — all content is typed TypeScript constants. Booking happens through external platforms (Airbnb, Booking.com, HomeExchange). Hosting on Vercel Hobby (free), domain `nomadsnest.live`.

### Two Audiences, One Site

**Potential guests (discovery flow):** Finding the property, exploring rooms, checking pricing, deciding to book. They enter at `/`, browse The Space and Gallery, and exit through a booking platform or contact form.

**Booked guests (operational flow):** Need check-in directions and house rules during their stay. These pages are shared directly by the host — they never need to find them through navigation.

This distinction drives every layout and navigation decision: the public nav serves discovery only. Guide and Check-in are invisible to first-time visitors.

### Design Principles

- **Mediterranean morning light, not nightclub luxury.** The photography carries the emotion — the UI gets out of the way.
- **More air, less weight.** Thin over bold. Space over decoration. Generous whitespace earns trust.
- **One gold accent.** Used for CTAs, active states, and hierarchy signals. Nowhere else.
- **Sophistication through simplicity.** One obvious path at every decision point. If it needs explaining, it needs rethinking.
- **No bold (600+) anywhere.** The lightness is the identity.

---

## 2. Design System

> For working examples of every component, open `docs/nomadsnest-design.html` in a browser. It is a fully interactive prototype with light/dark toggle.

### 2.1 Colors

Three families only. No exceptions.

#### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --bg:          #F5F2EC;   /* linen cream */
  --surface:     #FFFFFF;   /* cards, nav, modals */
  --surface-alt: #EBF0F8;   /* subtle fills, image placeholders */

  /* Navy family */
  --navy:        #1B2A4A;   /* primary text */
  --navy-mid:    #2E4A7A;   /* secondary buttons, active states */
  --navy-lt:     #D4DFF0;   /* pale sea — card fills, quote panels */

  /* Gold family */
  --gold:        #B8924A;   /* primary CTAs, accents, TOC active */
  --gold-dk:     #9A7A3C;   /* gold hover */
  --gold-lt:     #F2E8D0;   /* parchment — warm fills */

  /* Text */
  --text:        #1B2A4A;   /* same as --navy */
  --muted:       #6A7D99;   /* secondary text, labels */
  --border:      #D5DDE9;   /* dividers, card borders */

  /* Fonts */
  --serif:       'Cormorant', Georgia, serif;
  --sans:        'Raleway', system-ui, sans-serif;
}

[data-theme="dark"] {
  --bg:          #08152A;   /* night sea */
  --surface:     #0D1F3C;
  --surface-alt: #112448;
  --navy-lt:     #1A3A6A;
  --gold-lt:     #1E1408;
  --text:        #EDE8DC;
  --muted:       #7A8EAA;
  --border:      #18304E;
  /* --navy, --navy-mid, --gold, --gold-dk: unchanged */
}
```

**Theme default: system.** The toggle cycles system → light → dark → system. When system is active, the OS `prefers-color-scheme` is followed automatically. The user only stores an explicit choice (`"light"` or `"dark"`) in `localStorage` under key `nn-theme` if they want to override.

#### Swatches Reference

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--bg` | #F5F2EC linen | #08152A night sea | Page background |
| `--surface` | #FFFFFF | #0D1F3C | Cards, nav |
| `--navy` | #1B2A4A | unchanged | Primary text |
| `--gold` | #B8924A | unchanged | CTAs, active |
| `--muted` | #6A7D99 | #7A8EAA | Secondary text |

### 2.2 Typography

Two families only. No system font fallbacks in practice — load from Google Fonts.

#### Fonts to Load

```
Cormorant:ital,wght@0,300;0,400;1,300;1,400
Raleway:wght@300;400;500
```

In Next.js `layout.tsx`, load via `next/font/google` and inject as CSS variables.

#### Scale

| Role | Family | Weight | Size | Style | Notes |
|---|---|---|---|---|---|
| Display | Cormorant | 300 | 54px | normal | Brand mark, large pull quotes |
| H1 | Cormorant | 300 | 48–72px | **italic** | Page heroes |
| H2 | Cormorant | 300 | 28–36px | normal | Section headers |
| H3 / subheading | Cormorant | 300 | 19–22px | italic | Card headers, guide sections |
| Label / eyebrow | Raleway | 400 | 10–11px | uppercase | letter-spacing: 0.16–0.20em |
| Body | Raleway | 300 | 15–17px | normal | line-height: 1.75–1.85 |
| Small / meta | Raleway | 300 | 12–13px | normal | Counts, subtitles |
| Button | Raleway | 400 | 11px | uppercase | letter-spacing: 0.14em |

Loaded via `next/font/google`. CSS variables `--font-heading-var` and `--font-body` are injected by Next.js and consumed in `@theme inline` as `--font-heading` and `--font-sans`.

### 2.3 Spacing & Layout

- Section padding: `88px 72px` (desktop), `48px 24px` (mobile)
- Max content width (text-heavy): `760px` centered
- Max content width (visual pages): `1100px`
- Card gap: `14–16px`
- Two-column gutter: `64–72px`
- Body line-height: `1.75–1.85`

### 2.4 Buttons

Two types only. Shape is always pill (`border-radius: 100px`).

#### Gold — Primary CTAs (Book Now, Reserve)

`background: var(--gold)` · `color: #F5F2EC` · `padding: 13px 34px` · `border-radius: 100px` · Raleway 400, 11px, uppercase, `letter-spacing: .14em`. Hover: `background: var(--gold-dk)`, `scale(1.02)`.

#### Navy Outline — Everything Else (View Gallery, Get Directions, About the Property)

Transparent bg · `border: 1px solid var(--navy-mid)` · `color: var(--navy-mid)` · same font as gold · `border-radius: 100px`. Hover: fills `var(--navy-mid)`, text `#F5F2EC`. Dark mode: border `rgba(237,232,220,.3)`, hover bg `rgba(237,232,220,.1)`.

Implemented in `src/components/ui/button.tsx` as `variant="gold"` and `variant="navy"`. Dark mode overrides applied via the `.btn-navy` CSS class in `globals.css` (Tailwind v4 does not support `[data-theme=dark_&]` arbitrary variant syntax).

### 2.5 Cards

`background: var(--surface)` · `border-radius: 14px` · `border: 1px solid var(--border)`. Hover: `border-color: var(--gold)`, `translateY(-4px)`, box-shadow `0 14px 40px rgba(27,42,74,.07)`. Dark mode hover shadow: `rgba(0,0,0,.4)`. Transition: 300ms on border/transform/shadow, 450ms on background.

### 2.6 Section Label (Eyebrow Pill)

Small uppercase label used above section headings ("Amenities", "Reviews", "Gallery"). Raleway 400, 10px, `letter-spacing: .16em`, `color: var(--muted)`, `background: var(--surface-alt)`, `padding: 6px 16px`, `border-radius: 100px`, `margin-bottom: 52px`.

### 2.7 Gold Divider Bar

Used under hero headlines to anchor them visually. `width: 44px`, `height: 1px`, `background: var(--gold)`, `margin: 0 auto 40px`.

### 2.8 Step Number Badge (Check-in)

24px circle · `background: var(--gold)` · `color: #F5F2EC` · Raleway 500, 11px · centered with flex.

### 2.9 Animations

Scroll fade-in: `opacity 0→1`, `translateY(22px→0)`, 800ms, `cubic-bezier(.25,.46,.45,.94)`. Stagger: 0ms / 130ms / 260ms per element. IntersectionObserver: `threshold: 0.08`, `rootMargin: '0px 0px -40px 0px'`.

Other transitions: card hover `translateY(-4px)` 300ms · button hover `scale(1.02)` 150ms · theme switch `background/color 450ms ease` on `body`.

**Never:** bounce, spring physics, parallax, slide-in from sides.

Implemented via the existing Framer Motion `FadeIn` wrapper (`src/components/fade-in.tsx`) with `y: 22`, `duration: 0.8`.

### 2.10 Theme Toggle

Three states cycling: **system** → **light** → **dark** → system.

**System mode** (default, no stored preference): reads `prefers-color-scheme` and follows OS changes in real time. **Light/Dark** modes: stored in `localStorage` under key `nn-theme`, override OS.

FOUC prevention: an inline script in `<head>` (before stylesheets) reads `nn-theme` and sets `data-theme` on `<html>` immediately — no flash on page load.

Hook: `src/hooks/use-theme.ts` — always initialises to `"system"` for SSR/hydration safety, syncs from `localStorage` in a `useEffect` after mount.

Toggle button: lucide-react `Monitor` / `Sun` / `Moon` icons. Lives in the nav right section, before Book Now.

### 2.11 Nav Component

Layout: `[left links]  [centered logo]  [toggle + CTA right]`

Sticky, `z-index: 100` · `background: var(--surface)` · `border-bottom: 1px solid var(--border)` · `padding: 24px 72px` · `transition: background/border-color 450ms`.

Nav links: Raleway 400, 11px, uppercase, `letter-spacing: .16em`, `color: var(--muted)`. Hover: `color: var(--text)`, 200ms. Implemented via `.nn-link` CSS class (not event handlers — safe for server components).

Logo: Cormorant 300 italic, 22px, `letter-spacing: .06em`, `color: var(--text)`. Centered on desktop; left-aligned on mobile with hamburger on the right.

### 2.12 Review Carousel

- Full-width single-card carousel, `overflow: hidden`
- Quote: Cormorant 300 italic, 23px, centered, max-width 640px
- Large faint `"` mark: Cormorant 96px, `color: var(--gold)`, `opacity: 0.2`
- Attribution: Raleway 400, 11px, uppercase, `color: var(--muted)`
- Controls: prev/next round buttons + pill dots (active dot: gold, `width: 24px`)
- Auto-advances every 5.5s, pauses on hover, keyboard arrows + touch swipe

### 2.13 Pricing Table

Row cells: Raleway 300, 15px, `padding: 16px 0`. Season label (left cell): `color: var(--muted)`. Price (right cell): right-aligned, Cormorant 300, 20px.

### 2.14 Platform Link Cards (Book page)

Card: flex row · `gap: 18px` · `padding: 18px 22px` · `border-radius: 14px` · `border: 1px solid var(--border)` · `background: var(--surface)`. Hover: `border-color: var(--gold)`, `translateX(4px)`, arrow color → gold. Transition 250ms on border/transform.

Platform icon container backgrounds (light / dark):
- Airbnb: `#FFEAE0` / `rgba(255,120,80,.15)`
- Booking.com: `#E8F0FF` / `rgba(46,74,122,.4)`
- HomeExchange: `#E8F5EB` / `rgba(60,120,60,.2)`

**Platform logos:** Inline SVG paths from [simpleicons.org](https://simpleicons.org) — no extra package needed, just 3 static paths. Airbnb (`SiAirbnb` path) and Booking.com (`SiBookingdotcom` path) are available there. HomeExchange is not in Simple Icons — use lucide-react `Home` icon as a placeholder until an official SVG is sourced. SVG fills `currentColor` so it adapts to light/dark automatically. Component: `src/components/ui/brand-icon.tsx`, accepts `brand: "airbnb" | "booking" | "homeexchange"`, `size`, `className`.

---

## 3. Site Architecture

### 3.1 Route Map

| Route | Page Title | Audience | Status |
|---|---|---|---|
| `/` | Home | Public | Built (Phase 1) |
| `/listing` | The Space | Public | Phase 2 |
| `/gallery` | Gallery | Public | Phase 2 |
| `/gallery/entrance` | Entrance | Public | Phase 2 |
| `/gallery/bedroom` | Bedroom | Public | Phase 2 |
| `/gallery/bathroom` | Bathroom | Public | Phase 2 |
| `/gallery/kitchen` | Kitchen | Public | Phase 2 |
| `/gallery/living-area` | Living Area | Public | Phase 2 |
| `/gallery/terrace` | Terrace | Public | Phase 2 |
| `/book` | Book | Public | Phase 2 |
| `/contact` | Contact | Public | Phase 3 |
| `/guide` | Guest Guide | Booked guests only | Built (Phase 0, rethemed Phase 1) |
| `/check-in` | Check-in Instructions | Booked guests only | Built (Phase 0, rethemed Phase 1) |
| `/privacy-policy` | Privacy Policy | Both | Phase 3 |
| `/terms` | Terms & Conditions | Both | Phase 3 |
| `/data-protection` | Data Protection Notice | Both | Phase 3 |

### 3.2 Navigation Structure

**Desktop:**
```
[The Space]  [Gallery]  [Contact]      Nomad's Nest      [🌓]  [Book Now]
```

**Mobile (hamburger → full-screen overlay):**
```
The Space
Gallery
Contact
─────────────
[Book Now →]
```

Rules:
- Guide and Check-in are **not** in the nav. They are sent as direct links after booking.
- "Book Now" is always a gold pill button in the nav, never a plain link.
- Theme toggle (☀/☾) lives in the nav right section, before Book Now.
- Logo is centered on desktop. On mobile: logo left, hamburger right.
- Active page: nav link color shifts to `var(--text)`.

### 3.3 Data Layer

All content is TypeScript constants in `src/data/`. No CMS. No API calls. One file per domain:

```
src/data/
  check-in-steps.ts       ← exists (byCar[], byFoot[])
  guide-content.ts        ← exists (guideSections[], farewellChecklistItems[])
  listing-content.ts      ← to create (stats, description, amenities, reviews)
  gallery-content.ts      ← to create (categories, room taglines, photo manifest)
  book-content.ts         ← to create (pricing table, platform links, fees)
  contact-content.ts      ← to create (address, social links, map URLs)
  legal-content.ts        ← to create (privacy, terms, data protection text)
```

### 3.4 Key Third-Party Packages

| Package | Purpose |
|---|---|
| `embla-carousel-react` | Reviews carousel, homepage hero slideshow |
| `yet-another-react-lightbox` | Gallery sub-page photo lightbox |
| `framer-motion` | Scroll fade-in (already installed) |
| `lucide-react` | Icons (already installed) |
| Resend / Formspree | Contact form email (future, Phase 3) |

---

## 4. Page Specifications

> **Source material:** The original Squarespace site was downloaded offline and lives at `/Users/cmin/Projects/NomadsNest/Site`. When content, copy, or page structure needs verification or gap-filling, read the `.htm` files there directly. This is the authoritative source for all original text, page layout, and image filenames.

### 4.1 Home (`/`)

**Hero section** (above the fold):
```
┌─────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌─────────┐  ┌─────────┐    │
│  │              │  │         │  │         │    │
│  │   terrace    │  │ bedroom │  │ kitchen │    │
│  │  (large)     │  │         │  │         │    │
│  └──────────────┘  └─────────┘  └─────────┘    │
│                                                 │
│           AYIA NAPA, CYPRUS                     │  ← gold label
│      Living well                                │
│      in Ayia Napa.                              │  ← H1 Cormorant italic
│                ────────                         │  ← gold bar (44px)
│   10 minutes' walk from the city centre.       │
│   20 minutes' walk from the beach. A space     │
│   designed to let you relax, work, and explore │
│   at your own pace.                            │  ← body Raleway 300
│                                                 │
│      [Book Now]    [About the Property]         │  ← gold pill + navy outline
└─────────────────────────────────────────────────┘
```

**Image strip layout:** 3 columns, aspect ratio ~16:9 each. Left column 1.7x width of right two. Border-radius 10px. Images use placeholder fills until assets available.

Images (all present in `public/images/home/`):
- Left (large): `A-terrace-5.jpg`
- Middle: `B-bedroom-1.JPG`
- Right: `D-kitchen-7.JPG`

**Memory section** (dark/image background, `min-height: 60vh`):
```
            A place to make memories.      ← H2 Cormorant
     Designed to make every stay feel like home.
                  [Book Now]
```
Background image: `A-terrace-4.JPG`. Dark overlay. Light text.

**Metadata:**
```typescript
title: "Nomad's Nest — Ayia Napa, Cyprus"
description: "A thoughtfully designed apartment 10 minutes from the city centre and 20 minutes from the beach."
```

---

### 4.2 The Space (`/listing`)

**Hero:**
- Full-width image: `CMN01490.JPG`
- Headline (right-aligned, display size):
  ```
  Island Charm
  Modern Comfort
  Work, Rest, Explore
  ```

**Stats bar** (centered, 4 stats separated by `–`):
```
48 sqm interior  –  AC & fan in every room  –  Dedicated workspace  –  High-speed internet
```

**Property intro block:**
```
  📌 63 Tefkrou Anthia

  A blend of contemporary convenience and relaxed island vibes. The perfect
  place to unwind, explore, or work remotely. With a spacious terrace,
  high-speed internet, and a fully equipped interior, this is more than
  just a stay — it's an experience waiting to be lived.
```

**Image gallery strip** (horizontal, 4 images): `CMN01439.JPG`, `D-kitchen-7.JPG`, `CMN01580.JPG`, `CMN01874.JPG`

**Full-width image:** `A-terrace-8.JPG`

**Amenities section** (section label: "Amenities"):
6 cards, 3 columns, each links to its gallery sub-page:

| Room | Gallery link | Items |
|---|---|---|
| Bedroom | `/gallery/bedroom` | Double Bed, Generous Wardrobe, Adjustable Desk, Vanity Table, 2 Mirrors |
| Bathroom | `/gallery/bathroom` | Shower Cabin, Towel Hangers, Storage Shelves, Laundry Basket, Smart Scale |
| Kitchen | `/gallery/kitchen` | Electric Stove, Fridge, Washing Machine, Toaster/Kettle/Espresso Machine, Cutlery & Utensils |
| Living Area | `/gallery/living-area` | Sofa Bed, Armchair & Table, TV & HDMI Cable, Dining Table & Chairs, Fibre 300 Mbps |
| Terrace | `/gallery/terrace` | Wide Area (17 sqm), Wooden Table & Chairs, Umbrella, Smoking Zone, Pests Repeller |
| Safety | `/gallery/safety` | CO Detector, Smoke Detector, Fire Extinguisher, Fire Blanket, First Aid Kit |

**"Interested?" CTA section:**
- Background image: `A-terrace-6.JPG`
- H2: "Interested?"
- Button: "Book Now" → `/book`

**Reviews section** (section label: "What Guests Say"):
Auto-advancing carousel. 6 reviews:

1. *"Clean, modern, very organised, and extremely well-equipped apartment with a spacious terrace. The host really thought of everything — from beach towels and an umbrella to a fully stocked kitchen, entertainment options, and even gym accessories. We had a really great time, and Cosmin was very helpful and responsive. He made our vacation even better by guiding us to the best spots in Cyprus."* — **Ovidiu R.**

2. *"Fully equipped apartment in a good location. Parking almost always available. Great communication with the owner. We had a very pleasant stay. Great value for the price."* — **Jovan M.**

3. *"We had a great time at this place! Everything was impeccable: the apartment was very clean, well maintained and perfectly as described. The location is ideal, everything is nearby (shops, transport, restaurants, etc.). This is truly a convenient and pleasant place to stay. We would recommend this place 100% and would not hesitate to come back!"* — **Dallia E.**

4. *"Great facilities, gorgeous and clean! We were very happy. Excellent communication with the owner."* — **Erika O.**

5. *"The apartment is perfect, clean and in a good location. The host is very responsive, we recommend this listing!!"* — **Tom A.**

6. *"Everything was just perfect - great location, top-notch service, and the place was super clean and fully equipped, exactly like the photos. Really made my vacation extra special, highly recommended! Honestly, I tried to find something I didn't like - but I couldn't!"* — **Yonatan H.K.**

**Metadata:**
```typescript
title: "The Space"
description: "48 sqm apartment with terrace, dedicated workspace, and fibre internet in Ayia Napa, Cyprus."
```

---

### 4.3 Gallery Index (`/gallery`)

**Intro text:**
> "This stylish apartment combines comfort and elegance, featuring a serene marine-themed bedroom in soothing blue tones, a cozy living area, a fully equipped kitchen, and a spacious terrace where you can unwind and enjoy the fresh air."

**6-card grid** (4 columns desktop, 2 mobile):

| Room | Tagline | Emoji | Route |
|---|---|---|---|
| Entrance | *Step inside* | 🚪 | `/gallery/entrance` |
| Bedroom | *Feel the sea breeze* | 🛏 | `/gallery/bedroom` |
| Bathroom | *Start fresh, end relaxed* | 🚿 | `/gallery/bathroom` |
| Kitchen | *Savor the moment* | 🍳 | `/gallery/kitchen` |
| Living Area | *Your cozy corner* | 🛋 | `/gallery/living-area` |
| Terrace | *Sun, coffee & palm trees* | ☀ | `/gallery/terrace` |

Card layout: cover image (top) + room name (serif, 16px) + photo count (muted, 11px).
Thumbnail image filenames from rebuild spec §4.3 (CDN URLs available there).

**Metadata:**
```typescript
title: "Gallery"
description: "Explore every room of Nomad's Nest — entrance, bedroom, bathroom, kitchen, living area, and terrace."
```

---

### 4.4 Gallery Sub-pages (`/gallery/[category]`)

**Dynamic route** — `category` is one of: `entrance`, `bedroom`, `bathroom`, `kitchen`, `living-area`, `terrace`.

**Layout per page:**
```
  [tagline emoji]  Feel the sea breeze    ← Cormorant italic, muted
           Bedroom                         ← H1 Cormorant
  ─────────────────────────────────────
  [photo grid with lightbox]
  ─────────────────────────────────────
  ← Entrance            Living Area →      ← prev/next room nav
```

**Photo grid:** Masonry or uniform grid, 3 columns desktop, 2 mobile. Click to open lightbox (`yet-another-react-lightbox`). Lightbox: fullscreen, prev/next arrows, keyboard navigation, swipe on mobile.

**Prev/Next navigation order:**
```
Entrance → Bedroom → Bathroom → Kitchen → Living Area → Terrace → (wraps to Entrance)
```

**Photo counts and asset filenames** (from rebuild spec §4.4):
- Bedroom: 23 images (`B-bedroom-1.JPG` through `CMN02012.JPG`)
- Other rooms: see rebuild spec §4.4 — full image lists need downloading from Squarespace dashboard before cancellation (see §5 Asset Strategy)

**Metadata** (dynamic):
```typescript
title: `${categoryName} — Gallery`
description: `Photos of the ${categoryName} at Nomad's Nest, Ayia Napa.`
```

---

### 4.5 Book (`/book`)

**2-column layout** (equal columns, 64px gap):

**Left column:**
```
  Your Vacay
  Awaits.                    ← H1 Cormorant, "Awaits." in gold italic

  RESERVATION REQUEST         ← label, gold uppercase

  ┌─────────────────────────────┐
  │ April – May       €75/night │
  │ June – August     €85/night │
  │ September – October €75/night│
  │ November, March   €65/night │
  │ December – February  closed  │
  └─────────────────────────────┘

  Extra guests +€7/person/night · €70 cleaning fee
  Weekly discount 5% · Monthly discount 30%
  4 persons max · 3 nights minimum
```

**Right column:**
```
  BOOK DIRECTLY ON             ← label, muted uppercase

  ┌────────────────────────────────┐
  │ 🏠 Airbnb                      │
  │    airbnb.com/h/nomadsnestcy   │  →
  └────────────────────────────────┘
  ┌────────────────────────────────┐
  │ 🔵 Booking.com                 │
  │    nomads-nest · ayia napa     │  →
  └────────────────────────────────┘
  ┌────────────────────────────────┐
  │ 🔄 HomeExchange                │
  │    holiday-home/2895395        │  →
  └────────────────────────────────┘

  Have a question?
  book@nomadsnest.live
```

**Platform URLs:**
- Airbnb: `https://airbnb.com/h/nomadsnestcy`
- Booking.com: `https://www.booking.com/hotel/cy/nomads-nest-quiet-flat-with-terrace-in-ayia-napa.html`
- HomeExchange: `https://www.homeexchange.com/holiday-home/2895395`

No reservation form — direct to platforms. If direct inquiries are needed in future, add a contact form via Resend/Formspree.

**Metadata:**
```typescript
title: "Book"
description: "Book your stay at Nomad's Nest on Airbnb, Booking.com, or HomeExchange."
```

---

### 4.6 Contact (`/contact`)

**Layout:**
```
  ┌──────────────────────────────────────────────┐
  │                  Get in Touch                 │
  │                                              │
  │  63 Tefkrou Anthia                           │
  │  Ayia Napa, Cyprus 5330                      │
  │  +357 97 671058 (also on WhatsApp)           │
  │  book@nomadsnest.live                        │
  │  Georgiana Harnagea & Cosmin Poieana         │
  │                                              │
  │         [Get Directions →]                   │
  └──────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────┐
  │                                              │  ← full-width image
  │              [image panel]                   │     unsplash-image-oUi2tvBLInY.jpg
  │                                              │
  └──────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────┐
  │                                              │  ← navy-lt background panel
  │       "Paradise is where we are."            │  ← Cormorant italic, 36px
  │          Nomad's Nest · Ayia Napa            │  ← label, muted uppercase
  │                                              │
  └──────────────────────────────────────────────┘

  [Instagram]  [Facebook]  [book@nomadsnest.live]    ← icon links

                     [Book Now]
```

**Map link:** `https://maps.app.goo.gl/He2MabrTTnF3TVjMA`
**WhatsApp:** `https://wa.me/35797671058` (same number as phone, dual purpose). Render as "+357 97 671058 (also on WhatsApp)" with the number linking to the wa.me URL.
**Social:** `http://instagram.com/nomadsnest.live`, `http://facebook.com/nomadsnest.live`

**Metadata:**
```typescript
title: "Contact"
description: "Get in touch with Nomad's Nest. Address, phone, email, and social links."
```

---

### 4.7 Guest Guide (`/guide`) — Built

Content is complete and correct. Themed with Cormorant + Raleway and navy/gold/cream palette.

Design details:
- TOC: `border-left: 1px solid var(--border)`, active item `color: var(--gold)`
- Tabs: pill style (`border-radius: 100px`, active `background: var(--navy-mid)`)
- Checklist items: round checkbox, checked state `background: var(--gold)`
- Guide section items: `border-bottom: 1px solid var(--border)`, item icon `color: var(--gold)`
- Highlight items: `color: var(--gold)`, no background

**Access:** Not in nav. Shared via direct link by host after booking.

---

### 4.8 Check-in Instructions (`/check-in`) — Built

Content is complete and correct. Themed with Cormorant + Raleway and navy/gold/cream palette.

Design details:
- Tabs: pill style (`border-radius: 100px`, active `background: var(--navy-mid)`)
- Step cards: 14px border-radius, gold step badge
- Step number badge: `background: var(--gold)`, 24px circle, Raleway 500, 11px

**Access:** Not in nav. Shared via direct link by host.

---

### 4.9 Legal Pages (3 pages)

All three are simple long-form text pages with the same layout:
```
  ┌──────────────────────────────────────────────┐
  │  [Page Title]                                 │
  │  Last updated: [date]                         │
  ├──────────────────────────────────────────────┤
  │  [Long-form markdown-like content]            │
  └──────────────────────────────────────────────┘
```

Routes: `/privacy-policy`, `/terms`, `/data-protection`

Content source: Squarespace pages (Privacy Policy — Nomad's Nest.htm, etc. in offline site directory). These pages were Squarespace template content — review before publishing to ensure they reflect actual practices.

Links from footer only. Not in main nav.

---

## 5. Image & Asset Strategy

### 5.1 Asset Organization

```
public/
  images/
    logo-nn-gold-crop.webp      ← exists
    check-in/                   ← self-checkin-*.jpg, self-checkin-car-*.jpg
    listing/                    ← listing-exclusive shots (CMN hero/strip files only)
      CMN01490.JPG
      CMN01439.JPG
      CMN01580.JPG
      CMN01874.JPG
    gallery/                    ← canonical source for ALL room photos
      entrance/
        CMN02030.JPG
        [+ others]
      bedroom/
        B-bedroom-1.JPG
        B-bedroom-2.jpg
        [+ 21 more]
      bathroom/
        C-bathroom-2.JPG
        IMG_8757.jpg
        [+ others]
      kitchen/
        D-kitchen-3.JPG
        D-kitchen-7.JPG
        [+ others]
      living-area/
        D-living-9a.jpg
        D-living-10.JPG
        [+ others]
      terrace/
        A-terrace-2.jpg
        A-terrace-4.JPG
        A-terrace-5.JPG
        A-terrace-6.JPG
        A-terrace-8.JPG
        [+ others]
    contact/
      unsplash-image-oUi2tvBLInY.jpg
```

**`gallery/` is the single canonical source for all room photos.** Other pages (home, listing) reference images directly from `gallery/` — no copies in sibling directories. The only exceptions are `listing/CMN*.JPG` (listing-exclusive professional shots not displayed in the gallery) and `check-in/` (operational photos).

### 5.2 Media Asset Registry

All media is tracked in **`config/media.yaml`**. Every image has a `status` field:
- `present` — file exists in `public/images/` (no action needed)
- `cdn` — not on disk; download from `url` using the script
- `missing` — CDN URL unknown; must source manually, then set to `cdn`

**Local sources already copied (Phase 1):**
- `/Users/cmin/Pictures/Airbnb/Listing` — primary source for all B-bedroom, C-bathroom, D-kitchen, D-living, A-terrace files
- `/Users/cmin/Projects/NomadsNest/Site` — CMN* files, listing page images, safety, landmarks, contact

**Download script:** `bash scripts/download-media.sh [section]`
- Reads `config/media.yaml`, skips `present` entries, fetches `cdn` entries
- Section filter matches top-level YAML keys (e.g. `gallery-bedroom`, `home`)
- Uses `python3` (no extra deps, available on macOS)

**Still missing** (CDN URLs unknown — provide via Squarespace media library):
- All CMN* bedroom gallery files (14 images)

### 5.3 Rules

- **Every JPEG must be under 500KB before committing.** Git is not an image store. Vercel serves `next/image` optimized output, but large originals still bloat the repo and slow cold builds.
- **Compression tool:** `bash scripts/compress-images.sh` — uses macOS `sips` (no extra installs). Runs up to 3 passes (2048px/q75 → 1600px/q60 → 1280px/q55) until all files are under 500KB. Always run this after copying new images in.
- After downloading new assets via `scripts/download-media.sh`, immediately run `scripts/compress-images.sh` before staging.
- Always use `next/image` for runtime optimization in components.
- For images not yet on disk, use placeholder fills: `--surface-alt` (neutral), `--gold-lt` (warm), `--navy-lt` (cool).
- `blurDataURL` on `next/image` once real images are in place.
- When marking an image as present after copying locally, update `config/media.yaml` status accordingly.

---

## 6. Phased Development Plan

### Phase 0 — Done ✓

- `/check-in` page (fully built)
- `/guide` page (fully built)
- Header and footer (built, placeholder links)
- Data layer pattern (`src/data/`)

---

### Phase 1 — Done ✓

**Completed changes:**
- `src/app/layout.tsx` — Cormorant + Raleway via `next/font/google`; FOUC prevention IIFE in `<head>` sets `data-theme` before paint
- `src/app/globals.css` — full design token palette (navy/gold/cream); `[data-theme="dark"]` overrides; `.nn-link` and `.btn-navy` CSS helpers for server components
- `src/components/ui/button.tsx` — pill `gold` and `navy` variants; dark mode navy handled via `.btn-navy` CSS class (Tailwind v4 does not support `[data-theme=dark_&]` arbitrary variant syntax)
- `src/components/layout/header.tsx` — correct nav (The Space, Gallery, Contact); Cormorant italic text logo; system/light/dark theme toggle (Sun/Moon/Monitor icons)
- `src/components/layout/footer.tsx` — 54px Cormorant logo; address + explore + legal columns; gold top border; server component (no event handlers — uses `.nn-link` CSS class)
- `src/hooks/use-theme.ts` — `useTheme` hook; always initialises to `'system'` to prevent SSR/client hydration mismatch; syncs from `localStorage` in a separate `useEffect` after mount
- `src/app/page.tsx` — home page: 3-image hero strip, memory section with overlay, no "Already a guest?" section (guide/check-in links are sent privately to booked guests only)
- `config/media.yaml` — full media asset registry; all currently available images marked `present`
- `scripts/download-media.sh` — rewritten to pure download logic; reads `config/media.yaml` via `python3`; supports section filter arg
- All available images copied to `public/images/` from local sources

**Key implementation notes for future phases:**
- Use `.nn-link` CSS class for hover-colour links in server components (not `onMouseEnter`/`onMouseLeave`)
- Use `.btn-navy` for dark-mode navy button overrides (not Tailwind arbitrary variant)
- `useTheme` must always start with `'system'` state — do not read `localStorage` in `useState` initialiser
- Guide and Check-in links are **not** on the public site anywhere — the "Already a guest?" section was removed from the home page by design

---

### Phase 2 — Core Pages

**Goal:** Build the primary discovery flow. A potential guest can land, browse, and book.

**Order:**
1. `src/app/listing/page.tsx` + `src/data/listing-content.ts`
   - Stats bar component
   - Amenity cards grid
   - Review carousel (add `embla-carousel-react`)
2. `src/app/gallery/page.tsx` + `src/data/gallery-content.ts`
   - 6-card room grid
3. `src/app/gallery/[category]/page.tsx`
   - Dynamic route, photo grid
   - Add `yet-another-react-lightbox`
   - Prev/Next room navigation
4. `src/app/book/page.tsx` + `src/data/book-content.ts`
   - Pricing table
   - Platform link cards
   - `src/components/ui/brand-icon.tsx` — inline SVG brand logos; `brand: "airbnb" | "booking" | "homeexchange"`; Airbnb + Booking.com paths from simpleicons.org; HomeExchange uses lucide `Home` until official SVG is sourced
5. Add nav links in `header.tsx` (The Space → `/listing`, Gallery → `/gallery`)

**Acceptance criteria:**
- Full discovery flow works: Home → The Space → Gallery → Book
- Gallery lightbox opens and navigates correctly
- Reviews carousel auto-advances, pauses on hover, supports keyboard/swipe
- Book page shows correct pricing and links open correct platforms

---

### Phase 3 — Supporting Pages

**Goal:** Complete the site. All routes return real pages.

**Order:**
1. `src/app/contact/page.tsx` + `src/data/contact-content.ts`
   - Phone number links to `https://wa.me/35797671058` (dual-purpose WhatsApp line)
   - Render as "+357 97 671058 (also on WhatsApp)"
2. `src/app/privacy-policy/page.tsx`
3. `src/app/terms/page.tsx`
4. `src/app/data-protection/page.tsx`
5. Footer links updated (legal pages, Contact)
6. SEO: `generateMetadata()` on all pages with title, description, OpenGraph
7. `public/og-image.jpg` — OpenGraph default image

---

### Phase 4 — Polish

**Goal:** Production quality. Fast, accessible, refined.

1. **Animation pass:** Verify IntersectionObserver fade-in on all sections. Check stagger timing.
2. **Performance:** `bun run build` should pass. Lighthouse score ≥ 90 for Performance, Accessibility.
3. **Mobile UX:** Test hamburger overlay on real device. Touch targets ≥ 44px. Gallery swipe.
4. **Images:** Final compression pass. All images <500KB. Add `blurDataURL` on `next/image` components.
5. **Accessibility:** All images have `alt` text. Color contrast meets WCAG AA. Focus states visible.
6. **Dark mode flash prevention:** Verify IIFE in head script prevents unstyled flash on page load.

---

## 7. Content Reference

### 7.1 Contact Information

```
Address:   63 Tefkrou Anthia, Ayia Napa, Cyprus 5330
Phone:     +357 97 671058 (also on WhatsApp)
WhatsApp:  https://wa.me/35797671058
Email:     book@nomadsnest.live
Hosts:     Georgiana Harnagea & Cosmin Poieana
Map:       https://maps.app.goo.gl/He2MabrTTnF3TVjMA
Facebook:  http://facebook.com/nomadsnest.live
Instagram: http://instagram.com/nomadsnest.live
```

### 7.2 Booking Platforms

```
Airbnb:       https://airbnb.com/h/nomadsnestcy
Booking.com:  https://www.booking.com/hotel/cy/nomads-nest-quiet-flat-with-terrace-in-ayia-napa.html
HomeExchange: https://www.homeexchange.com/holiday-home/2895395
```

### 7.3 Pricing

| Season | Price/night |
|---|---|
| April – May | €75 |
| June – August | €85 |
| September – October | €75 |
| November, March | €65 |
| December – February | Closed |

Fees & rules:
- Extra guests: +€7/person/night
- Cleaning fee: €70 (compulsory)
- Weekly discount: 5%
- Monthly discount: 30%
- Maximum capacity: 4 persons
- Minimum stay: 3 nights

### 7.4 Gallery Room Taglines

| Room | Tagline | Emoji |
|---|---|---|
| Entrance | Step inside | 🚪 |
| Bedroom | Feel the sea breeze | 🛏 🌊 |
| Bathroom | Start fresh, end relaxed | 🚿 🫧 |
| Kitchen | Savor the moment | 🍳 🍴 |
| Living Area | Your cozy corner | 🛋 |
| Terrace | Sun, coffee & palm trees | ☀ 🌴 |

### 7.5 Key Squarespace CDN URLs (for asset download)

Full list is in `nomadsnest-rebuild-spec.md` §6. These are the highest-priority assets needed first:

```
# Listing hero
CMN01490.JPG:     https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/171d5d44-2b08-45dd-9ebf-d998eb80af22/CMN01490.JPG

# Gallery thumbnails
CMN02030.JPG (Entrance):  https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742840882450-9VVG87RJIDHP47HX8INN/CMN02030.JPG
B-bedroom-1.JPG:          https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742655281102-HBQOUDG3U3T2OYRQFAAB/B-bedroom-1.JPG
C-bathroom-2.JPG:         https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742655621895-O9Q5DZ32A0DYASRE2XA4/C-bathroom-2.JPG
D-kitchen-3.JPG:          https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742656037098-1QFL3FAEVS0BO2EQO3SM/D-kitchen-3.JPG
D-living-10.JPG:          https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742657226397-01GHC05MDC3R3STS0JX4/D-living-10.JPG
A-terrace-5.jpg (Terrace): https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742657120599-RVNZUL8S4DLF2OANJ8BE/A-terrace-5.jpg

# Contact
unsplash-image-oUi2tvBLInY.jpg: https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742502862602-ACQ492LNBTMJVNN9YPZU/unsplash-image-oUi2tvBLInY.jpg
```

---

## 8. Technical Notes

### 8.1 Fonts

Loaded via `next/font/google` in `layout.tsx`: `Cormorant` (weights 300/400, normal + italic, variable `--font-heading-var`) and `Raleway` (weights 300/400/500, variable `--font-body`). Consumed in `globals.css` `@theme inline` as `--font-heading` and `--font-sans`.

### 8.2 Theme Toggle

Three states: system (default) / light / dark. See §2.10 for full spec. Key files:
- `src/hooks/use-theme.ts` — always initialises to `"system"` (SSR-safe), syncs from `localStorage` in `useEffect`
- `src/app/layout.tsx` — inline IIFE in `<head>` sets `data-theme` before paint (FOUC prevention)
- `src/components/layout/header.tsx` — toggle button with Monitor/Sun/Moon icons

`[data-theme]` attribute on `<html>` drives CSS var overrides. No Tailwind `dark:` class needed.

### 8.3 Tailwind v4 Notes

`globals.css` uses `@theme inline` to map design tokens to Tailwind utilities. No `tailwind.config.ts`. Arbitrary variant syntax `[data-theme=dark_&]` is not supported in v4 — dark-mode overrides for components are written as plain CSS classes (e.g. `.btn-navy` in `globals.css`).

### 8.4 shadcn/ui Button

`src/components/ui/button.tsx` has `variant="gold"` (filled gold pill) and `variant="navy"` (outline navy pill). Both use `rounded-full` (100px radius) and Raleway 400, 11px uppercase. Dark-mode navy overrides via `.btn-navy` CSS class, not Tailwind arbitrary variants.

### 8.5 Build Verification

After any phase: run `bun run build` before committing. TypeScript errors and missing images will surface here. Do not commit code that doesn't build.

### 8.6 Deploy

Vercel Hobby, auto-deploys on push to `main`. Domain `nomadsnest.live` with DNS on Squarespace (A record → `216.198.79.1`, www CNAME → `5fb214831078e66e.vercel-dns-017.com`).

---

## 9. Decisions Log

| Decision | Choice | Rationale |
|---|---|---|
| Font stack | Cormorant + Raleway | Design spec direction; lighter, more delicate than Playfair + Inter |
| Default theme | System (follows OS preference) | Respects user's OS setting without forcing a choice; explicit light/dark override persisted to localStorage |
| Theme toggle | System/light/dark, system default | Respects OS preference by default; user can override; persisted in localStorage |
| Gallery scope | 6 rooms (no Safety/Landmarks) | Gallery = visual exploration of the apartment only; Safety in Guide, Landmarks future |
| Book page | Platform cards only, no form | Bookings happen on platforms; avoids form maintenance and backend cost |
| Guide/Check-in in nav | Hidden | Post-booking operational pages, not discovery pages |
| Contact page | Separate page | Keeps Book page focused on pricing/platforms; Contact has its own personality |
| Data layer | TypeScript constants | No CMS needed; content changes rarely; type safety valuable |
| Animations | Framer Motion FadeIn | Already installed; align values to design spec (y: 22, 800ms) |
