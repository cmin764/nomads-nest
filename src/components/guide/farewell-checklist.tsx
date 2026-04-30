"use client";

import { useState, useEffect } from "react";
import { farewellChecklistItems } from "@/data/guide-content";
import FadeIn from "@/components/fade-in";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "nomads-nest-farewell-checklist";

const checkableItems = farewellChecklistItems.filter((item) => !item.highlight);

function boldOnOff(text: string) {
  return text.split(/\b(on|off)\b/i).map((part, i) =>
    /^(on|off)$/i.test(part) ? <strong key={i}>{part}</strong> : part
  );
}

export default function FarewellChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() =>
    new Array(checkableItems.length).fill(false)
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

  // Map each item to its index in the checkable array (-1 for highlights)
  let checkableIdx = -1;
  const itemMeta = farewellChecklistItems.map((item) => {
    if (item.highlight) return { checkableIdx: -1 };
    checkableIdx++;
    return { checkableIdx };
  });

  const toggle = (idx: number) => {
    const next = checked.map((v, i) => (i === idx ? !v : v));
    setChecked(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const reset = () => {
    const empty = new Array(checkableItems.length).fill(false);
    setChecked(empty);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const doneCount = checked.filter(Boolean).length;
  const allDone = mounted && doneCount === checkableItems.length;

  return (
    <section id="farewell-checklist" className="scroll-mt-24 mb-12">
      <FadeIn>
        <h2 className="font-heading font-light text-[30px] text-foreground mb-2">
          <a
            href="#farewell-checklist"
            className="group inline-flex items-center gap-3 no-underline text-inherit hover:opacity-80 transition-opacity"
          >
            <span>Farewell Checklist</span>
            <span className="text-[22px]">👋</span>
            <span className="opacity-0 group-hover:opacity-40 text-[18px] text-gold transition-opacity select-none" aria-hidden>
              #
            </span>
          </a>
        </h2>

        <div>
          {farewellChecklistItems.map((item, i) => {
            const isLast = i === farewellChecklistItems.length - 1;

            if (item.highlight) {
              return (
                <div
                  key={i}
                  className={cn(
                    "flex gap-[14px] items-start pb-[14px] pl-[32px]",
                    !isLast && "border-b border-border"
                  )}
                >
                  <span className="shrink-0 mt-[3px] text-[12px] text-[var(--gold-dk)]" aria-hidden>⚠</span>
                  <span className="text-[14px] font-normal leading-[1.75] text-[var(--gold-dk)]">
                    {boldOnOff(item.text)}
                  </span>
                </div>
              );
            }

            const idx = itemMeta[i].checkableIdx;
            const isChecked = mounted && checked[idx];
            const nextIsHighlight = farewellChecklistItems[i + 1]?.highlight;

            return (
              <label
                key={i}
                className={cn(
                  "flex gap-[14px] items-start py-[14px] cursor-pointer group",
                  !isLast && !nextIsHighlight && "border-b border-border"
                )}
              >
                <span
                  className={cn(
                    "shrink-0 mt-[2px] flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 transition-all duration-150",
                    isChecked ? "border-gold bg-gold" : "border-divider bg-transparent"
                  )}
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
                  onChange={() => toggle(idx)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "text-[15px] font-light leading-[1.75] transition-colors duration-150",
                    isChecked ? "line-through text-nn-muted" : "text-nn-text"
                  )}
                >
                  {boldOnOff(item.text)}
                </span>
              </label>
            );
          })}
        </div>

        {allDone ? (
          <p className="mt-6 font-heading font-light italic text-[17px] text-[var(--gold-dk)]">
            Safe travels. Come back soon. ✦
          </p>
        ) : (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[13px] text-nn-muted">
              {mounted ? doneCount : 0} / {checkableItems.length} complete
            </p>
            <button
              onClick={reset}
              disabled={doneCount === 0}
              className="text-[12px] underline underline-offset-4 transition-opacity text-nn-muted disabled:opacity-30 disabled:cursor-default cursor-pointer"
            >
              Reset
            </button>
          </div>
        )}
      </FadeIn>
    </section>
  );
}
