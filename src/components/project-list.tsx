import Link from "next/link";
import type { ProjectDetail } from "@/lib/data";
import { Monogram } from "./monogram";

/** Compact single-line rows, used on the About page. */
export function ProjectListCompact({ items }: { items: ProjectDetail[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/projects/${p.slug}`}
            className="group flex items-center gap-3 py-1.5 -mx-2 px-2 rounded-lg hover:bg-hover transition-colors"
          >
            <Monogram name={p.name} />
            <span className="text-[1.25rem] text-heading shrink-0">{p.name}</span>
            <span className="text-[0.9375rem] text-muted truncate">{p.tagline}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Full rows with description and stack, used on /projects. */
export function ProjectListFull({ items }: { items: ProjectDetail[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/projects/${p.slug}`}
            className="group flex gap-4 p-4 -mx-4 rounded-xl border border-transparent hover:border-border hover:bg-hover transition-colors"
          >
            <Monogram name={p.name} size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-[1.25rem] text-heading group-hover:text-link transition-colors">
                  {p.name}
                </h2>
                <span className="text-[0.9375rem] text-muted shrink-0">{p.period}</span>
              </div>
              <p className="text-[0.875rem] text-muted-2">{p.category}</p>
              <p className="text-muted mt-2">{p.shortDescription}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.stack.slice(0, 5).map((s) => (
                  <span
                    key={s}
                    className="text-[0.8125rem] px-2.5 py-0.5 rounded-md bg-chip text-foreground/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
