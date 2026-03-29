import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";
import SectionLabel from "@/components/ui/section-label";
import ReviewsCarousel from "@/components/listing/reviews-carousel";
import {
  heroImage,
  stats,
  propertyIntro,
  galleryStrip,
  fullWidthImage,
  ctaImage,
  amenities,
  reviews,
} from "@/data/listing-content";

export const metadata: Metadata = {
  title: "The Space",
  description:
    "48 sqm apartment with terrace, dedicated workspace, and fibre internet in Ayia Napa, Cyprus.",
};

export default function ListingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full" style={{ minHeight: "60vh" }}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div className="absolute inset-0 flex items-end justify-end">
          <div className="px-8 pb-16 sm:px-16 sm:pb-20 text-right max-w-[480px]">
            <h1
              className="font-heading font-light text-[clamp(36px,5vw,64px)] leading-[1.1]"
              style={{ color: "#EDE8DC" }}
            >
              Island Charm<br />
              Modern Comfort<br />
              Work, Rest, Explore
            </h1>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-10 border-b" style={{ borderColor: "var(--divider)" }}>
        <FadeIn>
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              {stats.map((stat, i) => (
                <span key={stat} className="flex items-center gap-6">
                  <span
                    className="text-[13px] font-light tracking-[.04em]"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {stat}
                  </span>
                  {i < stats.length - 1 && (
                    <span style={{ color: "var(--divider)" }}>–</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Property intro ── */}
      <section className="py-20 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-[680px] mx-auto text-center">
            <p
              className="font-heading italic font-light text-[18px] mb-5"
              style={{ color: "var(--gold)" }}
            >
              📌 {propertyIntro.address}
            </p>
            <p
              className="text-[16px] font-light leading-[1.85]"
              style={{ color: "var(--muted-text)" }}
            >
              {propertyIntro.description}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Image gallery strip ── */}
      <section className="pb-16 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryStrip.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
                style={{ background: "var(--surface-alt)" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Full-width image ── */}
      <section className="pb-20 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: "21/9" }}
          >
            <Image
              src={fullWidthImage.src}
              alt={fullWidthImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* ── Amenities ── */}
      <section className="py-20 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <SectionLabel>Amenities</SectionLabel>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((card, i) => (
            <FadeIn key={card.slug} delay={i * 0.08}>
              <div
                className="flex flex-col p-8 rounded-2xl border h-full text-left"
                style={{ background: "var(--surface)", borderColor: "var(--divider)" }}
              >
                <h3
                  className="font-heading italic font-light text-[22px] mb-5"
                  style={{ color: "var(--text)" }}
                >
                  {card.room}
                </h3>
                <ul className="flex-1 space-y-2 mb-8">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] font-light"
                      style={{ color: "var(--muted-text)" }}
                    >
                      <span style={{ color: "var(--gold)" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="navy" size="sm" asChild>
                  <Link href={card.galleryLink}>View Gallery</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── "Interested?" CTA ── */}
      <section
        className="relative flex items-center justify-center text-center px-4"
        style={{ minHeight: "50vh", background: "var(--navy)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={ctaImage.src}
            alt={ctaImage.alt}
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
        </div>
        <FadeIn>
          <div className="relative z-10 max-w-[560px] mx-auto py-20">
            <h2
              className="font-heading font-light text-[clamp(32px,4vw,52px)] leading-[1.2] mb-6"
              style={{ color: "#EDE8DC" }}
            >
              Interested?
            </h2>
            <Button variant="gold" size="default" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* ── Reviews ── */}
      <section className="py-24 mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <SectionLabel>What Guests Say</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ReviewsCarousel reviews={reviews} />
        </FadeIn>
      </section>
    </>
  );
}
