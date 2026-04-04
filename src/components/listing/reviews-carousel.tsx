"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Review } from "@/data/listing-content";

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => emblaApi?.scrollNext(), 5500);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    startAutoplay();
    return () => {
      emblaApi.off("select", onSelect);
      stopAutoplay();
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  }, [scrollPrev, scrollNext]);

  return (
    <div
      role="region"
      aria-label="Reviews"
      className="relative outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="flex-[0_0_100%] flex flex-col items-center text-center px-4 py-8 sm:px-16"
            >
              <span
                className="font-heading text-[96px] leading-none select-none mb-2 text-gold"
                style={{ opacity: 0.2 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="font-heading italic font-light text-[clamp(16px,2vw,22px)] leading-[1.7] max-w-[640px] mb-8 text-nn-text"
              >
                {review.quote}
              </p>
              <p
                className="text-[11px] font-normal uppercase tracking-[.16em] text-nn-muted"
              >
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={scrollPrev}
          aria-label="Previous review"
          className="w-10 h-10 rounded-full border border-divider text-nn-muted flex items-center justify-center transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "var(--gold)" : "var(--divider)",
              }}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next review"
          className="w-10 h-10 rounded-full border border-divider text-nn-muted flex items-center justify-center transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
