"use client";

import { Car, Footprints, MapPin, Bus, CreditCard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PlaceImage from "@/components/landmarks/place-image";
import type { Landmark, Eatery, LandmarkCategory } from "@/data/landmarks-content";
import type { LocalRoute } from "@/data/transport-content";

interface LandmarksTabsProps {
  landmarks: Landmark[];
  eateries: Eatery[];
  gettingAroundRoutes: LocalRoute[];
  gettingAroundTitle: string;
  gettingAroundFooter: { label: string; url: string };
  closestStopName: string;
  gettingAroundTips: string[];
  smartCardTip: { text: string; label: string; url: string };
}

const categoryLabels: Record<LandmarkCategory, string> = {
  beach: "Beaches",
  sight: "Sights & Experiences",
  "day-trip": "Day Trips",
};

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
        {place.mapsUrl && (
          <Button variant="navy" size="sm" className="w-auto self-start" asChild>
            <a href={place.mapsUrl} target="_blank" rel="noopener noreferrer">
              Maps
              <MapPin size={13} className="ml-1.5" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

function EateryCard({ eatery }: { eatery: Eatery }) {
  return (
    <div className="rounded-2xl border border-divider bg-surface p-6 flex flex-col">
      <p className="text-[10px] uppercase tracking-[.16em] mb-2 text-gold">{eatery.cuisine}</p>
      <h3 className="font-heading font-light text-[19px] leading-[1.2] mb-2 text-nn-text">
        {eatery.name}
      </h3>
      <p className="text-[13px] font-light leading-[1.7] mb-4 text-nn-muted flex-1">
        {eatery.description}
      </p>
      {eatery.mapsUrl && (
        <Button variant="navy" size="sm" className="w-auto self-start" asChild>
          <a href={eatery.mapsUrl} target="_blank" rel="noopener noreferrer">
            Maps
            <MapPin size={13} className="ml-1.5" />
          </a>
        </Button>
      )}
    </div>
  );
}

export default function LandmarksTabs({
  landmarks,
  eateries,
  gettingAroundRoutes,
  gettingAroundTitle,
  gettingAroundFooter,
  closestStopName,
  gettingAroundTips,
  smartCardTip,
}: LandmarksTabsProps) {
  const groups: LandmarkCategory[] = ["beach", "sight", "day-trip"];
  const byDistance = (a: Landmark, b: Landmark) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity);

  return (
    <Tabs defaultValue="visit" className="w-full">
      <div className="flex justify-center mb-12">
        <TabsList className="nn-tab-list">
          <TabsTrigger value="visit" className="nn-tab">
            What to Visit
          </TabsTrigger>
          <TabsTrigger value="eat" className="nn-tab">
            Where to Eat
          </TabsTrigger>
          <TabsTrigger value="around" className="nn-tab">
            Getting Around
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="visit">
        <div className="space-y-16">
          {groups.map((category) => {
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
      </TabsContent>

      <TabsContent value="eat">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eateries.map((eatery) => (
            <EateryCard key={eatery.name} eatery={eatery} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="around">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-heading font-light text-[clamp(22px,2.5vw,28px)] mb-6 text-nn-text text-center">
            {gettingAroundTitle}
          </h2>
          <div className="rounded-2xl border border-divider bg-surface p-6 sm:p-8 mb-8">
            <ul className="space-y-3">
              {gettingAroundRoutes.map((route) => (
                <li key={route.number} className="flex items-start gap-3 text-[14px] font-light text-nn-muted">
                  <Bus size={15} className="text-gold mt-0.5 shrink-0" />
                  <span>
                    <span className="text-nn-text font-normal">{route.number}</span>: {route.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] font-light text-nn-muted">
              Closest stop: {closestStopName}. Full timetables at{" "}
              <a href={gettingAroundFooter.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                {gettingAroundFooter.label}
              </a>
              .
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl px-6 py-5 mb-8 border border-gold/30 bg-[var(--gold-lt)]">
            <CreditCard size={18} className="text-gold mt-0.5 shrink-0" />
            <p className="text-[13px] font-light leading-[1.7] text-nn-text">
              {smartCardTip.text}{" "}
              <a href={smartCardTip.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                {smartCardTip.label}
              </a>
              .
            </p>
          </div>

          <ul className="space-y-3">
            {gettingAroundTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-[13px] font-light leading-[1.7] text-nn-muted">
                <span className="text-gold mt-1">·</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
