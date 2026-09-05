# Tapid website design feedback

This file is the shared review queue for human and automated contributors. Add one entry per observed issue or requested change.

## Feedback format

```markdown
## YYYY-MM-DD, short description

Status: open | accepted | implemented | rejected
Route: `/path`
Element: component name, visible text, or selector
Category: content | layout | typography | color | interaction | responsive | accessibility

Observation:

Requested change:

Reason or preference:

Verification:
```

## Open feedback

## 2026-09-02, apply Taste Skill across the site

Status: implemented
Route: all routes
Element: homepage, site chrome, and Fumadocs shell
Category: layout

Observation:

The homepage was technically clear but relied on a common dark grid, oversized heading, terminal-window composition, repeated split sections, and frequent horizontal rules. The documentation shell was functional but visually detached from a distinctive Tapid system.

Requested change:

Use the upstream `design-taste-frontend` skill, image-first rendered references, Tapid's existing mark and lime accent, and the existing Fumadocs framework to create one evidence-led visual system across the site.

Reason or preference:

Tapid should look intentionally designed around package identity, integrity, lockfiles, and activation evidence rather than around familiar AI-generated developer-tool patterns.

Verification:

Completed headless responsive, keyboard, no-JavaScript, reduced-motion, axe, Lighthouse, lint, type, audit, and production-build verification. Two independent final reviewers found no remaining material issues.

## 2026-08-22, documentation Markdown needs native structure

Status: implemented  
Route: `/docs/concepts/package-identity/`  
Element: Markdown table and Read next list  
Category: typography

Observation:

Pipe-delimited Markdown tables were rendered as a single paragraph, and the site's list reset removed useful bullets. Links inside documentation lists were visually indistinguishable from surrounding text.

Requested change:

Parse pipe-delimited Markdown tables and apply shared styles for tables, unordered and ordered lists, list markers, and inline documentation links.

Reason or preference:

Technical documentation needs structure that can be scanned quickly. Tables should read as tables, lists should expose their grouping, and links should be obvious without relying on browser defaults.

Verification:

Implemented in `next.config.mjs`, `mdx-components.tsx`, and `src/app/globals.css`. The live route returns semantic `table`, `thead`, `tbody`, `th`, and `td` elements, with styled documentation links. `npm run lint` and `npm run build -- --webpack` passed.

## 2026-08-22, docs hub needs a technical wiki structure

Status: implemented  
Route: `/docs`  
Element: docs layout and overview page  
Category: layout

Observation:

The current docs hub reads like a sparse landing page with a horizontal link row and two promotional cards. It does not yet provide the structure or navigation expected from a technical wiki for experienced developers.

Requested change:

Update the docs shell and overview into a focused technical documentation hub with a new MDX docs index, concept, guide, and reference pages, plus shared navigation with clear active states and a durable information hierarchy. Prefer documented accessible component primitives for interactive behavior and semantic links for static structure.

Reason or preference:

Developers need to orient themselves quickly and move directly to reference material. The documentation should feel precise and useful rather than like a marketing page.

Verification:

Implemented in the new MDX docs index, concept, guide, and reference pages, with shared navigation across the docs routes. Browser review passed for all eight documentation routes at desktop width and for the navigation disclosure at a 390px mobile viewport. `npm run lint` passed, and `npm run build -- --webpack` passed after explicit typing was added to the mixed text/JSX page data in the roadmap and security pages. The default `npm run build` (Turbopack) did not complete in the local environment and was interrupted after producing no further output.

## 2026-08-22, hero removed recurring eyebrow and numbered strip patterns

Status: implemented  
Route: `/`  
Element: homepage hero  
Category: layout

Observation:

The hero used an uppercase eyebrow title and a numbered evidence strip that felt decorative and overly pattern-driven.

Requested change:

Remove both patterns and let the headline, supporting copy, actions, and whitespace carry the hierarchy.

Reason or preference:

Tapid should feel technical and restrained. Decorative labels and numbered strips do not add enough meaning to justify their visual weight.

Verification:

Implemented in `src/components/home/Hero.tsx`; lint and webpack production build passed.

## 2026-08-22, header brand asset must resolve from the bundle

Status: implemented  
Route: `/`  
Element: site header brand mark  
Category: accessibility

Observation:

The header referenced a `/brand/` URL even though the project has no `public/` directory, producing a broken image.

Requested change:

Use a bundled image import for the brand mark.

Reason or preference:

Brand assets should render reliably across the static export and local development server.

Verification:

Implemented in `src/components/site/Header.tsx`; lint and webpack production build passed.
