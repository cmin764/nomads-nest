import Link from "next/link";
import FadeIn from "@/components/fade-in";
import { GuideSection as GuideSectionType } from "@/data/guide-content";
import { cn } from "@/lib/utils";

interface GuideSectionProps {
  section: GuideSectionType;
}

export default function GuideSection({ section }: GuideSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-24 mb-12">
      <FadeIn>
        <h2 className="font-heading text-2xl text-foreground mb-5 flex items-center gap-3">
          <span>{section.emoji}</span>
          <span>{section.title}</span>
        </h2>
        <div className="border-l-2 border-border pl-5 space-y-3">
          {section.items.map((item, i) => {
            if (item.heading) {
              return (
                <h3 key={i} className="text-sm font-[500] tracking-[.04em] text-foreground pt-2 first:pt-0" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.text}
                </h3>
              );
            }

            const textClass = cn(
              "text-sm leading-relaxed",
              item.highlight ? "text-primary font-medium" : item.note ? "text-muted-foreground italic" : "text-muted-foreground"
            );

            if (item.url) {
              const isExternal = item.url.startsWith("http");
              return isExternal ? (
                <p key={i} className={textClass}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary transition-colors">
                    {item.text}
                  </a>
                </p>
              ) : (
                <p key={i} className={textClass}>
                  <Link href={item.url} className="underline underline-offset-4 hover:text-primary transition-colors">
                    {item.text}
                  </Link>
                </p>
              );
            }

            return (
              <p key={i} className={textClass}>
                {item.text}
              </p>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
