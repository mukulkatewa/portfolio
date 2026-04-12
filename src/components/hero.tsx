"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden ring-1 ring-gray-200 bg-gray-50"
        >
          <Image
            src="/mukul.jpeg"
            alt="Mukul Katewa"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-[14.5px] text-[color:var(--muted)]"
        >
          Hi! I&apos;m Mukul Katewa{" "}
          <span className="inline-block animate-[wave_1.6s_ease-in-out_infinite] origin-[70%_70%]">
            👋
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-[color:var(--foreground)] mt-5"
        >
          software,
          <br />
          quietly engineered.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-[15.5px] md:text-[16.5px] text-[color:var(--muted)] leading-[1.65]"
        >
          Building backends, distributed systems, and AI-native products.
          Focused on reliability, clean architecture, and quiet, dependable
          software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-8 flex items-center gap-3 flex-wrap justify-center"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 text-[14px] pl-5 pr-2 py-2 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90 transition-opacity"
          >
            connect with me
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={13} />
            </span>
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[14px] pl-5 pr-2 py-2 rounded-full border border-gray-200 text-[color:var(--foreground)] hover:border-gray-400 transition-colors"
          >
            my resume
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 transition-transform group-hover:translate-y-0.5">
              <Download size={13} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
