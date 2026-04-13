# Frontend Review Checklist — Nomad's Nest

Rules ordered by user-impact priority. IDs are used in review findings.
Skip rules that `bun run build` or `bun run lint` already catches automatically.

---

## 1. Next.js / App Router (N)

**N1** — `"use client"` is present only when a component genuinely needs browser APIs, event handlers, or stateful hooks. Server components are the default — most components should not have this directive.

**N2** — `"use client"` bubbles the entire module tree below it into the client bundle. Push it to the smallest possible leaf. Never put it on a parent that wraps server-renderable siblings. The established client components in this project are: `Header`, `TableOfContents`, `FarewellChecklist`, `DirectionsTabs`, `PhotoGrid`, `ReviewsCarousel`, `FadeIn`, `ReducedMotionConfig`. Flag any new addition.

**N3** — Props passed from a server component to a client component must be serializable. No class instances, `Date` objects, or functions — these throw at runtime.

**N4** — Secrets, DB clients, or non-`NEXT_PUBLIC_` env vars must not appear in `"use client"` files. They ship to the browser. (The inline theme script in `layout.tsx` is intentional and reads no secrets — do not flag it.)

**N5** — `next/image` for all content images. Never a raw `<img>` tag.

**N6** — `next/link` for all internal navigation. Never `<a href="...">` for same-origin paths.

**N7** — `error.tsx` must carry `"use client"`. Missing it causes a subtle runtime failure.

**N8** — `notFound()` and `redirect()` throw internally. Never wrap them in `try/catch` — the throw is swallowed and both calls silently do nothing.

**N9** — In Next.js 15/16, `params` and `searchParams` in pages and layouts are `Promise<...>`. Always `await` them. Synchronous destructuring is a type error and a runtime warning.

**N10** — Never mix a static `export const metadata` with `generateMetadata` in the same file. The static export is silently ignored when both are present.

---

## 2. TypeScript (T)

**T1** — No `any`. If the type is genuinely unknown, use `unknown` and narrow it. Type assertions (`as X`) are acceptable only when the type is provably correct at that call site.

**T2** — Props interfaces are defined — no implicit `{}` or untyped props.

**T3** — No type assertions that paper over a real type mismatch.

**T4** — `import type` for type-only imports to avoid unnecessary runtime references.

---

## 3. Tailwind v4 (TW)

**TW1** — No references to `tailwind.config.ts` — it does not exist. All custom tokens live in `src/app/globals.css` via `@theme inline`.

**TW2** — Custom colors and fonts are consumed via mapped utility classes (`text-gold`, `bg-surface`, etc.) or `var(--token)` inline styles, not hardcoded hex values. Available token utilities are listed in `CLAUDE.md`.

**TW3** — No Tailwind v3-style `theme()` function calls in CSS. Use `var(--token)` instead.

**TW4** — Dark mode is handled via `[data-theme="dark"]` attribute selectors in `globals.css`. The `dark:` Tailwind variant is not configured — do not use it.

**TW5** — When a component accepts a `className` prop or builds class strings conditionally, use `cn()` from `@/lib/utils`. Direct string concatenation silently drops a class when two utilities conflict.

**TW6** — Split style pattern: when a `style` object mixes a token (convertible to a utility class) and a non-token property (opacity, clamp, box-shadow, etc.), move the token to `className` and keep only the non-token in `style`. Three legitimate reasons to keep inline `style`: (1) tint/opacity variants with no utility (`--navy-lt`, `--gold-lt`), (2) CSS functions that cannot be static utilities (`color-mix(...)`), (3) non-token properties (`opacity`, `clamp(...)`, `min-height`, `transition` timing strings, `backdrop-filter`, `box-shadow` with `rgba()`).

**TW7** — No `outline-none` without a `focus-visible:ring-*` replacement. Suppressing outlines without a substitute breaks keyboard accessibility.

---

## 4. Performance (P)

**P1** — Above-fold and hero images must have the `priority` prop on `<Image>`. Omitting it lazy-loads the LCP image and tanks Core Web Vitals. This is the single most common LCP regression in Next.js.

**P2** — `next/image` without explicit `width`/`height` (or `fill` plus a sized parent) causes CLS. Prefer static imports for local files — Next.js then infers dimensions automatically and adds a blur placeholder.

**P3** — Fonts via `next/font` only. A raw `<link href="fonts.googleapis.com/...">` adds a cross-origin request chain (~300 ms on cold loads) and bypasses automatic subsetting and self-hosting.

