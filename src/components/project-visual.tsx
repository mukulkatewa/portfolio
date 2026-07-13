const PALETTES = [
  ["#3452d1", "#8ba1ff"],
  ["#0f766e", "#5eead4"],
  ["#9333ea", "#d8b4fe"],
  ["#b45309", "#fcd34d"],
  ["#be123c", "#fda4af"],
  ["#1e3a8a", "#60a5fa"],
  ["#166534", "#86efac"],
];

function hashString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function ProjectVisual({
  seed,
  className,
}: {
  seed: string;
  className?: string;
}) {
  const [from, to] = PALETTES[hashString(seed) % PALETTES.length];
  const angle = 45 + (hashString(seed + "a") % 90);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from} 0%, ${to} 100%)`,
        backgroundColor: from,
      }}
      aria-hidden
    >
      <div
        className="h-full w-full mix-blend-overlay opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 10px)",
        }}
      />
    </div>
  );
}
