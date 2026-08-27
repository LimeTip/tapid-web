"use client";

import { Accordion } from "@base-ui/react/accordion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const questions = [
  ["What is implemented today?", "The CLI can replay an existing lockfile offline or frozen, validate the project before activation, create managed node_modules, and run an explicit root script."],
  ["What does the fixture actually test?", "It checks installation, root-script execution, bin shims, argument forwarding, child exit codes, and suppression of dependency lifecycle scripts."],
  ["What is still planned?", "Online transitive resolution, complete npm compatibility, evidence-aware policy, publisher provenance, private registries, and agent integrations remain incomplete or future work."],
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#f7f7f5] py-20 md:py-24">
      <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <SectionHeading title="A command is only useful when you know what it guarantees.">
          <p>The current implementation is deliberately small. That makes its evidence easier to inspect and its limits easier to state.</p>
          <p className="mt-5"><Link href="/docs/getting-started/" className="font-medium text-neutral-900 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-neutral-500">Start with the working fixture ↗</Link></p>
        </SectionHeading>
        <div className="border-t border-neutral-300">
          <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-neutral-300 py-5">
            <span className="font-mono text-xs text-neutral-500">$</span>
            <code className="break-words text-sm text-neutral-900">tapid install is-char</code>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-neutral-300 py-5">
            <span className="font-mono text-xs text-neutral-500">→</span>
            <span className="text-sm leading-6 text-neutral-600">This is the package command developers should be able to use. The current CLI still rejects the positional package name, so this is marked as planned.</span>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-neutral-300 py-5">
            <span className="font-mono text-xs text-neutral-500">→</span>
            <span className="text-sm leading-6 text-neutral-600">The install engine already exists behind the current project and fixture path. Package resolution is the missing piece between this command and a real install.</span>
          </div>
          <Accordion.Root>
            {questions.map(([question, answer]) => (
              <Accordion.Item key={question} className="border-b border-neutral-300 last:border-b-0">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-semibold text-neutral-950 transition-colors hover:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700">
                    {question}
                    <span aria-hidden="true" className="font-mono text-lg font-normal text-neutral-400 transition-transform group-data-panel-open:rotate-45">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-sm leading-6 text-neutral-600 transition-[height] duration-150 data-ending-style:h-0 data-starting-style:h-0">
                  <p className="max-w-2xl pb-5">{answer}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
