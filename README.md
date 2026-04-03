# Nomad's Nest

Website for [Nomad's Nest](https://nomadsnest.live) — a short-term self-catering rental apartment in Ayia Napa, Cyprus. Migrated from Squarespace to a self-hosted Next.js site on Vercel.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — design tokens via `@theme inline` in `globals.css`
- **shadcn/ui** — `button`, `tabs`, and `dialog` components
- **Framer Motion** — scroll fade-in animations
- **Bun** — package manager and runtime
- **Vercel Analytics** — page-view analytics

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
  hooks/          # useTheme, useLightbox
  lib/            # utilities
docs/
  blueprint.md    # living design & development spec
scripts/
  compress-images.sh  # compress JPEGs to <500KB using macOS sips
public/
  images/         # all static images (gallery/ is canonical source)
```

All page content is typed TypeScript constants in `src/data/` — no CMS, no API calls.

## Images

`public/images/gallery/` is the single canonical source for all room photos. Other pages reference images from there directly. See `docs/blueprint.md §5` for the asset strategy.

For a step-by-step guide on adding, replacing, reordering, or removing images — including home page collage, gallery covers, safety measures, and landmarks — see **[docs/image-management.md](docs/image-management.md)**.

```bash
bash scripts/compress-images.sh   # compress all JPEGs to <500KB
```

## Deployment

Hosted on Vercel Hobby (free). Pushes to `main` deploy automatically. Domain: `nomadsnest.live`.

## License

MIT — see [LICENSE](LICENSE).
