"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { GithubIcon, LinkedinIcon, XIcon } from "./social-icons";

const sections = [
  { id: "about", label: "About", index: "00" },
  { id: "experience", label: "Experience", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "open-source", label: "Open Source", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "X", href: profile.socials.x, Icon: XIcon },
];

export function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden md:flex md:flex-col md:justify-between md:h-screen md:sticky md:top-0 md:py-14">
      <div>
        <a href="#about" className="group inline-flex items-center gap-3">
          <span className="relative h-11 w-11 rounded-full overflow-hidden ring-1 ring-[color:var(--border)] group-hover:ring-[color:var(--accent)] transition-colors bg-[color:var(--surface)] shrink-0">
            <Image src="/mukul.jpeg" alt="" fill sizes="44px" className="object-cover" />
          </span>
          <span>
            <span className="block text-[16px] font-semibold tracking-[-0.01em] text-[color:var(--foreground)]">
              {profile.name}
            </span>
            <span className="block text-[13px] text-[color:var(--muted)]">{profile.role}</span>
          </span>
        </a>

        <p className="mt-6 text-[14.5px] leading-[1.6] text-[color:var(--muted)] max-w-[240px]">
          {profile.tagline} — based in {profile.location}.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] pl-2.5 pr-3.5 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[color:var(--foreground)]">
            Building CloveOS
          </span>
        </div>

        <nav className="mt-12">
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-3 py-2 text-[13px] font-mono uppercase tracking-[0.1em]"
                >
                  <span
                    className={`shrink-0 ${
                      active === s.id ? "text-[color:var(--accent)]" : "text-[color:var(--muted-2)]"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === s.id
                        ? "w-6 bg-[color:var(--accent)]"
                        : "w-3 bg-[color:var(--border-strong)] group-hover:w-6 group-hover:bg-[color:var(--muted)]"
                    }`}
                  />
                  <span
                    className={`transition-colors duration-200 ${
                      active === s.id
                        ? "text-[color:var(--foreground)]"
                        : "text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]"
                    }`}
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[13.5px] text-[color:var(--foreground)] hover:text-[color:var(--accent)] transition-colors mb-6"
        >
          <span className="hover-underline">Resume</span>
          <Download size={13} className="text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors" />
        </a>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
            >
              <s.Icon size={16} />
            </a>
          ))}
          <ThemeToggle className="ml-auto" />
        </div>
      </div>
    </aside>
  );
}
