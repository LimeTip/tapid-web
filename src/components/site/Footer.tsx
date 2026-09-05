import Image from "next/image";
import Link from "next/link";
import mark from "@/brand/tapid-mark.svg";

const footerLinks = [
  { href: "/docs/", label: "Documentation" },
  { href: "/docs/getting-started/", label: "Getting started" },
  { href: "/docs/releases/0.0.7/", label: "Current alpha" },
  { href: "https://github.com/LimeTip/tapid", label: "Source", external: true },
  { href: "https://limetip.com/privacy", label: "Privacy", external: true },
  { href: "https://limetip.com/terms", label: "Terms", external: true },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div>
          <div className="brand-link footer-brand">
            <Image src={mark} alt="" width={34} height={34} className="brand-mark" />
            <span>tapid</span>
          </div>
          <p className="footer-copy">
            A JavaScript and TypeScript package manager built around exact identity, integrity evidence, and inspectable replay.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
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
        </nav>
      </div>
      <div className="site-container footer-meta">
        <span>Developed and maintained by LimeTip</span>
        <span>Source-built alpha 0.0.7</span>
      </div>
    </footer>
  );
}
