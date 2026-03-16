import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import DirectionsTabs from "@/components/check-in/directions-tabs";

export const metadata: Metadata = {
  title: "Check-in Instructions",
};

const MAPS_URL = "https://maps.app.goo.gl/RJ2s8CroHHJgRpft6";

export default function CheckInPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-card border-b border-border py-16 px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-4">
          Check-in Instructions
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find us on{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Google Maps
          </a>
          : &ldquo;Nomad&apos;s Nest - Apartment for rent&rdquo;
        </p>
        <div className="mt-6 mx-auto w-16 h-0.5 bg-primary" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <DirectionsTabs />
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4 text-center">
          <p className="text-muted-foreground text-sm">
            Now that you checked in successfully, make sure you throw an eye over our home guide.
          </p>
          <Button variant="gold" asChild>
            <Link href="/guide">
              <BookOpen size={16} />
              View Guest Guide
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
