# Nomad's Nest — Rebuild Spec
> Reference document for replicating nomadsnest.live as a Next.js / React site on Vercel.
> Source of truth: live Squarespace site crawled March 2026.

---

## 1. Site Structure (Routes)

| Route | Page | Notes |
|---|---|---|
| `/` | Homepage | Hero slider + 2 content sections |
| `/listing` | Property Listing | Full details, amenities, reviews |
| `/gallery` | Gallery Index | 8 category cards |
| `/gallery/entrance` | Entrance photos | Photo grid |
| `/gallery/bedroom` | Bedroom photos | Photo grid |
| `/gallery/bathroom` | Bathroom photos | Photo grid |
| `/gallery/kitchen` | Kitchen photos | Photo grid |
| `/gallery/living-area` | Living area photos | Photo grid |
| `/gallery/terrace` | Terrace photos | Photo grid |
| `/gallery/safety` | Safety photos | Photo grid |
| `/gallery/landmarks` | Landmarks photos | Photo grid |
| `/book` | Book | Pricing + platform links |
| `/contact` | Contact | Info + map link + CTA |
| `/guide` | Guest Guide | Long-form instructions |
| `/check-in` | Check-in instructions | Referenced from Guide |
| `/privacy-policy` | Privacy Policy | Legal |
| `/terms-and-conditions` | Terms | Legal |
| `/data-protection-notice` | Data Protection | Legal |

---

## 2. Design Language

### Color Palette (inferred from logo + brand)
- **Primary accent**: Gold / warm amber — `#C9A84C` or similar (logo filename: `logo-nn-gold-crop.jpg`)
- **Background**: Dark/neutral base (typical for luxury short-term rental aesthetic)
- **Text**: Light on dark sections, dark on light
- **CTA buttons**: Gold or outlined gold, pill/rounded

### Typography (inferred from Squarespace template style)
- **Headings**: Serif or elegant sans-serif, uppercase for section titles
- **Body**: Clean sans-serif, generous line-height
- **Nav**: Light weight, uppercase tracking

### Layout Principles
- Full-width hero images on most pages
- Centered content blocks with generous whitespace
- Max content width ~1200px
- Mobile-first: hamburger nav on mobile

---

## 3. Global Navigation

**Desktop layout** (centered logo pattern):
```
[Listing]  [Gallery]  [Contact]    [LOGO]    [Book Now CTA]
```

**Mobile**: Hamburger menu, slides open with all nav links.

**Logo**: `logo-nn-gold-crop.jpg` — centered in nav on desktop, left on mobile.

**"Book Now"** is a distinct CTA button (not a plain link) — appears in nav and throughout pages.

---

## 4. Page-by-Page Spec

### 4.1 Homepage (`/`)

**Section 1 — Hero (full viewport)**
- Fullscreen **image slideshow/carousel**, auto-advancing
- Images (in order):
  - `A-terrace-5.jpg`
  - `B-bedroom-1.JPG`
  - `D-kitchen-8.JPG`
- Headline overlaid: **"Living well in Ayia Napa, Cy."**
- Body: "If you're looking for the perfect place to experience the best of Ayia Napa, Nomads' Nest is ready to welcome you. Located just 10 minutes from the city center and 20 minutes from the beach, our thoughtfully designed apartment offers a comfortable, fully equipped space where you can relax, work, and explore at your own pace."
- CTA: **"About the Property"** → `/listing`

**Section 2 — Memory section**
- Background image: `A-terrace-4.JPG`
- Headline: **"A place to make memories."**
- Subtext: "Designed to make every stay feel like home."
- CTA: **"Book Now"** → `/book`

**Footer**: See Section 7.

---

### 4.2 Listing (`/listing`)

**Hero**
- Full-width image: `CMN01490.JPG`
- Headline: **"Island Charm Modern Comfort Work, Rest, Explore"**
- Stats block (3 items separated by `–`):
  - 48 sqm interior
  - AC & fan in every room / Dedicated workspace
  - High-speed internet

**Image gallery strip** (horizontal scroll or grid):
- `CMN01439.JPG`
- `D-kitchen-7.JPG`
- `CMN01580.JPG`
- `CMN01874.JPG`

