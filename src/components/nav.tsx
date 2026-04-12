"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { profile } from "@/lib/data";

const links = [
  { href: "/#work", label: "Projects" },
  { href: "/#open-source", label: "Open Source" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/75 border-b border-gray-100"
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-[color:var(--foreground)]"
        >
          mukul.dev
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-[14px] text-[color:var(--muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[color:var(--foreground)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--foreground)] transition-colors"
            >
              Resume ↗
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
