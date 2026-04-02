import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import { galleryIndexRooms, introQuote } from "@/data/gallery-content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore every room of Nomad's Nest — terrace, bedroom, bathroom, kitchen, living area, and entrance.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20">

      {/* ── Intro ── */}
      <FadeIn>
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p
            className="font-heading italic font-light text-[clamp(18px,2.5vw,24px)] leading-[1.7] mb-8"
            style={{ color: "var(--muted-text)" }}
          >
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
              className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: "var(--divider)", background: "var(--surface)" }}
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ background: "var(--surface-alt)" }}
              >
                <Image
                  src={room.coverImage}
                  alt={room.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  {...(i < 2 && { priority: true })}
                />
              </div>
              <div className="px-5 py-4">
                <p
                  className="font-heading italic font-light text-[17px] mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {room.name}
                </p>
                <p
                  className="text-[11px] font-normal"
                  style={{ color: "var(--muted-text)" }}
                >
                  {room.images.length} {room.images.length === 1 ? "photo" : "photos"}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}

        {/* Row 4 left: Safety — special card */}
        <FadeIn delay={0.42}>
          <Link
            href="/safety"
            className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ borderColor: "var(--divider)", background: "var(--surface)" }}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden flex items-center justify-center"
              style={{ background: "var(--navy)" }}
            >
              <Image
                src="/images/gallery/safety/CMN01759.JPG"
                alt="Safety measures"
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <ShieldCheck size={32} strokeWidth={1} style={{ color: "var(--gold)" }} />
              </div>
            </div>
            <div className="px-5 py-4">
              <p
                className="font-heading italic font-light text-[17px] mb-1"
                style={{ color: "var(--text)" }}
              >
                Safety
              </p>
              <p
                className="text-[11px] font-normal"
                style={{ color: "var(--muted-text)" }}
              >
                Your peace of mind
              </p>
            </div>
          </Link>
        </FadeIn>

        {/* Row 4 right: Landmarks — special card */}
        <FadeIn delay={0.49}>
          <Link
            href="/landmarks"
            className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ borderColor: "var(--divider)", background: "var(--surface)" }}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{ background: "var(--surface-alt)" }}
            >
              <Image
                src="/images/gallery/landmarks/DJI_0667.JPG"
                alt="Nissi Beach aerial view"
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5">
                <MapPin size={12} style={{ color: "var(--gold)" }} />
                <span className="text-[10px] uppercase tracking-[.14em] text-white/80">Explore</span>
              </div>
            </div>
            <div className="px-5 py-4">
              <p
                className="font-heading italic font-light text-[17px] mb-1"
                style={{ color: "var(--text)" }}
              >
                Landmarks
              </p>
              <p
                className="text-[11px] font-normal"
                style={{ color: "var(--muted-text)" }}
              >
                Discover the neighbourhood
              </p>
            </div>
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}
