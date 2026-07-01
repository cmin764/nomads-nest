import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import TabsShell from "@/components/landmarks/tabs-shell";
import VisitPanel from "@/components/landmarks/visit-panel";
import EatPanel from "@/components/landmarks/eat-panel";
import AroundPanel from "@/components/landmarks/around-panel";
import {
  landmarksIntro,
  landmarks,
  eateries,
  gettingAroundTips,
  smartCardTip,
  guidebookUrl,
} from "@/data/landmarks-content";
import {
  localRoutes as gettingAroundRoutes,
  localRoutesTitle as gettingAroundTitle,
  localRoutesFooter as gettingAroundFooter,
  closestStopName,
} from "@/data/transport-content";

export const metadata: Metadata = {
  title: "Landmarks near Nomad's Nest",
  description:
    "Discover Cyprus: beaches, sights, day trips, and where to eat around Ayia Napa, from Nissi Beach to Kykkos Monastery.",
};

export default function LandmarksPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20">

      {/* ── Header ── */}
      <FadeIn>
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[.20em] mb-6 text-gold">
            Ayia Napa, Cyprus
          </p>
          <h1 className="font-heading font-light text-[clamp(36px,5vw,60px)] leading-[1.1] mb-3 text-nn-text">
            Explore the Neighbourhood
          </h1>
          <p className="font-heading italic font-light text-[16px] mb-8 leading-[1.7] text-nn-muted">
            {landmarksIntro}
          </p>
          <GoldenDivider />
        </div>
      </FadeIn>

      {/* ── Tabs: What to Visit / Where to Eat / Getting Around ── */}
      <div className="mb-20">
        <TabsShell
          visit={<VisitPanel landmarks={landmarks} />}
          eat={<EatPanel eateries={eateries} />}
          around={
            <AroundPanel
              gettingAroundRoutes={gettingAroundRoutes}
              gettingAroundTitle={gettingAroundTitle}
              gettingAroundFooter={gettingAroundFooter}
              closestStopName={closestStopName}
              gettingAroundTips={gettingAroundTips}
              smartCardTip={smartCardTip}
            />
          }
        />
      </div>

      {/* ── Airbnb guidebook CTA ── */}
      <FadeIn>
        <div className="rounded-2xl px-8 py-12 text-center border border-divider bg-surface-alt">
          <p className="font-heading font-light text-[clamp(22px,2.5vw,32px)] leading-[1.3] mb-3 text-nn-text">
            Want more recommendations?
          </p>
          <p className="text-[14px] font-light leading-[1.8] mb-8 max-w-[480px] mx-auto text-nn-muted">
            Our Airbnb guidebook covers favourite restaurants, hidden spots, and practical tips curated from years of hosting in Ayia Napa.
          </p>
          <Button variant="gold" asChild>
            <a href={guidebookUrl} target="_blank" rel="noopener noreferrer">
              Open Guidebook
              <ArrowUpRight size={14} className="ml-1.5" />
            </a>
          </Button>
        </div>
      </FadeIn>

    </div>
  );
}
