# Tapid technical wiki redesign

## Goal

Replace the current `/docs` landing-page layout with a coherent technical wiki experience for developers. The redesign should improve orientation, hierarchy, and reading comfort without pretending that planned Tapid behavior is already implemented.

## Scope

- Rebuild the shared docs shell in `app/docs/layout.tsx`.
- Rework the docs overview in `app/docs/page.tsx`.
- Rework the existing Getting started and Commands pages so they read as wiki articles rather than landing-page cards.
- Preserve the existing routes:
  - `/docs/`
  - `/docs/getting-started/`
  - `/docs/commands/`
- Preserve the current product-status caveats and planned-versus-implemented distinctions.
- Do not change the homepage or unrelated routes.

## Experience

### Desktop

Use a three-part reading structure:

1. A compact docs identity block in the left rail.
2. A persistent, grouped navigation rail with clear active-route styling.
3. A focused article column with readable line length and consistent heading rhythm.

The shell should feel like a documentation product: quiet borders, strong typography, direct links, and useful whitespace. Avoid promotional cards, decorative numbered strips, eyebrow titles, excessive rounded containers, and large empty hero regions.

### Mobile

Keep the article as the primary surface. Provide a compact navigation control that exposes the same grouped links without requiring a custom navigation system. Use Base UI `Collapsible` or an equivalent existing primitive for the interactive disclosure, with semantic links inside it.

### Overview page

The overview should explain what the documentation covers and provide a structured index of the current sections. Each entry should communicate its purpose and status directly, using a simple list or table-like layout rather than a marketing card grid.

### Article pages

Articles should share a consistent title, introductory context, body typography, code treatment, and navigation rhythm. The existing MDX content remains authoritative for Getting started; presentation changes should not turn planning language into implementation claims.

The Commands page should remain an honest reference for the planned command surface. Commands should be presented as readable reference rows with descriptions and a clear planned-status note.

## Component and data boundaries

- Keep the navigation data in one small, typed module or constant so desktop and mobile navigation cannot drift.
- Prefer semantic `nav`, `aside`, `main`, `article`, headings, lists, and links for static structure.
- Use Base UI only where interaction is required, especially the mobile navigation disclosure.
- Do not introduce a generic card component or a custom design-system abstraction for this redesign.
- Reuse existing global docs typography classes where they support the new article layout; add only narrowly scoped styles when necessary.

## Accessibility and responsive behavior

- Maintain a logical heading hierarchy on every page.
- Make the current section clear visually and programmatically where appropriate.
- Ensure all navigation and mobile disclosure controls are keyboard accessible.
- Preserve visible focus states.
- Avoid motion that is required to understand the navigation or content.
- Verify narrow mobile widths and desktop layouts separately.

## Verification

- Review all three docs routes in the running development server at desktop and mobile widths.
- Run `npm run lint`.
- Run `npm run build`; if the repository's Turbopack worker is blocked by the local environment, record that failure and verify with `npm run build -- --webpack`.
- Update `guidelines/design-feedback.md` when the redesign is implemented and browser-reviewed.
