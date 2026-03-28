# Nomad's Nest

Website for [Nomad's Nest](https://nomadsnest.live) — a short-term self-catering rental apartment in Ayia Napa, Cyprus. Migrated from Squarespace to a self-hosted Next.js site on Vercel.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — design tokens via `@theme inline` in `globals.css`
- **shadcn/ui** — `button` and `tabs` components
- **Framer Motion** — scroll fade-in animations
- **Bun** — package manager and runtime

## Development

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build (run before committing)
bun run lint
```

## Structure

```
src/
  app/            # Next.js App Router pages
  components/     # UI and layout components
  data/           # Typed content constants (no CMS)
  hooks/          # useTheme
  lib/            # utilities
config/
  media.yaml      # image asset registry
docs/
  blueprint.md    # living design & development spec
scripts/
  download-media.sh   # fetch CDN images listed in media.yaml
  compress-images.sh  # compress JPEGs to <500KB using macOS sips
public/
  images/         # all static images (gallery/ is canonical source)
```

All page content is typed TypeScript constants in `src/data/` — no CMS, no API calls.

## Images

`public/images/gallery/` is the single canonical source for all room photos. Other pages reference images from there directly. See `config/media.yaml` for the full asset registry and `docs/blueprint.md §5` for the strategy.

```bash
bash scripts/download-media.sh            # download all cdn-status entries
bash scripts/download-media.sh gallery-bedroom   # filter by section
bash scripts/compress-images.sh          # compress all JPEGs to <500KB
```

## Deployment

Hosted on Vercel Hobby (free). Pushes to `main` deploy automatically. Domain: `nomadsnest.live`.

## License

MIT — see [LICENSE](LICENSE).
