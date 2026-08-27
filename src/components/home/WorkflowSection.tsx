import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const trace = [
  ["request", "tapid install is-char", "planned", "The current parser rejects a positional package name."],
  ["project path", "tapid install --offline --frozen", "implemented", "Replays an existing lockfile and verified store."],
  ["activation", "managed node_modules", "implemented", "Project output is materialized after validation."],
  ["execution", "tapid run test -- --runInBand", "constrained", "Explicit root scripts run through the platform shell."],
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#141414] py-20 text-white md:py-24">
      <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <SectionHeading title="A command is only useful when you know what it guarantees.">
          <p>The current client is deliberately small. Its useful shape is easier to inspect when each operation is connected to a concrete result and a clearly stated limit.</p>
          <p className="mt-5"><Link href="/docs/getting-started/" className="font-medium text-lime-300 underline decoration-lime-700 decoration-2 underline-offset-4 hover:text-lime-200">Start with the working project path ↗</Link></p>
        </SectionHeading>
        <div className="border-t border-neutral-700">
          {trace.map(([label, command, status, detail]) => (
            <div key={label} className="grid gap-3 border-b border-neutral-700 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
              <div className="flex items-start gap-2 font-mono text-xs text-neutral-400">
                <span aria-hidden="true" className={`mt-1 h-2 w-2 shrink-0 ${status === "implemented" ? "bg-lime-300" : "bg-neutral-500"}`} />
                <span>{label}</span>
              </div>
              <div>
                <code className="block break-words text-sm text-neutral-100">{command}</code>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm leading-6">
                  <span className="font-mono text-xs text-neutral-400">{status}</span>
                  <span className="text-neutral-300">{detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
