import Image from "next/image";
import Link from "next/link";
import mark from "@/brand/tapid-mark.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#e9e9e7] bg-[#f7f7f5]">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <Image src={mark} alt="" width={32} height={32} className="h-8 w-8" />
            <span className="font-semibold tracking-[-0.04em]">tapid</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-600">
            Package management with evidence you can inspect. Tapid is developed and maintained by LimeTip.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-600">
          <Link href="/docs" className="hover:text-lime-700">Documentation</Link>
          <Link href="/security" className="hover:text-lime-700">Security</Link>
          <Link href="https://limetip.com/privacy" target="_blank" rel="noreferrer" className="hover:text-lime-700">Privacy</Link>
          <Link href="https://limetip.com/terms" target="_blank" rel="noreferrer" className="hover:text-lime-700">Terms</Link>
          <Link href="https://limetip.com/contact" target="_blank" rel="noreferrer" className="hover:text-lime-700">Contact LimeTip</Link>
        </div>
      </div>
      <div className="site-container border-t border-[#e9e9e7] py-5 text-xs text-neutral-500">
        © {new Date().getFullYear()} LimeTip. Tapid is a LimeTip product.
      </div>
    </footer>
  );
}
