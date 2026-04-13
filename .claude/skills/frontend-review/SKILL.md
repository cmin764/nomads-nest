---
name: frontend-review
description: Nomad's Nest — self-review of React/Next.js 16 App Router code before merge. Covers the project's specific stack (Tailwind v4, shadcn/ui, framer-motion, bun, no CMS) against Next.js patterns, TypeScript, caching, performance, image pipeline, security (CVE-2025-29927), accessibility, copy/voice conventions, and code quality.
argument-hint: [full]
allowed-tools: [Read, Glob, Grep, Bash]
---

# Frontend Review — Nomad's Nest

## Mode detection

- `$ARGUMENTS` is empty: **diff mode** — review only files changed on the current branch vs `main`
- `$ARGUMENTS` is `full`: **full mode** — audit the entire codebase

---

## Step 1: Verify CI passes first

Run `bun run build && bun run lint`. If either fails, report the errors at the top and stop — fix those before continuing.

---

## Step 2: Gather code

### Diff mode

Run `git branch --show-current` to get the current branch.

Run `git diff main...HEAD --name-only -- '*.tsx' '*.ts' '*.css' 'next.config.ts' '.github/**'` to list changed files. If the list is empty and you are on a branch other than `main`, fall back to `git diff HEAD~1 --name-only`. If on `main` with no changes, stop and report: "No diff found — run on a feature branch, or use `/frontend-review full` to audit the entire codebase."

Run `git diff main...HEAD -- '*.tsx' '*.ts' '*.css' 'next.config.ts' '.github/**'` for the full patch.

Then Read the **full content** of each changed file — the diff alone is not enough for structure and a11y checks. Also always Read these cross-cutting files even if they are not in the diff, because changes elsewhere can affect them:
- `src/app/layout.tsx`
- `src/app/globals.css`
- `next.config.ts`

### Full mode

Use `Glob("src/**/*.{tsx,ts}")` to enumerate all source files. Read every file, plus `src/app/globals.css` and `next.config.ts`.

---

## Step 3: Apply the checklist

Read `.claude/skills/frontend-review/references/checklist.md`.

Evaluate every rule against the gathered code. In diff mode, focus findings on changed files but still apply cross-cutting rules (layout, security headers, image pipeline) by reading related files when a change could affect them.

Skip rules that `bun run build` or `bun run lint` already catches automatically — they take priority and are fixed first.

---

## Step 4: Classify findings

Every finding goes into one of three tiers:

**🔴 Critical** — must fix before merge: runtime errors, security issues, broken conventions, data exposure.

**🟡 Important** — should fix before merge: type safety gaps, performance regressions, significant convention violations, copy/voice policy breaches.

**🔵 Suggestion** — optional: readability, minor inefficiencies, style nits.

For each finding include:
- **File**: path from repo root
- **Line**: line number or range
- **Rule**: rule ID from checklist (e.g. `A3`, `IMG2`)
- **Issue**: what is wrong and why it matters
- **Fix**: concrete suggestion

Drop findings below 80% confidence. Mark borderline cases *(low confidence)*.

---

## Step 5: Summary report

Use the output template below. Skip categories with no findings. Order categories by the priority defined in the checklist.

After the report, apply fixes for all 🔴 Critical findings using the Edit tool. State what changed and why. Do not touch Important or Suggestion items unless explicitly asked.

---

## Output template

```
## Frontend Review — [diff | full]

Branch: `<branch>` vs `main`
Files reviewed: <n>

---

### <Category> (<n> findings | PASS)

#### [Short title] · 🔴 critical | 🟡 important | 🔵 suggestion
- **File**: `path/to/file.tsx` L<line>
- **Rule**: <ID>
- **Issue**: <description>
- **Fix**: <suggestion>

---

### Summary

| Category                 | Result              |
|--------------------------|---------------------|
| Next.js / App Router     | PASS / n findings   |
| TypeScript               | PASS / n findings   |
| Tailwind v4              | PASS / n findings   |
| Performance              | PASS / n findings   |
| Image pipeline           | PASS / n findings   |
| Caching                  | PASS / n findings   |
| Server Actions           | PASS / n findings   |
| Security                 | PASS / n findings   |
| Accessibility            | PASS / n findings   |
| Testing & CI             | PASS / n findings   |
| Data layer & copy        | PASS / n findings   |
| Code quality             | PASS / n findings   |

**Verdict**: ✅ Ready to merge | ⚠️ Needs attention | 🚫 Block merge
<n> critical · <n> important · <n> suggestions
```
