import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "@/lib/data";
import { BrandIcon, LinkedInIcon } from "./social-links";

type Row = { label: string; handle: string; href: string; icon: ReactNode; internal?: boolean };

// Brand-coloured icons, like a contact card. GitHub and X are monochrome
// marks, so they follow the text colour and stay visible in both themes.
const rows: Row[] = [
  {
    label: "LinkedIn",
    handle: "mukul-katewa",
    href: profile.socials.linkedin,
    icon: (
      <span className="text-[#0a66c2]">
        <LinkedInIcon size={18} />
      </span>
    ),
  },
  {
    label: "GitHub",
    handle: "mukulkatewa",
    href: profile.socials.github,
    icon: <MonoIcon slug="github" />,
  },
  {
    label: "X",
    handle: "@katewa_saab",
    href: profile.socials.x,
    icon: <MonoIcon slug="x" />,
  },
  {
    label: "LeetCode",
    handle: "mukulkatewa",
    href: profile.socials.leetcode,
    icon: <BrandIcon slug="leetcode" color="ffa116" size={18} />,
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail size={18} className="text-[#ea4335]" />,
  },
  {
    label: "Resume",
    handle: "PDF",
    href: "/resume",
    internal: true,
    icon: <FileText size={18} className="text-link" />,
  },
];

/** Monochrome brand mark drawn as a CSS mask so it takes the current text colour. */
function MonoIcon({ slug }: { slug: string }) {
  const url = `url(https://cdn.simpleicons.org/${slug})`;
  return (
    <span
      aria-hidden
      className="inline-block h-[18px] w-[18px] bg-heading"
      style={{ maskImage: url, WebkitMaskImage: url, maskSize: "contain", WebkitMaskSize: "contain" }}
    />
  );
}

/** Divided rows: icon + platform on the left, handle on the right. */
export function ContactList() {
  return (
    <ul className="border-t border-border">
      {rows.map((r) => {
        const content = (
          <>
            <span className="inline-flex w-5 justify-center">{r.icon}</span>
            <span className="text-[1.125rem] text-heading underline-offset-4 decoration-1 group-hover:underline">
              {r.label}
            </span>
            <span className="ml-auto text-muted truncate">{r.handle}</span>
          </>
        );
        const cls = "group flex items-center gap-4 py-4";
        return (
          <li key={r.label} className="border-b border-border">
            {r.internal ? (
              <Link href={r.href} className={cls}>
                {content}
              </Link>
            ) : (
              <a
                href={r.href}
                target={r.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={cls}
              >
                {content}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
