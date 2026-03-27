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
  --bg:          #08152A;   /* night sea — default theme */
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

**Dark is the default theme.** Light mode is available via toggle, persisted in `localStorage` under key `nn-theme`.

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

> **This replaces Playfair Display + Inter in the current build.** Phase 1 includes swapping fonts in `layout.tsx` and updating all `font-heading` / `font-sans` usages.

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

```css
background: var(--gold);
color: #F5F2EC;
border: none;
padding: 13px 34px;
font-family: var(--sans);
font-size: 11px;
font-weight: 400;
letter-spacing: .14em;
text-transform: uppercase;
border-radius: 100px;
cursor: pointer;
transition: background 250ms, transform 150ms;

&:hover {
  background: var(--gold-dk);
  transform: scale(1.02);
}
```

#### Navy Outline — Everything Else (View Gallery, Get Directions, About the Property)

```css
background: transparent;
border: 1px solid var(--navy-mid);
color: var(--navy-mid);
padding: 12px 34px;
/* same font as gold */
border-radius: 100px;
transition: all 250ms;

&:hover {
  background: var(--navy-mid);
  color: #F5F2EC;
}

/* Dark mode overrides */
[data-theme="dark"] & {
  border-color: rgba(237, 232, 220, .3);
  color: var(--text);
}
[data-theme="dark"] &:hover {
  background: rgba(237, 232, 220, .1);
  border-color: rgba(237, 232, 220, .5);
}
```

> In the current build, update `src/components/ui/button.tsx`. The `gold` variant becomes the pill-gold above. Add a `navy` variant for the outline style. Remove `rounded-none` and `tracking-widest` from the current gold variant.

### 2.5 Cards

All cards share this base style:

```css
background: var(--surface);
border-radius: 14px;
border: 1px solid var(--border);
transition: border-color 300ms, transform 300ms, box-shadow 300ms, background 450ms;

&:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(27, 42, 74, .07);
}

[data-theme="dark"] &:hover {
  box-shadow: 0 14px 40px rgba(0, 0, 0, .4);
}
```

### 2.6 Section Label (Eyebrow Pill)

Used above section headings to signal context (e.g., "Amenities", "Reviews", "Gallery").

```css
display: inline-block;
font-size: 10px;
letter-spacing: .16em;
text-transform: uppercase;
color: var(--muted);
background: var(--surface-alt);
padding: 6px 16px;
border-radius: 100px;
margin-bottom: 52px;
font-weight: 400;
```

### 2.7 Gold Divider Bar

Used under hero headlines to anchor them visually.

```css
width: 44px;
height: 1px;
background: var(--gold);
margin: 0 auto 40px;
```

### 2.8 Step Number Badge (Check-in)

```css
width: 24px;
height: 24px;
border-radius: 50%;
background: var(--gold);
color: #F5F2EC;
font-size: 11px;
font-weight: 500;
display: inline-flex;
align-items: center;
justify-content: center;
```

### 2.9 Animations

```css
/* Fade-in on scroll */
.fi {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 800ms cubic-bezier(.25, .46, .45, .94),
              transform 800ms cubic-bezier(.25, .46, .45, .94);
}
.fi.visible { opacity: 1; transform: none; }

/* Stagger delays */
.fi.d1 { transition-delay: 0ms; }
.fi.d2 { transition-delay: 130ms; }
.fi.d3 { transition-delay: 260ms; }
```

IntersectionObserver: `threshold: 0.08`, `rootMargin: '0px 0px -40px 0px'`

Other transitions:
- Card hover: `translateY(-4px)` over `300ms`
- Button hover: `scale(1.02)` over `150ms`
- Theme switch: `background 450ms ease, color 450ms ease` on `body`

**Never:** bounce, spring physics, parallax, slide-in from sides.

> The current build uses Framer Motion's `FadeIn` component. This can stay — just align the values (y: 22, duration: 0.8, easing matches cubic-bezier above).

### 2.10 Theme Toggle

