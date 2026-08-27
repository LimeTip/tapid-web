# Tapid website design principles

This document records durable visual and content preferences for the Tapid website. It is shared by Hermes and Codex.

## Product impression

Tapid should feel:

- Precise and technically credible
- Trustworthy and security-conscious
- Modern without looking fashionable for its own sake
- Clear to developers and credible to enterprise security teams

Tapid should not feel:

- Like a generic AI or SaaS landing page
- Like a crypto project
- Overly playful, glossy, or decorative
- More mature than the product actually is

## Visual language

- Use strong typography and clear hierarchy.
- Use whitespace to group related content, establish hierarchy, and support scanning. Avoid oversized decorative gaps, especially viewport-height hero padding that delays the first useful information.
- Use restrained color, gradients, glow, shadows, borders, and rounded corners.
- Do not use eyebrow titles or uppercase kicker labels as a recurring layout pattern.
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
- Use Base UI primitives for interactive documentation behavior when they fit; avoid introducing custom components for simple semantic markup.

## Content

- Use specific, defensible claims.
- Explain technical concepts in plain language.
- Keep copy human and concrete. Remove puffery, generic AI vocabulary, formulaic list structures, vague attributions, and claims that could belong to any project.
- Distinguish implemented behavior from planned behavior and future ecosystem direction.
- Avoid claiming that Tapid is ready to install until the implementation supports that claim.

## Positive direction: what to do instead

When designing a new route or section, start from the product task and choose a visual treatment that makes that task easier. Do not merely remove a fashionable pattern and leave an empty page.

- Identify the page's primary user task and any secondary tasks. Make the primary answer or action visually dominant, and keep secondary tasks discoverable without competing with it.
- Use editorial structure: a strong heading, a short explanation, then a semantic list, table, timeline, command example, or comparison that carries real information.
- Give each section a clear information hierarchy and one dominant reading or interaction path. Use multiple structures when the task requires comparison, navigation, metadata, or progressive disclosure. Prefer a two-column explanation, a bordered list of rows, a documentation index, or a focused code example over a repeated grid of equal cards.
- Use asymmetry deliberately without changing reading or focus order. Keep DOM order, visual order, and keyboard order aligned at every responsive breakpoint.
- Use color as a signal. Keep the neutral canvas dominant, use lime sparingly for interactive or status emphasis, and pair color with text, shape, position, iconography, or state changes. Do not use accent color on ordinary labels or headings when it makes them look like links. Use dark surfaces for code or high-contrast product evidence.
- Use borders and rules to expose relationships. A rule should separate content groups, establish hierarchy, or show progression. Do not add borders around every small item.
- Treat horizontal rules as a limited structural tool, not a default section separator. Prefer spacing, changes in surface tone, typography, alignment, or a single shared container when those communicate the relationship clearly.
- Use typography to establish hierarchy. Choose a readable body face, a distinct but restrained heading scale, and monospace only for commands, package names, versions, hashes, and other technical values.
- Make interaction states part of the design. Every interactive control needs a visible focus state, a clear hover or pressed state, a keyboard path, and an understandable empty, loading, error, or confirmation state where relevant.
- Prefer one memorable product-specific detail over a collection of effects. For Tapid, that detail can be an inspectable package record, a policy decision trace, a command preview, or a clear provenance timeline.
- Keep motion rare and informative. Use it to reveal a panel, show a state transition, or preserve orientation. Respect `prefers-reduced-motion` and never make essential meaning depend on animation.
- Write concrete copy. Name the artifact, actor, evidence, rule, or user action. If a sentence could describe any package manager, replace it with a fact about Tapid.
- Write transitions between major sections. Explain why the reader is moving from the current idea to the next one, and link to the next relevant concept, guide, or reference when the page is part of a documentation journey.

### Accessibility and interaction requirements

Treat accessibility as a behavioral and structural requirement, not as a visual polish step.

