import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <p className="font-heading text-lg text-primary mb-1">Nomad&apos;s Nest</p>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed">
              63 Tefkrou Anthia<br />
              Ayia Napa, Cyprus 5330
            </address>
            <a
              href="tel:+35797671058"
              className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              +357 97 671058
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Legal</p>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Data Protection
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground border-t border-border pt-6">
          © {new Date().getFullYear()} Nomad&apos;s Nest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
