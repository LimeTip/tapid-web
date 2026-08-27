import Link from "next/link";
import { Button } from "@base-ui/react/button";

const facts = [
  ["manifest", "package.json validated"],
  ["install", "lockfile replay implemented"],
  ["execution", "explicit root scripts"],
  ["safety", "dependency lifecycle scripts suppressed"],
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-neutral-950 text-white">
      <div className="site-container grid min-h-[680px] items-end gap-12 pb-16 pt-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1.1fr)] lg:gap-20 lg:pb-24 lg:pt-24">
        <div className="pb-2">
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-7xl lg:text-[6.8rem]">
            Install with<br />receipts.
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-neutral-300 sm:text-xl">
            A JavaScript and TypeScript package manager built around the moment that matters: knowing which artifact entered your project, why it was accepted, and what the command actually did. Written in Rust.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button render={<Link href="/docs/getting-started/" />} className="inline-flex h-12 items-center justify-center bg-lime-300 px-6 text-base font-semibold text-neutral-950 transition-colors hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
              Read the current implementation
            </Button>
            <Link href="/docs/commands/" className="font-medium text-white underline decoration-neutral-500 decoration-2 underline-offset-4 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
              See the CLI surface <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-neutral-800 lg:mb-3">
          <div className="flex items-center justify-between border-b border-neutral-800 py-4 text-sm">
            <span className="font-mono text-neutral-400">current implementation</span>
            <span className="text-neutral-500">verified from the repository</span>
          </div>
          <div className="divide-y divide-neutral-800">
            {facts.map(([label, detail]) => (
              <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-5 text-sm sm:grid-cols-[9rem_1fr]">
                <span className="font-mono text-neutral-500">{label}</span>
                <span className="text-neutral-200">{detail}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-500">Package-facing installation, online resolution, and complete npm compatibility are not available in the current CLI yet.</p>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="site-container grid divide-y divide-neutral-800 text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="py-5 pr-6"><span className="text-neutral-500">implemented</span><strong className="ml-3 font-mono font-normal text-white">lockfile replay</strong></div>
          <div className="py-5 sm:px-6"><span className="text-neutral-500">verified</span><strong className="ml-3 font-mono font-normal text-white">lifecycle suppression</strong></div>
          <div className="py-5 sm:pl-6"><span className="text-neutral-500">next gap</span><strong className="ml-3 font-mono font-normal text-white">package resolution</strong></div>
        </div>
      </div>
    </section>
  );
}
