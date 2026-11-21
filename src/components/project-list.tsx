import Link from "next/link";
import type { ProjectDetail } from "@/lib/data";
import { Monogram } from "./monogram";

const groups: ProjectDetail["group"][] = ["AI", "Systems", "Apps"];

/** Compact rows grouped by kind, used on /projects: icon, name, one line. */
export function ProjectListFull({ items }: { items: ProjectDetail[] }) {
  return (
    <div className="flex flex-col gap-12">
      {groups.map((g) => {
        const inGroup = items.filter((p) => p.group === g);
        if (inGroup.length === 0) return null;
        return (
          <section key={g} aria-labelledby={`group-${g}`}>
            <h2
              id={`group-${g}`}
              className="text-[0.875rem] font-medium tracking-[0.06em] uppercase text-muted pb-3 border-b border-border"
            >
              {g}
            </h2>
            <ul className="divide-y divide-border border-b border-border">
              {inGroup.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group flex gap-3.5 py-4 -mx-3 px-3 hover:bg-hover transition-colors"
                  >
                    <Monogram name={p.name} />
                    <div className="min-w-0">
                      <h3 className="text-[1.1875rem] font-medium text-heading leading-snug group-hover:text-link transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-0.5 text-[0.9375rem] leading-[1.6] text-muted">
                        {p.shortDescription}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
