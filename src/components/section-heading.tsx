import { Reveal } from "./motion-primitives";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-14 md:mb-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[color:var(--muted)] mb-4">
          {eyebrow}
        </p>
        <h2 className="font-sans font-semibold text-3xl md:text-5xl tracking-[-0.02em] text-[color:var(--foreground)]">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
