#!/usr/bin/env bash
# Nomad's Nest — Media Download Utility
#
# Downloads images from the Squarespace CDN into the correct public/images/ subdirectories.
# Run from the project root: bash scripts/download-media.sh
#
# Usage:
#   bash scripts/download-media.sh            # download all known assets
#   bash scripts/download-media.sh home       # download only home assets
#   bash scripts/download-media.sh listing    # download only listing assets
#   bash scripts/download-media.sh gallery    # download only gallery thumbnails
#   bash scripts/download-media.sh bedroom    # download only bedroom gallery
#   bash scripts/download-media.sh contact    # download only contact assets
#
# After downloading, compress any image over 500KB:
#   find public/images -name "*.jpg" -o -name "*.JPG" | xargs -I{} sh -c 'if [ $(wc -c < "{}") -gt 512000 ]; then echo "Large: {}"; fi'

set -euo pipefail

BASE="https://images.squarespace-cdn.com/content/v1/67d9d32c574702393cd7a4b9"
OUT="public/images"

download() {
  local url="$1"
  local dest="$2"
  local filename
  filename="$(basename "$dest")"
  mkdir -p "$(dirname "$dest")"
  if [ -f "$dest" ]; then
    echo "  skip  $filename (already exists)"
  else
    echo "  fetch $filename"
    curl -fsSL --retry 3 "$url" -o "$dest" || echo "  FAIL  $filename — check URL"
  fi
}

# ─── HOME ─────────────────────────────────────────────────────────────────────
download_home() {
  echo "==> Home"
  download "$BASE/1742333672583-9S892NENGTJ9GION4P5R/A-terrace-5.jpg"    "$OUT/home/A-terrace-5.jpg"
  download "$BASE/0b3fd61c-7edd-42f5-9127-75c1b69a6186/A-terrace-4.JPG"  "$OUT/home/A-terrace-4.JPG"
  download "$BASE/8cf31929-cb35-47f1-aad8-63fa88695675/B-bedroom-1.JPG"  "$OUT/home/B-bedroom-1.JPG"
  download "$BASE/8a446fc3-fd27-41aa-bcd6-8770e26798b7/D-kitchen-8.JPG"  "$OUT/home/D-kitchen-8.JPG"
}

# ─── LISTING ──────────────────────────────────────────────────────────────────
download_listing() {
  echo "==> Listing"
  download "$BASE/171d5d44-2b08-45dd-9ebf-d998eb80af22/CMN01490.JPG"     "$OUT/listing/CMN01490.JPG"
  download "$BASE/3e72164e-cbf1-448b-a865-30953e847944/CMN01439.JPG"     "$OUT/listing/CMN01439.JPG"
  download "$BASE/2722c642-e8eb-4854-9494-ff47c3bf1797/D-kitchen-7.JPG"  "$OUT/listing/D-kitchen-7.JPG"
  download "$BASE/c9c1917c-8c47-4330-bb52-5a4587efedac/CMN01580.JPG"     "$OUT/listing/CMN01580.JPG"
  download "$BASE/6d6bb3d1-64e2-407d-a708-23e0619aa0e0/CMN01874.JPG"     "$OUT/listing/CMN01874.JPG"
  download "$BASE/610f6327-86d8-4c16-87a2-7a8dbbe77b1a/A-terrace-8.JPG"  "$OUT/listing/A-terrace-8.JPG"
  download "$BASE/7e4c5d3f-23f2-4b09-bd97-5e16d0e79f91/A-terrace-6.JPG"  "$OUT/listing/A-terrace-6.JPG"
}

