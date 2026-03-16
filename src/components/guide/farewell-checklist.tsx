"use client";

import { useState, useEffect } from "react";
import { farewellChecklistItems } from "@/data/guide-content";
import FadeIn from "@/components/fade-in";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "nomads-nest-farewell-checklist";

export default function FarewellChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() =>
    new Array(farewellChecklistItems.length).fill(false)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const toggle = (i: number) => {
    const next = checked.map((v, idx) => (idx === i ? !v : v));
    setChecked(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const reset = () => {
    const empty = new Array(farewellChecklistItems.length).fill(false);
    setChecked(empty);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const doneCount = checked.filter(Boolean).length;

  return (
    <section id="farewell-checklist" className="scroll-mt-24 mb-12">
      <FadeIn>
        <h2 className="font-heading text-2xl text-foreground mb-5 flex items-center gap-3">
          <span>✅</span>
          <span>Farewell Checklist</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Before you leave, run through these quickly. Your progress is saved automatically.
        </p>

        <div className="space-y-3">
          {farewellChecklistItems.map((item, i) => (
            <label
              key={i}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                mounted && checked[i]
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card hover:border-primary/30"
              )}
            >
              <input
                type="checkbox"
                checked={mounted ? checked[i] : false}
                onChange={() => toggle(i)}
                className="accent-primary w-4 h-4 shrink-0"
              />
              <span
                className={cn(
                  "text-sm transition-colors",
                  mounted && checked[i]
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                )}
              >
                {item}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {mounted ? doneCount : 0} / {farewellChecklistItems.length} complete
          </p>
          <button
            onClick={reset}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Reset
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
