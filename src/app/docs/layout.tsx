import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

export default function DocsRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{ title: "tapid", url: "/" }}
      searchToggle={{ enabled: true }}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  );
}
