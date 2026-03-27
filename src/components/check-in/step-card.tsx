import Image from "next/image";
import FadeIn from "@/components/fade-in";
import { CheckInStep } from "@/data/check-in-steps";

interface StepCardProps {
  step: CheckInStep;
  index: number;
}

export default function StepCard({ step, index }: StepCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="flex flex-col sm:flex-row gap-4 bg-card border border-border rounded-xl overflow-hidden">
        <div className="relative sm:w-56 sm:shrink-0 aspect-video sm:aspect-auto">
          <Image
            src={step.image}
            alt={step.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 224px"
          />
        </div>
        <div className="flex items-start gap-4 p-4 sm:py-5">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-[500] shrink-0 mt-0.5" style={{ background: "var(--gold)", color: "#F5F2EC" }}>
            {index + 1}
          </span>
          <div>
            <h3 className="font-heading text-base text-foreground mb-1">{step.heading}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
