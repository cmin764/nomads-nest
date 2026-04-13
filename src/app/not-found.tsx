import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8 py-32 text-center">
      <FadeIn>
        <p className="text-[10px] uppercase tracking-[.20em] mb-6 text-gold">
          404
        </p>

        <h1 className="font-heading font-light text-[clamp(36px,5vw,56px)] leading-[1.1] mb-4 text-nn-text">
          Looks like you took a wrong turn.
        </h1>

        <p className="font-heading italic font-light text-[16px] leading-[1.7] mb-8 text-nn-muted">
          The page you&apos;re looking for isn&apos;t here. If you&apos;re a guest,
          the links below should get you where you need to go.
        </p>

        <GoldenDivider />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <Button variant="gold" asChild>
            <Link href="/check-in">Check-in</Link>
          </Button>
          <Button variant="navy" asChild>
            <Link href="/guide">House Guide</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
