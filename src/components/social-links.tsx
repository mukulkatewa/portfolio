/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { profile } from "@/lib/data";

/**
 * Brand glyphs from Simple Icons. Defaults to a grey that reads on both themes;
 * pass `color` (hex without #) for the brand's own colour.
 */
export function BrandIcon({
  slug,
  size = 16,
  color = "8b8f96",
}: {
  slug: string;
  size?: number;
  color?: string;
}) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      aria-hidden
      width={size}
      height={size}
    />
  );
}

// Simple Icons no longer ships LinkedIn, so inline its mark.
export function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export type SocialLink = { label: string; handle: string; href: string; icon: ReactNode };

export const socialLinks: SocialLink[] = [
  { label: "GitHub", handle: "mukulkatewa", href: profile.socials.github, icon: <BrandIcon slug="github" /> },
  { label: "LinkedIn", handle: "mukul-katewa", href: profile.socials.linkedin, icon: <LinkedInIcon /> },
  { label: "X", handle: "@katewa_saab", href: profile.socials.x, icon: <BrandIcon slug="x" /> },
  { label: "LeetCode", handle: "mukulkatewa", href: profile.socials.leetcode, icon: <BrandIcon slug="leetcode" /> },
];
