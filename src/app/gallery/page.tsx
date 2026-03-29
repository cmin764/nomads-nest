import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import { galleryIndexRooms, introQuote } from "@/data/gallery-content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore every room of Nomad's Nest — entrance, bedroom, bathroom, kitchen, living area, and terrace.",
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

      {/* ── Room grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
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
      </div>
    </div>
  );
}
