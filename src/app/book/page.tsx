import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/fade-in";
import BrandIcon from "@/components/ui/brand-icon";
import { pricingSeasons, platformLinks, fees, discounts, limits, contactEmail } from "@/data/book-content";

export const metadata: Metadata = {
  title: "Book",
  description: "Book your stay at Nomad's Nest on Airbnb, Booking.com, or HomeExchange.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

        {/* ── Left: pricing ── */}
        <FadeIn>
          <div>
            <h1
              className="font-heading font-light text-[clamp(44px,6vw,72px)] leading-[1.05] mb-12"
              style={{ color: "var(--text)" }}
            >
              Your Vacay<br />
              <em className="italic text-primary">Awaits</em>
            </h1>

            <p
              className="text-[10px] font-[400] uppercase tracking-[.20em] mb-6"
              style={{ color: "var(--gold)" }}
            >
              Reservation Request
            </p>

            {/* Pricing table */}
            <div
              className="rounded-2xl border overflow-hidden mb-8"
              style={{ borderColor: "var(--divider)" }}
            >
              {pricingSeasons.map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-6 py-4"
                  style={{
                    borderBottom: i < pricingSeasons.length - 1 ? "1px solid var(--divider)" : undefined,
                    background: i % 2 === 0 ? "var(--surface)" : "transparent",
                  }}
                >
                  <span
                    className="text-[13px] font-light"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="font-heading italic font-light text-[16px]"
                    style={{ color: row.closed ? "var(--muted-text)" : "var(--text)" }}
                  >
                    {row.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Fees — two chips */}
            <div className="flex gap-3 mb-5">
              {fees.map((fee) => (
                <div
                  key={fee.label}
                  className="flex-1 px-4 py-3 rounded-xl"
                  style={{ background: "var(--surface-alt)" }}
                >
                  <p className="text-[10px] uppercase tracking-[.14em] mb-1" style={{ color: "var(--muted-text)" }}>
                    {fee.label}
                  </p>
                  <p className="text-[13px] font-light" style={{ color: "var(--text)" }}>
                    {fee.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Discounts — gold percentages */}
            <div
              className="flex gap-3 mb-5 px-4 py-3 rounded-xl"
              style={{ background: "var(--surface-alt)" }}
            >
              {discounts.map((d, i) => (
                <div key={d.period} className={`flex-1 flex items-center gap-3 ${i > 0 ? "border-l pl-3" : ""}`} style={{ borderColor: "var(--divider)" }}>
                  <span className="text-[10px] uppercase tracking-[.14em] flex-1" style={{ color: "var(--muted-text)" }}>
                    {d.period}
                  </span>
                  <span className="font-heading italic text-[18px] font-light" style={{ color: "var(--gold)" }}>
                    −{d.pct}
                  </span>
                </div>
              ))}
            </div>

            {/* Limits — policy fine print */}
            <p
              className="font-heading italic font-light text-[13px] text-center tracking-[.03em]"
              style={{ color: "var(--muted-text)" }}
            >
              {limits.join(" · ")}
            </p>
          </div>
        </FadeIn>

        {/* ── Right: platforms ── */}
        <FadeIn delay={0.1}>
          <div>
            <p
              className="text-[10px] font-[400] uppercase tracking-[.20em] mb-8"
              style={{ color: "var(--muted-text)" }}
            >
              Book Directly On
            </p>

            <div className="space-y-4 mb-12">
              {platformLinks.map((platform) => (
                <a
                  key={platform.brand}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    borderColor: "var(--divider)",
                    background: "var(--surface)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--surface-alt)", color: "var(--text)" }}
                  >
                    <BrandIcon brand={platform.brand} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-heading italic font-light text-[18px] mb-0.5"
                      style={{ color: "var(--text)" }}
                    >
                      {platform.name}
                    </p>
                    <p
                      className="text-[11px] font-light truncate"
                      style={{ color: "var(--muted-text)" }}
                    >
                      {platform.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 transition-colors duration-300 group-hover:text-[var(--gold)]"
                    style={{ color: "var(--divider)" }}
                  />
                </a>
              ))}
            </div>

            <div
              className="pt-8 border-t"
              style={{ borderColor: "var(--divider)" }}
            >
              <p
                className="font-heading italic font-light text-[17px] mb-2"
                style={{ color: "var(--text)" }}
              >
                Have a question?
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-[13px] font-light transition-colors hover:text-[var(--gold)] nn-link"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
