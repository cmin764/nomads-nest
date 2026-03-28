import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nomad's Nest — Ayia Napa, Cyprus",
  description:
    "A thoughtfully designed apartment 10 minutes' walk from the city centre and 20 minutes' walk from the beach.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 pt-16 pb-20">

        {/* 3-image strip */}
        <div className="grid grid-cols-[1.7fr_1fr_1fr] gap-3 mb-14" style={{ height: "420px" }}>
          {/* Terrace — large left */}
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{ background: "var(--surface-alt)" }}
          >
            <Image
              src="/images/gallery/terrace/A-terrace-5.JPG"
              alt="Terrace with sea view"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Bedroom */}
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{ background: "var(--navy-lt)" }}
          >
            <Image
              src="/images/gallery/bedroom/B-bedroom-1.JPG"
              alt="Bedroom"
              fill
              className="object-cover"
            />
          </div>
          {/* Kitchen */}
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{ background: "var(--gold-lt)" }}
          >
            <Image
              src="/images/gallery/kitchen/D-kitchen-7.JPG"
              alt="Kitchen"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Headline block */}
        <div className="text-center max-w-[760px] mx-auto">
          <p
            className="text-[10px] uppercase tracking-[.20em] mb-6"
            style={{ color: "var(--muted-text)" }}
          >
            Ayia Napa, Cyprus
          </p>
          <h1
            className="font-heading italic font-light text-[clamp(48px,6vw,72px)] leading-[1.1] mb-6"
            style={{ color: "var(--text)" }}
          >
            Living well<br />in Ayia Napa.
          </h1>
          {/* Gold divider bar */}
          <div
            className="mx-auto mb-8"
            style={{ width: "44px", height: "1px", background: "var(--gold)" }}
          />
          <p
            className="text-[16px] font-light leading-[1.8] mb-10 max-w-[560px] mx-auto"
            style={{ color: "var(--muted-text)" }}
          >
            10 minutes&apos; walk from the city centre. 20 minutes&apos; walk from the beach.
            A space designed to let you relax, work, and explore at your own pace.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="gold" size="default" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button variant="navy" size="default" asChild>
              <Link href="/listing">About the Property</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Memory section ── */}
      <section
        className="relative flex items-center justify-center text-center px-4"
        style={{ minHeight: "60vh", background: "var(--navy)" }}
      >
        {/* Background image (with dark overlay) */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/gallery/terrace/A-terrace-4.JPG"
            alt="Terrace at dusk"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto py-24">
          <h2
            className="font-heading font-light text-[clamp(32px,4vw,48px)] leading-[1.2] mb-5"
            style={{ color: "#EDE8DC" }}
          >
            A place to make memories.
          </h2>
          <p
            className="text-[15px] font-light leading-[1.8] mb-10"
            style={{ color: "rgba(237,232,220,.7)" }}
          >
            Designed to make every stay feel like home.
          </p>
          <Button variant="gold" size="default" asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </section>

    </>
  );
}
