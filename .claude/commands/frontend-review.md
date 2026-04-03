Nomad's Nest — React/Next.js 16 App Router code review. Checks this project's specific stack (Tailwind v4, shadcn/ui, framer-motion, bun, no CMS) against React patterns, TypeScript correctness, caching, performance, security (CVE-2025-29927), accessibility, and project conventions. Follow the steps below in order.

---

## Step 1 — Collect the diff

Run `git diff main...HEAD` to get the full changeset. Also run `git diff main...HEAD --name-only` to get the list of changed files.

---

## Step 2 — Stack detection

Confirm the stack from the changed files and `CLAUDE.md`:
- Next.js 16, App Router, TypeScript, Turbopack
- Tailwind CSS v4 (config lives entirely in `src/app/globals.css` via `@theme inline` — no `tailwind.config.ts`)
- shadcn/ui, framer-motion, lucide-react
- No CMS — all content is typed TypeScript constants in `src/data/`
- `bun` only (never npm/yarn)

Note any deviation from the expected stack in the findings.

---

## Step 3 — Review each changed file

For every file in the diff, check the categories below. Skip categories that don't apply to the file type.

### React / Next.js App Router
- `"use client"` is present only when the component genuinely needs browser APIs, event handlers, or stateful hooks. Server components are the default.
- `"use client"` bubbles up the entire module tree below it — push it to the smallest possible leaf, not a parent that wraps server-renderable siblings.
- Props passed from a server component to a client component must be serializable. No class instances, `Date` objects, or functions — these throw at runtime.
- Secrets, DB clients, or non-`NEXT_PUBLIC_` env vars must not appear in `"use client"` files. They ship to the browser.
- `next/image` is used for every content image — never a raw `<img>` tag.
- `next/link` is used for all internal navigation — never `<a href>` for same-origin links.
- `error.tsx` must be a `"use client"` component — missing this directive causes a subtle runtime failure.
- `loading.tsx` should exist for any route that does async data fetching — without it, the user sees a blank screen while the server streams the response.
- `not-found.tsx` should exist at the `app/` root level and at any nested segment where a missing resource is possible. Calling `notFound()` without a boundary renders the global 404 fallback, which may leak layout context.
- Don't call a Route Handler from a Server Component — that's a redundant network round-trip; call the data layer directly.
- `notFound()` and `redirect()` throw internally — never wrap them in `try/catch` or the throw will be swallowed.
- Missing `key` prop on lists rendered from Server Components can cause reconciliation bugs during client-side transitions.

### TypeScript
- No `any` unless genuinely unavoidable and commented.
- Props interfaces are defined — no implicit `{}` or untyped props.
- In Next.js 15/16, `params` and `searchParams` are `Promise<...>` — pages and layouts must `await` them. Synchronous destructuring is a type error and a runtime warning.
- `generateMetadata` must return `Promise<Metadata>`. Don't mix a static `export const metadata` with `generateMetadata` in the same file — the static export is silently ignored when both are present.
- No type assertions (`as X`) that paper over a real type mismatch.

### Caching
- Next.js 15+ changed `fetch()` default from `force-cache` to `no-store`. Bare `fetch()` calls from v14-era code may now be unintentionally dynamic — review each one.
- Next.js 16 introduces the `"use cache"` directive. Flag `next: { revalidate: N }` options on `fetch()` calls as candidates for migration to the new explicit cache model.
- `revalidateTag()` without a matching `next: { tags: [...] }` on the originating fetch does nothing. Verify tags used in `revalidateTag` calls actually appear in fetch options.
- Mixed `revalidate` values across a layout/page tree: the shortest value wins the entire segment — a layout with `revalidate: 3600` and a page with `revalidate: 0` makes the whole route always dynamic.
- `unstable_cache` on per-user data without including the user identifier in the cache key is a cache-poisoning risk.

### Tailwind v4
- No references to `tailwind.config.ts` — all custom tokens come from CSS variables in `globals.css`.
- Custom colors and fonts are consumed via `var(--token)` inline styles or `@theme inline` mapped utilities, not hardcoded hex values.
- No Tailwind v3-style `theme()` function calls in CSS.
- Dark mode is handled via `[data-theme="dark"]` selectors in `globals.css`, not Tailwind's `dark:` variant (not configured).
- When a component accepts a `className` prop or builds class strings conditionally, use `cn()` from `@/lib/utils` (clsx + tailwind-merge). Direct string concatenation drops the last class when there's a conflict (e.g. both `text-sm` and `text-base` applied).

### Performance
- The hero or first above-fold `<Image>` must have `priority` prop. Omitting it is the single most common LCP regression in Next.js — the image lazy-loads when it should preload.
- `next/image` without explicit `width`/`height` (or `fill` + a sized parent) causes CLS — the browser cannot reserve space before the image loads.
- Fonts must go through `next/font` only. A raw `<link href="fonts.googleapis.com/...">` adds a cross-origin request chain (~300ms on cold loads) and bypasses automatic subsetting and self-hosting.
- `<script>` tags must use `next/script` with an explicit `strategy`. Bare `<script>` blocks HTML parsing.
- No large images committed to `public/` — keep each under 500 KB.
- No unnecessary re-renders: stable references for objects/arrays/callbacks passed as props to potentially memoised children.

