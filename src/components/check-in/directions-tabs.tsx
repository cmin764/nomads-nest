"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import { useLightbox, LIGHTBOX_PLUGINS } from "@/hooks/use-lightbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StepCard from "@/components/check-in/step-card";
import TransportModal from "@/components/check-in/transport-modal";
import { byCar, byFoot, overviewStep } from "@/data/check-in-steps";

export default function DirectionsTabs() {
  const { open: lightboxOpen, setOpen: setLightboxOpen } = useLightbox();

  return (
    <>
      {/* Overview card — shared by both routes */}
      <div className="flex flex-col sm:flex-row gap-4 bg-card border border-border rounded-[14px] overflow-hidden mb-10">
        <button
          onClick={() => setLightboxOpen(true)}
          className="relative sm:w-56 sm:shrink-0 aspect-video sm:aspect-auto group cursor-zoom-in"
          aria-label="View overview map full size"
        >
          <Image
            src={overviewStep.image}
            alt={overviewStep.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 224px"
            priority
          />
          <span className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Maximize2 size={13} />
          </span>
        </button>
        <div className="flex items-start gap-4 p-[22px_24px]">
          <div>
            <h3 className="font-heading font-light text-[19px] text-foreground mb-[7px]">{overviewStep.heading}</h3>
            <p className="text-[13px] font-light text-muted-foreground leading-[1.7]">{overviewStep.description}</p>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: overviewStep.image }]}
        plugins={LIGHTBOX_PLUGINS}
      />

    <Tabs defaultValue="car" className="w-full">
      <div className="flex items-center mb-10">
        <TabsList className="nn-tab-list">
          <TabsTrigger value="car" className="nn-tab">By Car</TabsTrigger>
          <TabsTrigger value="foot" className="nn-tab">By Foot</TabsTrigger>
        </TabsList>
        <div className="ml-auto">
          <TransportModal />
        </div>
      </div>

      <TabsContent value="car">
        <div className="space-y-4">
          {byCar.map((step, i) => (
            <StepCard key={i} step={step} index={i} priority={i < 2} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="foot">
        <div className="space-y-4">
          {byFoot.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
    </>
  );
}
