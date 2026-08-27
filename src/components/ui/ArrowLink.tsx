import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  inverse?: boolean;
};

export default function ArrowLink({ href, children, external = false, inverse = false }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center gap-2 font-medium underline decoration-2 underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${inverse ? "text-lime-300 decoration-lime-700 hover:text-lime-200 hover:decoration-lime-400 focus-visible:outline-lime-300" : "text-lime-700 decoration-lime-300 hover:text-lime-900 hover:decoration-lime-600 focus-visible:outline-lime-700"}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
