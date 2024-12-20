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
    "senior php developer",
    "php developer",
    "software developer",
    "software engineer",
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
    "haroldo gondim prohabbo",
    "haroldo gondim ksrp",
    "haroldo gondim hp",
    "haroldo gondim wipro",
    "haroldo gondim altsec",
    "portfolio",
    "web developer",
    "web developer php",
    "web dev",
    "web dev php",
    "developer",
    "programador php",
    "fullstack php",
    "php senior",
  ],
  authors: [
    {
      name: "Haroldo Gondim",
      url: "https://github.com/haroldogondim/portfolio",
    },
  ],
  creator: "Haroldo Gondim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
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
