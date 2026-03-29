"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GuideSection } from "@/data/guide-content";

interface TableOfContentsProps {
  sections: GuideSection[];
  farewellId: string;
}

export default function TableOfContents({ sections, farewellId }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [collapsed, setCollapsed] = useState(true);

  const allIds = useMemo(
    () => [...sections.map((s) => s.id), farewellId],
    [sections, farewellId]
  );

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 120;
    let current = allIds[0];
    for (const id of allIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    }
    setActiveId(current);
  }, [allIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setCollapsed(true);
  };

  const items = [
    ...sections.map((s) => ({ id: s.id, label: s.title, emoji: s.emoji })),
    { id: farewellId, label: "Farewell Checklist", emoji: "✅" },
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
                  ? "font-[400]"
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
