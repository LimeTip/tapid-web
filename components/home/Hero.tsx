import Link from "next/link";
import { Button } from "@base-ui/react/button";

export default function Hero() {
  return (
    <section className="border-b border-gray-200 bg-[#fbfbfa] py-24 md:py-32">
      <div className="site-container">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Package management with evidence you can inspect
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Tapid is a package manager and registry ecosystem for JavaScript and TypeScript. See what will run, who published it, what changed, and why a decision was made.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-lg flex-col items-center justify-center gap-5 sm:flex-row">
            <Button render={<Link href="/docs" />} className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-gray-950 px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700 sm:w-auto">
              Read the documentation
            </Button>
            <Link href="https://github.com/LimeTip/tapid" target="_blank" rel="noreferrer" className="text-base font-semibold text-gray-900 transition-colors duration-200 hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700">
              View the project <span className="ml-1 text-lime-600">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
