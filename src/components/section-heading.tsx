import Link from "next/link";

/** Section heading on the About page, with an optional link to the full page. */
export function SectionHeading({ title, href, hrefLabel }: { title: string; href?: string; hrefLabel?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-6">
      <h2 className="text-[1.75rem] leading-tight font-medium tracking-[-0.01em] text-heading">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-[0.9375rem] text-muted hover:text-heading underline-offset-4 hover:underline"
        >
          {hrefLabel ?? "See all"}
        </Link>
      )}
    </div>
  );
}

/** Title block at the top of a dedicated page (Projects, Experience, ...). */
export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <header className="mb-12">
      <h1 className="text-[2.25rem] md:text-[2.5rem] leading-tight font-medium tracking-[-0.015em] text-heading">
        {title}
      </h1>
      {description && <p className="mt-3 text-muted max-w-2xl">{description}</p>}
    </header>
  );
}
