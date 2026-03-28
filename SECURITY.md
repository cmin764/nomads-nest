# Security Policy

## Scope

This is a static brochure site with no backend, no user authentication, and no database. There are no server-side secrets in this repository.

If you find a genuine security issue (e.g. a dependency with a known CVE that affects production, a content injection vector, or an inadvertent exposure of sensitive data), please report it responsibly.

## Reporting

Email **book@nomadsnest.live** with the subject line `[SECURITY]`. Do not open a public GitHub issue for security reports.

We will respond within 5 business days and coordinate a fix before any public disclosure.

## Known Dev-Only Vulnerabilities

The following packages have reported CVEs but are **devDependencies only** — they run on the developer's machine during linting and are never included in the production build or deployed to Vercel:

- `flatted` (eslint transitive dep) — prototype pollution
- `picomatch` (eslint-config-next transitive dep) — ReDoS
- `brace-expansion` (eslint transitive dep) — DoS via zero-step sequence

These will be resolved when upstream eslint packages release patched versions.
