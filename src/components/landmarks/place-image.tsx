import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface PlaceImageProps {
  image?: { src: string; alt: string };
  priority?: boolean;
}

// ponytail: no photo file for new places yet, owner supplies them later
export default function PlaceImage({ image, priority }: PlaceImageProps) {
  if (!image) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt flex flex-col items-center justify-center gap-2">
        <ImageIcon size={22} className="text-nn-muted" strokeWidth={1.5} />
        <span className="text-[11px] font-light text-nn-muted">Photo coming soon</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        {...(priority && { priority: true })}
      />
    </div>
  );
}
