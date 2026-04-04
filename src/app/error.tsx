"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import GoldenDivider from "@/components/ui/golden-divider";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-[680px] px-4 sm:px-6 lg:px-8 py-32 text-center">
      <p className="text-[10px] uppercase tracking-[.20em] mb-6 text-gold">
        Error
      </p>

      <h1 className="font-heading font-light text-[clamp(36px,5vw,56px)] leading-[1.1] mb-4 text-nn-text">
        Something went wrong.
      </h1>

      <p className="font-heading italic font-light text-[16px] leading-[1.7] mb-8 text-nn-muted">
        An unexpected error occurred. Try refreshing the page, or head back to
        the home page.
      </p>

      <GoldenDivider />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
        <Button variant="gold" onClick={reset}>
          Try Again
        </Button>
        <Button variant="navy" asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}
