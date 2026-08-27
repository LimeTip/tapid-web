# Tapid web

The public Tapid website and documentation, built with Next.js, Base UI, and MDX.

## Development

```text
npm install
npm run dev
```

The site is currently exported as static content for Cloudflare Pages. The public installer endpoints are emitted from `public/` at the site root:

```bash
curl -fsSL https://tapid.dev/install.sh | bash
```

```powershell
iwr -useb https://tapid.dev/install.ps1 | iex
```

These default commands build Tapid from the `main` source branch locally. They are the development installation path until the repository publishes matching signed platform assets and checksum metadata. A specific release or source ref can still be selected through the installer options.

```text
npm run lint
npm run build
npm run deploy
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

The website is currently a design and planning site. It must not claim that Tapid is ready to install until the core implementation exists.
