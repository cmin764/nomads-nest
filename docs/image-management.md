# Image Management

This guide covers every step for adding, replacing, reordering, or removing images on the site — from dropping a file into `public/` through to the code changes needed to make it visible, and the cleanup needed when you remove one.

---

## How images are wired up

There is no image CMS. Every image reference goes through two places:

| File | Role |
|---|---|
| `config/media.yaml` | Registry — the single list of every image the site is supposed to have on disk |
| `src/data/*.ts` | Content — what image to show where, in what order, with what alt text |

The `public/images/` folder is the physical store. `next/image` serves files from there. Nothing else matters; if a file is in `public/images/` and referenced in a `src/data/` file, it will appear on the site.

**Why alt text lives in `src/data/`, not `config/media.yaml`:**
Alt text is contextual — the same file can appear in multiple places and warrant different descriptions depending on context. More importantly, alt text in TypeScript data files is type-checked at build time: a missing field breaks the build. A missing key in YAML is silently `undefined` at runtime unless you write your own validation. The registry's job is presence tracking, not content.

---

## Folder layout

```
public/images/
  gallery/
    terrace/          # room gallery images
    bedroom/
    living-area/
    kitchen/
    bathroom/
    entrance/
    safety/           # /safety page images
    landmarks/        # /landmarks page images
  listing/            # listing page hero strip
  contact/            # contact page full-width image
  check-in/           # check-in step photos
  logo-nn-gold-crop.webp
```

---

## Pre-requisite: compress before committing

Git is not an image store. Keep every JPEG under 500 KB before committing.

```bash
# Compress all JPEGs in public/images/ using macOS sips
bash scripts/compress-images.sh

# Or compress a single file manually
sips -Z 2000 public/images/gallery/terrace/my-new-photo.JPG \
  --setProperty formatOptions 80 \
  --out public/images/gallery/terrace/my-new-photo.JPG
```

Check the result:
```bash
du -sh public/images/gallery/terrace/my-new-photo.JPG
```

Target: under 500 KB. For a hero/full-width image, aim for 200–350 KB at 2000 px wide.

---

## Scenario A — Add a new image to an existing gallery room

**1. Drop the file into the right folder.**

```
public/images/gallery/terrace/A-terrace-9.JPG
```

**2. Register it in `config/media.yaml`.**

Find the matching section (e.g. `gallery-terrace`) and add an entry:

```yaml
gallery-terrace:
  # ... existing entries ...
  - { file: gallery/terrace/A-terrace-9.JPG, status: present, url: null }
```

Use `status: present` when the file is already on disk. Use `status: cdn` + a `url` if you want the download script to fetch it automatically.

**3. Add it to the room's `images` array in `src/data/gallery-content.ts`.**

Position matters — the first image is displayed as the hero (2×2 grid span) on the room page. Put the widest establishing shot first, then progressively more detailed shots.

```typescript
// src/data/gallery-content.ts
{
  slug: "terrace",
  // ...
  images: [
    { src: base("terrace", "A-terrace-1.JPG"), alt: "Terrace with dining table, chairs and palm tree" },
    // ... existing images ...
    { src: base("terrace", "A-terrace-9.JPG"), alt: "Terrace at night with string lights" }, // ← new
  ],
},
```

Write a specific, descriptive alt text — "Terrace at night with string lights" not "terrace photo". This matters for SEO and accessibility.

**4. Verify the build.**

```bash
bun run build
```

---

## Scenario B — Change a room's cover image

The cover image is what appears on the `/gallery` index card for that room.

Edit `coverImage` in `src/data/gallery-content.ts`:

```typescript
{
  slug: "terrace",
  coverImage: base("terrace", "A-terrace-9.JPG"),  // ← change this
  // ...
}
```

The new image must already be in `public/images/gallery/terrace/` and in `config/media.yaml`. No other changes needed.

---

## Scenario C — Reorder images within a room

Edit the `images` array order in `src/data/gallery-content.ts`. The first entry becomes the hero image on the room page (spans 2 columns × 2 rows). For rooms with fewer than 3 images (currently: Entrance), no hero slot is applied — all images are equal size.

```typescript
images: [
  { src: base("terrace", "A-terrace-4.JPG"), alt: "Wine glasses on terrace at dusk" }, // ← hero
  { src: base("terrace", "A-terrace-1.JPG"), alt: "Terrace with dining table" },
  // ...
]
```

---

## Scenario D — Change the home page hero collage

The home page (`src/app/page.tsx`) hard-codes three images directly — it does not read from `gallery-content.ts`. Find the three `<Image>` components in the hero section and update their `src` props:

```typescript
// Terrace slot
src="/images/gallery/terrace/A-terrace-1.JPG"

// Bedroom slot
src="/images/gallery/bedroom/B-bedroom-1.JPG"

// Kitchen slot
src="/images/gallery/kitchen/D-kitchen-1.JPG"
```

Also check that the memory/CTA section further down the page (`A-terrace-4.JPG`) doesn't duplicate a hero slot image — they should be distinct.

