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
        <div className="border-l-2 border-border pl-5 space-y-4">
          {section.items.map((item, i) => (
            <p
              key={i}
              className={cn(
                "text-sm leading-relaxed",
                item.highlight
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
