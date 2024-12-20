"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-6 text-center">
        <p>Made with ❤️ by Haroldo</p>
      </footer>

      <GoogleAnalytics trackPageViews />
      <Analytics />
    </>
  );
}
