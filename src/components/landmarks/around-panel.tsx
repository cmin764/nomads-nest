import { Bus, CreditCard } from "lucide-react";
import type { LocalRoute } from "@/data/transport-content";

interface AroundPanelProps {
  gettingAroundRoutes: LocalRoute[];
  gettingAroundTitle: string;
  gettingAroundFooter: { label: string; url: string };
  closestStopName: string;
  gettingAroundTips: string[];
  smartCardTip: { text: string; label: string; url: string };
}

export default function AroundPanel({
  gettingAroundRoutes,
  gettingAroundTitle,
  gettingAroundFooter,
  closestStopName,
  gettingAroundTips,
  smartCardTip,
}: AroundPanelProps) {
  return (
    <div className="max-w-[680px] mx-auto">
      <h2 className="font-heading font-light text-[clamp(22px,2.5vw,28px)] mb-6 text-nn-text text-center">
        {gettingAroundTitle}
      </h2>
      <div className="rounded-2xl border border-divider bg-surface p-6 sm:p-8 mb-8">
        <ul className="space-y-3">
          {gettingAroundRoutes.map((route) => (
            <li key={route.number} className="flex items-start gap-3 text-[14px] font-light text-nn-muted">
              <Bus size={15} className="text-gold mt-0.5 shrink-0" />
              <span>
                <span className="text-nn-text font-normal">{route.number}</span>: {route.description}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12px] font-light text-nn-muted">
          Closest stop: {closestStopName}. Full timetables at{" "}
          <a href={gettingAroundFooter.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            {gettingAroundFooter.label}
          </a>
          .
        </p>
      </div>

      <div className="flex items-start gap-3 rounded-2xl px-6 py-5 mb-8 border border-gold/30 bg-[var(--gold-lt)]">
        <CreditCard size={18} className="text-gold mt-0.5 shrink-0" />
        <p className="text-[13px] font-light leading-[1.7] text-nn-text">
          {smartCardTip.text}{" "}
          <a href={smartCardTip.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            {smartCardTip.label}
          </a>
          .
        </p>
      </div>

      <ul className="space-y-3">
        {gettingAroundTips.map((tip) => (
          <li key={tip} className="flex items-start gap-2 text-[13px] font-light leading-[1.7] text-nn-muted">
            <span className="text-gold mt-1">·</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
