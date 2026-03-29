import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-20"
      style={{ borderTop: "1px solid var(--gold)" }}
    >
      <div
        className="transition-colors duration-[450ms]"
        style={{ background: "var(--surface)", color: "var(--text)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Logo */}
          <p
            className="font-heading italic font-light leading-none tracking-[.04em] mb-10"
            style={{ fontSize: "54px", color: "var(--text)" }}
          >
            Nomad&apos;s Nest
          </p>

          <div className="flex flex-col md:flex-row md:justify-between gap-10">

            {/* Address + contact */}
            <div>
              <address
                className="not-italic text-sm leading-relaxed"
                style={{ color: "var(--muted-text)" }}
              >
                63 Tefkrou Anthia<br />
                Ayia Napa, Cyprus 5330
              </address>
              <a href="tel:+35797671058" className="mt-3 inline-block text-sm nn-link">
                +357 97 671058
              </a>
              <br />
              <a href="mailto:book@nomadsnest.live" className="mt-1 inline-block text-sm nn-link">
                book@nomadsnest.live
              </a>
            </div>

            {/* Explore nav */}
            <div className="flex flex-col gap-2">
              <p
                className="text-[10px] uppercase tracking-[.16em] mb-1"
                style={{ color: "var(--muted-text)" }}
              >
                Explore
              </p>
              {[
                { label: "The Space", href: "/listing" },
                { label: "Gallery", href: "/gallery" },
                { label: "Book", href: "/book" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-sm nn-link">
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2">
              <p
                className="text-[10px] uppercase tracking-[.16em] mb-1"
                style={{ color: "var(--muted-text)" }}
              >
                Legal
              </p>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Data Protection", href: "/data-protection" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-sm nn-link">
                  {l.label}
                </Link>
              ))}
            </div>

          </div>

          <p
            className="mt-10 pt-6 text-xs nn-link"
            style={{ borderTop: "1px solid var(--divider)" }}
          >
            © {new Date().getFullYear()}{" "}Nomad&apos;s Nest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
