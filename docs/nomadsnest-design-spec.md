# Nomad's Nest — Design System Spec
> Hand this to any agent building UI for this project. Everything needed, nothing extra.

---

## Fonts
Load from Google Fonts:
```
Cormorant:ital,wght@0,300;0,400;1,300;1,400
Raleway:wght@300;400;500
```
- **Headings / display / quotes:** Cormorant, weight 300. Italic for subheadings and emphasis.
- **Body / labels / buttons / nav:** Raleway, weight 300 default, 400 for labels and button text.
- Never use bold (600+) anywhere. The lightness is the identity.

---

## Color Tokens (CSS variables)

```css
:root {
  /* Backgrounds */
  --bg:          #F5F2EC;   /* linen cream — page background */
  --surface:     #FFFFFF;   /* cards, nav, modals */
  --surface-alt: #EBF0F8;   /* subtle fills, image placeholders */

  /* Navy family */
  --navy:        #1B2A4A;   /* primary text color */
  --navy-mid:    #2E4A7A;   /* secondary buttons, tab active state */
  --navy-lt:     #D4DFF0;   /* pale sea — card fills, quote panels */

  /* Gold family */
  --gold:        #B8924A;   /* primary CTA buttons, accents, TOC active */
  --gold-dk:     #9A7A3C;   /* gold hover state */
  --gold-lt:     #F2E8D0;   /* parchment — warm fill backgrounds */

  /* Text */
  --text:        #1B2A4A;   /* same as --navy */
  --muted:       #4E6078;   /* secondary text, labels, descriptions */
  --border:      #D5DDE9;   /* dividers, card borders, input borders */
}

[data-theme="dark"] {
  --bg:          #08152A;
  --surface:     #0D1F3C;
  --surface-alt: #112448;
  --navy-lt:     #1A3A6A;
  --gold-lt:     #1E1408;
  --text:        #EDE8DC;
  --muted:       #8898B0;
  --border:      #18304E;
  /* --navy, --navy-mid, --gold, --gold-dk: unchanged in dark mode */
}
```

**Three colour families. That's it. No exceptions.**
Navy for structure and text. Gold for calls to action and hierarchy signals. Cream for breathing room.

---

## Typography Scale

| Role | Family | Weight | Size | Style | Notes |
|---|---|---|---|---|---|
| Display | Cormorant | 300 | 54px | normal | Logo, hero brand mark |
| H1 | Cormorant | 300 | 48–72px | italic | Page heroes |
| H2 | Cormorant | 300 | 28–36px | normal | Section headers |
| H3 / subheading | Cormorant | 300 | 19–22px | italic | Guide sections, card headers |
| Label / eyebrow | Raleway | 400 | 10–11px | uppercase | letter-spacing: 0.16–0.20em |
| Body | Raleway | 300 | 15–17px | normal | line-height: 1.75–1.85 |
| Small / meta | Raleway | 300 | 12–13px | normal | counts, subtitles |
| Button | Raleway | 400 | 11px | uppercase | letter-spacing: 0.14em |

---

## Buttons

Two types only. Shape is always `border-radius: 100px` (pill).

**Gold — primary CTAs (Book Now, Reserve):**
```css
background: var(--gold);
color: #F5F2EC;
border: none;
padding: 13px 34px;
font-size: 11px; font-weight: 400; letter-spacing: .14em; text-transform: uppercase;
hover: background var(--gold-dk), transform scale(1.02)
```

**Navy outline — everything else (View Gallery, Get Directions, About the Property):**
```css
background: transparent;
border: 1px solid var(--navy-mid);
color: var(--navy-mid);
padding: 12px 34px;
/* same font as gold button */
hover: background var(--navy-mid), color #F5F2EC
dark mode border/color: rgba(237,232,220,.3) / var(--text)
dark mode hover: background rgba(237,232,220,.1)
```

---

## Spacing & Layout

- Section padding: `88px 72px`
- Max content width (text-heavy pages): `760px` centered
- Max content width (visual pages): `1100px`
- Card gap: `14–16px`
- Grid gutter: `64–72px` for two-column layouts
- Body line-height: `1.75–1.85`

---

## Cards

All cards share this base:
```css
background: var(--surface);
border-radius: 14px;
border: 1px solid var(--border);
transition: border-color 300ms, transform 300ms, box-shadow 300ms;
hover: border-color var(--gold), translateY(-4px), box-shadow 0 14px 40px rgba(27,42,74,.07)
```

Dark mode hover shadow: `0 14px 40px rgba(0,0,0,.4)`

---

## Specific Components

### Nav
- Sticky, `z-index: 100`
- Layout: `[left links] [logo center] [toggle + CTA right]`
- Logo: Cormorant 300 italic, 22px, `color: var(--text)`
- Nav links: Raleway 400, 11px, uppercase, `0.16em` tracking, `color: var(--muted)`
- Background: `var(--surface)`, bottom border `1px solid var(--border)`

