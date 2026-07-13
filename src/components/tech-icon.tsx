/* eslint-disable @next/next/no-img-element */
import type { TechIcon } from "@/lib/data";

export function TechChip({ icon }: { icon: TechIcon }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[13.5px] text-[color:var(--foreground)] hover:border-[color:var(--accent)] transition-colors">
      <img
        src={`https://cdn.simpleicons.org/${icon.slug}/94a3ae`}
        alt=""
        aria-hidden
        width={14}
        height={14}
        className="opacity-90"
      />
      {icon.name}
    </span>
  );
}

export function TechMini({ name }: { name: string }) {
  return (
    <span className="font-mono text-[11px] text-[color:var(--muted)]">
      {name}
    </span>
  );
}
