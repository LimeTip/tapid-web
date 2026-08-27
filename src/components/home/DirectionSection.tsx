import Link from "next/link";
import ArrowLink from "@/components/ui/ArrowLink";

export default function DirectionSection() {
  return (
    <section className="bg-neutral-950 py-20 text-white md:py-24">
      <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-24">
        <div>
          <h2 className="m-0 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl md:text-6xl">Start with the projects developers already have.</h2>
        </div>
        <div>
          <p className="m-0 max-w-2xl text-lg leading-8 text-neutral-300">Tapid&apos;s next work is not a promise of a finished ecosystem. It is a sequence of implementation problems: make the current client useful, make artifact decisions inspectable, then build the registry and publishing model that can support them.</p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
            <ArrowLink href="/roadmap" inverse>See the implementation roadmap</ArrowLink>
            <Link href="https://github.com/LimeTip/tapid" className="font-medium text-white underline decoration-neutral-600 decoration-2 underline-offset-4 hover:text-lime-300">Inspect the CLI repository ↗</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
