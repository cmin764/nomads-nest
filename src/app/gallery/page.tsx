import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import { galleryIndexRooms, introQuote, gallerySpecialCards } from "@/data/gallery-content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore every room of Nomad's Nest: terrace, bedroom, bathroom, kitchen, living area, and entrance.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20">

      {/* ── Intro ── */}
      <FadeIn>
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="font-heading italic font-light text-[clamp(18px,2.5vw,24px)] leading-[1.7] mb-8 text-nn-muted">
            &ldquo;{introQuote}&rdquo;
          </p>
          <GoldenDivider />
        </div>
      </FadeIn>

      {/* ── Room grid (2-col × 4-row) ── */}
      <div className="grid grid-cols-2 gap-5">

        {/* Top 6: standard room cards */}
        {galleryIndexRooms.map((room, i) => (
          <FadeIn key={room.slug} delay={i * 0.07}>
            <Link
              href={`/gallery/${room.slug}`}
              className="group block rounded-2xl overflow-hidden border border-divider bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
                <Image
                  src={room.coverImage}
                  alt={room.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  {...(i < 4 && { priority: true })}
                />
              </div>
              <div className="px-5 py-4">
                <p className="font-heading italic font-light text-[17px] mb-1 text-nn-text">
                  {room.name}
                </p>
                <p className="text-[11px] font-normal text-nn-muted">
                  {room.images.length} {room.images.length === 1 ? "photo" : "photos"}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}

        {/* Row 4 left: Safety — special card */}
        <FadeIn delay={0.42}>
          <Link
            href={gallerySpecialCards[0].href}
            className="group block rounded-2xl overflow-hidden border border-divider bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden flex items-center justify-center bg-navy"
            >
              <Image
                src={gallerySpecialCards[0].image.src}
                alt={gallerySpecialCards[0].image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <ShieldCheck size={32} strokeWidth={1} className="text-gold" />
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="font-heading italic font-light text-[17px] mb-1 text-nn-text">
                {gallerySpecialCards[0].name}
              </p>
              <p className="text-[11px] font-normal text-nn-muted">
                {gallerySpecialCards[0].tagline}
              </p>
            </div>
          </Link>
        </FadeIn>

        {/* Row 4 right: Landmarks — special card */}
        <FadeIn delay={0.49}>
          <Link
            href={gallerySpecialCards[1].href}
            className="group block rounded-2xl overflow-hidden border border-divider bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
              <Image
                src={gallerySpecialCards[1].image.src}
                alt={gallerySpecialCards[1].image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5">
                <MapPin size={12} className="text-gold" />
                <span className="text-[10px] uppercase tracking-[.14em] text-white/80">Explore</span>
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="font-heading italic font-light text-[17px] mb-1 text-nn-text">
                {gallerySpecialCards[1].name}
              </p>
              <p className="text-[11px] font-normal text-nn-muted">
                {gallerySpecialCards[1].tagline}
              </p>
            </div>
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}
