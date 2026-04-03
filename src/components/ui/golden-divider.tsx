import { cn } from "@/lib/utils";

export default function GoldenDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("mx-auto w-11 h-px bg-gold", className)}
    />
  );
}
