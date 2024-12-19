import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { siteConfig } from "./page";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://haroldo.dev"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  keywords: [
    "haroldo gondim",
    "haroldo gondim dev",
    "haroldo gondim developer",
    "haroldo gondim habbo",
    "haroldinho habbo",
    "slent habbo",
    "haroldo gondim projects",
    "haroldo gondim projetos",
    "haroldo gondim portfolio",
    "haroldo gondim portifolio",
    "haroldo gondim developer",
    "haroldo gondim desenvolvedor",
    "haroldo gondim idhabbo",
    "haroldo gondim habboz",
    "haroldo gondim tropihabbo",
    "haroldo gondim ksrp",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "website",
  ],
  authors: [
    {
      name: "Haroldo Gondim",
      url: "https://github.com/haroldogondim",
    },
  ],
  creator: "Haroldo Gondim",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@ixlent",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative min-h-screen antialiased text-white font-sans overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
