"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Listing", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left: nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="text-foreground"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Center: logo */}
          <div className="flex justify-center">
            <Link href="/guide">
              <Image
                src="/images/logo-nn-gold-crop.webp"
                alt="Nomad's Nest"
                width={120}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end">
            <Button variant="gold" size="sm" asChild>
              <Link href="#">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-heading text-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Button variant="gold" asChild>
          <Link href="#" onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
        </Button>
      </div>
    </header>
  );
}
