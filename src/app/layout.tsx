import type { Metadata, Viewport } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tapid.dev"),
  title: {
    default: "tapid | Install packages with evidence",
    template: "%s | tapid",
  },
  description:
    "tapid is an alpha JavaScript and TypeScript package manager that records exact package identity and requires registry-declared integrity by default before activation.",
  applicationName: "tapid",
  authors: [{ name: "LimeTip" }],
  openGraph: {
    title: "tapid | Install packages with evidence",
    description:
      "A source-built alpha package manager for exact identity, integrity evidence, and inspectable lockfile replay.",
    url: "https://tapid.dev",
    siteName: "tapid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tapid | Install packages with evidence",
    description:
      "Exact package identity, integrity evidence, and inspectable lockfile replay for JavaScript and TypeScript projects.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f6f0",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
