import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/lib/data";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/motion-primitives";

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
    title: `${p.name} — Mukul Katewa`,
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

  return (
    <main>
      <Nav />

      <article className="pt-28 pb-24 md:pt-44 md:pb-36 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.15em] text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors mb-14"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            All Projects
          </Link>

          <Reveal>
            <h1 className="font-sans font-semibold text-[44px] md:text-7xl leading-[1.04] tracking-[-0.035em] text-[color:var(--foreground)] break-words">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 text-[18px] md:text-[20px] text-[color:var(--muted)] leading-[1.5] max-w-2xl">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-8 flex items-center gap-3 flex-wrap text-[14px]">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  Link
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[color:var(--foreground)]"
                >
                  <Code2 size={14} />
                  <span className="hover-underline">View Source</span>
                </a>
              )}
            </div>
          </Reveal>

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-8 space-y-14">
              <Prose title="Overview" body={project.overview} />

              {project.architecture && (
                <ArchSection items={project.architecture} />
              )}

              <LearnSection items={project.learnings} />
            </div>

            <aside className="md:col-span-4 space-y-4 md:sticky md:top-24 self-start">
              <SidebarPanel title="Key Features">
                <ul className="space-y-4">
                  {project.highlights.map((h, i) => (
                    <li key={h} className="flex gap-3 text-[14px] leading-[1.65] text-[color:var(--muted)]">
                      <span className="font-mono text-[11px] text-[color:var(--muted-2)] pt-0.5 w-5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[color:var(--foreground)]">{h}</span>
                    </li>
                  ))}
                </ul>
              </SidebarPanel>

              <SidebarPanel title="Tech Stack">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11.5px] px-2.5 py-1 rounded-full border border-gray-200 text-[color:var(--muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </SidebarPanel>

              <SidebarPanel title="Links">
                <ul className="space-y-3 text-[14px]">
                  {project.live && (
                    <li>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[color:var(--foreground)]"
                      >
                        <ExternalLink size={13} className="text-[color:var(--muted)]" />
                        <span className="hover-underline">Live demo</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                      </a>
                    </li>
                  )}
                  {project.repo && (
                    <li>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[color:var(--foreground)]"
                      >
                        <Code2 size={13} className="text-[color:var(--muted)]" />
                        <span className="hover-underline">GitHub Repository</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                      </a>
                    </li>
                  )}
                </ul>
              </SidebarPanel>

              <SidebarPanel title="Meta">
                <dl className="space-y-3 text-[13.5px]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-[color:var(--muted)]">Category</dt>
                    <dd className="text-[color:var(--foreground)] text-right">{project.category}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[color:var(--muted)]">Year</dt>
                    <dd className="text-[color:var(--foreground)] text-right">{project.period}</dd>
                  </div>
                </dl>
              </SidebarPanel>
            </aside>
          </div>

          <Reveal>
            <div className="mt-28 pt-10 border-t border-gray-200 flex items-center justify-between gap-4">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 text-[15px] text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
              >
                <ArrowLeft
                  size={15}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
                All projects
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 text-[15px] text-[color:var(--foreground)]"
              >
                <span className="hover-underline">Get in touch</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </main>
  );
}

function Prose({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <Reveal>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[color:var(--foreground)] mb-5">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <p className="text-[17px] md:text-[18px] leading-[1.8] text-[color:var(--muted)]">
          {body}
        </p>
      </Reveal>
    </section>
  );
}

function ArchSection({ items }: { items: string[] }) {
  return (
    <section>
      <Reveal>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[color:var(--foreground)] mb-5">
          Architecture
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <ol className="space-y-4">
          {items.map((h, i) => (
            <li key={h} className="flex gap-5 text-[17px] leading-[1.75] text-[color:var(--muted)]">
              <span className="font-mono text-[12px] text-[color:var(--muted-2)] pt-[0.45em] w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

function LearnSection({ items }: { items: string[] }) {
  return (
    <section>
      <Reveal>
        <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[color:var(--foreground)] mb-5">
          What I learned
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <ul className="space-y-4">
          {items.map((h) => (
            <li key={h} className="flex gap-4 text-[17px] leading-[1.75] text-[color:var(--muted)]">
              <span className="mt-[0.75em] h-[2px] w-[14px] shrink-0 bg-[color:var(--foreground)]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function SidebarPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--muted-2)] mb-4 pb-3 border-b border-gray-100">
        {title}
      </p>
      {children}
    </div>
  );
}