- Use native semantic HTML first. Use links for navigation and buttons for actions. Use Base UI for composite behavior when appropriate, but do not turn generic elements into controls when a native element or documented primitive fits.
- Give every interactive control an accessible name. Visible text is preferred. Icon-only controls require an explicit label. Form controls require associated labels, descriptions, and useful error messages.
- Preserve a logical DOM order that matches reading, visual, and keyboard focus order. Do not use positive `tabindex`, reversed flex order, or absolute positioning to create a conflicting interaction order.
- Make every interactive path work with keyboard input alone. Do not create keyboard traps. Dismissible overlays must manage focus entry, focus containment, keyboard dismissal, and focus return.
- Keep focused content visible around sticky headers, sticky footers, dialogs, popovers, and overlays. Never remove the focus indicator without replacing it with a clearly visible alternative.
- Distinguish focus from selected, checked, pressed, expanded, disabled, invalid, loading, error, success, and confirmation states where applicable. Do not rely on color alone.
- Meet WCAG 2.2 AA contrast requirements: at least 4.5:1 for normal text, 3:1 for large text, and 3:1 for meaningful non-text UI boundaries, icons, and state indicators. Check every component state and surface variant.
- Aim for touch targets of at least 44 by 44 CSS pixels with adequate spacing. Keep essential content and actions available without hover, gesture, tooltip, or context-menu-only access.
- Support approximately 320 CSS pixel reflow, browser zoom, and text resizing without losing content or requiring two-dimensional scrolling, except where essential for data tables or code. Give long package names, commands, URLs, hashes, and errors an intentional wrapping or overflow treatment.
- For Base UI components, follow the documented component pattern and keyboard contract. Base UI provides behavior for many components, but the application remains responsible for names, descriptions, focus-visible styling, contrast, state labels, content alternatives, and testing.
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
4. Product detail: which Tapid-specific fact or behavior gives the section character?
5. Interaction states: what happens on focus, hover, pressed, selected, checked, expanded, disabled, keyboard use, loading, empty data, errors, and reduced motion? Which states must be conveyed without relying on color or animation?
6. Responsive behavior: what changes at narrow widths, and what must remain visible?
7. Accessibility contract: what is the semantic HTML or Base UI pattern, accessible name, focus entry and exit behavior, keyboard mapping, state model, reduced-motion behavior, contrast treatment, touch target size, and narrow-viewport or zoom behavior?
8. Narrative connection: what question does this section answer, what evidence does it add, and what should the reader understand or do next?

A design is ready for implementation when these decisions are clear and the visual choices follow from them.

## Anti-patterns: do not make the site look AI-generated

These are defaults to reject, not universal bans. Choose the simplest structure that supports the user's task and the content's semantics. If an otherwise discouraged pattern is used, document the product or usability reason, the accessibility implications, and the validation performed. Do not repeat a pattern merely for visual consistency.

- Do not use purple or blue-purple gradients as an unexamined hero default. Permit a gradient only when it communicates a product-specific concept, has a documented compositional role, and preserves text and control contrast.
- No glassmorphism, frosted translucent panels, blur-heavy chrome, neon glows, or ambient orb backgrounds.
- No card grids as the default way to express product capabilities, especially three equal cards with a large icon above each heading.
- No nested cards, excessive rounded containers, pill-shaped buttons, or soft shadow stacks used only to make a page feel polished.
- No repeated full-width horizontal rules between every section or list item. A page that visually reads as a stack of `<hr>` elements is a likely AI-generated layout tell. Use rules only when they clarify a real grouping, table boundary, disclosure boundary, or progression.
- No generic SaaS hero formula: centered headline, vague claim, two CTAs, decorative dashboard mockup, then a feature card grid.
- Do not select a typeface merely because it is a common AI default. Record the rationale, including readability, technical character, licensing, loading cost, fallback behavior, glyph coverage, and support for package names and code. Validate body text at narrow widths and 200% zoom.
- No decorative gradients, sparklines, fake metrics, 3D icons, stock illustrations, or animation that does not explain state, hierarchy, or consequence.
- No vague AI-era copy such as "redefine," "unlock," "seamless," "powerful," or "the future of" unless it names a concrete behavior and can be defended.
- No isolated sections whose only purpose is to add more vertical length. Combine related content or add a concrete example, limitation, decision, or next action.
- No inaccessible interaction shortcuts: unlabeled controls, hover-only meaning, low contrast, missing focus states, or motion without reduced-motion handling.

Prefer editorial structure, semantic lists and tables, visible boundaries, purposeful whitespace, distinctive but readable typography, and product-specific evidence. The interface should look like a serious developer tool because its content and behavior are specific, not because it borrows fashionable effects.

### Research basis

This rule set was informed by the following public commentary reviewed on 2026-08-26:

- Samith Pitigala, [Why AI-Generated UI Looks Good But Often Feels Generic](https://medium.com/@cssamithpitigala/why-ai-generated-ui-looks-good-but-often-feels-generic-020a9b1b8492), which identifies repeated hero, card-grid, rounded-button, gradient, glassmorphism, floating-card, and soft-shadow patterns as common outputs without product intent.
- PRG, [Why Your AI Keeps Building the Same Purple Gradient Website](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website), which documents recurring Inter/Roboto/Arial typography, purple gradients, three-box layouts, rounded corners, subtle shadows, timid palettes, and generic hover fades as statistical defaults.
- Venngage, [What Is AI Slop in Design? How to Fix It](https://venngage.com/blog/ai-slop-in-design), which identifies repeated horizontal lines used to divide sections as one recurring pattern in otherwise similar AI-generated compositions.

These are design trend observations, not empirical proof that any single visual choice was generated by AI. They are used here as practical review heuristics. Horizontal rules are valid in editorial and technical interfaces, so the signal is overuse without an information-architecture reason, not the presence of a rule itself.

The durable implementation references are [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [WCAG contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [WAI-ARIA keyboard practices](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/), [Base UI accessibility](https://base-ui.com/react/overview/accessibility), [web.dev reduced motion](https://web.dev/articles/prefers-reduced-motion), and [Nielsen Norman Group's guidance on cards](https://www.nngroup.com/articles/cards-component/).

## Change process

When a review comment represents a durable preference, update this document. Keep one-off page corrections in `guidelines/design-feedback.md`.
