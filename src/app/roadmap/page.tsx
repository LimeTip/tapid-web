import Link from "next/link";
import type { ReactNode } from "react";
import ArrowLink from "@/components/ui/ArrowLink";

const phases: Array<[string, string, ReactNode]> = [
  ["Npm-compatible client", "Current planning", "The first client is planned around existing npm projects. It should provide a deterministic resolver, lockfile, verified store, Node-compatible linker, and policy-aware commands. This unlocks a familiar way to inspect and run current JavaScript and TypeScript projects."],
  ["Verification and execution", "Planned implementation", "The next implementation work covers exact artifact resolution, evidence output, lifecycle-script approvals, unattended decisions, and cross-platform execution boundaries. This unlocks repeatable package decisions before install or execution."],
  ["Registries and publishing", "Planned implementation", <>Tapid should later add explicit registry routing, scoped identities, publishing context, provenance, and private registry support. This unlocks clearer ownership and package boundaries. See the <Link href="/docs/reference/registries-and-publishing/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">registry reference</Link>.</>],
  ["Discovery and governance", "Future direction", <>Package pages, release evidence, audit attestations, governance, and public-registry operations belong to the future Tapid ecosystem. This unlocks shared discovery and review after the client and registry rules are established. The planned evidence model is described in <Link href="/docs/concepts/evidence-and-policy/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">evidence and policy</Link>.</>],
];

export default function RoadmapPage() {
  return (
    <main>
      <section className="bg-[#f7f7f5] py-24 md:py-32">
        <div className="site-container max-w-4xl">
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-.06em] md:text-7xl">Adoption first. Evidence throughout.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">Tapid starts where JavaScript projects are today and grows toward a package ecosystem with stronger identity, verification, and control.</p>
        </div>
      </section>
      <section className="site-container py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xl leading-8 text-neutral-700">The order matters. Tapid first needs to work with existing projects, then make package decisions inspectable, and only after that expand the registry and publishing model.</p>
          <p className="mt-5 text-base leading-7 text-neutral-600">Each phase below depends on the one before it. The status describes planning, not a completed product release.</p>
        </div>
        <div className="mt-16 space-y-12">
          {phases.map(([title, status, description]) => (
            <div key={title} className="grid gap-5 md:grid-cols-[220px_180px_1fr] md:gap-8">
              <h2 className="text-2xl font-semibold tracking-[-.035em]">{title}</h2>
              <p className="m-0 text-sm font-medium text-lime-700">{status}</p>
              <p className="m-0 max-w-xl text-base leading-7 text-neutral-600">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16"><ArrowLink href="/docs/getting-started/">Read where the project starts</ArrowLink></div>
      </section>
    </main>
  );
}
