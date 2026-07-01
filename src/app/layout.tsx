import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { Nav } from "@/components/nav/Nav";

export const metadata: Metadata = {
  title: "Uravi Patel",
  description:
    "Cybersecurity student. I build things — sometimes for security, sometimes for my community, sometimes just because.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line px-4 sm:px-8 py-8 max-w-5xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-body text-sm text-ink-soft">
            <p>Uravi Patel · Cybersecurity Student, SUNY Canton</p>
            <p>© 2026</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
