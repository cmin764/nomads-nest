"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface Photo {
  src: string;
  alt: string;
}

export default function PhotoGrid({ images }: { images: Photo[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({ src: img.src }));
  // Only apply hero sizing when there are enough photos for it to make sense
  const hasHero = images.length >= 3;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => {
          const isHero = hasHero && i === 0;
          // Side panels (i=1,2) fill their grid row height set by the hero, so no fixed aspect ratio at sm+.
          const isSidePanel = hasHero && (i === 1 || i === 2);
          return (
            <button
              key={img.src}
              onClick={() => { setIndex(i); setOpen(true); }}
              className={cn(
                "relative overflow-hidden rounded-xl cursor-pointer group",
                isHero ? "aspect-video col-span-2 sm:col-span-2 sm:row-span-2" : isSidePanel ? "aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]",
              )}
              style={{ background: "var(--surface-alt)" }}
              aria-label={`Open photo ${i + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={isHero ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Fullscreen, Zoom]}
      />
    </>
  );
}
