import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tapid.dev"),
  title: {
    default: "Tapid | Package management with evidence",
    template: "%s | Tapid",
  },
  description:
    "Tapid is a package manager and registry ecosystem for JavaScript and TypeScript, built around reproducible installs, explicit trust evidence, and safer execution.",
  applicationName: "Tapid",
  authors: [{ name: "LimeTip" }],
  openGraph: {
    title: "Tapid | Package management with evidence",
    description:
      "See what will run, who published it, what changed, and why Tapid made its policy decision.",
    url: "https://tapid.dev",
    siteName: "Tapid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapid | Package management with evidence",
    description:
      "A safer and more explainable package manager and registry for JavaScript and TypeScript.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
