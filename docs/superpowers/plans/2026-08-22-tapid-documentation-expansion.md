# Tapid documentation and website expansion implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the Tapid website and Markdown/MDX documentation so developers can understand the product problem, proposed system, current status, and future direction.

**Architecture:** Keep the existing Next.js App Router, static export, MDX pipeline, and docs shell. Store the long-form product explanation in `content/docs/`, expose it through small route files, and extend the shared navigation data for the new concept, guide, and reference pages. Keep website sections focused on concise explanations that link back to the docs.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, MDX, Base UI, Tailwind CSS.

**Spec:** `docs/superpowers/specs/2026-08-22-tapid-documentation-expansion-design.md`

## Global Constraints

- Use the attached transcript only as product inspiration and problem context. Do not copy it into the repository or upload it anywhere.
- Label every claim as current, planned, or future when the distinction matters.
- Do not claim that Tapid is installable, production-ready, or already enforcing the described policies.
- Write documentation as Markdown/MDX so it remains readable to developers and future language models.
- Apply the `unslop` writing pass to all new and rewritten prose.
- Do not change the existing docs shell interaction model beyond adding navigation entries.
- Keep the static Cloudflare Pages architecture unchanged.
- Do not add a CMS, search index, database, or new runtime dependency.

---

### Task 1: Expand the shared documentation navigation

**Files:**
- Modify: `components/docs/navigation.ts`

**Interfaces:**
- Preserve the existing `docsNavigation` readonly array shape: each group has `label` and `items`; each item has `href`, `label`, and `description`.
- Add the new routes without duplicating labels or descriptions in route components.

- [ ] **Step 1: Add the new navigation groups**

Extend the navigation with these entries:

```ts
{
  label: "Concepts",
  items: [
    { href: "/docs/concepts/package-identity/", label: "Package identity", description: "How names, versions, lockfiles, and artifact digests fit together." },
    { href: "/docs/concepts/evidence-and-policy/", label: "Evidence and policy", description: "How Tapid separates facts from allow, warn, prompt, and deny decisions." },
  ],
},
{
  label: "Guides",
  items: [
    { href: "/docs/guides/install-and-execute/", label: "Install and execute", description: "The intended flow for project dependencies and one-shot tools." },
    { href: "/docs/guides/agent-safe-commands/", label: "Agent-safe commands", description: "What an agent should know before it runs package-backed code." },
  ],
},
{
  label: "Reference",
  items: [
    { href: "/docs/commands/", label: "Commands", description: "The planned CLI surface and its decision model." },
    { href: "/docs/reference/registries-and-publishing/", label: "Registries and publishing", description: "Public and private registries, identity, provenance, and correction rules." },
  ],
},
```

Keep `Overview` and `Getting started` under `Start here`.

- [ ] **Step 2: Verify every navigation href maps to a planned route**

Run: `rg -n "href:" components/docs/navigation.ts`

Expected: eight entries, all ending in a trailing slash and matching the route list in the spec.

---

### Task 2: Move the docs index and command reference into MDX

**Files:**
- Create: `content/docs/overview.mdx`
- Create: `content/docs/commands.mdx`
- Modify: `app/docs/page.tsx`
- Modify: `app/docs/commands/page.tsx`

- [ ] **Step 1: Write `content/docs/overview.mdx`**

Use this structure and claims:

```md
# Tapid documentation

Tapid is a package manager and registry project in design and planning. This documentation describes the problem it is trying to solve, the system it is intended to become, and the parts that do not exist yet.

## Read this first

- [Getting started](/docs/getting-started/) explains the first client milestone and the current boundary of the project.
- [Package identity](/docs/concepts/package-identity/) explains why a package name is not enough to identify code.
- [Evidence and policy](/docs/concepts/evidence-and-policy/) explains the difference between facts and decisions.

## Follow the flow

- [Install and execute](/docs/guides/install-and-execute/) follows a package from request to install or one-shot execution.
- [Agent-safe commands](/docs/guides/agent-safe-commands/) describes the context an agent should receive before it runs a package-backed command.
- [Commands](/docs/commands/) lists the planned client commands.

## Read the reference

- [Registries and publishing](/docs/reference/registries-and-publishing/) describes public and private registry boundaries and future publishing rules.
- [Security model](/security/) explains the security principles used by the website and product plan.
```

Keep all statements accurate for the current design-stage product.

- [ ] **Step 2: Write `content/docs/commands.mdx`**

Start with a paragraph that says the interface is planned and not installable. Add a `## Project commands` section with these headings and exact descriptions: `tapid install`, `tapid add <package-spec>`, `tapid audit`, `tapid x <package-spec>`, `tapid lock verify`, and `tapid store gc --dry-run`. End with a link to the security model and the evidence/policy page.

- [ ] **Step 3: Change the routes to render MDX**

Import `Overview` and `Commands` from the new content files and return them from their route components. Keep metadata in the route files. Remove the duplicated arrays and long paragraphs from the route components.

- [ ] **Step 4: Run the docs route check**

Run: `npm run lint`

Expected: exit code 0.

---

### Task 3: Expand the existing Getting started article

**Files:**
- Modify: `content/docs/getting-started.mdx`

- [ ] **Step 1: Rewrite the opening in plain language**

State that Tapid is currently design and planning work, not an installable package manager. Explain that the first useful client targets existing `package.json` projects and npm-compatible registries so adoption can start without requiring a new ecosystem on day one.

- [ ] **Step 2: Add a product boundary section**

