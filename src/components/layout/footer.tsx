import Link from "next/link";
import { address, contactEmail, contactWhatsApp } from "@/data/contact-content";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gold">
      <div className="bg-surface text-nn-text transition-colors duration-[450ms]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Logo */}
          <p
            className="font-heading italic font-light leading-none tracking-[.04em] mb-10 text-nn-text"
            style={{ fontSize: "54px" }}
          >
            Nomad&apos;s Nest
          </p>

          <div className="flex flex-col md:flex-row md:justify-between gap-10">

            {/* Address + contact */}
            <div>
              <address className="not-italic text-sm leading-relaxed text-nn-muted">
                {address.street}<br />
                {address.city}, {address.country} {address.postcode}
              </address>
              <a href={contactWhatsApp.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm nn-link">
                {contactWhatsApp.display}
              </a>
              <br />
              <a href={`mailto:${contactEmail}`} className="mt-1 inline-block text-sm nn-link">
                {contactEmail}
              </a>
            </div>

            {/* Explore nav */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-[.16em] mb-1 text-nn-muted">
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
              <p className="text-[10px] uppercase tracking-[.16em] mb-1 text-nn-muted">
                Legal
              </p>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Data Protection", href: "/data-protection" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-sm nn-link">
                  {l.label}
                </Link>
              ))}
            </div>

          </div>

          <p className="mt-10 pt-6 text-xs nn-link border-t border-divider">
            © {new Date().getFullYear()}{" "}Nomad&apos;s Nest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
