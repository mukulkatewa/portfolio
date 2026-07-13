"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialDark() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(getInitialDark);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
      className={`inline-flex items-center justify-center h-9 w-9 rounded-full border border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--foreground)] hover:border-[color:var(--border-strong)] transition-colors ${className ?? ""}`}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
