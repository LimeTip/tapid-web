"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@base-ui/react/button";
import mark from "@/brand/tapid-mark.png";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/security", label: "Security" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "https://github.com/LimeTip/tapid", label: "GitHub", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#eeeeec] bg-white/90 backdrop-blur-lg">
      <div className="h-1 bg-gradient-to-r from-lime-500 to-lime-600" />
      <nav className="site-container flex h-[4.25rem] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={mark} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="text-lg font-semibold tracking-[-0.04em] group-hover:text-lime-700">tapid</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="text-sm font-medium text-neutral-600 transition-colors hover:text-lime-700">
              {link.label}
            </Link>
          ))}
          <Button className="rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-lime-700">Read the docs</Button>
        </div>
        <Button className="rounded-lg px-3 py-2 text-neutral-700 hover:bg-neutral-100 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </Button>
      </nav>
      {open && (
        <div className="border-t border-[#eeeeec] bg-white md:hidden">
          <div className="site-container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-neutral-700 hover:bg-lime-50 hover:text-lime-800">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
