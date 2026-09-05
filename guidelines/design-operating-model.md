# tapid design operating model

Status: working method for design research and delivery. This document intentionally omits benchmark company names, product names, website names, and URLs.

## Design Read

Reading this as a developer-tool product and documentation experience for technical evaluators, with an install-first, evidence-led, mature, confident, and trustworthy design language.

## What the benchmark set demonstrates

The benchmark covers ten strong developer products across coding agents, runtimes, language ecosystems, model infrastructure, repository infrastructure, and open agent platforms.

No single benchmark supplies the complete answer. The useful patterns fall into five groups:

1. Install-first utility
2. Editorial authority
3. Character-led identity
4. Evidence-dense infrastructure
5. Systematic product-design operations

The goal is to combine their operating principles without copying any source's brand, layout, assets, typography, imagery, or copy.

## Core principles

### Product truth leads design

Start with implemented behavior, current limitations, user tasks, and evidence. Do not begin with a visual metaphor, trend, palette, animation, or component library.

Every major claim must map to one of:

- Implemented behavior
- Repository evidence
- Current documentation
- In-progress work
- Planned behavior
- Future direction
- Not currently supported

### One primary task

The homepage primary task is to help a qualified visitor begin evaluating or using tapid through the documentation and current supported path.

The opening must answer:

1. What is tapid?
2. Why does it matter?
3. What can I do now?
4. What evidence supports the claim?

### Installation is product content

Installation or alpha evaluation is a real interaction, not decorative code.

It must include, where supported:

- Platform or environment context
- Exact command
- Copy behavior and confirmation
- Version or release context
- Compatibility boundary
- Link to detailed instructions
- Honest status label in surrounding prose rather than a decorative badge

### Evidence carries the visual identity

Use real package identity, registry origin, artifact integrity, dependency decisions, lifecycle-script handling, lockfile or replay state, and installation outcome as the principal visual material.

Do not manufacture a fake terminal, dashboard, receipt, status page, or abstract security illustration.

### One coherent identity

Use one visual language across the homepage and documentation. Distinctiveness should come from one memorable product-specific element plus consistent typography, color, spacing, and interaction.

Do not combine editorial, terminal, dashboard, and playful mascot languages on the same page.

### Documentation is part of the product

The homepage, getting-started guide, command reference, and technical evidence must form one journey. Documentation is not a secondary marketing destination.

The homepage should link directly to the most relevant document at each decision point.

### Accessibility starts with the design

Accessibility is part of the initial composition and component contract, not a final audit.

Required considerations include:

- Semantic structure
- Logical reading and focus order
- Keyboard operation
- Visible focus
- 44 by 44 pixel interactive targets
- WCAG 2.2 AA contrast
- 320 pixel reflow
- Browser zoom and text resizing
- Reduced motion
- JavaScript-disabled essential content
- Long commands, package names, URLs, hashes, and errors

## Repository-local design system

### Short entry point

Repository guidance should be a concise map, not an exhaustive manual. It should point to:

- Product status and terminology
- Design principles
- Content hierarchy
- Component and token specification
- Accessibility contract
- Interaction-state requirements
- Verification commands
- Approved and rejected decisions

### Progressive disclosure

Keep detailed guidance in focused documents that are linked from the short entry point. Separate durable principles from one-off page feedback.

### Real sources

Build the design system from:

- Existing components
- Current code
- Current product documentation
- Approved brand assets
- Approved rendered examples
- Accessibility requirements
- User feedback

A palette or token list alone is insufficient. Real finished examples communicate composition and tone more effectively.

### Minimum system contents

- Semantic color tokens
- Typography roles and fallback behavior
- Spacing scale
- Content-width rules
- Radius and boundary rules
- Interaction states
- Motion posture
- Responsive rules
- Accessibility annotations
- Component examples
- Copy and terminology rules

### System review

Before the system becomes authoritative:

1. Render a representative test surface.
2. Compare it with approved product and brand examples.
3. Check all interaction states.
4. Test desktop, mobile, narrow reflow, zoom, keyboard, and reduced motion.
5. Review and correct the system.
6. Mark it approved only after human review.

## Design-to-code round trip

Design and implementation should remain connected.

1. Begin with the existing code and design system.
2. Create a running low-fidelity interface.
3. Capture the real rendered interface for design review.
4. Explore and annotate alternatives against the same content hierarchy.
5. Bring the approved decisions back into code using existing components where possible.
6. Render and compare again.
7. Repeat until the implementation and specification agree.

A screenshot is evidence for review, not the source of truth. Components, tokens, content, and behavior remain explicit and versioned.

## Human and agent roles

### Humans decide

- Product priority
- User outcome
- Brand direction
- Risk tolerance
- Trade-offs
- Concept approval
- Specification approval
- Publishing and release approval

