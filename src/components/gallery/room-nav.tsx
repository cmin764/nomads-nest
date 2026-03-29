import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { roomOrder, allRooms } from "@/data/gallery-content";

export default function RoomNav({ currentSlug }: { currentSlug: string }) {
  const idx = roomOrder.indexOf(currentSlug as (typeof roomOrder)[number]);
  if (idx === -1) return null;

  const prevSlug = roomOrder[(idx - 1 + roomOrder.length) % roomOrder.length];
  const nextSlug = roomOrder[(idx + 1) % roomOrder.length];

  const prevRoom = allRooms.find((r) => r.slug === prevSlug);
  const nextRoom = allRooms.find((r) => r.slug === nextSlug);

  if (!prevRoom || !nextRoom) return null;

  return (
    <nav
      className="flex items-center justify-between pt-10 mt-10 border-t"
      style={{ borderColor: "var(--divider)" }}
    >
      <Link
        href={`/gallery/${prevSlug}`}
        className="flex items-center gap-2 text-[11px] uppercase tracking-[.14em] transition-colors hover:text-[var(--gold)] nn-link"
      >
        <ChevronLeft size={14} />
        {prevRoom.name}
      </Link>
      <Link
        href={`/gallery/${nextSlug}`}
        className="flex items-center gap-2 text-[11px] uppercase tracking-[.14em] transition-colors hover:text-[var(--gold)] nn-link"
      >
        {nextRoom.name}
        <ChevronRight size={14} />
      </Link>
    </nav>
  );
}
