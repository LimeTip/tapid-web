# Tapid web

The public Tapid website and documentation, built with Next.js, Base UI, and MDX.

## Development

```text
npm install
npm run dev
```

The site is currently exported as static content for Cloudflare Pages:

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
