"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GuideSection } from "@/data/guide-content";

// Must match the sticky header height and the scroll-mt-24 (6rem) on section elements.
const HEADER_OFFSET = 96;

interface TableOfContentsProps {
  sections: GuideSection[];
  farewellId: string;
}

export default function TableOfContents({ sections, farewellId }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const allIds = [...sections.map((s) => s.id), farewellId];
    const visible = new Set<string>();
    const headingToId = new Map<Element, string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = headingToId.get(entry.target);
          if (!id) continue;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        }
        const first = allIds.find((id) => visible.has(id));
        if (first) setActiveId(first);
      },
      // Band from HEADER_OFFSET below viewport top to 60% down —
      // h2 headings are short so they give a clean entry/exit signal here.
      { rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px` }
    );

    for (const id of allIds) {
      const heading = document.querySelector<Element>(`#${id} h2`);
      if (heading) {
        headingToId.set(heading, id);
        observer.observe(heading);
      }
    }

    return () => observer.disconnect();
  }, [sections, farewellId]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
    setCollapsed(true);
  };

  const items = [
    ...sections.map((s) => ({ id: s.id, label: s.title, emoji: s.emoji })),
    { id: farewellId, label: "Farewell Checklist", emoji: "👋" },
  ];

  return (
    <nav>
      {/* Mobile collapsible header */}
      <button
        className="md:hidden w-full flex items-center justify-between text-sm font-medium text-foreground mb-2 py-2 px-3 rounded-md bg-card border border-border"
        onClick={() => setCollapsed((v) => !v)}
      >
        <span>Contents</span>
        <ChevronDown
          size={16}
          className={cn("transition-transform", !collapsed && "rotate-180")}
        />
      </button>

      <ul
        className={cn(
          "space-y-1 md:block",
          collapsed ? "hidden md:block" : "block"
        )}
      >
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className={cn(
                "w-full text-left text-[13px] font-light px-3 py-[7px] transition-colors duration-[150ms] flex items-center gap-2",
                activeId === item.id
                  ? "font-normal"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={activeId === item.id ? { color: "var(--gold)" } : undefined}
            >
              <span className="text-base shrink-0">{item.emoji}</span>
              <span className="leading-tight">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
