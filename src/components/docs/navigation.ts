export const docsNavigation = [
  {
    label: "Start here",
    items: [
      { href: "/docs/", label: "Overview", description: "A short map of the current Tapid client." },
      { href: "/docs/getting-started/", label: "Getting started", description: "Run the supported project path and understand its boundaries." },
    ],
  },
  {
    label: "Reference",
    items: [
      { href: "/docs/commands/", label: "Commands", description: "The implemented CLI surface and its constraints." },
      { href: "/docs/concepts/package-identity/", label: "Package identity", description: "How names, versions, registries, and artifact digests fit together." },
      { href: "/docs/concepts/evidence-and-policy/", label: "Evidence and policy", description: "How facts, decisions, and future trust controls relate." },
    ],
  },
] as const;
