import { profile } from "@/lib/data";
import { Reveal } from "./motion-primitives";

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
    { label: "GitHub", href: profile.socials.github, value: "@mukulkatewa" },
    { label: "LinkedIn", href: profile.socials.linkedin, value: "mukul-katewa" },
    { label: "X", href: profile.socials.x, value: "@katewa_saab" },
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-28 md:py-40 border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--muted)] mb-8">
            Contact
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="font-sans font-semibold text-6xl md:text-8xl lg:text-[120px] leading-[0.95] tracking-[-0.045em] text-[color:var(--foreground)]">
            Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-16 inline-flex items-center gap-3 font-sans font-medium text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-[color:var(--foreground)]"
          >
            <span className="hover-underline">{profile.email}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-10">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col gap-2"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--muted)]">
                  {l.label}
                </span>
                <span className="flex items-center gap-1.5 text-[16px] text-[color:var(--foreground)]">
                  <span className="hover-underline truncate">{l.value}</span>
                  <span className="shrink-0 text-[color:var(--muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-mono text-[12px] text-[color:var(--muted)]">
          <p>© {new Date().getFullYear()} · {profile.name}</p>
          <p>{profile.location} · {profile.phone}</p>
        </div>
      </div>
    </section>
  );
}
