<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Tapid website project guidance

## Product and brand

- Tapid is a public product developed and maintained by LimeTip.
- This repository is the public Tapid website and documentation.
- The site is currently a design and planning site. Do not claim that Tapid is ready to install until the implementation supports that claim.
- Preserve the distinction between current functionality, planned functionality, and the future Tapid ecosystem.
- Prefer precise, credible, security-conscious language over generic startup marketing.

## Visual direction

- The visual tone should be precise, trustworthy, technical, and modern.
- Avoid generic startup gradients, excessive glow, excessive rounded cards, and decorative UI without a communication purpose.
- Prefer strong typography, clear hierarchy, restrained motion, and purposeful whitespace.
- The site should feel credible to developers and enterprise security teams.
- Keep visual decisions consistent with `guidelines/design-principles.md`.

## Implementation

- Read the relevant Next.js guidance in `node_modules/next/dist/docs/` before changing Next.js behavior, as required by the generated rules above.
- Preserve the existing Next.js, React, TypeScript, MDX, Base UI, Tailwind, and static Cloudflare Pages architecture unless a change is justified.
- Prefer Base UI primitives for interactive behavior and avoid introducing custom components when an existing primitive or simple semantic markup is sufficient.
- Apply the `unslop` skill to user-facing copy and documentation work: remove generic AI phrasing, puffery, formulaic structure, and vague claims while preserving the intended meaning and technical precision.
- Use semantic HTML, responsive layouts, keyboard-accessible interactions, and reduced-motion behavior where appropriate.
- Run the narrowest relevant check, then `tapid run lint` and `tapid run build` for material website changes.
- Do not add secrets, credentials, customer data, or generated build output to the repository.

## Design feedback

- Treat `guidelines/design-feedback.md` as the place for open and resolved visual feedback.
- When a preference is durable, update `guidelines/design-principles.md` instead of relying only on a conversation.
- Before changing a disputed visual area, inspect the existing implementation and any related feedback records.
