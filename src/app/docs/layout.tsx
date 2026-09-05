import Image from "next/image";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import { source } from "@/lib/source";
import mark from "@/brand/tapid-mark.svg";
import "./docs.css";

export default function DocsRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootProvider
      theme={{ enabled: false, defaultTheme: "light", enableSystem: false }}
      search={{ enabled: true, preload: false, options: { type: "static", api: "/api/search" } }}
    >
      <div className="docs-route">
        <DocsLayout
          tree={source.getPageTree()}
          nav={{
            title: (
              <span className="docs-brand">
                <Image src={mark} alt="" width={24} height={24} />
                <span>tapid docs</span>
              </span>
            ),
            url: "/docs/",
          }}
          links={[
            { text: "Home", url: "/", active: "none" },
            { text: "Source", url: "https://github.com/LimeTip/tapid", external: true, active: "none" },
          ]}
          searchToggle={{ enabled: true }}
          themeSwitch={{ enabled: false }}
        >
          {children}
        </DocsLayout>
      </div>
    </RootProvider>
  );
}
