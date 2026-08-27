import Link from "next/link";
import type { ReactNode } from "react";
import ArrowLink from "@/components/ui/ArrowLink";

const sections: Array<[string, ReactNode]> = [
  ["Evidence before trust", <>Package facts should appear before a trust decision. The planned record separates publisher context, provenance, release changes, and capability signals from the policy that acts on them. See <Link href="/docs/concepts/evidence-and-policy/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">evidence and policy</Link>.</>],
  ["Exact and reproducible artifacts", <>An install should refer to one package identity, version, registry, and artifact digest. That makes the requested release explicit and gives another person or system something concrete to verify. Read the planned <Link href="/docs/concepts/package-identity/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">package identity model</Link>.</>],
  ["Execution boundaries", <>Lifecycle scripts and one-shot commands need visible permissions and reviewable decisions. When unattended work lacks required evidence or approval, the intended behavior is to stop. The <Link href="/docs/guides/agent-safe-commands/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">agent-safe commands guide</Link> describes that planned boundary.</>],
  ["Registry boundaries", <>A registry is part of the trust decision. Private scopes should route explicitly, and credentials should stay within the registry they belong to. The planned rules and open questions are in <Link href="/docs/reference/registries-and-publishing/" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">registries and publishing</Link>.</>],
  ["Independent verification", <>Evidence should be inspectable outside the process that made the decision. Exact identities, digests, provenance, and policy reasons are intended to give teams enough context to review a result and reproduce it.</>],
  ["Current status", <>These are Tapid product principles and planned behavior. They are not proof that the client, resolver, verification store, or execution controls already exist. The <Link href="/roadmap" className="underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">roadmap</Link> separates current planning, planned implementation, and future direction.</>],
];

export default function SecurityPage() {
  return (
    <main>
      <section className="bg-neutral-950 py-24 text-white md:py-32">
        <div className="site-container max-w-4xl">
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-.06em] md:text-7xl">Make the decision legible before code runs.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">Tapid is designed for developers, CI systems, and autonomous agents that need to understand what a package will do and why an operation was allowed or blocked.</p>
        </div>
      </section>
      <section className="site-container py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xl leading-8 text-neutral-700">Security starts with a package decision, not with a badge. The model below follows the path from evidence about an artifact to the rule that determines whether an operation can continue.</p>
          <p className="mt-5 text-base leading-7 text-neutral-600">Read the sections in order when you want the complete model. Follow the linked documentation when you need the underlying concept or planned command behavior.</p>
        </div>
        <div className="mt-16 max-w-4xl space-y-12">
          {sections.map(([title, description]) => (
            <div key={title} className="md:grid md:grid-cols-[240px_1fr] md:gap-10">
              <h2 className="text-2xl font-semibold tracking-[-.035em]">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:mt-0">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16"><ArrowLink href="/docs/concepts/evidence-and-policy/">Read the evidence and policy model</ArrowLink></div>
      </section>
    </main>
  );
}