Three states: **system** (default) → **light** → **dark** → system (cycles).

#### FOUC Prevention (inline script in `<head>`)

```html
<!-- In layout.tsx, before stylesheets load -->
<script dangerouslySetInnerHTML={{ __html: `
(function(){
  var t = localStorage.getItem('nn-theme');
  var resolved = t === 'light' ? 'light'
    : t === 'dark' ? 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', resolved);
})();
`}} />
```

When no preference is saved (`nn-theme` absent or `"system"`), falls back to `prefers-color-scheme`.

#### `useTheme` Hook (`src/hooks/use-theme.ts`)

```typescript
type Theme = 'system' | 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    return (localStorage.getItem('nn-theme') as Theme) || 'system'
  })

  useEffect(() => {
    const root = document.documentElement
    const apply = (resolved: 'light' | 'dark') =>
      root.setAttribute('data-theme', resolved)

    if (theme === 'system') {
      localStorage.removeItem('nn-theme')
      apply(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } else {
      localStorage.setItem('nn-theme', theme)
      apply(theme)
    }

    // Keep in sync when system preference changes while in system mode
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (theme === 'system') apply(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const cycle = () =>
    setTheme(t => t === 'system' ? 'light' : t === 'light' ? 'dark' : 'system')

  return { theme, setTheme, cycle }
}
```

#### Toggle Button (in Header)

```tsx
const { theme, cycle } = useTheme()
const icon = theme === 'light' ? <Sun /> : theme === 'dark' ? <Moon /> : <Monitor />
```

Icons: lucide-react `Sun`, `Moon`, `Monitor`. Button: 36px circle, `border: 1px solid var(--border)`, hover `border-color: var(--gold)`.

localStorage key: `nn-theme`. Values: `"light"` | `"dark"` | absent (system). Default: system.

### 2.11 Nav Component

```
Layout: [left links]  [centered logo]  [toggle + CTA right]
```

```css
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 72px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 450ms, border-color 450ms;
}

/* Nav links */
font-size: 11px;
font-weight: 400;
letter-spacing: .16em;
text-transform: uppercase;
color: var(--muted);
transition: color 200ms;
&:hover { color: var(--text); }

/* Logo */
font-family: var(--serif);
font-weight: 300;
font-style: italic;
font-size: 22px;
letter-spacing: .06em;
color: var(--text);
```

### 2.12 Review Carousel

- Full-width single-card carousel, `overflow: hidden`
- Quote: Cormorant 300 italic, 23px, centered, max-width 640px
- Large faint `"` mark: Cormorant 96px, `color: var(--gold)`, `opacity: 0.2`
- Attribution: Raleway 400, 11px, uppercase, `color: var(--muted)`
- Controls: prev/next round buttons + pill dots (active dot: gold, `width: 24px`)
- Auto-advances every 5.5s, pauses on hover, keyboard arrows + touch swipe

### 2.13 Pricing Table

```css
.pricing-table td { padding: 16px 0; font-size: 15px; font-weight: 300; }
.pricing-table td:first-child { color: var(--muted); }
.pricing-table td:last-child {
  text-align: right;
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 300;
}
```

### 2.14 Platform Link Cards (Book page)

```css
display: flex;
align-items: center;
gap: 18px;
padding: 18px 22px;
border-radius: 14px;
border: 1px solid var(--border);
background: var(--surface);
transition: border-color 250ms, transform 250ms;

&:hover {
  border-color: var(--gold);
  transform: translateX(4px);
}
&:hover .arrow { color: var(--gold); }
```

Platform icon backgrounds:
- Airbnb: `#FFEAE0` / dark: `rgba(255,120,80,.15)`
- Booking.com: `#E8F0FF` / dark: `rgba(46,74,122,.4)`
- HomeExchange: `#E8F5EB` / dark: `rgba(60,120,60,.2)`

---

## 3. Site Architecture

### 3.1 Route Map

