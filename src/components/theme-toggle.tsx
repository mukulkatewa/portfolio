"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialLight() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("light");
}

export function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(getInitialLight);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      suppressHydrationWarning
      className={`inline-flex items-center justify-center h-9 w-9 rounded-full border border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--foreground)] hover:border-[color:var(--border-strong)] transition-colors ${className ?? ""}`}
    >
      {light ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
