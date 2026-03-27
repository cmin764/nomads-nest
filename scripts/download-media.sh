#!/usr/bin/env bash
# Nomad's Nest — Media Download Utility
#
# Reads config/media.yaml and downloads every entry with status: cdn.
# Entries with status: present or missing are skipped.
#
# Usage (run from project root):
#   bash scripts/download-media.sh              # download all cdn entries
#   bash scripts/download-media.sh home         # filter by section name
#   bash scripts/download-media.sh gallery-bedroom
#
# To add a new asset:
#   1. Add an entry to config/media.yaml with status: cdn and a valid url.
#   2. Run this script.
#   3. Run: bash scripts/compress-images.sh   ← required before committing
#   4. Change status to present in config/media.yaml.
#
# After downloading, check sizes:
#   find public/images -name "*.jpg" -o -name "*.JPG" | \
#     xargs -I{} sh -c '[ $(wc -c < "{}") -gt 512000 ] && echo "Large: {}"'

set -euo pipefail

CONFIG="${CONFIG:-config/media.yaml}"
OUT="public/images"
FILTER="${1:-all}"

if [ ! -f "$CONFIG" ]; then
  echo "Error: config file not found: $CONFIG" >&2
  exit 1
fi

# python3 is available on macOS without any extra install
parse_and_download() {
  python3 - "$CONFIG" "$OUT" "$FILTER" <<'PYEOF'
import sys, os, urllib.request, urllib.error

config_path, out_dir, section_filter = sys.argv[1], sys.argv[2], sys.argv[3]

# Minimal YAML parser — handles the subset used in media.yaml.
# Supports top-level keys, list items with file/status/url fields.
def parse_media_yaml(path):
  sections = {}
  current_section = None
  current_item = None
  with open(path) as f:
    for raw in f:
      line = raw.rstrip()
      if not line or line.lstrip().startswith('#'):
        continue
      # Top-level key (no leading spaces, ends with colon)
      if not line[0].isspace() and line.rstrip().endswith(':'):
        current_section = line.strip().rstrip(':')
        sections[current_section] = []
        current_item = None
        continue
      stripped = line.lstrip()
      indent = len(line) - len(stripped)
      # List item start
      if stripped.startswith('- '):
        rest = stripped[2:].strip()
        if rest.startswith('{'):
          # Inline dict: { file: ..., status: ..., url: ... }
          rest = rest.strip('{}')
          item = {}
          for part in rest.split(','):
            k, _, v = part.strip().partition(':')
            item[k.strip()] = v.strip().strip('"').strip("'")
          if current_section is not None:
            sections[current_section].append(item)
          current_item = None
        else:
          # Multi-line item — start collecting
          current_item = {}
          if current_section is not None:
            sections[current_section].append(current_item)
          if rest:
            k, _, v = rest.partition(':')
            current_item[k.strip()] = v.strip().strip('"').strip("'")
      elif stripped and current_item is not None:
        k, _, v = stripped.partition(':')
        current_item[k.strip()] = v.strip().strip('"').strip("'")
  return sections

sections = parse_media_yaml(config_path)

total_fetched = 0
total_skipped = 0
total_failed  = 0

for section, items in sections.items():
  if section_filter != 'all' and section != section_filter:
    continue
  print(f'==> {section}')
  for item in items:
    status = item.get('status', '').strip()
    file_rel = item.get('file', '').strip()
    url = item.get('url', 'null').strip()
    if not file_rel:
      continue
    dest = os.path.join(out_dir, file_rel)
    name = os.path.basename(dest)
    if status == 'present' or os.path.isfile(dest):
      print(f'  skip  {name}')
      total_skipped += 1
    elif status == 'missing' or url == 'null' or not url:
      print(f'  miss  {name}  (URL unknown — update config/media.yaml)')
      total_skipped += 1
    elif status == 'cdn':
      os.makedirs(os.path.dirname(dest), exist_ok=True)
      print(f'  fetch {name}', end='', flush=True)
      try:
        urllib.request.urlretrieve(url, dest)
        print(' ✓')
        total_fetched += 1
      except urllib.error.URLError as e:
        print(f' FAIL — {e}')
        total_failed += 1
    else:
      print(f'  skip  {name}  (unknown status: {status!r})')
      total_skipped += 1

print()
print(f'Done: {total_fetched} fetched, {total_skipped} skipped, {total_failed} failed.')
if total_failed:
  print('Check FAIL lines above and verify URLs in config/media.yaml.')
if total_fetched:
  print('Compress any file over 500KB before committing.')
PYEOF
}

parse_and_download
