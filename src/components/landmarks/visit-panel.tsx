import { Car, Footprints, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlaceImage from "@/components/landmarks/place-image";
import type { Landmark, LandmarkCategory } from "@/data/landmarks-content";

const categoryLabels: Record<LandmarkCategory, string> = {
  beach: "Beaches",
  sight: "Sights & Experiences",
  "day-trip": "Day Trips",
};

const categoryOrder: LandmarkCategory[] = ["beach", "sight", "day-trip"];

const byDistance = (a: Landmark, b: Landmark) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity);

function LandmarkCard({ place, priority }: { place: Landmark; priority?: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-divider bg-surface flex flex-col">
      <PlaceImage image={place.image} priority={priority} />
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-heading font-light text-[19px] leading-[1.2] mb-2 text-nn-text">
          {place.name}
        </h3>
        <p className="text-[13px] font-light leading-[1.7] mb-4 text-nn-muted flex-1">
          {place.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4 text-[12px] font-light text-nn-muted">
          {place.byCar && (
            <span className="flex items-center gap-1.5">
              <Car size={13} className="text-gold" />
              {place.byCar}
            </span>
          )}
          {place.onFoot && (
            <span className="flex items-center gap-1.5">
              <Footprints size={13} className="text-gold" />
              {place.onFoot}
            </span>
          )}
        </div>
        <Button variant="navy" size="sm" className="w-auto self-start" asChild>
          <a href={place.mapsUrl} target="_blank" rel="noopener noreferrer">
            Maps
            <MapPin size={13} className="ml-1.5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default function VisitPanel({ landmarks }: { landmarks: Landmark[] }) {
  return (
    <div className="space-y-16">
      {categoryOrder.map((category) => {
        const places = landmarks.filter((p) => p.category === category).sort(byDistance);
        return (
          <div key={category}>
            <h2 className="font-heading font-light text-[clamp(22px,2.5vw,28px)] mb-6 text-nn-text">
              {categoryLabels[category]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place, i) => (
                <LandmarkCard key={place.name} place={place} priority={category === "beach" && i === 0} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
