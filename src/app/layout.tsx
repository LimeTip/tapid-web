import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { RootProvider } from "fumadocs-ui/provider/next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tapid.dev"),
  title: {
    default: "Tapid | The package manager that shows its work",
    template: "%s | Tapid",
  },
  description:
    "Tapid is a JavaScript and TypeScript package manager written in Rust, with an inspectable lockfile replay and execution path.",
  applicationName: "Tapid",
  authors: [{ name: "LimeTip" }],
  openGraph: {
    title: "Tapid | The package manager that shows its work",
    description:
      "A JavaScript and TypeScript package manager written in Rust, built around inspectable project behavior.",
    url: "https://tapid.dev",
    siteName: "Tapid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapid | The package manager that shows its work",
    description:
      "An inspectable JavaScript and TypeScript package manager written in Rust.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <RootProvider
          theme={{ enabled: true, defaultTheme: "dark", enableSystem: false }}
          search={{ enabled: true, preload: false, options: { type: "static", api: "/api/search" } }}
        >
          <Header />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
