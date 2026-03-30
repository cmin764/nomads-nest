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
  const allDone = mounted && doneCount === farewellChecklistItems.length;

  return (
    <section id="farewell-checklist" className="scroll-mt-24 mb-12">
      <FadeIn>
        <h2 className="font-heading font-light text-[30px] text-foreground mb-2 flex items-center gap-3">
          <span>Before you go.</span>
          <span className="text-[22px] italic" style={{ color: "var(--gold)" }}>✦</span>
        </h2>

        <div>
          {farewellChecklistItems.map((item, i) => {
            const isLast = i === farewellChecklistItems.length - 1;
            const isChecked = mounted && checked[i];
            return (
              <label
                key={i}
                className={cn(
                  "flex gap-[14px] items-start py-[14px] cursor-pointer group",
                  !isLast && "border-b border-border"
                )}
              >
                {/* Custom round gold checkbox */}
                <span
                  className="shrink-0 mt-[2px] flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 transition-all duration-150"
                  style={{
                    borderColor: isChecked ? "var(--gold)" : "var(--divider)",
                    background: isChecked ? "var(--gold)" : "transparent",
                  }}
                >
                  {isChecked && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="#F5F2EC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(i)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "text-[15px] font-light leading-[1.75] transition-colors duration-150",
                    isChecked ? "line-through" : ""
                  )}
                  style={{ color: isChecked ? "var(--muted-text)" : "var(--text)" }}
                >
                  {item}
                </span>
              </label>
            );
          })}
        </div>

        {allDone ? (
          <p
            className="mt-6 font-heading font-light italic text-[17px]"
            style={{ color: "var(--gold)" }}
          >
            Safe travels. Come back soon. ✦
          </p>
        ) : (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[13px]" style={{ color: "var(--muted-text)" }}>
              {mounted ? doneCount : 0} / {farewellChecklistItems.length} complete
            </p>
            <button
              onClick={reset}
              className="cursor-pointer text-[12px] underline underline-offset-4 transition-colors"
              style={{ color: "var(--muted-text)" }}
            >
              Reset
            </button>
          </div>
        )}
      </FadeIn>
    </section>
  );
}
