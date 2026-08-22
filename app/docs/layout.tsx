import { DocsSidebar, MobileNavigation } from "@/components/docs/DocsNavigation";

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="site-container grid gap-12 py-10 md:grid-cols-[220px_minmax(0,680px)] md:gap-16 md:py-16 lg:grid-cols-[220px_minmax(0,720px)] lg:gap-20">
      <DocsSidebar />
      <div className="min-w-0">
        <div className="md:hidden"><MobileNavigation /></div>
        <article>{children}</article>
      </div>
    </main>
  );
}