# ─── GALLERY THUMBNAILS (index page covers) ───────────────────────────────────
download_gallery() {
  echo "==> Gallery thumbnails"
  download "$BASE/1742840882450-9VVG87RJIDHP47HX8INN/CMN02030.JPG"      "$OUT/gallery/entrance/CMN02030.JPG"
  download "$BASE/1742655281102-HBQOUDG3U3T2OYRQFAAB/B-bedroom-1.JPG"   "$OUT/gallery/bedroom/B-bedroom-1.JPG"
  download "$BASE/1742655621895-O9Q5DZ32A0DYASRE2XA4/C-bathroom-2.JPG"  "$OUT/gallery/bathroom/C-bathroom-2.JPG"
  download "$BASE/1742656037098-1QFL3FAEVS0BO2EQO3SM/D-kitchen-3.JPG"   "$OUT/gallery/kitchen/D-kitchen-3.JPG"
  download "$BASE/1742657226397-01GHC05MDC3R3STS0JX4/D-living-10.JPG"   "$OUT/gallery/living-area/D-living-10.JPG"
  download "$BASE/1742657120599-RVNZUL8S4DLF2OANJ8BE/A-terrace-5.jpg"   "$OUT/gallery/terrace/A-terrace-5.jpg"
  # Safety thumbnail (CDN path unknown — add when provided)
  # download "$BASE/1742657632292-426EYI4MA6C3Y9WK20ZU/CMN01759.JPG"   "$OUT/gallery/safety/CMN01759.JPG"
  # Landmarks thumbnail (CDN path unknown — add when provided)
  # download "$BASE/1742658783051-X4RWIALS04Z35XNBJLZ4/IMG_6430.JPG"   "$OUT/gallery/landmarks/IMG_6430.JPG"
}

# ─── BEDROOM GALLERY (full 23 images) ─────────────────────────────────────────
# CDN paths for B-bedroom-* and CMN* within bedroom are not fully captured.
# Add URLs as you retrieve them from the Squarespace media library.
# Known CDN URL for B-bedroom-1.JPG is handled above in gallery thumbnails.
download_bedroom() {
  echo "==> Bedroom gallery"
  echo "  NOTE: Most bedroom CDN paths are unknown. Add URLs below as retrieved."
  echo "  Filenames expected:"
  echo "    B-bedroom-{1-8}.JPG, CMN01407.JPG, CMN01402.JPG, CMN01430.JPG,"
  echo "    CMN01483.JPG, CMN01439.JPG, CMN02478.JPG, CMN02477.JPG, CMN01448.JPG,"
  echo "    CMN01453.JPG, CMN01491.JPG, CMN01461.JPG, CMN01463.JPG, CMN01478.JPG,"
  echo "    CMN01493.JPG, CMN02012.JPG"
  echo "  Add lines like: download \"\$BASE/<uuid>/<filename>\" \"$OUT/gallery/bedroom/<filename>\""
  # Uncomment and fill in as URLs are provided:
  # download "$BASE/???/B-bedroom-2.jpg"   "$OUT/gallery/bedroom/B-bedroom-2.jpg"
  # download "$BASE/???/B-bedroom-3.JPG"   "$OUT/gallery/bedroom/B-bedroom-3.JPG"
  # download "$BASE/???/B-bedroom-4.JPG"   "$OUT/gallery/bedroom/B-bedroom-4.JPG"
  # download "$BASE/???/B-bedroom-5.jpg"   "$OUT/gallery/bedroom/B-bedroom-5.jpg"
  # download "$BASE/???/B-bedroom-6.JPG"   "$OUT/gallery/bedroom/B-bedroom-6.JPG"
  # download "$BASE/???/B-bedroom-7.JPG"   "$OUT/gallery/bedroom/B-bedroom-7.JPG"
  # download "$BASE/???/B-bedroom-8.JPG"   "$OUT/gallery/bedroom/B-bedroom-8.JPG"
  # download "$BASE/???/CMN01407.JPG"      "$OUT/gallery/bedroom/CMN01407.JPG"
  # ... add remaining
}

# ─── CONTACT ──────────────────────────────────────────────────────────────────
download_contact() {
  echo "==> Contact"
  download "$BASE/1742502862602-ACQ492LNBTMJVNN9YPZU/unsplash-image-oUi2tvBLInY.jpg" \
    "$OUT/contact/unsplash-image-oUi2tvBLInY.jpg"
}

# ─── DISPATCH ─────────────────────────────────────────────────────────────────
FILTER="${1:-all}"

case "$FILTER" in
  home)     download_home ;;
  listing)  download_listing ;;
  gallery)  download_gallery ;;
  bedroom)  download_bedroom ;;
  contact)  download_contact ;;
  all)
    download_home
    download_listing
    download_gallery
    download_bedroom
    download_contact
    ;;
  *)
    echo "Unknown filter: $FILTER"
    echo "Valid options: all, home, listing, gallery, bedroom, contact"
    exit 1
    ;;
esac

echo ""
echo "Done. Check above for any FAIL lines — those URLs need updating."
echo "Compress any file over 500KB before committing (see header comment)."
