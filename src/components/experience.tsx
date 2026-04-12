"use client";

import { motion } from "motion/react";
import { experience, awards, stack } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";
import { TechChip } from "./tech-icon";

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Background" title="Experience & recognition" />

        <div className="border-t border-gray-200">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-gray-100 py-7 md:py-8 grid grid-cols-12 gap-4 md:gap-8"
            >
              <div className="col-span-12 md:col-span-2 flex md:flex-col items-baseline gap-3 md:gap-1">
                <span className="font-mono text-[12px] text-[color:var(--muted)]">
                  {job.period}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted-2)]">
                  {job.location}
                </span>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h3 className="text-[22px] md:text-[24px] font-semibold tracking-[-0.015em] text-[color:var(--foreground)]">
                  {job.company}
                </h3>
                <p className="text-[14px] text-[color:var(--muted)] mt-1">
                  {job.role}
                </p>
                <p className="text-[16px] text-[color:var(--muted)] mt-4 leading-[1.7] max-w-3xl">
                  {job.summary}
                </p>
              </div>
            </motion.div>
          ))}

          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-gray-100 py-7 md:py-8 grid grid-cols-12 gap-4 md:gap-8"
            >
              <div className="col-span-12 md:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted-2)]">
                  Recognition
                </span>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h3 className="text-[18px] font-medium text-[color:var(--foreground)]">
                  {a.title}
                </h3>
                <p className="text-[14.5px] text-[color:var(--muted)] mt-1.5">
                  {a.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-[color:var(--muted)] mb-6">
            Stack
          </p>
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((s) => (
                <TechChip key={s.slug} icon={s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
