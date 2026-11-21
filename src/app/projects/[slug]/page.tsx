import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="max-w-3xl">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-[0.9375rem] text-muted hover:text-heading transition-colors mb-10"
      >
        <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
        Projects
      </Link>

      <h1 className="text-[2.25rem] md:text-[2.75rem] leading-tight font-medium tracking-[-0.015em] text-heading break-words">
        {project.name}
      </h1>
      <p className="mt-3 text-[1.25rem] text-muted leading-[1.5]">{project.tagline}</p>
      <p className="mt-2 text-[0.9375rem] text-muted-2">
        {project.category}, {project.period}
      </p>

      <div className="mt-7 flex items-center gap-3 flex-wrap text-[0.9375rem]">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-heading text-background font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} />
            Open live demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border text-heading hover:bg-hover transition-colors"
          >
            <Code2 size={14} />
            View source
          </a>
        )}
      </div>

      {project.metrics && (
        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-px rounded-xl overflow-hidden border border-border bg-border">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-surface px-4 py-3.5">
              <dt className="text-[0.8125rem] text-muted">{m.label}</dt>
              <dd className="mt-0.5 font-medium text-heading">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-14 space-y-14">
        <Block title="Overview">
          <p className="leading-[1.8] text-foreground/90">{project.overview}</p>
        </Block>

        <Block title="What it does">
          <BulletList items={project.highlights} />
        </Block>

        {project.architecture && (
          <Block title="How it works">
            {/* Architecture entries describe a request flow, so they are numbered. */}
            <ol className="space-y-3.5">
              {project.architecture.map((h, i) => (
                <li key={h} className="flex gap-4 leading-[1.75] text-foreground/90">
                  <span className="mt-[0.2em] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-[0.75rem] text-muted">
                    {i + 1}
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ol>
          </Block>
        )}

        <Block title="What I learned">
          <BulletList items={project.learnings} />
        </Block>

        <Block title="Built with">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-[0.875rem] px-2.5 py-0.5 rounded-lg bg-chip text-foreground">
                {s}
              </span>
            ))}
          </div>
        </Block>
      </div>

      <nav aria-label="More projects" className="mt-20 pt-8 border-t border-border flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-[0.9375rem] text-muted hover:text-heading transition-colors"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>
        <Link href={`/projects/${nextProject.slug}`} className="group text-right">
          <span className="block text-[0.8125rem] text-muted-2">Next project</span>
          <span className="text-heading group-hover:text-link transition-colors">{nextProject.name}</span>
        </Link>
      </nav>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[1.5rem] font-medium text-heading mb-5">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((h) => (
        <li key={h} className="flex gap-4 leading-[1.75] text-foreground/90">
          <span aria-hidden className="mt-[0.75em] h-1 w-1 shrink-0 rounded-full bg-muted-2" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}
