"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/photography", label: "Photography" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 w-full border-b border-line bg-cream/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-display text-lg text-ink hover:text-rust transition-colors"
        >
          UP
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full font-body text-sm transition-colors ${
                  active
                    ? "bg-ink text-cream"
                    : "text-ink-soft hover:text-ink hover:bg-cream-warm"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