There is no registry entry needed for home page images since they already live in `public/images/gallery/` and are tracked there. Just update the `src` string and `alt` text in `src/app/page.tsx`.

---

## Scenario E — Change a safety measure image

Safety images live in `public/images/gallery/safety/` and are wired in `src/data/safety-content.ts`. Each measure has exactly one photo.

```typescript
// src/data/safety-content.ts
{
  title: "Fire Extinguisher",
  description: "...",
  image: { src: base("CMN01998.JPG"), alt: "Fire extinguisher in mounting bracket" },
},
```

To swap the image: drop the new file into `public/images/gallery/safety/`, add it to the `gallery-safety` section in `config/media.yaml` (status: present), then update the `src` and `alt` in `safety-content.ts`.

---

## Scenario F — Change a landmark image or add/remove a landmark

Landmarks are in `public/images/gallery/landmarks/` and wired in `src/data/landmarks-content.ts`.

```typescript
// src/data/landmarks-content.ts
export const landmarks: Landmark[] = [
  {
    name: "Nissi Beach",
    description: "...",
    image: { src: base("DJI_0667.JPG"), alt: "Aerial view of Nissi Beach with turquoise water and sun beds" },
  },
  // ...
];
```

- To add a landmark: add an entry to `landmarks`, drop the image file into `public/images/gallery/landmarks/`, and register it in `config/media.yaml` under `gallery-landmarks`.
- To remove a landmark: delete the entry from `landmarks`, then follow the cleanup steps below.
- The order of entries controls the alternating left/right layout on the page (even index = image left, odd = image right).

---

## Scenario G — Remove an image (cleanup)

Removing an image requires three steps. Skip any of them and you get either a broken reference or dead files on disk.

**1. Remove the reference from `src/data/*.ts`.**

Delete the `{ src: ..., alt: ... }` entry (or the whole measure/landmark object) from the relevant data file.

**2. Remove the entry from `config/media.yaml`.**

Find and delete the line under the relevant section.

**3. Delete the file from `public/images/`.**

```bash
rm public/images/gallery/terrace/A-terrace-old.JPG
```

**4. Verify nothing else references it.**

```bash
grep -r "A-terrace-old" src/ public/
```

Should return nothing. If it returns hits, remove those references too before committing.

---

## Decorative images — when to use `alt=""`

`next/image` requires the `alt` prop — you cannot omit it. For images that are purely atmospheric and carry no informational content, pass an empty string instead of a description. Screen readers will skip the image entirely, which is correct behaviour.

Current candidates in this project:

| Image | Location | Rationale |
|---|---|---|
| `ctaImage` (listing CTA section) | `src/data/listing-content.ts` | Opacity-35 background; the "Interested?" heading carries the meaning |
| `contactImage` (contact full-width) | `src/data/contact-content.ts` | The quote overlay is the semantic content; the aerial photo is atmosphere |

If you decide these are decorative, set `alt=""` in the relevant data file. If the image meaningfully reinforces the content (e.g. guests would benefit from knowing it's an aerial view of Ayia Napa), keep a description.

All gallery, safety, and landmark images are content-bearing — they always need descriptive alt text.

---

## Audit: find images on disk not in any data file

Run this to spot dead files — images that exist physically but are referenced nowhere in the TypeScript data layer:

```bash
# List all image filenames referenced in src/data/
grep -roh '[A-Za-z0-9_-]*\.\(jpg\|JPG\|jpeg\|webp\|png\)' src/data/ \
  | sort -u > /tmp/referenced.txt

# List all physical image files
find public/images -type f | xargs -I{} basename {} \
  | sort -u > /tmp/ondisk.txt

# Show files on disk but not referenced
comm -23 /tmp/ondisk.txt /tmp/referenced.txt
```

Note: some filenames (like the logo, check-in photos, contact image) are referenced directly in page `.tsx` files rather than data files. Cross-check against those too:

```bash
grep -roh '[A-Za-z0-9_-]*\.\(jpg\|JPG\|jpeg\|webp\|png\)' src/app/ src/components/ \
  | sort -u
```

---

## Quick reference: which file controls what

| What you want to change | File to edit |
|---|---|
| Room gallery images, order, alt text, cover | `src/data/gallery-content.ts` |
| Room prev/next navigation order | `src/data/gallery-content.ts` → `roomOrder` array |
| Gallery index card cover images | `src/data/gallery-content.ts` → `coverImage` per room |
| Home page hero collage (3 images) | `src/app/page.tsx` — direct `src` props |
| Home page memory/CTA section background | `src/app/page.tsx` — direct `src` prop |
| Safety measure photos | `src/data/safety-content.ts` |
| Landmarks photos and captions | `src/data/landmarks-content.ts` |
| Listing page hero strip (4 images) | `src/data/listing-content.ts` → `galleryStrip` |
| Listing page hero image | `src/data/listing-content.ts` → `heroImage` |
| Listing page CTA section background | `src/data/listing-content.ts` → `ctaImage` |
| Contact page full-width image | `src/data/contact-content.ts` → `contactImage` |
| Registry of all images (for download script) | `config/media.yaml` |
