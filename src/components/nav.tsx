"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { ConnectMenu } from "./connect-menu";
import { socialLinks } from "./social-links";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/open-source", label: "Open source" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border-soft">
      <nav
        aria-label="Main"
        className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-[1.0625rem] font-semibold tracking-tight text-heading"
        >
          mukul<span className="text-link">.</span>dev
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href} className="relative">
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative z-10 block px-3 py-1.5 rounded-lg transition-colors ${
                      active ? "text-heading" : "text-muted hover:text-heading"
                    }`}
                  >
                    {l.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden
                      className="absolute inset-0 rounded-lg border border-border bg-chip"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <ConnectMenu />
            </div>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border text-heading"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-border-soft bg-background"
          >
            <ul className="px-5 pt-2 pb-3">
              {navLinks.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-3 border-b border-border-soft ${
                        active ? "text-heading" : "text-muted"
                      }`}
                    >
                      {l.label}
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="px-5 pb-5">
              <p className="text-[0.875rem] text-muted-2 mb-2">Connect</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="col-span-2 flex items-center justify-center h-10 rounded-lg bg-heading text-background font-medium"
                >
                  Email me
                </a>
                {socialLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 h-10 px-3 rounded-lg border border-border text-heading text-[0.9375rem]"
                  >
                    <span className="text-muted">{l.icon}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