Add `## What exists today` with the current website, documentation, and architecture planning as the only claims. Add `## What is planned next` with deterministic resolution, `tapid.lock`, verified artifacts, a content-addressed store, Node-compatible output, and policy-aware execution.

- [ ] **Step 3: Add a reading path**

Link to package identity, evidence and policy, install and execute, and agent-safe commands. Keep the existing questions about exact code, publisher, changes, capabilities, and policy decisions, but rewrite them as direct questions without filler.

- [ ] **Step 4: Self-audit the copy with `unslop`**

Remove vague claims, promotional language, em dashes, title-case headings, and any sentence that could describe a different package manager.

---

### Task 4: Add concept, guide, and reference MDX pages

**Files:**
- Create: `content/docs/concepts/package-identity.mdx`
- Create: `content/docs/concepts/evidence-and-policy.mdx`
- Create: `content/docs/guides/install-and-execute.mdx`
- Create: `content/docs/guides/agent-safe-commands.mdx`
- Create: `content/docs/reference/registries-and-publishing.mdx`
- Create: `app/docs/concepts/package-identity/page.tsx`
- Create: `app/docs/concepts/evidence-and-policy/page.tsx`
- Create: `app/docs/guides/install-and-execute/page.tsx`
- Create: `app/docs/guides/agent-safe-commands/page.tsx`
- Create: `app/docs/reference/registries-and-publishing/page.tsx`

- [ ] **Step 1: Write the package identity concept**

Cover package name, version range, resolved release, registry identity, artifact digest, and lockfile entry. Explain that Tapid plans to show the exact artifact before install or execution. Mark digest verification and the client implementation as planned.

- [ ] **Step 2: Write the evidence and policy concept**

Define factual evidence: publisher context, release changes, provenance, lifecycle scripts, native code, network, filesystem, and other capability signals. Explain that policy consumes evidence and produces an allow, warning, prompt, or denial. State that Tapid does not reduce uncertainty to an unexplained universal safety score.

- [ ] **Step 3: Write the install and execute guide**

Describe the intended sequence: resolve the request, inspect the exact artifact and evidence, apply policy, then install or execute. Include a short conceptual example for a project dependency and another for a one-shot tool. Do not present either example as a command that works today.

- [ ] **Step 4: Write the agent-safe commands guide**

Explain why an agent needs package identity, change information, capabilities, publisher context, and policy outcome before it runs a command. Describe fail-closed behavior as planned behavior for unattended operation. Keep the writing useful to agent authors without claiming a current agent integration.

- [ ] **Step 5: Write the registries and publishing reference**

Cover public registries, private registries, explicit scope routing, credential boundaries, publisher identity, provenance, release correction, revocation thresholds as an open policy question, name-squatting defenses as a future governance area, and independent verification as a planned capability. Avoid presenting any single final rule as decided.

- [ ] **Step 6: Add route metadata and render each MDX page**

Each route should export a title and description, import its MDX content, and return it without placing long prose in the route file.

- [ ] **Step 7: Run a content link check**

Run: `rg -n "\]\(/docs/" content/docs`

Expected: all internal docs links point to one of the routes in the navigation model.

---

### Task 5: Expand the homepage, security page, and roadmap

**Files:**
- Modify: `components/home/EvidenceSection.tsx`
- Modify: `components/home/WorkflowSection.tsx`
- Modify: `components/home/DirectionSection.tsx`
- Modify: `app/security/page.tsx`
- Modify: `app/roadmap/page.tsx`

- [ ] **Step 1: Make the homepage explain the product boundary**

Keep the current hero. Update the existing sections so they explain exact artifacts, evidence categories, the resolve/inspect/policy/install flow, and npm-compatible adoption before the future Tapid-native ecosystem. Link each section to the relevant docs route.

- [ ] **Step 2: Expand the security page**

Replace the short list with clear sections for evidence before trust, exact and reproducible artifacts, execution boundaries, registry boundaries, and current status. Keep the page explicit that these are product principles and planned behavior, not proof that the implementation exists.

- [ ] **Step 3: Expand the roadmap page**

Use readable phases for the first npm-compatible client, verification and execution, registries and publishing, and future discovery/governance. Each phase must say what it unlocks and whether it is current planning, planned implementation, or future direction.

- [ ] **Step 4: Apply `unslop` to all edited website copy**

Remove generic marketing language, forced rule-of-three structures, em dashes, and phrases that could be pasted into another product site unchanged.

---

### Task 6: Update guidelines and verify the expanded site

**Files:**
- Modify: `guidelines/design-feedback.md`
- Modify: `guidelines/design-principles.md` only if a new durable preference is discovered

- [ ] **Step 1: Record the expansion outcome**

Mark the open docs content feedback as implemented, list the new content and route files, and record browser review notes. Add a durable principle only if the implementation reveals a preference not already captured.

- [ ] **Step 2: Run lint and production builds**

Run: `npm run lint`

Expected: exit code 0.

Run: `npm run build`

Expected: exit code 0. If Turbopack repeats the local worker permission failure, run `npm run build -- --webpack` and record the limitation.

- [ ] **Step 3: Review every new route in the browser**

Review `/docs/`, `/docs/getting-started/`, `/docs/concepts/package-identity/`, `/docs/concepts/evidence-and-policy/`, `/docs/guides/install-and-execute/`, `/docs/guides/agent-safe-commands/`, `/docs/commands/`, and `/docs/reference/registries-and-publishing/` at desktop and mobile widths. Confirm navigation, active states, links, heading hierarchy, and current/planned/future language.

