export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <span className="sr-only">Loading…</span>
      <div
        className="w-8 h-8 rounded-full border-2 border-divider border-t-gold animate-spin"
        aria-hidden
      />
    </div>
  );
}
