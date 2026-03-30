export default function GoldenDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto${className ? ` ${className}` : ""}`}
      style={{ width: "44px", height: "1px", background: "var(--gold)" }}
    />
  );
}
