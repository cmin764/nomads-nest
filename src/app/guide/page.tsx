import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { guideSections } from "@/data/guide-content";
import GuideSection from "@/components/guide/guide-section";
import FarewellChecklist from "@/components/guide/farewell-checklist";
import TableOfContents from "@/components/guide/table-of-contents";

export const metadata: Metadata = {
  title: "Guest Guide",
};

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-card border-b border-border py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-4">
          Welcome to Your <em className="italic text-primary">Ayia Napa</em> Getaway!
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to know for a comfortable, carefree stay at Nomad&apos;s Nest.
        </p>
        <div className="mt-6 mx-auto w-16 h-0.5 bg-primary" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar TOC */}
          <aside className="md:w-56 md:shrink-0">
            <div className="md:sticky md:top-24">
              <p className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground mb-3 px-3">
                Contents
              </p>
              <TableOfContents
                sections={guideSections}
                farewellId="farewell-checklist"
              />
            </div>
          </aside>

          {/* Main content */}
          <article className="flex-1 max-w-[900px]">
            {guideSections.map((section) => (
              <GuideSection key={section.id} section={section} />
            ))}
            <FarewellChecklist />
            <div className="mt-8 pt-8 border-t border-border flex justify-center">
              <Button variant="navy" asChild>
                <Link href="/check-in">
                  <MapPin size={16} />
                  Check-in Instructions
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
