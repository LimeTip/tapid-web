import Image from "next/image";
import Link from "next/link";
import mark from "@/brand/tapid-mark.png";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <Image src={mark} alt="" width={32} height={32} className="h-8 w-8 brightness-0 invert" />
            <span className="font-semibold tracking-[-0.04em]">tapid</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-300">
            JavaScript and TypeScript package management, with the current client written in Rust. Tapid is developed and maintained by LimeTip.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
          <Link href="/docs" className="hover:text-lime-300">Documentation</Link>
          <Link href="/docs/concepts/evidence-and-policy/" className="hover:text-lime-300">Evidence and policy</Link>
          <Link href="https://limetip.com/privacy" target="_blank" rel="noreferrer" className="hover:text-lime-300">Privacy</Link>
          <Link href="https://limetip.com/terms" target="_blank" rel="noreferrer" className="hover:text-lime-300">Terms</Link>
          <Link href="https://limetip.com/contact" target="_blank" rel="noreferrer" className="hover:text-lime-300">Contact LimeTip</Link>
        </div>
      </div>
      <div className="site-container border-t border-neutral-800 py-5 text-xs text-neutral-400">
        © {new Date().getFullYear()} LimeTip. Tapid is a LimeTip product.
      </div>
    </footer>
  );
}
