"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

interface DiscountAccordionProps {
  airbnbMessageUrl: string;
}

export default function DiscountAccordion({ airbnbMessageUrl }: DiscountAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-b-2xl border-x border-b overflow-hidden"
      style={{ borderColor: "var(--divider)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="discount-panel"
        className="w-full flex items-center justify-between px-6 py-3 transition-colors duration-200 hover:bg-[var(--surface-alt)]"
        style={{ background: "var(--surface)" }}
      >
        <span className="text-[11px] font-light" style={{ color: "var(--muted-text)" }}>
          Having a discount code?
        </span>
        <ChevronDown
          size={14}
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            color: "var(--muted-text)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {open && (
        <div
          id="discount-panel"
          className="px-6 pb-4 pt-1 flex flex-col sm:flex-row sm:items-center gap-4 border-t"
          style={{ borderColor: "var(--divider)", background: "var(--surface)" }}
        >
          <p className="flex-1 text-[12px] font-light leading-relaxed" style={{ color: "var(--muted-text)" }}>
            Send an Airbnb inquiry with your travel dates, number of guests, and your code. I&apos;ll reply with a Special Offer at the discounted rate.
          </p>
          <a
            href={airbnbMessageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--gold)] flex-shrink-0"
          >
            Send inquiry
            <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </div>
  );
}
