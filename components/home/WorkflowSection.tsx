"use client";

import { Accordion } from "@base-ui/react/accordion";
import Link from "next/link";

const questions = [
  ["How does Tapid resolve the package?", "It first identifies the requested package, version, registry, and artifact digest. The operation should have one exact target before installation or execution begins."],
  ["What should I inspect before install?", "Review publisher context, provenance, release changes, lifecycle scripts, native code, and other capability signals. The planned install flow is described in the install and execute guide."],
  ["How does policy use that evidence?", "Policy evaluates the resolved identity and available evidence. Tapid should show whether the result is an allow, warning, prompt, or denial, along with the reason."],
  ["When can installation or execution continue?", "The operation follows the recorded policy decision. Unattended work should stop when required evidence or approval is missing, rather than silently changing the package or its permissions."],
];

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-150 group-data-panel-open:rotate-45">
      <path d="M9 3.5V14.5M3.5 9H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function WorkflowSection() {
  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="site-container">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Understand a package before it runs</h2>
          <p className="mt-8 text-xl leading-relaxed text-gray-600 md:text-2xl">The intended flow is resolve, inspect, apply policy, then install or execute. <Link href="/docs/guides/install-and-execute/" className="text-gray-900 underline decoration-lime-500 decoration-2 underline-offset-4 hover:text-lime-700">Read the planned flow in the docs.</Link></p>
        </div>
        <Accordion.Root className="w-full border-y border-gray-200">
          {questions.map(([question, answer]) => (
            <Accordion.Item key={question} className="border-b border-gray-200 last:border-b-0">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 bg-transparent py-6 text-left text-lg font-medium text-gray-900 transition-colors hover:text-lime-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-600">
                  {question}
                  <PlusIcon />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base leading-relaxed text-gray-600 transition-[height] duration-150 ease-out data-ending-style:h-0 data-starting-style:h-0">
                <p className="max-w-3xl pb-6 pr-10">{answer}</p>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
