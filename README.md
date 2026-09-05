# tapid web

The public tapid website and documentation, built with Next.js and MDX.

## Development

```text
tapid install
tapid run dev
```

The site is exported as static content for Cloudflare Pages. Public installer endpoints are emitted from `public/`, but their no-argument stable path is not currently available because no signed asset-backed stable release has been published.

The supported contributor-development path builds the current main branch from source:

```bash
installer="$(mktemp)"
curl -fsSL https://raw.githubusercontent.com/LimeTip/tapid/main/scripts/install.sh -o "$installer"
less "$installer"
sh "$installer" --source-ref main
rm -f "$installer"
```

```text
tapid run lint
tapid run build
tapid run deploy
```

## Structure

- `src/app/`: routes and page layouts
- `src/components/`: shared site and page components
- `src/content/`: version-controlled MDX documentation
- `src/brand/`: tapid logo assets
- `public/`: static public assets

Documentation uses the existing documentation framework and repository-owned MDX content. Preserve that framework when revising navigation, styling, or content.

## Legal

tapid is developed and maintained by LimeTip. The website links to LimeTip's maintained privacy, terms, and contact pages rather than duplicating legal policies in this repository:

- https://limetip.com/privacy
- https://limetip.com/terms
- https://limetip.com/contact

Version 0.0.7 is experimental software with a documented npm-compatible subset. The website must keep implementation status, release availability, and compatibility limits explicit.