| Route | Page Title | Audience | Status |
|---|---|---|---|
| `/` | Home | Public | To build |
| `/listing` | The Space | Public | To build |
| `/gallery` | Gallery | Public | To build |
| `/gallery/entrance` | Entrance | Public | To build |
| `/gallery/bedroom` | Bedroom | Public | To build |
| `/gallery/bathroom` | Bathroom | Public | To build |
| `/gallery/kitchen` | Kitchen | Public | To build |
| `/gallery/living-area` | Living Area | Public | To build |
| `/gallery/terrace` | Terrace | Public | To build |
| `/book` | Book | Public | To build |
| `/contact` | Contact | Public | To build |
| `/guide` | Guest Guide | Booked guests only | **Built** — needs retheme |
| `/check-in` | Check-in Instructions | Booked guests only | **Built** — needs retheme |
| `/privacy-policy` | Privacy Policy | Both | To build |
| `/terms` | Terms & Conditions | Both | To build |
| `/data-protection` | Data Protection Notice | Both | To build |

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
│   10 minutes from the city centre. 20 minutes  │
│   from the beach. A space designed to let you  │
│   relax, work, and explore at your own pace.   │  ← body Raleway 300
│                                                 │
│      [Book Now]    [About the Property]         │  ← gold pill + navy outline
└─────────────────────────────────────────────────┘
```

**Image strip layout:** 3 columns, aspect ratio ~16:9 each. Left column 1.7x width of right two. Border-radius 10px. Images use placeholder fills until assets available.

Images needed:
- `A-terrace-5.jpg` (available on Squarespace CDN, see rebuild spec §6)
- `B-bedroom-1.JPG`
- `D-kitchen-8.JPG`

**Memory section** (dark/image background, `min-height: 60vh`):
```
            A place to make memories.      ← H2 Cormorant
     Designed to make every stay feel like home.
                  [Book Now]
```
Background image: `A-terrace-4.JPG`. Dark overlay. Light text.

**"Already a guest?" section** (small, below memory, links for booked guests):
```
  Already checked in?
  [House Guide →]    [Check-in Instructions →]    ← navy outline pills, small
```
These are the only surface on the public site that links to Guide/Check-in.

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
  │  +357 97 671058                              │
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
**Social:** `http://instagram.com/nomadsnest.live`, `http://facebook.com/nomadsnest.live`

**Metadata:**
```typescript
title: "Contact"
description: "Get in touch with Nomad's Nest. Address, phone, email, and social links."
```

---

### 4.7 Guest Guide (`/guide`) — Already Built

Content is complete and correct. Needs only a **retheme** in Phase 1:

1. Swap font variables to Cormorant + Raleway
2. Update colors to navy/gold/cream palette
3. TOC component: `border-left: 1px solid var(--border)`, active item `color: var(--gold)`
4. Tabs component: pill style (`border-radius: 100px`, active `background: var(--navy-mid)`)
5. Checklist items: round checkbox, checked state `background: var(--gold)`
6. Guide section items: `border-bottom: 1px solid var(--border)`, item icon `color: var(--gold)`
7. Highlight items: `color: var(--gold)`, no background

No content changes.

**Access:** Not in nav. Shared via direct link by host after booking.

---

### 4.8 Check-in Instructions (`/check-in`) — Already Built

Content is complete and correct. Needs only a **retheme** in Phase 1:

1. Same font/color swap as Guide
2. Tabs: pill style matching design spec
3. Step cards: updated card style (14px radius, gold step badge)
4. Step number badge: `background: var(--gold)`, 24px circle

No content changes.

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
    check-in/                   ← exists (self-checkin-*.jpg, self-checkin-car-*.jpg)
    home/
      A-terrace-5.jpg
      A-terrace-4.jpg
      B-bedroom-1.JPG
      D-kitchen-8.JPG
    listing/
      CMN01490.JPG
      CMN01439.JPG
      D-kitchen-7.JPG
      CMN01580.JPG
      CMN01874.JPG
      A-terrace-8.JPG
      A-terrace-6.JPG
    gallery/
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
        [+ others]
      living-area/
        D-living-9a.jpg
        D-living-10.JPG
        [+ others]
      terrace/
        A-terrace-2.jpg
        A-terrace-5.jpg
        [+ others]
    contact/
      unsplash-image-oUi2tvBLInY.jpg
