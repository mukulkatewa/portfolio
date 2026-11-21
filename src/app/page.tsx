import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { BrandIcon } from "@/components/social-links";
import { PhotoBooth } from "@/components/photo-booth";

export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center lg:pt-8">
      <div className="intro max-w-xl text-[1.125rem] md:text-[1.25rem] leading-[1.65]">
        <h1 className="text-[2.5rem] md:text-[3.25rem] leading-[1.1] font-semibold tracking-[-0.025em] text-heading">
          {profile.name}
        </h1>

        <p className="mt-5 text-muted">
          Product-focused engineer who ships fast. I turn ideas into polished products and obsess
          over the details that make software feel right.
        </p>

        <p className="mt-4 text-muted">
          I&apos;ve worked on AI, inference, and full-stack web and mobile apps at scale with Python,
          TypeScript, C++, or whatever gets the job done.
        </p>

        <p className="mt-4 text-muted">
          You can reach me at{" "}
          <a
            href={profile.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link inline-flex items-baseline gap-1"
          >
            <span className="self-center inline-flex">
              <BrandIcon slug="x" size={15} />
            </span>
            @katewa_saab
          </a>{" "}
          and via{" "}
          <a
            href={`mailto:${profile.email}`}
            className="prose-link inline-flex items-baseline gap-1"
          >
            <Mail size={16} aria-hidden className="self-center" />
            email
          </a>
          .
        </p>

        <p className="mt-6">
          <span className="text-heading font-medium">Open to work</span>
          <span className="text-muted">: full-time, freelance, or collabs. </span>
          <a
            href={`mailto:${profile.email}?subject=Let%27s%20talk`}
            className="text-heading font-medium underline underline-offset-4 decoration-2 hover:text-link transition-colors"
          >
            Let&apos;s talk.
          </a>
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <PhotoBooth src="/mukul.jpeg" alt={profile.name} />
      </div>
    </section>
  );
}
