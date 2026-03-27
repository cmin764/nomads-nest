#!/usr/bin/env bash
# Nomad's Nest — Image Compression Utility
#
# Compresses all JPEGs in public/images/ to web-safe sizes using macOS sips.
# Target: every file under 500KB. Runs multiple passes if needed.
#
# Strategy:
#   Pass 1 — max 2048px longest edge, quality 75  (gallery/hero images)
#   Pass 2 — max 1600px, quality 60               (anything still over 500KB)
#   Pass 3 — max 1280px, quality 55               (anything still over 500KB)
#
# sips is macOS built-in — no extra installs required.
# Always run this before git add on any new images.
#
# Usage:
#   bash scripts/compress-images.sh               # compress all in public/images/
#   bash scripts/compress-images.sh public/images/gallery/bedroom

set -euo pipefail

TARGET="${1:-public/images}"
TMPF="/tmp/nn_compress_tmp.jpg"
THRESHOLD=512000   # 500KB in bytes

compress_pass() {
  local max_px="$1"
  local quality="$2"
  local pass_label="$3"
  local changed=0

  find "$TARGET" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r f; do
    size=$(wc -c < "$f")
    if [ "$size" -gt "$THRESHOLD" ]; then
      sips -Z "$max_px" -s format jpeg -s formatOptions "$quality" "$f" --out "$TMPF" > /dev/null 2>&1
      mv "$TMPF" "$f"
      new=$(wc -c < "$f")
      echo "  $pass_label  $(( size / 1024 ))K → $(( new / 1024 ))K  $(basename "$f")"
      changed=$(( changed + 1 ))
    fi
  done
}

echo "==> Pass 1: max 2048px, quality 75"
compress_pass 2048 75 "p1"

echo "==> Pass 2: max 1600px, quality 60  (files still over 500KB)"
compress_pass 1600 60 "p2"

echo "==> Pass 3: max 1280px, quality 55  (files still over 500KB)"
compress_pass 1280 55 "p3"

echo ""
echo "Results:"
over=0
find "$TARGET" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r f; do
  size=$(wc -c < "$f")
  if [ "$size" -gt "$THRESHOLD" ]; then
    echo "  OVER  $(( size / 1024 ))KB  $f"
    over=$(( over + 1 ))
  fi
done

total=$(find "$TARGET" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | wc -l | tr -d ' ')
du -sh "$TARGET" | awk "{print \"  Total: \$1 across $total JPEG files\"}"

echo ""
echo "Any remaining OVER lines need manual attention (very large/complex images)."
echo "Consider cropping or reducing resolution further for those specific files."
