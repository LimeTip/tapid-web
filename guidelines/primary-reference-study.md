# Primary reference study

Status: completed research. This document does not approve a design or authorize implementation.

The source is intentionally called the primary reference. Company name, product name, website name, URL, branded copy, and branded assets are excluded.

## Purpose

Study how a successful developer-tool homepage combines product identity, installation, technical evidence, and documentation without sacrificing readability.

## Method

The live page was inspected with headless Playwright at:

- 1440 by 1000 CSS pixels
- 390 by 844 CSS pixels
- 320 by 800 CSS pixels
- Reduced-motion preference
- JavaScript disabled

The study included first-viewport captures, full-page captures after scrolling, computed typography and element geometry, horizontal-overflow checks, heading order, installation controls, and navigation controls.

## Core finding

The page succeeds because its visual identity and product explanation reinforce each other. It does not rely on novelty alone. It begins with a clear claim, moves immediately into installation, and then earns trust through increasingly detailed product evidence.

## Opening composition

### Desktop

- The hero uses a two-part composition: readable copy on the left and a product-capability visual on the right.
- The H1 is 72 CSS pixels, 700 weight, with a 79.2 pixel line height and a 624 pixel measure.
- Supporting copy is 18 CSS pixels with a 28 pixel line height and the same controlled measure.
- The main actions are 60 pixels high and appear in the initial viewport.
- The background is visually rich, but text remains high contrast and spatially separate from the active visual.
- The visual demonstrates breadth through recognizable capabilities. It is not a fake terminal or dashboard.

### Mobile

- At 390 pixels, the H1 becomes approximately 39 pixels with a 43 pixel line height.
- Body copy becomes 16 pixels with a 24 pixel line height.
- Horizontal overflow is absent at both 390 and 320 pixels.
- The visual moves before the text, preserving identity while the text remains a normal reading block.
- The main CTA sits near the bottom of the first viewport rather than disappearing deep into the page.

### Resilience

- The essential headline, explanation, visual, and actions remain present with reduced motion.
- The essential content remains readable when JavaScript is disabled.
- The page does not require an entrance animation to reveal its value proposition.

## Installation flow

Installation begins directly after the hero.

### Desktop structure

- Installation heading at approximately 1002 pixels from the document top
- Centered content width of approximately 672 pixels
- Current release identified in the heading
- Release-notes link directly associated with the version
- Platform choice presented as tabs
- Selected platform communicated with `role="tab"` and `aria-selected="true"`
- Copyable command in a dark, high-contrast surface
- Copy action placed at the end of the command
- A second installation path for coding agents follows immediately

### Mobile structure

- Installation begins at approximately 1176 pixels on a 390 pixel viewport
- Installation begins at approximately 1239 pixels on a 320 pixel viewport
- Platform choices become two full-width columns
- Command text reduces from 16 to 14 pixels
- The copy action remains aligned at the command edge
- Content order stays identical to desktop

### Transferable lesson

Installation is treated as a first-class product interaction. The command, platform, version, provenance link, and copy action form one coherent task. It is not presented as decorative code.

### Accessibility weakness to improve

The reference uses controls smaller than the desired tapid target:

- Desktop navigation controls are approximately 36 pixels high
- Search is approximately 34 pixels high
- Platform tabs are approximately 29 pixels high
- Copy control is approximately 34 by 34 pixels

For tapid, comparable controls should provide at least a 44 by 44 pixel interactive target, even if the visible treatment remains compact.

## Full-page information architecture

The page follows this sequence:

1. Clear product claim and primary action
2. Direct installation
3. Alternative agent-assisted setup
4. Immediate compatibility demonstration
5. Existing-project migration story
6. Built-in tool demonstrations
7. Package-management evidence
8. Standard-library evidence
9. Standards and platform compatibility
10. Security controls
11. Performance evidence
12. Observability and debugging
13. Deployment options
14. Adjacent product expansion
15. Community or adoption proof
16. Final return to the primary action

The sequence moves from low commitment to higher scrutiny:

- Understand
- Install
- Try
- Confirm compatibility
- Inspect capabilities
- Evaluate security and performance
- Confirm deployment fit
- Trust adoption evidence
- Act

## Section rhythm

The page is long but not monotonous.

- Hero: immersive split composition
- Installation: narrow, focused task column
- Compatibility: visual code and ecosystem proof
- Tooling: dark product demonstration
- Package and library sections: open split layouts
- Security: concentrated dark section with layered evidence
- Performance: lighter analytical section
- Observability: compact multi-part technical demonstration
- Deployment: broad ecosystem map
- Closing: emotional visual followed by a direct CTA

Density changes according to the reader's question. The page does not force every capability into the same card or row pattern.

## Typography system

- One neutral sans-serif family carries headings, body, navigation, and controls.
- Monospace is reserved for commands and machine-readable capability labels.
- Hierarchy is established through a small, repeatable set of sizes rather than continuously escalating display type.
- Desktop major headings commonly use 44 pixels. The opening and closing statements use 72 pixels.
- Mobile major headings commonly use approximately 28 pixels. Opening and closing statements use approximately 39 pixels.
- Body text remains 16 to 18 pixels with generous line height.
- Copy widths are controlled. Technical evidence may be denser, but explanatory prose does not stretch across the viewport.

