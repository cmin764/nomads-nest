import Link from "next/link";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import type { LegalPage, LegalSegment } from "@/data/legal-content";

function slugify(heading: string) {
  return heading
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function renderBodyItem(item: string | LegalSegment[], index: number) {
  if (typeof item === "string") {
    return (
      <p
        key={index}
        className="text-[15px] font-light leading-relaxed mb-3 text-nn-muted"
      >
        {item}
      </p>
    );
  }

  return (
    <p
      key={index}
      className="text-[15px] font-light leading-relaxed mb-3 text-nn-muted"
    >
      {item.map((segment, i) => {
        if (typeof segment === "string") return segment;
        if (typeof segment !== "object" || segment === null) return null;
        if ("code" in segment) {
          return (
            <code key={i} className="font-mono text-[13px] bg-surface-alt px-1 py-0.5 rounded">
              {segment.code}
            </code>
          );
        }
        const isInternal = segment.href.startsWith("/");
        return isInternal ? (
          <Link
            key={i}
            href={segment.href}
            className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {segment.text}
          </Link>
        ) : (
          <a
            key={i}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {segment.text}
          </a>
        );
      })}
    </p>
  );
}

export default function LegalPageLayout({ content }: { content: LegalPage }) {
  const { title, lastUpdated, sections } = content;
  return (
    <div className="mx-auto max-w-[760px] px-4 sm:px-6 py-20">
      <FadeIn>
        <h1 className="font-heading italic font-light text-[clamp(40px,5vw,56px)] leading-tight mb-3 text-nn-text">
          {title}
        </h1>
        <p className="text-[13px] font-light mb-8 text-nn-muted">
          Last updated: {lastUpdated}
        </p>
        <GoldenDivider className="mb-12" />

        {sections.map((section) => (
          <section key={section.heading} id={slugify(section.heading)} className="mb-10">
            <h2 className="font-heading font-light text-[22px] mb-4 text-nn-text">
              {section.heading}
            </h2>
            {section.body.map((item, i) => renderBodyItem(item, i))}
          </section>
        ))}
      </FadeIn>
    </div>
  );
}
