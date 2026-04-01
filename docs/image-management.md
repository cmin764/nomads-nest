# Image Management

This guide covers adding, replacing, reordering, or removing images — from dropping a file into `public/` through to the code changes needed to make it visible.

---

## How images are wired up

There is no image CMS. Every image reference goes through one place:

| File | Role |
|---|---|
| `src/data/*.ts` | Content — what image to show where, in what order, with what alt text |

The `public/images/` folder is the physical store. `next/image` serves files from there. If a file is in `public/images/` and referenced in a `src/data/` file, it will appear on the site.

Source photos (originals before compression) live at `/Users/cmin/Pictures/NomadsNest/` in three subdirectories: `Home/`, `Listing/`, and `Around/`.

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

## Recording dimensions

Every gallery image entry in `src/data/gallery-content.ts` must include `width` and `height`.

**Do not use `sips` for detection.** `sips` reports raw stored pixel dimensions and ignores EXIF rotation tags, producing wrong results for camera-rotated photos. Use Python/Pillow which applies EXIF rotation automatically:

```bash
cd public/images && python3 -c "
from PIL import Image, ImageOps
from pathlib import Path
for f in sorted(Path('gallery').rglob('*.JPG')) + sorted(Path('gallery').rglob('*.jpg')):
    img = ImageOps.exif_transpose(Image.open(f))
    w, h = img.size
    print(f'{f}  {w}x{h}  {\"portrait\" if h > w else \"landscape\"}')
"
```

Then add to the `src/data/gallery-content.ts` image entry:

```typescript
{ src: base("terrace", "A-terrace-9.JPG"), alt: "Terrace at night with string lights", width: 2048, height: 1365 }
```

Orientation is derived at runtime (`height > width`) — no separate flag needed.

---

## Scenario A — Add a new image to an existing gallery room

**1. Drop the file into the right folder.**

```
public/images/gallery/terrace/A-terrace-9.JPG
```

**2. Compress it.**

```bash
sips -Z 2000 public/images/gallery/terrace/A-terrace-9.JPG \
  --setProperty formatOptions 80 \
  --out public/images/gallery/terrace/A-terrace-9.JPG
```

**3. Add it to the room's `images` array in `src/data/gallery-content.ts`.**

Position matters — the first image is the hero (wide left slot). Put the widest establishing shot first, then progressively more detailed shots.

```typescript
{
  slug: "terrace",
  images: [
    // ... existing images ...
    { src: base("terrace", "A-terrace-9.JPG"), alt: "Terrace at night with string lights", width: 2048, height: 1365 },
  ],
},
```

Write a specific, descriptive alt text — "Terrace at night with string lights" not "terrace photo".

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
}
```

The new image must already be in `public/images/gallery/terrace/`. No other changes needed.

---

## Scenario C — Reorder images within a room

Edit the `images` array order in `src/data/gallery-content.ts`. The first entry becomes the hero image on the room page (wide left slot, spans two rows). For rooms with fewer than 3 images (currently: Entrance), no hero slot is applied — all images are equal size.

```typescript
images: [
  { src: base("terrace", "A-terrace-4.JPG"), alt: "Wine glasses on terrace at dusk", width: 2048, height: 1365 }, // ← hero
  { src: base("terrace", "A-terrace-1.JPG"), alt: "Terrace with dining table", width: 1600, height: 1066 },
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

---

## Scenario E — Change a safety measure image

Safety images live in `public/images/gallery/safety/` and are wired in `src/data/safety-content.ts`. Each measure has exactly one photo.

```typescript
{
  title: "Fire Extinguisher",
  description: "...",
  image: { src: base("CMN01998.JPG"), alt: "Fire extinguisher in mounting bracket" },
},
```

To swap the image: drop the new file into `public/images/gallery/safety/`, compress it, then update the `src` and `alt` in `safety-content.ts`.

---

## Scenario F — Change a landmark image or add/remove a landmark

Landmarks are in `public/images/gallery/landmarks/` and wired in `src/data/landmarks-content.ts`.

- To add a landmark: add an entry to `landmarks` and drop the image file (compressed) into `public/images/gallery/landmarks/`.
- To remove a landmark: delete the entry from `landmarks`, then follow the cleanup steps below.
- The order of entries controls the alternating left/right layout on the page (even index = image left, odd = image right).

---

## Scenario G — Remove an image (cleanup)

**1. Remove the reference from `src/data/*.ts`.**

Delete the `{ src: ..., alt: ... }` entry (or the whole measure/landmark object) from the relevant data file.

**2. Delete the file from `public/images/`.**

```bash
rm public/images/gallery/terrace/A-terrace-old.JPG
```

**3. Verify nothing else references it.**

```bash
grep -r "A-terrace-old" src/ public/
```

Should return nothing.

---

## Decorative images — when to use `alt=""`

`next/image` requires the `alt` prop. For images that are purely atmospheric and carry no informational content, pass an empty string. Screen readers will skip the image entirely, which is correct behaviour.

Current candidates:

| Image | Location | Rationale |
|---|---|---|
| `ctaImage` (listing CTA section) | `src/data/listing-content.ts` | Opacity-35 background; the "Interested?" heading carries the meaning |
| `contactImage` (contact full-width) | `src/data/contact-content.ts` | The quote overlay is the semantic content; the aerial photo is atmosphere |

All gallery, safety, and landmark images are content-bearing — they always need descriptive alt text.

---

## Audit: find images on disk not referenced anywhere

```bash
# Filenames referenced in src/
grep -roh '[A-Za-z0-9_-]*\.\(jpg\|JPG\|jpeg\|webp\|png\)' src/ \
  | sort -u > /tmp/referenced.txt

# Physical image files
find public/images -type f | xargs -I{} basename {} \
  | sort -u > /tmp/ondisk.txt

# Files on disk but not referenced
comm -23 /tmp/ondisk.txt /tmp/referenced.txt
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
