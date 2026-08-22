# Tapid documentation and website expansion

## Goal

Give the Tapid website enough precise, markdown-first product explanation that a developer can understand the problem, the proposed system, and the current implementation status without relying on a short marketing page or the source transcript.

## Source and content rules

- Use the attached transcript only as product inspiration and problem context. Do not copy it into the repository or upload it anywhere.
- Treat the existing Hermes plan and current repository as the source of Tapid-specific architecture and status.
- Label every claim as current, planned, or future when the distinction matters.
- Do not claim that Tapid is installable, production-ready, or already enforcing the described policies.
- Write documentation as Markdown/MDX so it remains readable to developers and future language models.
- Apply the `unslop` writing pass to all new and rewritten prose.

## Content model

The documentation should answer four questions in order:

1. Why does package management need a clearer decision process?
2. What does Tapid plan to inspect and decide?
3. How would installation, one-shot execution, publishing, and registries fit together?
4. What exists today, what is planned next, and what remains future direction?

## Scope

### Documentation routes

Keep the existing routes and add focused pages under `/docs/`:

- `/docs/` becomes the documentation index and product map.
- `/docs/getting-started/` explains the current product direction and first client milestone.
- `/docs/concepts/package-identity/` explains exact package identity, release versions, artifact digests, lockfiles, and why a name alone is not enough.
- `/docs/concepts/evidence-and-policy/` explains the separation between factual evidence and policy decisions, including capabilities, publisher context, release changes, and explainable outcomes.
- `/docs/guides/install-and-execute/` explains the intended resolve, inspect, approve or deny, install or execute flow, including the `npx`-style one-shot use case.
- `/docs/guides/agent-safe-commands/` explains how command metadata and policy decisions should help agents avoid silently running changed or untrusted packages.
- `/docs/reference/registries-and-publishing/` explains public and private registries, explicit registry boundaries, publishing identity, provenance, release correction, and future governance.
- `/docs/commands/` remains the planned command reference and links to the concept and guide pages.

All new pages should be authored as MDX files in `content/docs/` and rendered through small route files. Do not put long documentation paragraphs directly in route components.

### Website pages

- Expand the homepage sections so the product story names the decision flow and the evidence categories instead of only describing Tapid as a package manager.
- Expand `/security` with a readable explanation of evidence, policy, execution boundaries, registry boundaries, and the limits of current implementation.
- Expand `/roadmap` with the current client milestone, verification and execution work, registry work, and future ecosystem work.
- Keep the visual system restrained. Use open sections, borders, lists, diagrams made from semantic markup, and code examples. Avoid returning to promotional card grids, eyebrow labels, or decorative numbered patterns.

## Technical boundaries

- Extend the existing `components/docs/navigation.ts` data instead of duplicating links in each page.
- Keep docs content in MDX and reuse `mdx-components.tsx` for headings, paragraphs, lists, inline code, and code blocks.
- Add only the route files and content files needed for the new pages.
- Use Base UI only for behavior such as the existing responsive docs disclosure. Do not introduce a custom CMS, search index, or content abstraction in this change.
- Keep the static Cloudflare Pages architecture unchanged.

## Content requirements

The expanded content must explain these product ideas in Tapid's own language:

- A package reference should resolve to an exact identity and artifact, not only a mutable name and range.
- Evidence should be visible before code runs, including publisher context, release changes, declared or observed capabilities, and provenance where available.
- Policy should remain separate from evidence so a warning or denial can be explained and reproduced.
- One-shot tools need the same inspection path as project dependencies.
- Agents need machine-readable context before they execute package-backed commands.
- Public and private registries need explicit boundaries and credential behavior.
- Publishing should support identity, provenance, correction rules, and future governance without promising a final policy today.

## Verification

- Review every new docs route in the running browser at desktop and mobile widths.
- Check that the docs navigation exposes every page and marks the current page.
- Run `npm run lint`.
- Run `npm run build`; if Turbopack repeats the known local worker permission failure, verify with `npm run build -- --webpack` and record the limitation.
- Update `guidelines/design-feedback.md` with the content expansion outcome and any durable writing preferences discovered during review.
