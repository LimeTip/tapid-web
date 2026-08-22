"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapsible } from "@base-ui/react/collapsible";
import { docsNavigation } from "./navigation";

function isCurrentPath(pathname: string, href: string) {
  return pathname === href || (href !== "/docs/" && pathname.startsWith(href));
}

function NavigationLinks({ pathname, mobile = false }: { pathname: string; mobile?: boolean }) {
  return (
    <nav aria-label="Documentation sections" className={mobile ? "space-y-7" : "space-y-8"}>
      {docsNavigation.map((group) => (
        <div key={group.label}>
          <p className="mb-2 text-sm font-semibold text-neutral-500">{group.label}</p>
          <div className="space-y-1">
            {group.items.map((item) => {
              const current = isCurrentPath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`block border-l-2 px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 ${
                    current
                      ? "border-lime-600 font-semibold text-neutral-950"
                      : "border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block md:sticky md:top-28 md:self-start">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-sm font-semibold tracking-[-0.02em] text-neutral-950">Tapid documentation</p>
        <p className="mt-2 text-sm leading-6 text-neutral-600">Built alongside the package manager.</p>
      </div>
      <div className="pt-7">
        <NavigationLinks pathname={pathname} />
      </div>
    </aside>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Collapsible.Root className="mb-10 border-y border-neutral-200">
      <Collapsible.Trigger className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700">
        Browse documentation
        <span aria-hidden="true" className="text-lg font-normal leading-none transition-transform duration-150 data-panel-open:rotate-45">+</span>
      </Collapsible.Trigger>
      <Collapsible.Panel className="overflow-hidden pb-5 data-starting-style:h-0 data-ending-style:h-0">
        <NavigationLinks pathname={pathname} mobile />
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
