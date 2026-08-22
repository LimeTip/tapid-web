import Link from "next/link";

export default function DirectionSection() {
  return (
    <section className="bg-white/80 py-24 md:py-32">
      <div className="site-container">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">Adopt npm projects first. Build a native ecosystem later.</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">The first client should work with existing npm packages and familiar project layouts. That gives developers a way to resolve, inspect, and run current JavaScript and TypeScript projects while Tapid’s implementation is still being built.</p>
            <p className="text-lg leading-relaxed text-gray-700">A later direction is a Tapid-native ecosystem with explicit identities, immutable artifacts, trusted publishing, verification, and private registries. Those pieces depend on the boundaries and command behavior described in the <Link href="/docs/guides/agent-safe-commands/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">agent-safe commands guide</Link> and <Link href="/docs/reference/registries-and-publishing/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">registry reference</Link>.</p>
            <Link href="/roadmap" className="inline-flex font-medium text-lime-600 hover:underline">Read the roadmap →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