**Property intro block**
- Music attribution: *🎵 Klingande - Jubel* (site likely plays background music — note for rebuild: optional autoplay audio, muted by default with toggle)
- Location: *📌 63 Tefkrou Anthia*
- Description: "A blend of contemporary convenience and relaxed island vibes. The perfect place to unwind, explore, or work remotely. With a spacious terrace, high-speed internet, and a fully equipped interior, this is more than just a stay — it's an experience waiting to be lived."

**Full-width image**: `A-terrace-8.JPG`

**Amenities section** — 6-column grid of cards, each links to its gallery sub-page:

| Room | Link | Items |
|---|---|---|
| BEDROOM | `/gallery/bedroom` | Double Bed, Generous Wardrobe, Adjustable Desk, Vanity Table, 2 Mirrors |
| BATHROOM | `/gallery/bathroom` | Shower Cabin, Towel Hangers, Storage Shelves, Laundry Basket, Smart Scale |
| KITCHEN | `/gallery/kitchen` | Electric Stove, Fridge, Washing Machine, Toaster/Kettle/Espresso Machine, Cutlery/Plates/Utensils |
| LIVING AREA | `/gallery/living-area` | Sofa Bed, Armchair & Table, TV & HDMI Cable, Dining Table & Chairs, Fiber Optic Internet (300 Mbps) |
| TERRACE | `/gallery/terrace` | Wide Area (17 sqm), Wooden Table & Chairs, Umbrella, Smoking Zone, Pests Repeller |
| SAFETY | `/gallery/safety` | Carbon Monoxide Detector, Smoke Detector, Fire Extinguisher, Fire Blanket, First Aid Kit |

**CTA section**
- Image: `A-terrace-6.JPG`
- Headline: **"Interested?"**
- CTA: **"Book Now"** → `/book`

**Reviews carousel** (6 reviews, auto-scroll or manual):

1. *"Clean, modern, very organised, and extremely well-equipped apartment with a spacious terrace..."* — Ovidiu R.
2. *"Fully equipped apartment in a good location. Parking almost always available. Great communication..."* — Jovan M.
3. *"We had a great time at this place! Everything was impeccable: the apartment was very clean..."* — Dallia E.
4. *"Great facilities, gorgeous and clean! We were very happy. Excellent communication with the owner."* — Erika O.
5. *"The apartment is perfect, clean and in a good location. The host is very responsive, we recommend this listing!!"* — Tom A.
6. *"Everything was just perfect - great location, top-notch service..."* — Yonatan H.K.

---

### 4.3 Gallery Index (`/gallery`)

**Intro text**: "This stylish apartment combines comfort and elegance, featuring a serene marine-themed bedroom in soothing blue tones, a cozy living area, a fully equipped kitchen, and a spacious terrace where you can unwind and enjoy the fresh air. Stay, relax, and make yourself at home! 💙"

**8-card grid** (image + label + link):

| Label | Thumbnail URL | Route |
|---|---|---|
| Entrance | `CMN02030.JPG` (timestamp `1742840882450`) | `/gallery/entrance` |
| Bedroom | `B-bedroom-1.JPG` (timestamp `1742655281102`) | `/gallery/bedroom` |
| Bathroom | `C-bathroom-2.JPG` (timestamp `1742655621895`) | `/gallery/bathroom` |
| Kitchen | `D-kitchen-3.JPG` (timestamp `1742656037098`) | `/gallery/kitchen` |
| Living area | `D-living-10.JPG` (timestamp `1742657226397`) | `/gallery/living-area` |
| Terrace | `A-terrace-5.JPG` (timestamp `1742657120599`) | `/gallery/terrace` |
| Safety | `CMN01759.JPG` (timestamp `1742657632292`) | `/gallery/safety` |
| Landmarks | `IMG_6430.JPG` (timestamp `1742658783051`) | `/gallery/landmarks` |

Full CDN base: `https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/`

---

### 4.4 Gallery Sub-pages (`/gallery/[category]`)

**Shared layout**:
- Category tagline (italic, emoji): e.g. *Feel the sea breeze 🌊* for bedroom
- Category heading: e.g. **Bedroom**
- Masonry or grid photo layout — all images for that room
- Bottom navigation: **← Previous** / **Next →** linking to adjacent categories

