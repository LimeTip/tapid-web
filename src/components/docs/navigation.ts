export const docsNavigation = [
  {
    label: "Start here",
    items: [
      { href: "/docs/", label: "Overview", description: "What Tapid is and how to read this documentation." },
      { href: "/docs/getting-started/", label: "Getting started", description: "The current product direction and first client milestone." },
    ],
  },
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
] as const;
