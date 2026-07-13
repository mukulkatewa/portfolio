import { Reveal } from "./motion-primitives";

export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-14 md:mb-16">
        <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--muted)] mb-4">
          <span className="text-[color:var(--accent)]">{index}</span>
          {eyebrow}
        </p>
        <h2 className="font-sans font-semibold text-3xl md:text-5xl tracking-[-0.02em] text-[color:var(--foreground)]">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
