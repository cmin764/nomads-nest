import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import { landmarksIntro, landmarks, guidebookUrl } from "@/data/landmarks-content";

export const metadata: Metadata = {
  title: "Landmarks near Nomad's Nest",
  description:
    "Discover Cyprus: Bridge of Love, Sculpture Park, Salt Lake, Kykkos Monastery, Pano Lefkara, and Lofou Village.",
};

export default function LandmarksPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20">

      {/* ── Header ── */}
      <FadeIn>
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p
            className="text-[10px] uppercase tracking-[.20em] mb-6"
            style={{ color: "var(--gold)" }}
          >
            Ayia Napa, Cyprus
          </p>
          <h1
            className="font-heading font-light text-[clamp(36px,5vw,60px)] leading-[1.1] mb-3"
            style={{ color: "var(--text)" }}
          >
            Explore the Neighbourhood
          </h1>
          <p
            className="font-heading italic font-light text-[16px] mb-8 leading-[1.7]"
            style={{ color: "var(--muted-text)" }}
          >
            {landmarksIntro}
          </p>
          <GoldenDivider />
        </div>
      </FadeIn>

      {/* ── Landmark cards ── */}
      <div className="space-y-5 mb-20">
        {landmarks.map((landmark, i) => {
          const isEven = i % 2 === 0;
          return (
            <FadeIn key={landmark.name} delay={i * 0.06}>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden border"
                style={{ borderColor: "var(--divider)", background: "var(--surface)" }}
              >
                {/* Image — alternates left/right on desktop */}
                <div
                  className={`relative aspect-[4/3] sm:aspect-auto sm:min-h-[280px] overflow-hidden${isEven ? " sm:order-1" : " sm:order-2"}`}
                  style={{ background: "var(--surface-alt)" }}
                >
                  <Image
                    src={landmark.image.src}
                    alt={landmark.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    {...(i === 0 && { priority: true })}
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col justify-center px-8 py-8${isEven ? " sm:order-2" : " sm:order-1"}`}
                >
                  <h2
                    className="font-heading font-light text-[clamp(22px,2.5vw,32px)] leading-[1.2] mb-4"
                    style={{ color: "var(--text)" }}
                  >
                    {landmark.name}
                  </h2>
                  <p
                    className="text-[14px] font-light leading-[1.8] mb-6"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {landmark.description}
                  </p>
                  <Button variant="gold" size="sm" className="w-auto self-start" asChild>
                    <a href={landmark.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Maps
                      <MapPin size={14} className="ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* ── Airbnb guidebook CTA ── */}
      <FadeIn>
        <div
          className="rounded-2xl px-8 py-12 text-center border"
          style={{ borderColor: "var(--divider)", background: "var(--surface-alt)" }}
        >
          <p
            className="font-heading font-light text-[clamp(22px,2.5vw,32px)] leading-[1.3] mb-3"
            style={{ color: "var(--text)" }}
          >
            Want more recommendations?
          </p>
          <p
            className="text-[14px] font-light leading-[1.8] mb-8 max-w-[480px] mx-auto"
            style={{ color: "var(--muted-text)" }}
          >
            Our Airbnb guidebook covers favourite restaurants, hidden spots, and practical tips curated from years of hosting in Ayia Napa.
          </p>
          <Button variant="gold" asChild>
            <Link href={guidebookUrl} target="_blank" rel="noopener noreferrer">
              Open Guidebook
              <ArrowUpRight size={14} className="ml-1.5" />
            </Link>
          </Button>
        </div>
      </FadeIn>

    </div>
  );
}