### Server Actions
- Validate all inputs server-side with a schema library (Zod, Valibot). Client-side validation is UX only — anyone can POST directly to an action endpoint.
- Authorization must be checked inside every action. Middleware can be bypassed (CVE-2025-29927); the action itself must verify the session and ownership.
- Use `{ error: string }` return pattern instead of `throw` — thrown errors are untyped and can leak stack traces to the client.
- Call `revalidatePath` or `revalidateTag` after mutations or the UI will show stale data.

### Security
- **Middleware is not a security boundary (CVE-2025-29927).** An attacker can send `x-middleware-subrequest` to bypass all middleware logic. Auth checks in middleware are defense-in-depth only; the data layer must enforce access independently. Verify the project is on Next.js ≥ 15.2.3 / 14.2.25 / 13.5.9.
- No `dangerouslySetInnerHTML` without explicit server-side sanitisation (DOMPurify or equivalent).
- Validate `returnTo`/redirect URL parameters against an allowlist of internal paths — unvalidated redirects are an open redirect vulnerability.
- Never trust privilege flags in `searchParams` (e.g. `?isAdmin=true`) — URL params are user-controlled.
- External links use `rel="noopener noreferrer"` alongside `target="_blank"`.
- No secrets, API keys, or credentials in source files or committed `.env` files.
- `next.config.js` (or `next.config.ts`) should set security response headers for all routes: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`. A Content-Security-Policy is optional for a fully static site but blocks inline script injection if ever added later. Vercel does not add these automatically.

### Accessibility
- Custom interactive elements (`<div onClick>`, `<span onClick>`) need an explicit `role` and `onKeyDown` handler — without them they are invisible to screen readers and inaccessible via keyboard.
- ARIA state must track React state: open dropdowns need `aria-expanded="true"`, selected items need `aria-selected="true"`. Stale ARIA attributes actively mislead assistive technology.
- A skip navigation link (`<a href="#main-content">Skip to content</a>`) should be the first focusable element in each layout.
- Focus must be managed on route changes — App Router does not move focus to the new page heading after navigation.
- Form errors must use `aria-describedby` pointing to the error element ID so screen readers associate the message with the field.
- Color contrast: the project's gold-on-cream pairing (`#C9A84C` on `#faf9f6`) often fails WCAG AA (4.5:1 minimum). Flag UI changes that use this combination and note it needs a contrast check.

### Testing & CI
- Complex utility functions, custom hooks, or non-trivial business logic should have unit tests. Flag new logic in `src/lib/` or `src/hooks/` with no test coverage.
- Critical user flows (navigation Home → Gallery, check-in tab switching) warrant at least one E2E smoke test (Playwright or Cypress). Flag new interactive flows that lack coverage.
- `bun run build` and `bun run lint` must pass. Flag any change that would break the CI pipeline.

### Project conventions (from `CLAUDE.md`)
- Content changes belong in `src/data/`, not hardcoded in components.
- `bun` is the package manager — no `package-lock.json` or `yarn.lock` introduced.
- No new `"use client"` components unless strictly necessary; the existing client components are `Header`, `TableOfContents`, `FarewellChecklist`, `DirectionsTabs`, `PhotoGrid`, `ReviewsCarousel`, `FadeIn`.
- Before writing a custom UI primitive, check whether an existing shadcn/ui component covers the need. Adding a shadcn component is cheaper than maintaining a bespoke one.

### General quality
- No dead code, commented-out blocks, or debug `console.log` statements.
- No backwards-compatibility shims or renamed `_unused` variables.
- No duplicate logic that could reuse an existing utility or component.
- Imports are ordered (global at top, local below) and none are unused.

---

## Step 4 — Classify findings

Group every finding under one of three tiers:

**🔴 Critical** — must fix before merge: bugs, security issues, broken conventions that will cause runtime errors or data exposure.

**🟡 Important** — should fix before merge: type safety gaps, performance regressions, significant convention violations.

**🔵 Suggestion** — optional improvements: readability, minor inefficiencies, style nits.

For each finding include: file path + line number, a one-line description, and a concrete fix.

---

## Step 5 — Confidence filter

Before reporting, drop any finding where you are less than 80% confident it is a real issue. Mark borderline findings with *(low confidence)* rather than omitting them entirely.

---

## Step 6 — Summary report

Output the findings grouped by tier. Lead with a one-line verdict:

- ✅ **Ready to merge** — no critical or important issues
- ⚠️ **Needs attention** — important issues present, no criticals
- 🚫 **Block merge** — one or more critical issues

End with a count: `X critical · Y important · Z suggestions`.

---

## Step 7 — Fix critical issues

For any 🔴 Critical findings, apply the fix directly using the Edit tool. State what you changed and why. Do not fix Important or Suggestion items unless explicitly asked.
