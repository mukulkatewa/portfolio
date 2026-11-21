"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

// Photo Booth-style effects, applied as CSS filters to the same portrait.
const effects = [
  { name: "Normal", filter: "none" },
  { name: "Black & white", filter: "grayscale(1) contrast(1.05)" },
  { name: "Sepia", filter: "sepia(0.85) contrast(1.05)" },
  { name: "High contrast", filter: "grayscale(1) contrast(1.6) brightness(1.05)" },
  { name: "Cool", filter: "saturate(0.6) hue-rotate(185deg) brightness(1.05)" },
  { name: "Thermal", filter: "invert(1) hue-rotate(180deg) saturate(2.2)" },
];

/** A portrait framed like macOS Photo Booth: pick an effect, press the shutter. */
export function PhotoBooth({ src, alt }: { src: string; alt: string }) {
  const [active, setActive] = useState(0);
  const [flashKey, setFlashKey] = useState(0);

  return (
    <figure className="w-full max-w-[26rem] rounded-xl border border-border bg-surface overflow-hidden shadow-[0_24px_60px_-24px_rgb(0_0_0/0.6)]">
      <figcaption className="px-3 py-1.5 text-[0.75rem] text-muted-2 select-none">Photo Booth</figcaption>

      <div className="relative aspect-[4/3.6] bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 416px, 90vw"
          className="object-cover object-[50%_22%] transition-[filter] duration-300"
          style={{ filter: effects[active].filter }}
        />
        {flashKey > 0 && (
          <span
            key={flashKey}
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-white animate-[shutter_0.45s_ease-out_forwards]"
          />
        )}
      </div>

      <div role="radiogroup" aria-label="Photo effect" className="flex gap-1 bg-black/90 p-1 overflow-x-auto">
        {effects.map((e, i) => (
          <button
            key={e.name}
            type="button"
            role="radio"
            aria-checked={i === active}
            aria-label={e.name}
            title={e.name}
            onClick={() => setActive(i)}
            className={`relative h-12 flex-1 min-w-12 overflow-hidden rounded-[3px] transition-opacity ${
              i === active ? "ring-2 ring-link opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="64px"
              className="object-cover object-[50%_22%]"
              style={{ filter: e.filter }}
            />
          </button>
        ))}
      </div>

      <div className="relative flex items-center justify-between bg-black/90 px-3 py-2 text-[0.75rem] text-white/60">
        <span>{effects[active].name}</span>
        <button
          type="button"
          onClick={() => setFlashKey((k) => k + 1)}
          aria-label="Take photo"
          className="absolute left-1/2 -translate-x-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
        >
          <Camera size={16} />
        </button>
        <span>Effects</span>
      </div>
    </figure>
  );
}
