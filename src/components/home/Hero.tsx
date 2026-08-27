import Link from "next/link";
import { Button } from "@base-ui/react/button";

const checks = [
  ["manifest", "package.json validated"],
  ["lockfile", "offline replay implemented"],
  ["scripts", "explicit root execution"],
];

export default function Hero() {
  return (
    <section className="hero-grid overflow-hidden bg-neutral-950 text-white">
      <div className="site-container grid gap-14 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,0.72fr)] lg:items-end lg:gap-20">
        <div>
          <h1 className="max-w-4xl text-[3.6rem] font-semibold leading-[0.9] tracking-[-0.075em] text-white sm:text-7xl lg:text-[7.2rem]">
            The package manager that shows its work.
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-neutral-300 sm:text-xl">
            Tapid is a JavaScript and TypeScript package manager written in Rust. It makes package identity, install evidence, and execution boundaries visible instead of leaving them implicit.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button render={<Link href="/docs/getting-started/" />} className="inline-flex min-h-12 items-center justify-center bg-lime-300 px-6 text-base font-semibold text-neutral-950 transition-colors hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
              Read the current path
            </Button>
            <Link href="/docs/commands/" className="font-medium text-white underline decoration-neutral-600 decoration-2 underline-offset-4 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
              Inspect the CLI <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="border border-neutral-700 bg-neutral-900/80">
          <div className="flex items-center justify-between border-b border-neutral-700 px-5 py-4 font-mono text-xs">
            <span className="text-neutral-300">tapid / command surface</span>
            <span className="text-neutral-500">current CLI</span>
          </div>
          <div className="space-y-6 p-5 sm:p-6">
            <div className="font-mono text-sm leading-7">
              <p className="m-0 text-neutral-500"><span className="text-lime-300">$</span> tapid install is-char</p>
              <p className="m-0 text-amber-300">error: package argument not implemented</p>
              <p className="m-0 pt-2 text-xs leading-5 text-neutral-500">The intended package-facing command. Resolution is the next implementation gap.</p>
            </div>
            <div className="border-t border-neutral-700 pt-5">
              <p className="m-0 font-mono text-xs text-neutral-500">verified project behavior</p>
              <div className="mt-4 space-y-3">
                {checks.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-3 text-sm">
                    <span className="font-mono text-neutral-500">{label}</span>
                    <span className="text-neutral-200">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-700 px-5 py-4 text-xs leading-5 text-neutral-500 sm:px-6">
            No fabricated install result. The current evidence is a project replay, not package resolution.
          </div>
        </div>
      </div>

    </section>
  );
}
