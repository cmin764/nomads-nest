import Image from "next/image";
import type { Metadata } from "next";
import { ShieldCheck, Cctv } from "lucide-react";
import FadeIn from "@/components/fade-in";
import GoldenDivider from "@/components/ui/golden-divider";
import { safetyIntro, safetyMeasures, emergencyNote } from "@/data/safety-content";

export const metadata: Metadata = {
  title: "Safety at Nomad's Nest",
  description:
    "Every safety measure at Nomad's Nest: CO detector, smoke detector, fire extinguisher, first aid kit, and more.",
};

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-20">

      {/* ── Header ── */}
      <FadeIn>
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <ShieldCheck size={36} strokeWidth={1} style={{ color: "var(--gold)" }} />
          </div>
          <h1
            className="font-heading font-light text-[clamp(36px,5vw,60px)] leading-[1.1] mb-3"
            style={{ color: "var(--text)" }}
          >
            Your Peace of Mind
          </h1>
          <p
            className="font-heading italic font-light text-[16px] mb-8 leading-[1.7]"
            style={{ color: "var(--muted-text)" }}
          >
            {safetyIntro}
          </p>
          <GoldenDivider />
        </div>
      </FadeIn>

      {/* ── Safety measures grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {safetyMeasures.map((measure, i) => (
          <FadeIn key={measure.title} delay={i * 0.07}>
            <div
              className="rounded-2xl overflow-hidden border h-full flex flex-col"
              style={{ borderColor: "var(--divider)", background: "var(--surface)" }}
            >
              <div
                className="relative aspect-[4/3] overflow-hidden flex-shrink-0 flex items-center justify-center"
                style={{ background: "var(--surface-alt)" }}
              >
                {measure.image ? (
                  <Image
                    src={measure.image.src}
                    alt={measure.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    {...(i < 3 && { priority: true })}
                  />
                ) : (
                  <Cctv size={64} strokeWidth={1} style={{ color: "var(--gold)" }} />
                )}
              </div>
              <div className="px-6 py-5 flex-1">
                <h2
                  className="font-heading italic font-light text-[20px] mb-3"
                  style={{ color: "var(--text)" }}
                >
                  {measure.title}
                </h2>
                <p
                  className="text-[13px] font-light leading-[1.75]"
                  style={{ color: "var(--muted-text)" }}
                >
                  {measure.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── Emergency note ── */}
      <FadeIn>
        <div
          className="rounded-2xl px-8 py-6 text-center border"
          style={{ borderColor: "var(--divider)", background: "var(--surface-alt)" }}
        >
          <p
            className="text-[13px] font-light leading-[1.75] mb-3"
            style={{ color: "var(--muted-text)" }}
          >
            {emergencyNote.callout}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {emergencyNote.contacts.map((c) => (
              <a
                key={c.mapsUrl}
                href={c.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-light leading-[1.75] hover:underline"
                style={{ color: "var(--gold)" }}
              >
                {c.name}
                <span className="block text-[12px]" style={{ color: "var(--muted-text)" }}>
                  {c.detail}
                </span>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
