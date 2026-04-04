import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/fade-in";
import { CheckInStep } from "@/data/check-in-steps";

function renderWithLinks(
  text: string,
  links?: Array<{ text: string; url: string }>
): React.ReactNode {
  if (!links?.length) return text;
  let parts: React.ReactNode[] = [text];
  for (const { text: match, url } of links) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const idx = part.indexOf(match);
      if (idx === -1) return [part];
      return [
        part.slice(0, idx),
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          {match}
        </Link>,
        part.slice(idx + match.length),
      ];
    });
  }
  return parts;
}

interface StepCardProps {
  step: CheckInStep;
  index: number;
  priority?: boolean;
}

export default function StepCard({ step, index, priority }: StepCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="flex flex-col sm:flex-row gap-4 bg-card border border-border rounded-[14px] overflow-hidden transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_10px_32px_rgba(27,42,74,.09)]">
        <div className="relative sm:w-56 sm:shrink-0 aspect-video sm:aspect-auto">
          <Image
            src={step.image}
            alt={step.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 224px"
            priority={priority}
          />
        </div>
        <div className="flex items-start gap-4 p-[22px_24px]">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-[500] shrink-0 mt-0.5 bg-gold text-cream">
            {index + 1}
          </span>
          <div>
            <h3 className="font-heading font-light text-[19px] text-foreground mb-[7px]">{step.heading}</h3>
            <p className="text-[13px] font-light text-muted-foreground leading-[1.7]">{renderWithLinks(step.description, step.descriptionLinks)}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
