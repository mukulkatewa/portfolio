"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { GithubIcon, LinkedinIcon, XIcon } from "./social-icons";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "open-source", label: "Open Source" },
  { id: "contact", label: "Contact" },
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
          <span className="relative h-11 w-11 rounded-full overflow-hidden ring-1 ring-[color:var(--border)] bg-[color:var(--surface)] shrink-0">
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

        <nav className="mt-12">
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-3 py-2 text-[13px] font-mono uppercase tracking-[0.1em]"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === s.id
                        ? "w-8 bg-[color:var(--accent)]"
                        : "w-4 bg-[color:var(--border-strong)] group-hover:w-8 group-hover:bg-[color:var(--muted)]"
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
          className="group inline-flex items-center gap-2 text-[13.5px] text-[color:var(--foreground)] mb-6"
        >
          <span className="hover-underline">Resume</span>
          <Download size={13} className="text-[color:var(--muted)]" />
        </a>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
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
