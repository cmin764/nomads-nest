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
  videoTourUrl,
} from "@/data/listing-content";

export const metadata: Metadata = {
  title: "The Space",
  description:
    "48 sqm apartment with terrace, dedicated workspace, and fiber optic internet in Ayia Napa, Cyprus.",
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
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
        {/* Full-height blur strip: transparent on left, frosted+dark on right */}
        <div
          className="absolute inset-y-0 right-0 w-[60%] sm:w-[52%]"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            background: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.22))",
            maskImage: "linear-gradient(to right, transparent 0%, black 45%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%)",
          }}
        />
        <div className="absolute inset-0 flex items-end justify-end">
          <div className="relative z-10 text-right mr-6 sm:mr-12 lg:mr-20 mb-12 sm:mb-16 lg:mb-20 max-w-[420px]">
            <h1 className="font-heading font-light text-[clamp(32px,4.5vw,56px)] leading-[1.15] text-cream">
              <em className="italic">Island Charm</em><br />
              <em className="italic">Modern Comfort</em>
            </h1>
            <p
              className="mt-3 text-[11px] sm:text-[13px] uppercase tracking-[.25em] font-normal"
              style={{ color: "color-mix(in srgb, var(--cream) 75%, transparent)" }}
            >
              Work, Rest, Explore
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-10 border-b border-divider">
        <FadeIn>
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              {stats.map((stat, i) => (
                <span key={stat} className="flex items-center gap-6">
                  <span className="text-[13px] font-light tracking-[.04em] text-nn-muted">
                    {stat}
                  </span>
                  {i < stats.length - 1 && (
                    <span className="text-divider">–</span>
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
            <h2 className="font-heading italic font-light text-[clamp(28px,4vw,42px)] leading-[1.2] mb-5 text-gold">
              {propertyIntro.title}
            </h2>
            <p className="text-[16px] font-light leading-[1.85] text-nn-muted">
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
                className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-alt"
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

      {/* ── Video ── */}
      <section className="pb-20 mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
            <iframe
              src={videoTourUrl}
              title="Nomad's Nest video tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
          <p className="mt-3 text-center text-[12px] italic font-light text-nn-muted">
            Klingande &ndash; Jubel
          </p>
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
                className="flex flex-col p-8 rounded-2xl border border-divider bg-surface h-full text-left"
              >
                <h3 className="font-heading italic font-light text-[22px] mb-5 text-nn-text">
                  {card.room}
                </h3>
                <ul className="flex-1 space-y-2 mb-8">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] font-light text-nn-muted">
                      <span className="text-gold">·</span>
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
        className="relative flex items-center justify-center text-center px-4 bg-navy"
        style={{ minHeight: "50vh" }}
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
            <h2 className="font-heading font-light text-[clamp(32px,4vw,52px)] leading-[1.2] mb-6 text-cream">
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
