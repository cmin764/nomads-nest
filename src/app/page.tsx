import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GoldenDivider from "@/components/ui/golden-divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nomad's Nest: Ayia Napa, Cyprus",
  description:
    "A thoughtfully designed apartment 10 minutes' walk from the city centre and 20 minutes' walk from the beach.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 pt-16 pb-20">

        {/* 3-image collage
            Mobile:  2-col × 2-row grid — terrace + bedroom stacked left, kitchen tall right
            Desktop: 3-col × 1-row strip — terrace (large) · bedroom · kitchen */}
        <div className="grid gap-3 mb-14
          grid-cols-2 grid-rows-2 h-[360px]
          sm:grid-cols-[1.7fr_1fr_1fr] sm:grid-rows-1 sm:h-[420px]">
          {/* Terrace — top-left on mobile, large left on desktop */}
          <div
            className="relative rounded-[10px] overflow-hidden
              col-start-1 row-start-1"
            style={{ background: "var(--surface-alt)" }}
          >
            <Image
              src="/images/gallery/terrace/A-terrace-1.JPG"
              alt="Terrace with dining table and palm tree"
              fill
              sizes="(min-width: 640px) 50vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Bedroom — bottom-left on mobile, centre on desktop */}
          <div
            className="relative rounded-[10px] overflow-hidden
              col-start-1 row-start-2
              sm:col-start-2 sm:row-start-1 sm:row-span-1"
            style={{ background: "var(--navy-lt)" }}
          >
            <Image
              src="/images/gallery/bedroom/B-bedroom-1.JPG"
              alt="Cozy minimalistic luminous bedroom"
              fill
              sizes="(min-width: 640px) 30vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {/* Work — full-height right column on mobile, right on desktop */}
          <div
            className="relative rounded-[10px] overflow-hidden
              col-start-2 row-start-1 row-span-2
              sm:col-start-3 sm:row-span-1"
            style={{ background: "var(--gold-lt)" }}
          >
            <Image
              src="/images/gallery/bedroom/CMN01457.JPG"
              alt="Remote work ready from adjustable desk"
              fill
              sizes="(min-width: 640px) 30vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Headline block */}
        <div className="text-center max-w-[760px] mx-auto">
          <p
            className="text-[10px] uppercase tracking-[.20em] mb-6"
            style={{ color: "var(--muted-text)" }}
          >
            Famagusta, Cyprus
          </p>
          <h1
            className="font-heading italic font-light text-[clamp(48px,6vw,72px)] leading-[1.1] mb-6"
            style={{ color: "var(--text)" }}
          >
            Living well<br />in <em className="italic text-primary">Ayia Napa</em>
          </h1>
          <div className="mb-8">
            <GoldenDivider />
          </div>
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
            alt="Relaxing on the outside terrace in the afternoon"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto py-24">
          <h2
            className="font-heading font-light text-[clamp(32px,4vw,48px)] leading-[1.2] mb-5"
            style={{ color: "var(--cream)" }}
          >
            A place to make memories
          </h2>
          <p
            className="text-[15px] font-light leading-[1.8]"
            style={{ color: "color-mix(in srgb, var(--cream) 70%, transparent)" }}
          >
            Designed to make every stay feel like home
          </p>
        </div>
      </section>

    </>
  );
}
