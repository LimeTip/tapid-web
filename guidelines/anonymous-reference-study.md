# Anonymous developer-tool homepage study

Status: research only. No design direction is approved by this document.

The source pages are intentionally identified only as Reference A, Reference B, and Reference C. Company names, website names, URLs, copied assets, and copied text are excluded.

## Design Read

Reading this as a redesign of a developer-tool homepage for technical evaluators, with installation and first use as the primary path. The required impression is mature, confident, trustworthy, and immediately readable.

## Why the rejected round failed

The rejected five-page round optimized for visible difference and conceptual novelty before basic communication. That inverted the priority order.

Observed failures:

- Several heroes rendered their essential text from zero opacity or very low contrast. One first viewport was effectively blank during capture.
- Animation was treated as an entrance requirement rather than optional enhancement. Essential content was therefore unavailable during initial paint, slow execution, or animation failure.
- Headings were oversized relative to their copy and supporting visuals. Scale became noise rather than hierarchy.
- Excessive empty space delayed useful information and made unfinished compositions look intentional.
- Low-contrast gray copy was used to create atmosphere, directly harming legibility.
- Different visual metaphors replaced a coherent product story. The pages looked like unrelated art-direction exercises.
- Removing boxes, rulers, and status layouts was misinterpreted as removing useful boundaries and alignment. The result lacked structure.
- The five concepts varied their surface treatment but repeatedly used the same generic formula: oversized headline, sparse copy, abstract product metaphor, and delayed installation content.
- The process failed to test the most important acceptance condition: can a visitor read and act on the first screen immediately?

These pages are not suitable as an implementation base.

## Reference A

### What works

- The first screen has an unmistakable order: product category, concise value proposition, short explanation, primary action, secondary action.
- The text block occupies a controlled width. Large type is balanced by readable body copy and a functional visual on the opposite side.
- Dark and light values create strong hierarchy. The accent is reserved for selection and action.
- A distinctive visual world gives the product identity, but the visual does not replace the explanation.
- Installation appears immediately after the hero with platform selection, a copyable command, and release context.
- The long page changes density and layout according to content. Code, compatibility, security, deployment, and trust evidence are not forced into one repeated component.
- The final conversion returns to the same action introduced at the top.

### Risks and non-transferable elements

- The announcement and consent overlays compete with the homepage on small screens.
- The immersive illustrated atmosphere belongs to that product identity and must not be copied.
- Large capability demonstrations are appropriate for a mature product with broad evidence, not automatically for an early alpha.

## Reference B

### What works

- Installation is part of the hero rather than a later marketing section.
- The headline is bold, but the body, command, platform choice, and next step remain visible in the same opening composition.
- Product evidence sits next to the claim. The visitor can immediately understand what is being measured and where to verify it.
- Strong typographic contrast makes the page highly scannable.
- Technical content is presented as real commands, outputs, benchmarks, compatibility statements, and reproducible methods.
- The page repeatedly connects claims to documentation or source material.
- Mobile keeps the same order and does not invent a separate narrative: headline, explanation, install, quick start, then evidence.

### Risks and non-transferable elements

- Aggressive competitive claims and benchmark-heavy sections require mature, reproducible evidence.
- The dense grid and line system is part of that reference's identity and conflicts with tapid's stated visual bans.
- The loud display face and saturated accent create energy, but would make tapid feel less measured if copied directly.

## Reference C

### What works

- A single memorable brand element gives the whole page character.
- The hero remains readable despite a visually active background because foreground contrast and central hierarchy are controlled.
- The value proposition explains the outcome in plain language before introducing technical detail.
- The main action and documentation action are clear and balanced.
- Quick start follows directly after the hero and offers several onboarding paths.
- The rest of the page maintains one visual language, one accent, and consistent typography.
- Mobile removes navigation complexity while preserving the visual identity and the complete opening message.

### Risks and non-transferable elements

- The centered hero, mascot, dark canvas, ASCII texture, and orange-red accent belong to that identity and must not be imitated.
- The amount of personality is appropriate to its positioning but may undercut tapid's desired restraint.
- Some secondary copy is longer and lower contrast than tapid should accept.

## Shared principles worth transferring

1. Core content is present and readable at first paint. Motion may enhance it but never unlock it.
2. The first screen answers four questions in order: what is it, why should I care, what can I do now, and where can I verify it?
3. Installation or first use is a primary content block, not decorative terminal imagery.
4. Commands are real controls with platform context, copy behavior, and a clear next step.
5. Product evidence follows the claim it supports.
6. One visual language persists across the whole page. Section layouts can vary without changing identity.
7. Typography creates hierarchy through weight, contrast, and measure before extreme size.
8. Mobile preserves the same narrative and removes secondary navigation.
9. Distinctiveness comes from one product-specific element, not a collection of effects.
10. Long pages alternate density deliberately and end by returning to the primary action.

## Proposed tapid interpretation

This is a working hypothesis for discussion, not an approved design.

- Start with a plain statement of category and outcome.
- Put the documentation action and current runnable path in the first viewport.
- Place installation or alpha evaluation directly below, with platform choices only if they are currently supported.
- Use a real tapid package-resolution or installation result as the principal visual evidence.
- Explain the evidence in the order the tool produces it: requested package, resolved identity, registry origin, artifact integrity, dependency and lifecycle decisions, lockfile or replay state, then outcome.
- State alpha limitations beside the relevant capability, not in a decorative badge.
- Use one light, high-contrast visual system with a restrained lime interaction accent.
- Prefer a conventional reading column and one supporting evidence area over extreme asymmetry.
- Keep essential content static. Limit motion to hover, focus, copy confirmation, and explicit state changes.

## Proposed design dials

These values correct the previous overemphasis on novelty. They are not approved yet.

- `DESIGN_VARIANCE: 4`
- `MOTION_INTENSITY: 2`
- `VISUAL_DENSITY: 5`

## Readability gate for any future concept

A future concept is not reviewable unless all conditions pass:

- Essential hero content is visible when JavaScript is unavailable and before animations run.
- No essential element starts at `opacity: 0`.
- Normal text meets at least WCAG AA contrast. Hero body copy targets AAA where practical.
- Body copy is at least 16 CSS pixels with a readable line height and controlled measure.
- The desktop headline stays within two lines at the tested viewport.
- The mobile headline and body do not clip, overlap, or create horizontal scrolling at 320 CSS pixels.
- The primary action and runnable path are visible in the initial desktop viewport.
- Content remains usable with reduced motion, 200 percent zoom, keyboard input, and narrow reflow.
- A headless first-paint screenshot and a post-load screenshot both show complete, readable content.
- The concept passes a plain-language copy review before visual review.

## Process correction

Do not generate another five-page batch. First agree on the hierarchy and one visual stance. Then create one low-fidelity content and typography study. After that study passes readability review, expand into a small number of genuinely different visual treatments using the same approved hierarchy.
