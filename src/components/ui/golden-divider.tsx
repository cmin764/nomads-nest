import { cn } from "@/lib/utils";

export default function GoldenDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("mx-auto", className)}
      style={{ width: "44px", height: "1px", background: "var(--gold)" }}
    />
  );
}
