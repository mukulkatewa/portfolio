/** Letter tile standing in for a logo. */
export function Monogram({ name, size = "sm" }: { name: string; size?: "sm" | "lg" }) {
  const dims =
    size === "lg" ? "h-10 w-10 text-[0.9375rem] rounded-lg" : "h-7 w-7 text-[0.75rem] rounded-md";
  return (
    <span
      aria-hidden
      className={`${dims} mt-0.5 shrink-0 inline-flex items-center justify-center font-mono font-semibold bg-chip border border-border text-muted group-hover:text-link transition-colors`}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
