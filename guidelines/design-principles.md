# tapid website design principles

This document records durable visual and content preferences for the tapid website. It is shared by human and automated contributors.

## Selected design direction

The default frontend method is the upstream `design-taste-frontend` skill unless the user explicitly selects another design skill or direction. At the start of a new project, or when the user signals dissatisfaction with a design, ask which direction should lead before implementing further visual work.

The current tapid site direction is reference-informed, install-first product design:

- User task: understand what tapid is, install or evaluate the current alpha path, and reach exact technical documentation.
- Information flow: a clear category promise, immediate getting-started action, installation directly after the hero, compatibility proof, then evidence and limitations.
- Composition: open, light-first, and visually authored. Use typography, whitespace, imagery, and interaction instead of boxes, status panels, decorative rulers, or card stacks.
- Product detail: the supported install command, package identity, registry origin, artifact integrity, lockfile behavior, lifecycle suppression, and activation outcome carry the product story.
- Palette: light neutral surfaces by default, with restrained lime reserved for actions and verified evidence. Dark surfaces may support code but must not define the page.
- Shape: do not derive the visual system from the package cube logo. The cube is a compact brand mark only.
- Motion: low intensity and functional. State and focus feedback matter more than scroll choreography.
- Typography: Manrope for interface and editorial hierarchy, JetBrains Mono for commands and machine-readable values.
- Documentation: preserve Fumadocs and make its shell feel like the same product without turning technical pages into marketing surfaces.

Design Read: an install-first developer-tool site for engineers evaluating tapid, with adoption clarity and an original, open, light-first visual language.

Design dials: `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 2`, `VISUAL_DENSITY: 5`.

## Product impression

tapid should feel:

- Precise and technically credible
- Trustworthy and security-conscious
- Modern without looking fashionable for its own sake
- Clear to developers and credible to enterprise security teams

tapid should not feel:

- Like a generic AI or SaaS landing page
- Like a crypto project
- Overly playful, glossy, or decorative
- More mature than the product actually is

## Visual language

The following tapid-specific rules are absolute. They override any design skill, reference site, template, or general allowance:

- Zero eyebrow titles, kicker labels, overlines, section-number labels, or small uppercase captions above headings.
- Zero decorative full-width horizontal rulers, high ruler lines, hairline grids, crosshairs, or page framing based on repeated lines.
- Zero box-led composition. Do not organize the page as a stack of bordered panels, status rows, receipts, or equal cards.
- Use headings directly. Use whitespace, scale, alignment, imagery, surface changes, and meaningful interaction to establish hierarchy.
- Keep `tapid` lowercase in brand-facing text.
- Treat the T-cube as a small package-delivery logo only. Do not use cube or box geometry as the page motif.

- Use strong typography and clear hierarchy.
- Use whitespace to group related content, establish hierarchy, and support scanning. Avoid oversized decorative gaps, especially viewport-height hero padding that delays the first useful information.
- Use restrained color, gradients, glow, shadows, borders, and rounded corners.
- Do not use eyebrow titles or uppercase kicker labels anywhere.
- Avoid pill-shaped UI elements unless they communicate a real status, category, or control.
- Prefer semantic editorial structure over decorative numbered strips or card grids.
- Do not use decorative numbers such as `01`, `02`, `03` to label content unless the content is genuinely sequential and the sequence is important to the user's task.
- Sections must form a connected narrative. Each section should answer a question raised by the previous section, provide evidence for its claim, or prepare the reader for a clear next action. Do not add a section only to fill vertical space.
- Give important pages enough substance to be useful. Combine short sections when they explain the same idea, and use a concrete example, command, record, comparison, or limitation instead of repeating abstract positioning copy.
- Motion should support comprehension. Treat `prefers-reduced-motion: reduce` as the acceptable baseline by removing or substantially reducing nonessential movement.
- Design responsively for content and user settings, not named device classes. Support narrow viewports, browser zoom, text resizing, and approximately 320 CSS pixel reflow.

## Documentation experience

- Documentation should feel like a technical wiki for experienced developers, not a generic SaaS landing page.
- Prefer clear navigation, durable information hierarchy, and direct links to content over promotional cards.
- Use documented accessible component primitives for interactive documentation behavior when they fit; avoid introducing custom components for simple semantic markup.

## Content

- Use specific, defensible claims.
- Explain technical concepts in plain language.
- Keep copy human and concrete. Remove puffery, generic AI vocabulary, formulaic list structures, vague attributions, and claims that could belong to any project.
- Distinguish implemented behavior from planned behavior and future ecosystem direction.
- Avoid claiming that tapid is ready to install until the implementation supports that claim.

