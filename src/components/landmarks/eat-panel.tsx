import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Eatery } from "@/data/landmarks-content";

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
      {eatery.note && (
        <p className="text-[12px] italic font-light leading-[1.5] mb-4 text-nn-muted">{eatery.note}</p>
      )}
      <Button variant="navy" size="sm" className="w-auto self-start" asChild>
        <a href={eatery.mapsUrl} target="_blank" rel="noopener noreferrer">
          Maps
          <MapPin size={13} className="ml-1.5" />
        </a>
      </Button>
    </div>
  );
}

export default function EatPanel({ eateries }: { eateries: Eatery[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {eateries.map((eatery) => (
        <EateryCard key={eatery.name} eatery={eatery} />
      ))}
    </div>
  );
}
