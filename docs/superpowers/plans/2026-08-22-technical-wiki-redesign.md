# Technical Wiki Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `/docs` routes as a focused technical wiki for experienced developers.

**Architecture:** Keep the existing App Router and MDX content model. Add one shared typed navigation definition, use it from a server-rendered docs shell, and use Base UI `Collapsible` only for the mobile navigation disclosure. Keep static structure semantic and avoid new generic card or design-system components.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, MDX, Base UI, Tailwind CSS.

**Spec:** `docs/superpowers/specs/2026-08-22-technical-wiki-design.md`

## Global Constraints

- Preserve `/docs/`, `/docs/getting-started/`, and `/docs/commands/` routes.
- Preserve planned-versus-implemented caveats in all copy.
- Do not change the homepage or unrelated routes.
- Prefer semantic `nav`, `aside`, `main`, `article`, headings, lists, and links for static structure.
- Use Base UI only where interaction is required, especially the mobile navigation disclosure.
- Avoid eyebrow titles, promotional cards, decorative numbered strips, excessive rounded containers, and large empty hero regions.
- Maintain visible focus states and keyboard-accessible navigation.

---

### Task 1: Define the shared docs navigation model

**Files:**
- Create: `components/docs/navigation.ts`

**Interfaces:**
- Produces `docsNavigation`, a readonly array of groups with `label` and `items` fields.
- Each item has `href`, `label`, and `description` fields.
- The model contains the existing routes only: Overview, Getting started, and Commands.

- [ ] **Step 1: Create the typed navigation definition**

Use a literal readonly structure so the desktop and mobile shells consume the same labels and hrefs:

```ts
export const docsNavigation = [
  {
    label: "Start here",
    items: [
      { href: "/docs/", label: "Overview", description: "What Tapid is and how to read this documentation." },
      { href: "/docs/getting-started/", label: "Getting started", description: "The current product direction and first client milestone." },
    ],
  },
  {
    label: "Reference",
    items: [
      { href: "/docs/commands/", label: "Commands", description: "The planned CLI surface and its decision model." },
    ],
  },
] as const;
```

- [ ] **Step 2: Verify the navigation model has no duplicate route or label**

Run: `sed -n '1,220p' components/docs/navigation.ts`

Expected: exactly three route entries, grouped under `Start here` and `Reference`.

---

### Task 2: Rebuild the shared docs shell

**Files:**
- Modify: `app/docs/layout.tsx`
- Create: `components/docs/MobileNavigation.tsx`

**Interfaces:**
- `MobileNavigation` accepts no props and reads `docsNavigation` directly.
- `DocsLayout` renders the shared desktop rail, mobile disclosure, and article slot.

- [ ] **Step 1: Implement the mobile disclosure with Base UI**

Make `MobileNavigation` a client component using `@base-ui/react/collapsible`. Render a `Collapsible.Trigger` labeled `Browse documentation`, a `Collapsible.Panel` containing semantic grouped links, and visible focus styles. The trigger must expose the open state through Base UI’s data attributes and must not require custom state management.

- [ ] **Step 2: Replace the horizontal docs links with a wiki shell**

In `DocsLayout`, render:

```tsx
<main className="site-container grid gap-12 py-10 md:grid-cols-[220px_minmax(0,680px)] md:gap-16 md:py-16 lg:grid-cols-[220px_minmax(0,720px)] lg:gap-20">
  <aside className="hidden md:block md:sticky md:top-28 md:self-start">
    {/* Tapid Documentation identity and grouped navigation */}
  </aside>
  <div className="min-w-0">
    <div className="md:hidden"><MobileNavigation /></div>
    <article>{children}</article>
  </div>
</main>
```

The desktop rail should include a plain `Tapid documentation` label, a short status line saying the docs are being built alongside the package manager, and grouped links from `docsNavigation`. The active route should use `aria-current="page"` and a restrained lime text/border treatment. The article column must remain readable and avoid the current full-width block appearance.

- [ ] **Step 3: Add keyboard and responsive states**

Use semantic links, `focus-visible` outlines, `overflow-x-auto` only for the mobile navigation control if needed, and no motion required to understand the menu. Keep the desktop rail sticky below the header.

- [ ] **Step 4: Run the narrow check**

Run: `npm run lint`

Expected: exit code 0.

---

### Task 3: Rework the overview page as a wiki index

**Files:**
- Modify: `app/docs/page.tsx`

- [ ] **Step 1: Replace the landing-page card grid**

Render a focused article with an `h1`, one concise explanatory paragraph, and a semantic list of documentation entries derived from `docsNavigation`. Each entry should include the section label, link title, description, and a subtle right-facing arrow. Use borders and whitespace for separation; do not use rounded cards, numbered markers, or uppercase eyebrow labels.

- [ ] **Step 2: State the documentation status plainly**

Keep the current caveat that the documentation is being built alongside the package manager and describe the covered areas without implying that the product is installable.

- [ ] **Step 3: Verify the route**

Open `http://localhost:3000/docs/` and verify the page reads as a documentation index at desktop and narrow mobile widths.

---

### Task 4: Rework article presentation for Getting started and Commands

**Files:**
- Modify: `app/docs/getting-started/page.tsx`
- Modify: `content/docs/getting-started.mdx`
- Modify: `app/docs/commands/page.tsx`

- [ ] **Step 1: Align the MDX article with the wiki rhythm**

Keep the existing Getting started content and claims, but use the shared docs typography classes consistently. Ensure the title is the only page-level `h1`, section headings are `h2`, and paragraphs/lists retain readable line length.

- [ ] **Step 2: Improve the Commands reference structure**

Keep every existing planned command and description. Add a direct planned-status sentence before the reference rows, then render the commands as a semantic definition-list-like structure with a code term and description. Preserve the link to the security model.

- [ ] **Step 3: Verify article navigation and typography**

Open `http://localhost:3000/docs/getting-started/` and `http://localhost:3000/docs/`. Confirm the active navigation state changes correctly, the article column is readable, and no planned behavior is described as available now.

---

### Task 5: Record the review outcome and run full verification

**Files:**
- Modify: `guidelines/design-feedback.md`

- [ ] **Step 1: Mark the docs wiki feedback implemented**

Update the existing `/docs` feedback entry with the implemented files and browser verification notes. Keep the durable principles in `guidelines/design-principles.md` unchanged unless implementation reveals a new lasting preference.

- [ ] **Step 2: Run lint and production builds**

Run: `npm run lint`

Expected: exit code 0.

Run: `npm run build`

Expected: exit code 0. If the environment repeats the known Turbopack worker permission failure, run `npm run build -- --webpack` and record the exact limitation in the handoff.

- [ ] **Step 3: Perform final browser review**

Review `/docs/`, `/docs/getting-started/`, and `/docs/commands/` at desktop and mobile widths. Check keyboard focus, active navigation, mobile disclosure, heading hierarchy, and that the homepage remains unchanged.