## Positive direction: what to do instead

When designing a new route or section, start from the product task and choose a visual treatment that makes that task easier. Do not merely remove a fashionable pattern and leave an empty page.

- Identify the page's primary user task and any secondary tasks. Make the primary answer or action visually dominant, and keep secondary tasks discoverable without competing with it.
- Use editorial structure: a strong heading, a short explanation, then a semantic list, table, timeline, command example, or comparison that carries real information.
- Give each section a clear information hierarchy and one dominant reading or interaction path. Use multiple open structures when the task requires comparison, navigation, metadata, or progressive disclosure. Prefer spatial composition, typography, a documentation index, or a focused code example over bordered rows or a repeated grid of equal cards.
- Use asymmetry deliberately without changing reading or focus order. Keep DOM order, visual order, and keyboard order aligned at every responsive breakpoint.
- Use color as a signal. Keep the neutral canvas dominant, use lime sparingly for interactive or status emphasis, and pair color with text, shape, position, iconography, or state changes. Do not use accent color on ordinary labels or headings when it makes them look like links. Use dark surfaces for code or high-contrast product evidence.
- Do not use horizontal rules, ruler lines, or hairline grids as page framing or section separators. Use spacing, surface tone, typography, alignment, and composition. A boundary is acceptable only when required by a semantic table, input, or interactive control.
- Use typography to establish hierarchy. Choose a readable body face, a distinct but restrained heading scale, and monospace only for commands, package names, versions, hashes, and other technical values.
- Make interaction states part of the design. Every interactive control needs a visible focus state, a clear hover or pressed state, a keyboard path, and an understandable empty, loading, error, or confirmation state where relevant.
- Prefer one memorable product-specific detail over a collection of effects. For tapid, that detail can be an inspectable package record, a policy decision trace, a command preview, or a clear provenance timeline.
- Keep motion rare and informative. Use it to reveal a panel, show a state transition, or preserve orientation. Respect `prefers-reduced-motion` and never make essential meaning depend on animation.
- Write concrete copy. Name the artifact, actor, evidence, rule, or user action. If a sentence could describe any package manager, replace it with a fact about tapid.
- Write transitions between major sections. Explain why the reader is moving from the current idea to the next one, and link to the next relevant concept, guide, or reference when the page is part of a documentation journey.

### Accessibility and interaction requirements

Treat accessibility as a behavioral and structural requirement, not as a visual polish step.

- Use native semantic HTML first. Use links for navigation and buttons for actions. Use an accessible component library for composite behavior when appropriate, but do not turn generic elements into controls when a native element or documented primitive fits.
- Give every interactive control an accessible name. Visible text is preferred. Icon-only controls require an explicit label. Form controls require associated labels, descriptions, and useful error messages.
- Preserve a logical DOM order that matches reading, visual, and keyboard focus order. Do not use positive `tabindex`, reversed flex order, or absolute positioning to create a conflicting interaction order.
- Make every interactive path work with keyboard input alone. Do not create keyboard traps. Dismissible overlays must manage focus entry, focus containment, keyboard dismissal, and focus return.
- Keep focused content visible around sticky headers, sticky footers, dialogs, popovers, and overlays. Never remove the focus indicator without replacing it with a clearly visible alternative.
- Distinguish focus from selected, checked, pressed, expanded, disabled, invalid, loading, error, success, and confirmation states where applicable. Do not rely on color alone.
- Meet WCAG 2.2 AA contrast requirements: at least 4.5:1 for normal text, 3:1 for large text, and 3:1 for meaningful non-text UI boundaries, icons, and state indicators. Check every component state and surface variant.
- Aim for touch targets of at least 44 by 44 CSS pixels with adequate spacing. Keep essential content and actions available without hover, gesture, tooltip, or context-menu-only access.
- Support approximately 320 CSS pixel reflow, browser zoom, and text resizing without losing content or requiring two-dimensional scrolling, except where essential for data tables or code. Give long package names, commands, URLs, hashes, and errors an intentional wrapping or overflow treatment.
- For component-library controls, follow the documented component pattern and keyboard contract. The library may provide behavior, but the application remains responsible for names, descriptions, focus-visible styling, contrast, state labels, content alternatives, and testing.
- Test routes with keyboard-only navigation, narrow reflow, browser zoom, reduced motion, semantic inspection, and a screen reader where available.

### Evidence and implementation status

