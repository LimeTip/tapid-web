# Tapid web

The public Tapid website and documentation, built with Next.js, Base UI, and MDX.

## Development

```text
tapid install
tapid run dev
```

The site is currently exported as static content for Cloudflare Pages. The public installer endpoints are emitted from `public/` at the site root:

```bash
curl -fsSL https://tapid.dev/install.sh | bash
```

```powershell
iwr -useb https://tapid.dev/install.ps1 | iex
```

These default commands install the latest stable Tapid release. The installer verifies the signed release manifest, archive identity, SHA-256 hash, size, and structure before installing the binary. A specific stable version or development source ref can be selected through the installer options.

```text
tapid run lint
tapid run build
tapid run deploy
```

## Structure

- `src/app/`: routes and page layouts
- `src/components/`: shared site and page components
- `src/content/`: version-controlled MDX documentation
- `src/brand/`: Tapid logo assets
- `public/`: static public assets

Documentation is built with the Next.js MDX module so content can grow in the repository and later adopt a larger documentation framework if search, versioning, or navigation requirements justify it.

## Legal

Tapid is developed and maintained by LimeTip. The website links to LimeTip's maintained privacy, terms, and contact pages rather than duplicating legal policies in this repository:

- https://limetip.com/privacy
- https://limetip.com/terms
- https://limetip.com/contact

Tapid 0.0.7 is experimental software with a documented npm-compatible subset. The website must keep implementation status and compatibility limits explicit.
