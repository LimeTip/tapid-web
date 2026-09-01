import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";

const checks = [
  ["manifest", "rootManifestDigest matches package.json"],
  ["lockfile", "schema 6 records exact identity and integrity provenance"],
  ["store", "verified external store trees before staging"],
  ["lifecycle", "dependency scripts suppressed during install"],
];

export default function EvidenceSection() {
  return (
    <section className="bg-neutral-950 py-20 text-white md:py-24">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <SectionHeading title="The useful part is not the promise. It is the receipt.">
            <p>Tapid&apos;s current install path validates the project before it activates managed output. The result is narrow, explicit, and inspectable.</p>
            <p className="mt-5"><Link href="/docs/concepts/package-identity/" className="font-medium text-lime-300 underline decoration-lime-700 decoration-2 underline-offset-4 hover:text-lime-200">Understand package identity ↗</Link></p>
          </SectionHeading>
          <div>
            <div className="border-y border-neutral-800 py-5">
              <p className="m-0 text-sm leading-6 text-neutral-300">The current npm path resolves supported transitive dependencies, verifies registry-declared artifact integrity, materializes managed output, and replays it from the lockfile without running dependency lifecycle scripts.</p>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {checks.map(([name, detail]) => (
                <div key={name} className="flex gap-3 text-sm leading-6">
                  <span aria-hidden="true" className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center bg-lime-300 font-mono text-[10px] text-neutral-950">✓</span>
                  <p className="m-0"><span className="font-mono text-neutral-400">{name}</span><br /><span className="text-neutral-200">{detail}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-neutral-800 pt-6">
          <p className="m-0 font-mono text-xs text-neutral-400">registry-backed installation with explicit compatibility limits</p>
          <ArrowLink href="/docs/concepts/evidence-and-policy/">Read the evidence model</ArrowLink>
        </div>
      </div>
    </section>
  );
}
