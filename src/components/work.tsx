"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Projects" title="What I've built" />

        <div className="border-t border-gray-200">
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
              className="border-b border-gray-100"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 -mx-4 px-4 rounded-sm transition-colors duration-200 hover:bg-gray-50"
              >
                <div className="col-span-12 md:col-span-2 flex md:flex-col items-baseline md:items-start gap-3 md:gap-1.5">
                  <span className="font-mono text-[12px] text-[color:var(--muted)]">
                    {p.period}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted-2)]">
                    {p.category}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-[22px] md:text-[24px] font-semibold tracking-[-0.015em] text-[color:var(--foreground)]">
                    {p.name}
                  </h3>
                  <p className="text-[16px] text-[color:var(--muted)] mt-2 leading-[1.65] max-w-xl">
                    {p.shortDescription}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-3 flex flex-col gap-3 md:items-end">
                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-gray-200 text-[color:var(--muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-[13.5px] text-[color:var(--muted)] group-hover:text-[color:var(--foreground)] transition-colors inline-flex items-center gap-1">
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
