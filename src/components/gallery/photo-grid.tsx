"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Lightbox from "yet-another-react-lightbox";
import { useLightbox, LIGHTBOX_PLUGINS } from "@/hooks/use-lightbox";

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function PhotoGrid({ images }: { images: Photo[] }) {
  const { open, setOpen } = useLightbox();
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = images.map((img) => ({ src: img.src }));
  const hasHero = images.length >= 3;
  const heroPhotos = hasHero ? images.slice(0, 3) : images;
  const restPhotos = hasHero ? images.slice(3) : [];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {heroPhotos.map((img, i) => (
          <button
            key={img.src}
            onClick={() => { setLightboxIndex(i); setOpen(true); }}
            className={cn(
              "relative overflow-hidden rounded-xl cursor-pointer group bg-surface-alt",
              i === 0
                ? "aspect-video col-span-2 sm:row-span-2"
                : "aspect-[4/3] sm:aspect-auto",
            )}
            aria-label={`Open photo ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              {...(i === 0 && { priority: true })}
            />
          </button>
        ))}
      </div>

      {restPhotos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
          {restPhotos.map((img, i) => (
            <button
              key={img.src}
              onClick={() => { setLightboxIndex(i + 3); setOpen(true); }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group bg-surface-alt"
              aria-label={`Open photo ${i + 4}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={LIGHTBOX_PLUGINS}
      />
    </>
  );
}