**P4** — `<script>` tags must use `next/script` with an explicit `strategy`. Bare `<script>` blocks HTML parsing. The inline theme-init script in `layout.tsx` uses `dangerouslySetInnerHTML` intentionally (synchronous theme application before paint) — do not flag it.

**P5** — No large images in `public/`. Hard limit: 500 KB per file.

**P6** — Static data arrays and objects (nav links, card configs, etc.) should be defined at module scope, not inside component function bodies. Re-creating them on every render is unnecessary work and breaks reference equality for memoised children.

---

## 5. Image pipeline (IMG)

**IMG1** — Images go under `public/images/` in the appropriate subfolder (`gallery/{room}/`, `contact/`, `check-in/`, etc.). `public/images/gallery/` is the canonical source — other pages reference images from there rather than duplicating files.

**IMG2** — 500 KB hard limit per file. Batch compress with `bash scripts/compress-images.sh`; single file with `sips -Z 2000 path.jpg --setProperty formatOptions 80 --out path.jpg`.

**IMG3** — Dimensions in `src/data/gallery-content.ts` must be EXIF-corrected. Use Pillow, not `sips` — `sips` ignores EXIF rotation and reports wrong dimensions for camera-rotated photos:
```
cd public/images && python3 -c "from PIL import Image, ImageOps; from pathlib import Path; [print(f, *ImageOps.exif_transpose(Image.open(f)).size) for f in sorted(Path('gallery').rglob('*.JPG'))]"
```

**IMG4** — Prefer static imports over string paths for local images. Static imports give Next.js width, height, and a blur placeholder automatically.

**IMG5** — Alt text must be specific and contextual (`"Terrace dining table with palm tree at dusk"`, not `"terrace"`). Purely decorative/background images use `alt=""`. The same file in two places may need different descriptions — alt belongs at the point of use, not in a central registry.

**IMG6** — No image duplication. Each photo should appear in exactly one place in `src/`. When multiple flows share a step, define a single shared constant and reference it.

**IMG7** — Brand-logo icons for external platforms (WhatsApp, Airbnb, Booking.com, HomeExchange) use the `BrandIcon` component from `@/components/ui/brand-icon`. Social platform icons (`Instagram`, `Facebook`) that were removed from lucide-react 1.x are rendered as inline SVGs on the Contact page — maintain this pattern; do not re-import them from lucide.

---

## 6. Caching (C)

This project uses no `fetch()` calls — all content is static TypeScript constants. Apply these rules only if dynamic data fetching is introduced.

**C1** — Next.js 15+ changed the `fetch()` default from `force-cache` to `no-store`. Bare `fetch()` calls ported from v14-era code may now be unintentionally dynamic — review each one explicitly.

**C2** — Next.js 16 introduces the `"use cache"` directive. Flag `next: { revalidate: N }` options on `fetch()` calls as candidates for migration to the new explicit cache model.

**C3** — `revalidateTag()` without a matching `next: { tags: [...] }` on the originating fetch does nothing. Verify tags used in `revalidateTag` calls actually appear in the relevant fetch options.

**C4** — Mixed `revalidate` values across a layout/page tree: the shortest value wins the entire segment. A layout with `revalidate: 3600` and a child page with `revalidate: 0` makes the whole route always dynamic.

**C5** — `unstable_cache` on per-user data without including the user identifier in the cache key is a cache-poisoning risk.

---

## 7. Server Actions (SA)

This project has no Server Actions. Apply these rules only if actions are introduced.

**SA1** — Validate all inputs server-side with a schema library (Zod, Valibot). Client-side validation is UX only — anyone can POST directly to an action endpoint.

**SA2** — Authorization must be checked inside every action. Middleware can be bypassed (CVE-2025-29927); the action itself must verify the session and ownership.

**SA3** — Use `{ error: string }` return pattern instead of `throw` — thrown errors are untyped and can leak stack traces to the client.

**SA4** — Call `revalidatePath` or `revalidateTag` after mutations or the UI will show stale data.

---

## 8. Security (SEC)

**SEC1** — CVE-2025-29927: middleware is not a security boundary. An attacker can send `x-middleware-subrequest` to bypass middleware logic. This project has no auth middleware, but verify the project is on Next.js ≥ 15.2.3 (check `package.json`). If auth or access control is ever added, it must live in the data layer, not middleware.

**SEC2** — `dangerouslySetInnerHTML`: the only legitimate use is the inline theme-init script in `layout.tsx` (no user input, no external data). Flag any new occurrence immediately.

**SEC3** — External links that open in a new tab need `rel="noopener noreferrer"`. Check every `target="_blank"` link.

