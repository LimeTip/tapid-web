import Link from "next/link";

export default function EvidenceSection() {
  return (
    <section className="bg-white/50 py-24 md:py-32">
      <div className="site-container">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">Start with evidence you can inspect</h2>
            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">A useful package record names the exact artifact, the publisher context, the release changes, and the capabilities that may matter before code runs.</p>
              <p className="text-lg leading-relaxed text-gray-700">Tapid treats those facts as evidence. A separate policy step decides what to do with them, so a warning or denial can be traced to a rule instead of an unexplained score.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <Link href="/docs/concepts/evidence-and-policy/" className="inline-flex font-medium text-lime-600 hover:underline">Read about evidence and policy →</Link>
                <Link href="/docs/concepts/package-identity/" className="inline-flex font-medium text-lime-600 hover:underline">See package identity →</Link>
              </div>
            </div>
          </div>
          <div className="space-y-8 border-y border-gray-200 py-2">
            <div className="border-b border-gray-200 py-6">
              <h3 className="mb-2 text-lg font-medium text-gray-900">What the record should contain</h3>
              <p className="text-gray-700">The planned record covers package name and version, registry identity, artifact digest, publisher information, provenance, release changes, lifecycle scripts, native code, and other capability signals.</p>
            </div>
            <div className="py-6">
              <h3 className="mb-2 text-lg font-medium text-gray-900">What the record should not decide</h3>
              <p className="text-gray-700">Evidence describes what Tapid found. Policy applies your rules to that evidence and records whether the operation is allowed, needs review, or must stop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
