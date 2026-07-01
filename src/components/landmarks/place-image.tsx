import Image from "next/image";

interface PlaceImageProps {
  image: { src: string; alt: string };
  priority?: boolean;
}

export default function PlaceImage({ image, priority }: PlaceImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
