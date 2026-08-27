import Link from "next/link";
import { Button } from "@base-ui/react/button";

const session = [
  { command: "tapid init demo", output: "Created demo/package.json", tone: "success" },
  { command: "tapid manifest validate demo/package.json", output: "Valid manifest: demo@0.1.0", tone: "success" },
  { command: "tapid install <package-spec>", output: "planned: package resolution is not available yet", tone: "planned" },
];

export default function Hero() {
  return (
    <section className="hero-grid overflow-hidden bg-neutral-950 text-white">
      <div className="site-container grid gap-14 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(25rem,0.72fr)] lg:items-end lg:gap-20">
        <div>
          <h1 className="max-w-4xl text-[3.6rem] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[7.2rem]">
            Package management with clear evidence.
          </h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-neutral-300 sm:text-xl">
            Tapid is a JavaScript and TypeScript package manager written in Rust. It makes package identity, install evidence, and execution boundaries visible instead of leaving them implicit.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button render={<Link href="/docs/getting-started/" />} className="inline-flex min-h-12 items-center justify-center bg-lime-400 px-6 text-base font-semibold !text-neutral-950 transition-colors hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
              Read the current path
            </Button>
            <Link href="/docs/commands/" className="font-medium text-white underline decoration-neutral-600 decoration-2 underline-offset-4 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">
              Inspect the CLI <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden border border-neutral-700 bg-[#111111] shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 border-b border-neutral-700 px-5 py-4" aria-label="Terminal window">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-lime-400/80" aria-hidden="true" />
            <span className="ml-3 font-mono text-xs text-neutral-400">zsh · ~/projects/demo</span>
          </div>
          <div className="space-y-6 p-5 font-mono text-[0.78rem] leading-6 sm:p-6 sm:text-sm">
            {session.map(({ command, output, tone }) => (
              <div key={command}>
                <p className="m-0 break-words text-neutral-100">
                  <span className="text-lime-300">$</span> {command}
                </p>
                <p className={`m-0 break-words ${tone === "success" ? "text-neutral-300" : "text-amber-300"}`}>
                  {output}
                </p>
              </div>
            ))}
            <p className="m-0 text-neutral-600"><span className="text-lime-300">$</span> <span className="inline-block h-4 w-2 translate-y-0.5 bg-neutral-400 motion-safe:animate-pulse" aria-label="Cursor" /></p>
          </div>
          <div className="border-t border-neutral-700 px-5 py-4 text-xs leading-5 text-neutral-500 sm:px-6">
            A real project path today. Package resolution is the next boundary.
          </div>
        </div>
      </div>
    </section>
  );
}