```

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
Phone:     +357 97 671058
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
# Homepage
A-terrace-5.jpg:  https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742333672583-9S892NENGTJ9GION4P5R/A-terrace-5.jpg
B-bedroom-1.JPG:  https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/8cf31929-cb35-47f1-aad8-63fa88695675/B-bedroom-1.JPG
D-kitchen-8.JPG:  https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/8a446fc3-fd27-41aa-bcd6-8770e26798b7/D-kitchen-8.JPG
A-terrace-4.JPG:  https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/0b3fd61c-7edd-42f5-9127-75c1b69a6186/A-terrace-4.JPG

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

### 8.1 Font Swap (Phase 1)

In `src/app/layout.tsx`:
```typescript
import { Cormorant, Raleway } from 'next/font/google'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-heading-var',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})
```

Then in `globals.css` `@theme inline`:
```css
--font-sans: var(--font-body), system-ui, sans-serif;
--font-heading: var(--font-heading-var), Georgia, serif;
```

### 8.2 Theme Toggle (Phase 1)

Three states: system (default) / light / dark. See §2.10 for full implementation.

Summary of files needed:
- `src/hooks/use-theme.ts` — hook with state, FOUC-safe init, system listener
- `src/app/layout.tsx` — inline IIFE script in `<head>` before stylesheets
- `src/components/layout/header.tsx` — cycle button with Sun/Moon/Monitor icons

`data-theme` attribute on `<html>` drives the CSS var overrides in globals.css. No Tailwind `dark:` class approach needed (the design spec uses attribute selectors directly).

### 8.3 Tailwind v4 Color Update

In `globals.css`, the `:root` block and `@theme inline` block both need updating. Map the design spec CSS vars through Tailwind:

```css
:root {
  --background: var(--bg);
  --foreground: var(--text);
  --primary: var(--gold);
  /* etc. */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --font-sans: var(--font-body), system-ui, sans-serif;
  --font-heading: var(--font-heading-var), Georgia, serif;
}
```

### 8.4 shadcn/ui Button Override

The current `button.tsx` uses `rounded-none` and `tracking-widest`. For the pill design, the gold variant needs `rounded-full` (maps to `border-radius: 100px` in Tailwind). The navy outline variant needs to be added.

### 8.5 Build Verification

After any phase: run `bun run build` before committing. TypeScript errors and missing images will surface here. Do not commit code that doesn't build.

### 8.6 Deploy

Vercel Hobby, auto-deploys on push to `main`. Domain `nomadsnest.live` with DNS on Squarespace (A record → `216.198.79.1`, www CNAME → `5fb214831078e66e.vercel-dns-017.com`).

---

## 9. Decisions Log

| Decision | Choice | Rationale |
|---|---|---|
| Font stack | Cormorant + Raleway | Design spec direction; lighter, more delicate than Playfair + Inter |
| Default theme | Dark (night sea `#08152A`) | User preference; photographic content pops on dark backgrounds |
| Theme toggle | System/light/dark, system default | Respects OS preference by default; user can override; persisted in localStorage |
| Gallery scope | 6 rooms (no Safety/Landmarks) | Gallery = visual exploration of the apartment only; Safety in Guide, Landmarks future |
| Book page | Platform cards only, no form | Bookings happen on platforms; avoids form maintenance and backend cost |
| Guide/Check-in in nav | Hidden | Post-booking operational pages, not discovery pages |
| Contact page | Separate page | Keeps Book page focused on pricing/platforms; Contact has its own personality |
| Data layer | TypeScript constants | No CMS needed; content changes rarely; type safety valuable |
| Animations | Framer Motion FadeIn | Already installed; align values to design spec (y: 22, 800ms) |