### Agents execute and verify

- Repository and reference research
- Content inventory
- Source-backed claim mapping
- Low-fidelity implementation
- Variant production after hierarchy approval
- Responsive and interaction testing
- Accessibility checks
- Design-system conformance checks
- Independent review
- Documentation maintenance

The agent must not treat mechanical test success as visual approval.

## Delivery workflow

### Stage 1: Context

- Inspect current product code and documentation.
- Establish release status and supported behavior.
- Review existing site, assets, analytics-sensitive labels, routes, and framework constraints.
- Record assumptions and unresolved questions.

Output: source-backed product and content inventory.

### Stage 2: Reference study

- Select references for specific strengths, not general imitation.
- Study desktop, mobile, interaction, documentation, and onboarding.
- Separate transferable principles from source-specific identity.
- Keep source names and URLs out of project design notes.

Output: anonymous reference findings.

### Stage 3: Content hierarchy

Define the page as plain content before styling:

- Navigation
- Category and value proposition
- Primary documentation action
- Current install or evaluation path
- End-to-end package example
- Compatibility
- Evidence and policy decisions
- Reproducibility
- Alpha limitations
- Final documentation action

Output: approved content outline and source map.

### Stage 4: Low-fidelity structure

Build one grayscale, mostly static study focused only on:

- Reading order
- Copy length
- Heading hierarchy
- Content width
- Installation placement
- Evidence placement
- Mobile reflow

No decorative animation, background art, visual metaphor, or page-length filler is permitted.

Output: one readable structural study.

Approval gate: structure and readability.

### Stage 5: Visual exploration

Only after the structure is approved, produce two or three treatments using the same content and behavior.

Each treatment must differ in a meaningful visual stance, not information architecture or product claims. This isolates visual preference from usability.

Output: two or three comparable treatments.

Approval gate: visual direction.

### Stage 6: Specification

Write the selected direction as an explicit specification:

- Design Read
- Design dials
- Page hierarchy
- Typography
- Color
- Spacing
- Content width
- Surfaces and boundaries
- Component behavior
- Interaction states
- Motion
- Responsive behavior
- Accessibility contract
- Source-backed copy
- Approved exceptions
- Explicit prohibitions

Output: reviewed design specification.

Approval gate: specification.

### Stage 7: Implementation

- Implement in an isolated worktree.
- Reuse project components and framework.
- Keep interactive behavior in focused components.
- Preserve documentation architecture.
- Make no remote or production change without approval.

Output: local implementation.

### Stage 8: Verification

Use headless tooling only.

Required checks:

- First paint
- Post-load state
- JavaScript-disabled essential content
- Reduced motion
- Desktop, mobile, and 320 pixel reflow
- 200 percent zoom
- Keyboard flow and visible focus
- Touch target size
- Contrast
- Copy interaction
- Platform selection
- Long technical values
- Internal links
- Console errors
- Lint, types, tests, and production build
- Screenshot comparison against the approved design

Output: evidence-backed verification report.

### Stage 9: Independent review

Run separate reviews for:

- Product accuracy
- Visual quality and anti-slop checks
- Accessibility
- Responsive behavior
- Code quality
- Security and trust claims

Resolve material issues and common compatibility gaps. Avoid cosmetic review churn.

Output: final review record.

### Stage 10: Publication

Only after explicit approval:

- Commit coherent changes
- Push the exact reviewed head
- Open a pull request
- Report actual CI state
- Keep deployment and merge as separate approval decisions

## Feedback loop

Every significant rejection or correction should produce one of three outcomes:

1. A durable design principle
2. A mechanically verifiable rule
3. A one-off correction tied to a specific page

Do not merely retry the same prompt. Determine which capability, context, or acceptance criterion was missing.

Examples of mechanically verifiable rules:

- Essential content never starts at zero opacity
- No horizontal overflow at 320 pixels
- Minimum body size and line height
- Maximum hero line count
- Minimum target size
- Maximum content measure
- Zero prohibited title treatments
- Zero decorative ruler systems
- No fake metrics or unsupported product claims

Visual judgment remains a human approval gate. A page can pass every mechanical check and still be rejected.

## Continuous maintenance

- Keep design guidance versioned with the code.
- Periodically check for drift between specification and implementation.
- Remove stale rules and examples.
- Promote repeated review comments into principles or automated checks.
- Maintain a small set of approved representative screens.
- Treat design debt as continuous maintenance rather than a large redesign event.

## Current tapid posture

The homepage and documentation redesign are implemented. Further design work must:

- Keep installing tapid as the primary conversion
- Use package installation examples only as supporting product evidence
- Establish content hierarchy before decorative exploration
- Use headless browser automation for verification
- Keep reference company and website names out of project notes
- Preserve source-backed alpha claims and the existing documentation routes
