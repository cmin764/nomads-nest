import Link from "next/link";
import FadeIn from "@/components/fade-in";
import { GuideSection as GuideSectionType } from "@/data/guide-content";
import { cn } from "@/lib/utils";
import { LINK_CLASS_BARE } from "@/lib/render-with-links";

interface GuideSectionProps {
  section: GuideSectionType;
}

export default function GuideSection({ section }: GuideSectionProps) {
  const items = section.items;
  return (
    <section id={section.id} className="scroll-mt-24 mb-12">
      <FadeIn>
        {/* Section heading - Cormorant 30px with emoji */}
        <h2 className="font-heading font-light text-[30px] text-foreground mb-2 flex items-center gap-3">
          <span>{section.title}</span>
          <span className="text-[22px]">{section.emoji}</span>
        </h2>

        {/* Items rendered as horizontal rule rows */}
        <div>
          {items.map((item, i) => {
            // Sub-heading: Cormorant italic 19px muted - no icon, no border
            if (item.heading) {
              return (
                <div key={i} className="pt-5 pb-2 first:pt-3">
                  <h3 className="font-heading font-light italic text-[19px] text-nn-muted">
                    {item.text}
                  </h3>
                </div>
              );
            }

            const isLast = (() => {
              // Last non-heading item in the section gets no border
              for (let j = i + 1; j < items.length; j++) {
                if (!items[j].heading) return false;
              }
              return true;
            })();

            const icon = item.highlight ? "⚠" : "→";

            const textNode = item.url ? (
              item.url.startsWith("http") ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer"
                   className={LINK_CLASS_BARE}>
                  {item.text}
                </a>
              ) : (
                <Link href={item.url} className={LINK_CLASS_BARE}>
                  {item.text}
                </Link>
              )
            ) : item.text;

            return (
              <div
                key={i}
                className={cn(
                  "flex gap-[14px] items-start py-[14px] text-[15px] font-light leading-[1.75]",
                  !isLast && "border-b border-border"
                )}
              >
                <span className="shrink-0 mt-[3px] text-[12px] text-[var(--gold-dk)]" aria-hidden>
                  {icon}
                </span>
                <span
                  className={cn(
                    item.highlight ? "font-normal text-[var(--gold-dk)]" : item.note ? "italic text-nn-muted" : "text-nn-muted"
                  )}
                >
                  {textNode}
                </span>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