## Color and surfaces

- The hero uses a dark, atmospheric surface with high-contrast text.
- Most explanatory sections use light surfaces and dark text.
- Dark surfaces return for code, security, and technical evidence where the change supports the content.
- A single bright accent communicates active selection, action, and positive evidence.
- The accent is not applied indiscriminately to every heading or label.

For tapid, the section-level theme changes should not be copied literally. A light-dominant page with dark code or evidence surfaces can preserve coherence while meeting the existing design direction.

## Product-specific identity

The page uses one strong visual world tied to the product's established identity. That visual world appears in the hero and closing section, while the middle of the page is largely product evidence.

Transferable principle:

- Use one memorable, product-specific visual idea at the beginning and end.
- Let real product behavior carry the middle of the page.

Do not transfer:

- Mascot, illustration style, scenery, capability animation, or branded imagery
- Exact headline construction
- Exact palette
- Exact button treatment
- Exact section compositions

## Motion

Motion serves three jobs:

- Demonstrate changing capability selection
- Add atmosphere to the hero visual
- Preserve continuity in product demonstrations

The hierarchy remains intact when motion is reduced. This is the correct dependency: motion enhances comprehension but does not enable it.

For tapid:

- Keep the value proposition, command, and evidence visible without animation.
- Use motion only for selection changes, copying confirmation, and an optional package-resolution transition.
- Never initialize essential content at zero opacity.

## Mobile transformation

The mobile design is a recomposition, not only a scaled desktop layout.

- Navigation collapses to logo and menu.
- Visual content moves before or between text blocks when it supports recognition.
- Two-column evidence becomes a clear single sequence.
- Typography scales down by role, not by one universal ratio.
- Cards and visualizations become full-width and retain internal padding.
- The same narrative order is preserved.

Weaknesses to avoid:

- An announcement bar occupies substantial initial space.
- A consent dialog can cover much of the first mobile viewport.
- At the narrow test width, one animated headline was briefly captured at partial opacity.
- The complete page is very long on mobile, so tapid should be more selective while its supported surface remains smaller.

## What tapid should learn

### Information order

1. What tapid is
2. Why the installation decision is safer or more deterministic
3. Documentation CTA and current runnable path
4. Installation or alpha evaluation
5. One end-to-end package example
6. Compatibility with an existing JavaScript project
7. Evidence produced during resolution and installation
8. Lifecycle-script and dependency decisions
9. Lockfile and replay behavior
10. Current alpha boundaries
11. Documentation and repository links

### Composition

- Use a readable split hero, not a centered slogan or abstract poster.
- Pair the hero copy with a real package-resolution or installation artifact.
- Follow the hero with one focused installation block.
- Vary later sections according to their content: example, flow, comparison, limitation, and documentation path.
- Return to the primary documentation action at the end.

### Visual hierarchy

- Use a restrained display scale similar to the measured reference range.
- Keep body text at 16 pixels minimum and approximately 24 to 28 pixels line height.
- Use a controlled reading measure.
- Keep the accent for interaction, selection, and verified outcomes.
- Use dark surfaces for commands and evidence, not as a generic terminal aesthetic.

### Interaction

- Platform selection must have real tab semantics and keyboard behavior.
- Copy must provide a visible confirmation.
- All targets should provide at least 44 by 44 pixels of interactive area.
- Essential content must be present before JavaScript and before motion.
- Reduced motion must preserve the complete hierarchy.

## What tapid should not copy

- Brand illustration or mascot language
- The exact atmospheric hero
- Version eyebrow above the H1
- Repeated hairlines or framing systems
- Small interaction targets
- Large announcement banner
- Consent overlay behavior
- Competitive claims without reproducible evidence
- The full length or breadth of a mature platform homepage

## Corrected design dials

Working recommendation, not yet an approved implementation:

- `DESIGN_VARIANCE: 4`
- `MOTION_INTENSITY: 2`
- `VISUAL_DENSITY: 5`

The previous variance setting was too high for a trust-first technical product and directly contributed to unreadable art-direction experiments.

## Acceptance criteria before any page is shown

- First paint is readable without waiting.
- JavaScript-disabled and reduced-motion captures retain all essential content.
- No essential content begins at zero opacity.
- H1 stays within two lines on desktop and reads naturally on mobile.
- Body copy is at least 16 pixels with a controlled measure.
- The primary action and product category are visible in the initial viewport.
- Installation follows immediately after the hero.
- No horizontal overflow at 320 pixels.
- Controls have at least 44 by 44 pixel interactive targets.
- Normal text meets WCAG AA contrast, with AAA targeted for hero body text.
- Product claims and commands are source-backed and labeled according to actual alpha status.
- The design uses no eyebrow headings, decorative rulers, hairline framing, box-led composition, status-page layout, or terminal-window hero.

## Decision

Do not build another five-page batch from broad prompts. First define one shared content hierarchy and one readable hero composition. Review that low-fidelity structure before applying visual treatments. Only after the structure is accepted should multiple visual directions be produced.
