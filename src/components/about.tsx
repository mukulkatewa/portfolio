"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="pt-8 md:pt-14 pb-20 md:pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden relative h-20 w-20 rounded-full overflow-hidden ring-1 ring-[color:var(--border)] bg-[color:var(--surface)] mb-6"
      >
        <Image src="/mukul.jpeg" alt="Mukul Katewa" fill sizes="80px" className="object-cover" priority />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--muted)] mb-6"
      >
        Hi, I&apos;m Mukul{" "}
        <span className="inline-block animate-[wave_1.6s_ease-in-out_infinite] origin-[70%_70%]">
          👋
        </span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-[40px] md:text-6xl lg:text-[64px] leading-[1.06] tracking-[-0.02em] text-[color:var(--foreground)]"
      >
        Software,
        <br />
        quietly engineered.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 max-w-xl text-[16px] md:text-[17px] text-[color:var(--muted)] leading-[1.7]"
      >
        Building backends, distributed systems, and AI-native products.
        Currently co-founding{" "}
        <a
          href="https://cloveos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--foreground)] hover-underline"
        >
          CloveOS
        </a>
        , connecting factory machines into a real-time digital twin. Focused
        on reliability, clean architecture, and quiet, dependable software.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.36 }}
        className="mt-9 flex items-center gap-3 flex-wrap"
      >
        <a
          href={`mailto:${profile.email}?subject=Let%27s%20connect`}
          className="group inline-flex items-center gap-2 text-[14px] pl-5 pr-2 py-2 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90 transition-opacity"
        >
          connect with me
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--background)]/15 transition-transform group-hover:translate-x-0.5">
            <ArrowRight size={13} />
          </span>
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group md:hidden inline-flex items-center gap-2 text-[14px] pl-5 pr-2 py-2 rounded-full border border-[color:var(--border)] text-[color:var(--foreground)] hover:border-[color:var(--border-strong)] transition-colors"
        >
          my resume
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--border)] transition-transform group-hover:translate-y-0.5">
            <Download size={13} />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
