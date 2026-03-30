import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import type { LegalPage } from "@/data/legal-content";

export default function LegalPageLayout({ content }: { content: LegalPage }) {
  const { title, lastUpdated, sections } = content;
  return (
    <div className="mx-auto max-w-[760px] px-4 sm:px-6 py-20">
      <FadeIn>
        <h1
          className="font-heading italic font-light text-[clamp(40px,5vw,56px)] leading-tight mb-3"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h1>
        <p className="text-[13px] font-light mb-8" style={{ color: "var(--muted-text)" }}>
          Last updated: {lastUpdated}
        </p>
        <GoldenDivider className="mb-12" />

        {sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2
              className="font-heading font-light text-[22px] mb-4"
              style={{ color: "var(--text)" }}
            >
              {section.heading}
            </h2>
            {section.body.map((para, i) => (
              <p
                key={i}
                className="text-[15px] font-light leading-relaxed mb-3"
                style={{ color: "var(--muted-text)" }}
              >
                {para}
              </p>
            ))}
          </section>
        ))}
      </FadeIn>
    </div>
  );
}
