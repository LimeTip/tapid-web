"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@base-ui/react/button";
import { Collapsible } from "@base-ui/react/collapsible";
import mark from "@/brand/tapid-mark-white.png";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/getting-started/", label: "Install" },
  { href: "https://github.com/LimeTip/tapid", label: "GitHub", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950 text-white">
      <Collapsible.Root open={open} onOpenChange={setOpen}>
      <nav className="site-container flex h-[4.25rem] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src={mark} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="text-lg font-semibold tracking-[-0.04em] group-hover:text-lime-300">tapid</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="text-sm font-medium text-neutral-400 transition-colors hover:text-lime-300">
              {link.label}
            </Link>
          ))}
          <Button render={<Link href="/docs" />} className="bg-lime-300 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">Read the docs</Button>
        </div>
        <div className="md:hidden">
          <Collapsible.Trigger className="px-3 py-2 text-sm font-semibold text-neutral-200 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
            <span className="sr-only">Toggle navigation</span>
            {open ? "Close" : "Menu"}
          </Collapsible.Trigger>
        </div>
      </nav>
      <Collapsible.Panel className="overflow-hidden border-t border-neutral-800 bg-neutral-950 data-ending-style:h-0 data-starting-style:h-0 md:hidden">
          <div className="site-container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-lime-300">
                {link.label}
              </Link>
            ))}
          </div>
        </Collapsible.Panel>
      </Collapsible.Root>
    </header>
  );
}
