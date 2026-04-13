"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "The Space", href: "/listing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

function ThemeIcon({ theme }: { theme: "system" | "light" | "dark" }) {
  if (theme === "light") return <Sun size={16} />;
  if (theme === "dark") return <Moon size={16} />;
  return <Monitor size={16} />;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, cycle } = useTheme();
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-surface"
      style={{ transition: "background 450ms ease, border-color 450ms ease" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-[72px]">

          {/* Left: nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-normal uppercase tracking-[.16em] nn-link transition-colors"
                  style={isActive ? { color: "var(--text)" } : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="text-nn-text"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Center: logo */}
          <div className="flex justify-center">
            <Link href="/" className="logo-link" aria-label="Nomad's Nest home">
              <Image
                src="/images/logo-nn-transparent.png"
                alt="Nomad's Nest"
                width={58}
                height={58}
                priority
                className="logo-img"
              />
            </Link>
          </div>

          {/* Right: theme toggle + Book Now */}
          <div className="hidden md:flex items-center gap-3 justify-end">
            <button
              onClick={cycle}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-transparent transition-[border-color,color] cursor-pointer text-[var(--muted-text)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              title={`Theme: ${theme}`}
            >
              <ThemeIcon theme={theme} />
            </button>
            <Button variant="gold" size="sm" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile: theme toggle only (Book Now is in overlay) */}
          <div className="flex md:hidden items-center justify-end gap-2">
            <button
              onClick={cycle}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-transparent transition-[border-color,color] cursor-pointer text-[var(--muted-text)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--bg)" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-heading italic text-2xl font-light transition-colors text-nn-text"
          >
            {link.label}
          </Link>
        ))}
        <div
          className="w-11 h-px my-2 bg-divider"
        />
        <Button variant="gold" asChild>
          <Link href="/book" onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
        </Button>
      </div>
    </header>
  );
}