### Section Label (pill tag above sections)
```css
font-size: 10px; letter-spacing: .16em; text-transform: uppercase;
color: var(--muted); background: var(--surface-alt);
padding: 6px 16px; border-radius: 100px;
```

### Gold Divider Bar (used under hero headline)
```css
width: 44px; height: 1px; background: var(--gold); margin: 0 auto 40px;
```

### Review Carousel
- Full-width single-card carousel, `overflow: hidden`
- Quote: Cormorant 300 italic, 23px, centered, max-width 640px
- Large faint `"` mark: Cormorant, 96px, `color: var(--gold)`, `opacity: 0.2`
- Attribution: Raleway 400, 11px, uppercase, `color: var(--muted)`
- Controls: prev/next round buttons + pill dots (active dot: gold, `width: 24px`)
- Auto-advances every 5.5s, pauses on hover, supports keyboard arrows + touch swipe

### Check-in Tabs
- Pill-style tab group, `border: 1px solid var(--border)`, `border-radius: 100px`
- Active tab: `background: var(--navy-mid)`, `color: #EDE8DC`

### Step Number Badge
```css
width: 24px; height: 24px; border-radius: 50%;
background: var(--gold); color: #F5F2EC; font-size: 11px; font-weight: 500;
```

### TOC (Guide sidebar)
```css
border-left: 1px solid var(--border); padding-left: 24px;
position: sticky; top: 90px;
item color: var(--muted); active/hover color: var(--gold);
```

### Checklist Items
- Round checkbox: `border: 1px solid var(--border)`, transitions to `background: var(--gold)` when checked
- Checked label: line-through with `text-decoration-color: var(--border)`

### Pricing Table
- Price value: Cormorant 300, 20px, right-aligned
- Season label: Raleway 300, 15px, `color: var(--muted)`
- Row separator: `border-bottom: 1px solid var(--border)`

### Platform Buttons (Book page)
```css
display: flex; align-items: center; gap: 18px;
padding: 18px 22px; border-radius: 14px;
border: 1px solid var(--border); background: var(--surface);
hover: border-color var(--gold), translateX(4px)
arrow icon color → var(--gold) on hover
```

---

## Footer — Two Designs, One Per Theme

The footer is **not** a single component. Light and dark are different enough to warrant separate markup:

**Light mode footer** (`display: block` in light, `display: none` in dark):
- Background: `var(--bg)` (same cream as body — it breathes into the page)
- Top border: `1px solid var(--gold)` — the only boundary
- Logo: Cormorant 300 italic, 54px, `color: var(--navy)`
- Tagline below logo: Raleway 400, 11px uppercase, `color: var(--gold)`
- Two-column layout (address left, booking platforms right) separated by a hairline `1px` div
- Bottom strip: legal links + copyright in small muted text

**Dark mode footer** (`display: none` in light, `display: block` in dark):
- Background: `#08152A` (hardcoded — always night sea, never inherits theme vars)
- Logo: Cormorant 300 italic, 30px, `color: var(--gold)`
- Vertical bar separator: `1px height: 44px`, `rgba(184,146,74,.2)`
- Address: Raleway 300, 13px, `rgba(237,232,220,.35)`
- Legal links: 10px uppercase, `rgba(237,232,220,.18)`

---

## Animations

```css
/* Fade-in on scroll — apply class .fi to elements, add .visible via IntersectionObserver */
.fi {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 800ms cubic-bezier(.25,.46,.45,.94),
              transform 800ms cubic-bezier(.25,.46,.45,.94);
}
.fi.visible { opacity: 1; transform: none; }

/* Stagger delays */
.fi.d1 { transition-delay: 0ms; }
.fi.d2 { transition-delay: 130ms; }
.fi.d3 { transition-delay: 260ms; }
```

IntersectionObserver: `threshold: 0.08`, `rootMargin: '0px 0px -40px 0px'`

Card hover: `transform: translateY(-4px)` over `300ms`
Button hover: `transform: scale(1.02)` over `150ms`
Theme transition: `background 450ms ease, color 450ms ease` on `body`

No bounce. No spring physics. No parallax. Everything moves like it's floating.

---

## Theme Toggle

- Persist choice in `localStorage` key `'nn-theme'`
- Restore on page load before render (IIFE in `<head>` or top of `<body>`)
- Toggle button: 36px circle, `border: 1px solid var(--border)`, hover `border-color: var(--gold)`
- Shows ☀ in light mode, ☾ in dark mode

---

## Vibe (for any generative decisions)

Mediterranean morning light, not nightclub luxury. The photography carries the emotion — the UI just gets out of the way. When in doubt: more air, less weight. Thin over bold. Space over decoration. One gold accent earns more than five competing colours. The brand name should feel like it's carved into light, not stamped on a page.
