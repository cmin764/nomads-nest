import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FadeIn from "@/components/fade-in";
import PhotoGrid from "@/components/gallery/photo-grid";
import RoomNav from "@/components/gallery/room-nav";
import { allRooms, roomOrder } from "@/data/gallery-content";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return roomOrder.map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const room = allRooms.find((r) => r.slug === category);
  if (!room) return {};
  return {
    title: `${room.name} — Gallery`,
    description: `Photos of the ${room.name} at Nomad's Nest, Ayia Napa.`,
  };
}

export default async function GalleryCategoryPage({ params }: Props) {
  const { category } = await params;
  const room = allRooms.find((r) => r.slug === category);
  if (!room) notFound();

  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20">

      {/* ── Header ── */}
      <FadeIn>
        <div className="text-center mb-14">
          <p
            className="font-heading italic font-light text-[15px] mb-3"
            style={{ color: "var(--muted-text)" }}
          >
            {room.emoji}&ensp;{room.tagline}
          </p>
          <h1
            className="font-heading font-light text-[clamp(36px,5vw,60px)] leading-[1.1] mb-6"
            style={{ color: "var(--text)" }}
          >
            {room.name}
          </h1>
          <div
            className="mx-auto"
            style={{ width: "44px", height: "1px", background: "var(--gold)" }}
          />
        </div>
      </FadeIn>

      {/* ── Photo grid + lightbox ── */}
      <FadeIn delay={0.1}>
        <PhotoGrid images={room.images} />
      </FadeIn>

      {/* ── Prev / Next nav ── */}
      <RoomNav currentSlug={room.slug} />
    </div>
  );
}
