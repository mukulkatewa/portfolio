import type { TechIcon } from "@/lib/data";
import { BrandIcon } from "./social-links";

export function TechChip({ icon }: { icon: TechIcon }) {
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-chip text-[0.875rem] text-foreground">
      <BrandIcon slug={icon.slug} size={13} />
      {icon.name}
    </span>
  );
}
