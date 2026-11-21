import { Trophy } from "lucide-react";
import { awards } from "@/lib/data";

export function AwardsList() {
  return (
    <ul className="flex flex-col gap-4">
      {awards.map((a) => (
        <li key={a.title} className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-chip border border-border text-muted">
            <Trophy size={13} />
          </span>
          <div>
            <p className="text-heading leading-snug">{a.title}</p>
            <p className="text-[0.9375rem] text-muted">{a.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
