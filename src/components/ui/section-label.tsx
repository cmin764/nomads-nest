import { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-normal uppercase tracking-[.16em] rounded-full px-4 py-1.5 mb-12 text-nn-muted bg-surface-alt">
      {children}
    </span>
  );
}