- For every product claim, identify its source: implemented behavior, repository evidence, documented plan, or clearly labeled future direction.
- Do not invent metrics, users, integrations, security properties, compatibility, or package availability. If evidence is absent, write a neutral description or leave the claim out.
- Every command example must be labeled as runnable today, illustrative, or proposed. Use the status vocabulary `Implemented`, `In progress`, `Planned`, `Future direction`, and `Not currently supported` consistently.
- Evidence views should label the artifact or package, version and digest, source or publisher, evidence type, timestamp, policy decision, limitations, and whether the information is implemented, simulated, or planned.

### Performance and resilience

- Prefer CSS and semantic HTML over decorative images, canvas effects, and large media. Define image dimensions, avoid layout shift, and keep the page useful before nonessential assets load.
- Use one product-specific detail as the memorable visual element: for example, a package identity record, policy decision trace, command preview, provenance timeline, compatibility matrix, or current-versus-planned table.

### Required design brief for new UI

Before implementation, record these decisions in the task or design feedback:

1. User task: what should the visitor understand or do?
2. Information order: what is primary, supporting, and optional?
3. Composition: why is this layout better than a generic hero and card grid?
4. Product detail: which tapid-specific fact or behavior gives the section character?
5. Interaction states: what happens on focus, hover, pressed, selected, checked, expanded, disabled, keyboard use, loading, empty data, errors, and reduced motion? Which states must be conveyed without relying on color or animation?
6. Responsive behavior: what changes at narrow widths, and what must remain visible?
7. Accessibility contract: what is the semantic HTML or accessible composite pattern, accessible name, focus entry and exit behavior, keyboard mapping, state model, reduced-motion behavior, contrast treatment, touch target size, and narrow-viewport or zoom behavior?
8. Narrative connection: what question does this section answer, what evidence does it add, and what should the reader understand or do next?

A design is ready for implementation when these decisions are clear and the visual choices follow from them.

## Anti-patterns: do not make the site look AI-generated

These are defaults to reject, not universal bans. Choose the simplest structure that supports the user's task and the content's semantics. If an otherwise discouraged pattern is used, document the product or usability reason, the accessibility implications, and the validation performed. Do not repeat a pattern merely for visual consistency.

- Do not use purple or blue-purple gradients as an unexamined hero default. Permit a gradient only when it communicates a product-specific concept, has a documented compositional role, and preserves text and control contrast.
- No glassmorphism, frosted translucent panels, blur-heavy chrome, neon glows, or ambient orb backgrounds.
- No card grids as the default way to express product capabilities, especially three equal cards with a large icon above each heading.
- No nested cards, excessive rounded containers, pill-shaped buttons, or soft shadow stacks used only to make a page feel polished.
- No decorative full-width horizontal rules, repeated hairlines, ruler systems, or line-based page framing. This is a hard tapid-specific ban, not a frequency limit.
- No generic SaaS hero formula: centered headline, vague claim, two CTAs, decorative dashboard mockup, then a feature card grid.
- Do not select a typeface merely because it is a common AI default. Record the rationale, including readability, technical character, licensing, loading cost, fallback behavior, glyph coverage, and support for package names and code. Validate body text at narrow widths and 200% zoom.
- No decorative gradients, sparklines, fake metrics, 3D icons, stock illustrations, or animation that does not explain state, hierarchy, or consequence.
- No vague AI-era copy such as "redefine," "unlock," "seamless," "powerful," or "the future of" unless it names a concrete behavior and can be defended.
- No isolated sections whose only purpose is to add more vertical length. Combine related content or add a concrete example, limitation, decision, or next action.
- No inaccessible interaction shortcuts: unlabeled controls, hover-only meaning, low contrast, missing focus states, or motion without reduced-motion handling.

Prefer editorial structure, semantic lists and tables, visible boundaries, purposeful whitespace, distinctive but readable typography, and product-specific evidence. The interface should look like a serious developer tool because its content and behavior are specific, not because it borrows fashionable effects.

### Research basis

This rule set was informed by public commentary on repeated AI-generated interface patterns and by current accessibility and interaction standards. Source identities and website links are intentionally not retained in repository guidance.

The commentary consistently identified generic hero composition, equal card grids, default type choices, decorative gradients, glass effects, timid palettes, soft shadows, repeated dividers, and unmotivated hover fades as recurring patterns when product intent is weak.

These observations are review heuristics, not empirical proof that any single visual choice was generated by AI. Horizontal rules, cards, gradients, and animation can be valid when they communicate real structure or behavior. The problem is repetition without a product-specific reason.

Implementation must follow current international accessibility standards for contrast, non-text contrast, keyboard operation, focus visibility, reflow, target size, and reduced motion. Consult the current authoritative standards during implementation rather than treating this summary as a substitute.

## Change process

When a review comment represents a durable preference, update this document. Keep one-off page corrections in `guidelines/design-feedback.md`.