**Bedroom** (23 images):
`B-bedroom-1.JPG`, `B-bedroom-2.jpg`, `B-bedroom-3.JPG`, `B-bedroom-4.JPG`, `B-bedroom-5.jpg`, `B-bedroom-6.JPG`, `B-bedroom-7.JPG`, `B-bedroom-8.JPG`, `CMN01407.JPG`, `CMN01402.JPG`, `CMN01430.JPG`, `CMN01483.JPG`, `CMN01439.JPG`, `CMN02478.JPG`, `CMN02477.JPG`, `CMN01448.JPG`, `CMN01453.JPG`, `CMN01491.JPG`, `CMN01461.JPG`, `CMN01463.JPG`, `CMN01478.JPG`, `CMN01493.JPG`, `CMN02012.JPG`

> Note: other gallery sub-pages (entrance, bathroom, kitchen, living-area, terrace, safety, landmarks) need to be scraped from the Squarespace media library directly since the markdown crawler didn't extract full image URLs from the lazy-loaded gallery grids. Use the Squarespace file manager to download all assets before cancelling.

---

### 4.5 Book (`/book`)

**Hero image**: `A-terrace-4.JPG`
**Headline**: "Your Vacay Awaits"
**Section title**: "Reservation Request"

**Pricing table**:
| Season | Price/night |
|---|---|
| April–May | €75 |
| June–August | €85 |
| September–October | €75 |
| November, March | €65 |
| December–February | Closed |

**Additional fees/rules**:
- Extra guests: +€7/person/night
- €70 compulsory cleaning fee
- Discount: weekly 5%, monthly 30%
- 4 persons max capacity
- 3 nights minimum stay

**Platform links** (3 prominent buttons):
- Airbnb: `https://airbnb.com/h/nomadsnestcy`
- Booking.com: `https://www.booking.com/hotel/cy/nomads-nest-quiet-flat-with-terrace-in-ayia-napa.html`
- HomeExchange: `https://www.homeexchange.com/holiday-home/2895395`

**Contact fallback**: "Have a question? Send us an email." → `book@nomadsnest.live`

---

### 4.6 Contact (`/contact`)

**Info block**:
- Address: 63 Tefkrou Anthia, Ayia Napa, Cyprus 5330
- Phone: +357 97 671058
- Email: book@nomadsnest.live
- Names: Georgiana Harnagea, Cosmin Poieana
- CTA: **"Get Directions"** → `https://maps.app.goo.gl/He2MabrTTnF3TVjMA`

**Full-width image**: `unsplash-image-oUi2tvBLInY.jpg`

**Quote section**: *"Paradise is where we are."*

**CTA**: **"Book Now"** → `/book`

---

### 4.7 Guide (`/guide`)

Long-form guest instructions page. Full structured content (see crawl). Key sections:
- Getting In: Self Check-In, Reaching the Place (car/public transport), Entering the Apartment
- Comfort & Convenience: Water/Energy, Connectivity & Entertainment
- Bathroom & Cleaning Etiquette
- House Rules
- Handy Extras: Locations, Water Notes
- Farewell Checklist

References internal link: `/check-in` (check-in instructions sub-page — needs to be fetched separately).

Design note: this is a content-heavy page. Render as clean long-form document with sticky section nav (table of contents) on desktop for usability.

---

## 5. UX Mechanics & Interactions

| Feature | Location | Notes |
|---|---|---|
| Image slideshow/carousel | Homepage hero | Auto-advance, 3 images |
| Image grid | Listing page | Horizontal scroll strip or 2-col grid |
| Category card grid | Gallery index | 4×2 or 2×4 responsive grid, hover effect |
| Photo lightbox | Gallery sub-pages | Click to expand, prev/next navigation |
| Previous/Next nav | Gallery sub-pages | Between room categories |
| Reviews carousel | Listing page | 6 testimonials, auto or manual swipe |
| Booking platform buttons | Book page | 3 distinct CTA buttons (Airbnb, Booking, HomeExchange) |
| Mobile hamburger menu | All pages | Slides in from top or side |
| Background music | Listing page | Optional — Klingande "Jubel" referenced; implement as muted autoplay toggle |
| Scroll-triggered animations | All pages | Likely fade-in on scroll (standard Squarespace behavior) |