**SEC4** — No secrets, API keys, or credentials in source files or committed `.env` files.

**SEC5** — `next.config.ts` should set security response headers for all routes via `headers()`. Minimum: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`. Vercel does not add these automatically.

---

## 9. Accessibility (A)

**A1** — Content images have descriptive, specific `alt` text. Decorative/background images use `alt=""`. Alt text is contextual — the same file in two places may need different descriptions.

**A2** — Icon-only interactive elements (buttons containing only an icon, no visible text) require `aria-label`. Check all icon buttons in the header, gallery navigation, and carousel.

**A3** — ARIA state must track React state. Open overlays need `aria-expanded="true"`; selected items need `aria-selected="true"`. Stale ARIA attributes actively mislead assistive technology.

**A4** — A skip navigation link (`<a href="#main-content">Skip to content</a>`) must be the first focusable element in the root layout. It is already present — verify it has not been removed.

**A5** — Each page must have exactly one `<h1>`. Heading levels are sequential with no skipped levels (h1 → h2 → h3).

**A6** — Landmark regions must be present: `<header>`, `<nav>`, `<main>`, `<footer>`. Flag any page that bypasses the root layout or adds content outside these landmarks.

**A7** — Color contrast: the gold-on-cream pairing (`#C9A84C` on `#faf9f6`) is approximately 2.4:1 — it fails WCAG AA for body text. Flag any new UI that uses this combination for non-decorative text and note a contrast check is needed.

**A8** — Focus must be visible on all interactive elements. The existing `focus-visible:ring-*` on shadcn Button is correct. Custom `<button>` elements must not suppress the browser default without a replacement.

**A9** — Reduced motion: both layers must be present. (1) `<MotionConfig reducedMotion="user">` in the root layout wraps framer-motion animations. (2) `@media (prefers-reduced-motion: reduce)` in `globals.css` suppresses CSS transitions. Verify neither has been removed.

**A10** — External links that open in a new tab should signal this to assistive technology. Icon-only social links should carry an `aria-label` that includes "opens in new tab" or equivalent.

---

## 10. Testing & CI (CI)

**CI1** — `bun run build` and `bun run lint` must pass. Any change that would break the CI pipeline is a blocker. Run these before reviewing anything else — if they fail, stop and fix.

**CI2** — Complex utility functions or custom hooks with non-trivial logic should have unit tests. Flag new logic in `src/lib/` or `src/hooks/` with no test coverage.

**CI3** — Critical interactive flows (gallery lightbox, check-in tab switching, farewell checklist persistence, theme toggle) warrant at least a smoke test. Flag new interactive flows that lack coverage.

**CI4** — The CI workflow runs `bun run lint` then `bun run build`. Do not add steps that require secrets or external services — the pipeline is intentionally simple and must stay green on every push.

---

## 11. Data layer & copy (D)

**D1** — All page content lives in `src/data/`. Edit content there, not in components. The data files are: `check-in-steps.ts`, `guide-content.ts`, `book-content.ts`, `listing-content.ts`, `gallery-content.ts`, `transport-content.ts`, `contact-content.ts`.

**D2** — No em dashes (`—`) in any content you control: page copy, data files, alt text, metadata titles, descriptions. Use a period, colon, comma, or parentheses instead. Exception: verbatim third-party text (guest reviews, quoted messages) must not be altered.

**D3** — No AI-flavoured copy patterns: no "seamlessly", "nestled", "perfect blend of X and Y", no trailing summaries restating what was just said. One clear thought per sentence, no filler.

**D4** — Transport data follows the three-layer pipeline: `docs/transport-routes.md` (authoritative research) → `src/data/transport-content.ts` (typed constants) → `src/components/check-in/transport-modal.tsx` (UI, reads data only). Changes to bus schedules or prices go in the doc first, then reflected in the data file.

---

## 12. Code quality (Q)

**Q1** — No dead code, commented-out blocks, or debug `console.log` statements.

**Q2** — No backwards-compatibility shims, renamed `_unused` variables, or re-exports for removed code.

**Q3** — No duplicate logic. Before writing a new utility or component, check if an existing one covers the need. Check shadcn/ui before writing a custom primitive.

**Q4** — Imports are ordered: global/external at the top, internal (`@/`) below. No unused imports.

**Q5** — `bun` is the only package manager. No `package-lock.json` or `yarn.lock` committed.

**Q6** — Module-level constants for values that should not be recomputed on each render: year values (`CURRENT_YEAR`), static arrays, config objects. Do not define these inside component function bodies.
