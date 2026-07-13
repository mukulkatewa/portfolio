import { openSource } from "@/lib/data";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./section-heading";

export function OpenSource() {
  return (
    <section
      id="open-source"
      className="px-5 md:px-10 py-20 md:py-32 border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Open Source" title="Contributions" />

        <div className="border-t border-gray-200">
          {openSource.map((o) => (
            <Reveal key={o.project}>
              <a
                href={o.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 border-b border-gray-100 -mx-4 px-4 rounded-sm transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="col-span-12 md:col-span-2 flex md:flex-col items-baseline gap-3 md:gap-1">
                  <span className="font-mono text-[12px] text-[color:var(--muted)]">
                    3 PRs
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted-2)]">
                    Merged
                  </span>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-[22px] md:text-[24px] font-semibold tracking-[-0.015em] text-[color:var(--foreground)]">
                    {o.project}
                  </h3>
                  <p className="text-[13px] text-[color:var(--muted-2)] font-mono mt-1">
                    {o.org}
                  </p>
                  <p className="text-[16px] text-[color:var(--muted)] mt-3 leading-[1.65] max-w-xl">
                    {o.description}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right flex md:justify-end">
                  <span className="text-[13.5px] text-[color:var(--muted)] group-hover:text-[color:var(--foreground)] transition-colors inline-flex items-center gap-1">
                    View PRs
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
