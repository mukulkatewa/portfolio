"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { ProjectVisual } from "./project-visual";

export function Work() {
  return (
    <section id="work" className="py-20 md:py-32 border-t border-[color:var(--border-soft)]">
      <div>
        <SectionHeading index="02" eyebrow="Projects" title="What I've built" />

        <div className="border-t border-[color:var(--border)]">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-[color:var(--border-soft)]"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group grid grid-cols-12 gap-3 md:gap-8 py-6 md:py-8 -mx-3 px-3 md:-mx-4 md:px-4 rounded-sm transition-colors duration-200 hover:bg-[color:var(--surface)]"
              >
                <div className="col-span-12 md:col-span-2 flex md:flex-col items-baseline md:items-start gap-3 md:gap-1.5">
                  <span className="font-mono text-[12px] text-[color:var(--muted)]">
                    {p.period}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted-2)]">
                    {p.category}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-7 flex gap-4 md:gap-5">
                  <ProjectVisual
                    seed={p.category}
                    className="hidden sm:block h-11 w-11 md:h-12 md:w-12 shrink-0 rounded-lg overflow-hidden mt-1"
                  />
                  <div>
                    <h3 className="text-[22px] md:text-[24px] font-semibold tracking-[-0.015em] text-[color:var(--foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-[16px] text-[color:var(--muted)] mt-2 leading-[1.65] max-w-xl">
                      {p.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 flex items-center justify-between md:flex-col md:items-end md:justify-start gap-3">
                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[color:var(--border)] text-[color:var(--muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-[13.5px] text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors inline-flex items-center gap-1 shrink-0">
                    View
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
