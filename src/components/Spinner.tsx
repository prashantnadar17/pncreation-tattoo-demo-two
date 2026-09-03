/** Route-level loading indicator (Tailwind animate-spin). */
export function Spinner({ label = "Loading" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-5"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-accent" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

export function RoutePending() {
  return <Spinner />;
}
