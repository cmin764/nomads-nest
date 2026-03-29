import { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block text-[10px] font-[400] uppercase tracking-[.16em] rounded-full px-4 py-1.5 mb-12"
      style={{ color: "var(--muted-text)", background: "var(--surface-alt)" }}
    >
      {children}
    </span>
  );
}