---

## 6. Asset Inventory

### Logo
```
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/6dde8282-4b64-4942-ab99-2ca056f4f8fc/logo-nn-gold-crop.jpg
```

### Homepage images
```
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742333672583-9S892NENGTJ9GION4P5R/A-terrace-5.jpg
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/8cf31929-cb35-47f1-aad8-63fa88695675/B-bedroom-1.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/8a446fc3-fd27-41aa-bcd6-8770e26798b7/D-kitchen-8.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/7e4c5d3f-23f2-4b09-bd97-5e16d0e79f91/A-terrace-6.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/0b3fd61c-7edd-42f5-9127-75c1b69a6186/A-terrace-4.JPG
```

### Listing page images
```
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/171d5d44-2b08-45dd-9ebf-d998eb80af22/CMN01490.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/3e72164e-cbf1-448b-a865-30953e847944/CMN01439.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/2722c642-e8eb-4854-9494-ff47c3bf1797/D-kitchen-7.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/c9c1917c-8c47-4330-bb52-5a4587efedac/CMN01580.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/6d6bb3d1-64e2-407d-a708-23e0619aa0e0/CMN01874.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/610f6327-86d8-4c16-87a2-7a8dbbe77b1a/A-terrace-8.JPG
```

### Gallery index thumbnails
```
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742840882450-9VVG87RJIDHP47HX8INN/CMN02030.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742655281102-HBQOUDG3U3T2OYRQFAAB/B-bedroom-1.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742655621895-O9Q5DZ32A0DYASRE2XA4/C-bathroom-2.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742656037098-1QFL3FAEVS0BO2EQO3SM/D-kitchen-3.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742657226397-01GHC05MDC3R3STS0JX4/D-living-10.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742657120599-RVNZUL8S4DLF2OANJ8BE/A-terrace-5.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742657632292-426EYI4MA6C3Y9WK20ZU/CMN01759.JPG
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742658783051-X4RWIALS04Z35XNBJLZ4/IMG_6430.JPG
```

### Contact page image
```
https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9/1742502862602-ACQ492LNBTMJVNN9YPZU/unsplash-image-oUi2tvBLInY.jpg
```

### ⚠️ Assets that MUST be downloaded from Squarespace dashboard before cancellation
- Homepage hero **video** (autoplay, muted, loops on homepage)
- All individual gallery room photos (23+ in bedroom alone; other rooms uncounted)
- Any additional images used in `/check-in`, `/privacy-policy`, `/terms-and-conditions`, `/data-protection-notice`
- The full original image files (not CDN-resized versions) for quality

---

## 7. Footer (Global)

```
63 Tefkrou Anthia
Ayia Napa, Cyprus 5330
+357 97 671058

---

Privacy Policy • Terms & Conditions • Data Protection Notice

© 2026 Nomad's Nest. All rights reserved.
```

---

## 8. Tech Stack Recommendation for Rebuild

| Concern | Solution |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Image hosting | Vercel Blob or just `/public` folder |
| Contact/booking form | Resend (free tier: 3k emails/month) or Formspree |
| Deployment | Vercel (Hobby tier, free) |
| Domain | Point existing `nomadsnest.live` DNS to Vercel |
| Gallery lightbox | `yet-another-react-lightbox` or `photoswipe` |
| Carousel | `embla-carousel-react` (lightweight, no deps) |
| Animations on scroll | `framer-motion` or plain CSS `IntersectionObserver` |

**Annual cost after migration: ~€12–15 for domain renewal only.**

---

## 9. What's NOT in This Spec

The live Squarespace site uses proprietary CSS and a paid template. The following things were NOT extractable via crawl and require visual inspection of the live site before cancellation:

- **Exact font names** (open browser devtools → Network tab, filter by font)
- **Exact color hex values** (devtools → Elements → computed styles)
- **Transition/animation specifics** (scroll fade-in timing, carousel speed)
- **Exact spacing/padding values**
- **Hero video file** (must download from Squarespace media library)

**Recommended action before March 21st**: Open the live site in Chrome, open DevTools, and screenshot the computed styles for: nav, hero section, body text, headings, button styles, and footer. 10 minutes of work that saves guesswork later.
