import Image from "next/image";
import Link from "next/link";
import mark from "@/brand/tapid-mark.svg";

const links = [
  { href: "/docs/", label: "Docs" },
  { href: "/docs/releases/0.0.7/", label: "Alpha 0.0.7" },
  { href: "https://github.com/LimeTip/tapid", label: "Source", external: true },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-container site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link" aria-label="tapid home">
          <Image src={mark} alt="" width={32} height={32} className="brand-mark" priority />
          <span>tapid</span>
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="nav-link"
            >
              {link.label}
              {link.external ? <span className="sr-only">, opens in a new tab</span> : null}
            </Link>
          ))}
          <Link href="/docs/getting-started/" className="nav-action">Start here</Link>
        </div>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-nav-panel">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
                {link.external ? <span className="sr-only">, opens in a new tab</span> : null}
              </Link>
            ))}
            <Link href="/docs/getting-started/">Start here</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
