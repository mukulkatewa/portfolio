"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";
import { socialLinks } from "./social-links";

/** Header "Connect" button with a popover of every way to reach me. */
export function ConnectMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 h-9 pl-3.5 pr-4 rounded-lg bg-heading text-background text-[0.9375rem] font-medium hover:opacity-90 transition-opacity"
      >
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inset-0 rounded-full bg-open opacity-60 motion-safe:animate-ping" />
          <span className="relative h-2 w-2 rounded-full bg-open" />
        </span>
        Connect
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 mt-2 w-[19rem] origin-top-right rounded-xl border border-border bg-surface p-2 shadow-[0_16px_40px_-12px_rgb(0_0_0/0.45)]"
          >
            <div className="flex items-center gap-2 rounded-lg px-2.5 py-2">
              <a
                href={`mailto:${profile.email}`}
                className="min-w-0 flex-1 truncate text-[0.9375rem] text-heading hover:underline underline-offset-4"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
                className="inline-flex h-7 items-center gap-1.5 rounded-md border border-border px-2 text-[0.8125rem] text-muted hover:text-heading transition-colors"
              >
                {copied ? <Check size={13} className="text-open" /> : <Copy size={13} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="my-1.5 h-px bg-border" />

            <ul>
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3 rounded-lg px-2.5 py-2 hover:bg-hover transition-colors"
                  >
                    <span className="text-muted group-hover:text-heading transition-colors">
                      {l.icon}
                    </span>
                    <span className="text-[0.9375rem] text-heading">{l.label}</span>
                    <span className="ml-auto text-[0.8125rem] text-muted-2">{l.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
